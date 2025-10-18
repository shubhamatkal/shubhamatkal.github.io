import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Shubham Atkal",
  EMAIL: "shubhamatkal@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Shubham Atkal - Developer Portfolio, Blog, and Projects",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const ABOUT: Metadata = {
  TITLE: "About",
  DESCRIPTION: "Learn more about Shubham Atkal - my background, education, and interests.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "linkedin",
    HREF: "https://linkedin.com/in/shubhamatkal",
    ICON: "linkedin"
  },
  { 
    NAME: "github",
    HREF: "https://github.com/shubhamatkal",
    ICON: "github"
  },
  { 
    NAME: "x",
    HREF: "https://x.com/shubhamatkal",
    ICON: "x"
  },
  { 
    NAME: "youtube",
    HREF: "https://youtube.com/@shubhamatkal",
    ICON: "youtube"
  },
  { 
    NAME: "whatsapp",
    HREF: "https://wa.me/917219357419",
    ICON: "whatsapp"
  }
];
