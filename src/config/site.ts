// src/config/site.ts

export const siteConfig = {
  name: "ApexAcademy Cloud",
  description: "Enterprise-grade football academy management platform",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og.jpg",
  links: {
    github: "https://github.com/apex-academy",
  },
};
