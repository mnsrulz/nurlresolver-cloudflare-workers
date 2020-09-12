const queryString = require('query-string');
import got from "got";
import cheerio from "cheerio";
// const nurlresolver = require('nurlresolver');

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  console.log('handling request...');
  const { query } = queryString.parseUrl(request.url);
  let result = {};
  if (query.q) {
    const { q, m } = query;
    // result = await nurlresolver.resolve(q, {
    //   extractMetaInformation: m && m === 'true'
    // });

    const response = await got(q);
    const $ = cheerio.load(response.body);
    const title = $('title').first()
    result = title;
    //this is just for test purposes
  } else {
    result = { error: 'Query param q not defined' }
  }
  return new Response(result, {
    headers: { "content-type": "application/json" }
  })
}
