
// I create the Inventory class
class Inventory {
	// What to do when the class is initialized
	constructor() {
		this.items = [];
	}

	/**
	 * I look at what I carry in my inventory
	 * @returns {Boolean} true or false if there are items
	 */
	getItems () {
		if (this.items[0]) {
			console.log("Inventory:");
			this.items.forEach(inventory => {
				console.log(


          `- ${inventory.name} -\n Rarity: ${inventory.rarity} \n Desc: ${inventory.desc} \n ID: ${inventory.itemid}`


        );
			});
			return true;
		} else {
			console.log("You have nothing.");
			return false;
		}
	}

	/**
	 * I check if an item exists
	 * @param {String} item name
	 * @returns {Boolean} true or false if the item exists
	 */
	hasItem (name) {
		for (var i in this.items) {
			if (name == this.items[i].name) {
				return true;
			}
		}
		return false;
	}

	/**
	 * I add an item to the inventory
	 * @param {String} item name
	 * @param {String} item description
   * @param {String} item rarity
   * @param {String} item ID
	 * @returns {Number} the number of items in the inventory
	 */
	addItem (name, desc, rarity, itemid, prefix) {
		this.items.push({
			"name": name,
			"desc": desc,
      "rarity": rarity,
      "itemid": itemid,
      "prefix": prefix,
		});
		return this.items.length;
	}

	/**
	 * I remove an item from inventory
	 * @param {String} item name
	 * @returns {Boolean} true or false if the item has been removed successfully
	 */
	removeItem (itemid) {
		this.items.forEach(inventory => {
			if (itemid == inventory.itemid) {
				this.items.pop(inventory.itemid);
				return true;
			} else {
				return false;
			}
		});
	}
}

// BackPack inherits methods and properties from Inventory
class BackPack extends Inventory {
	/**
	 * I add an item to the inventory but first I check if the limit has not
	 * been reached.
	 * @param {String} item name
	 * @param {String} item description
   * @param {String} item rarity
   * @param {String} item id
	 * @returns {Number} the number of items in the inventory
	 */
	addItem (name, desc, rarity, itemid, prefix) {
		this.size = 10;
		if (this.items.length >= this.size) {
			console.log("backpack is full");
			return false;
		} else {
			super.addItem(name, desc, rarity, itemid, prefix);
			return true;
		}
	}
}

let player = new BackPack();


player.getItems();
