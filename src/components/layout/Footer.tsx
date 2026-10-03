import { useLanguage } from '../../contexts/LanguageContext'

export default function Footer() {
    const { t } = useLanguage()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-slate-800 bg-slate-950 text-white">
            <div className="section-container">
                <div className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="font-bold">
                            Ophi.
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                            {t.footer.role}
                        </p>
                    </div>

                    <div className="text-sm text-slate-500 sm:text-right">
                        <p>
                            © {currentYear}{' '} Dwi Ophi Ramadhan.{' '} {t.footer.copyright}
                        </p>
                        <p className="mt-1">
                            {t.footer.builtWith}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}