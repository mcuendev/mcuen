// import { v } from "convex/values";
import { mutation } from "../_generated/server";

// Generate upload URL
export const generateUploadUrl = mutation({
  handler: async (ctx) => {
    return await ctx.storage.generateUploadUrl();
  },
});

// export const addArtwork = mutation({
//   args: {
//     title: v.string(),
//     author: v.string(),
//     year: v.number(),
//     fileId: v.id("_storage"),
//   },
//   handler: async (ctx, args) => {
//     return await ctx.db.insert("artworks", {
//       title: args.title,
//       author: args.author,
//       year: args.year,
//       fileId: args.fileId,
//     });
//   },
// });
