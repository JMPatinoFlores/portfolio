import { ElementType } from "react";

export interface ProjectProps {
    key: string;
    tools: ToolProps[];
    repo?: string;
    link?: string;
    image?: string;
    images?: string[];
}

export interface TranslatedProjectProps extends ProjectProps {
    title: string;
    description: string;
    shortDescription: string;
    stack?: string;
    architecture?: string;
    scope?: string;
}

export interface ToolProps {
    label: string;
    icon: ElementType;
}
