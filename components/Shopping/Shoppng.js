class Shopping {
	handlerClear() {
		ROOT_SHOPPING.innerHTML = '';
	}

	cartBtnMinus(id, count) {
		let result = 0;
		for (const item of CATALOG) {
			if (item.id === id) {
				if (this.count <= 1) {
					console.log(0);
				} else {
					result = count--;
					console.log('-');
				}
				break;
			}
		}
		shoppingPage.render(result);
	}

	cartBtnPlus(id, count) {
		let result = 0;
		for (const item of CATALOG) {
			if (item.id === id) {
				result = count++;
				console.log('+');
				break;
			}
		}
		shoppingPage.render(result);
	}

	render() {
		const productsStore = losalStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({ id, name, price, count }) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️ ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} USD</td>
						<td><button class="cart-btn-minus" onclick="shoppingPage.cartBtnMinus('${id}', '${count}');">-</button></td>
						<td>${count}</td>
						<td><button class="cart-btn-plus" onclick="shoppingPage.cartBtnPlus('${id}', '${count}');">+</button></td>
                    </tr>
                `;
				sumCatalog += price;
			}
		});

		const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handlerClear();"></div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">💥 Сумма:</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
        `;

		ROOT_SHOPPING.innerHTML = html;
	}
};

const shoppingPage = new Shopping();