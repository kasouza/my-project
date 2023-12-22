"use client"

import CallToActionButton from "@/components/CallToActionButton"
import Carousel from "@/components/Carousel"
import ElementsIcon from "@/components/ElementsIcon"
import FaqQuestion from "@/components/FaqQuestion"
import Float from "@/components/Float"
import SquareContainer from "@/components/SquareContainer"
import Testimonial from "@/components/Testimonial"
import WhatsappButton from "@/components/WhatsappButton"
import useWindowWidth from "@/hooks/userWindowWidth"
import {faPhone} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function SaqueFgts1() {
    const windowWidth = useWindowWidth();

    const whatsIsNeeded = (
        <ol className="list-decimal">
            <div className="flex flex-col gap-2 ml-5">
                <li>Ser maior de 18 anos;</li>
                <li>CPF em situação regular na Receita Federal;</li>
                <li>Ter conta corrente ou poupança;</li>
                <li>Optar pelo saque de aniversário;</li>
                <li>Autorizar o banco a acessar seus dados e valores do FGTS 6. Aprovação da simulação.</li>
            </div>
        </ol>
    )

    const howToAdesao = (
        <ol className="list-decimal">
            <div className="flex flex-col gap-2 ml-5">
                <li>É bem simples, siga os passos abaixo:</li>
                <li>Acesse o aplicativo “FGTS”;</li>
                <li>Toque na opção “Saque-Aniversário do FGTS”;</li>
                <li>Leia atentamente e marque a opção de “termos e condições”;</li>
                <li>Toque no botão “Empréstimo Saque aniversário</li>
            </div>

            <div className="mt-4 flex flex-col gap-2">
                <a className="hover:text-blue-600 underline text-blue-500" href="https://play.google.com/store/apps/details?id=br.gov.caixa.fgts.trabalhador&hl=pt_BR&gl=US">Aplicativo FGTS - Google Play</a>
                <a className="hover:text-blue-600 underline text-blue-500" href="https://apps.apple.com/br/app/fgts/id1038441027">Aplicativo FGTS - App Store</a>
            </div>
        </ol>
    )

    return (
        <div>
            <Float>
                <WhatsappButton big />
            </Float>

            <main className="flex flex-col items-center">
                <header className="w-full max-w-7xl grid md:grid-cols-2 p-8 gap-2 md:gap-8">
                    <div className="flex flex-col justify-between items-center gap-2">
                        <Image alt="Santana Cred" src="/images/santana-cred-logo.png" width={200} height={100} />

                        <div className="flex flex-col gap-8">
                            <p className="text-blue-800 text-3xl font-bold text-center">Crédito através da antecipação de Saldo FGTS</p>
                            <p className="text-2xl font-bold text-center md:text-left">Antecipe até 10 anos do seu Saque Aniversário <strong>FGTS</strong>!</p>
                        </div>
                    </div>

                    <Image className="hidden md:block" alt="Mão segurando celular com o aplicativo da Caixa aberto" src="/images/app-caixa-esquerda.png" width={450} height={450} />
                </header>

                <div className="w-full flex justify-center pb-4 md:py-8">
                    <CallToActionButton />
                </div>

                <Image className="block md:hidden" alt="Mão segurando celular com o aplicativo da Caixa aberto" src="/images/app-caixa-esquerda.png" width={450} height={450} />

                <section className="w-full text-white bg-red-600 bg-red-background flex justify-center">
                    <div className="w-full max-w-7xl grid items-center justify-center md:grid-cols-1fr-auto gap-x-16 gap-y-4 py-16 p-8">
                        <div className="flex items-center md:items-start flex-col gap-4">
                            <h2 className="text-3xl font-bold md:text-left text-center">FAÇA SUA SIMULAÇÃO AGORA MESMO!</h2>
                            <p className="font-bold">Rápido, Prático e 100% Online</p>
                        </div>

                        <div className="justify-self-center md:justify-self-end">
                            <CallToActionButton />
                        </div>
                    </div>
                </section>

                <section className="w-full flex justify-center py-14 p-8 bg-primary-blue bg-blue-background text-white">
                    <div className="w-full max-w-7xl flex flex-col gap-12">
                        <h2 className="text-3xl font-semibold text-center"><strong className="font-extrabold">Conheça as vantagens</strong> de antecipar o seu FGTS</h2>

                        <ul className="flex flex-col md:flex-row items-center w-full justify-between gap-8">
                            <li className="flex flex-col items-center gap-3 max-w-60 text-center p-4">
                                <Image alt="" src="/images/icons/money-bag.png" width={50} height={50} />
                                <h3 className="text-3xl font-bold">Crédito</h3>
                                <p className="text-base font-bold">Sem consulta ao SPC e SERASA</p>
                            </li>

                            <li className="flex flex-col items-center gap-3 max-w-60 text-center p-4">
                                <Image alt="" src="/images/icons/calculator.png" width={50} height={50} />
                                <h3 className="text-3xl font-bold">Crédito</h3>
                                <p className="text-base font-bold">Sem consulta ao SPC e SERASA</p>
                            </li>

                            <li className="flex flex-col items-center gap-3 max-w-60 text-center p-4">
                                <Image alt="" src="/images/icons/invoice.png" width={50} height={50} />
                                <h3 className="text-3xl font-bold">Crédito</h3>
                                <p className="text-base font-bold">Sem consulta ao SPC e SERASA</p>
                            </li>

                            <li className="flex flex-col items-center gap-3 max-w-60 text-center p-4">
                                <Image alt="" src="/images/icons/padlock.png" width={50} height={50} />
                                <h3 className="text-3xl font-bold">Crédito</h3>
                                <p className="text-base font-bold">Sem consulta ao SPC e SERASA</p>
                            </li>
                        </ul>

                        <div className="flex flex-col items-center gap-8">
                            <h3 className="text-3xl font-semibold text-center">Antecipe AGORA mesmo seu FGTS</h3>
                            <CallToActionButton />
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-7xl flex flex-col gap-8 py-12 p-8">
                    <h2 className="text-primary-blue text-3xl font-semibold text-center">CONHEÇA NOSSOS PARCEIROS!</h2>

                    <ul className="flex flex-col gap-8">
                        <div className="grid grid-cols-2 justify-center items-center md:grid-cols-4 items-center justify-between gap-8">
                            <li className="grid place-items-center">
                                <Image alt="" src="/images/partners_logos/topo.webp" width={170} height={170} />
                            </li>

                            <li className="grid place-items-center">
                                <Image alt="" src="/images/partners_logos/banco-mercantil-do-brasil.webp" width={170} height={170} />
                            </li>

                            <li className="grid place-items-center">
                                <Image alt="" src="/images/partners_logos/itau.webp" width={120} height={120} />
                            </li>

                            <li className="grid place-items-center">
                                <Image alt="" src="/images/partners_logos/pan.webp" width={170} height={170} />
                            </li>
                        </div>

                        <div className="grid grid-cols-2 justify-center items-center md:grid-cols-3 items-center justify-between gap-8">
                            <li className="grid place-items-center">
                                <Image alt="" src="/images/partners_logos/c6bank.webp" width={170} height={170} />
                            </li>

                            <li className="grid place-items-center">
                                <Image alt="" src="/images/partners_logos/bmg.webp" width={120} height={120} />
                            </li>

                            <li className="grid place-items-center">
                                <Image alt="" src="/images/partners_logos/safra.webp" width={170} height={170} />
                            </li>
                        </div>
                    </ul>
                </section>

                <section className="flex justify-center w-full bg-primary-blue  bg-blue-background  text-white py-12 p-8">
                    <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8">
                        <div className="flex items-center md:items-start flex-col gap-10">
                            <h2 className="text-3xl font-semibold text-center md:text-left">O que preciso para antecipar meu saque FGTS?</h2>

                            <ol className="flex flex-col gap-2 list-decimal ml-5">
                                <li>Ser maior de 18 anos</li>
                                <li>CPF em situação regular na Receita Federal</li>
                                <li>Ter conta corrente ou poupança</li>
                                <li>Optar pelo saque de aniversário</li>
                                <li>Autorizar o banco a acessar seus dados e valores do FGTS</li>
                                <li>Aprovação da simulação</li>
                            </ol>

                            <div className="flex items-center md:items-start flex-col gap-6">
                                <h3 className="text-3xl font-bold">SOLICITAR AGORA!</h3>
                                <CallToActionButton />
                            </div>
                        </div>

                        <SquareContainer className="max-w-80">
                            <Image className="rounded-full" alt="" src="/images/man_looking_at_phone.webp" fill={true} />
                        </SquareContainer>
                    </div>
                </section>

                <section className="flex flex-col items-center gap-8 w-full p-8">
                    <h2 className="text-primary-blue text-3xl font-semibold text-center">FAQ - DÚVIDAS FREQUENTES</h2>

                    <ul className="w-full max-w-7xl">
                        <div className="flex flex-col gap-2">
                            <li className="w-full">
                                <FaqQuestion question="O que é saldo FGTS?" answer="O Fundo de Garantia do Tempo de Serviço (FGTS) é um dos principais direitos garantidos aos trabalhadores com carteira assinada no Brasil. Ele é um fundo criado pelo governo federal e funciona como uma poupança. Todo mês, a empresa deposita o valor correspondente a 8% do salário do funcionário, sem desconto ao empregado. O saldo pode ser resgatado em algumas situações como demissão, financiamento imobiliário, saque-aniversário ou campanhas específicas promovidas pelo governo federal." />
                            </li>

                            <li className="w-full">
                                <FaqQuestion question="O que é Antecipação do Saque Aniversário FGTS?" answer="É uma nova modalidade de crédito que permite a antecipação do saque-aniversário dos próximos anos com taxas de juros atrativas." />
                            </li>

                            <li className="w-full">
                                <FaqQuestion question="Como funciona a antecipação do Saque Aniversário FGTS?" answer="Funciona como um empréstimo com garantia. Ao escolher esse crédito, você irá antecipar o saque do mês do seu aniversário e receber o dinheiro em até 24 horas na conta cadastrada na Santana Cred. A diferença é que as parcelas serão pagas anualmente pela Caixa direto do seu FGTS, ao invés de serem pagas mensalmente por você." />
                            </li>

                            <li className="w-full">
                                <FaqQuestion question="O que é preciso para ser elegível a oferta?" answer={whatsIsNeeded} />
                            </li>

                            <li className="w-full">
                                <FaqQuestion question="Quanto de saldo no FGTS preciso ter para contratar?" answer="Ter saldo mínimo no FGTS de R$1.500,00." />
                            </li>

                            <li className="w-full">
                                <FaqQuestion question="Consigo antecipar todo o meu saldo do FGTS?" answer="Não, somente parte do seu saldo. Para saber o valor exato que você pode receber você precisa entrar em contato com a Santana Cred e conversar com nosso time de especialistas que irão tirar todas as suas dúvidas." />
                            </li>

                            <li className="w-full">
                                <FaqQuestion question="Como fazer a adesão da modalidade Saque Aniversário do FGTS?" answer={howToAdesao} />
                            </li>

                            <li className="w-full">
                                <FaqQuestion question="Quantas parcelas do Saque Aniversário eu posso antecipar?" answer="Aqui, na Santana Cred, você pode antecipar o valor de até 10 (dez) parcelas anuais do seu Saque Aniversário, desde que haja saldo em sua conta FGTS." />
                            </li>

                            <li className="w-full">
                                <FaqQuestion question="Se eu contratar Antecipação do Saque Aniversário, poderei contratar um outro empréstimo consignado ou outras linhas de crédito?" answer="A contratação da Antecipação não compromete suas demais linhas de crédito." />
                            </li>
                        </div>
                    </ul>
                </section>

                <div className="mx-auto max-w-2xl w-1/2 h-[1px] bg-gray-300 my-6"></div>

                <section className="w-full max-w-7xl grid md:grid-cols-2 gap-4 p-8 py-12">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-primary-blue text-3xl font-semibold">Quem somos?</h2>

                        <p className="text-lg">A Santana Cred <strong>é uma promotora de crédito</strong>, e não uma instituição financeira, não cobramos nenhum valor do cliente para fazer análise e liberação de crédito!</p>
                        <p className="text-lg">Atuação sólida <strong>no mercado há mais de 14 anos</strong>. Somos correspondentes dos Bancos de maior credibilidade e menores taxas, para atender melhor às necessidades de nossos clientes.</p>
                    </div>

                    <SquareContainer matchWidthToHeight={windowWidth >= 768} className="max-w-64 justify-self-center">
                        <Image className="rounded-full" alt="" src="/images/businessman_leader.webp" fill={true} />
                    </SquareContainer>
                </section>


                <section className="flex justify-center w-full bg-primary-blue  bg-blue-background py-12 p-8">
                    <div className="w-full max-w-7xl flex items-center flex-col gap-8 ">
                        <h2 className="text-3xl font-semibold text-white text-center">AMAMOS RECEBER AVALIAÇÕES DE NOSSOS CLIENTES!</h2>

                        <Carousel>
                            <Testimonial userImage="/images/testimonials/richardson.webp" userName="Richardson Costa" text="Ótimo atendimento. Todos super atenciosos. Valeu muito a pena. Não demorou nem 30 min e já recebi o valor esperado. Estão de parabéns" />
                            <Testimonial userImage="/images/testimonials/charliel.webp" userName="Charliel Davi Gabriel" text="Excelente atendimento super recomendo estou muito agradecido" />
                            <Testimonial userImage="/images/testimonials/marcela.webp" userName="Marcela Santos" text="Atendimento excelente super atenciosos estão de parabéns toda equipe" />
                            <Testimonial userImage="/images/testimonials/hildeson.webp" userName="Hildeson Souza" text="Muito bom, ótimo atendimento estão de parabéns" />
                            <Testimonial userImage="/images/testimonials/tailson.webp" userName="Tailson Fernandes" text="Obrigado pelo atendimento dou nota 10 para Fernanda, Paula e Grabriel Freitas, foram super educados e esclareceram minhas dúvidas, muito obrigado!" />
                            <Testimonial userImage="/images/testimonials/angelly.webp" userName="Angelly Suzuki" text="Olá! Quero agradecer ao Santana Credo por toda a atenção ao me atender. Antecipei o meu FGTS,e a rapidez foi de imediato. Estou muito satisfeita e super recomendo! Muito obrigada!" />
                            <Testimonial userImage="/images/testimonials/jessica.webp" userName="Jéssica Mara" text="Fui atendida pelo Walisson, atendimento diferenciado com qualidade. Muito atencioso, passa muita clareza pro cliente. Parabéns pelo trabalho 👏" />
                            <Testimonial userImage="/images/testimonials/fabi.webp" userName="Fabi Freitas" text="Fui muito bem atendida  pela Santana  cred tudo bem certinho  e muito rapido  obrigado  a todos   e caiu em  menos de  de meia hora na conta o Dinheiro  obrigado  a todos  são  muito confiaveis e certinho 👏👏👏" />
                            <Testimonial userImage="/images/testimonials/kleber.webp" userName="Kleber Andosio da Silva" text="Maravilhoso muito bom são profissionais de primeira linha são todos muito profissionais meus parabéns pela a atuação de todos que mim atendeu Deus abençoe muito" />					
                            <Testimonial userImage="/images/testimonials/paloma.webp" userName="Paloma de Oliveira da Costa" text="Agradeço pelo atendimento com a Fernanda que foi super educada e prestativa com meu atendimento! Ótima profissional" />										
                        </Carousel>

                        <CallToActionButton />
                    </div>
                </section>
            </main>

            <footer className="flex flex-col items-center w-full">
                <div className="w-full max-w-7xl">
                    <div className="flex flex-col gap-4 py-12">
                        <div className="grid md:grid-cols-3 gap-16 md:gap-8 justify-center px-8 ">
                            <Image alt="Santana Cred" src="/images/santana-cred-logo.png" width={200} height={100} />

                            <div className="w-full md:w-fit flex flex-col gap-2">
                                <h3 className="text-center font-bold text-2xl text-primary-blue">Fale conosco</h3>
                                <div className="flex flex-col gap-2 w-full justify-evenly">
                                    <a href="tel:08000420324" className="hover:scale-105 transition-all flex items-center gap-2">
                                        <button className="w-9 h-9 bg-blue-500 rounded-full text-white grid place-items-center">
                                            <FontAwesomeIcon className={'w-5 h-5' } icon={faPhone} />
                                        </button>

                                        <span>0800 042 0324</span>
                                    </a>

                                    <WhatsappButton />
                                </div>
                            </div>

                            <div className="w-full md:w-fit flex flex-col gap-2">
                                <h3 className="text-center font-bold text-2xl text-primary-blue">Siga-nos</h3>
                                <div className="flex gap-2 w-full justify-evenly">
                                    <a className="hover:scale-105 transition-all" href="https://www.facebook.com/santanacredi">
                                        <Image alt="Facebook logo" src="/images/icons/facebook.svg" width={40} height={40} />
                                    </a>

                                    <a className="hover:scale-105 transition-all" href="https://www.instagram.com/santanacredudi/">
                                        <Image alt="Facebook logo" src="/images/icons/instagram.svg" width={40} height={40} />
                                    </a>

                                    <a className="hover:scale-105 transition-all" href="https://www.tiktok.com/@santanacredudi?_t=8fc38xM8Tgb&_r=1">
                                        <Image alt="Facebook logo" src="/images/icons/tiktok.svg" width={40} height={40} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mx-auto w-1/2 h-[1px] bg-gray-300"></div>

                        <div className="p-8 text-sm text-center">
                            A Santana Cred Serviços Ltda é uma prestadora de serviços autorizada do BANCO MERCANTIL DO BRASIL SA CNPJ 17.184.037/0001-10 e não realiza operações de crédito diretamente. A Santana Cred é uma plataforma digital que atua como correspondente bancário para facilitar o processo de contratação de empréstimos. Como correspondente bancário, seguimos as diretrizes do Banco Central do Brasil, nos termos da Resolução nº. 3.954, de 24 de fevereiro de 2011. Toda avaliação de crédito será realizada conforme a política de crédito da Instituição Financeira escolhida pelo usuário. Antes da contratação de qualquer serviço através de nossos parceiros, você receberá todas as condições e informações relativas ao produto a ser contrato, de forma completa e transparente. As taxas de juros,margem consignável e prazo de pagamento praticados nos empréstimos com consignação em pagamento dos Governos Federais, Estaduais e Municipais, Forças armadas e INSS observam as determinações de cada convênio, bem como a política de crédito da instituição financeira a ser utilizada. SANTANA CRED SERVIÇOS LTDA – CNPJ 11.003.397/0001-91 e SWX CRED EIRELI – CNPJ 27.101.349/0001-76 | Endereço: Rua Cruzeiro dos Peixotos, 444 – Bairro Centro, Cidade de Uberlandia – MG CEP 38400.107 | E-mail para contato: sac@santanacredi.com.br
                        </div>
                    </div>
                </div>

                <div className="w-full bg-black text-white text-center py-8 p-4">Copyright © 2023 Santana Cred. Todos os direitos reservados.</div>
            </footer>
        </div>
    )
}
