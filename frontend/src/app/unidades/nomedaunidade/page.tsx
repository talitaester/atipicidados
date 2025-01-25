"use client";
import { Card } from "@/components/Card";
import NavBar from "@/components/NavBar";
import NavBarColaborador from "@/components/NavBarColaborador";
import NavBarGerente from "@/components/NavBarGerente";
import NavBarPaciente from "@/components/NavBarPaciente";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchIcon from "@/assets/icons/search";

export default function Home() {
  const [unidadeId, setUnidadeId] = useState("");
  const [homeLink, setHomeLink] = useState("");
  const [acesso, setAcesso] = useState("");
  const [unidade, setUnidade] = useState<any | null>(null);

  useEffect(() => {
    const unidadeId = localStorage.getItem("unidadeId");
    const acs = localStorage.getItem("acs");
    const homeLink = localStorage.getItem("homeLink");

    if (unidadeId) {
      setUnidadeId(unidadeId);
      fetchUnidadeData(unidadeId);
      localStorage.removeItem("unidadeId")
    };
    if (homeLink) setHomeLink(homeLink);
    if (acs) {
      setAcesso(acs)
      localStorage.removeItem("acs");
    };
  })

  const fetchUnidadeData = async (id: any) => {
    try {
      const response = await fetch(`http://localhost:3002/unidades/getUnidadeById/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch unidades data");
      }
      const data = await response.json();
      setUnidade(data);
    } catch (error) {
      console.error("Error fetching unidades data:", error);
    }
  };

  // Se a pessoa que clicou no card for um gerente, ou seja "acs" = "g" recebe navbar de gerente, caso contrario colaborador
  const getAcesso = () => {
    if (acesso === "g") return <NavBarGerente />
    if (acesso === "c") return <NavBarColaborador />
    if (acesso === "p") return <NavBarPaciente />
  }

  return (
    <main className="flex flex-col min-h-screen">
      {getAcesso()}
      <div className="px-5 md:px-[84px] lg:px-[137px] pt-[30px]">
        <div className="flex flex-col w-full justify-between">
          <h2 className="mb-2">{unidade ? unidade.nome : "Nome não encontrado"}</h2>
          <button className="flex justify-start">
            <h4 className="mb-[32px] text-blue-800">Mais informações</h4>
          </button>
          <div className="relative w-[280px] md:w-[340px]">
            <input
              type="text"
              className='input w-full h-[35px] mb-2 pb-1'
              placeholder={`Buscar membros em ${unidade ? unidade.nome : "unidade"}`} />

            <button
              type="button"
              className="absolute inset-y-0 right-0 px-[10px] py-2 pb-4 bg-gray-300 rounded-r-md"
            >
              <SearchIcon color="black" />
            </button>
          </div>

          <div className="flex justify-start text-[13px] md:text-[16px]">
            <div className="flex gap-[18px]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="
                    relative w-4 h-4 appearance-none bg-white/[0.4] border-[1px] border-black/40 focus:outline-none rounded-[4px] mr-2
                    checked:bg-blue-800 checked:border-none
                    hover:ring hover:ring-offset-indigo-400 hover:cursor-pointer
                    after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:16px] 
                    checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA4TDcuMjUgMTEuNzVMMTEuNzUgMy43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4K')]
                  "
                  // checked={selectedFilters.includes("Gerente")}
                  // onChange={() => handleFilterChange("Gerente")}
                />
                Gerentes
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="
                    relative w-4 h-4 appearance-none bg-white/[0.4] border-[1px] border-black/40 focus:outline-none rounded-[4px] mr-2
                    checked:bg-blue-800 checked:border-none
                    hover:ring hover:ring-offset-indigo-400 hover:cursor-pointer
                    after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:16px] 
                    checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA4TDcuMjUgMTEuNzVMMTEuNzUgMy43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4K')]
                  "
                  // checked={selectedFilters.includes("Colaborador")}
                  // onChange={() => handleFilterChange("Colaborador")}
                />
                Colaboradores
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="
                    relative w-4 h-4 appearance-none bg-white/[0.4] border-[1px] border-black/40 focus:outline-none rounded-[4px] mr-2
                    checked:bg-blue-800 checked:border-none
                    hover:ring hover:ring-offset-indigo-400 hover:cursor-pointer
                    after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:16px] 
                    checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA4TDcuMjUgMTEuNzVMMTEuNzUgMy43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4K')]
                  "
                  // checked={selectedFilters.includes("Paciente")}
                  // onChange={() => handleFilterChange("Paciente")}
                />
                Atendidos
              </label>
            </div>
          </div>

        </div>

        <div className="mt-[42px]">
          <h3 className="mb-4 ml-[5px]">Membros cadastrados</h3>

          <div>
            <Card />
          </div>
        </div>
      </div>
    </main>
  );
}
