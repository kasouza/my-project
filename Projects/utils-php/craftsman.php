<?php

/**
 * craftsman.php
 *
 * Poor mans' artisan
 *
 * A script to help with a few common things, such as:
 *     - Migrations
 *     - Symlinking storage to public folder
 *
 * @package   craftsman.php
 * @author    kasouza
 * @copyright 2023 kasouza
 * @license   https://opensource.org/license/mit/ MIT
 * @version   CVS: 1.0.0
 */

/**
 * CONFIGS
 */

define('CONF_ENV_VAR_NAME_DB_HOST', 'DB_HOST');
define('CONF_ENV_VAR_NAME_DB_USER', 'DB_USER');
define('CONF_ENV_VAR_NAME_DB_PASS', 'DB_PASS');
define('CONF_ENV_VAR_NAME_DB_NAME', 'DB_NAME');
define('CONF_ENV_VAR_NAME_DB_PORT', 'DB_PORT');
define('CONF_ENV_VAR_NAME_STORAGE_LINK_TARGET', 'STORAGE_LINK_TARGET');
define('CONF_ENV_VAR_NAME_STORAGE_LINK', 'STORAGE_LINK');

define('CONF_STORAGE_LINK_TARGET', __DIR__ . config(CONF_ENV_VAR_NAME_STORAGE_LINK, true, '/storage'));
define('CONF_STORAGE_LINK', __DIR__ . config(CONF_ENV_VAR_NAME_STORAGE_LINK, true, '/public/storage'));

/**
 * END CONFIGS
 */

function readEnvFile()
{
    $envFile = __DIR__ . '/.env';

    if (!file_exists($envFile)) {
        printf(".env file not found\n");
        die();
    }

    $contents = file_get_contents($envFile);

    $lines = explode("\n", $contents);

    global $_ENV;
    $_ENV = [];

    foreach ($lines as $line) {
        $configArray = explode('=', $line);

        if (empty($configArray[0])) {
            continue;
        }

        $key = $configArray[0];
        $value = '';

        if (isset($configArray[1])) {
            $value = $configArray[1];

            $value = trim(str_replace([ '"', "'" ], '', $value));

            if ($value === 'true') {
                $value = true;
            } else if ($value === 'false') {
                $value = false;
            } else if (is_numeric($value)) {
                $intVal =  intval($value);
                $floatVal = floatval($value);

                if ($intVal != $floatVal) {
                    $value = $floatVal;
                } else {
                    $value = $intVal;
                }
            }
        }

        $_ENV[$key] = $value;
    }
}

function config(string $name, bool $optional = false, mixed $default = null)
{
    if (!isset($_ENV[$name])) {
        if ($optional) {
            return $default;
        }

        printf("Config not set in .env file: \"%s\"\n", $name);
        die();
    }

    return $_ENV[$name];
}

function join_paths()
{
    $paths = array();

    foreach (func_get_args() as $arg) {
        if ($arg !== '') { $paths[] = $arg; 
        }
    }

    return preg_replace('#/+#', '/', join('/', $paths));
}

function read_dir_custom(string $dir, bool $reverse = false)
{
    return array_values(array_diff(scandir($dir, $reverse ? 1 : 0), ['..', '.', '.gitkeep']));
}

function getDbConnection(): mysqli
{
    $host = config(CONF_ENV_VAR_NAME_DB_HOST);
    $user = config(CONF_ENV_VAR_NAME_DB_USER);
    $password = config(CONF_ENV_VAR_NAME_DB_PASS);
    $dbName = config(CONF_ENV_VAR_NAME_DB_NAME);
    $port = config(CONF_ENV_VAR_NAME_DB_PORT, true);

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $mysqli = new mysqli($host, $user, $password, $dbName, $port);
    return $mysqli;
}

class Command
{
    public function __construct(
        private string $name
    ) {
    }

    public function exec(array $options): bool
    {
        $options = $options;
        throw new Error('Not implemented');
        return false;
    }

    public function getName(): string
    {
        return $this->name;
    }
}

class CommandManager
{
    private array $commands = [];

