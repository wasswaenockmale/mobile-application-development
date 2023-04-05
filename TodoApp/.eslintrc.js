module.exports = {
  root: true,
  // eslint-disable-next-line prettier/prettier
  extends: '@react-native-community',
  extends: ["plugin:prettier/recommended"],
  "prettier/prettier": [
    "error",
    {
      "singleQuote": true,
      "parser": "flow"
    }
  ]
};