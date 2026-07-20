---
title: "Frontend Testing with Vitest and Playwright"
description: "Learn how unit tests and browser tests work together in modern frontend projects."
category: "Testing"
publishedAt: "2026-07-12"
readingTime: 9
featured: false
image: "https://picsum.photos/seed/frontend-testing/1200/630"
icon: "i-lucide-flask-conical"
gradient: "bg-gradient-to-br from-orange-400 to-red-700"
---

# Frontend Testing with Vitest and Playwright

A reliable frontend testing strategy normally includes different levels of testing.

## Unit testing with Vitest

Vitest is useful for testing functions, composables and isolated components.

```ts
import { describe, expect, it } from "vitest";

describe("sum", () => {
  it("adds two numbers", () => {
    expect(2 + 3).toBe(5);
  });
});
```

## Browser testing with Playwright

Playwright tests real user interactions:

```ts
import { expect, test } from "@playwright/test";

test("opens the articles page", async ({ page }) => {
  await page.goto("/articles");
  await expect(page.getByRole("heading")).toBeVisible();
});
```

Unit tests provide fast feedback while browser tests verify complete user flows.
