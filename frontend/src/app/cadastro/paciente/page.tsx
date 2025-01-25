"use client";
import CheckInput from "@/components/CheckInput";
import FileInput from "@/components/FileInput";
import Form from "@/components/Form Paciente/Form";
import NavBar from "@/components/NavBar";
import SelectInput from "@/components/SelectInput";
import TextInput from "@/components/TextInput";
import { Input } from "@/components/ui/input";
import { Link } from "lucide-react";
import { useState } from "react";

// import { Button } from "@/components/ui/button";
// import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Form, useForm } from "react-hook-form";
// import { z } from "zod"

// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// })

export default function Home() {
  const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState<string[]>([]);

  const handleCheckboxChange = (options: string[]) => {
    setSelectedCheckboxOptions(options);
    console.log(selectedCheckboxOptions);
  };

  return (
    <main className="flex flex-col min-h-screen items-center bg-[#F0F0F3]">
      <NavBar />
      <div className="mt-14 flex flex-col gap-[37px]">
        <Form />
      </div>
    </main>
  );
}
