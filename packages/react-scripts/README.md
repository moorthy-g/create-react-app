# @moorthy-g/react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).<br>
Please refer to its documentation:

- [Getting Started](https://facebook.github.io/create-react-app/docs/getting-started) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

## Installation

```sh
npx create-react-app my-app --scripts-version @moorthy-g/react-scripts
cd my-app
npm start
```

## What are the modifications?

**Note:** Currently, These modifications are concerned only for javascript not typescript

- LESS replaces SASS
- Directory structure update
- Doesn't open browser when 'start' script run
- Enforce [angular conventional commit](https://github.com/conventional-changelog/commitlint) standards (Use commitlint, commitizen & husky).
- Use [directory-named-webpack-plugin](https://github.com/shaketbaby/directory-named-webpack-plugin)
- Shorter css modules classname in build
- No default sourcemap generation in build
- Include .editorconfig
- babel.config.js support for additional babel configuration
- Bundle reporting with "webpack-bundle-analyzer" plugin
