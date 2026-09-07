---
name: blog-hero-image
description: Generate a Carbon.now.sh hero image for a blog post and wire it up to the post frontmatter. Use when adding or updating a hero/cover image for a blog post in this site, or when the user asks to create a code screenshot for a post.
disable-model-invocation: true
---

# Blog Hero Image

Generates a styled code screenshot on carbon.now.sh and saves it as the post's hero image.

## Style settings (match existing posts)

| Setting | Value |
|---|---|
| Site | https://carbon.now.sh |
| Theme | Night Owl |
| Background | `#4B8CF5` (solid blue) |
| Window controls | **Off** (Settings → toggle traffic lights off) |
| Drop shadow | Off |
| Language | Shell / Bash for git commands; match actual language otherwise |
| Padding | Default |

## Workflow

1. Open https://carbon.now.sh in the browser.
2. Apply style settings above. Set background color to `#4B8CF5`, disable window controls.
3. **Type the code manually — do NOT paste multi-line code as a block.** Carbon misplaces backslash line continuations when pasting. Use real Enter keypresses between lines.
4. Verify the preview looks correct before exporting:
   - Backslashes `\` appear at the **end** of continuation lines, not the start of the next line.
   - Indentation is correct.
   - Take a browser screenshot to confirm.
5. Click Export → download the PNG (lands in `~/Downloads/carbon.png` or similar).
6. Copy the file into the post's co-located folder and name it `hero.png`:
   ```bash
   cp ~/Downloads/carbon.png src/content/blog/{slug}/hero.png
   ```
7. Update the post's frontmatter `image:` field:
   ```yaml
   image: './hero.png'
   ```
   Remove any old hero file if replacing one.
8. Run `pnpm build` to confirm 0 errors (the `image()` schema validates that the file exists).

## Code style for git commands

Multi-line format reads best for commands with flags:

```
git push \
  --force-with-lease \
  --force-if-includes
```

```
git rebase --onto main \
  feat/a \
  feat/b
```

## Frontmatter schema (required)

```yaml
title: '...'
description: '...'
pubDate: 'YYYY-MM-DD'
image: './hero.png'   # must match actual filename on disk
draft: true           # flip to false when ready to publish
```

## Pitfalls

- **Dracula theme is paywalled** on carbon.now.sh — use Night Owl instead.
- **Paste breaks multi-line backslash continuations** — always type manually.
- If the build throws `Image src must be an imported image or URL, not a string filepath`, the image file is missing or the path in frontmatter is wrong.
- The `image()` schema requires the file to physically exist — generate and save before running the build.
