# 在 create-react-app 中使用

[create-react-app][create-react-app] 可以帮助快速建立一个 `react` 工程，本向导将介绍如何将 `za` 于 `create-react-app` 结合使用。

## 初始化一个项目

在开始之前，您可能需要安装 [yarn][yarn]。

```bash
$ yarn create react-app test-app
```

执行后，工具将自动生成一个 `react` 开发脚手架，并安装开发 `react` 所必须的所有依赖。安装完成后执行

```bash
$ yarn start
```

浏览器会自动打开 `http://localhost:3000/`，当您看到 `Welcome to React` 页面就是安装成功了。

## 引入 rsuite

安装 rsuite

```
$ yarn add @stbui/za
```

然后编辑`./src/App.js`

```diff
  import React, { Component } from 'react';
- import logo from './logo.svg';
  import './App.css';

+ import { Button } from '@stbui/za';

  class App extends Component {
    render() {
      return (
        <div className="App">
-         <header className="App-header">
-           <img src={logo} className="App-logo" alt="logo" />
-           <h1 className="App-title">Welcome to React</h1>
-         </header>
-         <p className="App-intro">
-           To get started, edit <code>src/App.js</code> and save to reload.
-         </p>
+         <Button type="primary"> Hello world </Button>
        </div>
      );
    }
  }

  export default App;
```

之后您会看到一个强调按钮 ，现在您可以继续进行开发了。如果您遇到其他的问题，可以查询 create-react-app 的 [官方文档][create-react-app-readme]。
