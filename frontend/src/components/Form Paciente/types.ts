  export interface FormData {
    name: string;
    email: string;
    age: number;
  }
  
  export interface StepProps {
    formData: FormData;
    setFormData: (data: FormData) => void;
    nextStep?: () => void;
    prevStep?: () => void;
  }
  