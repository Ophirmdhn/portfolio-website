import { useState } from 'react'
import {
    Download,
    Menu,
    X,
} from 'lucide-react'

const navigation = [
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Skills',
        href: '#skills',
    },
    {
        label: 'Projects',
        href: '#projects',
    },
    {
        label: 'Experience',
        href: '#experience',
    },
    {
        label: 'Contact',
        href: '#contact',
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] =
        useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
            <div className="section-container">
                <div className="flex h-16 items-center justify-between lg:h-[72px]">

                    <a
                        href="#"
                        className="text-xl font-bold tracking-tight text-slate-950"
                    >
                        Ophi.
                    </a>

                    <nav className="hidden items-center gap-8 lg:flex">
                        {navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:block">
                        <a
                            href={`${import.meta.env.BASE_URL}cv/dwi-ophi-ramadhan-cv.pdf`}
                            download
                            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                        >
                            <Download size={16} />

                            Download CV
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() =>
                            setIsOpen(
                                (previous) =>
                                    !previous,
                            )
                        }
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden"
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <X size={20} />
                        ) : (
                            <Menu size={20} />
                        )}
                    </button>
                </div>

                {isOpen && (
                    <div className="border-t border-slate-200 py-5 lg:hidden">
                        <nav className="flex flex-col gap-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() =>
                                        setIsOpen(false)
                                    }
                                    className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                                >
                                    {item.label}
                                </a>
                            ))}

                            <a
                                href={`${import.meta.env.BASE_URL}cv/dwi-ophi-ramadhan-cv.pdf`}
                                download
                                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
                            >
                                <Download size={16} />

                                Download CV
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}