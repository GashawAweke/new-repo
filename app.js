// [PAUSE](https://youtu.be/TNV0_7QRDwY?t=7374)

const _ = reuire('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
