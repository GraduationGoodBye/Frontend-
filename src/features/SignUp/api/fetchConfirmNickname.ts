const fetchConfirmNickname = async (nickname: string) =>
  await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/members/check/nickname/${nickname}`,
    )
  ).json();

export default fetchConfirmNickname;
