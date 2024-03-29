module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:ava/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "ava",
    "promise",
    "react"
  ],
  "globals": {
    "__DEV__": false,
    "process.env.NODE_ENV": false
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "rules": {
    "no-console": 1,
    "promise/param-names": 2,
    "promise/always-return": 1,
    "promise/catch-or-return": 1,
    "react/prop-types": 0
  }
};
