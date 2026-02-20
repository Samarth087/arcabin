export const QUERY_KEYS = {
  blog: {
    all: ['blogPosts'] as const,
    detail: (slug: string) => ['blogPost', slug] as const,
  },
  projects: {
    all: ['projects'] as const,
    detail: (slug: string) => ['project', slug] as const,
  },
  sections: {
    all: ['sections'] as const,
    byTitle: (title: string) => ['sections', 'byTitle', title] as const,
  },
} as const;
