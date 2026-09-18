import { useTranslations } from "next-intl";

export const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="h-16 max-w-7xl w-full md:mx-auto text-sm md:text-base">
            <div className="flex flex-col items-center justify-center md:items-stretch py-3 gap-3">
                <div className="border-t border-white w-72 md:w-full" />
                <div className="flex flex-col md:flex-row md:justify-between gap-2 items-center md:text-base text-xs text-muted-foreground">
                    <span>{t("copyright")}</span>
                    <span>{t("illustrations")}</span>
                </div>
            </div>
        </footer>
    );
};