    /*
     * Regiter a command to be called when the command string is: <$namespace>:<$commandName>
     * @param string $namespace String to be used as the namespace for a command 
     * @param Command $command
     */
    public function register(string $namespace, Command $command)
    {
        $name = $command->getName();

        if (empty($this->commands[$namespace])) {
            $this->commands[$namespace] = [];
        }

        if (!empty($this->commands[$namespace][$name])) {
            throw new Error('Command has already been registered: ' . $name);
        }

        $this->commands[$namespace][$name] = $command;
    }

    /*
     * @param string $commandString in the format <$namespace>:<$commandName>
     * @param array<string, string> $options options to be passed to the Command exec function
     *
     * @return bool wheter or not the command execution was sucessfull
     *
     */
    public function execCommandString(string $commandString, array $options): bool
    {
        $commandArray = explode(':', trim($commandString));
        if (count($commandArray) !== 2) {
            return false;
        }

        $namespaceString = trim($commandArray[0]);
        $commandName = trim($commandArray[1]);

        if (empty($this->commands[$namespaceString])) {
            printf("Command not found: \"{$commandName}\"\n");
            return false;
        }

        if (empty($this->commands[$namespaceString][$commandName])) {
            printf("Command not found: \"{$commandName}\"\n");
            return false;
        }

        $command = $this->commands[$namespaceString][$commandName];

        return $command->exec($options);
    }

    public function getCommands(): array
    {
        return $this->commands;
    }
}

class Options
{
    private function __construct(private string $commandString, private array $options)
    {
        readEnvFile();
    }

    public static function parseCommandLineArgs(int $argc, array $argv)
    {
        if ($argc == 1) {
            App::getInstance()->printHelp();
            return null;
        }

        $command = $argv[1];
        $options = [];

        for ($i = 2; $i < $argc; $i++) {
            $arg = $argv[$i];
            
            if (!str_starts_with($arg, '--')) {
                App::getInstance()->printInvalidOptions($arg);
                return null;
            }

            $arg = ltrim($arg, '--');
            $argArray = explode('=', $arg);

            if (count($argArray) > 2) {
                App::getInstance()->printInvalidOptions($arg);
                return null;
            }

            $options[$argArray[0]] = true;
            if (!empty($argArray[1])) {
                $options[$argArray[0]] = $argArray[1];
            }

            unset($arg);
        }

        return new self($command, $options);
    }

    public function getCommandString(): string
    {
        return $this->commandString;
    }

    public function getOptions(): array
    {
        return $this->options;
    }
}

class App
{
    private static ?App $instance = null;

    public static function getInstance()
    {
        if (self::$instance === null) {
            self::$instance = new App();
        }

        return self::$instance;
    }

    private CommandManager $commandManager;

    public function __construct()
    {
        $this->commandManager = new CommandManager();
    }

    public function printHelp()
    {
        printf("How to use:\n");
        printf("\tphp util.php <command_namespace>:<command_name> [--option=value] [--boolean_option]\n\n");

        printf("Available commands:\n");

        foreach ($this->commandManager->getCommands() as $namespace=>$commands) {
            foreach ($commands as $command) {
                printf("\t%s:%s\n", $namespace, $command->getName());
            }

            printf("\n");
        }
    }

    public function printInvalidOptions(string $option)
    {
        printf("Invalid option: %s\n", $option);
    }

    public function printMissingOptions(string $option)
    {
        printf("Missing option: %s\n", $option);
    }

    public function run(int $argc, array $argv)
    {
        $options = Options::parseCommandLineArgs($argc, $argv);
        if ($options === null) {
            return;
        }

        if (!$this->commandManager->execCommandString($options->getCommandString(), $options->getOptions())) {
            return;
        }
    }


    public function withCommands(string $namespace, array $commands): App
    {
        foreach ($commands as $command) {
            $this->commandManager->register($namespace, $command);
        }

        return $this;
    }
}

class HelpCommand extends Command
{
    public function __construct()
    {
        parent::__construct('help');
    }

    public function exec(array $options): bool
    {
        App::getInstance()->printHelp();
        return true;
    }
}

class MigrationSetupCommand extends Command
{
    public function __construct()
    {
        parent::__construct('setup');
    }

