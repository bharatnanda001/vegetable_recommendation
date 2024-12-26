const MONTHS = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  
  const SEASONS = [
    { name: "Winter", months: "December to February", color: "#ecf0f1" },
    { name: "Summer", months: "March to June", color: "#f39c12" },
    { name: "Monsoon", months: "July to September", color: "#16a085" },
    { name: "Autumn", months: "October to November", color: "#f1c40f" }
  ];
  
  const VEGETABLES = {
    "Winter": [
      { 
        name: "Cauliflower", 
        hindi: "फूलगोभी - Phoolgobhi", 
        price: "₹30 - ₹50 per kg",
        description: "A cruciferous vegetable high in fiber, antioxidants, and vitamin C.",
        nutritionalBenefits: "Rich in vitamin C, fiber, and folate.",
        seasonality: "Winter (December - February)",
        usage: "Can be used in soups, stews, or roasted."
      },
      { 
        name: "Cabbage", 
        hindi: "पत्तागोभी - Patta Gobhi", 
        price: "₹20 - ₹40 per kg",
        description: "A leafy green vegetable known for its crisp texture and mild flavor.",
        nutritionalBenefits: "Good source of fiber and vitamin C.",
        seasonality: "Winter (December - February)",
        usage: "Used in salads, soups, and stir-fries."
      },
      { 
        name: "Carrot", 
        hindi: "गाजर - Gajar", 
        price: "₹30 - ₹50 per kg",
        description: "A root vegetable known for its orange color and sweet taste.",
        nutritionalBenefits: "Rich in vitamin A and antioxidants.",
        seasonality: "Winter (December - February)",
        usage: "Used in salads, juices, and curries."
      },
      { 
        name: "Spinach", 
        hindi: "पालक - Paatal", 
        price: "₹15 - ₹30 per bunch",
        description: "A leafy green vegetable known for its high iron content.",
        nutritionalBenefits: "Rich in iron, vitamin A, and calcium.",
        seasonality: "Winter (December - February)",
        usage: "Can be eaten raw in salads or cooked in dishes like saag."
      },
      { 
        name: "Turnip", 
        hindi: "शलगम - Shalgam", 
        price: "₹20 - ₹40 per kg",
        description: "A root vegetable that is slightly spicy and earthy.",
        nutritionalBenefits: "Good source of fiber, vitamins, and minerals.",
        seasonality: "Winter (December - February)",
        usage: "Used in soups, stews, or boiled."
      },
      { 
        name: "Peas", 
        hindi: "मटर - Matar", 
        price: "₹50 - ₹80 per kg",
        description: "A small, round, green legume that grows in pods.",
        nutritionalBenefits: "Rich in protein, fiber, and vitamins.",
        seasonality: "Winter (December - February)",
        usage: "Used in curries, soups, and snacks."
      },
      { 
        name: "Radish", 
        hindi: "मूला - Mooli", 
        price: "₹20 - ₹40 per kg",
        description: "A root vegetable with a sharp, spicy taste.",
        nutritionalBenefits: "High in fiber, antioxidants, and vitamins.",
        seasonality: "Winter (December - February)",
        usage: "Used in salads, pickles, or eaten raw."
      },
      { 
        name: "Mustard Greens", 
        hindi: "सरसों का साग - Sarson ka Saag", 
        price: "₹30 - ₹50 per kg",
        description: "A leafy green vegetable known for its sharp, spicy flavor.",
        nutritionalBenefits: "High in vitamins A, C, and K.",
        seasonality: "Winter (December - February)",
        usage: "Used in stews, soups, or boiled."
      }
    ],
    "Summer": [
      { 
        name: "Tomato", 
        hindi: "टमाटर - Tamatar", 
        price: "₹20 - ₹50 per kg",
        description: "A juicy, red fruit that is technically a berry, used as a vegetable.",
        nutritionalBenefits: "High in vitamins A and C, and antioxidants.",
        seasonality: "Summer (March - June)",
        usage: "Used in curries, soups, or raw in salads."
      },
      { 
        name: "Bottle Gourd", 
        hindi: "लौकी - Lauki", 
        price: "₹20 - ₹40 per kg",
        description: "A mild-flavored, low-calorie vegetable often used in soups and curries.",
        nutritionalBenefits: "Contains high amounts of water and fiber.",
        seasonality: "Summer (March - June)",
        usage: "Popular in curries and soups."
      },
      { 
        name: "Bitter Gourd", 
        hindi: "करेला - Karela", 
        price: "₹30 - ₹50 per kg",
        description: "A bitter-tasting vegetable known for its unique flavor.",
        nutritionalBenefits: "Rich in antioxidants and helps regulate blood sugar.",
        seasonality: "Summer (March - June)",
        usage: "Used in stir-fries, curries, or fried."
      },
      { 
        name: "Cucumber", 
        hindi: "खीरा - Kheera", 
        price: "₹15 - ₹30 per kg",
        description: "A mild-flavored vegetable with high water content.",
        nutritionalBenefits: "Hydrating, low-calorie, and rich in vitamins.",
        seasonality: "Summer (March - June)",
        usage: "Used in salads, pickles, or eaten raw."
      },
      { 
        name: "Lady Finger", 
        hindi: "भिंडी - Bhindi", 
        price: "₹30 - ₹60 per kg",
        description: "A green, long vegetable with a unique texture.",
        nutritionalBenefits: "Rich in fiber, vitamins A and C.",
        seasonality: "Summer (March - June)",
        usage: "Used in curries, stir-fries, or snacks."
      },
      { 
        name: "Brinjal", 
        hindi: "बैंगन - Baingan", 
        price: "₹25 - ₹50 per kg",
        description: "A purple, spongy vegetable that absorbs flavors in cooking.",
        nutritionalBenefits: "Rich in fiber, vitamins, and antioxidants.",
        seasonality: "Summer (March - June)",
        usage: "Used in curries, stir-fries, and grilled dishes."
      },
      { 
        name: "Pumpkin", 
        hindi: "कद्दू - Kaddu", 
        price: "₹20 - ₹40 per kg",
        description: "A large, orange fruit often used as a vegetable.",
        nutritionalBenefits: "Rich in fiber, vitamin A, and antioxidants.",
        seasonality: "Summer (March - June)",
        usage: "Used in soups, curries, or baked dishes."
      },
      { 
        name: "Green Chilies", 
        hindi: "हरी मिर्च - Hari Mirch", 
        price: "₹40 - ₹80 per kg",
        description: "A small, pungent vegetable often used to add spice.",
        nutritionalBenefits: "Rich in vitamin C and capsaicin.",
        seasonality: "Summer (March - June)",
        usage: "Used in curries, chutneys, or pickles."
      }
    ],
    "Monsoon": [
      { 
        name: "Green Beans", 
        hindi: "हरी फली - Hari Phali", 
        price: "₹40 - ₹70 per kg",
        description: "A green, long vegetable often used in curries and stews.",
        nutritionalBenefits: "High in fiber and vitamin C.",
        seasonality: "Monsoon (July - September)",
        usage: "Used in soups, curries, and stir-fries."
      },
      { 
        name: "Okra", 
        hindi: "भिंडी - Bhindi", 
        price: "₹30 - ₹60 per kg",
        description: "A slim, green vegetable often used in curries.",
        nutritionalBenefits: "Rich in fiber, vitamin C, and antioxidants.",
        seasonality: "Monsoon (July - September)",
        usage: "Used in curries, fries, or pickles."
      },
      { 
        name: "Sweet Corn", 
        hindi: "मक्का - Makka", 
        price: "₹30 - ₹50 per kg",
        description: "A sweet, yellow grain often eaten as a vegetable.",
        nutritionalBenefits: "High in fiber and antioxidants.",
        seasonality: "Monsoon (July - September)",
        usage: "Used in soups, salads, or boiled."
      },
      { 
        name: "Amaranth", 
        hindi: "चौलाई - Chaulai", 
        price: "₹15 - ₹30 per bunch",
        description: "A leafy green vegetable with high nutritional value.",
        nutritionalBenefits: "Rich in iron, calcium, and vitamin A.",
        seasonality: "Monsoon (July - September)",
        usage: "Used in soups, stews, or stir-fries."
      },
      { 
        name: "Cluster Beans", 
        hindi: "गवार फली - Gawar Phali", 
        price: "₹40 - ₹60 per kg",
        description: "A legume known for its slightly bitter taste.",
        nutritionalBenefits: "Rich in fiber, vitamins, and minerals.",
        seasonality: "Monsoon (July - September)",
        usage: "Used in curries and stir-fries."
      },
      { 
        name: "Taro Root", 
        hindi: "अरबी - Arbi", 
        price: "₹30 - ₹50 per kg",
        description: "A starchy root vegetable with a nutty flavor.",
        nutritionalBenefits: "Rich in fiber and potassium.",
        seasonality: "Monsoon (July - September)",
        usage: "Used in curries, fries, or boiled."
      },
      { 
        name: "Chili Pepper", 
        hindi: "लाल मिर्च - Lal Mirch", 
        price: "₹40 - ₹80 per kg",
        description: "A pungent vegetable used for adding spice.",
        nutritionalBenefits: "High in vitamin C and capsaicin.",
        seasonality: "Monsoon (July - September)",
        usage: "Used in curries, chutneys, or pickles."
      }
    ],
    "Autumn": [
      { 
        name: "Pumpkin", 
        hindi: "कद्दू - Kaddu", 
        price: "₹20 - ₹40 per kg",
        description: "A large, orange fruit often used as a vegetable.",
        nutritionalBenefits: "Rich in fiber, vitamin A, and antioxidants.",
        seasonality: "Autumn (October - November)",
        usage: "Used in soups, curries, or baked dishes."
      },
      { 
        name: "Sweet Potato", 
        hindi: "शकरकंद - Shakarkand", 
        price: "₹30 - ₹50 per kg",
        description: "A starchy, sweet-tasting root vegetable.",
        nutritionalBenefits: "Rich in fiber, vitamin A, and antioxidants.",
        seasonality: "Autumn (October - November)",
        usage: "Used in soups, curries, or baked dishes."
      },
      { 
        name: "French Beans", 
        hindi: "फ्रेंच बीन्स - French Beans", 
        price: "₹40 - ₹60 per kg",
        description: "A green, long vegetable with a mild flavor.",
        nutritionalBenefits: "High in fiber and vitamin C.",
        seasonality: "Autumn (October - November)",
        usage: "Used in soups, salads, and stir-fries."
      },
      { 
        name: "Peas", 
        hindi: "मटर - Matar", 
        price: "₹50 - ₹80 per kg",
        description: "A small, round, green legume that grows in pods.",
        nutritionalBenefits: "Rich in protein, fiber, and vitamins.",
        seasonality: "Autumn (October - November)",
        usage: "Used in curries, soups, and snacks."
      },
      { 
        name: "Ridge Gourd", 
        hindi: "तूरी - Turi", 
        price: "₹25 - ₹40 per kg",
        description: "A green vegetable with a mild, slightly bitter taste.",
        nutritionalBenefits: "Rich in water and fiber.",
        seasonality: "Autumn (October - November)",
        usage: "Used in curries and stews."
      },
      { 
        name: "Ash Gourd", 
        hindi: "पत्ता गोभी - Petha", 
        price: "₹30 - ₹50 per kg",
        description: "A large, green, mild-flavored gourd.",
        nutritionalBenefits: "Rich in water, fiber, and vitamin C.",
        seasonality: "Autumn (October - November)",
        usage: "Used in curries or soups."
      },
      { 
        name: "Bottle Gourd", 
        hindi: "लौकी - Lauki", 
        price: "₹20 - ₹40 per kg",
        description: "A mild-flavored, low-calorie vegetable often used in soups and curries.",
        nutritionalBenefits: "Contains high amounts of water and fiber.",
        seasonality: "Autumn (October - November)",
        usage: "Popular in curries and soups."
      }
    ]
  };
  
  // Render Season Buttons
  function renderSeasons() {
    const seasonButtons = document.getElementById("seasonButtons");
    seasonButtons.innerHTML = SEASONS.map(season => `
      <button class="season-btn" onclick="selectSeason('${season.name}')">
        <div>${season.name}</div>
        <div>${season.months}</div>
      </button>
    `).join("");
  }
  
  // Render Month Buttons
  function renderMonths() {
    const monthButtons = document.getElementById("monthButtons");
    monthButtons.innerHTML = MONTHS.map(month => `
      <button class="month-btn" onclick="selectMonth('${month}')">${month}</button>
    `).join("");
  }
  
  // Select Season
  function selectSeason(season) {
    selectedSeason = season;
    selectedMonth = "";
    renderVegetables();
  }
  
  // Select Month
  function selectMonth(month) {
    selectedMonth = month;
    selectedSeason = "";
    renderVegetables();
  }
  
  // Filter Vegetables based on search
  function filterVegetables(vegetables) {
    return vegetables.filter(veg => 
      veg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      veg.hindi.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  // Render Vegetables List
  function renderVegetables() {
    let vegetablesToShow = [];
    if (selectedMonth) {
      vegetablesToShow = VEGETABLES[selectedMonth] || [];
    } else if (selectedSeason) {
      vegetablesToShow = VEGETABLES[selectedSeason] || [];
    }
  
    vegetablesToShow = filterVegetables(vegetablesToShow);
  
    const vegetableList = document.getElementById("vegetableList");
    if (vegetablesToShow.length > 0) {
      vegetableList.innerHTML = vegetablesToShow.map(veg => `
        <div class="vegetable-item">
          <div>
            <h3>${veg.name}</h3>
            <p><strong>Hindi Name:</strong> ${veg.hindi}</p>
            <p><strong>Price:</strong> ${veg.price}</p>
          </div>
          <div class="details">
            <p><strong>Description:</strong> ${veg.description}</p>
            <p><strong>Nutritional Benefits:</strong> ${veg.nutritionalBenefits}</p>
            <p><strong>Usage:</strong> ${veg.usage}</p>
          </div>
        </div>
      `).join('');
    } else {
      vegetableList.innerHTML = "<p>No vegetables available for this selection.</p>";
    }
  }
  
  let searchTerm = "";
  let selectedSeason = "";
  let selectedMonth = "";
  
  // Add Event Listener to Search Input
  document.getElementById("searchInput").addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderVegetables();
  });
  
  // Initial Render
  renderSeasons();
  renderMonths();
  