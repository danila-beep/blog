import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  aditionalClasses?: string;
}

const Button = ({ aditionalClasses, ...props }: ButtonProps) => {
  return (
    <button
      className={`
    text-[16px] px-[16px] h-[48px] bg-black w-fit text-[#f9f4ec] rounded-[14px] cursor-pointer border border-transparent transition-all

    hover:bg-[#f9f4ec] hover:text-black hover:border-black

    lg:h-[56px] lg:rounded-[16px]

    ${aditionalClasses && aditionalClasses}
  `}
      {...props}
    ></button>
  );
};

export default Button;
