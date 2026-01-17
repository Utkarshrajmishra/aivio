import { db } from "@/db/client";
import { metadata } from "@/db/schema";
import { getUserSession } from "@/lib/isAuthorized";
import { eq, exists } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const user = await getUserSession();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const cookieStore = await cookies();
    const metadataCookie = cookieStore.get("metadata");

    if (metadataCookie?.value) {
      return NextResponse.json(
        {
          exists: true,
          source: "cookie",
          data: JSON.parse(metadataCookie.value),
        },
        { status: 200 }
      );
    }

    const [record] = await db
      .select()
      .from(metadata)
      .where(eq(metadata.user_email, user.email));

    if (record) {
      cookieStore.set("metadata", JSON.stringify(record), {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      return NextResponse.json(
        {
          exists: true,
          source: "database",
          data: record,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        exists: false,
        data: null,
        source: "none",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
