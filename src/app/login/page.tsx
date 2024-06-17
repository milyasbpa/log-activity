"use client";
import clsx from "clsx";
import { LoginMobilePage } from "@/features/login/mobile/page";

export default function Login() {
  return (
    <main className={clsx("min-h-screen w-full")}>
      <LoginMobilePage />
    </main>
  );
}
