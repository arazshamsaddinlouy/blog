<script setup lang="ts">
useSeoMeta({
  title: "About | Araz Blog",
  description:
    "Learn more about Araz Shamsaddinlouy, a Senior Frontend Engineer focused on modern frontend architecture, performance, accessibility and developer experience.",
  ogTitle: "About | Araz Blog",
  ogDescription:
    "Learn more about Araz Shamsaddinlouy and the experience behind this frontend engineering blog.",
  ogType: "profile",
});
const technologies = [
  "React",
  "Next.js",
  "Vue",
  "Nuxt",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Tailwind CSS",
  "Sass",
  "Redux",
  "Zustand",
  "TanStack Query",
  "Express.js",
  "Git",
  "Docker",
];
const workExperiences = [
  {
    company: "Informatics Services Corporation",
    role: "Senior Front-end Engineer",
    period: "Dec 2020 — Present",
    location: "Tehran, Iran",
    companyUrl: "https://isc.co.ir",
    description:
      "Designing and developing enterprise-grade web applications, financial platforms and internal systems using modern frontend architecture.",
    highlights: [
      "Developing the Asian Clearing Union platform",
      "Built a complete recruitment platform",
      "Developed back-office and payroll systems",
      "Created reusable UI components and frontend solutions",
    ],
    technologies: [
      "React",
      "Angular",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "Ant Design",
      "Node.js",
      "Express",
    ],
  },
  {
    company: "Sheypoor",
    role: "Senior Frontend Engineer",
    period: "Nov 2019 — Nov 2020",
    location: "Tehran, Iran",
    companyUrl: "https://sheypoor.com",
    description:
      "Developed and maintained frontend features for a large-scale, high-traffic online marketplace serving millions of users.",
    highlights: [
      "Built interactive marketplace interfaces",
      "Improved maintainability of legacy frontend code",
      "Contributed to refactoring and performance optimization",
    ],
    technologies: [
      "JavaScript",
      "jQuery",
      "Knockout.js",
      "Sass",
      "CSS",
      "HTML",
    ],
  },
  {
    company: "Pooya Co.",
    role: "Senior Angular / React / Vue Developer",
    period: "Sep 2018 — Sep 2019",
    location: "Tehran, Iran",
    description:
      "Built a social networking platform from the ground up as part of a startup engineering team.",
    highlights: [
      "Developed interfaces with React, Angular, Vue and Nuxt",
      "Built reusable frontend components",
      "Integrated Google Maps and location-based features",
      "Improved performance and cross-browser compatibility",
    ],
    technologies: [
      "React",
      "Redux",
      "Angular",
      "Vue",
      "Nuxt",
      "RxJS",
      "Sass",
      "Google Maps API",
    ],
  },
  {
    company: "Digikala",
    role: "React Developer",
    period: "Apr 2018 — Sep 2018",
    location: "Tehran, Iran",
    companyUrl: "https://digikala.com",
    description:
      "Developed features for an internal financial platform supporting business operations.",
    highlights: [
      "Created reusable class-based React components",
      "Improved component architecture and maintainability",
      "Contributed to frontend performance improvements",
    ],
    technologies: ["React", "Redux", "JavaScript", "SCSS", "CSS", "HTML"],
  },
  {
    company: "Telewebion",
    role: "Angular Developer",
    period: "Jan 2016 — Jul 2018",
    location: "Tehran, Iran",
    companyUrl: "https://telewebion.com",
    description:
      "Designed and developed scalable frontend solutions for a large video-streaming platform.",
    highlights: [
      "Built reusable Angular components",
      "Improved performance using lazy loading and caching",
      "Implemented SSR improvements for performance and SEO",
      "Integrated REST APIs and dynamic content services",
    ],
    technologies: [
      "Angular",
      "AngularJS",
      "RxJS",
      "TypeScript",
      "Sass",
      "REST API",
    ],
  },
  {
    company: "GSM",
    role: "JavaScript Developer",
    period: "Jan 2015 — Jan 2016",
    location: "Tehran, Iran",
    companyUrl: "https://gsm.ir",
    description:
      "Developed responsive and interactive user interfaces using JavaScript, jQuery, HTML and CSS.",
    highlights: [
      "Created reusable UI components",
      "Integrated frontend pages with backend APIs",
      "Improved usability and frontend performance",
    ],
    technologies: ["JavaScript", "jQuery", "HTML", "CSS", "Sass"],
  },
];
const featuredProjects = [
  {
    title: "ProptIQ Real Estate",
    description:
      "An AI-powered real estate platform that helps users discover and evaluate properties across Australia based on their budget, preferences and investment goals.",
    technologies: ["Angular", "TypeScript", "SSR", "RxJS", "Bootstrap"],
    url: "https://dev.proptiq.com.au",
    featured: true,
  },
  {
    title: "TalaeShow",
    description:
      "A modern gold and silver trading platform built from the ground up with a focus on performance, usability and a seamless user experience.",
    technologies: ["React", "TypeScript", "Vite", "Axios", "CSS"],
    url: "https://talaeshow.com",
  },
  {
    title: "Ergo Raffle",
    description:
      "A modern crowdfunding and raffle platform with responsive interfaces and frontend integrations with backend services.",
    technologies: ["React", "JavaScript", "SCSS", "REST API"],
    url: "https://ergoraffle.com",
  },
];
const openSourceProjects = [
  {
    title: "ngx-angular-datepicker",
    description:
      "A modern Angular Persian and Jalali datepicker with localization support, customizable themes and seamless Angular integration.",
    technologies: ["Angular", "TypeScript", "Jalali Calendar", "Localization"],
    featured: true,
  },
  {
    title: "ngx-music-audio-player",
    description:
      "A customizable Angular audio player with playlist support, responsive design, playback controls and an easy-to-use API.",
    technologies: ["Angular", "TypeScript", "HTML5 Audio", "RxJS"],
  },
];
</script>

