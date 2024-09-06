import { headers } from "next/headers";

export const getToken = async (code: string) => {
  const host = headers().get("host");
  const protocol = "http";
  try {
    const response = await fetch(
      `${protocol}://${host}/api/login?code=${code}`,
    );
    return response.json();
  } catch (error) {
    console.error("Error fetching getToken", error);
  }
};
