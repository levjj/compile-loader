# compile-loader

Allows custom preprocessing by evaluating the module at compile time.

Useful for removing secrets from the source when bundling config files.

## Installation

`npm install compile-loader --save-dev`

## Example

```javascript
function PRIVATE(a) {
  return process.ENV.CLIENT ? a : undefined;
}
module.exports = {
  production: {
    port: 9000,
    assets: [],
    session: {
      secret: PRIVATE('eE79c5!637304*34eA0d5f5fbb,e3d1?')
    }
  }
};
```

Without the loader, calling `PRIVATE` will not change the behavior of the
above code.

However, when using the `eval-loader`, webpack will evaluate the module at
compile time and replace its contents with the resulting value of
`module.exports`.

```javascript
// resulting webpack bundle
module.exports = {"production":{"port":9000,"assets":[],"session":{}}}
```
