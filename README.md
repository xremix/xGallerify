# xGallerify
[![npm version](https://badge.fury.io/js/xgallerify.svg)](https://badge.fury.io/js/xgallerify)
[![Bower version](https://badge.fury.io/bo/xGallerify.svg)](https://badge.fury.io/bo/xGallerify)

A lightweight, responsive, smart gallery based on jQuery.

- Completly responsive
- Easy to use and customizable
- Only 2.5kb file size
- [AngularJS directive available](https://github.com/JohnnyTheTank/angular-xGallerify)

## Demo

Check out the [Demo](https://rawgit.com/xremix/xGallerify/master/Demo.html) or try it yourself with [CodePen](http://codepen.io/xremix/pen/QyqJzQ)

To see a real-live sample see the [Flickr Demo](https://rawgit.com/xremix/xGallerify/master/Demo-Flickr.html) or try it yourself with the [CodePen Sample](http://codepen.io/xremix/pen/OMxarm)

## Usage

```JS
$('.photos').gallerify({
    margin:10,
    mode:'default',
    lastRow:'adjust',
});
```

In this sample `.photos` is a div containing some images. You can also put your images inside of div's and style them the way you want. Check out the Demo for a sample.

### CDN (jsDelivr)

```HTML
<!-- Latest Version -->
<script src="https://cdn.jsdelivr.net/jquery.xgallerify/latest/jquery.xgallerify.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.xgallerify/latest/jquery.xgallerify.js"></script>


<!-- Specific Version -->
<script src="https://cdn.jsdelivr.net/jquery.xgallerify/0.0.13/jquery.xgallerify.min.js"></script>
```


## Parameters

| Name | Default | Type | Description |
|---|---|---|---|
| `margin` | e.g. `10`  | `int` | Value in pixels of the margin of each image on each side  |
| `width` | `800` | `int` | Width of the gallery in `px` - **WIP!** |
| `mode` | `default`, `bootstrap`, `flickr` or `small`  | `string` | The style mode wich defines how the gallery should be displayed and how many images fit in a row |
| `lastRow` | `adjust` or `fullwidth` | `string` | Set the last row to the full width or find a good adjustment. *NOTE:* I personally prefer `adjust` |
| `jsSetup` | `true` or `false` | `bool` | Sets some default CSS values to the elements like `dislay:inline-block` and for each image inside of a container `width:100%`. This can be disabled if you want to have your own floating or style this in plain css |
| `debounceLoad` | `true` or `false` | `bool` | This functionality waits `100ms` before rendering a new loaded image to boost the performance |


## Functions

### Render
To reinitialize the gallery when new images are added / loaded
```JS
$('.photos').gallerify();
//...
$(window).on('load', function() { //Gets called when all images got loaded
    $('.photos').gallerify.render();
});
```

### Render Async Images
Automatically renders every time an image has been loaded. This needs to get called everytime you add a new image to `.photos` after calling `gallerify()`, if you don't have your own *image loaded* event listener.

```JS
$('.photos').gallerify();

$('.photos').append('<img src="randomimage.jpg">');
$('.photos').append('<img src="randomimage2.jpg">');
$('.photos').append('<img src="randomimage3.jpg">');

$('.photos').gallerify.renderAsyncImages();
```

## Community

xGallerify AngularJS directive: [JohnnyTheTank/angular-xGallerify](https://github.com/JohnnyTheTank/angular-xGallerify)

Thanks everyone for contributing. Suggestions are welcome.

![Analytics](https://ga-beacon.appspot.com/UA-40522413-9/xGallerify/readme?pixel)