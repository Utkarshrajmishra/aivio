import { db } from "@/db/client";
import { metadata } from "@/db/schema";
import { getUserSession } from "@/lib/isAuthorized";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try{
  const user = await getUserSession();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { name, url, extra } = await req.json();

  if (!name || !url || !extra) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const metadataResp=await db.insert(metadata).values({
    user_email:user.email,
    business_name: name,
    website_url:url,
    external_link:extra
  })

  await (await cookies()).set("metadata", JSON.stringify({name}))

  return NextResponse.json({data:metadataResp},{status:201})


}
catch(error){
 return Response.json({error:"Internal server error"}, {status:500})
}
}