# MecuUtils
Utility for MeCu
***

## How to use
Require this package via npm, then:

```javascript
const MecuUtils = require('mecu-utils');
```

**IMPORTANT**: This package uses [Destructuring assignments](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment). These are supported out of the box only starting with Node V6. You can check compatibility [through this table](https://kangax.github.io/compat-table/es6/#test-destructuring).

After that you can use the following functions:

### Parse text file entry.
```javascript
const fs = require('fs');

fs.readFile(someFile.path, 'utf8', function (error, data) {
  var entries = MecuUtils.parse(data);
}
```