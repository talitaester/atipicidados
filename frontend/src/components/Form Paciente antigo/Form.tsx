"use client";
import React, { useEffect, useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

const Form: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    geral: null,
    escola: null,
    mae: null,
    pai: null,
    maisinfo: null,
    saudeinfo: null,
    fotofile: null,
    relescolar: null,
    laudofile: null,
    rgdocfile: null,
    compresfile: null,
  });

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  // ARQUIVOS //

  const updateFoto = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`fotofile`]: data,
    }));
  }
  const updateRelatorio = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`relescolar`]: data,
    }));
  }
  const updateLaudoFile = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`laudofile`]: data,
    }));
  }
  const updateRG = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`rgdocfile`]: data,
    }));
  }
  const updateResidencia = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`compresfile`]: data,
    }));
  }

  ///////////

  const updateLogin = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      'email': data.email,
      'password': data.senha,
    }));
  };

  const updateGeral = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`geral`]: data,
    }));
  };
  const updateEscola = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`escola`]: data,
    }));
  };
  const updateMae = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`mae`]: data,
    }));
  };
  const updatePai = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`pai`]: data,
    }));
  };
  const updateMaisInfo = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`maisinfo`]: data,
    }));
  };
  const updateInfoSaude = (data: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [`saudeinfo`]: data,
    }));
  };

  const handleUserCreation = async () => {
    const data = new FormData();

    data.append('email', JSON.stringify(formData.email));
    data.append('password', JSON.stringify(formData.password));
    data.append('geral', JSON.stringify(formData.geral));
    data.append('mae', JSON.stringify(formData.mae));
    data.append('pai', JSON.stringify(formData.pai));
    data.append('maisinfo', JSON.stringify(formData.maisinfo));
    data.append('escola', JSON.stringify(formData.escola));

    if (formData.fotofile) {
      data.append('fotofile', formData.fotofile);
      console.log('tem foto')
    }
    if (formData.relescolar) {
      data.append('relescolar', formData.relescolar);
      console.log('tem relatorio')
    }
    if (formData.laudofile) {
      data.append('laudofile', formData.laudofile);
      console.log('tem laudo')
    }
    if (formData.compresfile) {
      data.append('compresfile', formData.compresfile);
      console.log('tem comprovante de residencia')
    }
    if (formData.rgdocfile) {
      data.append('rgdocfile', formData.rgdocfile);
      console.log('tem rg')
    }

    console.log(data);

    try {

      const response = await fetch("http://localhost:3002/pacientes/", {
        method: "POST",
        body: data, // mudar caso queira colocar o blob para body: formDataToSend, 
        // headers: { 'Content-Type': 'application/json' }
      })
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  switch (currentStep) {
    case 1:
      return <>
        <button onClick={() => { console.log(formData) }}>Mostrar formData</button>
        <Step1
          nextStep={nextStep}
          updateLogin={(data) => updateLogin(data)}
          updateGeral={(data) => updateGeral(data)}
          updateEscola={(data) => updateEscola(data)}
          updateFoto={(data) => updateFoto(data)}
          updateRelatorio={(data) => updateRelatorio(data)}
          updateRG={(data) => updateRG(data)}
          updateResidencia={(data) => updateResidencia(data)}
        />;
      </>
    case 2:
      return <>
        <button onClick={() => { console.log(formData) }}>Mostrar formData</button>
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          updateMae={(data) => updateMae(data)}
          updatePai={(data) => updatePai(data)}
        />;
      </>
    case 3:
      return <>
        <button onClick={() => { console.log(formData) }}>Mostrar formData</button>
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          updateMaisInfo={(data) => updateMaisInfo(data)}
        />;
      </>
    case 4:
      return <>
        <button onClick={() => { console.log(formData) }}>Mostrar formData</button>
        <Step4
          prevStep={prevStep}
          updateInfoSaude={(data) => updateInfoSaude(data)}
          handleFormDataSubmit={handleUserCreation}
          updateLaudoFile={(data) => updateLaudoFile(data)}
        />;
      </>
    default:
      return null;
  }
};

export default Form;