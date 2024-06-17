import { StateCreator } from "zustand";
import { LoginSlice, NotificationSlice } from "../models";

export const createNotificationSlice: StateCreator<
    LoginSlice,
    [],
    [],
    NotificationSlice
> = (set) => ({
    notification: {
        is_open: false,
        title: "",
        description: "",
    },
    setNotification: (payload: NotificationSlice["notification"]) =>
        set((state) => ({
            ...state,
            notification: payload,
        })),
    setNotificationOpen: () =>
        set((state) => ({
            ...state,
            notification: {
                ...state.notification,
                is_open: true,
            },
        })),
    setNotificationClose: () =>
        set((state) => ({
            ...state,
            notification: {
                ...state.notification,
                is_open: false,
            },
        })),
});
