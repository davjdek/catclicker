$(function(){
	var model={
		cat1: {
			name: "Fuffy",
			clicks: 0,
			img: "img/cat.png"
		},
		
		cat2: {
			name: "Tigre",
			clicks: 0,
			img: "img/cat2.png"
		}		
	}

	var octopus={
		cats: [model.cat1,model.cat2],
		currentCat: {},	
		
		init: function(){
			$(".buttons").on("click","button",function(){
			var current=$(this).attr('id');
			octopus.currentCat=octopus.cats[current];
			imgView.render();
			});
			buttonsView.render()},
		
		updateClicks: function(){
			$(".image img").click(function(){
				octopus.currentCat.clicks+=1;
				$(".image div:last-child").text(octopus.currentCat.clicks);
				
			});
		}	
	}



	var buttonsView={
		render: function(){
			octopus.cats.forEach(function(cat, index, arr){
				var button = $('<button id=\"' +index+ '\">'+cat.name+'</button>');
				$(".buttons").append(button);
			});
		}
		
	}

	var imgView={
		render: function(){
			var current = $('<img src="'+octopus.currentCat.img+'" />');
			$(".image").empty();
			$(".image").append(current);
			$(".image").append("<div>"+octopus.currentCat.name+" # of clicks: </div>");
			$(".image").append("<div>"+octopus.currentCat.clicks+"</div>");
			octopus.updateClicks();
		}
	}

	octopus.init();
})