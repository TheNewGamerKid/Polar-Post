

export const POST = async ({ request }) => {
  const article = await request.json()
  const res = await fetch(article)
  const md = await res.blob()

  return new Response(md)
}