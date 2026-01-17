import z from "zod";

export const websiteSchema=z.object({
    type: z.literal("website"),
    url:z.string().url("Invalid URL format.").min(1,"This field is required.")
})


export const textSchema=z.object({
    type:z.literal("text"),
    title:z.string().min(1,"This field is required."),
    content:z.string().min(1,"This field is required."),
})

export const fileSchema=z.object({
    type:z.literal("file"),
    file:z.any().refine(f=>f?.size <= 10_000_000, "Max 10MB")
})


export const addSourceSchema=z.discriminatedUnion("type",[
   websiteSchema,
    textSchema,
    fileSchema
])