    public function exec(array $options): bool
    {
        $mysqli = getDbConnection();
        $migrationsTableName = 'migrations';
        if (!empty($options['name'])) {
            $migrationsTableName = trim($options['name']);
        }

        $query = <<<SQL
            CREATE TABLE {$migrationsTableName} (
                id INT NOT NULL AUTO_INCREMENT,
                name TEXT,
                batch INT,
                PRIMARY KEY (id)
            );
        SQL;

        $mysqli->query($query);
        return true;
    }
}

class MigrationMakeCommand extends Command
{
    public function __construct()
    {
        parent::__construct('make');
    }

    public function exec(array $options): bool
    {
        $migrationsDir = __DIR__ . DIRECTORY_SEPARATOR .'migrations';
        if (!empty($options['dir'])) {
            $migrationsDir = $options['dir'];
            if (!str_starts_with(DIRECTORY_SEPARATOR, '/')) {
                $migrationsDir = __DIR__ . DIRECTORY_SEPARATOR . $migrationsDir;
            }
        }

        if (empty($options['name'])) {
            App::getInstance()->printMissingOptions('name');
            return false;
        }

        $migrationDirName = date('YmdHi') . '-' . $options['name'];
        $currentMigrationDir = join_paths($migrationsDir, $migrationDirName);

        if (file_exists($currentMigrationDir)) {
            printf("Migration already exists\n");
            return false;
        }
        if (!mkdir($currentMigrationDir, 0777, true)) {
            printf("Could not create directory: %s\n", $currentMigrationDir);
            return false;
        }

        $upFileName = join_paths($currentMigrationDir, 'up.sql');
        $downFileName = join_paths($currentMigrationDir, 'down.sql');

        $upFile = fopen($upFileName, 'w+');
        if (!$upFile) {
            printf("Could not create file: %s\n", $upFileName);
            return false;
        }

        fclose($upFile);

        $downFile = fopen($downFileName, 'w+');
        if (!$upFile) {
            printf("Could not create file: %s\n", $downFileName);
            return false;
        }

        fclose($downFile);

        printf("Migration \"%s\" created\n", $migrationDirName);

        return true;
    }
}

class MigrationFacade
{
    public static function getMigrationName(string $dir): string
    {
        $migrationArray = explode('-', $dir);
        return implode('-', array_slice($migrationArray, 1));
    }

    public static function getMigrations(mysqli $mysqli, string $migrationsTableName): array
    {
        $stmt = $mysqli->prepare('SELECT id, name, batch FROM ' . $migrationsTableName . ';');
        $stmt->execute();

        $migrations = [];

        $stmt->bind_result($id, $name, $batch);
        while ($stmt->fetch()) {
            $migrations[$name] = new stdClass;
            $migrations[$name]->name = $name;
            $migrations[$name]->batch = $batch;
        }

        return $migrations;
    }

    public static function insertMigrations(mysqli $mysqli, string $migrationsTableName, array $migrations, array $oldMigrations): void
    {
        $oldBatch = -1;
        foreach ($oldMigrations as $oldMigration) {
            if (intval($oldMigration->batch) > $oldBatch) {
                $oldBatch = intval($oldMigration->batch);
            }
        }

        $sql = "INSERT INTO {$migrationsTableName} (name, batch) VALUES";
        $currentBatch = $oldBatch + 1;

        foreach ($migrations as $idx=>$migration) {
            if ($idx > 0) {
                $sql .= ',';
            }

            $sql .= " ('{$migration}', {$currentBatch})";
        }

        $sql .= ';';

        $mysqli->query($sql);
    }
}

class MigrationRollbackCommand extends Command
{
    public function __construct()
    {
        parent::__construct('rollback');
    }

