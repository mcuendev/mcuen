import { v } from "convex/values";
import { mutation } from "../_generated/server";

export const syncUser = mutation({
  args: {
    kindeId: v.string(),
    email: v.string(),
    name: v.optional(v.string()),
    role: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let existing = await ctx.db
      .query("users")
      .withIndex("by_kindeId", (q) => q.eq("kindeId", args.kindeId))
      .unique();

    if (!existing) {
      existing = await ctx.db
        .query("users")
        .withIndex("by_email", (q) => q.eq("email", args.email))
        .unique();
    }

    if (existing) {
      await ctx.db.patch(existing._id, {
        kindeId: args.kindeId,
        email: args.email,
        name: args.name,
        role: args.role,
      });
      return existing._id;
    }

    return await ctx.db.insert("users", {
      kindeId: args.kindeId,
      email: args.email,
      name: args.name,
      role: args.role,
    });
  },
});
