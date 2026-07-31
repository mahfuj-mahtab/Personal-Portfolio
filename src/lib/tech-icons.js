import { FaAws } from "react-icons/fa";
import {
  SiCelery,
  SiDjango,
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiHuggingface,
  SiJavascript,
  SiLangchain,
  SiLinux,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
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
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  reactnative: TbBrandReactNative,
  nodejs: SiNodedotjs,
  docker: SiDocker,
  githubactions: SiGithubactions,
  aws: FaAws,
  linux: SiLinux,
  nginx: SiNginx,
  redis: SiRedis,
  openai: null,
  langchain: SiLangchain,
  huggingface: SiHuggingface,
  pytorch: SiPytorch,
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
