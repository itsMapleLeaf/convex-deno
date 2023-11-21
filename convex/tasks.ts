import { v } from "convex/values"
import { mutation, query } from "./_generated/server.js"

export const list = query({
	async handler(ctx) {
		return await ctx.db.query("tasks").collect()
	},
})

export const create = mutation({
	args: {
		text: v.string(),
	},
	async handler(ctx, args) {
		return await ctx.db.insert("tasks", { text: args.text })
	},
})
