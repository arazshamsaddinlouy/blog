<script setup lang="ts">
import type { Article } from "~/types/article";

defineProps<{
  article: Article;
}>();

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}
</script>

<template>
  <NuxtLink :to="article.path" class="group block h-full">
    <article
      class="flex h-full flex-col overflow-hidden rounded-2xl border border-default bg-default transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
    >
      <div class="relative h-52 overflow-hidden bg-elevated">
        <img
          v-if="article.image"
          :src="article.image"
          :alt="article.title"
          loading="lazy"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div
          v-else
          :class="[
            article.gradient ??
              'bg-gradient-to-br from-violet-500 to-indigo-700',
            'flex h-full items-center justify-center',
          ]"
        >
          <UIcon
            :name="article.icon ?? 'i-lucide-file-text'"
            class="size-16 text-white transition duration-300 group-hover:scale-110 group-hover:rotate-3"
          />
        </div>

        <div
          class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
        />

        <UBadge
          v-if="article.featured"
          label="Featured"
          icon="i-lucide-star"
          color="primary"
          variant="solid"
          class="absolute left-4 top-4"
        />
      </div>

      <div class="flex flex-1 flex-col p-6">
        <div class="mb-4 flex items-center justify-between gap-3">
          <UBadge :label="article.category" color="primary" variant="subtle" />

          <span class="text-xs text-muted">
            {{ article.readingTime }} min read
          </span>
        </div>

        <h2
          class="text-xl font-semibold leading-7 text-highlighted transition group-hover:text-primary"
        >
          {{ article.title }}
        </h2>

        <p class="mt-3 line-clamp-3 leading-7 text-muted">
          {{ article.description }}
        </p>

        <div
          class="mt-auto flex items-center justify-between gap-4 border-t border-default pt-5"
        >
          <time :datetime="article.publishedAt" class="text-sm text-muted">
            {{ formatDate(article.publishedAt) }}
          </time>

          <span
            class="flex shrink-0 items-center gap-1 text-sm font-medium text-primary"
          >
            Read article

            <UIcon
              name="i-lucide-arrow-right"
              class="size-4 transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>
