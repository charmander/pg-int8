64-bit big-endian signed integer-to-string conversion designed for [pg][].

```js
const readInt8 = require('pg-int8');

readInt8(Buffer.from([0, 1, 2, 3, 4, 5, 6, 7]))
// '283686952306183'
```


  [pg]: https://github.com/brianc/node-postgres
