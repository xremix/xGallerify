window.readyForGallerify = false;
$(window).load(function() {
	window.readyForGallerify = true;
});
$.fn.gallerify = function(params){
	var _this = this;// -1 pixel to make the resize look smooth
	//Parameter
	params.interruptSetup = params.interruptSetup || false;
	params.width = params.width || undefined;
	params.imagesPerRow = params.imagesPerRow || undefined;
	params.margin = params.margin || undefined;
	//default, bootstrap, flickr
	params.mode = params.mode || 'default';

	function getScreenSettings(galleryWidth){
		var ret = {
			itemsPerColumn : -1,
			maxHeight : 500
		};

		//Items per column
		if(params.mode == "default"){
			//default MODE
			if(galleryWidth > 1600){
				ret.itemsPerColumn = 4;
			}
			else if(galleryWidth > 1200){
				ret.itemsPerColumn = 3;
			}
			else if(galleryWidth > 768){
				ret.itemsPerColumn = 2;
			}else {
				ret.itemsPerColumn = 1;
			}
			//MAX HEIGHT
			if(galleryWidth > 768){
				ret.maxHeight = screen.height * 0.6;
			}

		}else if(params.mode == "bootstrap"){
			//bootstrap MODE
			if(galleryWidth > 1200){
				ret.itemsPerColumn = 4;
			}
			else if(galleryWidth > 992){
				ret.itemsPerColumn = 3;
			}
			else if(galleryWidth > 768){
				ret.itemsPerColumn = 2;
			}else {
				ret.itemsPerColumn = 0.4;
			}
			//MAX HEIGHT
			if(galleryWidth > 768){
				ret.maxHeight = screen.height * 0.5;
			}

		}else if(params.mode == "flickr"){
			//flickr MODE
			if(galleryWidth > 1800){
				ret.itemsPerColumn = 4;
			}
			else if(galleryWidth > 1300){
				ret.itemsPerColumn = 3;
			}
			else if(galleryWidth > 610){
				ret.itemsPerColumn = 2;
			}else {
				ret.itemsPerColumn = 1;
			}
			//MAX HEIGHT
			if(galleryWidth > 768){
				ret.maxHeight = screen.height * 0.4;
			}

		}

		//Max width
		if(galleryWidth < 768) {
			ret.maxHeight = screen.height;
		}
		return ret;
	}

	function resizeWidth(jChildren, rowWidth, margin){
		var currentWidth = _.reduce(jChildren, function(result, element){return result + element.width()}, 0);
		// -1 pixel to make the resize look smooth
		//Test adding 2px to the margin
		var factor =( rowWidth - 1 - (jChildren.length * (margin + 4) * 2)) / currentWidth;
	  	//var factor =( rowWidth - 1 - (jChildren.length * (margin) * 2)) / currentWidth;
	  	for (var i = 0; i < jChildren.length; i++) {

	  		jChildren[i].css('width',  jChildren[i].width() * factor);
	  	};
	  	return jChildren[0].height();
	  }

	  function resizeHeight(jChildren, childHeight){
	  	for (var i = 0; i < jChildren.length; i++) {
	  		var factor =  childHeight / jChildren[i].height();
  			var x = jChildren[i].width();
	  		jChildren[i].width(jChildren[i].width() * factor);
	  	};
	  }

	  function renderRow(jChildren, galleryWidth, margin, maxHeight){
		//var rowHeight = _.min(jChildren, function(t){return t.height() }).height();
		var rowHeight = maxHeight;
		resizeHeight(jChildren, rowHeight);
		var rowHeight = resizeWidth(jChildren, galleryWidth, margin);
		return rowHeight;
	}

	function renderLastRow(jChildren,  rowHeight){
		//Width can be wider than the screen!
		resizeHeight(jChildren, rowHeight);
		return rowHeight;
	}

	function renderGallery(jGallery, _params){
		var jChildren = []; //jquery childs
		var jChildRows = []; //jquery childs
		var dChildren = jGallery.children(); //dom childs
		var width = _params.width ? _params.width : jGallery.width();
		var screenSettings = getScreenSettings(width);
		imagesPerRow = _params.imagesPerRow ? _params.imagesPerRow : screenSettings.itemsPerColumn;
		_params.margin =_params.margin ? _params.margin : 3;
		var lastRowHeight;
		//This code looks a little too complex - seperate in multiple functions
		for (var i = 0; i < dChildren.length; i++) {
			var _jChild = $(dChildren[i]);
			if(_jChild.width() > 0){

				jChildren.push(_jChild);
				_jChild.css("margin", _params.margin);

				if(jChildren.length >= imagesPerRow || i == dChildren.length -1){
					var lastRow = i == dChildren.length -1;
					jChildRows.push(jChildren);
					// if(!lastRow){
						lastRowHeight = renderRow(jChildRows[jChildRows.length - 1], width, _params.margin, screenSettings.maxHeight);
					// }else{
					// 	 renderLastRow(jChildRows[jChildRows.length - 1], lastRowHeight);
					// }

					if(lastRowHeight < screenSettings.maxHeight){
						jChildren = [];
					}
				}
			}else{
				_jChild.load(function() {
					renderGallery(_this, params);
					$( this ).addClass( "imgloaded" );
				});

			}
		};
	}

	function setupChilds(jGallery){
		var dChildren = jGallery.children();
		for (var i = 0; i < dChildren.length; i++) {
			var _jChild = $(dChildren[i]);
			_jChild.css("display", "inline-block");
			_jChild.find("img").css("width", "100%");
		}
	}

	function init(){
		//Allow
		!params.interruptSetup && setupChilds(_this);
		if(window.readyForGallerify){
			renderGallery(_this, params);
		}else{
			$(window).on("load", function() {
				renderGallery(_this, params);
			});
		}

		$( window ).resize(function() {
			renderGallery(_this, params);
		});
	}
	init();
	return _this;
};