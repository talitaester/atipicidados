"use client"
import React, { useState } from "react";

export default function Teste() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const submitForm = (event: any) => {
    event.preventDefault(); // Evita o comportamento padrão de recarregar a página
    console.log("Formulário enviado!");
    // Aqui você pode adicionar lógica de envio, como um fetch ou axios
  };

  return (
    <form
      id="myForm"
      className="max-w-xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg"
      onSubmit={submitForm}
    >
      {/* Etapa 1 */}
      {currentStep === 1 && (
        <section>
          <input
            type="text"
            name="campo1"
            placeholder="Campo 1"
            className="block w-full p-2 mb-4 border rounded-md border-gray-300"
          />
          <input
            type="text"
            name="campo2"
            placeholder="Campo 2"
            className="block w-full p-2 mb-4 border rounded-md border-gray-300"
          />
          <button
            type="button"
            onClick={nextStep}
            className="px-4 py-2 bg-[#000000] text-white rounded"
          >
            Próximo
          </button>
        </section>
      )}

      {/* Etapa 2 */}
      {currentStep === 2 && (
        <section>
          <input
            type="text"
            name="campo3"
            placeholder="Campo 3"
            className="block w-full p-2 mb-4 border rounded-md border-gray-300"
          />
          <input
            type="text"
            name="campo4"
            placeholder="Campo 4"
            className="block w-full p-2 mb-4 border rounded-md border-gray-300"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={previousStep}
              className="px-4 py-2 bg-[#000000] text-white rounded"
            >
              Anterior
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-[#000000] text-white rounded"
            >
              Próximo
            </button>
          </div>
        </section>
      )}

      {/* Etapa 3 */}
      {currentStep === 3 && (
        <section>
          <input
            type="text"
            name="campo5"
            placeholder="Campo 5"
            className="block w-full p-2 mb-4 border rounded-md border-gray-300"
          />
          <input
            type="text"
            name="campo6"
            placeholder="Campo 6"
            className="block w-full p-2 mb-4 border rounded-md border-gray-300"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={previousStep}
              className="px-4 py-2 bg-[#000000] text-white rounded"
            >
              Anterior
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#000000] text-white rounded"
            >
              Enviar
            </button>
          </div>
        </section>
      )}
    </form>
  );
}
