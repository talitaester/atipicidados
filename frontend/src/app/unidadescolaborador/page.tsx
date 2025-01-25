"use client";
import { CardUnidade } from "@/components/Card";
import NavBarColaborador from "@/components/NavBarColaborador";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchIcon from "@/assets/icons/search";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [userEmail, setUserEmail] = useState("");
  const [userID, setUserID] = useState("");
  const [colaboradorInfo, setColaboradorInfo] = useState<any | null>(null);

  const [unidades, setUnidades] = useState<any[]>([]);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const id = localStorage.getItem("userID");
    if (email) {
      setUserEmail(decodeURIComponent(email));
    }
    if (id) {
      setUserID(id);
      fetchColaboradorData(id);
    }
    fetchUnidades();
  }, []);

  const fetchColaboradorData = async (id: any) => {
    try {
      const response = await fetch(`http://localhost:3002/colaboradores/id/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch gerente data");
      }
      const data = await response.json();
      setColaboradorInfo(data);
    } catch (error) {
      console.error("Error fetching gerente data:", error);
    }
  };

  const fetchUnidades = async () => {
    try {
      const response = await fetch("http://localhost:3002/unidades/getall");
      if (!response.ok) {
        throw new Error("Failed to fetch unidades data");
      }
      const data = await response.json();
      console.log(data.unidades);
      setUnidades(data.unidades);
    } catch (error) {
      console.error("Error fetching unidades data:", error);
    }
  };
  
  const urlToUnidadePage = (unidade: any) => {
    //p de paciente g de gerente e c de colaborador, dps recebe o id, e qual eh o acesso ("acs") da pessoa que esta 
    localStorage.removeItem("unidadeId");
    localStorage.removeItem("acs");

    localStorage.setItem("unidadeId", unidade.id);
    localStorage.setItem("acs", "c");

    router.push("/unidades/nomedaunidade");
  }

  return (
    <main className="flex flex-col min-h-screen">
      <NavBarColaborador />

      <div className="px-[84px] pt-[40px]">
        <div className="flex justify-between">
          <div className="flex flex-col w-[280px] md:w-[340px]">
            <h2 className="mb-7">Unidades</h2>

            <div className="relative w-full">
              <input
                type="text"
                className='input w-full h-[35px] mb-2 pb-1'
                placeholder="Buscar unidade..." />

              <button
                type="button"
                className="absolute inset-y-0 right-0 px-[10px] py-2 pb-4 bg-gray-300 rounded-r-md"
              >
                <SearchIcon color="black" />
              </button>
            </div>

          </div>
        </div>

        <div className="mt-[28px] grid grid-cols-4 gap-2 w-full max-w-full">
          {unidades.length > 0 ? (
            unidades.map((unidade) => (
              <button onClick={() => { urlToUnidadePage(unidade) }} className="text-left">
                <CardUnidade key={unidade.id} title={unidade.nome} endereco={unidade.endereco} />
              </button>
            ))
          ) : (
            <p>Nenhum membro encontrado.</p>
          )}
        </div>
      </div>
    </main>
  );
}
