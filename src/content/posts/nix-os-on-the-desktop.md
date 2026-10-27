---
title: "Nix OS on the Desktop: Six Months In"
description: "I moved my daily driver to Nix OS. Survived the first six months, lost a weekend to a broken bootloader, and learned to love declarative everything."
pubDate: 2025-09-14
---

This is a _test post_ for the **UI**, with _multiple_ styles mixed together. Text can also carry _**bold italic**_, `inline code`, and [links to other pages](/).

## A second level heading

Body text under a second level heading. It wraps across several lines to test the readable measure of the prose column and the line height that was configured earlier.

### Third level heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.

#### Fourth level heading

More filler text to see heading hierarchy clearly in the rendered typography.

## Callouts

[A new era](#a-new-era)

> [!NOTE]
> This is an important note callout that users should definitely pay attention to when reading.

> [!TIP]
> A tip callout with some `inline code` inside: `nixos-rebuild switch --flake .#laptop`.

> [!IMPORTANT]
> Key information lives here. Bold **words** and _italics_ work inside callouts too.

> [!WARNING]
> Do not rebuild while your `configuration.nix` tries to wipe the kernel.

> [!CAUTION]
> This action is irreversible. The bootloader, twice.

## Lists

Ordered list:

1. Install Nix OS
2. Declare some packages
3. Break something
4. Roll back
5. Laugh about it later

Unordered list:

- declarative packages
  - one lock file for all inputs
  - easy to review in git
- reproducible builds
  - mostly deterministic
- rollback support first

Task list:

- [x] install home-manager
- [ ] live entirely in one flake

A code block:

```ts
import { getCollection, render } from "astro:content"

interface Herb {
	name: string
	leafiness: number
}

const herbs = await getCollection("herbs")
const freshest = herbs.reduce((best, herb) =>
	herb.data.leafiness > best.data.leafiness ? herb : best,
)

console.log(`The freshest herb is ${freshest.name} with leafiness ${freshest.data.leafiness}`)
```

A diff:

```diff
- cursor: blinking
+ cursor: steady
```
