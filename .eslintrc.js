module.exports = {
  root: true,
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended", // enables plugin + config
  ],
  plugins: ["prettier"],
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // Run Prettier as an ESLint rule (shows as error)
    "prettier/prettier": "error",

    // Airbnb overrides (optional but common)
    "no-console": "warn",
    "no-underscore-dangle": "off",
    "func-names": "off",
    "import/extensions": "off",
    "no-plusplus": "off",
  },
};
