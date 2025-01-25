import { JSX, ClassAttributes, InputHTMLAttributes, useState } from "react";

interface DateInputProps {
  value: string;
  placeholder: string;
}

export default function DateInput({ placeholder, ...props }: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {
  const [hasValue, setHasValue] = useState(false);

  return (
    <div className="w-full relative" {...props}>
      <div className="relative">
        <input
          type="date"
          id="date-input"
          className="w-full py-[13px] leading-[19px] h-[41px] px-3 text-sm bg-transparent border-2 border-[#7481F6] border-opacity-70 rounded-xl focus:outline-none focus:border-blue-800 appearance-none"
          onChange={(e) => setHasValue(!!e.target.value)}
          value={props.value}
        />
      </div>
    </div>
  )
}