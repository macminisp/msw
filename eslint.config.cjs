"use strict";

const globals = require("globals");
// const tseslint = require('typescript-eslint'); // Uncomment this when you’re ready to use TypeScript with ESLint
const pluginJest = require("eslint-plugin-jest");
const pluginReact = require("eslint-plugin-react");
const pluginImport = require("eslint-plugin-import");
const pluginJsxA11y = require("eslint-plugin-jsx-a11y");
const pluginReactHooks = require("eslint-plugin-react-hooks");
const pluginReactPreferFunctionComponent = require("eslint-plugin-react-prefer-function-component");
const importCustomRule = (rule) => require(`./eslint/lib/rules/${rule}`);

module.exports = [
  // ...tseslint.configs.recommended, // Uncomment this when you’re ready to use TypeScript with ESLint
  pluginReact.configs.flat.recommended,
  {
    ignores: [
      "node_modules/**",
      "build/**",
      "coverage/**",
      "eslint_report.json",
      "server/static.js",
      "config/**",
      "scripts/**",
      "prettier.config.js",
      "global-mocks.js",
    ],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      import: pluginImport,
      react: pluginReact,
      "jsx-a11y": pluginJsxA11y,
      "react-hooks": pluginReactHooks,
      "react-prefer-function-component": pluginReactPreferFunctionComponent,
      jest: pluginJest,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-key": "off",
      "react/display-name": "off",
      "react/no-deprecated": "off",

      "react/jsx-no-bind": "off", // !!! There was an “error” before the migration, it was temporarily set to “off. If we enable it now, there are 3495 issues to fix across files.
      "no-unused-vars": "error",
      "import/no-unused-modules": "error",
      "guard-for-in": "error",
      "import/named": "error",
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
      "jest/expect-expect": "off",
      "jest/max-expects": "off",
      "jest/no-commented-out-tests": "off",
      "jest/no-disabled-tests": "off",
      "jest/no-hooks": "off",
      "jest/no-mocks-import": "off",
      "jest/no-test-prefixes": "off",
      "jest/prefer-called-with": "off",
      "jest/prefer-expect-assertions": "off",
      "jest/prefer-snapshot-hint": "off",
      "jest/prefer-spy-on": "off",
      "jest/prefer-strict-equal": "off",
      "jest/prefer-to-be": "off",
      "jest/require-hook": "off",
      "jest/prefer-importing-jest-globals": "off",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/no-static-element-interactions": "error",
      "no-alert": "error",
      "no-await-in-loop": "error",
      "no-case-declarations": "error",
      "no-console": "error",
      "no-continue": "error",
      "no-empty": [
        "error",
        {
          allowEmptyCatch: true,
        },
      ],
      "no-else-return": [
        "error",
        {
          allowElseIf: true,
        },
      ],
      "no-extra-boolean-cast": "error",
      "no-lonely-if": "error",
      "no-nested-ternary": "error",
      "no-param-reassign": [
        "error",
        {
          props: false,
        },
      ],
      "no-prototype-builtins": "warn",
      "no-restricted-globals": "warn",
      "no-restricted-syntax": "warn",
      "no-return-assign": "warn",
      "no-shadow": "warn",
      "no-underscore-dangle": "warn",
      "no-unreachable": "warn",
      "no-unsafe-optional-chaining": "warn",
      "no-unused-expressions": "warn",
      "no-use-before-define": "warn",
      "no-useless-escape": "warn",
      "one-var": ["error", "never"],
      "operator-assignment": "error",
      "prefer-const": "error",
      "prefer-destructuring": [
        "error",
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: false,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      "prefer-rest-params": "warn",
      radix: "warn",
      "react/default-props-match-prop-types": "warn",
      "react/destructuring-assignment": [
        "error",
        "always",
        {
          ignoreClassFields: false,
          destructureInSignature: "always",
        },
      ],
      "react/forbid-prop-types": "warn",
      "react/jsx-curly-brace-presence": [
        "error",
        {
          props: "never",
          children: "never",
          propElementValues: "always",
        },
      ],
      "react/jsx-props-no-spreading": "warn",
      "react/no-access-state-in-setstate": "warn",
      "react/no-array-index-key": "warn",
      "react/no-unescaped-entities": [
        "error",
        {
          forbid: [">", "}"],
        },
      ],
      "react/no-unstable-nested-components": "warn",
      "react/no-unused-prop-types": "error",
      "react/prop-types": "warn",
      "react/require-default-props": "warn",
      "react/jsx-no-leaked-render": [
        "warn",
        {
          validStrategies: ["ternary", "coerce"],
        },
      ],
      strict: "warn",
      "vars-on-top": "error",
      yoda: "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-filename-extension": [
        "error",
        {
          extensions: [".js", ".jsx"],
        },
      ],
      "react/jsx-no-duplicate-props": [
        "error",
        {
          ignoreCase: false,
        },
      ],
      "arrow-body-style": "off",
      "func-names": ["error", "as-needed"],
      "react/sort-comp": "off",
      "react/static-property-placement": "off",
      "class-methods-use-this": "off",
      "object-shorthand": [
        "error",
        "always",
        {
          avoidExplicitReturnArrows: false,
        },
      ],
      "react-prefer-function-component/react-prefer-function-component": [
        "error",
        {
          allowComponentDidCatch: false,
        },
      ],
      "react/function-component-definition": [
        "error",
        {
          namedComponents: ["function-declaration"],
          unnamedComponents: "function-expression",
        },
      ],
      "consistent-return": "off",
      "jest/unbound-method": ["off"],
      "jest/prefer-lowercase-title": [
        "error",
        {
          ignore: ["describe"],
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "lodash",
              message:
                "Please use `import [package] from 'lodash/[package]'` instead.",
            },
            {
              name: "lodash/lang",
              importNames: ["isArray"],
              message: "Please use built-in Array.isArray from pure JS instead",
            },
            {
              name: "lodash/util",
              importNames: ["range"],
              message:
                "Please use pure JS instead to return a range of numbers, if applicable, create a function in `commonUtils.js` file",
            },
            {
              name: "lodash/collection",
              importNames: ["filter"],
              message: "Please use built-in filter from pure JS instead",
            },
            {
              name: "lodash/array",
              importNames: ["without"],
              message:
                "Please use pure JS for excluding a value, refer to `commonUtils.js` file",
            },
            {
              name: "lodash/array",
              importNames: ["head"],
              message:
                "Please use native JS to to get the first element of an array",
            },
            {
              name: "notistack",
              importNames: ["useSnackbar"],
              message:
                "Please use enqueueSnackbar from Grid/redux/actions/notifierActions instead.",
            },
            {
              name: "react-redux",
              importNames: ["connect"],
              message:
                "Please use hooks (useDispatch, useSelector) from react-redux instead of the connect method.",
            },
          ],
          patterns: ["!lodash/*"],
        },
      ],
    },
  },
];
