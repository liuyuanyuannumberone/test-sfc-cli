# test-sfc-cli

[![Build Status](https://badgen.net/travis/liuyuanyuan_npm/test-sfc-cli/main)](https://travis-ci.com/liuyuanyuan_npm/test-sfc-cli)
[![NPM Download](https://badgen.net/npm/dm/@liuyuanyuan_npm/test-sfc-cli)](https://www.npmjs.com/package/@liuyuanyuan_npm/test-sfc-cli)
[![NPM Version](https://badge.fury.io/js/%40liuyuanyuan_npm%2Ftest-sfc-cli.svg)](https://www.npmjs.com/package/@liuyuanyuan_npm/test-sfc-cli)
[![NPM License](https://badgen.net/npm/license/@liuyuanyuan_npm/test-sfc-cli)](https://github.com/liuyuanyuan_npm/test-sfc-cli/blob/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/liuyuanyuan_npm/test-sfc-cli/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

开发 Vue 组件

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Install](#install)
- [Quick Start](#quick-start)
  - [Global Register Component](#global-register-component)
  - [Template](#template)
- [Links](#links)
- [Reference](#reference)
- [Contributing](#contributing)
- [Contributors](#contributors)
- [License](#license)

## Introduction

测试使用 vue-sfc-cli 脚手架开发 Vue 组件

[⬆ Back to Top](#table-of-contents)

## Features

- Use configuration to call restful api to complete CRUD functions
- Support table display tree structure data
- Bound with pagination logic
- Support custom column buttons, and custom operation functions
- Support saving query on url, which can resotre search status after history.go(-1) or location.reload()

[⬆ Back to Top](#table-of-contents)

## Install

Encourage using [Yarn](https://yarnpkg.com/en/docs/install#mac-stable) to install

```sh
yarn add @liuyuanyuan_npm/test-sfc-cli
```

[⬆ Back to Top](#table-of-contents)

## Quick Start

### Global Register Component

```javascript
import Vue from 'vue'
import TestSfcCli from '@liuyuanyuan_npm/test-sfc-cli'
Vue.use(TestSfcCli)
```

### Template

```vue
<template>
  <test-sfc-cli></test-sfc-cli>
</template>
```

[⬆ Back to Top](#table-of-contents)

## Links

- [docs](https://FEMessage.github.io/el-data-table/)

[⬆ Back to Top](#table-of-contents)

## Reference

- [regExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
- [routing implementations details in vue-router](https://zhuanlan.zhihu.com/p/27588422)
- [peer-dependencies](https://nodejs.org/en/blog/npm/peer-dependencies/)

[⬆ Back to Top](#table-of-contents)

## Contributing

For those who are interested in contributing to this project, such as:

- report a bug
- request new feature
- fix a bug
- implement a new feature

Please refer to our [contributing guide](https://github.com/FEMessage/.github/blob/main/CONTRIBUTING.md).

[⬆ Back to Top](#table-of-contents)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

[⬆ Back to Top](#table-of-contents)

## License

[MIT](./LICENSE)

[⬆ Back to Top](#table-of-contents)
