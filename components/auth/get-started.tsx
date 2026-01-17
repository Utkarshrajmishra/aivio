"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useState } from "react";
import { Loader, Loader2, LoaderCircle } from "lucide-react";

const GetStartedButton = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Link href="/api/auth" onClick={() => setLoading(true)}>
      <Button
        disabled={loading}
        className="bg-orange-500 h-8.75 w-36 cursor-pointer justify-center text-base tracking-tight rounded-full hover:bg-orange-600 gap-2 flex items-center"
      >
        Get started {loading && <span className="animate-spin"><LoaderCircle className="size-4 "/></span>}
      </Button>
    </Link>
  );
};

export default GetStartedButton;
