import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                '1fr-auto': '1fr auto',
            },
            animation: {
                'grow-and-shrink': 'grow-and-shrink ease-in-out 2s infinite',
            },
            fontFamily: {
                'montserrat': ["Montserrat", 'sans-serif'],
                'element-icons': 'elements-icons',
            },
            colors: {
                'green-wpp-light': '#56DB6F',
                'green-wpp': 'rgb(37, 211, 102)',
                'primary-blue': '#1658a6',
                'primary-red': '#d31e1e',
            },
            backgroundImage: {
                'red-background': 'url("/images/red-background.png")',
                'blue-background': 'url("/images/blue-background.png")',
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
export default config
