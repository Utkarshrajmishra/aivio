interface OnboardingConfigType{
    id:string,
    label:string,
    question: string,
    description:string,
    placeholder:string,
    type:string,
    required:boolean,
    field:string
}

export type OnboardingFormType = {
  business: string;
  url: string;
  extra: string;
};


export const OnboardingConfig: OnboardingConfigType[] = [
  {
    id: "business",
    label: "Business Name",
    question: "What is your website name?",
    description: "Add external link like Notion page or docs to train your chatbot",
    placeholder: "e.g. Acme Corp",
    type: "text",
    field: "businessName",
    required: true,
  },
  {
    id: "url",
    label: "Wesbite URL",
    question: "What is your website URL?",
    description: "We will scrape data from here to train your chatbot.",
    placeholder: "http://acme.com",
    type: "text",
    field: "websiteUrl",
    required: true,
  },
  {
    id: "extra",
    label: "Extra Content",
    question: "Any other link to add?",
    description:
      "Add external link like Notion page or docs to train your chatbot",
    placeholder: "https://notion.so/docs..",
    type: "text",
    required: false,
    field: "externalLink",
  },
] as const;
