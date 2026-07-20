---
title: "Understanding Nuxt File-Based Routing"
description: "Learn how Nuxt automatically creates application routes from your pages directory."
category: "Nuxt"
publishedAt: "2026-07-19"
readingTime: 6
featured: false
image: "https://picsum.photos/seed/nuxt-routing/1200/630"
icon: "i-simple-icons-nuxtdotjs"
gradient: "bg-gradient-to-br from-emerald-400 to-teal-700"
---

# Understanding Nuxt File-Based Routing

Nuxt automatically creates routes based on files inside the `pages` directory.

This approach removes the need to manually configure most application routes.

## Basic routes

For example:

```text
app/pages/about.vue
```

Nuxt automatically creates:

```text
/about
```

## Nested routes

You can create nested routes by creating nested folders:

```text
app/pages/articles/index.vue
app/pages/articles/latest.vue
```

These files create the following routes:

```text
/articles
/articles/latest
```

## Dynamic routes

Dynamic routes use square brackets in the filename:

```text
app/pages/articles/[slug].vue
```

This file can match routes such as:

```text
/articles/nuxt-routing
/articles/vue-reactivity
```

Inside the component, you can access the dynamic value with `useRoute`:

```vue
<script setup lang="ts">
const route = useRoute();

const slug = computed(() => route.params.slug);
</script>
```

File-based routing keeps Nuxt applications organized and makes route configuration easier to maintain.
