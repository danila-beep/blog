import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from "react";
import Button from "../atoms/Button";

interface FormGroupPropsTypes
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  title?: string;
  children: ReactNode;
  additionalClasses?: string;
  submitText: string;
  onSubmitClickHandler?: () => void;
}

const FormGroup = ({
  children,
  title,
  additionalClasses,
  submitText,
  onSubmitClickHandler,
  ...props
}: FormGroupPropsTypes) => {
  return (
    <form
      className={`
        flex flex-col gap-[18px]
        lg:gap-[22px]
        ${additionalClasses && additionalClasses}
    `}
      {...props}
    >
      <p
        className="
        text-[24px] font-bold font-sans leading-[110%] text-center pb-[12px]

        lg:text-[32px] lg:pb-[22px]
      "
      >
        {title}
      </p>
      {children}
      <Button
        onClick={onSubmitClickHandler}
        aditionalClasses="mx-auto min-w-[180px]"
        type="button"
      >
        {submitText}
      </Button>
    </form>
  );
};

export default FormGroup;
