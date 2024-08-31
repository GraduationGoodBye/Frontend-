interface Props {
  handleClickRecommend: () => void;
}

export default function RecommendNicknameButton({
  handleClickRecommend,
}: Props) {
  return (
    <button onClick={handleClickRecommend}>추천 닉네임 생성기(임시)</button>
  );
}
