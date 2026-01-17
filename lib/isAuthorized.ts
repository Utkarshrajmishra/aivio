import { cookies } from "next/headers";

export async function getUserSession() {
  const cookieStore = await cookies();
  const userSession = cookieStore.get("user_session");

  let user = null;

  if (userSession) {
    try {
      user = JSON.parse(userSession.value);
    } catch (error) {
      console.error("Failed to parse user session");
    }
  }

  return user;
}
