import type { Experience } from '../types/experience'

export const experiences: Experience[] = [
    {
        id: 1,

        position: {
            en: 'IT Support',
            id: 'IT Support',
        },

        company:
            'Klinik Sarlina Saf',

        startDate: 'Feb 2026',

        endDate: {
            en: 'Present',
            id: 'Sekarang',
        },

        description: {
            en: 'Providing technical support for IT infrastructure, hardware, software, and clinical information systems.',

            id: 'Memberikan dukungan teknis untuk infrastruktur IT, perangkat keras, perangkat lunak, dan sistem informasi klinik.',
        },

        responsibilities: [
            {
                en: 'Network installation and troubleshooting',
                id: 'Instalasi dan troubleshooting jaringan',
            },

            {
                en: 'Computer, laptop, and printer maintenance',
                id: 'Pemeliharaan komputer, laptop, dan printer',
            },

            {
                en: 'SIMRS user support and troubleshooting',
                id: 'Dukungan pengguna dan troubleshooting SIMRS',
            },

            {
                en: 'Software installation and maintenance',
                id: 'Instalasi dan pemeliharaan perangkat lunak',
            },

            {
                en: 'Vendor coordination for system-related issues',
                id: 'Koordinasi dengan vendor untuk permasalahan sistem',
            },
        ],
    },

    {
        id: 2,

        position: {
            en: 'Android Developer Intern',
            id: 'Magang Android Developer',
        },

        company:
            'Universitas Muhammadiyah Kendari',

        startDate: 'Jan 2024',

        endDate: {
            en: 'Jan 2026',
            id: 'Jan 2026',
        },

        description: {
            en: 'Developed mobile applications and supporting backend systems.',

            id: 'Mengembangkan aplikasi mobile dan sistem backend pendukung.',
        },

        responsibilities: [
            {
                en: 'Flutter mobile application development',
                id: 'Pengembangan aplikasi mobile menggunakan Flutter',
            },

            {
                en: 'REST API integration',
                id: 'Integrasi REST API',
            },

            {
                en: 'UI/UX implementation',
                id: 'Implementasi UI/UX',
            },

            {
                en: 'Laravel and Express.js backend development',
                id: 'Pengembangan backend menggunakan Laravel dan Express.js',
            },
        ],
    },
]