import React, { useState } from 'react';
import { StepProps } from './types';
import SelectInput from '../SelectInput';
import DateInput from '../DateInput';
import TextInput from '../TextInput';
import CheckInput from '../CheckInput';
import FileInput from '../FileInput';
import NumberInput from '../NumberInput';
import Termo from '../Termo';

type Step4State = {
  diagnostico: string;
  datadiagnostico: string;
  medicacao: string;
  qualmedicacao: string;
  medico: string;
  medicocontato: string;
  objetivo: string;
  comorbidade: string;
  qualcomorbidade: string;
  providencias: string;
  doenca: [];
  alergia: [];
  asma: string;
  relevante: string;
};


const Step4: React.FC<{
  prevStep: () => void;
  updateLaudoFile: (data: any) => void; 
  updateInfoSaude: (data: Step4State) => void; 
  handleFormDataSubmit: () => void 
}> = ({ prevStep, updateInfoSaude, handleFormDataSubmit, updateLaudoFile }) => {
  const [selectedCheckboxOptions, setSelectedCheckboxOptions] = useState<string[]>([]);

  const [Step4, setStep4] = useState<Step4State>({
    diagnostico: "",
    datadiagnostico: "",
    medicacao: "",
    qualmedicacao: "",
    medico: "",
    medicocontato: "",
    objetivo: "",
    comorbidade: "",
    qualcomorbidade: "",
    providencias: "",
    doenca: [],
    alergia: [],
    asma: "",
    relevante: "",
  });

  const [hasMedicacao, setHasMedicacao] = useState(false);
  const [hasDiagnostico, setHasDiagnostico] = useState(false);
  const [hasComorbidade, setHasComorbidade] = useState(false);
  const [hasAsma, setHasAsma] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleInputChange = (key: string, value: string) => {
    setStep4((prevState) => {
      const updatedForm = {
        ...prevState,
        [key]: value,
      };
      updateInfoSaude(updatedForm);
      return updatedForm;
    });
  };

  const handleInputChangeList = (key: string, value: string[]) => {
    setStep4((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const [laudoFile, setLaudoFile] = useState<File | null>(null);

  const handleLaudoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLaudoFile(e.target.files[0]);
    }
  }

  const handleDoencaChange = (options: string[]) => {
    setSelectedCheckboxOptions(options);
    // console.log(selectedCheckboxOptions);
    handleInputChangeList("doenca", options);
  };

  const handleAlergiaChange = (options: string[]) => {
    setSelectedCheckboxOptions(options);
    // console.log(selectedCheckboxOptions);
    handleInputChangeList("alergia", options);
  };

  const handleMedicacaoChange = (selectedOption: string) => {
    setHasMedicacao(selectedOption === 'Sim, toma alguma medicação');
    handleInputChange("medicacao", selectedOption);
  };

  const handleDiagnosticoChange = (selectedOption: string) => {
    setHasDiagnostico(selectedOption === 'Sim, tem diagnóstico');
    handleInputChange("diagnostico", selectedOption);
  };

  const handleComorbidadeChange = (selectedOption: string) => {
    setHasComorbidade(selectedOption === 'Sim, possui alguma comorbidade');
    handleInputChange("comorbidade", selectedOption);
  };

  const handleAsmaChange = (selectedOption: string) => {
    setHasAsma(selectedOption === 'Sim, tem asma');
    handleInputChange("asma", selectedOption);
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
      <div className='flex flex-col gap-[42px] px-5 lg:w-[840px] place-self-center'>

        <div className='flex flex-col gap-[12px]'>
          <h4 className='pl-2'>Informações de saúde</h4>
          <button onClick={() => {console.log(Step4)}}>Mostrar Respostas</button>
          <div className='flex flex-col md:flex-row w-full gap-[12px]'>
            <SelectInput
              options={["Sim, tem diagnóstico", "Não tem diagnóstico"]}
              placeholder={"Tem diagnóstico?"}
              className='min-w-[300px]'
              onChange={handleDiagnosticoChange}
            />
            <DateInput
              className={`transition-opacity duration-300 w-full ${hasDiagnostico ? 'opacity-100' : 'opacity-40'} ${hasDiagnostico ? '' : 'cursor-not-allowed'}`}
              disabled={!hasDiagnostico}
              style={{ pointerEvents: hasDiagnostico ? 'auto' : 'none' }}
              value={Step4.datadiagnostico} onChange={(e) => { handleInputChange("datadiagnostico", e.target.value) }}
            />
          </div>

          <div className='flex flex-col md:flex-row w-full gap-[12px]'>
            <SelectInput
              options={["Sim, toma alguma medicação", "Não toma alguma medicação"]}
              placeholder={"Toma alguma medicação?"}
              className='min-w-[300px]'
              onChange={handleMedicacaoChange}
            />
            <TextInput
              placeholder='Qual(is) medicação(ões)?'
              className={`transition-opacity duration-300 w-full ${hasMedicacao ? 'opacity-100' : 'opacity-40'} ${hasMedicacao ? '' : 'cursor-not-allowed'}`}
              disabled={!hasMedicacao}
              style={{ pointerEvents: hasMedicacao ? 'auto' : 'none' }}
              value={Step4.qualmedicacao} onChange={(e) => { handleInputChange("qualmedicacao", e.target.value) }}
            />
          </div>

          <div className='flex flex-col md:flex-row w-full gap-[12px]'>
            <TextInput
              placeholder="Médico responsável"
              className={`transition-opacity duration-300 w-full ${hasMedicacao ? 'opacity-100' : 'opacity-40'} ${hasMedicacao ? '' : 'cursor-not-allowed'}`}
              disabled={!hasMedicacao}
              style={{ pointerEvents: hasMedicacao ? 'auto' : 'none' }}
              value={Step4.medico} onChange={(e) => { handleInputChange("medico", e.target.value) }}
            />
            <NumberInput
              placeholder="Contato do médico responsável"
              className={`transition-opacity duration-300 min-w-[300px] ${hasMedicacao ? 'opacity-100' : 'opacity-40'} ${hasMedicacao ? '' : 'cursor-not-allowed'}`}
              disabled={!hasMedicacao}
              style={{ pointerEvents: hasMedicacao ? 'auto' : 'none' }}
              value={Step4.medicocontato} onChange={(e) => { handleInputChange("medicocontato", e.target.value) }}
            />
          </div>

          <TextInput
            placeholder='Objetivo da medicação'
            className={`transition-opacity duration-300 w-full ${hasMedicacao ? 'opacity-100' : 'opacity-40'} ${hasMedicacao ? '' : 'cursor-not-allowed'}`}
            disabled={!hasMedicacao}
            style={{ pointerEvents: hasMedicacao ? 'auto' : 'none' }}
            value={Step4.objetivo} onChange={(e) => { handleInputChange("objetivo", e.target.value) }}
          />

          <div className='flex flex-col md:flex-row w-full gap-[12px]'>
            <SelectInput
              options={["Sim, possui alguma comorbidade", "Não possui alguma comorbidade"]}
              placeholder={"Possui alguma comorbidade?"}
              className='min-w-[300px]'
              onChange={handleComorbidadeChange} />
            <TextInput
              placeholder='Qual(is) comorbidade(s)?'
              className={`transition-opacity duration-300 w-full ${hasComorbidade ? 'opacity-100' : 'opacity-40'} ${hasComorbidade ? '' : 'cursor-not-allowed'}`}
              disabled={!hasComorbidade}
              style={{ pointerEvents: hasComorbidade ? 'auto' : 'none' }}
              value={Step4.qualcomorbidade} onChange={(e) => { handleInputChange("qualcomorbidade", e.target.value) }}
            />
          </div>

          <TextInput placeholder='Providências tomadas após o diagnóstico ou suspeita' value={Step4.providencias} onChange={(e) => { handleInputChange("providencias", e.target.value) }} />

          <CheckInput title='Possui alguma doença?' options={["Diabetes", "Pressão alta", "Nenhuma"]} onChange={handleDoencaChange} />
          <CheckInput title='Possui alguma alergia?' options={["Rinite", "Sinusite", "Nenhuma"]} onChange={handleAlergiaChange} />

          <div className='flex flex-col md:flex-row w-full gap-[12px]'>
            <SelectInput
              options={["Sim, tem asma", "Não tem asma"]}
              placeholder={"Tem asma?"}
              className='min-w-[300px]'
              onChange={handleAsmaChange} />
            <FileInput
              placeholder="Relatório do diagnóstico"
              className={`transition-opacity duration-300 w-full ${hasAsma ? 'opacity-100' : 'opacity-40'} ${hasAsma ? '' : 'cursor-not-allowed'}`}
              disabled={!hasAsma}
              style={{ pointerEvents: hasAsma ? 'auto' : 'none' }}
              name='laudofile'
              onChange={handleLaudoFileChange}
            />
          </div>

          <TextInput placeholder='Alguma informação de saúde relevante?' className='h-[86px]' value={Step4.relevante} onChange={(e) => { handleInputChange("relevante", e.target.value) }} />

        </div>

        <div className="flex text-[13px] md:text-[16px] items-center ml-[14px]">
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
        <button onClick={prevStep} className='botao'>Página anterior</button>

        <div className='hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          4 de 4
        </div>

        <button className='botao' type='submit' onClick={handleSubmit}>Enviar</button>
      </div>
    </div>
  );
};

export default Step4;
