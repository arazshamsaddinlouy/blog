<script setup lang="ts">
useSeoMeta({
  title: "Articles | Araz Blog",
  description:
    "Browse practical frontend development articles about Nuxt, Vue, React, TypeScript, testing, accessibility and modern web development.",
  ogTitle: "Articles | Araz Blog",
  ogDescription:
    "Browse practical frontend development articles about Nuxt, Vue, React, TypeScript, testing, accessibility and modern web development.",
});

const search = ref("");
const selectedCategory = ref("all");

const {
  data: articles,
  status,
  error,
} = await useAsyncData("all-articles", () =>
  queryCollection("articles").order("publishedAt", "DESC").all(),
);

const categories = computed(() => {
  const allCategories =
    articles.value?.map((article) => article.category).filter(Boolean) ?? [];

  return ["all", ...new Set(allCategories)];
});

const filteredArticles = computed(() => {
  const query = search.value.trim().toLowerCase();

  return (articles.value ?? []).filter((article) => {
    const matchesCategory =
      selectedCategory.value === "all" ||
      article.category === selectedCategory.value;

    const matchesSearch =
      !query ||
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });
});

function resetFilters() {
  search.value = "";
  selectedCategory.value = "all";
}
</script>

<template>
  <div>
    <!-- Header -->
    <section
      class="relative overflow-hidden border-b border-default bg-elevated/40"
    >
      <div
        class="absolute left-1/2 top-0 -z-10 size-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <UContainer class="py-16 sm:py-20">
        <div class="mx-auto max-w-3xl text-center">
          <UBadge
            label="Frontend knowledge base"
            icon="i-lucide-book-open"
            color="primary"
            variant="subtle"
            size="lg"
          />

          <h1
            class="mt-6 text-4xl font-bold tracking-tight text-highlighted sm:text-5xl lg:text-6xl"
          >
            Articles
          </h1>

          <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
            Practical tutorials and insights about frontend architecture, modern
            frameworks, performance, accessibility and developer productivity.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Content -->
    <section class="py-16 sm:py-20">
      <UContainer>
        <!-- Search and filters -->
        <div class="rounded-3xl border border-default bg-default p-5 sm:p-6">
          <div
            class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
          >
            <UInput
              v-model="search"
              type="search"
              placeholder="Search articles..."
              icon="i-lucide-search"
              size="xl"
              class="w-full lg:max-w-md"
            />

            <div class="flex flex-wrap gap-2">
              <UButton
                v-for="category in categories"
                :key="category"
                :label="category === 'all' ? 'All Articles' : category"
                :color="selectedCategory === category ? 'primary' : 'neutral'"
                :variant="selectedCategory === category ? 'soft' : 'ghost'"
                @click="selectedCategory = category"
              />
            </div>
          </div>

          <div
            class="mt-5 flex flex-col gap-2 border-t border-default pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between"
          >
            <span>
              {{ filteredArticles.length }}
              {{ filteredArticles.length === 1 ? "article" : "articles" }}
              found
            </span>

            <UButton
              v-if="search || selectedCategory !== 'all'"
              label="Clear filters"
              icon="i-lucide-x"
              color="neutral"
              variant="ghost"
              size="sm"
              @click="resetFilters"
            />
          </div>
        </div>

        <!-- Loading -->
        <div
          v-if="status === 'pending'"
          class="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          <div
            v-for="item in 6"
            :key="item"
            class="overflow-hidden rounded-2xl border border-default"
          >
            <USkeleton class="h-52 rounded-none" />

            <div class="space-y-4 p-6">
              <div class="flex items-center justify-between gap-4">
                <USkeleton class="h-6 w-24" />
                <USkeleton class="h-4 w-16" />
              </div>

              <USkeleton class="h-7 w-full" />
              <USkeleton class="h-7 w-4/5" />
              <USkeleton class="h-5 w-full" />
              <USkeleton class="h-5 w-3/4" />
            </div>
          </div>
        </div>

        <!-- Error -->
        <div
          v-else-if="error"
          class="mt-10 rounded-3xl border border-error/30 bg-error/10 px-6 py-14 text-center"
        >
          <UIcon
            name="i-lucide-circle-alert"
            class="mx-auto size-11 text-error"
          />

          <h2 class="mt-4 text-xl font-semibold text-highlighted">
            Could not load articles
          </h2>

          <p class="mt-2 text-muted">
            Please check your Nuxt Content configuration.
          </p>
        </div>

        <!-- Articles -->
        <div
          v-else-if="filteredArticles.length"
          class="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          <BlogArticleCard
            v-for="article in filteredArticles"
            :key="article.path"
            :article="article"
          />
        </div>

        <!-- Empty -->
        <div
          v-else
          class="mt-10 rounded-3xl border border-dashed border-default px-6 py-20 text-center"
        >
          <div
            class="mx-auto flex size-16 items-center justify-center rounded-2xl bg-elevated"
          >
            <UIcon name="i-lucide-file-search" class="size-8 text-muted" />
          </div>

          <h2 class="mt-5 text-2xl font-semibold text-highlighted">
            No articles found
          </h2>

          <p class="mx-auto mt-3 max-w-md leading-7 text-muted">
            No article matches your current search or selected category.
          </p>

          <UButton
            label="Reset filters"
            icon="i-lucide-rotate-ccw"
            color="neutral"
            variant="outline"
            class="mt-6"
            @click="resetFilters"
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>
