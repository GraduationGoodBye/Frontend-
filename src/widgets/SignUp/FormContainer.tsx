"use client";

import React, { useState } from "react";
import { Flex } from "@/shared/ui";
import {
  Title,
  CheckInput,
  Input,
  ConfirmButton,
  fetchConfirmNickname,
  RecommendNicknameButton,
  getRecommendNickname,
  isValidNickname,
} from "@/features/SignUp";

import { useDebounce, useInput, useToggle } from "@/shared/hooks";

import { useEffect, useCallback } from "react";

interface Terms {
  이용약관: boolean;
  마케팅: boolean;
}

export default function FormContainer() {
  const {
    value: nickname,
    onChange: onChangeHandler,
    setValue: setNickname,
  } = useInput();
  const lastNickName = useDebounce(nickname, 500);

  const [isValid, setIsValid] = useState(false);

  // 이용 약관
  const { toggle: termsChecked, onToggle: onTermsChecked } = useToggle();
  const { toggle: marketingChecked, onToggle: onMarketingChecked } =
    useToggle();

  useEffect(() => {
    if (lastNickName) {
      // API 호출 수행
      performSearch(lastNickName);
    }
  }, [lastNickName]);

  useEffect(() => {
    setIsValid(false);
  }, [nickname]);

  const performSearch = useCallback((nickname: string) => {
    if (!isValidNickname(nickname)) return;
    console.log("진짜 api 콜 시작 ~!");

    fetchConfirmNickname(nickname).then((data) => {
      if (data.code === "OK") {
        setIsValid(true);
      }
    });
  }, []);

  const handleClickRecommend = () => {
    getRecommendNickname().then((recommendedNickname: string) => {
      // 백엔드 api 생기면 진짜 response에 맞춰서 처리
      setNickname(recommendedNickname);
      setIsValid(true);
    });
  };

  return (
    <div className="h-[760px] w-[840px] bg-background_grey pt-[205px]">
      <Flex.ColCenter className="w-[584px] gap-[95px]">
        <Title />
        <RecommendNicknameButton {...{ handleClickRecommend }} />
        <div className="w-[584px]">
          <Flex.ColCenter className="gap-[60px]">
            <Input {...{ nickname, onChangeHandler }} />
            <p>{isValid ? "사용 가능" : "사용 불가능"}</p>

            <Flex.ColEnd>
              <CheckInput
                text="(필수) 이용약관 전체동의"
                id={"이용약관"}
                isChecked={termsChecked}
                handleClick={onTermsChecked}
              />
              <CheckInput
                text="(선택) 마케팅 수신 동의"
                id={"마케팅"}
                isChecked={marketingChecked}
                handleClick={onMarketingChecked}
              />
            </Flex.ColEnd>
            <Flex.ColEnd>
              <ConfirmButton />
            </Flex.ColEnd>
          </Flex.ColCenter>
        </div>
      </Flex.ColCenter>
    </div>
  );
}
