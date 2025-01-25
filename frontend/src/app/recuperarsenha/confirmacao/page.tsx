
import Link from "next/link";
import { CheckIcon } from "../../../../public/icons/Icons";
export default function Home() {

  return (
    <main className="flex min-h-screen">
      <div className="lg:flex hidden w-[40%] justify-center items-center">
        <p>colocar imagem aqui</p>
      </div>

      <div className="flex px-5 bg-blue-100 w-full lg:w-[60%] text-center flex-col justify-center items-center">
        <CheckIcon />
        <h1 className='mt-[30px]'>Nova senha enviada com sucesso!</h1>
        <p className="font-medium mt-6 mb-11">Verifique sua caixa de entrada para mais informações.</p>
        <Link href="/">
          <button className="botao w-[280px]"> Voltar para a página de Login</button>
        </Link>
      </div>
    </main>
  );
}
