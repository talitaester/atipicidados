import Form from "@/components/Form Unidade/Form";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <div className="mt-[44px] flex flex-col gap-[37px]">
        <h2 className="ml-[147px]">Cadastro Unidade</h2>

        <Form />
      </div>
    </main>
  );
}
