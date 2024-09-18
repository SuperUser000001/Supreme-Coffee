
class Coffee {
    constructor(name, supplyPrice, salePrice, quantity, netWeight, type, country, composition) {
        this.name = name;                   // Назва кави
        this.supplyPrice = supplyPrice;     // Ціна за одиницю товару (поставка)
        this.salePrice = salePrice;         // Ціна за одиницю товару (продаж)
        this.quantity = quantity;           // Кількість одиниць даного товару
        this.netWeight = netWeight;         // Маса нетто
        this.type = type;                   // Вид кави (зерно, молота)
        this.country = country;             // Країна-виробник
        this.composition = composition;     // Склад кави (арабіка, робуста)
    }

    getName()
    {
        return this.name;
    }
    getSupplyPrice()
    {
        return this.supplyPrice;
    }
    getSalePrice()
    {
        return this.salePrice;
    }
    getQuantity()
    {
        return this.quantity;
    }
    getNetWeight()
    {
        return this.netWeight;
    }
    getType()
    {
        return this.type;
    }
    getCountry()
    {
        return this.country;
    }
    getComposition()
    {
        return this.composition;
    }


    getInfo() {
        return `
            <strong style="color:red;">Назва:</strong> ${this.name}<br>
            <strong>Країна:</strong> ${this.country}<br>
            <strong>Вид:</strong> ${this.type}<br>
            <strong>Склад:</strong> ${this.composition}<br>
            <strong>Кількість:</strong> ${this.quantity}<br>
            <strong>Маса нетто:</strong> ${this.netWeight} г<br>
            <strong>Ціна постачання:</strong> ${this.supplyPrice} грн<br>
            <strong>Ціна продажу:</strong> ${this.salePrice} грн<br>
            <hr>
        `;
    }
}

coffeeList = [
    new Coffee("Елітна кава", 100, 150, 50, 250, "зерно", "Бразилія", "100% арабіка"),
    new Coffee("Кава з молоком", 80, 120, 30, 200, "молота", "Колумбія", "80% арабіка, 20% робуста"),
    new Coffee("Темна обсмажка", 90, 140, 60, 300, "зерно", "Ефіопія", "70% арабіка, 30% робуста")
];

function displayCoffeeList() {
    const coffeeListDiv = document.getElementById("coffee-list");

    // Очистка div перед вставкой данных (если нужно)
    coffeeListDiv.innerHTML = '';

    // Добавляем информацию о каждом товаре в div
    coffeeList.forEach(coffee => {
        coffeeListDiv.innerHTML += coffee.getInfo();
    });
}

// Вызов функции для отображения
displayCoffeeList();