"use client";
import * as React from "react";
import clsx from "clsx";

export interface PasswordInputLoginMobileProps
  extends React.HTMLProps<HTMLInputElement> {
  helperText?: string;
  isError?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const PasswordInputLoginMobile = ({
  helperText = "",
  isError = false,
  startIcon,
  endIcon,
  ...otherProps
}: PasswordInputLoginMobileProps) => {
  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => {
    setIsShowPassword((prev) => !prev);
  };
  return (
    <div
      className={clsx(
        "grid grid-cols-1 place-content-start place-items-start gap-[0.5rem]",
        "w-full"
      )}
    >
      {(otherProps?.label ?? "").length > 0 && (
        <p className={clsx("text-[15px] text-[#212121] font-normal")}>
          {otherProps.label}
        </p>
      )}

      <div
        className={clsx(
          "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0.75rem]",
          "w-full",
          "rounded-[1rem]",
          "px-[1rem] py-[1rem]",
          "bg-[white]"
        )}
        style={{
          boxShadow: "0px 1px 8px 0px #00000014",
        }}
      >
        <div
          className={clsx(
            "grid grid-flow-col items-center content-center justify-start justify-items-start gap-[0.75rem]",
            "w-full"
          )}
        >
          {startIcon && startIcon}
          <input
            className={clsx(
              "text-[1rem] text-[#1C1243] font-normal",
              "placeholder:text-[1rem] placeholder:text-[#1D2939] placeholder:font-normal",
              "outline-none",
              "border-[0px]",
              "w-full"
            )}
            {...otherProps}
            type={isShowPassword ? "text" : "password"}
          />
        </div>
        <button onClick={handleClickShowPassword}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.7399 8.27246C20.5306 7.91498 20.0712 7.79482 19.7137 8.00407C19.3563 8.21332 19.2361 8.67274 19.4453 9.03021L20.7399 8.27246ZM20.0926 15.3487L19.4453 14.9698L20.0926 15.3487ZM9.16464 18.7776C8.77298 18.6427 8.34619 18.851 8.21137 19.2426C8.07656 19.6343 8.28478 20.0611 8.67645 20.1959L9.16464 18.7776ZM3.9074 15.3487L4.55466 14.9698L3.9074 15.3487ZM3.9074 8.65133L4.55466 9.03021L3.9074 8.65133ZM13.9162 9.96831C14.216 10.2542 14.6907 10.2429 14.9766 9.94318C15.2624 9.64343 15.2512 9.16869 14.9514 8.88282L13.9162 9.96831ZM8.7432 14.9157C9.01234 15.2305 9.48577 15.2676 9.80062 14.9985C10.1155 14.7293 10.1525 14.2559 9.8834 13.941L8.7432 14.9157ZM16.3067 12.0607C16.3067 11.6465 15.9709 11.3107 15.5567 11.3107C15.1425 11.3107 14.8067 11.6465 14.8067 12.0607H16.3067ZM11.9994 14.9233C11.5852 14.9233 11.2494 15.2591 11.2494 15.6733C11.2494 16.0875 11.5852 16.4233 11.9994 16.4233V14.9233ZM20.4095 4.52614C20.7001 4.23095 20.6963 3.75609 20.4011 3.46551C20.1059 3.17493 19.6311 3.17867 19.3405 3.47386L20.4095 4.52614ZM4.15301 18.9024C3.86243 19.1976 3.86617 19.6725 4.16136 19.9631C4.45655 20.2536 4.93141 20.2499 5.22199 19.9547L4.15301 18.9024ZM19.4453 9.03021C20.5182 10.8631 20.5182 13.1369 19.4453 14.9698L20.7399 15.7275C22.0867 13.4266 22.0867 10.5734 20.7399 8.27246L19.4453 9.03021ZM19.4453 14.9698C17.2217 18.7686 12.8404 20.0427 9.16464 18.7776L8.67645 20.1959C12.9744 21.6752 18.1274 20.1907 20.7399 15.7275L19.4453 14.9698ZM4.55466 14.9698C3.48178 13.1369 3.48178 10.8631 4.55466 9.03021L3.26013 8.27246C1.91329 10.5734 1.91329 13.4266 3.26013 15.7275L4.55466 14.9698ZM6.45255 17.2388C5.72734 16.6258 5.08181 15.8704 4.55466 14.9698L3.26013 15.7275C3.87315 16.7748 4.62893 17.6614 5.48415 18.3843L6.45255 17.2388ZM4.55466 9.03021C7.26824 4.3944 13.2017 3.51996 17.1232 6.42527L18.0162 5.22C13.4173 1.81293 6.44922 2.8243 3.26013 8.27246L4.55466 9.03021ZM9.19331 12.0607C9.19331 10.467 10.4606 9.19699 11.9994 9.19699V7.69699C9.60973 7.69699 7.69331 9.66125 7.69331 12.0607H9.19331ZM11.9994 9.19699C12.7392 9.19699 13.4126 9.48802 13.9162 9.96831L14.9514 8.88282C14.1822 8.14925 13.1429 7.69699 11.9994 7.69699V9.19699ZM9.8834 13.941C9.45402 13.4387 9.19331 12.7825 9.19331 12.0607H7.69331C7.69331 13.1505 8.08864 14.15 8.7432 14.9157L9.8834 13.941ZM14.8067 12.0607C14.8067 13.6528 13.5387 14.9233 11.9994 14.9233V16.4233C14.3887 16.4233 16.3067 14.4595 16.3067 12.0607H14.8067ZM19.3405 3.47386L4.15301 18.9024L5.22199 19.9547L20.4095 4.52614L19.3405 3.47386Z"
              fill="#1C1243"
            />
          </svg>
        </button>
      </div>
      {helperText.length > 0 && (
        <p
          className={clsx(
            "text-[15px] font-normal",
            isError ? "text-[red]" : "text-[#212121]"
          )}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};
