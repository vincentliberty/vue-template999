// // case1：多个 onRequestXXX 方法

// const htmlGet = `
//   <!DOCTYPE html>
//   <body>
//     <h1>Hello World - Get</h1>
//     <p>This markup was generated by TencentCloud Pages Functions.</p>
//   </body>
// `;

// const htmlPost = `
//   <!DOCTYPE html>
//   <body>
//     <h1>Hello World - Post</h1>
//     <p>This markup was generated by TencentCloud Pages Functions.</p>
//   </body>
// `;



// export async function onRequestGet(context) {
//   return new Response(htmlGet, {});
// }

// export async function onRequestPost(context) {
//   return new Response(htmlPost, {
//     headers: {
//       'content-type': 'text/html; charset=UTF-8',
//       'x-edgefunctions-test': 'Welcome to use Pages Functions.',
//     },
//   });
// }
