import type { Project } from "./types";

/** Real project data goes here. Empty until content is provided. */
export const projects: Project[] = [];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
