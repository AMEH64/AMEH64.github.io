import { appConfig } from "@/config/app";
import { ThemeSelector } from "@/components/theme-selector";
import { Button } from "@/components/ui/button";
import { XIcon } from "@/components/ui/icons/XIcon";
import { GitHubIcon } from "@/components/ui/icons/GitHubIcon";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-start">
          {/*TODO: Add logo*/}
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center gap-1">
            <Button
              plain
              href={appConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              plain
              href={appConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {/*<LinkedInIcon className="h-[1.2rem] w-[1.2rem] fill-current" />*/}
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              plain
              href={appConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <XIcon />
              {/*<TwitterLogoIcon className="h-[1.2rem] w-[1.2rem] fill-current" />*/}
              <span className="sr-only">Twitter</span>
            </Button>
            <ThemeSelector />
          </nav>
        </div>
      </div>
    </header>
  );
}
