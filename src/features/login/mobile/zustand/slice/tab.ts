import { StateCreator } from "zustand";
import { LoginSlice, TabSlice } from "../models";

export const createFilterSlice: StateCreator<LoginSlice, [], [], TabSlice> = (
    set,
) => ({
    tab: {
        selected: { id: "SSO", name: "SSO" },
    },
    setTabSelected: (payload: TabSlice["tab"]["selected"]) =>
        set((state) => ({
            ...state,
            tab: {
                ...state.tab,
                selected: payload,
            },
        })),
});
