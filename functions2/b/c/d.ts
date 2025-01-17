const html = `
  <!DOCTYPE html>
  <body>
    <h1>b/c/d</h1>
    <p>This markup was generated by TencentCloud Edge Functions.</p>
  </body>
`;


export function onRequestGet(context) {
  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'x-edgefunctions-test': 'Welcome to use Edge Functions.',
    },
  });
}
