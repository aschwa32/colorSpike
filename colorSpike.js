var colorMap;
function randomColor(){
	var fcolor = randomColorPart() + randomColorPart() +randomColorPart();
	return fcolor;
}

function randomColorPart(){
	var colornum = Math.floor(Math.random()*256);
	var rcolor = colornum.toString(16);
	if(rcolor==null){
		return '00';
	}else if(rcolor.length==1){
		return '0'+rcolor;
	}else{
		return rcolor;	
	}
}

function updateColorMap(colorIndex){

	var tmpColor;
	var colorFound = false;
	while(!colorFound){
		var colorMatch = false;
		tmpColor = randomColor();
		if(tmpColor=='ffffff'){
			colorMatch = true;
		}else{
			for(var key in colorMap){
				if(tmpColor==colorMap[key]){
					colorMatch = true;
				}
			}
		}
		if(!colorMatch){
			colorFound = true;
		}
	}
	colorMap[colorIndex] = tmpColor;
}

function spikeColors(oldColors){
	if(!oldColors){
		colorMap = new Object();
	}
	var spikes = $('.spike');
	spikes.each(function(){
		var classes = $(this).attr('class').split(' ');
		var element = this;
		$.each(classes, function(){
			var fIndex = this.lastIndexOf('spike-');
			var lIndex = this.lastIndexOf('-scolor-');
			if(fIndex!=-1){
				var attrIndex = 'spike-'.length + fIndex;
				var attributeList = this.substring(attrIndex,lIndex);
				
				var propIndex = attributeList.lastIndexOf('-prop-');
				var properties;
				if(propIndex!=-1){
					attribute = attributeList.substring(0,propIndex);
					properties = attributeList.substring(propIndex+'prop-'.length).split('-');
				}else{
					attribute = attributeList;
				}

				var colorIndex = this.substring(lIndex + '-scolor-'.length);
				if(colorMap[colorIndex]==null){
					updateColorMap(colorIndex);
				}

				var attributeString;
				if(propIndex!=-1){
					attributeString = properties.join(' ');
					attributeString += '#'+colorMap[colorIndex];
				}else{
					attributeString = '#'+colorMap[colorIndex];
				}
				
				$(element).css(attribute, attributeString);
			}
		});
	});
}
