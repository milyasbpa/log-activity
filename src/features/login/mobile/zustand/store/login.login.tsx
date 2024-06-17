import { create } from "zustand";
import { LoginSlice } from "../models";
import { createFilterSlice } from "../slice";
import { createNotificationSlice } from "../slice/notification";

export const useLoginStore = create<LoginSlice>()((...a) => ({
    ...createFilterSlice(...a),
    ...createNotificationSlice(...a),
}));
