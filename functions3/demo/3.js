// // case3 存在第三方引入，多个立即执行函数的问题
// import { createClient } from '@supabase/supabase-js';

// export async function onRequest(context) {
//   const supabase = createClient(
//     'https://apzfgncfbpyfnbkdcmii.supabase.co',
//     'eyJhbGciOiJIUzI'
//   );

//   const { data, error } = supabase.from('users').select('*');

//   console.log(data, error);
// }