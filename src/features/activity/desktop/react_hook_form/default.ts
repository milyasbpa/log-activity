import { forms } from "./data";
import { ActivityDesktopForm } from "./type";

export const defaultValues: ActivityDesktopForm = {
  // summary
  [forms.summary.data]: [
    {
      id: "status",
      value: "",
    },
    {
      id: "activity_compliance",
      value: "",
    },
    {
      id: "load_percentage",
      value: "",
    },
    {
      id: "available_time",
      value: "",
    },
    {
      id: "timespent",
      value: "",
    },
    {
      id: "activity",
      value: "",
    },
  ] as {
    id: string;
    value: string;
  }[],

  // create
  [forms.create.is_open]: false as boolean,
  [forms.create.form.project.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.create.form.project.options]: [] as {
    id: string;
    name: string;
  }[],
  [forms.create.form.activity.value]: "" as string,
  [forms.create.form.priority.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.create.form.priority.options]: [] as {
    id: string;
    name: string;
  }[],
  [forms.create.form.start.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.create.form.start.options]: [] as {
    id: string;
    name: string;
  }[],
  [forms.create.form.end.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.create.form.end.options]: [] as {
    id: string;
    name: string;
  }[],
  [forms.create.form.status.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.create.form.status.options]: [] as {
    id: string;
    name: string;
  }[],

  // update
  [forms.update.selected_id]: null as null | string,
  [forms.update.is_open]: false as boolean,
  [forms.update.form.project.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.update.form.project.options]: [] as {
    id: string;
    name: string;
  }[],
  [forms.update.form.activity.value]: "" as string,
  [forms.update.form.priority.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.update.form.priority.options]: [] as {
    id: string;
    name: string;
  }[],
  [forms.update.form.start.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.update.form.start.options]: [] as {
    id: string;
    name: string;
  }[],
  [forms.update.form.end.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.update.form.end.options]: [] as {
    id: string;
    name: string;
  }[],
  [forms.update.form.status.value]: null as {
    id: string;
    name: string;
  } | null,
  [forms.update.form.status.options]: [] as {
    id: string;
    name: string;
  }[],
};
