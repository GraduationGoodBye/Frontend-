import { NextRequest } from "next/server";
import { LoginResponseType } from "../../../shared/types/authType";

export async function GET(request: NextRequest) {
  const authCode = request.nextUrl.searchParams.get("code");
  const login_url = "/api/v1/members/login/google";
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + login_url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ authCode: authCode }),
  });

  const data: LoginResponseType = await response.json();

  return Response.json({ data });
}
