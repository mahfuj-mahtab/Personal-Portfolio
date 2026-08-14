import { FaAws } from "react-icons/fa";
import {
  SiCelery,
  SiCss,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import { cn } from "@/lib/utils";

export const techIconMap = {
  python: SiPython,
  django: SiDjango,
  drf: SiDjango,
  fastapi: SiFastapi,
  celery: SiCelery,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  mongodb: SiMongodb,
  javascript: SiJavascript,
  typescript: SiTypescript,
  html5: SiHtml5,
  css3: SiCss,
  tailwind: SiTailwindcss,
  react: SiReact,
  nextjs: SiNextdotjs,
  reactnative: TbBrandReactNative,
  nodejs: SiNodedotjs,
  express: SiExpress,
  docker: SiDocker,
  githubactions: SiGithubactions,
  aws: FaAws,
  linux: SiLinux,
  nginx: SiNginx,
  redis: SiRedis,
  openai: null,
  langchain: SiLangchain,
  huggingface: null,
  pytorch: SiPytorch,
  frappe: null,
  erpnext: null,
  judge0: null,
  rabbitmq: null,
};

export function TechIcon({ slug, name, className }) {
  const Icon = techIconMap[slug];

  if (!Icon) {
    const initial = (name ?? slug ?? "?").charAt(0).toUpperCase();
    return (
      <span
        className={cn(
          "flex size-5 shrink-0 items-center justify-center rounded-md bg-muted text-[10px] font-semibold text-muted-foreground",
          className,
        )}
        aria-hidden
      >
        {initial}
      </span>
    );
  }

  return <Icon className={cn("size-5 shrink-0", className)} aria-hidden />;
}
