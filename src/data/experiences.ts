import type { Experience } from '../types/experience'

export const experiences: Experience[] = [
    {
        id: 1,

        position: 'IT Support',
        company: 'Klinik Sarlina Saf',

        startDate: 'Feb 2026',
        endDate: 'Present',

        description:
            'Providing technical support for IT infrastructure, hardware, software, and clinical information systems.',

        responsibilities: [
            'Network installation and troubleshooting',
            'Computer, laptop, and printer maintenance',
            'SIMRS user support and troubleshooting',
            'Software installation and maintenance',
            'Vendor coordination for system-related issues',
        ],
    },

    {
        id: 2,

        position: 'Android Developer Intern',
        company: 'Universitas Muhammadiyah Kendari',

        startDate: 'Jan 2024',
        endDate: 'Jan 2026',

        description:
            'Developed mobile applications and supporting backend systems.',

        responsibilities: [
            'Flutter mobile application development',
            'REST API integration',
            'UI/UX implementation',
            'Laravel and Express.js backend development',
        ],
    },
]