import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is entirely optional.
// You can delete this file (schema.ts) and the
// app will continue to work.
// The schema provides more precise TypeScript types.
export default defineSchema({
  artworks: defineTable({
    title: v.string(),
    author: v.string(),
    year: v.number(),
    fileId: v.id("_storage"),
  }),
  users: defineTable({
    kindeId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    role: v.optional(v.string()),
  })
    .index("by_kindeId", ["kindeId"])
    .index("by_email", ["email"]),
});
