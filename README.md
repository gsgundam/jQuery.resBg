jQuery.resBg
============

A simple js tool to resize full-size website's background, based on jQuery.

使用起来十分简单的自适应页面背景插件。

#ChangeLog
 - 0.1  创建文件 
  

#使用方法：

## 引用(为国人使用方便，引用了百度托管的jquery库):

```js
<script src="http://libs.baidu.com/jquery/1.10.2/jquery.js"></script>
<script src="js/jQuery.resBg.min.js"></script>
```

## js:

```js
<script type="text/javascript">
$(document).ready(function() {
	$("#bg").resBg({
	  position: 'absolute' //可选， 'absolute'或'fixed'
	});
});
</script>
```


## html:
```html
<img src="img/bg.jpg" class="resBg" id="bg" /> <!-- 使用resBg类来明确背景图片,一定要放在<body>层 -->
<div>
  <p style="color:#eee; display:block; font-size:36px; text-align:center; font-family:arial, '微软雅黑'; margin-top:60px;">STEVE JOBS' WORK</p>
  <p style="color:#eee; display:block; text-align:center; font-family:arial, '微软雅黑';"> 这是一个演示网站，背景大小会随着浏览器大小改变<br>This is a demo. The background picture will resize when your browser size changes.</p>
</div>
```

作者网址:http://gsgundam.com
欢迎指出问题或者提供建议！
