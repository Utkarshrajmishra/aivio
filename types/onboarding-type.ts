import {z} from "zod"

export interface OnboardingFormType {
  business: string;
  url: string;
  extra: string;
}

const urlSchema = z.string().transform((value) => {
  if (value && !value.includes("://")) {
    return `https://${value}`;
  }
  return value;
}).pipe(
  z.string().url("Please enter a valid website URL")
);

export const OnboardingFormSchema = z.object({
  business: z.string().min(1, "Business name is required"),
  url: z.string().min(1,"This field is required").url("Invalid URL format"),
  extra: z.string().url("Invalid URL format").optional().or(z.literal(" ")),
});

export type OnboardingSchemaTypes = {
  business?: string;
  url: string;
  extra: string;
  errors?: {
    business?: string[];
    url?: string[];
    extra?: string[];
  };
};