<template>
  <div>
    <section
      class="relative overflow-hidden border-b border-default bg-elevated/40"
    >
      <div
        class="absolute left-1/2 top-0 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
      />

      <UContainer class="py-20 sm:py-24 lg:py-28">
        <div class="mx-auto max-w-4xl text-center">
          <UBadge
            label="Frontend Engineer"
            icon="i-lucide-code-2"
            color="primary"
            variant="subtle"
            size="lg"
          />

          <h1
            class="mt-7 text-4xl font-bold tracking-tight text-highlighted sm:text-5xl lg:text-6xl"
          >
            Building thoughtful digital experiences
          </h1>

          <p
            class="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl"
          >
            I'm Araz Shamsaddinlouy, a Senior Frontend Engineer with over 11
            years of experience building scalable web applications, enterprise
            platforms and modern user interfaces.
          </p>

          <p class="mx-auto mt-4 max-w-3xl leading-8 text-muted">
            I specialize in React, Next.js, Vue, Nuxt, Angular and TypeScript,
            with a strong focus on frontend architecture, performance,
            accessibility, maintainability and user experience.
          </p>

          <div
            class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <UButton
              label="View Portfolio"
              to="https://arazshams.vercel.app"
              target="_blank"
              trailing-icon="i-lucide-arrow-up-right"
              size="lg"
            />

            <UButton
              label="Read Articles"
              to="/articles"
              icon="i-lucide-book-open"
              color="neutral"
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </UContainer>
    </section>
    <section class="py-14 sm:py-16">
      <UContainer>
        <div class="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div
            class="rounded-3xl border border-default bg-default p-6 text-center"
          >
            <div class="text-4xl font-bold text-primary">11+</div>

            <p class="mt-2 font-medium text-highlighted">Years of Experience</p>

            <p class="mt-2 text-sm leading-6 text-muted">
              Building modern and enterprise-grade web applications.
            </p>
          </div>

          <div
            class="rounded-3xl border border-default bg-default p-6 text-center"
          >
            <div class="text-4xl font-bold text-primary">30+</div>

            <p class="mt-2 font-medium text-highlighted">Projects Delivered</p>

            <p class="mt-2 text-sm leading-6 text-muted">
              Across fintech, SaaS, enterprise systems and digital products.
            </p>
          </div>

          <div
            class="rounded-3xl border border-default bg-default p-6 text-center"
          >
            <div class="flex justify-center">
              <UIcon name="i-lucide-layers-3" class="size-10 text-primary" />
            </div>

            <p class="mt-3 font-medium text-highlighted">
              Modern Frontend Stack
            </p>

            <p class="mt-2 text-sm leading-6 text-muted">
              React, Next.js, Vue, Nuxt, Angular and TypeScript.
            </p>
          </div>
        </div>
      </UContainer>
    </section>
    <section class="border-y border-default bg-elevated/30 py-16 sm:py-20">
      <UContainer>
        <div
          class="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"
        >
          <div>
            <UBadge
              label="My Story"
              icon="i-lucide-user-round"
              color="primary"
              variant="subtle"
            />

            <h2
              class="mt-5 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl"
            >
              More than a decade of building for the web
            </h2>

            <p class="mt-5 leading-8 text-muted">
              My career has been shaped by real products, complex systems and
              the constant evolution of frontend development.
            </p>
          </div>

          <div class="space-y-6 text-base leading-8 text-muted sm:text-lg">
            <p>
              Over the past decade, I have worked on enterprise applications,
              financial platforms, internal systems, dashboards and
              customer-facing products across different industries.
            </p>

            <p>
              My experience has taught me that frontend engineering is not only
              about writing components. It is also about designing maintainable
              systems, creating reusable architecture, improving performance and
              solving real business problems.
            </p>

            <p>
              I enjoy learning new technologies, refining development workflows
              and sharing practical knowledge that other developers can apply in
              their own projects.
            </p>
          </div>
        </div>
      </UContainer>
    </section>
    <section class="py-16 sm:py-20">
      <UContainer>
        <div class="mx-auto max-w-5xl text-center">
          <UBadge
            label="Tech Stack"
            icon="i-lucide-code"
            color="primary"
            variant="subtle"
          />

          <h2
            class="mt-5 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl"
          >
            Technologies I work with
          </h2>

          <p class="mx-auto mt-5 max-w-3xl leading-8 text-muted">
            I enjoy building scalable frontend applications using modern
            frameworks, strongly typed languages and maintainable architecture.
          </p>

          <div class="mt-10 flex flex-wrap justify-center gap-3">
            <UBadge
              v-for="tech in technologies"
              :key="tech"
              :label="tech"
              color="neutral"
              variant="soft"
              size="lg"
            />
          </div>
        </div>
      </UContainer>
    </section>
    <!-- Career Journey -->
    <section class="border-y border-default bg-elevated/30 py-16 sm:py-20">
      <UContainer>
        <div class="mx-auto max-w-6xl">
          <div class="text-center">
            <UBadge
              label="Professional Experience"
              icon="i-lucide-briefcase-business"
              color="primary"
              variant="subtle"
            />

            <h2
              class="mt-5 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl"
            >
              Career Journey
            </h2>

            <p class="mx-auto mt-5 max-w-3xl leading-8 text-muted">
              More than a decade of building enterprise platforms, high-traffic
              products and scalable frontend applications across different teams
              and industries.
            </p>
          </div>

          <div class="mt-12 space-y-6">
            <article
              v-for="experience in workExperiences"
              :key="`${experience.company}-${experience.period}`"
              class="rounded-3xl border border-default bg-default p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:p-8"
            >
              <div
                class="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
              >
                <div class="flex min-w-0 gap-4 sm:gap-5">
                  <div
                    class="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 sm:size-14"
                  >
                    <UIcon
                      name="i-lucide-building-2"
                      class="size-6 text-primary sm:size-7"
                    />
                  </div>

                  <div class="min-w-0">
                    <h3
                      class="text-xl font-semibold text-highlighted sm:text-2xl"
                    >
                      {{ experience.role }}
                    </h3>

                    <div
                      class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2"
                    >
                      <NuxtLink
                        v-if="experience.companyUrl"
                        :to="experience.companyUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="font-medium text-primary transition hover:underline"
                      >
                        {{ experience.company }}
                      </NuxtLink>

                      <span v-else class="font-medium text-primary">
                        {{ experience.company }}
                      </span>

                      <span
                        class="hidden size-1 rounded-full bg-muted sm:block"
                      />

                      <span class="text-sm text-muted">
                        {{ experience.location }}
                      </span>
                    </div>
                  </div>
                </div>

                <UBadge
                  :label="experience.period"
                  color="neutral"
                  variant="soft"
                  size="lg"
                  class="w-fit shrink-0"
                />
              </div>

              <p class="mt-6 leading-8 text-muted">
                {{ experience.description }}
              </p>

              <ul
                v-if="experience.highlights?.length"
                class="mt-6 grid gap-3 md:grid-cols-2"
              >
                <li
                  v-for="highlight in experience.highlights"
                  :key="highlight"
                  class="flex items-start gap-3 text-sm leading-6 text-muted"
                >
                  <UIcon
                    name="i-lucide-circle-check"
                    class="mt-1 size-4 shrink-0 text-primary"
                  />

                  <span>{{ highlight }}</span>
                </li>
              </ul>

              <div class="mt-7 border-t border-default pt-6">
                <div class="flex flex-wrap gap-2">
                  <UBadge
                    v-for="tech in experience.technologies"
                    :key="tech"
                    :label="tech"
                    color="neutral"
                    variant="outline"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Featured Projects -->
    <section class="py-16 sm:py-20">
      <UContainer>
        <div class="mx-auto max-w-6xl">
          <div
            class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <UBadge
                label="Selected Work"
                icon="i-lucide-folder-kanban"
                color="primary"
                variant="subtle"
              />

              <h2
                class="mt-5 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl"
              >
                Featured Projects
              </h2>

              <p class="mt-5 max-w-3xl leading-8 text-muted">
                A selection of independent and freelance products I have helped
                design, build and maintain.
              </p>
            </div>

            <UButton
              label="View Full Portfolio"
              to="https://arazshams.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              color="neutral"
              variant="outline"
              trailing-icon="i-lucide-arrow-up-right"
              class="w-fit"
            />
          </div>

          <div class="mt-12 grid gap-6 lg:grid-cols-3">
            <article
              v-for="project in featuredProjects"
              :key="project.title"
              class="group flex h-full flex-col rounded-3xl border border-default bg-default p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:p-7"
            >
              <div class="flex items-start justify-between gap-4">
                <div
                  class="flex size-12 items-center justify-center rounded-2xl bg-primary/10"
                >
                  <UIcon
                    name="i-lucide-panels-top-left"
                    class="size-6 text-primary"
                  />
                </div>

                <UBadge
                  v-if="project.featured"
                  label="Featured"
                  color="primary"
                  variant="subtle"
                />
              </div>

              <h3 class="mt-6 text-xl font-semibold text-highlighted">
                {{ project.title }}
              </h3>

              <p class="mt-4 flex-1 leading-7 text-muted">
                {{ project.description }}
              </p>

              <div class="mt-6 flex flex-wrap gap-2">
                <UBadge
                  v-for="tech in project.technologies"
                  :key="tech"
                  :label="tech"
                  color="neutral"
                  variant="outline"
                />
              </div>

              <div class="mt-7 border-t border-default pt-6">
                <UButton
                  label="Visit Project"
                  :to="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="neutral"
                  variant="ghost"
                  trailing-icon="i-lucide-arrow-up-right"
                  class="px-0 group-hover:text-primary"
                />
              </div>
            </article>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Open Source -->
    <section class="border-y border-default bg-elevated/30 py-16 sm:py-20">
      <UContainer>
        <div class="mx-auto max-w-6xl">
          <div class="text-center">
            <UBadge
              label="Open Source"
              icon="i-lucide-package-open"
              color="primary"
              variant="subtle"
            />

            <h2
              class="mt-5 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl"
            >
              Packages for Angular developers
            </h2>

            <p class="mx-auto mt-5 max-w-3xl leading-8 text-muted">
              Reusable Angular packages created to solve practical interface
              problems and simplify application development.
            </p>
          </div>

          <div class="mt-12 grid gap-6 md:grid-cols-2">
            <article
              v-for="project in openSourceProjects"
              :key="project.title"
              class="rounded-3xl border border-default bg-default p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:p-8"
            >
              <div class="flex items-start justify-between gap-4">
                <div
                  class="flex size-12 items-center justify-center rounded-2xl bg-primary/10"
                >
                  <UIcon name="i-lucide-package" class="size-6 text-primary" />
                </div>

                <UBadge
                  v-if="project.featured"
                  label="Featured"
                  color="primary"
                  variant="subtle"
                />
              </div>

              <h3 class="mt-6 text-xl font-semibold text-highlighted">
                {{ project.title }}
              </h3>

              <p class="mt-4 leading-8 text-muted">
                {{ project.description }}
              </p>

              <div class="mt-6 flex flex-wrap gap-2">
                <UBadge
                  v-for="tech in project.technologies"
                  :key="tech"
                  :label="tech"
                  color="neutral"
                  variant="outline"
                />
              </div>
            </article>
          </div>
        </div>
      </UContainer>
    </section>
    <!-- Let's Connect -->
    <section class="py-16 sm:py-20">
      <UContainer>
        <div
          class="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-default bg-elevated px-6 py-14 text-center sm:px-10 sm:py-16"
        >
          <!-- Background decoration -->
          <div
            class="pointer-events-none absolute left-1/2 top-0 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]"
          />

          <div class="relative mx-auto max-w-3xl">
            <div
              class="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10"
            >
              <UIcon
                name="i-lucide-message-circle"
                class="size-7 text-primary"
              />
            </div>

            <UBadge
              label="Let's Connect"
              color="primary"
              variant="subtle"
              class="mt-6"
            />

            <h2
              class="mt-5 text-3xl font-bold tracking-tight text-highlighted sm:text-4xl"
            >
              Have a project or an idea in mind?
            </h2>

            <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted">
              I'm always interested in discussing frontend architecture,
              challenging products, freelance collaborations and new engineering
              opportunities.
            </p>

            <!-- Primary actions -->
            <div
              class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <UButton
                label="View Full Portfolio"
                to="https://arazshams.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                trailing-icon="i-lucide-arrow-up-right"
                size="lg"
              />

              <UButton
                label="Send Me an Email"
                to="mailto:araz.shamsaddin@gmail.com"
                icon="i-lucide-mail"
                color="neutral"
                variant="outline"
                size="lg"
              />
            </div>

            <!-- Social links -->
            <div
              class="mt-8 flex flex-wrap items-center justify-center gap-2 border-t border-default pt-8"
            >
              <UButton
                label="GitHub"
                to="https://github.com/arazshamsaddinlouy"
                target="_blank"
                rel="noopener noreferrer"
                icon="i-simple-icons-github"
                color="neutral"
                variant="ghost"
              />

              <UButton
                label="LinkedIn"
                to="https://linkedin.com/in/araz-shams"
                target="_blank"
                rel="noopener noreferrer"
                icon="i-simple-icons-linkedin"
                color="neutral"
                variant="ghost"
              />

              <UButton
                label="Articles"
                to="/articles"
                icon="i-lucide-book-open"
                color="neutral"
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