    public function exec(array $options): bool
    {
        $migrationsDir = __DIR__ . DIRECTORY_SEPARATOR .'migrations';
        if (!empty($options['dir'])) {
            $migrationsDir = $options['dir'];
            if (!str_starts_with(DIRECTORY_SEPARATOR, '/')) {
                $migrationsDir = __DIR__ . DIRECTORY_SEPARATOR . $migrationsDir;
            }
        }

        $mysqli = getDbConnection();

        $migrationsTableName = 'migrations';
        $oldMigrations = MigrationFacade::getMigrations($mysqli, $migrationsTableName);

        $currentBatch = -1;
        foreach ($oldMigrations as $currentMigration) {
            if (intval($currentMigration->batch) > $currentBatch) {
                $currentBatch = intval($currentMigration->batch);
            }
        }

        $dirs = read_dir_custom($migrationsDir, true);
        $removedMigrations = [];

        foreach($dirs as $dir) {
            $filename = join_paths($migrationsDir, $dir, 'down.sql');
            $query = file_get_contents($filename);

            $migrationName = MigrationFacade::getMigrationName($dir);
            if (empty($oldMigrations[$migrationName])) {
                continue;
            }

            $migration = $oldMigrations[$migrationName];
            if ($migration->batch != $currentBatch) {
                continue;
            }

            if (!$query) {
                printf("File not found \"%s\"\n", $filename);
                return false;
            }

            $result = $mysqli->query($query);
            if ($result === false) {
                printf("Could not execte down.sql\n");
                return false;
            }

            printf("Rolled back - %s\n", $migrationName);
            $removedMigrations[] = $migrationName;
        }

        if (!empty($removedMigrations)) {
            $result = $mysqli->query("DELETE FROM {$migrationsTableName} WHERE batch = {$currentBatch}");
            if ($result === false) {
                printf("Could not remove migrations from migrations table\n");
                return false;
            }

            printf("Rolled back sucessfully\n");
        } else {
            printf("Nothing to migrate\n");
        }

        return true;
    }
}
class MigrationMigrateCommand extends Command
{
    public function __construct()
    {
        parent::__construct('migrate');
    }

    public function exec(array $options): bool
    {
        $migrationsDir = __DIR__ . DIRECTORY_SEPARATOR .'migrations';
        if (!empty($options['dir'])) {
            $migrationsDir = $options['dir'];
            if (!str_starts_with(DIRECTORY_SEPARATOR, '/')) {
                $migrationsDir = __DIR__ . DIRECTORY_SEPARATOR . $migrationsDir;
            }
        }

        $mysqli = getDbConnection();

        $migrationsTableName = 'migrations';
        $ranMigrations = MigrationFacade::getMigrations($mysqli, $migrationsTableName);

        $newMigrations = [];
        $dirs = read_dir_custom($migrationsDir);

        foreach($dirs as $dir) {
            $filename = join_paths($migrationsDir, $dir, 'up.sql');
            $query = file_get_contents($filename);

            $migrationName = MigrationFacade::getMigrationName($dir);
            if (!empty($ranMigrations[$migrationName])) {
                continue;
            }

            if (!$query) {
                printf("File not found \"%s\"\n", $filename);
                return false;
            }

            $result = $mysqli->query($query);
            if ($result === false) {
                return false;
            }

            $newMigrations[] = $migrationName;
            printf("Migrated back - %s\n", $migrationName);
        }

        if (!empty($newMigrations)) {
            MigrationFacade::insertMigrations($mysqli, $migrationsTableName, $newMigrations, $ranMigrations);
            printf("Migrated sucessfully\n");
        } else {
            printf("Nothing to migrate\n");
        }

        return true;
    }
}

class StorageLinkCommand extends Command
{
    public function __construct()
    {
        parent::__construct('link');
    }

    public function exec(array $options): bool
    {
        $target = CONF_STORAGE_LINK_TARGET;
        $storageLink = CONF_STORAGE_LINK;

        if (!empty($options['target'])) {
            $target = $options['target'];
        }

        if (!empty($options['link'])) {
            $storageLink = $options['link'];
        }

        if (!symlink($target, $storageLink)) {
            printf("Could not symlink storage\n");
            return false;
        }

        printf("Storage linked successfully\n");

        return true;
    }
}

App::getInstance()
    ->withCommands(
        'help', [
        new HelpCommand(),
        ]
    )
    ->withCommands(
        'migration', [
        new MigrationMakeCommand(),
        new MigrationMigrateCommand(),
        new MigrationRollbackCommand(),
        new MigrationSetupCommand(),
        ]
    )
    ->withCommands(
        'storage', [
        new StorageLinkCommand()
        ]
    )
    ->run($argc, $argv);
