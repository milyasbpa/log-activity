import * as React from "react";
import clsx from "clsx";
import { Backdrop } from "../backdrop";
import { useOnClickOutside } from "usehooks-ts";

export interface DialogProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Dialog = ({ children, isOpen = false, onClose }: DialogProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => {
    if (typeof window === "undefined") return;
    const app = document.getElementById("__next");

    // if (!app) return;
    // app.style.overflow = "auto";
    // app.style.maxHeight = "full";

    if (!onClose) return;
    onClose();
  });

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      const app = document.getElementById("__next");

      if (!app) return;

      // if (!!isOpen) {
      //     app.style.overflow = "hidden";
      //     app.style.maxHeight = "100vh";
      // }
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <Backdrop />
          <div
            ref={ref}
            className={clsx(
              "bg-[#F7F8FA]",
              "fixed top-[50%] left-[50%]",
              "z-[200]",
              "rounded-[0.25rem]",
              "overflow-hidden",
              "translate-x-[-50%] translate-y-[-50%]"
            )}
          >
            {children}
          </div>
        </>
      )}
    </>
  );
};
