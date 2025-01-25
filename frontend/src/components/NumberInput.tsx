import { JSX, ClassAttributes, InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";
interface NumberInputProps {
  value?: string;
  placeholder: string;
}

export default function NumberInput({
  placeholder,
  ...props
}: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {

  const phoneMask = "(99) 99999-9999";

  return (
    <div className="w-full" {...props}>
      <InputMask
        mask={phoneMask}
        type="text"
        className="inline-block w-full py-[9px] leading-[19px] px-3 text-sm bg-transparent border-2 border-[#7481F6] border-opacity-70 rounded-xl focus:outline-none focus:border-blue-800"
        placeholder={placeholder}
        value={props.value}
      />
    </div>
  );
}
