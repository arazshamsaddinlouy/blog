<script setup lang="ts">
const route = useRoute();

const articlePath = computed(() => `/articles/${route.params.slug}`);

const { data: article } = await useAsyncData(
  () => `article-${route.params.slug}`,
  () => queryCollection("articles").path(articlePath.value).first(),
  {
    watch: [articlePath],
  },
);

if (!article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Article not found",
  });
}

/*
 * Previous and next articles
 */
const { data: surroundings } = await useAsyncData(
  () => `article-surroundings-${route.params.slug}`,
  () =>
    queryCollectionItemSurroundings("articles", articlePath.value, {
      fields: ["title", "description", "path", "category", "publishedAt"],
    }),
  {
    watch: [articlePath],
  },
);

const previousArticle = computed(() => {
  return surroundings.value?.[0] ?? null;
});

const nextArticle = computed(() => {
  return surroundings.value?.[1] ?? null;
});

/*
 * Table of Contents
 */
const tableOfContents = computed(() => {
  return article.value?.body?.toc?.links ?? [];
});

useSeoMeta({
  title: () => article.value?.title ?? "Article",
  description: () => article.value?.description ?? "",
  ogTitle: () => article.value?.title ?? "Article",
  ogDescription: () => article.value?.description ?? "",
  ogImage: () => article.value?.image,
  ogType: "article",
  twitterCard: "summary_large_image",
});

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
const { data: relatedArticles } = await useAsyncData(
  () => `related-articles-${route.params.slug}`,
  async () => {
    if (!article.value) return [];

    return queryCollection("articles")
      .where("category", "=", article.value.category)
      .where("path", "<>", article.value.path)
      .order("publishedAt", "DESC")
      .limit(3)
      .all();
  },
  {
    watch: [articlePath],
  },
);
</script>

<template>
  <article v-if="article">
    <!-- Article header -->
    <header class="border-b border-default">
      <UContainer class="py-16 sm:py-20">
        <div class="mx-auto max-w-4xl">
          <NuxtLink
            to="/articles"
            class="inline-flex items-center gap-2 text-sm text-muted transition hover:text-primary"
          >
            <UIcon name="i-lucide-arrow-left" class="size-4" />

            Back to articles
          </NuxtLink>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <UBadge
              :label="article.category"
              color="primary"
              variant="subtle"
            />

            <span class="text-sm text-muted">
              {{ article.readingTime }} min read
            </span>
          </div>

          <h1
            class="mt-6 text-4xl font-bold tracking-tight text-highlighted sm:text-5xl lg:text-6xl"
          >
            {{ article.title }}
          </h1>

          <p class="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            {{ article.description }}
          </p>

          <div
            class="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted"
          >
            <time :datetime="article.publishedAt">
              {{ formatDate(article.publishedAt) }}
            </time>

            <span class="size-1 rounded-full bg-muted" />

            <span>By Araz Shamsaddinlouy</span>
          </div>
        </div>
      </UContainer>
    </header>

    <!-- Article content -->
    <UContainer class="py-10 sm:py-14">
      <div class="mx-auto max-w-6xl">
        <!-- Cover image -->
        <div
          v-if="article.image"
          class="overflow-hidden rounded-3xl border border-default bg-elevated"
        >
          <img
            :src="article.image"
            :alt="article.title"
            class="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div
          class="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_260px]"
        >
          <!-- Markdown body -->
          <main class="min-w-0">
            <ContentRenderer
              :value="article"
              class="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-28 prose-a:text-primary prose-pre:overflow-x-auto prose-img:rounded-2xl"
            />

            <!-- Previous / Next navigation -->
            <nav
              v-if="previousArticle || nextArticle"
              aria-label="Article navigation"
              class="mt-16 grid gap-4 border-t border-default pt-10 sm:grid-cols-2"
            >
              <NuxtLink
                v-if="previousArticle"
                :to="previousArticle.path"
                class="group rounded-2xl border border-default bg-default p-5 transition hover:border-primary/40 hover:bg-elevated"
              >
                <div
                  class="flex items-center gap-2 text-sm font-medium text-muted"
                >
                  <UIcon
                    name="i-lucide-arrow-left"
                    class="size-4 transition-transform group-hover:-translate-x-1"
                  />

                  Previous article
                </div>

                <h2
                  class="mt-3 font-semibold leading-6 text-highlighted transition group-hover:text-primary"
                >
                  {{ previousArticle.title }}
                </h2>

                <p
                  v-if="previousArticle.description"
                  class="mt-2 line-clamp-2 text-sm leading-6 text-muted"
                >
                  {{ previousArticle.description }}
                </p>
              </NuxtLink>

              <div v-else class="hidden sm:block" />

              <NuxtLink
                v-if="nextArticle"
                :to="nextArticle.path"
                class="group rounded-2xl border border-default bg-default p-5 text-left transition hover:border-primary/40 hover:bg-elevated sm:text-right"
              >
                <div
                  class="flex items-center gap-2 text-sm font-medium text-muted sm:justify-end"
                >
                  Next article

                  <UIcon
                    name="i-lucide-arrow-right"
                    class="size-4 transition-transform group-hover:translate-x-1"
                  />
                </div>

                <h2
                  class="mt-3 font-semibold leading-6 text-highlighted transition group-hover:text-primary"
                >
                  {{ nextArticle.title }}
                </h2>

                <p
                  v-if="nextArticle.description"
                  class="mt-2 line-clamp-2 text-sm leading-6 text-muted"
                >
                  {{ nextArticle.description }}
                </p>
              </NuxtLink>
            </nav>
            <section
              v-if="relatedArticles?.length"
              class="mt-16 border-t border-default pt-12"
            >
              <div class="flex items-end justify-between gap-4">
                <div>
                  <p class="font-medium text-primary">Keep reading</p>

                  <h2
                    class="mt-2 text-2xl font-bold text-highlighted sm:text-3xl"
                  >
                    Related articles
                  </h2>
                </div>

                <UButton
                  label="View all"
                  to="/articles"
                  color="neutral"
                  variant="ghost"
                  trailing-icon="i-lucide-arrow-right"
                />
              </div>

              <div class="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <BlogArticleCard
                  v-for="relatedArticle in relatedArticles"
                  :key="relatedArticle.path"
                  :article="relatedArticle"
                />
              </div>
            </section>
          </main>

          <!-- Table of Contents -->
          <aside
            v-if="tableOfContents.length"
            class="hidden lg:sticky lg:top-24 lg:block"
          >
            <div class="rounded-2xl border border-default bg-default p-5">
              <div class="flex items-center gap-2">
                <UIcon name="i-lucide-list" class="size-5 text-primary" />

                <h2 class="font-semibold text-highlighted">On this page</h2>
              </div>

              <nav aria-label="Table of contents" class="mt-4">
                <ul class="space-y-1">
                  <li v-for="link in tableOfContents" :key="link.id">
                    <a
                      :href="`#${link.id}`"
                      class="block rounded-lg px-3 py-2 text-sm leading-5 text-muted transition hover:bg-elevated hover:text-primary"
                    >
                      {{ link.text }}
                    </a>

                    <ul
                      v-if="link.children?.length"
                      class="ml-3 border-l border-default pl-3"
                    >
                      <li v-for="child in link.children" :key="child.id">
                        <a
                          :href="`#${child.id}`"
                          class="block rounded-lg px-3 py-2 text-sm leading-5 text-muted transition hover:bg-elevated hover:text-primary"
                        >
                          {{ child.text }}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </UContainer>
  </article>
</template>
