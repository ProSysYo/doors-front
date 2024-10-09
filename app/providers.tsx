"use client";

import { NextUIProvider } from "@nextui-org/react";
import StoreProvider from "./providers/StoreProvider";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <StoreProvider>{children}</StoreProvider>
        </NextUIProvider>
    );
}
