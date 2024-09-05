// 한글, 영문, 숫자, _ 만 가능
// 3글자 이상 14글자 이하
export default function isValidNickname(nickname: string) {
  const regExp = /^[a-zA-Z0-9가-힣_]{3,14}$/;
  return regExp.test(nickname);
}
