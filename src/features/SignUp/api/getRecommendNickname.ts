const mocks = ["닉네임_1", "닉네임_2", "닉네임_3"];

const createMocks =
  (idx = 0) =>
  () => {
    idx = idx + 1 >= mocks.length ? 0 : idx + 1;
    return mocks[idx];
  };

const getMock = createMocks();

function sleep(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export default async function getRecommendNickname() {
  // return await (await fetch("")).json();
  await sleep(500);
  return getMock();
}
