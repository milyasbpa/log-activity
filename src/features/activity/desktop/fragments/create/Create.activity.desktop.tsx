import * as React from "react";
import clsx from "clsx";
import { Dialog } from "@/core/components/dialog";
import { getDictionaries } from "../../i18n";
import { InputActivityDesktop } from "../../components/input";
import { SelectActivityDesktop } from "../../components/select";
import { useFormContext } from "react-hook-form";
import { ActivityDesktopForm } from "../../react_hook_form/type";
import { forms } from "../../react_hook_form/data";

export const CreateActivityDesktop = () => {
  const {
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<ActivityDesktopForm>();
  const dictionaries = getDictionaries("en");
  const isOpen = watch(forms.create.is_open) as boolean;

  const projectValue = watch(forms.create.form.project.value) as null | {
    id: string;
    name: string;
  };
  const projectOptions = watch(forms.create.form.project.options) as {
    id: string;
    name: string;
  }[];

  const priorityValue = watch(forms.create.form.priority.value) as null | {
    id: string;
    name: string;
  };
  const priorityOptions = watch(forms.create.form.priority.options) as {
    id: string;
    name: string;
  }[];

  const startValue = watch(forms.create.form.start.value) as null | {
    id: string;
    name: string;
  };
  const startOptions = Array.from({ length: 24 }, (_, i) => {
    return {
      id: i < 10 ? `0${i}:00` : `${i}:00`,
      name: i < 10 ? `0${i}:00` : `${i}:00`,
    };
  });

  const endValue = watch(forms.create.form.end.value) as null | {
    id: string;
    name: string;
  };
  const endOptions = Array.from({ length: 24 }, (_, i) => {
    return {
      id: i < 10 ? `0${i}:00` : `${i}:00`,
      name: i < 10 ? `0${i}:00` : `${i}:00`,
    };
  });

  const statusValue = watch(forms.create.form.status.value) as null | {
    id: string;
    name: string;
  };
  const statusOptions = watch(forms.create.form.status.options) as {
    id: string;
    name: string;
  }[];

  const handleClose = () => {
    setValue(forms.create.is_open, false);
  };

  const handleSelectProject = (data: { id: string; name: string }) => {
    setValue(forms.create.form.project.value, data);
  };

  const handleChangeActivity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(forms.create.form.project.value, e.currentTarget.value);
    if (!e.currentTarget.value.length) {
      setError(forms.create.form.activity.value, {
        type: "required",
        message:
          dictionaries.create_activity.form.activity.errors.required.message,
      });
    } else {
      clearErrors(forms.create.form.activity.value);
    }
  };

  const handleSelectPriority = (data: { id: string; name: string }) => {
    setValue(forms.create.form.priority.value, data);
  };

  const handleSelectStart = (data: { id: string; name: string }) => {
    setValue(forms.create.form.start.value, data);
  };

  const handleSelectEnd = (data: { id: string; name: string }) => {
    setValue(forms.create.form.end.value, data);
  };

  const handleSelectStatus = (data: { id: string; name: string }) => {
    setValue(forms.create.form.status.value, data);
  };

  const isSubmitDisabled =
    (watch(forms.create.form.project.value) as {
      id: string;
      name: string;
    } | null) === null ||
    !(watch(forms.create.form.activity.value) as string).length ||
    (watch(forms.create.form.priority.value) as {
      id: string;
      name: string;
    } | null) === null ||
    (watch(forms.create.form.start.value) as {
      id: string;
      name: string;
    } | null) === null ||
    (watch(forms.create.form.end.value) as {
      id: string;
      name: string;
    } | null) === null ||
    (watch(forms.create.form.status.value) as {
      id: string;
      name: string;
    } | null) === null;

  return (
    <Dialog isOpen={isOpen} onClose={handleClose}>
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
              onClick={handleClose}
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
            <SelectActivityDesktop
              label={dictionaries.create_activity.form.project.label}
              value={projectValue}
              placeholder={
                dictionaries.create_activity.form.project.placeholder
              }
              options={projectOptions}
              onSelect={handleSelectProject}
            />
            <InputActivityDesktop
              label={dictionaries.create_activity.form.activity.label}
              placeholder={
                dictionaries.create_activity.form.activity.placeholder
              }
              isError={
                errors[forms.create.form.activity.value]?.message !== undefined
              }
              helperText={
                errors[forms.create.form.activity.value]?.message ?? ""
              }
              onChange={handleChangeActivity}
            />
            <SelectActivityDesktop
              label={dictionaries.create_activity.form.priority.label}
              value={priorityValue}
              placeholder={
                dictionaries.create_activity.form.priority.placeholder
              }
              options={priorityOptions}
              onSelect={handleSelectPriority}
            />
            <div
              className={clsx(
                "grid grid-cols-[1fr_auto_1fr] items-center content-center justify-start justify-items-start gap-[1rem]",
                "w-full"
              )}
            >
              <SelectActivityDesktop
                label={dictionaries.create_activity.form.start.label}
                value={startValue}
                options={startOptions}
                placeholder={
                  dictionaries.create_activity.form.start.placeholder
                }
                isShowIndicator={false}
                onSelect={handleSelectStart}
              />
              <p className={clsx("text-[#000000] text-[1rem] font-medium")}>
                {"-"}
              </p>
              <SelectActivityDesktop
                label={dictionaries.create_activity.form.end.label}
                value={endValue}
                options={endOptions}
                placeholder={dictionaries.create_activity.form.end.placeholder}
                isShowIndicator={false}
                onSelect={handleSelectEnd}
              />
            </div>
            <SelectActivityDesktop
              label={dictionaries.create_activity.form.status.label}
              value={statusValue}
              placeholder={dictionaries.create_activity.form.status.placeholder}
              options={statusOptions}
              onSelect={handleSelectStatus}
            />
          </div>

          {/* action */}
          <button
            className={clsx(
              "grid grid-cols-1 place-content-center place-items-center gap-[0.125rem]",
              "w-full",
              "rounded-[0.625rem]",
              "bg-[#5C5F62]",
              "disabled:bg-[#5C5F62]",
              "px-[0.75rem] py-[0.75rem]",
              "text-[#FFFFFF] text-[15px] font-medium",
              "disabled:text-[#FFFFFF]"
            )}
            disabled={isSubmitDisabled}
          >
            {dictionaries.create_activity.cta.create_activity.children}
          </button>
        </div>
      </div>
    </Dialog>
  );
};
