"use client";
import clsx from "clsx";
import { ActivityMobilePage } from "@/features/activity/mobile/page";
import { ActivityDesktopPage } from "@/features/activity/desktop/page";

export default function Home() {
  return (
    <main className={clsx("min-h-screen w-full")}>
      <ActivityDesktopPage />
      <ActivityMobilePage />
    </main>
  );
}
