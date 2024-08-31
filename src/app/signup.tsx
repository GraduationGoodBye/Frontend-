import { Sign } from "crypto";
import { Flex } from "../shared/ui";

interface Props {
  heading: string;
  content: string;
}

const TERMS_OF_SERVICE1 = "개인정보 이용약관동의";
const TERMS_OF_SERVICE2 = "마케팅 이용약관동의";

const TERMS_OF_CONTENT1 = `Pinterest의 사명은 모든 사람이 즐거운 삶을 영위하도록 아이디어를 전하는 것입니다. 이를 위해 회원님 및 기타 당사자로부터 수집한 정보에 따라 회원님이 관심이 있을 만한 맞춤형 콘텐츠와 광고를 보여드립니다.
Pinterest에서 수집되는 정보, 이러한 정보를 사용하는 방법 및 회원님이 선택할 수 있는 사항을 이해할 수 있도록 이 정책을 작성했습니다. 아래의 일부 개념이 다소 기술적이지만 최대한 간단하고 명확하게 설명하기 위해 최선을 다했습니다.
Pinterest의 글로벌 개인정보 보호정책입니다. 아래에 사용자의 거주지에 따라 어떤 섹션이 어디에 적용되는지를 강조 표시했습니다.
일반데이터보호규정(“GDPR”)의 목적을 위해 EEA, 스위스, 영국 거주자의 경우 Pinterest Europe Ltd. 및 Pinterest, Inc.가 사용자의 개인 데이터를 합동으로 통제합니다. Pinterest Europe Ltd.는 Palmerston House, 2nd Floor, Fenian Street, Dublin 2, Ireland에 등록되어 있는 아일랜드 회사입니다. Pinterest, Inc.는 651 Brannan St., San Francisco, CA 94107, USA에 등록된 사무실이 있는 미국 회사입니다. Pinterest Europe Ltd는 GDPR에 따른 주요 의무사항 준수를 책임지는 제어 업체입니다. Pinterest 데이터 처리 활동과 관련한 문의 사항은 Pinterest 데이터 보호 책임자에게 문의하세요.`;

const TERMS_OF_CONTENT2 = `Pinterest의 사명은 모든 사람이 즐거운 삶을 영위하도록 아이디어를 전하는 것입니다. 이를 위해 회원님 및 기타 당사자로부터 수집한 정보에 따라 회원님이 관심이 있을 만한 맞춤형 콘텐츠와 광고를 보여드립니다.
Pinterest에서 수집되는 정보, 이러한 정보를 사용하는 방법 및 회원님이 선택할 수 있는 사항을 이해할 수 있도록 이 정책을 작성했습니다. 아래의 일부 개념이 다소 기술적이지만 최대한 간단하고 명확하게 설명하기 위해 최선을 다했습니다.
Pinterest의 글로벌 개인정보 보호정책입니다. 아래에 사용자의 거주지에 따라 어떤 섹션이 어디에 적용되는지를 강조 표시했습니다.
일반데이터보호규정(“GDPR”)의 목적을 위해 EEA, 스위스, 영국 거주자의 경우 Pinterest Europe Ltd. 및 Pinterest, Inc.가 사용자의 개인 데이터를 합동으로 통제합니다. Pinterest Europe Ltd.는 Palmerston House, 2nd Floor, Fenian Street, Dublin 2, Ireland에 등록되어 있는 아일랜드 회사입니다. Pinterest, Inc.는 651 Brannan St., San Francisco, CA 94107, USA에 등록된 사무실이 있는 미국 회사입니다. Pinterest Europe Ltd는 GDPR에 따른 주요 의무사항 준수를 책임지는 제어 업체입니다. Pinterest 데이터 처리 활동과 관련한 문의 사항은 Pinterest 데이터 보호 책임자에게 문의하세요.`;

function Terms({ heading, content }: Props) {
  return (
    <div className="h-[274px] w-[770px] gap-2 bg-background_light p-[16px]">
      <h3 className="mb-[30px] font-super text-[16px]">{heading}</h3>
      <p className="text-[12px]">{content}</p>
    </div>
  );
}

function SignFormContainer() {
  return (
    <div className="h-[760px] w-[840px] bg-background_grey pt-[205px]">
      <Flex.ColCenter className="w-[584px] gap-[95px]">
        <SignTitle />
        <div className="w-[584px]">
          <Flex.ColCenter className="gap-[60px]">
            <SignInputBox />
            <Flex.ColEnd className="w-full gap-[4px]">
              <SignCheckInput text="(필수) 이용약관 전체동의" id={"이용약관"} />
              <SignCheckInput text="(선택) 마케팅 수신 동의" id={"마케팅"} />
            </Flex.ColEnd>
            <Flex.ColEnd className="w-full">
              <SignConfirmButton />
            </Flex.ColEnd>
          </Flex.ColCenter>
        </div>
      </Flex.ColCenter>
    </div>
  );
}

function SignTitle() {
  return (
    <h3 className="h-[35px] text-[24px] font-black">
      사용할 닉네임을 입력하세요.
    </h3>
  );
}

function SignInputBox() {
  return (
    <section className="h-[90px] w-[584px]">
      <Flex.RowCenter className="h-full gap-3 bg-white p-[12px]">
        <p className="font-black">@</p>
        <input
          type="text"
          className="flex-1 text-[24px] font-light"
          placeholder="입력해주세요..."
        />
      </Flex.RowCenter>
    </section>
  );
}

function SignCheckInput({ text, id }: { text: string; id: string }) {
  return (
    <div className="flex w-[200px] items-center gap-2">
      <input
        type="checkbox"
        className="h-[20px] w-[20px] appearance-none border border-black"
      />
      <label htmlFor={id} className="border-black text-[16px]">
        {text}
      </label>
    </div>
  );
}

function SignConfirmButton() {
  return (
    <button className="border-b-[1px] border-black pb-1 text-[16px]">
      닉네임 중복 확인하고 가입 완료하기
    </button>
  );
}
export default function Signup() {
  return (
    <Flex.RowCenter className="h-screen">
      <Flex.ColCenter className="h-full gap-[30px] bg-primary">
        <Terms heading={TERMS_OF_SERVICE1} content={TERMS_OF_CONTENT1} />
        <Terms heading={TERMS_OF_SERVICE2} content={TERMS_OF_CONTENT2} />
      </Flex.ColCenter>
      <Flex.ColCenter className="h-full bg-background_light">
        <SignFormContainer />
      </Flex.ColCenter>
    </Flex.RowCenter>
  );
}
