import { ElementType } from "react";

export interface ProjectProps {
    title: string;
    description: string;
    tools: ToolProps[];
    repo: string;
    link?: string;
    image?: string;
}

export interface ToolProps {
    label: string;
    icon: ElementType;
}
