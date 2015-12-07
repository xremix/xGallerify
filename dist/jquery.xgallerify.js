(function($){
	var windowHasLoaded = false;
	$(window).load(function(){
		windowHasLoaded = true;
	});

	///////// PUBLIC FUNCTIONS /////////
	$.fn.gallerify = function(params){
		var _this = this;

		//Sample Parameters
		params = params || {};
		params.margin = params.margin != undefined && params.margin != null ? params.margin : 5;
		params.width = params.width || undefined; //width of the whole gallery
		params.mode = params.mode || 'default'; //default, bootstrap, flickr, small
		params.interruptSetup = params.interruptSetup || false; //if you are going to set the css variables for the elements in CSS
		params.imagesPerRow = params.imagesPerRow || undefined; //How many images should show up at a MINIMUM

		init(_this, params);

		this.gallerify.render = function(){
			renderGallery(_this, params);
		};

		this.gallerify.renderAsyncImages = function(){
			console.log(this);
			_this.find("img").load(function(){
				renderGallery(_this, params);
			});
		};

		return _this;
	};

	///////// PRIVATE FUNCTIONS /////////
	function init(jGallery, params){
		//Allow
		!params.interruptSetup && setupChilds(jGallery, params.margin);
		jGallery.addClass("xgallerify");
		if(windowHasLoaded){
			renderGallery(jGallery, params);
		}else{
			$(window).on("load", function(){
				renderGallery(jGallery, params);
			});
		}

		$(window).resize(function(){
			renderGallery(jGallery, params);
		});
	}

	function setupChilds(jGallery, margin){
		jChildren = $(jGallery.children());
		jChildren
		.css("display", "inline-block")
		.css("margin", margin)

		.find("img")
		.css("width", "100%")
		.addClass("ximage-loaded");
	}

	function renderGallery(jGallery, _params){
		var jChildren = []; //jquery childs
		var jChildRows = []; //jquery childs
		var dChildren = jGallery.children(); //dom childs
		var width = _params.width || jGallery.width();
		var screenSettings = getScreenSettings(width, _params.mode);
		imagesPerRow = _params.imagesPerRow || screenSettings.itemsPerRow;

		_params.lastRow = _params.lastRow || "fullwidth";
		var lastRowHeight;
		//TODO Might need some rework
		if(_params.width){
			jGallery.width(width);
		}

		//TODO This code looks a little too complex - seperate in multiple functions?!
		for (var i = 0; i < dChildren.length; i++){
			var _jChild = $(dChildren[i]);
			if(_jChild.width() > 0){
				jChildren.push(_jChild);

				if(jChildren.length >= imagesPerRow || i == dChildren.length -1){
					jChildRows.push(jChildren);
					if(
						!(
							i == dChildren.length -1 //Check if last row
							&& jChildren.length < screenSettings.itemsPerRow // Check if the miminum items per row are reched
						) //Checking if current row is a complete row
						|| _params.lastRow == "fullwidth" //check if a non-complete row should be displayed with the full width
						){
						lastRowHeight = renderRow(jChildRows[jChildRows.length - 1], width, _params.margin, screenSettings.maxHeight);
				}else{
					renderLastRow(jChildRows[jChildRows.length - 1], width, _params.margin, lastRowHeight);	
				}

					if(lastRowHeight < screenSettings.maxHeight){ //If the row height is smaller than the maxHeight property beginn a new row. Otherwise add another image to decrese the height
						jChildren = [];
					}
				}
			}else{
				_jChild.load(function(){
					renderGallery(_this, params);
				});
			}
		};
	}

	function renderRow(jChildren, galleryWidth, margin, maxHeight){
		resizeToSameHeight(jChildren, maxHeight);
		return resizeToWidth(jChildren, galleryWidth, margin); //Returning height of the current row
	}

	function renderLastRow(jChildren,  galleryWidth, margin, rowHeight){
		rowHeight = resizeToSameHeight(jChildren, rowHeight);
		var currentWidth = 0;
		$(jChildren).each( function(){ currentWidth += $(this).width(); });
		if(currentWidth > galleryWidth){
			rowHeight = resizeToWidth(jChildren, galleryWidth, margin);
		}
		return rowHeight;
	}

	function resizeToSameHeight(jChildren, childHeight){
		for (var i = 0; i < jChildren.length; i++){
			var factor =  childHeight / jChildren[i].height();
			var x = jChildren[i].width();
			jChildren[i].width(jChildren[i].width() * factor);
		};
		return jChildren[0].height(); //Returning height of the current row
	}

	function resizeToWidth(jChildren, rowWidth, margin){
		var currentWidth = 0;
		$(jChildren).each( function(){ currentWidth += $(this).width(); });
		//adding 4px to the margin to let the gallery float smooth
		var factor = (rowWidth - (jChildren.length * (margin + 4) * 2)) / currentWidth;
		for (var i = 0; i < jChildren.length; i++){
			jChildren[i].css('width',  jChildren[i].width() * factor);
		};
		return jChildren[0].height();
	}

	function getScreenSettings(galleryWidth, mode){
		var ret = {
			itemsPerRow : undefined,
			maxHeight   : undefined
		};

		//Default MAX HEIGHT for mobile
		if(galleryWidth <= 768){
			ret.maxHeight = screen.height;
		}

		if(mode == "bootstrap"){ // ------- bootstrap mode -------
			if(galleryWidth > 1200){
				ret.itemsPerRow = 4;
			}else if(galleryWidth > 992){
				ret.itemsPerRow = 3;
			}else if(galleryWidth > 768){
				ret.itemsPerRow = 2;
			}else {
				ret.itemsPerRow = 0.4;
			}
			//MAX HEIGHT
			if(galleryWidth > 768){
				ret.maxHeight = screen.height * 0.5;
			}
		}else if(mode == "flickr"){ // ------- flickr mode -------
			if(galleryWidth > 1800){
				ret.itemsPerRow = 4;
			}else if(galleryWidth > 1300){
				ret.itemsPerRow = 3;
			}else if(galleryWidth > 610){
				ret.itemsPerRow = 2;
			}else {
				ret.itemsPerRow = 1;
			}
			//MAX HEIGHT
			if(galleryWidth > 768){
				ret.maxHeight = screen.height * 0.4;
			}
		}else if(mode == "small"){ // ------- small mode -------
			if(galleryWidth > 1800){
				ret.itemsPerRow = 14;
			}else if(galleryWidth > 1300){
				ret.itemsPerRow = 10;
			}else if(galleryWidth > 610){
				ret.itemsPerRow = 6;
			}else {
				ret.itemsPerRow = 4;
			}
			//MAX HEIGHT
			if(galleryWidth > 768){
				ret.maxHeight = screen.height * 0.4;
			}
		}else{                           // ------- default mode -------
			if(galleryWidth > 1800){
				ret.itemsPerRow = 4;
			}else if(galleryWidth > 1200){
				ret.itemsPerRow = 3;
			}else if(galleryWidth > 768){
				ret.itemsPerRow = 2;
			}else {
				ret.itemsPerRow = 1;
			}
			//MAX HEIGHT
			if(galleryWidth > 768){
				ret.maxHeight = screen.height * 0.6;
			}
		}
		return ret;
	}

}( jQuery ));