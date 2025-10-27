import type { ArtworksClient } from "@/lib/adapters/types";
import { artworks } from "@/data/artworks";
import { ArtworkDocumentWithImage } from "@/convex/artworks/types";
import { Id } from "@/convex/_generated/dataModel";

class MockArtworksClient implements ArtworksClient {
  private artworks: ArtworkDocumentWithImage[] = [...artworks];

  async getAll() {
    return [...this.artworks];
  }

  async getHightlighted() {
    return [...this.artworks].slice(0, 6);
  }

  async getById(id: string) {
    return this.artworks.find((artwork) => artwork._id === id) || null;
  }

  async search(query: string, collection?: string) {
    let filtered = [...this.artworks];

    if (collection && collection !== "all") {
      filtered = filtered.filter(
        (artwork) => artwork.collection === collection,
      );
    }

    if (query.trim()) {
      const normalizedQuery = query.toLowerCase().trim();
      filtered = filtered.filter(
        (artwork) =>
          artwork.title.toLowerCase().includes(normalizedQuery) ||
          artwork.description.toLowerCase().includes(normalizedQuery) ||
          artwork.collection.toLowerCase().includes(normalizedQuery),
      );
    }

    return filtered;
  }

  async create(data: Omit<ArtworkDocumentWithImage, "_id">) {
    const newArtwork: ArtworkDocumentWithImage = {
      ...data,
      _id: (this.artworks.length + 1).toString() as Id<"artworks">,
    };
    this.artworks.push(newArtwork);
    return newArtwork;
  }

  async update(
    id: string,
    data: Partial<Omit<ArtworkDocumentWithImage, "_id">>,
  ) {
    const index = this.artworks.findIndex((artwork) => artwork._id === id);
    if (index === -1) {
      throw new Error(`Artwork with id ${id} not found`);
    }

    this.artworks[index] = { ...this.artworks[index], ...data };
    return this.artworks[index];
  }

  async remove(id: string) {
    const index = this.artworks.findIndex((artwork) => artwork._id === id);
    if (index === -1) {
      throw new Error(`Artwork with id ${id} not found`);
    }

    this.artworks.splice(index, 1);
  }
}

export const mockArtworkAdapter = new MockArtworksClient();
