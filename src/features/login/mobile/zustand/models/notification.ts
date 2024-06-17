export interface NotificationSlice {
    notification: {
        is_open: boolean;
        title: string;
        description: string;
    };
    setNotification: (payload: NotificationSlice["notification"]) => void;
    setNotificationOpen: () => void;
    setNotificationClose: () => void;
}
