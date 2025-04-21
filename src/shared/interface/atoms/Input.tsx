import { DetailedHTMLProps, InputHTMLAttributes, useId, useState } from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string;
  changeRelativeHandler?: (name: string, value: string) => void;
  label?: string;
}

const Input = ({ label, changeRelativeHandler, ...props }: InputProps) => {
  const inputId = useId();
  const [inputValue, setInputValue] = useState<string>("");
  const [isInputEmpty, setInputEmpty] = useState<boolean>(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    setInputValue(target.value);
    setInputEmpty(Boolean(!target.value));
    changeRelativeHandler?.(target.name, target.value);
  };

  const handleInputClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    setInputValue("");
    setInputEmpty(true);
    if (e.currentTarget.dataset.name) {
      changeRelativeHandler?.(e.currentTarget.dataset.name, "");
    } else {
      throw new Error("No Name attr on input");
    }
  };

  const labelStyles = `
    absolute text-[16px] leading-[110%] text-[#000000] bg-[#f9f4ec] top-[50%] left-[12px] transform-[translateY(-50%)] transition-all
    group-hover:transform-[translateY(-31px)] group-hover:text-[14px]
    group-focus:transform-[translateY(-31px)] group-focus:text-[14px]
    peer-focus:transform-[translateY(-31px)] peer-focus:text-[14px]
    group-data-[empty=false]:transform-[translateY(-31px)] group-data-[empty=false]:text-[14px]

    lg:text-[20px] lg:left-[18px]
    lg:group-hover:transform-[translateY(-39px)] lg:group-hover:"text-[16px]"
    lg:group-focus:transform-[translateY(-39px)] lg:group-focus:"text-[16px]"
    lg:peer-focus:transform-[translateY(-39px)] lg:peer-focus:"text-[16px]"
    lg:group-data-[empty=false]:transform-[translateY(-39px)] lg:group-data-[empty=false]:"text-[16px]"
  `;

  return (
    <div
      data-empty={isInputEmpty}
      className="
        relative group flex flex-col w-full gap-[12px]
    "
    >
      <input
        id={inputId}
        value={inputValue}
        className="
        peer h-[48px] rounded-[12px] border border-[#00000050] transition-all px-[12px] text-[16px] leading-[110%]
        focus:outline-0 focus:border-[#000000]

        lg:h-[64px] lg:rounded-[16px] lg:px-[18px] lg:text-[20px]
        "
        onChange={handleInputChange}
        {...props}
      />
      {label && (
        <label htmlFor={inputId} className={labelStyles}>
          {label}
        </label>
      )}
      {!isInputEmpty && (
        <button
          type="button"
          onClick={handleInputClear}
          data-name={props.name}
          className="
        absolute w-[18px] h-[18px] top-[50%] right-[16px] transform-[translateY(-50%)] cursor-pointer
      "
        >
          <img src="src/assets/Close.svg" />
        </button>
      )}
    </div>
  );
};

export default Input;
