import { DataModel } from "../_generated/dataModel";

export type ArtworkDocument = DataModel["artworks"]["document"];
export type ArtworkDocumentWithImage = ArtworkDocument & {
  fileUrl: string | null;
};
