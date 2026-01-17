"use client";

import { OnboardingConfig } from "@/config/onboarding";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState, useActionState, useEffect, useTransition } from "react";
import { OnboardingFormType } from "@/types/onboarding-type";
import { handleForm } from "@/action/onboarding-form-action";
import { Loader2 } from "lucide-react";

const initialState: OnboardingFormType & {
  errors?: {
    business?: string[];
    url?: string[];
    extra?: string[];
  };
} = {
  business: "",
  url: "",
  extra: "",
};

const OnboardingForm = () => {
  const [indx, setIndx] = useState(0);

  const [state, formAction, isPending] = useActionState(
    handleForm,
    initialState
  );

  const [isTransitionPending, startTransition] = useTransition();

  const pending = isPending || isTransitionPending;

  const [form, setForm] = useState<OnboardingFormType>({
    business: "",
    url: "",
    extra: "",
  });

  const [errors, setErrors] = useState<{
    business?: string[];
    url?: string[];
    extra?: string[];
  }>({});

  useEffect(() => {
    setForm({
      business: state.business || "",
      url: state.url || "",
      extra: state.extra || "",
    });

    if (state.errors) setErrors(state.errors);
    else setErrors({});
  }, [state]);

  const handleInputChange = (
    field: keyof OnboardingFormType,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const saveandnext = () => {
    const field = OnboardingConfig[indx].id as keyof OnboardingFormType;

    if (!form[field] && OnboardingConfig[indx].required) {
      setErrors((prev) => ({
        ...prev,
        [field]: ["This field is required"],
      }));
      return;
    }

    if (indx === OnboardingConfig.length - 1) {
      handleSubmit();
      return;
    }

    setIndx((p) => p + 1);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("business", form.business);
    formData.append("url", form.url);
    formData.append("extra", form.extra);

    startTransition(() => {
      formAction(formData);
    });
  };

  useEffect(() => {
    if (!state.errors && state.business && state.url) {
      submit()
    }
  }, [state]);

  const submit = async () => {
    const res = await fetch("/api/onboarding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: state.business,
        extra: state.extra,
        url: state.url,
      }),
    });

    await res.json()
    if(res.status===201){
      console.log("Success")
          window.location.reload()

    }
    else window.location.reload()
  };

  const fieldId = OnboardingConfig[indx].id as keyof OnboardingFormType;

  return (
    <form className="w-full flex flex-col">
      <div>
        <p className="h-10 w-10 text-lg font-mono text-white flex items-center justify-center bg-orange-400 rounded-full">
          {indx + 1}
        </p>

        <div className="mt-6 flex flex-col gap-1">
          <p className="text-xl">{OnboardingConfig[indx].label}</p>
          <p className="text-neutral-500">
            {OnboardingConfig[indx].description}
          </p>
        </div>

        <div className="flex flex-col gap-0 mt-4">
          <Label className="text-sm text-neutral-500">
            {OnboardingConfig[indx].question}
            {OnboardingConfig[indx].required && (
              <span className="text-red-500">*</span>
            )}
          </Label>

          <Input
            id={fieldId}
            name={fieldId}
            value={form[fieldId]}
            onChange={(e) => handleInputChange(fieldId, e.target.value)}
            className={`rounded-md bg-white h-10 border placeholder:text-neutral-400
            focus-visible:outline-none focus-visible:ring-0
            ${errors[fieldId] ? "border-red-500" : "border-neutral-300"}`}
            placeholder={OnboardingConfig[indx].placeholder}
            disabled={pending}
          />

          {errors[fieldId] && (
            <p className="text-sm text-red-500">{errors[fieldId]?.[0]}</p>
          )}
        </div>
      </div>

      <div className="mt-12 flex justify-end">
        <Button
          type="button"
          onClick={saveandnext}
          disabled={pending}
          className="bg-orange-500 hover:bg-orange-600 text-white h-10 w-32 rounded-sm text-sm"
        >
          {pending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : indx === OnboardingConfig.length - 1 ? (
            "Continue"
          ) : (
            "Save & Continue"
          )}
        </Button>
      </div>
    </form>
  );
};

export default OnboardingForm;
