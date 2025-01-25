import Image from "next/image";
import NavBar from "@/components/NavBar";
import perfil from "../../../public/images/perfil.png";
import { Card } from "@/components/Card";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen">
            <NavBar />

        <div className="flex flex-col gap-[20px] mx-[108px] mt-[33px] text-[14px]">
            <div className="flex gap-[20px]">
                <div className="box w-3/5 flex flex-col gap-7">
                    <h2>Meu cadastro</h2>

                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-[20px]">
                            <Image
                                src={perfil}
                                alt='foto de perfil <nome do usuario>'
                                width={68}
                                height={68} />

                            <div>
                                <p className="titulo">Nome e Sobrenome:</p>
                                <p>Jacob Jones</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <p className="titulo">RG:</p>
                                    <p>XX.XXX.XXX-XX</p>
                                </div>

                                <div>
                                    <p className="titulo">CPF:</p>
                                    <p>XXX.XXX.XXX-XX</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <div>
                                    <p className="titulo">Data de nascimento:</p>
                                    <p>28/05/2004</p>
                                </div>

                                <div>
                                    <p className="titulo">Endereço:</p>
                                    <p>6391 Elgin St. Celina, Delaware 10299</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box w-2/5">
                    <h3>Profissionais que me acompanham</h3>

                    <div className="flex flex-col">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>

            <div className="flex gap-[20px]">
                <div className="gap-[18px] box w-full">
                    <h3>Mãe</h3>
                    <p className="titulo">Esther Howard</p>

                    <div className="flex flex-row gap-[18px] items-center">
                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="titulo">RG:</p>
                                <p>XX.XXX.XXX-XX</p>
                            </div>

                            <div>
                                <p className="titulo">CPF:</p>
                                <p>XXX.XXX.XXX-XX</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="titulo">Data de nascimento:</p>
                                <p>28/05/2004</p>
                            </div>

                            <div>
                                <p className="titulo">Endereço:</p>
                                <p>6391 Elgin St. Celina, Delaware 10299</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="titulo">Escolaridade:</p>
                                <p>Ensino Superior Completo</p>
                            </div>

                            <div>
                                <p className="titulo">Contato:</p>
                                <p>(71) 99145-2454</p>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="gap-[18px] box w-full">
                    <h3>Pai</h3>
                    <p className="titulo">Guy Hawkins</p>

                    <div className="flex flex-row gap-[18px] items-center">
                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="titulo">RG:</p>
                                <p>XX.XXX.XXX-XX</p>
                            </div>

                            <div>
                                <p className="titulo">CPF:</p>
                                <p>XXX.XXX.XXX-XX</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="titulo">Data de nascimento:</p>
                                <p>28/05/2004</p>
                            </div>

                            <div>
                                <p className="titulo">Endereço:</p>
                                <p>6391 Elgin St. Celina, Delaware 10299</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <p className="titulo">Escolaridade:</p>
                                <p>Ensino Superior Completo</p>
                            </div>

                            <div>
                                <p className="titulo">Contato:</p>
                                <p>(71) 99145-2454</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </main>
    );
}
