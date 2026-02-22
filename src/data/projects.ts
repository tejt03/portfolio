export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  tech: string[];
  metrics: string[];
  githubUrl?: string;
  liveUrl?: string;
  media?: { src: string; alt: string }[]; // screenshots
};

export const projects: Project[] = [
  {
    slug: "ecommerce-ai-shopping-assistant",
    title: "E-Commerce AI Shopping Assistant",
    tagline: "AI-guided shopping with strict constraints + real auth + deployment",
    description: [
      "Built a full-stack e-commerce platform with browsing, recommendations, and checkout.",
      "Integrated an AI chatbot and admin-only AI product description generator for recommendations with Groq LLM outputs validated as strict JSON.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Groq API"],
    metrics: ["RLS + SSR auth model"],
    liveUrl: "https://e-commerceai.vercel.app",
    media: [
      { src: "/projects/ecommerce-1.png", alt: "E-commerce app screenshot 1" },
      { src: "/projects/ecommerce-2.png", alt: "E-commerce app screenshot 2" },
    ],
  },
  {
    slug: "codeatlas-ai",
    title: "CodeAtlas AI",
    tagline: "Code snippet manager with GPT explanations and secure auth",
    description: [
      "Built a full-stack snippet platform with authenticated CRUD for snippets and bookmarks.",
      "Designed clean MVC backend with REST APIs, JWT auth, and secure password hashing.",
      "Integrated Groq API to generate real-time explanations for code snippets.",
    ],
    tech: ["Vue.js", "Node.js", "Express", "MongoDB", "JWT"],
    metrics: ["Groq API"],
    liveUrl: "https://codeatlas-ai.vercel.app",
    media: [
      { src: "/projects/codeatlas-1.png", alt: "CodeAtlas AI screenshot 1" },
      { src: "/projects/codeatlas-2.png", alt: "CodeAtlas AI screenshot 2" },
    ],
  },
  {
    slug: "brain-tumor-classification",
    title: "Brain Tumor Classification",
    tagline: "95% MRI classification using CNN + ResNet50 transfer learning",
    description: [
      "Trained a brain tumor classifier achieving 95% accuracy on 7,000+ MRI scans using CNNs and fine-tuned ResNet50.",
      "Improved robustness with ROI extraction, noise reduction, Gaussian blurring, and contour-based segmentation.",
      "Deployed as a production-style web app with real-time inference via Flask and SQLite-backed data management.",
    ],
    tech: ["Python", "CNN", "ResNet50", "Keras", "SQLite"],
    metrics: ["95% accuracy", "< 10s inference latency"],
    liveUrl: "",
    media: [
      { src: "/projects/brain-1.png", alt: "Brain tumor screenshot 1" },
    ],
  },
  {
    slug: "semantic-segmentation",
    title: "Semantic Segmentation for Autonomous Driving",
    tagline: "Pixel-level perception trained on Cityscapes at high accuracy",
    description: [
      "Trained FCN, SegNet, and E-Net for pixel-level object segmentation using Cityscapes.",
      "Built a preprocessing pipeline for polygon annotations and scalable train/val/test workflows.",
      "Evaluated deployment trade-offs using cross-validation and inference comparisons.",
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "Computer Vision"],
    metrics: ["89% segmentation accuracy"],
    liveUrl: "",
    media: [
      { src: "/projects/segmentation-1.png", alt: "Segmentation result screenshot" },
    ],
  },
];
