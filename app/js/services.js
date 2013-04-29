/* Services */

app.factory("itemService", function(){
	var data = {

		house : [
			{
				name : "Desk",
				gdh : 9,
				position : {"x":150,"y":160},
				maxbuy : 60,
				description : "A typical particle board desk, used for desktop computers. This one has seen better days.",
				color : "red",
				points: [{x:16,y:32},{x:112,y:32},{x:128,y:64},{x:128,y:80},{x:112,y:80},{x:112,y:128},{x:96,y:128},{x:96,y:80},{x:32,y:80},{x:32,y:128},{x:16,y:128},{x:16,y:80},{x:0,y:80},{x:0,y:64}]
			},
			{
				name : "Table",
				gdh : 8,
				position : {"x":650,"y":280},
				maxbuy : 80,
				description : "You've owned this meager table since college. It's held up well.",
				color: "green",
				points: [{x:32,y:32},{x:96,y:32},{x:128,y:64},{x:128,y:128},{x:112,y:128},{x:112,y:80},{x:16,y:80},{x:16,y:128},{x:0,y:128},{x:0,y:64}]
			},
			{
				name : "Lamp",
				gdh : 3,
				position : {"x":170,"y":150},
				maxbuy : 10,
				description : "Groovy lava lamp",
				color : "orange",
				points: [{x:20,y:0},{x:28,y:0},{x:40,y:48},{x:32,y:64},{x:16,y:64},{x:8,y:48}]
			},
			{
				name : "Blender",
				gdh : 2,
				position : {"x":710,"y":250},
				maxbuy : 30,
				description : "For your pina coladas.",
				color : "cyan",
				points: [{x:0,y:0},{x:48,y:0},{x:44,y:16},{x:56,y:20},{x:56,y:48},{x:40,y:48},{x:32,y:64},{x:40,y:80},{x:8,y:80},{x:16,y:64},{x:8,y:48}]
			},
			{
				name : "Desk Fountain",
				gdh : 1,
				position : {"x": 220,"y": 150},
				maxbuy : 50,
				description : "Cord reaches over 6 feet!",
				color : "gray",
				points: [{x:20,y:0},{x:28,y:0},{x:28,y:16},{x:36,y:16},{x:32,y:24},{x:32,y:32},{x:48,y:32},{x:32,y:48},{x:16,y:48},{x:0,y:32},{x:16,y:32},{x:16,y:24},{x:12,y:16},{x:20,y:16}]
			},
			{
				name : "Toaster",
				gdh : 3,
				position : {"x": 780,"y":220},
				maxbuy : 18,
				description : "Brave, little.",
				color : "black",
				points: [{x:0,y:8},{x:8,y:0},{x:40,y:0},{x:48,y:8},{x:48,y:40},{x:40,y:40},{x:40,y:44},{x:32,y:44},{x:32,y:40},{x:16,y:40},{x:16,y:44},{x:8,y:44},{x:8,y:40},{x:0,y:40}]
			},
			{
				name : "Novelty Mug",
				gdh : 3,
				position : {"x": 710,"y":310},
				maxbuy : 10,
				description : "The graphic on the side reads: 'Wichita Falls Fun Run 1998.'",
				color : "pink",
				points: [{x:0,y:0},{x:24,y:0},{x:24,y:8},{x:32,y:12},{x:32,y:20},{x:24,y:24},{x:24,y:20},{x:28,y:18},{x:28,y:14},{x:24,y:12},{x:24,y:32},{x:0,y:32}]
			},
			{
				name : "Clock",
				gdh : 5,
				position : {"x": 200,"y":100},
				maxbuy : 35,
				description : "Atomic, with an analog display.",
				color : "olive",
				points: [{x:24,y:0},{x:40,y:8},{x:48,y:24},{x:40,y:40},{x:24,y:48},{x:24,y:24},{x:40,y:8},{x:24,y:20},{x:24,y:24},{x:20,y:32},{x:24,y:48},{x:8,y:40},{x:0,y:24},{x:8,y:8}]
			},
			{
				name : "Curtains",
				gdh : 1,
				position : {"x": 350,"y":120},
				maxbuy : 18,
				description : "Either these go, or you do.",
				color : "orange",
				points: [{x:0,y:0},{x:96,y:0},{x:96,y:96},{x:80,y:96},{x:96,y:80},{x:64,y:48},{x:48,y:0},{x:32,y:48},{x:0,y:80},{x:16,y:96},{x:0,y:96}]
			},
			{
				name : "Boombox",
				gdh : 5,
				position : {"x": 390,"y":230},
				maxbuy : 30,
				description : "The CD player needs a little tape, and it's short a D-battery.",
				color : "mediumpurple",
				points: [{x:16,y:0},{x:80,y:0},{x:80,y:16},{x:96,y:16},{x:96,y:64},{x:0,y:64},{x:0,y:16},{x:72,y:16},{x:72,y:8},{x:24,y:8},{x:24,y:16},{x:16,y:16}]
			},
			{
				name : "VCR",
				gdh : 2,
				position : {"x": 20,"y":400},
				maxbuy : 10,
				description : "Rescued on your last visit to your parents' house. The tape inside is 'Homeward Bound.'",
				color : "darkslategray",
				points: [{x:0,y:0},{x:96,y:0},{x:96,y:32},{x:0,y:32}]
			},
			{
				name : "'CA$H M0NEY' Hoodie",
				gdh : 6,
				position : {"x": 440,"y":310},
				maxbuy : 35,
				description : "SWAG SWAG SWAG SWAG",
				color : "navy",
				points: [{x:64,y:0},{x:88,y:16},{x:80,y:32},{x:96,y:32},{x:128,y:80},{x:112,y:96},{x:96,y:80},{x:96,y:128},{x:32,y:128},{x:32,y:80},{x:16,y:96},{x:0,y:80},{x:32,y:32},{x:48,y:32},{x:40,y:16},]
			},
			{
				name : "Rug",
				gdh : 2,
				position : {"x": 650,"y":400},
				maxbuy : 25,
				description : "IKEA is the only place people buy rugs these days.",
				color : "darkred",
				points: [{x:0,y:48},{x:32,y:0},{x:96,y:0},{x:128,y:48}]
			},
			{
				name : "Cartoon Character Comforter",
				gdh : 2,
				position : {"x": 350,"y":360},
				maxbuy : 18,
				description : "Another part of your childhood rescued from your parents. Still sleeps like it's 1993.",
				color : "pink",
				points: [{x:0,y:96},{x:32,y:0},{x:96,y:0},{x:80,y:16},{x:48,y:8},{x:32,y:32},{x:64,y:40},{x:80,y:16},{x:96,y:0},{x:128,y:96},{x:128,y:112},{x:0,y:112}]
			},
			{
				name : "Mirror",
				gdh : 1,
				position : {"x": 700,"y":140},
				maxbuy : 5,
				description : "Only makes it look like you have twice as much clutter.",
				color : "lightgray",
				points: [{x:0,y:0},{x:48,y:0},{x:48,y:64},{x:0,y:64},{x:0,y:48},{x:44,y:4},{x:28,y:4},{x:0,y:32}]
			},
			{
				name : "Garbage Bin",
				gdh : 6,
				position : {"x": 50,"y":180},
				maxbuy : 7,
				description : "Molded off-white plastic, reasonably clean.",
				color : "darkslategray",
				points: [{x:16,y:0},{x:80,y:0},{x:80,y:16},{x:96,y:16},{x:88,y:128},{x:8,y:128},{x:0,y:16},{x:72,y:16},{x:72,y:8},{x:24,y:8},{x:24,y:16},{x:16,y:16}]
			},
			{
				name : "22-inch CRT Television",
				gdh : 2,
				position : {"x": 20,"y":290},
				maxbuy : 15,
				description : "Works just fine. Comes with digital adapter.",
				color : "black",
				points: [{x:0,y:32},{x:48,y:32},{x:0,y:0},{x:4,y:0},{x:48,y:32},{x:92,y:0},{x:96,y:0},{x:48,y:32},{x:96,y:32},{x:96,y:104},{x:0,y:104}]
			},
			{
				name : "DVD Collection",
				gdh : 3,
				position : {"x": 60,"y":410},
				maxbuy : 55,
				description : "15 discs. Contains gems like 'Year of the Dog' and 'The Prince and Me.'",
				color : "gray",
				points: [{x:0,y:16},{x:32,y:0},{x:80,y:0},{x:80,y:16},{x:96,y:16},{x:96,y:32},{x:80,y:40},{x:80,y:48},{x:48,y:64},{x:0,y:64},{x:0,y:48},{x:16,y:40},{x:16,y:32},{x:0,y:32}]
			},
			{
				name : "Paper Lamp",
				gdh : 2,
				position : {"x": 840,"y":340},
				maxbuy : 20,
				description : "The whole exterior is paper, and there's a slight rip at the bottom.",
				color : "ivory",
				points: [{x:16,y:0},{x:32,y:0},{x:48,y:96},{x:32,y:128},{x:16,y:128},{x:24,y:112},{x:16,y:96},{x:16,y:128},{x:0,y:96}]
			},
			{
				name : "Doormat",
				gdh : 1,
				position : {"x": 568,"y":255},
				maxbuy : 20,
				description : "It reads: ǝɯoɔןǝʍ",
				color : "red",
				points: [{x:0,y:48},{x:32,y:0},{x:96,y:0},{x:128,y:48}]
			},
			{
				name : "Coffee Maker",
				gdh : 5,
				position : {"x": 130,"y":280},
				maxbuy : 25,
				description : "A little clogged from a yerba mate experiment.",
				color : "black",
				points: [{x:16,y:0},{x:64,y:0},{x:64,y:64},{x:16,y:64},{x:16,y:48},{x:32,y:40},{x:16,y:40},{x:16,y:28},{x:8,y:28},{x:8,y:48},{x:0,y:48},{x:0,y:20},{x:16,y:20}]
			},
			{
				name : "Clothes Steamer",
				gdh : 1,
				position : {"x": 440,"y":300},
				maxbuy : 35,
				description : "From your 'post-ironing' phase.",
				color : "lightblue",
				points: [{x:0,y:0},{x:32,y:0},{x:20,y:32},{x:20,y:48},{x:12,y:48},{x:12,y:32}]
			},
			{
				name : "Cat Poster",
				gdh : 5,
				position : {"x": 20,"y":80},
				maxbuy : 25,
				description : "HANG IN THERE!",
				color: "hotpink",
				points: [{x:32,y:24},{x:0,y:0},{x:0,y:128},{x:32,y:96}]
			},
			{
				name : "Microwave",
				gdh : 4,
				position : {"x": 310,"y":230},
				maxbuy : 20,
				description : "Comes with a few AOL CDs for fun.",
				color : "beige",
				points: [{x:0,y:0},{x:64,y:0},{x:64,y:48},{x:0,y:48}]
			},
			{
				name : "Banana Stand",
				gdh : 1,
				position : {"x": 250,"y":280},
				maxbuy : 45,
				description : "You always knew there would be money in this.",
				color : "yellow",
				points: [{x:0,y:0},{x:16,y:16},{x:32,y:16},{x:16,y:24},{x:24,y:32},{x:8,y:32},{x:16,y:24}]
			},
			{
				name : "Toed Shoes",
				gdh : 3,
				position : {"x": 550,"y":260},
				maxbuy : 55,
				description : "AKA foot gloves. ",
				color : "aquamarine",
				points: [{x:16,y:0},{x:32,y:8},{x:24,y:16},{x:8,y:8},{x:16,y:24},{x:8,y:32},{x:0,y:16},{x:8,y:8}]

			},
			{
				name : "Yoga Mat",
				gdh : 2,
				position : {"x": 320,"y":460},
				maxbuy : 18,
				description : "Hardly used. Spends most of its time in shavasana.",
				color : "teal",
				points: [{x:0,y:0},{x:64,y:0},{x:64,y:16},{x:0,y:16}]
			},
			{
				name : "Ukulele",
				gdh : 2,
				position : {"x": 800,"y":270},
				maxbuy : 25,
				description : "Has yet to star in any Youtube videos, but who knows?",
				color : "rosybrown",
				points: [{x:16,y:0},{x:32,y:0},{x:32,y:48},{x:40,y:48},{x:40,y:96},{x:8,y:96},{x:8,y:48},{x:16,y:48},]
			},
			{
				name : "Deodorant",
				gdh : 10,
				position : {"x": 470,"y":450},
				maxbuy : 18,
				description : "Are you sure you want to sell this?",
				color : "darkpurple",
				points: [{x:0,y:0},{x:16,y:0},{x:16,y:32},{x:0,y:32}]
			}
			
		],
		forsale : [],

		forbuy: [
				{name : "French Press",
				gdh : 25,
				position : {"x": 285,"y":235},
				maxbuy : 15,
				description : "For the discerning coffee drinker.",
				color : "black",
				points: [{x:0,y:0},{x:16,y:0},{x:16,y:48},{x:0,y:48}]
			},
			{
				name : "Bonsai Potato",
				gdh : 27,
				position : {"x": 680,"y":370},
				maxbuy : 35,
				description : "The perfect balance of wabi-sabi and deliciousness. Made in Latvia.",
				color : "navajowhite",
				points: [{x:0,y:16},{x:32,y:0},{x:64,y:16},{x:64,y:32},{x:32,y:48},{x:0,y:32},]
			},
			{
				name : "Painting",
				gdh : 14,
				position : {"x": 480,"y":100},
				maxbuy : 65,
				description : "Large and bold, it gives off an authoritarian presence.",
				color : "sienna",
				points: [{x:0,y:0},{x:96,y:0},{x:96,y:128},{x:0,y:128}]
			},
			{
				name : "Stereo",
				gdh : 10,
				position : {"x": 200,"y":420},
				maxbuy : 35,
				description : "MP3-ready!",
				color : "black",
				points: [{x:0,y:0},{x:96,y:0},{x:96,y:48},{x:0,y:48}]
			},
			{
				name : "Vase with flowers",
				gdh : 15,
				position : {"x": 670,"y":280},
				maxbuy : 25,
				description : "A gray ceramic cylinder. The flowers are lilies.",
				color : "gray",
				points: [{x:0,y:0},{x:32,y:0},{x:28,y:48},{x:4,y:48}]
			},
			{
				name : "Electric Kettle",
				gdh : 10,
				position : {"x": 230,"y":190},
				maxbuy : 12,
				description : "No simpler European object!",
				color : "lightgray",
				points: [{x:8,y:8},{x:16,y:0},{x:24,y:8},{x:32,y:8},{x:24,y:16},{x:32,y:32},{x:0,y:32}]
			},
			{
				name : "Raw Denim Jeans",
				gdh : 13,
				position : {"x": 500,"y":350},
				maxbuy : 25,
				description : "Never washed. Never.",
				color : "steelblue",
				points: [{x:32,y:0},{x:96,y:0},{x:112,y:112},{x:80,y:120},{x:64,y:48},{x:48,y:120},{x:16,y:112}]
			},
			{
				name : "'Living Minimally' Book",
				gdh : 2,
				position : {"x": 330,"y":410},
				maxbuy : 10,
				description : "A best-seller on how to reduce the number of items in your life.",
				color : "green",
				points: [{x:32,y:0},{x:80,y:0},{x:48,y:24},{x:0,y:24}]
			},
			{
				name : "Niven Vacuum Cleaner",
				gdh : 12,
				position : {"x": 790,"y":390},
				maxbuy : 20,
				description : "With ring-shaped cleaning attachment. Powerful, but a little unstable.",
				color : "gray",
				points: [{x:0,y:0},{x:16,y:0},{x:32,y:16},{x:32,y:80},{x:64,y:96},{x:0,y:96},{x:16,y:80},{x:0,y:48},{x:16,y:16}]
			},
			{
				name : "Floor Lamp",
				gdh : 20,
				position : {"x": 310,"y":320},
				maxbuy : 80,
				description : "Uses LEDs and the structure is mostly recycled metal.",
				color : "gray",
				points: [{x:0,y:0},{x:96,y:0},{x:112,y:16},{x:80,y:16},{x:96,y:0},{x:0,y:16},{x:16,y:96},{x:0,y:96},]
			},
			{
				name : "Wall Tapestry",
				gdh : 5,
				position : {"x": 840,"y":60},
				maxbuy : 15,
				description : "Tie-dyed, with a Celtic knot silkscreened on top. Smells like an REI.",
				color : "green",
				points: [{x:48,y:0},{x:0,y:32},{x:0,y:128},{x:48,y:160}]
			}
		]
	};

	return{

		data : function(){return data;},

		//pick out of house
		pickItem : function(item){
			data.forsale.push(item);
			for(var i=0; i < data.house.length; i++){
				if(data.house[i].name == item.name){
					data.house.splice(i,1);
					console.log("you put " + item.name + " up for sale.");
				}
			}
		},

		//place in house
		placeItem : function(item){
			data.house.push(item);
			for(var i=0; i < data.forsale.length; i++){
				if(data.forsale[i].name == item.name){
					data.forsale.splice(i,1);
					console.log("you added " + item.name + " to your house.");
				}
			}
		},

		sellItem : function(item){
			for(var i=0; i < data.forsale.length; i++){
				if(data.forsale[i].name == item.name){
					data.forsale.splice(i,1);
					console.log("sold " + item.name);
				}
			}
		},

		buyItem : function(item){
			data.house.push(item);
			for(var i=0; i < data.forbuy.length; i++){
				if(data.forbuy[i].name == item.name){
					data.forbuy.splice(i,1);
					console.log("bought a " + item.name);
				}
			}
		},

		getGDH : function(){
			var sum = 0;
			for(var i=0; i<data.house.length; i++){
				sum += data.house[i].gdh;
			}
			for(var j=0; j<data.forsale.length; j++){
				sum += data.forsale[j].gdh;
			}
			console.log("GDH: " + sum);
			return sum;
		}

	}; //return
});

app.factory("playerService", function(){
	var data = {
		time : 480,
		money : 0,
		gdh : 0
	};

	return{
		data : function(){return data;},

		addMoney : function(amount){
			data.money += parseFloat(amount);
		},

		setGDH : function(amount){
			data.gdh = .5*amount + 50*(data.money/800);
		}
	}
})