import { appConfig } from '@/config/app'
import Link from 'next/link'

export function AppFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
          <span>
            Built by Allen Hansen. The source code is available on&nbsp;
            <Link
              href={appConfig.links.repo}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
            .
          </span>
        </p>
      </div>
    </footer>
  )
}