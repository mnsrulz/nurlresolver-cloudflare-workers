addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const requestUrl = request.url
  return new Response(`Hello cloud flare worker! You requested ${requestUrl}`, {
    headers: { "content-type": "text/plain" }
  })
}
