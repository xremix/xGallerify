# xGallerify

A lightweight, responsive, smart gallery based on jQuery.

[Demo](https://rawgit.com/xremix/xGallerify/master/Sample.html)

## Usage

```JS
	$('.photos').gallerify({
		 margin:5,
		 mode:'default',
		 lastRow:'adjust',
	});	
```

## Parameters

| Name | Value | Description |
|---|---|---|
| `margin` | e.g. `1`  | Value in Pixels of the margin of each image on each side  |
| `mode` | `default`, `bootstrap`, `flickr` or `small`  | The mode how the gallery should be displayed and how many images fit in a row |
| `interruptSetup` | `true` or `false` | This sets some CSS values to the elements like `dislay:inline-block` and for each image inside of a container `width:100%`. This can be disabled if the user want to have his own floating / style or style this in plain css |
| `width` | `800` | Width of the gallery in `px` - **WIP!** |