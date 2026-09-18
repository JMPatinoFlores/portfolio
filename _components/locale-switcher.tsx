"use client";

import { Button } from "@/components/ui/button";
import { setLocale } from "@/lib/locale-actions";
import { cn } from "@/lib/utils";
import { locales, type Locale } from "@/i18n/config";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export const LocaleSwitcher = ({ inMenu = false }: { inMenu?: boolean }) => {
    const t = useTranslations("Nav");
    const locale = useLocale() as Locale;
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const nextLocale: Locale = locale === "es" ? "en" : "es";

    const switchTo = (target: Locale) => {
        if (target === locale || isPending) return;
        startTransition(async () => {
            await setLocale(target);
            router.refresh();
        });
    };

    if (inMenu) {
        return (
            <div className="flex w-full items-center gap-2">
                <span className="text-sm text-white/70">{t("language")}</span>
                <div className="flex items-center gap-1.5 text-sm font-medium">
                    {locales.map((option, index) => (
                        <span key={option} className="flex items-center gap-1.5">
                            {index > 0 && (
                                <span className="text-white/30">|</span>
                            )}
                            <button
                                type="button"
                                onClick={() => switchTo(option)}
                                disabled={isPending}
                                className={cn(
                                    "uppercase transition-colors",
                                    option === locale
                                        ? "text-white"
                                        : "text-white/40 hover:text-white/70",
                                )}
                            >
                                {option}
                            </button>
                        </span>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <Button
            onClick={() => switchTo(nextLocale)}
            disabled={isPending}
            size="icon-sm"
            variant="ghost"
            className="uppercase text-xs font-medium rounded-full"
            aria-label={`Switch to ${nextLocale === "es" ? "Spanish" : "English"}`}
        >
            {nextLocale}
        </Button>
    );
};
