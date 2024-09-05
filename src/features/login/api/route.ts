export async function GET() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/members/signup/google`,
  );
  const data = await res.json();

  return Response.json({ data });
}
