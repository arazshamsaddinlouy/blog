---
title: "Vue Reactivity Explained From Scratch"
description: "Understand refs, reactive objects, computed properties and watchers in Vue."
category: "Vue"
publishedAt: "2026-07-18"
readingTime: 8
featured: false
image: "https://picsum.photos/seed/vue-reactivity/1200/630"
icon: "i-simple-icons-vuedotjs"
gradient: "bg-gradient-to-br from-green-400 to-emerald-700"
---

# Vue Reactivity Explained From Scratch

Vue reactivity allows the interface to update automatically whenever application state changes.

## Using ref

The `ref` function is commonly used for primitive values:

```vue
<script setup lang="ts">
const count = ref(0);

function increment() {
  count.value++;
}
</script>
```

Inside the template, Vue automatically unwraps the ref:

```vue
<template>
  <button @click="increment">Count: {{ count }}</button>
</template>
```

## Using reactive

The `reactive` function is useful for objects:

```ts
const user = reactive({
  name: "Araz",
  role: "Frontend Developer",
});
```

## Computed values

A computed property derives a value from reactive state:

```ts
const doubledCount = computed(() => count.value * 2);
```

Computed values are cached and only recalculated when their dependencies change.
