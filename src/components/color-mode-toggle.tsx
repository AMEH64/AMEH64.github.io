import { useLayoutEffect } from 'react'
import { Button } from './button'
import { SunIcon } from './icons/sun-icon'
import { MoonIcon } from './icons/moon-icon'
import { z } from 'astro/zod'
import { useLocalStorage } from '~/hooks/use-local-storage'

type ColorModeToggleProps = { className?: string }

const ColorModeSchema = z.enum(['light', 'dark'])
type ColorMode = z.infer<typeof ColorModeSchema>

export const ColorModeToggle = ({ className }: ColorModeToggleProps) => {
  const [colorMode, setColorMode] = useLocalStorage(
    'color-mode',
    ColorModeSchema,
    () =>
      matchMedia('(prefers-color-scheme: dark)').matches
        ? ('dark' as ColorMode)
        : ('light' as ColorMode),
  )

  useLayoutEffect(() => {
    document.documentElement.dataset.colorMode = colorMode

    // Update media attribute of mermaid-dark sources
    // https://dteather.com/blogs/astro-uml-diagrams/
    document
      .querySelectorAll("picture > source[id^='mermaid-dark-']")
      .forEach(el =>
        el.setAttribute('media', colorMode === 'dark' ? 'all' : 'none'),
      )
  }, [colorMode])

  const handleColorModeToggleClick = () =>
    setColorMode(oldColorMode => (oldColorMode === 'light' ? 'dark' : 'light'))

  return (
    <Button
      aria-live="polite"
      onClick={handleColorModeToggleClick}
      type="button"
      variant="text"
    >
      {
        {
          light: (
            <>
              <MoonIcon />
              <span className="sr-only">Dark</span>
            </>
          ),
          dark: (
            <>
              <SunIcon />
              <span className="sr-only">Light</span>
            </>
          ),
        }[colorMode]
      }
    </Button>
  )
}
