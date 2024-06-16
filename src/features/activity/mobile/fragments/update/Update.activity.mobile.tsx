import * as React from "react";
import clsx from "clsx";
import { Dialog } from "@/core/components/dialog";
import { getDictionaries } from "../../i18n";
import { InputActivityMobile } from "../../components/input";
import { SelectActivityMobile } from "../../components/select";
import { useFormContext } from "react-hook-form";
import { ActivityMobileForm } from "../../react_hook_form/type";
import { forms } from "../../react_hook_form/data";
import { DatePickerActivityMobile } from "../../components/datepicker";

export const UpdateActivityMobile = () => {
  const {
    watch,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext<ActivityMobileForm>();
  const dictionaries = getDictionaries("en");
  const isOpen = watch(forms.update.is_open) as boolean;

  const projectValue = watch(forms.update.form.project.value) as null | {
    id: string;
    name: string;
  };
  const projectOptions = watch(forms.update.form.project.options) as {
    id: string;
    name: string;
  }[];

  const priorityValue = watch(forms.update.form.priority.value) as null | {
    id: string;
    name: string;
  };
  const priorityOptions = watch(forms.update.form.priority.options) as {
    id: string;
    name: string;
  }[];

  const dateValue = watch(forms.create.form.date.value) as Date;

  const startValue = watch(forms.update.form.start.value) as null | {
    id: string;
    name: string;
  };
  const startOptions = Array.from({ length: 24 }, (_, i) => {
    return {
      id: i < 10 ? `0${i}:00` : `${i}:00`,
      name: i < 10 ? `0${i}:00` : `${i}:00`,
    };
  });

  const endValue = watch(forms.update.form.end.value) as null | {
    id: string;
    name: string;
  };
  const endOptions = Array.from({ length: 24 }, (_, i) => {
    return {
      id: i < 10 ? `0${i}:00` : `${i}:00`,
      name: i < 10 ? `0${i}:00` : `${i}:00`,
    };
  });

  const statusValue = watch(forms.update.form.status.value) as null | {
    id: string;
    name: string;
  };
  const statusOptions = watch(forms.update.form.status.options) as {
    id: string;
    name: string;
  }[];

  const handleClose = () => {
    setValue(forms.update.is_open, false);
  };

  const handleSelectProject = (data: { id: string; name: string }) => {
    setValue(forms.update.form.project.value, data);
  };

  const handleChangeActivity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(forms.update.form.project.value, e.currentTarget.value);
    if (!e.currentTarget.value.length) {
      setError(forms.update.form.activity.value, {
        type: "required",
        message:
          dictionaries.update_activity.form.activity.errors.required.message,
      });
    } else {
      clearErrors(forms.update.form.activity.value);
    }
  };

  const handleSelectPriority = (data: { id: string; name: string }) => {
    setValue(forms.update.form.priority.value, data);
  };

  const handleSelectDate = (data: Date) => {
    setValue(forms.create.form.date.value, data);
  };

  const handleSelectStart = (data: { id: string; name: string }) => {
    setValue(forms.update.form.start.value, data);
  };

  const handleSelectEnd = (data: { id: string; name: string }) => {
    setValue(forms.update.form.end.value, data);
  };

  const handleSelectStatus = (data: { id: string; name: string }) => {
    setValue(forms.update.form.status.value, data);
  };

  const isSubmitDisabled =
    (watch(forms.update.form.project.value) as {
      id: string;
      name: string;
    } | null) === null ||
    !(watch(forms.update.form.activity.value) as string).length ||
    (watch(forms.update.form.priority.value) as {
      id: string;
      name: string;
    } | null) === null ||
    (watch(forms.update.form.start.value) as {
      id: string;
      name: string;
    } | null) === null ||
    (watch(forms.update.form.end.value) as {
      id: string;
      name: string;
    } | null) === null ||
    (watch(forms.update.form.status.value) as {
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
                {dictionaries.update_activity.title}
              </p>
              <p className={clsx("text-[#5C5F62] text-[0.875rem] font-normal")}>
                {dictionaries.update_activity.description}
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
            <SelectActivityMobile
              label={dictionaries.update_activity.form.project.label}
              value={projectValue}
              placeholder={
                dictionaries.update_activity.form.project.placeholder
              }
              options={projectOptions}
              onSelect={handleSelectProject}
            />
            <InputActivityMobile
              label={dictionaries.update_activity.form.activity.label}
              placeholder={
                dictionaries.update_activity.form.activity.placeholder
              }
              isError={
                errors[forms.update.form.activity.value]?.message !== undefined
              }
              helperText={
                errors[forms.update.form.activity.value]?.message ?? ""
              }
              onChange={handleChangeActivity}
            />
            <SelectActivityMobile
              label={dictionaries.update_activity.form.priority.label}
              value={priorityValue}
              placeholder={
                dictionaries.update_activity.form.priority.placeholder
              }
              options={priorityOptions}
              onSelect={handleSelectPriority}
            />
            <DatePickerActivityMobile
              label={dictionaries.update_activity.form.date.label}
              value={dateValue}
              onSelect={handleSelectDate}
            />
            <div
              className={clsx(
                "grid grid-cols-[1fr_auto_1fr] items-center content-center justify-start justify-items-start gap-[1rem]",
                "w-full"
              )}
            >
              <SelectActivityMobile
                label={dictionaries.update_activity.form.start.label}
                value={startValue}
                options={startOptions}
                placeholder={
                  dictionaries.update_activity.form.start.placeholder
                }
                isShowIndicator={false}
                onSelect={handleSelectStart}
              />
              <p className={clsx("text-[#000000] text-[1rem] font-medium")}>
                {"-"}
              </p>
              <SelectActivityMobile
                label={dictionaries.update_activity.form.end.label}
                value={endValue}
                options={endOptions}
                placeholder={dictionaries.update_activity.form.end.placeholder}
                isShowIndicator={false}
                onSelect={handleSelectEnd}
              />
            </div>
            <SelectActivityMobile
              label={dictionaries.update_activity.form.status.label}
              value={statusValue}
              placeholder={dictionaries.update_activity.form.status.placeholder}
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
            {dictionaries.update_activity.cta.update_activity.children}
          </button>
        </div>
      </div>
    </Dialog>
  );
};
