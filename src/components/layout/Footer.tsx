export default function Footer() {
    const currentYear =
        new Date().getFullYear()

    return (
        <footer className="border-t border-slate-800 bg-slate-950 text-white">

            <div className="section-container">

                <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <p className="font-bold">
                            Ophi.
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            Fullstack Mobile Developer
                        </p>
                    </div>

                    <p className="text-sm text-slate-500">
                        © {currentYear} Dwi Ophi
                        Ramadhan. Built with React,
                        TypeScript & Tailwind CSS.
                    </p>

                </div>

            </div>

        </footer>
    )
}