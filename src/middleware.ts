import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "./features/auth/api/getToken";
import { isGoogleTokenType, TokenType } from "./shared/types/authType";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code") || "";
  const apiResponse: TokenType = await getToken(code).then((res) => res.data);

  switch (apiResponse.code) {
    case "OAUTH2_FEIGN_ERROR":
      const response = NextResponse.redirect(new URL("/login", request.url));
      return response;
    case "OK":
      if (!isGoogleTokenType(apiResponse)) {
        const response = NextResponse.redirect(new URL("/", request.url));
        response.cookies.set("access_token", apiResponse.data["accessToken"]);
        response.cookies.set(
          "refresh_token",
          apiResponse.data["refreshToken"],
          { httpOnly: true, secure: true, sameSite: "strict" },
        );
        return response;
      }
    case "NOT_SIGNUP_MEMBER":
      if (isGoogleTokenType(apiResponse)) {
        const response = NextResponse.redirect(new URL("/signup", request.url));
        response.cookies.set("google_auth_code", apiResponse.data);
        return response;
      }
    default:
      return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/auth/google",
};
