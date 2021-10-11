let restaurant_A = {
	name: "Aragorn's Orc BBQ", //The name of the restaurant
	min_order: 20, //The minimum order amount required to place an order
	delivery_charge: 5, //The delivery charge for this restaurant
	//The menu
	menu: {
		//First category
		"Appetizers": {
			//First item of this category
			0: {
				name: "Orc feet",
				description: "Seasoned and grilled over an open flame.", //
				price: 5.50
			},
			1: {
				name: "Pickled Orc fingers",
				description: "Served with warm bread, 5 per order.",
				price: 4.00
			},
			2: { //Thank you Kiratchii
				name: "Sauron's Lava Soup",
				description: "It's just really spicy water.",
				price: 7.50
			},
			3: {
				name: "Eowyn's (In)Famous Stew",
				description: "Bet you can't eat it all.",
				price: 0.50
			},
			4: {
				name: "The 9 rings of men.",
				description: "The finest of onion rings served with 9 different dipping sauces.",
				price: 14.50
			}
		},
		"Combos": {
			5: {
				name: "Buying the Farm",
				description: "An arm and a leg, a side of cheek meat, and a buttered biscuit.",
				price: 15.99
			},
			6: {
				name: "The Black Gate Box",
				description: "Lots of unidentified pieces. Serves 50.",
				price: 65.00
			},
			7: {//Thanks to M_Sabeyon
				name: "Mount Doom Roast Special with Side of Precious Onion Rings.",
				description: "Smeagol's favorite.",
				price: 15.75
			},
			8: { //Thanks Shar[TA]
				name: "Morgoth's Scorched Burgers with Chips",
				description: "Blackened beyond recognition.",
				price: 13.33
				
			},
			10: {
				name: "Slab of Lurtz Meat with Greens.",
				description: "Get it while supplies last.",
				price: 17.50
			},
			11: {
				name: "Rangers Field Feast.",
				description: "Is it chicken? Is it rabbit? Or...",
				price: 5.99
			}
		},
		"Drinks": {
			12: {
				name: "Orc's Blood Mead",
				description: "It's actually raspberries - Orc's blood would be gross.",
				price: 5.99
			},
			13: {
				name: "Gondorian Grenache",
				description: "A fine rose wine.",
				price: 7.99
			},
			14: {
				name: "Mordor Mourvedre",
				description: "A less-fine rose wine.",
				price: 5.99
			}
		}	
	}
};

let restaurant_B = {
	name: "Lembas by Legolas",
	min_order: 15,
	delivery_charge: 3.99,
	menu: {
		"Lembas": {
			0: {
				name: "Single",
				description: "One piece of lembas.",
				price: 3
			},
			1: {
				name: "Double",
				description: "Two pieces of lembas.",
				price: 5.50
			},
			2: { 
				name: "Triple",
				description: "Three pieces, which should be more than enough.",
				price: 8.00
			}
		},
		"Combos": {
			3: {
				name: "Second Breakfast",
				description: "Two pieces of lembas with honey.",
				price: 7.50
			},
			4: {
				name: "There and Back Again",
				description: "All you need for a long journey - 6 pieces of lembas, salted pork, and a flagon of wine.",
				price: 25.99
			},
			5: {
				name: "Best Friends Forever",
				description: "Lembas and a heavy stout.",
				price: 6.60
			}
		}
	}
};

