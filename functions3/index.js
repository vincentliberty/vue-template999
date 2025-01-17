const html = `
  <!DOCTYPE html>
  <body>
    1234
  </body>
`;


export function onRequest(context) {
  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'x-edgefunctions-test': 'Welcome to use Pages Functions.',
    },
  });
}
