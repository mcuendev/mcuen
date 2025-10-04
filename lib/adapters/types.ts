import { ArtworkDocumentWithImage } from "@/convex/artworks/types";

export interface ArtworksClient {
  getAll(): Promise<ArtworkDocumentWithImage[]>;
  getHightlighted(): Promise<ArtworkDocumentWithImage[]>;
  getById(id: string): Promise<ArtworkDocumentWithImage | null>;
  search(
    query: string,
    collection?: string,
  ): Promise<ArtworkDocumentWithImage[]>;
  create(
    data: Omit<ArtworkDocumentWithImage, "_id">,
  ): Promise<ArtworkDocumentWithImage>;
  update(
    id: string,
    data: Partial<Omit<ArtworkDocumentWithImage, "id">>,
  ): Promise<ArtworkDocumentWithImage>;
  remove(id: string): Promise<void>;
}
