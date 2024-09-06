import React from "react";
import { IParam } from "../../../shared/types";
import { redirect } from "next/navigation";
import { LoginResponseType } from "../../api/login/route";
import { getToken } from "../../../features/auth/api/getToken";

const page = async ({ searchParams }: IParam) => {
  const { code } = searchParams;
  const data: LoginResponseType = await getToken(code).then((res) => res.data);

  // OAuth2 서버와 통신 실패
  if (data.code === "OAUTH2_FEIGN_ERROR") {
    redirect("/login");
  }
  // 회원인 경우 토큰 쿠키에 저장하고 리다이렉트
  else if (data.code === "OK") {
    redirect("/");
  }
  // 비회원인 경우 회원가입으로 리다이렉트
  else if (data.code === "NOT_SIGNUP_MEMBER") {
    redirect("/signup");
  }
  return (
    //TODO:: Loading 화면 추가하기
    <div className="h-screen w-screen bg-gray-950 text-purple-50">
      {data.code}
    </div>
  );
};

export default page;
