---
title: "Accessibility Is Not Optional"
description: "Build inclusive interfaces using semantic HTML, keyboard support and accessible form controls."
category: "Accessibility"
publishedAt: "2026-07-11"
readingTime: 8
featured: false
image: "https://picsum.photos/seed/web-accessibility/1200/630"
icon: "i-lucide-accessibility"
gradient: "bg-gradient-to-br from-yellow-400 to-orange-700"
---

# Accessibility Is Not Optional

Accessible interfaces can be used by more people, including users who rely on keyboards or assistive technologies.

## Use semantic elements

Prefer:

```html
<button type="button">Open menu</button>
```

Instead of:

```html
<div @click="openMenu">Open menu</div>
```

## Associate labels with inputs

```html
<label for="email">Email address</label> <input id="email" type="email" />
```

## Support keyboard navigation

Interactive elements should be reachable and usable without a mouse.

## Provide meaningful alternative text

```html
<img src="/team.jpg" alt="Frontend team reviewing a product interface" />
```

Accessibility improves usability, code quality and search engine understanding.
