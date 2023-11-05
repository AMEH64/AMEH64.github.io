import Link from "next/link";
import { appConfig } from "@/config/app";
import { buttonVariants } from "@/components/ui/button";
import { ThemeSelector } from "@/components/theme-selector";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

{
  /*<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">*/
}
{
  /*  <div className="container flex h-14 items-center">*/
}
{
  /*    <div className="flex flex-1 items-center justify-start space-x-2">*/
}
{
  /*      /!*<img src={reactLogo} alt='React' />*!/*/
}
{
  /*    </div>*/
}
{
  /*    <div className="flex flex-1 items-center justify-end space-x-2">*/
}
{
  /*      <ThemeSelector />*/
}
{
  /*    </div>*/
}
{
  /*  </div>*/
}
{
  /*</header>*/
}

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-start">
          {/*TODO: Add logo*/}
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center gap-1">
            <Link
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
              href={appConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
              href={appConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] fill-current" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
              })}
              href={appConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <TwitterLogoIcon className="h-[1.2rem] w-[1.2rem] fill-current" />
              <span className="sr-only">Twitter</span>
            </Link>
            <ThemeSelector />
          </nav>
        </div>
      </div>
    </header>
  );
}
