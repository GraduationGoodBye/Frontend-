import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export interface LoginResponseType {
  code: string;
  message: string;
  data: { [key: string]: string } | string;
}

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
  console.log("ㅁㅁㅁㅁㅁㅁ : ", data); // 응답 데이터 로그

  return Response.json({ data });
}
