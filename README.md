# 轱辘——一个Vue UI组件

作者: 我

[![Build Status](https://www.travis-ci.org/slTrust/gulu-180701.svg?branch=master)](https://www.travis-ci.org/slTrust/gulu-180701)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1. CSS 样式

    使用本框架前，请在 CSS 中开启 border-box
    
    ```$xslt
    *,*::before,*::after{box-sizing:border-box;}
    ```
    
    IE8 及以上浏览器都支持此样式
    
    你还需要设置默认颜色等变量(后续会改为 SCSS 变量)
    
    ```$xslt
    :html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    
    IE15 及以上浏览器支持此样式。
    
2. 安装gulu
    ```$xslt
    npm i --save almost-test-1-1
    ```
    
3. 引入 gulu
```$xslt
mport {Button,Icon,ButtonGroup} from 'almost-test-1-1'
import  'almost-test-1-1/dist/index.css'
export default {
  name: 'App',
  components: {
    HelloWorld,
    'g-button':Button,
    'g-icon':Icon,
    'g-button-group':ButtonGroup
  }
}
```

4. 引入 svg symbols
```$xslt
<script src="//at.alicdn.com/t/font_720640_gaqkkpfkngg.js"></script>
```
    

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
