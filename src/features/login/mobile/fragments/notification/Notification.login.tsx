import * as React from "react";

import clsx from "clsx";
import { getDictionaries } from "../../i18n";
import { useLoginStore } from "../../zustand/store";

export const NotificationLogin: React.FC = () => {
    const store = useLoginStore();
    const dict = getDictionaries("en").errors;
    const handleCloseAlert = () => {
        store.setNotificationClose();
    };
    return (
        <div
            className={clsx(
                "w-full max-w-[328px]",
                "fixed",
                "top-[5rem] left-[50%]",
                "translate-x-[-50%]",
                "z-20",
            )}
        >
            {/* <Alert
                data-testid={"notification-alert"}
                onClose={handleCloseAlert}
                show={store.notification.is_open}
                title={store.notification.title}
                variant="error"
                className={clsx("w-full", "mb-4")}
            >
                <span>{store.notification.description}</span>
            </Alert> */}
        </div>
    );
};
