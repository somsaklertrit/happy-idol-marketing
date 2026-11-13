export const pageData = {
  "our-story": { title: "Our Story", eyebrow: "Where Happy Idol began", intro: "A father wanted to give his son stories filled with the encouragement, imagination, and belief he hoped would shape his future.", image: "/images/founder-origin.png" },
  collections: { title: "Collections", eyebrow: "Story worlds", intro: "A starting point for stories shaped by dreams, memories, family, imagination, and the people who make life meaningful.", image: "/images/collection-signature.png" },
  "how-it-works": { title: "How It Works", eyebrow: "A thoughtful journey", intro: "Every Happy Idol story begins with love, grows through discovery, and becomes something meaningful to keep.", image: "/images/how-it-works-en.png" },
  "gift-guide": { title: "Gift Guide", eyebrow: "Made for giving", intro: "Begin with the person, the moment, or the feeling you want the gift to carry.", image: "/images/packaging-premium.png" },
  stories: { title: "Stories", eyebrow: "Notes from our story world", intro: "Meaningful moments, creative worlds, and the personal details that can make someone feel truly seen.", image: "/images/collection-memory-reels.png" },
  faq: { title: "Frequently Asked Questions", eyebrow: "Helpful answers", intro: "A few things to know before your Happy Idol story begins.", image: "/images/collection-family.png" }
} as const;

export type SecondarySlug = keyof typeof pageData;
