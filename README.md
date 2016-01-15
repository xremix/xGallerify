# xGallerify
[![npm version](https://badge.fury.io/js/xgallerify.svg)](https://badge.fury.io/js/xgallerify)
[![Bower version](https://badge.fury.io/bo/xGallerify.svg)](https://badge.fury.io/bo/xGallerify)

A lightweight, responsive, smart gallery based on jQuery.

- Completly responsive
- Easy to use and customizable
- Only 2.5kb file size
- AngularJS port available

## Demo

Check out the [Demo](https://rawgit.com/xremix/xGallerify/master/Sample.html) or try it your self with [CodePen](http://codepen.io/anon/pen/Qyqjyg)

## Usage

```JS
$('.photos').gallerify({
    margin:10,
    mode:'default',
    lastRow:'adjust',
});
```

In this sample `.photos` is a div containing some images. You can also put your images inside of div's and style them the way you want. Check out the Demo for a sample.

### CDN

```HTML
<!-- Latest Version -->
<script src="https://cdn.rawgit.com/xremix/xGallerify/master/dist/jquery.xgallerify.min.js"></script>
<script src="https://cdn.rawgit.com/xremix/xGallerify/master/dist/jquery.xgallerify.js"></script>


<!-- Specific Version -->
<script src="https://cdn.rawgit.com/xremix/xGallerify/v0.0.8/dist/jquery.xgallerify.min.js"></script>
```


## Parameters

| Name | Default | Type | Description |
|---|---|---|---|
| `margin` | e.g. `10`  | `int` | Value in Pixels of the margin of each image on each side  |
| `width` | `800` | `int` | Width of the gallery in `px` - **WIP!** |
| `mode` | `default`, `bootstrap`, `flickr` or `small`  | `string` | The mode how the gallery should be displayed and how many images fit in a row |
| `lastRow` | `adjust` or `fullwidth` | `string` | This will set the last row to the full width or find a good adjustment. I personally prefer `adjust` |
| `jsSetup` | `true` or `false` | `bool` | This sets some CSS values to the elements like `dislay:inline-block` and for each image inside of a container `width:100%`. This can be disabled if the user want to have his own floating / style or style this in plain css |
| `debounceLoad` | `true` or `false` | `bool` | This functionality waits `100ms` before rendereing a new loaded image to boost the performance |


## Functions

### Render
To reinitialize the gallery (when new images are added)
```JS
$('.photos').gallerify();
//...
$(window).on('load', function() { //Gets called when all images got loaded
    $('.photos').gallerify.render();
});
```

### Render Async Images
Automatically renders every time a image has been loaded. This needs to get called everytime you add a new image after **gallerify()**, if you don't have your on *image loaded* event listener.

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