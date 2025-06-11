export type Project = {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    liveDemo?: string;
};

export type NavItem = {
    id: string;
    icon: React.ReactNode;
    label: string;
};