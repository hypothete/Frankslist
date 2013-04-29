/* Directives */

app.directive("housevisuals", function(){

	return {
		restrict: "E",
		scope: {items: "=", player: "="},
		link: function(scope, element, attrs){
			createSVG(scope, element, 900, 480);
			scope.$watch("items", drawHouse, true);
		},
	}
})

var createSVG = function(scope, element, width, height){
	scope.w = width;
	scope.h = height;
	if (!(scope.svg != null)) {
		return scope.svg = d3.select(element[0])
		.append("svg")
		.attr("width", scope.w)
		.attr("height", scope.h);
	}
}

var drawHouse = function(newVal, oldVal, scope){
	//http://briantford.com/blog/angular-d3.html
	//http://1000monkeys.co/2012/12/30/using-d3-with-angular.html
	scope.svg.selectAll("*").remove();

	if(!newVal){return;}

	if(scope.items.house){

		//make some walls
		var walls = [
			{points:[{x:900,y:0},{x:836,y:64},{x:836,y:255},{x:900,y:480}],
			color: "rgb(229,229,229)"}, //right
			{points:[{x:0,y:0},{x:64,y:64},{x:64,y:255},{x:0,y:480}],
			color: "rgb(229,229,229)"}, //left
			{points:[{x:0,y:0},{x:64,y:64},{x:836,y:64},{x:900,y:0}],
			color: "rgb(245,245,245)"}, //ceiling
			{points:[{x:64,y:255},{x:836,y:255},{x:900,y:480},{x:0,y:480}],
			color: "rgb(209,195,165)"}, //floor
			{points:[{x:64,y:64},{x:64,y:255},{x:836,y:255},{x:836,y:64}],
			color: "rgb(255,255,255)"},
					];
		scope.svg.selectAll("polygon")
		.data(walls)
		.enter()
		.append("polygon")
		.attr("points", function(d){
			return d.points.map(function(e){
				return [e.x, e.y].join(",");
			})
			.join(" ");
		})
		.attr("fill", function(d){return d.color;});

		var door = scope.svg.append("rect")
		.attr("x",600)
		.attr("y",128)
		.attr("width",64)
		.attr("height",126)
		.attr("stroke-width", 2)
		.attr("stroke", "rgb(229,229,229)")
		.attr("fill", "none");

		var doorknob = scope.svg.append("circle")
		.attr("cx", 648)
		.attr("cy", 208)
		.attr("r", 4)
		.attr("stroke-width", 2)
		.attr("stroke", "rgb(229,229,229)")
		.attr("fill", "none");


		var objects = scope.svg.selectAll("g")
		.data(scope.items.house)
		.enter()
		.append("g")
		.attr("transform", function(d){return "translate("+d.position.x+","+d.position.y+")";});
		
		var shapes = objects.filter(function(d){ return d.points; })
		.append("polygon")
		.attr("points", function(d){
			return d.points.map(function(e){
				return [e.x, e.y].join(",");
			})
			.join(" ");
		})
		.attr("fill", function(d){
			return d.color;
		})
		.on("mouseover", function(){
			d3.select(this.parentNode)
			.append("text")
			.text(function(d){return d.name})
			.attr("text-anchor", "start")
			.attr("y", -20);
		})
		.on("mouseout", function(d){
			d3.select(this.parentNode).selectAll("text").remove();
		})
		.on("click", function(d){
			scope.items.pickItem(d);
			d3.select(this.parentNode).remove(); //haaaacky
		})

	}
}






