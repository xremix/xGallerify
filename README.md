# xGallerify
[![npm version](https://badge.fury.io/js/xgallerify.svg)](https://badge.fury.io/js/xgallerify)
[![Bower version](https://badge.fury.io/bo/xGallerify.svg)](https://badge.fury.io/bo/xGallerify)

A lightweight, responsive, smart gallery based on jQuery.

- Completly responsive
- Simple to use
- Customizable and custom styling
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

In this sample `.photos` is a `<div>` containing the images. xGallerify will resize the images in a pleasant way for you.

#### Custom Styling
You can put your images inside of div's and style them the way you want.
Check out the full working [CodePen Demo](http://codepen.io/xremix/pen/QyqJzQ) for a sample with a custom styled div.


### CDN (jsDelivr)

```HTML
<!-- Latest Version -->
<script src="https://cdn.jsdelivr.net/jquery.xgallerify/latest/jquery.xgallerify.min.js"></script>
<script src="https://cdn.jsdelivr.net/jquery.xgallerify/latest/jquery.xgallerify.js"></script>


<!-- Specific Version -->
<script src="https://cdn.jsdelivr.net/jquery.xgallerify/0.0.14/jquery.xgallerify.min.js"></script>
```


## Parameters

| Name | Default | Type | Description |
|---|---|---|---|
| `margin` | e.g. `10`  | `int` | Value in pixels of the margin of each image on each side  |
| `mode` | `default`, `bootstrap`, `flickr` or `small`  | `string` | The style mode wich defines how the gallery should be displayed and how many images fit in a row |
| `lastRow` | `adjust` or `fullwidth` | `string` | Set the last row to the full width or find a good adjustment. *NOTE:* I personally prefer `adjust` |
| `jsSetup` | `true` or `false` | `bool` | Sets some default CSS values to the elements like `dislay:inline-block` and for each image inside of a container `width:100%`. This can be disabled if you want to have your own floating or style this in plain css |
| `debounceLoad` | `true` or `false` | `bool` | This functionality waits `50ms` before rendering a new loaded image to boost the performance on older machines. Default is set to `true` |
| `debounceTime` | `50` | `int` | Set the time for the **debounceLoad**. Default is set to 50ms. |
| `width` | `800` | `int` | Width of the gallery in `px` - **Work in Progress!** It is recommended to use an outer div with a specific width to controll the width of the Gallery|


## Functions

### Render
To reinitialize the gallery when new images are added / loaded
```JS
$('.photos').gallerify();
//...
$(window).on('load', function() { // Eventlistener that fires when all images are loaded
    $('.photos').gallerify.render();
});
```

### Render Async Images
Automatically renders every time an image has been loaded. This needs to get called everytime you add a new image to `.photos` after calling `gallerify()`, if you don't have your own *image loaded* event listener like described in the Render function documentation.

```JS
$('.photos').gallerify();

$('.photos').append('<img src="sample-image.jpg">');
$('.photos').append('<img src="sample-image2.jpg">');
$('.photos').append('<img src="sample-image3.jpg">');

$('.photos').gallerify.renderAsyncImages();
```

## Modes

The modes property defines **how many** images do show at what **container width**

*NOTE*
If you want to have another mode you are welcome to contribute or open an [issue](https://github.com/xremix/xGallerify/issues).  
The maximal image height helps to show multiple images in a row, if the images do have a very high ratio like 3:9.

| Mode| Breakpoint | Images per row |
| ---------------- | ---------------- | ---------------- |
| **default mode** | Container width > 1800 | 4 |
|  | Container width > 1200 | 3 |
|  | Container width > 768 | 2 |
|  | Container width < 768 | 1 |
|  | Maximal image height | Screen Height * 0.5 |
| **bootstrap mode** | Container width > 1200 | 4 |
|  | Container width > 992 | 3 |
|  | Container width > 768 | 2 |
|  | Container width < 768 | 1 |
|  | Maximal image height | Screen Height * 0.5 |
| **flickr mode** | Container width > 1800 | 4 |
|  | Container width > 1300 | 3 |
|  | Container width > 610 | 2 |
|  | Container width < 610 | 1 |
|  | Maximal image height | Screen Height * 0.4 |
| **small mode** | Container width > 1800 | 14 |
|  | Container width > 1300 | 10 |
|  | Container width > 610 | 6 |
|  | Container width < 610 | 4 |
|  | Maximal image height | Screen Height * 0.4 |


## Community

xGallerify AngularJS directive: [JohnnyTheTank/angular-xGallerify](https://github.com/JohnnyTheTank/angular-xGallerify)

Thanks everyone for contributing. Suggestions are always welcome.  
Also I'm happy to hear in which projects you've used the library.

![Analytics](https://ga-beacon.appspot.com/UA-40522413-9/xGallerify/readme?pixel)