const menuItems = [
    { 
        name: "Boneshaker", 
        description: "Dark rye, cherry, orange blossom honey, bitters, smoke", 
        category: "Cocktail", 
        price: "$13", 
        image: "/assets/boneshaker.png" 
    },
    { 
        name: "Sazarac", 
        description: "Sazarac rye, absinthe, bitters, sugar", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/sazerac.png" 
    },
    { 
        name: "Redrum", 
        description: "Rum, cherry, lime, pomegranate, sprite", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/redrum.png" 
    },
    { 
        name: "Cucumber Collins", 
        description: "Cucumber vodka, lemon, mint, soda", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/cucumbercollins.png" 
    },
    { 
        name: "Calavera", 
        description: "Vodka, Elderflower, Lemon, Pomegranate", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/calavera.png" 
    },
    { 
        name: "Espresso Martini", 
        description: "Whipped vodka, Kahlua, Irish whiskey, Cold brew, Cream", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/espresso.png" 
    },
    { 
        name: "Central Perk", 
        description: "Whipped vodka, Kahlua, Frangelico, Cream", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/centralperk.png" 
    },
    { 
        name: "Corpse Reviver", 
        description: "Gin, Orange Liqueur, Lemon, Lillet Blanc", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/corpsereviver.png" 
    },
    { 
        name: "Dark and Stormy", 
        description: "Lime, Ginger Beer, Dark Rum", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/darkandstormy.png" 
    },
    { 
        name: "Death in the Afternoon", 
        description: "Absinthe, Sugar, Bitters, Prosecco", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/dia.png" 
    },
    { 
        name: "Loviatar", 
        description: "Gin, Lemon, Lavender, Elderflower", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/loviatar.png" 
    },
    { 
        name: "Malvado", 
        description: "Tequila, Lime, Sugar, Aperol, Ginger Beer", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/malvado.png" 
    },
    { 
        name: "Moscow Mule", 
        description: "Vodka, Lime, Ginger Beer", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/mule.png" 
    },
    { 
        name: "Negroni", 
        description: "Gin, Vermouth, Campari", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/negroni.png" 
    },
    { 
        name: "Paloma", 
        description: "Tequila, Lime, Sugar, Jarrito's Grapefruit", 
        category: "Cocktail", 
        price: "$11", 
        image: "/assets/paloma.png" 
    },
];

function Menu() {
    return (
        <div className="menu-container">
            <h2>Our Menu</h2>
            <div className="menu-list">
                {menuItems.map((item, index) => (
                    <div key={index} className="menu-item">
                        <h3>{item.name}</h3>
                        <div className="menu-hover">
                            <img src={item.image} alt={item.name} className="menu-image" />
                            <p>{item.description}</p>
                            <p><strong>{item.price}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
