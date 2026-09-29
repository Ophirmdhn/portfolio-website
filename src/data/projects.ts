// import attendanceImage from '../assets/images/projects/attendance.webp'
// import elibraryImage from '../assets/images/projects/elibrary.webp'
// import epresensiImage from '../assets/images/projects/epresensi.webp'
// import kinlineImage from '../assets/images/projects/kinline.webp'

import type { Project } from '../types/project'

export const projects: Project[] = [
    {
        id: 1,
        slug: 'employee-attendance-system',
        title: 'Employee Attendance System',
        // category: 'Mobile Application',
        shortDescription: 'Mobile application for employee attendance management.',
        description: 'Employee attendance system developed to simplify attendance recording and management through a mobile application.',
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
        // category: 'Web Application',
        shortDescription: 'Internal digital document management system.',
        description: 'Web-based internal system for managing SOP and employee documents.',
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
        // category: 'Fullstack Web',
        shortDescription: 'Company profile website with a custom content management system.',
        description: 'Company profile website equipped with an administration dashboard for managing website content.',
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
        // category: 'Fullstack Web',
        shortDescription: 'Digital attendance management system for academic activities.',
        description: 'Attendance management platform for managing courses, lecturers, classes, schedules, and attendance.',
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