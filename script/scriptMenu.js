class Menu {
	construnctor() {
		this.a = document.querySelectorAll('.forChangeColor');
		this.li = document.querySelectorAll('.MainMenu');
		this.icons = document.querySelectorAll('.img_menu');

		let arrayWithImg = ['img/pizza.png', 'img/roll.png', 'img/zakuski.png', 'img/soup.png', 'img/kombo.png', 'img/desert.png', 'img/drink.png', 'img/sous.png'];
		let arrayWithImg2 = ['img/pizza2.png', 'img/roll2.png', 'img/zakuski2.png', 'img/soup2.png', 'img/kombo2.png', 'img/desert2.png', 'img/drink2.png', 'img/sous2.png'];
	
		this.localFunction = new LocalStorage;
		this.giveActiveStatusToMenuItem(li, icons, a, arrayWithImg2);
	}

	giveActiveStatusToMenuItem(li, icons, a, array) {
		let data = this.getData();
		li.forEach((elem, index) => {
        	elem.addEventListener('click', () => {
            	icons[idnex].src = array[idnex];
            	a[idnex].style.color = '#FCB800';
            	this.localFunction.saveMenu(a, icons, index);
        	});
    	});
	}

	getData() {
		let data = this.localFunction.getAll('sticker');
			if (data == null) {
			data = {};
		}
		return data;
	}
}

class LocalStorage {
	saveMenu(a, icons, id) {
		let data = this.getAll('menu');

		if (data == null) {
			data = {};
		}

		data[id] = {
			img: icons.src,
			color: a.style.color
		};

		console.log(data);

		this.saveAll('sticker', data);
	}


	saveAll(id, data) {
		localStorage.setItem(id, JSON.stringify(data));
	}

	getAll(id) {
		let json = localStorage.getItem(id);
			return JSON.parse(json);
	}

}

new Menu();