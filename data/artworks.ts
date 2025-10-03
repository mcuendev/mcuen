import { Id } from "@/convex/_generated/dataModel";
import { ArtworkDocumentWithImage } from "@/convex/artworks/types";

export const mockArtworks: ArtworkDocumentWithImage[] = [
  {
    _id: "1" as Id<"artworks">,
    title: "Ethereal Landscapes",
    description:
      "A mesmerizing blend of abstract forms and natural elements, capturing the essence of dreamlike terrains that exist between reality and imagination.",
    collection: "Abstract",
    fileUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center",
    year: 2023,
    _creationTime: 1759356000000,
    fileId: "" as Id<"_storage">,
  },
  {
    _id: "2" as Id<"artworks">,
    title: "Urban Symphony",
    description:
      "Bold strokes and vibrant colors dance across the canvas, representing the rhythmic pulse of city life and the harmony found within urban chaos.",
    collection: "Contemporary",
    fileUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    year: 2024,
    _creationTime: 1759269600000,
    fileId: "" as Id<"_storage">,
  },
  {
    _id: "3" as Id<"artworks">,
    title: "Whispers of the Past",
    description:
      "A contemplative portrait that explores the depth of human emotion through classical techniques, revealing stories untold through expressive eyes.",
    collection: "Portrait",
    fileUrl:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop&crop=center",
    year: 2022,
    _creationTime: 1759183200000,
    fileId: "" as Id<"_storage">,
  },
  {
    _id: "4" as Id<"artworks">,
    title: "Botanical Dreams",
    description:
      "Delicate watercolor techniques bring to life an enchanted garden where reality meets fantasy, celebrating the beauty of nature's intricate designs.",
    collection: "Nature",
    fileUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    year: 2023,
    _creationTime: 1759096800000,
    fileId: "" as Id<"_storage">,
  },
  {
    _id: "5" as Id<"artworks">,
    title: "Geometric Harmony",
    description:
      "Precise lines and calculated compositions create a visual meditation on balance, exploring the relationship between order and creative expression.",
    collection: "Abstract",
    fileUrl:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center",
    year: 2024,
    _creationTime: 1759010400000,
    fileId: "" as Id<"_storage">,
  },
];

export const artworks = mockArtworks;
