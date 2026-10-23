import Link from "next/link";

import { SectionReveal } from "@/components/section-reveal";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { socialIcons } from "@/lib/social-icons";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-primary/[0.02] py-12 sm:py-14">
      <SectionReveal>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold">{siteConfig.name}</p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.footer.tagline}
            </p>
            <p className="text-xs text-muted-foreground">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <nav aria-label="Services" className="flex flex-wrap gap-x-4 gap-y-1 pt-2">
              {siteConfig.services.items.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.cv.href}
              download={siteConfig.cv.download}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              {siteConfig.cv.label}
            </a>
            <div className="flex flex-wrap items-center gap-2">
              {siteConfig.social.map((item) => {
                const Icon = socialIcons[item.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target={
                      item.href.startsWith("mailto:") ? undefined : "_blank"
                    }
                    rel={
                      item.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon-sm" }),
                    )}
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      </SectionReveal>
    </footer>
  );
}
