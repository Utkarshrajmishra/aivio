"use server";

import { OnboardingFormSchema, OnboardingSchemaTypes } from "@/types/onboarding-type";


export async function handleForm(
  prevState: OnboardingSchemaTypes,
  formData: FormData
): Promise<OnboardingSchemaTypes> {
  const business = formData.get("business") as string;
  const url = formData.get("url") as string;
  const extra = formData.get("extra") as string;

  const validateFields = OnboardingFormSchema.safeParse({
    business,
    url,
    extra,
  });

  if (!validateFields.success) {
    return {
      business,
      url,
      extra,
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  // Here you would typically save to database
  console.log("Validated data:", validateFields.data);

  return {
    business: validateFields.data.business,
    url: validateFields.data.url,
    extra: validateFields.data.extra || "",
  };
}