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

  //   useEffect(() => {
  //     changeHandler(props.name, inputValue);
  //   }, [inputValue]);

  const labelAnimationConfig = {
    m: {
      yOffset: "transform-[translateY(-205%)]",
      fontSize: "text-[14px]",
    },
    lg: {
      yOffset: "transform-[translateY(-230%)]",
      fontSize: "text-[16px]",
    },
  };

  const labelStyles = `
    absolute text-[16px] leading-[110%] text-[#000000] bg-[#f9f4ec] top-[50%] left-[12px] transform-[translateY(-50%)] transition-all
    group-hover:${labelAnimationConfig.m.yOffset} group-hover:${labelAnimationConfig.m.fontSize}
    group-focus:${labelAnimationConfig.m.yOffset} group-focus:${labelAnimationConfig.m.fontSize}
    peer-focus:${labelAnimationConfig.m.yOffset} peer-focus:${labelAnimationConfig.m.fontSize}
    group-data-[empty=false]:${labelAnimationConfig.m.yOffset} group-data-[empty=false]:${labelAnimationConfig.m.fontSize}

    lg:text-[20px] lg:left-[18px]
    lg:group-hover:${labelAnimationConfig.lg.yOffset} lg:group-hover:${labelAnimationConfig.lg.fontSize}
    lg:group-focus:${labelAnimationConfig.lg.yOffset} lg:group-focus:${labelAnimationConfig.lg.fontSize}
    lg:peer-focus:${labelAnimationConfig.lg.yOffset} lg:peer-focus:${labelAnimationConfig.lg.fontSize}
    lg:group-data-[empty=false]:${labelAnimationConfig.lg.yOffset} lg:group-data-[empty=false]:${labelAnimationConfig.lg.fontSize}
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
