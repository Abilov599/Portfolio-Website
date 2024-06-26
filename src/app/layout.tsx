import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import App from "./app";

import { ThemeScript } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeyhun Abilov | Software Engineer",
  description: `Jeyhun Abilov is a Full-stack Engineer with ${new Date().getFullYear() - 2022} years of experience`,
  keywords:
    "Jeyhun, Abilov, Full-stack, Developer, Software, Engineer, Web, Engineer, Frontend, Backend, JavaScript, TypeScript, React, Next.js, Node.js, TailwindCSS, MongoDB, PostgreSQL, MySQL, GraphQ Apollo, Prisma, NestJS, Vercel, Netlify, AWS, Azure, Docker, Kubernetes, CI/CD, DevOps, SEO, Performance, Accessibility, PWA, Microservices, Clean, Code, SOLID, Design, Patterns, Architecture, Algorithms, Data, Structures, OOP, FP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${inter.className} relative bg-gray-50  text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}
