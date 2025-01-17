
const x = require('./b.cjs');
console.log('x', x);

const data = {
  content: 5,
};

// console.log(test);
// console.log('test);


export function onRequestGet(context) {
  const result = JSON.stringify(data, null, 2);
  return new Response(result, {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
}

