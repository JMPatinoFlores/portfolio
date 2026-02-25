export const Footer = () => {
    return (
        <footer className="h-16 container md:mx-auto text-sm md:text-base">
            <div className="flex flex-col items-center justify-center md:items-stretch py-3 gap-3">
                <div className="border-t border-white w-72 md:w-full" />
                <div className="flex flex-col md:flex-row md:justify-between gap-2 items-center md:text-base text-xs text-muted-foreground">
                    <span>&copy; 2026 Made with 🩷 by JessiOwe</span>
                    <span>Illustrations by LessGalaxy</span>
                </div>
            </div>
        </footer>
    );
};
