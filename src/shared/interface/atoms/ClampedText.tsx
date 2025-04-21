import { DetailedHTMLProps, ReactNode } from "react";

interface ClampedTextPropsType
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  maxLines: number;
}

const ClampedText = ({
  children,
  maxLines = 2,
  ...props
}: ClampedTextPropsType) => {
  return (
    <p
      {...props}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {children}
    </p>
  );
};

export default ClampedText;
