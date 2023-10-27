# Easy-react-file-upload
- 超容易使用的上传文件组件
- 支持拖拽上传,点击上传
- TS编写,类型声明全面,见码入面,提高查找文档效率!

🎉 Easy-react-file-upload: 麻雀虽小五脏俱全, 至繁为简,把复杂的功能简单化,上传简单,简单上传,上传不简单!

## Installation

```
npm install --save Easy-react-file-upload
yarn add Easy-react-file-upload
```

## Features

- 超级容易的调用方式
- 全面的TS类型声明,让每一个字段都有自己类型
- 支持定义文件类型,限定可上传文件类型
- 上传图片提供无损压缩,图片裁剪,本地预览
- 调用方式灵活,提供组件式,回调函数式方法调用
- 提供全面的上传周期回调函数,不错过上传周期每一个节点
- 除浏览器端渲染外,也支持服务端渲染
- 快点试试吧!

## The gist

```jsx
  import React from 'react';

  import { EasyUpload } from 'Easy-react-file-upload';
  import 'Easy-react-file-upload/dist/dist/EasyFileUpload.css';
  // or
  // import 'Easy-react-file-upload/dist/dist/EasyFileUpload.min.css';
  
  function App(){
    return (
      <div >
        <EasyUpload fileType={'image'}
          server={}
          onStartUpload={(error, file) => {}}
          onStartUpload={(error, file) => {}}
          {...}
        >
        </ElementInViewport>
      </div>
    );
  }
```

## Demo

[A demo is worth a thousand words](https://yunstv.github.io/Easy-react-file-upload/)

## Documentation

## License

Licensed under MIT(LICENSE)
