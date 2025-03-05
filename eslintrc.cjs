module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-props-no-spreading": "off",
    "react/function-component-definition": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
  },
};
