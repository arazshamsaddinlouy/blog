<script setup lang="ts">
const colorMode = useColorMode();
const route = useRoute();

const navigation = [
  {
    label: "Home",
    to: "/",
    icon: "i-lucide-house",
  },
  {
    label: "Articles",
    to: "/articles",
    icon: "i-lucide-book-open",
  },
  {
    label: "About",
    to: "/about",
    icon: "i-lucide-user",
  },
];

const socialLinks = [
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    to: "https://github.com/arazshamsaddinlouy",
  },
  {
    label: "LinkedIn",
    icon: "i-simple-icons-linkedin",
    to: "https://linkedin.com/in/araz-shams",
  },
  {
    label: "Portfolio",
    icon: "i-lucide-briefcase-business",
    to: "https://arazshams.vercel.app",
  },
];

const isActiveRoute = (path: string) => {
  if (path === "/") {
    return route.path === "/";
  }

  return route.path.startsWith(path);
};

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>

<template>
  <div class="min-h-screen bg-default">
    <header
      class="sticky top-0 z-50 border-b border-default bg-default/80 backdrop-blur-xl"
    >
      <UContainer>
        <div class="flex h-16 items-center justify-between gap-4">
          <!-- Logo -->

          <!-- Desktop navigation -->
          <nav
            class="hidden items-center rounded-xl border border-default bg-elevated/60 p-1 md:flex"
          >
            <NuxtLink
              v-for="item in navigation"
              :key="item.to"
              :to="item.to"
              class="relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition duration-200"
              :class="
                isActiveRoute(item.to)
                  ? 'bg-default text-highlighted shadow-sm'
                  : 'text-muted hover:bg-default/70 hover:text-highlighted'
              "
            >
              <UIcon
                :name="item.icon"
                class="size-4"
                :class="isActiveRoute(item.to) ? 'text-primary' : ''"
              />

              <span>{{ item.label }}</span>

              <span
                v-if="isActiveRoute(item.to)"
                class="absolute inset-x-4 -bottom-[5px] h-0.5 rounded-full bg-primary"
              />
            </NuxtLink>
          </nav>

          <!-- Actions -->
          <div class="flex items-center gap-1 sm:gap-2">
            <UTooltip
              v-for="social in socialLinks"
              :key="social.label"
              :text="social.label"
            >
              <UButton
                :to="social.to"
                :icon="social.icon"
                target="_blank"
                rel="noopener noreferrer"
                color="neutral"
                variant="ghost"
                :aria-label="social.label"
              />
            </UTooltip>

            <div class="mx-1 hidden h-5 w-px bg-default sm:block" />

            <UTooltip
              :text="
                colorMode.value === 'dark' ? 'Use light mode' : 'Use dark mode'
              "
            >
              <UButton
                :icon="
                  colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'
                "
                color="neutral"
                variant="ghost"
                aria-label="Toggle dark mode"
                @click="toggleColorMode"
              />
            </UTooltip>
          </div>
        </div>

        <!-- Mobile navigation -->
        <nav
          class="grid grid-cols-3 gap-1 border-t border-default py-2 md:hidden"
        >
          <NuxtLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="relative flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition"
            :class="
              isActiveRoute(item.to)
                ? 'bg-primary/10 text-primary'
                : 'text-muted hover:bg-elevated hover:text-highlighted'
            "
          >
            <UIcon :name="item.icon" class="size-4" />

            <span>{{ item.label }}</span>

            <span
              v-if="isActiveRoute(item.to)"
              class="absolute inset-x-6 bottom-0 h-0.5 rounded-full bg-primary"
            />
          </NuxtLink>
        </nav>
      </UContainer>
    </header>

    <main>
      <slot />
    </main>

    <footer class="mt-24 border-t border-default">
      <UContainer>
        <div
          class="flex flex-col gap-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between"
        >
          <div>© {{ new Date().getFullYear() }} Araz Shamsaddinlouy</div>

          <div class="flex flex-wrap items-center gap-x-5 gap-y-3">
            <NuxtLink to="/articles" class="transition hover:text-primary">
              Articles
            </NuxtLink>

            <NuxtLink to="/about" class="transition hover:text-primary">
              About
            </NuxtLink>

            <a
              href="https://github.com/arazshamsaddinlouy"
              target="_blank"
              rel="noopener noreferrer"
              class="transition hover:text-primary"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/araz-shams"
              target="_blank"
              rel="noopener noreferrer"
              class="transition hover:text-primary"
            >
              LinkedIn
            </a>

            <a
              href="https://arazshams.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              class="transition hover:text-primary"
            >
              Portfolio
            </a>
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>