let restaurant_C = {
	name: "Frodo's Flapjacks",
	min_order: 35,
	delivery_charge: 6,
	menu: {
		"Breakfast": {
			0: {
				name: "Hobbit Hash",
				description: "Five flapjacks, potatoes, leeks, garlic, cheese.",
				price: 9.00
			},
			1: {
				name: "The Full Flapjack Breakfast",
				description: "Eight flapjacks, two sausages, 3 eggs, 4 slices of bacon, beans, and a coffee.",
				price: 14.00
			},
			2: { 
				name: "Southfarthing Slammer",
				description: "15 flapjacks and 2 pints of syrup.",
				price: 12.00
			}
			
		},
		"Second Breakfast": {
			3: {
				name: "Beorning Breakfast",
				description: "6 flapjacks smothers in honey.",
				price: 7.50
			},
			4: {
				name: "Shire Strawberry Special",
				description: "6 flapjacks and a hearty serving of strawberry jam.",
				price: 8
			},
			5: {
				name: "Buckland Blackberry Breakfast",
				description: "6 flapjacks covered in fresh blackberries. Served with a large side of sausage.",
				price: 14.99
			}
		},
		"Elevenses": {
			6: {
				name: "Lembas",
				description: "Three pieces of traditional Elvish Waybread",
				price: 7.70
			},
			7: {
				name: "Muffins of the Marish",
				description: "A variety of 8 different types of muffins, served with tea.",
				price: 9.00
			},
			8: {
				name: "Hasty Hobbit Hash",
				description: "Potatoes with onions and cheese. Served with coffee.",
				price: 5.00
			}
		},
		"Luncheon": {
			9: {
				name: "Shepherd's Pie",
				description: "A classic. Includes 3 pies.",
				price: 15.99
			},
			10: {
				name: "Roast Pork",
				description: "An entire pig slow-roasted over a fire.",
				price: 27.99
			},
			11: {
				name: "Fish and Chips",
				description: "Fish - fried. Chips - nice and crispy.",
				price: 5.99
			}
		},
		"Afternoon Tea": {
			12: {
				name: "Tea",
				description: "Served with sugar and cream.",
				price: 3
			},
			13: {
				name: "Coffee",
				description: "Served with sugar and cream.",
				price: 3.50
			},
			14: {
				name: "Cookies and Cream",
				description: "A dozen cookies served with a vat of cream.",
				price: 15.99
			},
			15: {
				name: "Mixed Berry Pie",
				description: "Fresh baked daily.",
				price: 7.00
			}
		},
		"Dinner": {
			16: {
				name: "Po-ta-to Platter",
				description: "Boiled. Mashed. Stuck in a stew.",
				price: 6
			},
			17: {
				name: "Bree and Apple",
				description: "One wheel of brie with slices of apple.",
				price: 7.99
			},
			18: {
				name: "Maggot's Mushroom Mashup",
				description: "It sounds disgusting, but its pretty good",
				price: 6.50
			},
			19: {
				name: "Fresh Baked Bread",
				description: "A whole loaf of the finest bread the Shire has to offer.",
				price: 6
			},
			20: {
				name: "Pint of Ale",
				description: "Yes, it comes in pints.",
				price: 5
			}
		},
		"Supper": {
			21: {
				name: "Sausage Sandwich",
				description: "Six whole sausages served on a loaf of bread. Covered in onions, mushrooms and gravy.",
				price: 15.99
			},
			22: {
				name: "Shire Supper",
				description: "End the day as you started it, with a dozen flapjacks, 5 eggs, 3 sausages, 7 pieces of bacon, and a pint of ale.",
				price: 37.99
			}
		}
	}
};

let restaurants = [restaurant_A, restaurant_B, restaurant_C];

var orderItems = []
var currentIndex = 0;

restaurants.forEach((restaurant, index) => {
	let dropDown = document.getElementById("restaurantsDropDown");
	let option = document.createElement("option");

	option.text = restaurant.name;
	option.value = index;
	dropDown.add(option);

})

const updateSummary = () => {

	//Clear the old summary first
	var summaryList = document.getElementById("summaryListId");
	summaryList.innerHTML = "";
	document.getElementById("summaryColumn").innerHTML = "";

	var summarySubtotal = 0.0;
	var summaryDeliveryFee = 0.0;
	var summaryTax = 0.0;
	var summaryOrderTotal = 0.0;

	//Add Item
	orderItems.forEach((item) => {
		var summaryListItemDiv = document.createElement("div");
		var summaryListItem = document.createElement("li");
		var summaryListItemObj = document.createTextNode("Name: " + item.name + ", Price: "+ item.price.toFixed(2) + ", Description: " + item.description);
		
		var removeItemImg = document.createElement("img");

		removeItemImg.src = "remove.png"
		removeItemImg.onclick = () => {
			removeItem(item);
		}
		summaryListItemDiv.className = "menuListItemDiv";

		summaryListItem.appendChild(summaryListItemObj);
		summaryListItemDiv.append(summaryListItem);
		summaryListItemDiv.append(removeItemImg);
		summaryList.appendChild(summaryListItemDiv);
		
		summarySubtotal = +item.price.toFixed(2) + +summarySubtotal; 
	})

	//Do Subtotal Etc
	if (currentIndex != -1){
		var summarySubtotalElement = document.getElementById("summarySubtotalId");
		var summaryDeliveryFeeElement = document.getElementById("summaryDeliveryFeeId");
		var summaryTaxElement = document.getElementById("summaryTaxId");
		var summaryOrderTotalElement = document.getElementById("summaryOrderTotalId");

		summaryDeliveryFee = restaurants[currentIndex].delivery_charge;
		summaryTax = 0.1 * summarySubtotal;
		summaryOrderTotal = summarySubtotal + summaryTax + summaryDeliveryFee;

		summarySubtotalElement.innerText = "Subtotal: " + summarySubtotal.toFixed(2);
		summaryDeliveryFeeElement.innerText = "Delivery Fee: " + summaryDeliveryFee.toFixed(2);
		summaryTaxElement.innerText = "Tax: " + summaryTax.toFixed(2);
		summaryOrderTotalElement.innerText = "Order Total:" + summaryOrderTotal.toFixed(2); 

		if (summarySubtotal >= restaurants[currentIndex].min_order){
			var submitBtn = document.createElement("button");
			submitBtn.onclick = () => {
				alert("Your order has been Submitted, Thanks.")
				currentIndex = -1;
				selectRestaurant();
			}
			submitBtn.textContent = "Submit";
			document.getElementById("summaryColumn").append(submitBtn);
			
		}
	}
}

