import { v } from "convex/values";
import { query } from "../_generated/server";
import { ArtworkDocumentWithImage } from "./types";

export const listArtworks = query({
  args: {},
  handler: async (ctx) => {
    const artworks = await ctx.db.query("artworks").collect();

    return Promise.all(
      artworks.map(async (artwork) => {
        const fileUrl = await ctx.storage.getUrl(artwork.fileId);
        return { ...artwork, fileUrl };
      }),
    );
  },
});

export const getArtwork = query({
  args: { id: v.id("artworks") },
  handler: async (ctx, args): Promise<ArtworkDocumentWithImage | null> => {
    const artwork = await ctx.db.get(args.id);

    if (!artwork) return null;

    const fileUrl = await ctx.storage.getUrl(artwork.fileId);

    return { ...artwork, fileUrl };
  },
});
