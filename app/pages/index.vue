<script setup lang="ts">
useSeoMeta({
  title: "Araz Blog | Frontend Development",
  description:
    "Practical articles about React, Angular, Vue, Nuxt, TypeScript and modern frontend development.",
  ogTitle: "Araz Blog | Frontend Development",
  ogDescription:
    "Practical articles about React, Angular, Vue, Nuxt, TypeScript and modern frontend development.",
});

const categories = [
  {
    label: "All Articles",
    value: "all",
    icon: "i-lucide-layout-grid",
  },
  {
    label: "Vue",
    value: "Vue",
    icon: "i-simple-icons-vuedotjs",
  },
  {
    label: "Nuxt",
    value: "Nuxt",
    icon: "i-simple-icons-nuxtdotjs",
  },
  {
    label: "React",
    value: "React",
    icon: "i-simple-icons-react",
  },
  {
    label: "TypeScript",
    value: "TypeScript",
    icon: "i-simple-icons-typescript",
  },
];

const selectedCategory = ref("all");

const {
  data: articles,
  status,
  error,
  refresh,
} = await useAsyncData(
  "homepage-articles-list",
  async () => {
    const result = await queryCollection("articles")
      .order("publishedAt", "DESC")
      .all();

    return result ?? [];
  },
  {
    default: () => [],
  },
);

const featuredArticle = computed(() => {
  return (
    articles.value.find((article) => article.featured) ??
    articles.value[0] ??
    null
  );
});

const latestArticles = computed(() => {
  if (selectedCategory.value === "all") {
    return articles.value;
  }

  return articles.value.filter(
    (article) => article.category === selectedCategory.value,
  );
});

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div
        class="absolute inset-x-0 top-0 -z-10 h-[650px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"
      />

      <div
        class="absolute left-1/2 top-24 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]"
      />

      <UContainer class="py-20 sm:py-28">
        <div class="mx-auto max-w-5xl text-center">
          <UBadge
            icon="i-lucide-code-xml"
            label="Senior Frontend Engineer • 11+ Years Experience"
            color="primary"
            variant="subtle"
            size="lg"
          />

          <h1
            class="mt-8 text-4xl font-bold tracking-tight text-highlighted sm:text-6xl lg:text-7xl"
          >
            Building scalable

            <span
              class="bg-gradient-to-r from-primary via-violet-400 to-sky-400 bg-clip-text text-transparent"
            >
              frontend applications
            </span>

            for real-world products.
          </h1>

          <p
            class="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted sm:text-xl"
          >
            I'm Araz Shams, a Senior Frontend Engineer passionate about React,
            Next.js, Vue and Angular. I write about frontend architecture,
            performance, modern tooling and lessons learned from building
            enterprise software and production applications.
          </p>

          <div
            class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <UButton
              label="Read Articles"
              to="/articles"
              icon="i-lucide-book-open"
              trailing-icon="i-lucide-arrow-right"
              size="xl"
            />

            <UButton
              label="View Portfolio"
              to="https://arazshams.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              icon="i-lucide-globe"
              color="neutral"
              variant="outline"
              size="xl"
            />
          </div>
        </div>
      </UContainer>
    </section>
    <!-- Loading -->
    <section v-if="status === 'pending'">
      <UContainer>
        <div
          class="grid overflow-hidden rounded-3xl border border-default bg-elevated lg:grid-cols-2"
        >
          <USkeleton class="min-h-72 rounded-none lg:min-h-[430px]" />

          <div class="flex flex-col justify-center p-8 sm:p-12">
            <USkeleton class="h-6 w-32" />
            <USkeleton class="mt-6 h-10 w-full" />
            <USkeleton class="mt-3 h-10 w-4/5" />
            <USkeleton class="mt-6 h-5 w-full" />
            <USkeleton class="mt-3 h-5 w-3/4" />
            <USkeleton class="mt-8 h-5 w-44" />
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Error -->
    <section v-else-if="error">
      <UContainer>
        <div
          class="rounded-3xl border border-error/30 bg-error/10 p-8 text-center"
        >
          <UIcon
            name="i-lucide-circle-alert"
            class="mx-auto size-10 text-error"
          />

          <h2 class="mt-4 text-xl font-semibold text-highlighted">
            Could not load articles
          </h2>

          <p class="mt-2 text-muted">
            Please check your Nuxt Content configuration.
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Featured article -->
    <section v-else-if="featuredArticle">
      <UContainer>
        <NuxtLink
          :to="featuredArticle.path"
          class="group grid overflow-hidden rounded-3xl border border-default bg-elevated transition hover:border-primary/40 hover:shadow-2xl lg:grid-cols-2"
        >
          <!-- Image -->
          <div class="relative h-80 overflow-hidden lg:h-auto">
            <img
              :src="featuredArticle.image"
              :alt="featuredArticle.title"
              class="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            />

            <UBadge
              label="Featured"
              color="primary"
              class="absolute left-5 top-5"
            />
          </div>

          <!-- Content -->
          <div class="flex flex-col justify-center p-8 sm:p-12">
            <UBadge
              :label="featuredArticle.category"
              color="neutral"
              variant="soft"
              class="w-fit"
            />

            <h2
              class="mt-6 text-4xl font-bold text-highlighted transition group-hover:text-primary"
            >
              {{ featuredArticle.title }}
            </h2>

            <p class="mt-5 text-lg leading-8 text-muted">
              {{ featuredArticle.description }}
            </p>

            <div class="mt-6 flex items-center gap-3 text-sm text-muted">
              <span>{{ formatDate(featuredArticle.publishedAt) }}</span>

              <span>•</span>

              <span>{{ featuredArticle.readingTime }} min read</span>
            </div>

            <div
              class="mt-8 flex items-center gap-2 font-semibold text-primary"
            >
              Read article

              <UIcon
                name="i-lucide-arrow-right"
                class="transition group-hover:translate-x-2"
              />
            </div>
          </div>
        </NuxtLink>
      </UContainer>
    </section>

    <!-- Latest articles -->
    <section class="py-24">
      <UContainer>
        <div
          class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p class="font-medium text-primary">Latest articles</p>

            <h2
              class="mt-2 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl"
            >
              Learn something new
            </h2>

            <p class="mt-3 max-w-xl leading-7 text-muted">
              Tutorials and insights about frontend development, architecture
              and modern JavaScript frameworks.
            </p>
          </div>

          <UButton
            label="View all articles"
            to="/articles"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
          />
        </div>

        <!-- Categories -->
        <div class="mt-8 flex flex-wrap gap-2">
          <UButton
            v-for="category in categories"
            :key="category.value"
            :label="category.label"
            :icon="category.icon"
            :color="selectedCategory === category.value ? 'primary' : 'neutral'"
            :variant="selectedCategory === category.value ? 'soft' : 'ghost'"
            @click="selectedCategory = category.value"
          />
        </div>

        <!-- Article cards -->
        <div
          v-if="latestArticles.length"
          class="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          <BlogArticleCard
            v-for="article in latestArticles"
            :key="article.path"
            :article="article"
          />
        </div>

        <!-- Empty category -->
        <div
          v-else
          class="mt-10 rounded-3xl border border-dashed border-default px-6 py-16 text-center"
        >
          <UIcon name="i-lucide-files" class="mx-auto size-10 text-muted" />

          <h3 class="mt-4 text-xl font-semibold text-highlighted">
            No articles found
          </h3>

          <p class="mt-2 text-muted">
            There are currently no articles in this category.
          </p>

          <UButton
            label="Show all articles"
            color="neutral"
            variant="outline"
            class="mt-6"
            @click="selectedCategory = 'all'"
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>