const addItem = (itemObj) => {
	orderItems[orderItems.length] = itemObj;
	updateSummary();
}

const removeItem = (itemObj) => {
	
	for(item in orderItems){
		if (item.value == itemObj);
		const index = orderItems.indexOf(item);
		orderItems.splice(index, 1);
		break;
	}
	updateSummary();
}


const selectRestaurant = () => {
	var dropDown = document.getElementById("restaurantsDropDown");
	var option = dropDown.options[dropDown.selectedIndex].value;
	if (currentIndex == 0)
		currentIndex = dropDown.selectedIndex;

	if (currentIndex != -1){
		var res = prompt("Are you sure you want to clear the current content of the page? (yes/no)");

		if (res == "yes"){
			document.getElementById("categoriesListId").innerHTML = "";

			document.getElementById("restaurantNameId").innerText = "Restaurant Name: " + restaurants[dropDown.selectedIndex].name;
			document.getElementById("deliveryFeeId").innerText = "Delivery Fee: " + restaurants[dropDown.selectedIndex].delivery_charge;
			document.getElementById("minOrderId").innerText = "Minimum Order: " + restaurants[dropDown.selectedIndex].min_order;


			var index = dropDown.selectedIndex;
			//Creating Three Column Layout
			var categories = document.getElementById("categoriesListId");
			
			for(const [key, _] of Object.entries(restaurants[index].menu)){
				
				//Adding Category
				var listItem = document.createElement("li");
				var listItemAnchor = document.createElement("a");
				listItemAnchor.appendChild(document.createTextNode(key))
				listItemAnchor.href = "#" + key + "Id"
			
				listItem.appendChild(listItemAnchor)
				categories.appendChild(listItem);

				//adding  Menu for Category
				var menuList = document.createElement("ul");
				menuList.id = key + "Id";
				for(const [_, itemVal] of Object.entries(restaurants[index].menu[key])){
					var menuListItemDiv = document.createElement("div");
					var menuListItem = document.createElement("li");
					var menuListItemObj = document.createTextNode("Name: " + itemVal.name + ", Price: "+ itemVal.price.toFixed(2) + ", Description: " + itemVal.description);
					
					var addItemImg = document.createElement("img");
					var removeItemImg = document.createElement("img");

					addItemImg.src = "add.png"
					addItemImg.onclick = () => {
						addItem(itemVal);
					}
					menuListItemDiv.className = "menuListItemDiv";

					menuListItem.appendChild(menuListItemObj);
					menuListItemDiv.append(menuListItem);
					menuListItemDiv.append(addItemImg);
					menuList.appendChild(menuListItemDiv);
				}

				var menuLists = document.getElementById("menuListId");
				menuLists.appendChild(menuList);
			}
		}
	}
	else{
		document.getElementById("categoriesListId").innerHTML = "";
		document.getElementById("menuListId").innerHTML = "";
		document.getElementById("summarySubtotalId").innerHTML = "";
		document.getElementById("summaryDeliveryFeeId").innerHTML = "";
		document.getElementById("summaryTaxId").innerHTML = "";
		document.getElementById("summaryOrderTotalId").innerHTML = "";
		document.getElementById("summaryColumn").innerHTML = "";
		document.getElementById("restaurantNameId").innerHTML = "";
		document.getElementById("minOrderId").innerHTML = "";
		document.getElementById("deliveryFeeId").innerHTML = "";
		orderItems = [];
		updateSummary();
		currentIndex = 0;
	}	
}