"use server"

import { addSourceSchema } from "@/types/add-website-type"
import { ErrorState } from "@/components/dashboard/knowledge/modals/add-website-modal"

export async function addSchemaAction(prev:any, formData: FormData){
    const raw=Object.fromEntries(formData.entries())
    const validatedFields=addSourceSchema.safeParse(raw)

    if(!validatedFields.success){
        return{
            success:false,
            errors:validatedFields.error.flatten().fieldErrors as ErrorState,
        }
    }

    return {
        success:true,
        data:validatedFields.data
    }

}