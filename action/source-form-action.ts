"use server"

import { addSourceSchema } from "@/types/add-website-type"
import { ErrorState } from "@/components/dashboard/knowledge/modals/add-website-modal"

export async function addSchemaAction(prev: any, formData: FormData) {
    const raw = Object.fromEntries(formData.entries())
    const validatedFields = addSourceSchema.safeParse(raw)


    if (!validatedFields.success) {
        return {
            success:false,
            url: raw.url as string,
            title: raw.title as string,
            content: raw.content as string,
            errors: validatedFields.error.flatten().fieldErrors as ErrorState,
        }
    }

    return {
        success:true,
        url: validatedFields.data.type === "website" ? validatedFields.data.url : undefined,
        title: validatedFields.data.type === "text" ? validatedFields.data.title : undefined,
        content: validatedFields.data.type === "text" ? validatedFields.data.content : undefined,
        data: validatedFields.data
    }

}