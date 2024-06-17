import { useState } from "react";
import clsx from "clsx";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

export interface PasswordFieldComponentProps
  extends React.HTMLProps<HTMLInputElement> {}

export const PasswordFieldComponent: React.FC<PasswordFieldComponentProps> = ({
  type,
  ...restProps
}: PasswordFieldComponentProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsShow((prev) => !prev);
  };
  return (
    <div className={clsx("w-full", "relative")}>
      <input type={isShow ? "text" : "password"} {...restProps} />

      <button
        type="button"
        onClick={handleShowPassword}
        role={"button"}
        style={{
          bottom: 2,
          right: 2,
          width: 36,
          height: 36,
          outline: "0",
          position: "absolute",
        }}
      >
        {isShow ? <EyeInvisibleOutlined /> : <EyeOutlined />}
      </button>
    </div>
  );
};
