import React, { useState } from 'react';
import { StepProps } from './types';
import SelectInput from '../SelectInput';
import TextInput from '../TextInput';
import FileInput from '../FileInput';
import DateInput from '../DateInput';
import Termo from '../Termo';
import NumberInput from '../NumberInput';

type Step11State = {
  nome: string;
  endereco: string;
};

const Step1: React.FC<{
  handleFormDataSubmit: () => void;
  updateForm: (data: any) => void;
}> = ({ handleFormDataSubmit, updateForm }) => {

  const [Step11, setStep11] = useState<Step11State>({
    nome: "",
    endereco: "",
  });

  const handleInputChange1 = (key: string, value: string) => {
    setStep11((prevState) => {
      const updatedForm = {
        ...prevState,
        [key]: value,
      };
      updateForm(updatedForm);
      return updatedForm;
    });
  };

  const [fotoFile, setFotoFile] = useState<File | null>(null);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleFotoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFotoFile(e.target.files[0]);
    }
  };

  const handleTermoClick = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = () => {
    handleFormDataSubmit();
  };

  return (
    <div className='flex flex-col gap-[162px] w-screen'>
      <div className='flex flex-col gap-[42px] px-5 md:w-[600px] lg:w-[840px] place-self-center'>
        <div className='flex flex-col gap-[12px]'>
          <h2 className='font-bold'>Nova Unidade</h2>

          <div className='flex flex-col gap-[12px]'>

            <div className='flex flex-col md:flex-row w-full gap-[12px]'>
              <TextInput placeholder='Nome da unidade' value={Step11.nome} onChange={(e) => handleInputChange1("nome", e.target.value)} />
              <TextInput placeholder='Endereço' value={Step11.endereco} onChange={(e) => handleInputChange1("endereco", e.target.value)} />
            </div>

          </div>

        </div>
        <div className="flex items-center text-[13px] md:text-[16px] ml-[14px]">
          <input
            type="checkbox"
            className="
              relative w-4 h-4 appearance-none bg-white/[0.4] border-[1px] focus:outline-none rounded-[4px] mr-2
              checked:bg-blue-800 checked:border-none
              hover:ring hover:ring-offset-indigo-400 hover:cursor-pointer
              after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0 after:bg-no-repeat after:bg-center after:bg-[length:16px] 
              checked:after:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA4TDcuMjUgMTEuNzVMMTEuNzUgMy43NSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxLjc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4K')]
          "
          //checked={rememberMe}
          //onChange={(e) => setRememberMe(e.target.checked)}
          />

          Eu aceito o <div className='termo pl-[5px]' onClick={handleTermoClick}>Termo de Compromisso e Privacidade</div>
          <Termo isVisible={isModalVisible} onClose={closeModal} />
        </div>
      </div>

      {/* Rodapé */}
      <div className='relative text-[13px] md:text-[16px] flex flex-row justify-between items-center mx-[147px]'>
        <button></button>

        <button className='botao' type='submit' onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
};

export default Step1;