"use client";

import { Button } from "@/components/ui/button";
import { setLocale } from "@/lib/locale-actions";
import type { Locale } from "@/i18n/config";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const LocaleSwitcher = () => {
    const locale = useLocale() as Locale;
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const nextLocale: Locale = locale === "es" ? "en" : "es";

    const handleClick = () => {
        startTransition(async () => {
            await setLocale(nextLocale);
            router.refresh();
        });
    };

    return (
        <Button
            onClick={handleClick}
            disabled={isPending}
            size="sm"
            variant="ghost"
            className="uppercase text-xs font-medium"
            aria-label={`Switch to ${nextLocale === "es" ? "Spanish" : "English"}`}
        >
            {nextLocale}
        </Button>
    );
};
