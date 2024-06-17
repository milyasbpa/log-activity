import { TabSlice } from "./tab";
import { NotificationSlice } from "./notification";

export type LoginSlice = TabSlice & NotificationSlice;

export * from "./tab";
export * from './notification'
