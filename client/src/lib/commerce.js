import Commerce from '@chec/commerce.js';

console.log(process.env.REACT_APP_CHECC_PUBLIC_KEY);

export const commerce = new Commerce(process.env.REACT_APP_CHECC_PUBLIC_KEY, true);

