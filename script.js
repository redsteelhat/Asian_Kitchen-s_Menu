const menu = [
    {
        id: 1,
        title: "Sushi Set",
        category: "Japanese",
        price: 15.99,
        img: "https://source.unsplash.com/300x200/?sushi",
        desc: "Taze somon ve avokado içeren lezzetli sushi seti."
    },
    {
        id: 2,
        title: "Kung Pao Chicken",
        category: "Chinese",
        price: 12.99,
        img: "https://source.unsplash.com/300x200/?chinese-food",
        desc: "Acılı fıstıklı özel Çin tavuğu yemeği."
    },
    {
        id: 3,
        title: "Pad Thai",
        category: "Thai",
        price: 13.99,
        img: "https://source.unsplash.com/300x200/?thai-food",
        desc: "Taze sebzeler ve karides ile hazırlanan Tayland eriştesi."
    },
    {
        id: 4,
        title: "Ramen",
        category: "Japanese",
        price: 14.99,
        img: "https://source.unsplash.com/300x200/?ramen",
        desc: "Noodle, et ve sebzelerle zenginleştirilmiş sıcak bir Japon çorbası."
    },
    {
        id: 5,
        title: "Sweet and Sour Chicken",
        category: "Chinese",
        price: 11.99,
        img: "https://source.unsplash.com/300x200/?sweet-sour-chicken",
        desc: "Tatlı ve ekşi soslu nefis tavuk yemeği."
    },
    {
        id: 6,
        title: "Tom Yum Soup",
        category: "Thai",
        price: 9.99,
        img: "https://source.unsplash.com/300x200/?tom-yum",
        desc: "Ekşi ve baharatlı Tayland usulü deniz ürünü çorbası."
    }
];

const buttonContainer = document.querySelector(".btn-container");
const menuContainer = document.querySelector(".menu-items");

// Kategorileri belirleyip butonları oluşturma
const categories = ["All", ...new Set(menu.map(item => item.category))];

categories.forEach(category => {
    const button = document.createElement("button");
    button.textContent = category;
    button.classList.add("btn", "btn-outline-dark", "m-2");
    button.addEventListener("click", () => filterMenu(category));
    buttonContainer.appendChild(button);
});

// Menü öğelerini HTML içine yerleştirme fonksiyonu
function displayMenu(menuItems) {
    menuContainer.innerHTML = menuItems.map(item => `
        <div class="menu-item card mb-3">
            <img src="${item.img}" class="card-img-top" alt="${item.title}">
            <div class="card-body">
                <h5 class="card-title">${item.title} - $${item.price.toFixed(2)}</h5>
                <p class="card-text">${item.desc}</p>
            </div>
        </div>
    `).join("");
}

// Menü filtreleme fonksiyonu
function filterMenu(category) {
    if (category === "All") {
        displayMenu(menu);
    } else {
        const filteredMenu = menu.filter(item => item.category === category);
        displayMenu(filteredMenu);
    }
}

// Sayfa yüklendiğinde tüm menüyü göster
document.addEventListener("DOMContentLoaded", () => displayMenu(menu));
