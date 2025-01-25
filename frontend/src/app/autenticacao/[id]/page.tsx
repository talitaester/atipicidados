"use client";
import Form from "@/components/Form Autenticacao/Form";
import NavBar from "@/components/NavBar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [memberId, setMemberId] = useState("");
  
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const memberId = localStorage.getItem("memberId");
    if (memberId) {
      setMemberId(memberId);
      localStorage.removeItem("memberId");
    }
  })

  return (
    <main className="flex flex-col min-h-screen">
      <NavBar />

      <div className="mt-[44px] flex flex-col gap-[37px]">
        <h2 className="ml-[147px]">Autenticar o pré-cadastro</h2>

        <Form id={id} />
      </div>
    </main>
  );
}
