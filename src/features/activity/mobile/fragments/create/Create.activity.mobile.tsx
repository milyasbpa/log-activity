import * as React from "react";
import clsx from "clsx";
import { Dialog } from "@/core/components/dialog";
import { getDictionaries } from "../../i18n";
import { InputActivityMobile } from "../../components/input";
import { SelectActivityMobile } from "../../components/select";

export const CreateActivityMobile = () => {
  const dictionaries = getDictionaries("en");
  const isOpen = true;

  const handleCloseFailedExportModal = () => {};

  return (
    <Dialog isOpen={isOpen} onClose={handleCloseFailedExportModal}>
      <div
        className={clsx(
          "grid grid-flow-row grid-rows-[auto_1fr_auto]",
          "w-[calc(100vw-2rem)]"
        )}
      >
        <div
          className={clsx(
            "w-full",
            "bg-white",
            "px-[1rem] py-[1rem]",
            "border-b border-b-[white]",
            "grid grid-cols-1 items-center content-center justify-between justify-items-start gap-[1.125rem]"
          )}
        >
          {/* header */}
          <div
            className={clsx(
              "grid grid-flow-col items-center content-center justify-between justify-items-start gap-[0.5rem]",
              "w-full"
            )}
          >
            <div
              className={clsx(
                "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[0.25rem]",
                "w-full"
              )}
            >
              <p className={clsx("text-[#000000] text-[1rem] font-medium")}>
                {dictionaries.create_activity.title}
              </p>
              <p className={clsx("text-[#5C5F62] text-[0.875rem] font-normal")}>
                {dictionaries.create_activity.description}
              </p>
            </div>

            <button
              className={clsx(
                "grid grid-cols-1 place-content-center place-items-center",
                "w-[1.75rem] h-[1.75rem]",
                "bg-[#EFEFF0]",
                "rounded-[50%]"
              )}
            >
              <img src={"/icons/activity/mobile/fragments/create/close.svg"} />
            </button>
          </div>

          {/* body */}
          <div
            className={clsx(
              "grid grid-cols-1 items-start content-start justify-start justify-items-start gap-[1.5rem]",
              "w-full"
            )}
          >
            <SelectActivityMobile
              label={dictionaries.create_activity.form.project.label}
              value={null}
              placeholder={
                dictionaries.create_activity.form.project.placeholder
              }
            />
            <InputActivityMobile
              label={dictionaries.create_activity.form.activity.label}
              placeholder={
                dictionaries.create_activity.form.activity.placeholder
              }
            />
            <SelectActivityMobile
              label={dictionaries.create_activity.form.priority.label}
              value={null}
              placeholder={
                dictionaries.create_activity.form.priority.placeholder
              }
            />
            <div
              className={clsx(
                "grid grid-cols-[1fr_auto_1fr] items-center content-center justify-start justify-items-start gap-[1rem]",
                "w-full"
              )}
            >
              <SelectActivityMobile
                label={dictionaries.create_activity.form.start.label}
                value={null}
                placeholder={
                  dictionaries.create_activity.form.start.placeholder
                }
              />
              <p className={clsx("text-[#000000] text-[1rem] font-medium")}>
                {"-"}
              </p>
              <SelectActivityMobile
                label={dictionaries.create_activity.form.end.label}
                value={null}
                placeholder={dictionaries.create_activity.form.end.placeholder}
              />
            </div>
            <SelectActivityMobile
              label={dictionaries.create_activity.form.status.label}
              value={null}
              placeholder={dictionaries.create_activity.form.status.placeholder}
            />
          </div>

          {/* action */}
          <button
            className={clsx(
              "grid grid-cols-1 place-content-center place-items-center gap-[0.125rem]",
              "w-full",
              "rounded-[0.625rem]",
              "bg-[#5C5F62]",
              "px-[0.75rem] py-[0.75rem]",
              "text-[#FFFFFF] text-[15px] font-medium"
            )}
          >
            {dictionaries.create_activity.cta.create_activity.children}
          </button>
        </div>
      </div>
    </Dialog>
  );
};
