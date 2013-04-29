
/* Controllers */

app.controller("appCtrl", function($scope, itemService, playerService){
	$scope.items = itemService.data();
	$scope.player = playerService.data();

	playerService.setGDH(itemService.getGDH());

	var countdown = function(){
		if($scope.player.time > 0){
			$scope.player.time -= 1;

			var date = new Date(null);
			date.setSeconds($scope.player.time);
			$scope.player.timestring = date.toTimeString().substr(3, 5);
			$scope.$apply();
			
			var timer = setTimeout(countdown, 1000);
		}
		else{
			console.log($scope.player.time);
			if($scope.player.money >= 800){
				if($scope.player.gdh > 75){
					window.location="index.html#/winhigh"; //what a hack. do this in angular.
				}
				else{
					window.location="index.html#/win";
				}
					
			}
			else{
				
					window.location="index.html#/lose";
				
			}
		}

	};
	countdown();
});

app.controller("houseCtrl", function($scope, itemService, playerService){
	$scope.items = itemService.data();
	$scope.player = playerService.data();

	playerService.setGDH(itemService.getGDH());

	$scope.items.pickItem = function(item){
		console.log("picking");
		itemService.pickItem(item);
	}

});

app.controller("listCtrl", function($scope, itemService, playerService){
	$scope.items = itemService.data();
	$scope.player = playerService.data();

	playerService.setGDH(itemService.getGDH());

	$scope.items.placeItem = function(item){
		console.log("placing");
		itemService.placeItem(item);
		playerService.setGDH(itemService.getGDH());
	}

	$scope.items.sellItem = function(item){
		console.log("selling");
		itemService.sellItem(item);
		playerService.addMoney(item.sellprice);
		playerService.setGDH(itemService.getGDH());

	};

	$scope.items.buyItem = function(item){
		if(item.sellprice < $scope.player.money){
			console.log("buying");
			itemService.buyItem(item);
			playerService.addMoney(-1*item.sellprice);
			playerService.setGDH(itemService.getGDH());
		}
		else{
			console.log("not enough cash");
		}
		
	};

	$scope.items.getPoly = function(item){
		console.log("retrieving poly");
		return item.points;
		
	};

	function getNewPrices(){
		angular.forEach($scope.items.forsale, function(d,i){
			d.sellprice = (d.maxbuy*Math.random() + d.maxbuy/4).toFixed(2);
		});
		angular.forEach($scope.items.forbuy, function(d,i){
			d.sellprice = (d.maxbuy*Math.random() + d.maxbuy/4).toFixed(2);
		});
		playerService.gdh = itemService.getGDH();
		var timer = setTimeout(getNewPrices, 5000);
	}
	getNewPrices();
	
});

app.controller("startCtrl", function($scope){
	
});