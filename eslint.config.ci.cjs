"use strict";

const baseConfig = require("./eslint.config.cjs");

module.exports = [
  ...baseConfig,
  {
    rules: {
      "grid/no-dark-text-field": "off",
      "grid/no-editable-text-field": "off",
      "grid/display-mode": "off", // ! Before the migration, it was set to 'error' value, but now it doesn’t work for some reason.
      "import/no-cycle": "off",
      "import/no-extraneous-dependencies": "off",
      "import/no-import-module-exports": "off",
      "import/no-mutable-exports": "off",
      "import/no-named-as-default": "off",
      "import/no-named-default": "off",
      "import/no-relative-packages": "off",
      "import/no-unresolved": "off",
      "import/no-useless-path-segments": "off",
      "import/order": "off",
      "no-prototype-builtins": "off",
      "no-restricted-globals": "off",
      "no-restricted-syntax": "off",
      "no-return-assign": "off",
      "no-shadow": "off",
      "no-underscore-dangle": "off",
      "no-unreachable": "off",
      "no-unsafe-optional-chaining": "off",
      "no-unused-expressions": "off",
      "no-use-before-define": "off",
      "no-useless-escape": "off",
      "prefer-rest-params": "off",
      radix: "off",
      "react/default-props-match-prop-types": "off",
      "react/forbid-prop-types": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-access-state-in-setstate": "off",
      "react/no-array-index-key": "off",
      "react/no-unstable-nested-components": "off",
      "react/prop-types": "off",
      "react/require-default-props": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
];
