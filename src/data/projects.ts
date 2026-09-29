import attendanceImage from '../assets/images/projects/attendance.webp'
import elibraryImage from '../assets/images/projects/elibrary.webp'
import epresensiImage from '../assets/images/projects/epresensi.webp'
import kinlineImage from '../assets/images/projects/kinline.webp'

import type { Project } from '../types/project'

export const projects: Project[] = [
    {
        id: 1,
        slug: 'employee-attendance-system',
        title: 'Employee Attendance System',
        category: {
            en: 'Mobile Application',
            id: 'Aplikasi Mobile',
        },
        shortDescription: {
            en: 'Mobile application for employee attendance management.',
            id: 'Aplikasi mobile untuk pengelolaan presensi pegawai.',
        },
        description: {
            en: 'Employee attendance system developed to simplify attendance recording and management through a mobile application.',
            id: 'Sistem presensi pegawai yang dikembangkan untuk mempermudah pencatatan dan pengelolaan presensi melalui aplikasi mobile.',
        },
        image: "attendanceImage",
        technologies: [
            'Flutter',
            'Laravel',
            'MySQL',
            'REST API',
        ],
        featured: true,
    },

    {
        id: 2,
        slug: 'sim-e-library',
        title: 'SIM E-Library',
        category: {
            en: 'Web Application',
            id: 'Aplikasi Web',
        },
        shortDescription: {
            en: 'Internal digital document management system.',
            id: 'Sistem internal untuk pengelolaan dokumen digital.',
        },
        description: {
            en: 'Web-based internal system for managing SOP and employee documents.',
            id: 'Sistem internal berbasis web untuk mengelola SOP dan dokumen pegawai.',
        },
        image: "elibraryImage",
        technologies: [
            'Laravel',
            'React',
            'TypeScript',
            'Tailwind CSS',
            'MySQL',
        ],
        featured: false,
    },

    {
        id: 3,
        slug: 'kinline-company-profile',
        title: 'Kinline Company Profile',
        category: {
            en: 'Fullstack Web',
            id: 'Web Fullstack',
        },
        shortDescription: {
            en: 'Company profile website with a custom content management system.',
            id: 'Website company profile dengan sistem manajemen konten khusus.',
        },
        description: {
            en: 'Company profile website equipped with an administration dashboard for managing website content.',
            id: 'Website company profile yang dilengkapi dashboard administrasi untuk mengelola konten website.',
        },
        image: "kinlineImage",
        technologies: [
            'React',
            'TypeScript',
            'Laravel',
            'Tailwind CSS',
        ],
        featured: false,
    },
    {
        id: 4,
        slug: 'epresensi-pgsd',
        title: 'E-Presensi PGSD',
        category: {
            en: 'Fullstack Web',
            id: 'Web Fullstack',
        },
        shortDescription: {
            en: 'Digital attendance management system for academic activities.',
            id: 'Sistem pengelolaan presensi digital untuk kegiatan akademik.',
        },
        description: {
            en: 'Attendance management platform for managing courses, lecturers, classes, schedules, and attendance.',
            id: 'Platform pengelolaan presensi untuk mengelola mata kuliah, dosen, kelas, jadwal, dan presensi.',
        },
        image: "epresensiImage",
        technologies: [
            'React',
            'TypeScript',
            'Laravel',
            'MySQL',
        ],
        featured: false,
    },
]