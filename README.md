[![DeepScan grade](https://deepscan.io/api/teams/17008/projects/20708/branches/571660/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=17008&pid=20708&bid=571660)
[![NPM info](https://img.shields.io/npm/dt/webscreen?color=39F4B6)](https://www.npmjs.com/package/webscreen)
[![GitHub stars](https://img.shields.io/github/stars/roxza/webscreen?color=888BFF)](https://github.com/roxza/webscreen/stargazers)
[![GitHub issues](https://img.shields.io/github/issues-raw/roxza/webscreen)](https://github.com/roxza/webscreen/issues)

[![NPM Info](https://nodei.co/npm/webscreen.png?downloads=true&stars=true)](https://www.npmjs.com/package/webscreen)

<h1 align="center">💻 Website Screenshot</h1>
<h6 align="center">Developed with ❤️ by Roxza</h6>

# 📦Installation

```console
npm i webscreen --save
yarn add webscreen
```

# 📝 Usage

```js
const captureWebsite = require("webscreen");
const capture = new captureWebsite({
   viewport: {
      width: 1920,
      height: 1080
   }
});

capture.screenshot("roxza.me", "hello.png").then(function (res) {
   console.log(res);
});

capture.screenshot("roxza.me", "roxza.png");
```

# Parameters

Below is the list of available parameters

| Parameter | Description                           |
| --------- | ------------------------------------- |
| url       | The url to take a screenshot of.      |
| path      | File path to save                     |
| width     | The width of the viewport in pixels.  |
| height    | The height of the viewport in pixels. |

## License

Webscreen is **licensed** under the **[MIT License]**. The terms of the license are as follows:

    The MIT License (MIT)

    Copyright (c) 2022 - Roxza

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
