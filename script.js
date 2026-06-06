/**
 * Park N Pork — Base Product System (Step 1)
 * Senior Front-End Engineering implementation using vanilla JavaScript, HTML, and CSS.
 */

// 1. PRODUCT DATA (Exact items with high-res online image references)
const PRODUCTS = [
  // FRIED PORK
  {
    id: "fp-01",
    name: "Fried Pork Only",
    category: "Fried Pork",
    price: 60,
    description: "Succulent, crispy-fried seasoned pork chunks served with dynamic local dip seasonings.",
    stamp: "PORK ONLY",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "fp-02",
    name: "Fried Pork + Yam Chips",
    category: "Fried Pork",
    price: 60,
    description: "Crispy-fried pork chunk combos paired with thick-cut golden Ghanaian fried yam logs.",
    stamp: "PORK + YAM",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "fp-03",
    name: "Fried Pork + Banku (1 ball)",
    category: "Fried Pork",
    price: 55,
    description: "Seasoned crispy fried pork belly paired perfectly with a single organic steamed banku sourdough ball.",
    stamp: "PORK + BANKU",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "fp-04",
    name: "Combo Fried Pork + Yam Chips",
    category: "Fried Pork",
    price: 70,
    description: "Satisfying jumbo combo portion of fried pork loin chops paired with double-fried yams.",
    stamp: "PORK COMBO",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "fp-05",
    name: "Supreme Fried Pork + Yam Chips",
    category: "Fried Pork",
    price: 80,
    description: "The ultimate feast: premium select thick pork belly slices, heaps of seasoned yam chips, and hot black shito.",
    stamp: "PORK SUPREME",
    image: "/src/assets/images/family_feast_platter_1780630597565.png"
  },

  // GRILLED PORK
  {
    id: "gp-01",
    name: "Grilled Pork Only",
    category: "Grilled Pork",
    price: 60,
    description: "Flame-grilled succulent pork chops infused with seasoned garlic brine and hot street peppers.",
    stamp: "GRILLED",
    image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "gp-02",
    name: "Grilled Pork + Jollof Rice",
    category: "Grilled Pork",
    price: 70,
    description: "Smoky wood-grilled pork chops layered over spiced and fragrant Ghanaian Jollof rice platter.",
    stamp: "PORK + JOLLOF",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "gp-03",
    name: "Grilled Pork + Banku (2 balls)",
    category: "Grilled Pork",
    price: 70,
    description: "Hot flame-kissed grilled pork loin served alongside two large warm balls of fresh home-churned banku.",
    stamp: "PORK + BANKU",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6e946a88a?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "gp-04",
    name: "Pork with Avocado",
    category: "Grilled Pork",
    price: 60,
    description: "Tender oak-charcoal pork chunks matched beautifully with cool, buttery local avocado wedges.",
    stamp: "PORK + AVO",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=80"
  },

  // RICE COMBOS
  {
    id: "rc-01",
    name: "Pork + Fried Rice",
    category: "Rice Meals",
    price: 60,
    description: "Wok-executed aromatic vegetable fried rice topped with sweet soy-infused hot pork cuts.",
    stamp: "PORK + FRIED RICE",
    image: "/src/assets/images/pork_fried_rice_1780630618905.png"
  },
  {
    id: "rc-02",
    name: "Pork + Jollof Rice",
    category: "Rice Meals",
    price: 60,
    description: "Legendary rich Jollof rice combined with a delicious helping of dry-spiced fried pork thighs.",
    stamp: "PORK + JOLLOF",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "rc-03",
    name: "Assorted Fried Rice with Pork",
    category: "Rice Meals",
    price: 70,
    description: "High-heat stir fried rice loaded with poultry bits, shredded crisp greens, and caramelized pork morsels.",
    stamp: "ASSORTED RICE",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80"
  },

  // BANKU MEALS
  {
    id: "bm-01",
    name: "Pork + Banku (1 ball)",
    category: "Banku Meals",
    price: 55,
    description: "Freshly-steamed single banku dumpling paired with slow-stewed, highly seasoned local pork shoulder.",
    stamp: "1 BALL BANKU",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "bm-02",
    name: "Pork + Banku (2 balls)",
    category: "Banku Meals",
    price: 70,
    description: "Two fermented corn sourdough balls served with deep fried seasoned fatty pork rind and spicy red pepper sauce.",
    stamp: "2 BALL BANKU",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "bm-03",
    name: "Pork + Spicy Pepper Sauce + Banku",
    category: "Banku Meals",
    price: 60,
    description: "Sizzling pork cuts tossed in a blazing hot green chili & black pepper stew with single banku ball.",
    stamp: "SPICY PEPPER",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },

  // BARBECUE
  {
    id: "bq-01",
    name: "Pork BBQ Stick",
    category: "Barbecue",
    price: 40,
    description: "Caramelized skewered pork cubes glazed with sticky sweet chili molasses and dry roasted nuts.",
    stamp: "PORK SKEWER",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "bq-02",
    name: "Chicken BBQ Stick",
    category: "Barbecue",
    price: 30,
    description: "Tender chicken breasts marinated in street garlic-ginger and fired over active oak coals.",
    stamp: "CHICKEN SKEWER",
    image: "https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "bq-03",
    name: "Gizzard BBQ Stick",
    category: "Barbecue",
    price: 25,
    description: "Robust gizzard cuts, slow boiled in spices and heavily charred with crispy red onions.",
    stamp: "GIZZARD SKEWER",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=600&auto=format&fit=crop&q=80"
  },

  // EXTRAS
  {
    id: "ex-01",
    name: "Extra Yam Chips",
    category: "Extras",
    price: 20,
    description: "Golden yellow yam sticks tossed in fine sea salt and served crisp.",
    stamp: "EXTRA YAM",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ex-02",
    name: "Extra Banku",
    category: "Extras",
    price: 5,
    description: "Single steamed, hand-kneaded ball of premium fermented corn meal.",
    stamp: "EXTRA BANKU",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ex-03",
    name: "Extra Rice",
    category: "Extras",
    price: 25,
    description: "Generous supplementary bowl of classic seasoned red Jollof or stir fried rice.",
    stamp: "EXTRA RICE",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "ex-04",
    name: "Coleslaw",
    category: "Extras",
    price: 10,
    description: "Freshly shredded crisp white cabbage and carrots drenched in chilled mayonnaise slurry.",
    stamp: "COLESLAW",
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ex-05",
    name: "Pepper Sauce",
    category: "Extras",
    price: 5,
    description: "Side bowl of blazing hot black shito and blended raw green scotch bonnet chillies.",
    stamp: "HOT PEPPER",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ex-06",
    name: "Goat Meat Add-on",
    category: "Extras",
    price: 27,
    description: "Chunk of certified locally-reared goat meat baked in rich local spices.",
    stamp: "GOAT ADD-ON",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "ex-07",
    name: "Goat Stew",
    category: "Extras",
    price: 33,
    description: "Aromatic, slow cooked thick red tomato gravy packed with tender goat meat fibres.",
    stamp: "GOAT STEW",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop&q=80"
  },

  // DRINKS
  {
    id: "dr-01",
    name: "Sprite",
    category: "Drinks",
    price: 15,
    description: "Crispy cold lemon-lime sparkling soft drink served in an ice coated bottle.",
    stamp: "SPRITE COLD",
    image: "https://images.unsplash.com/photo-1625772291426-f30afbe90aa1?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dr-02",
    name: "Coca-Cola",
    category: "Drinks",
    price: 15,
    description: "Classic sweet carbonated cola served ice-cold to restore your energy instantly.",
    stamp: "ICE COKE",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dr-03",
    name: "Fanta Orange",
    category: "Drinks",
    price: 15,
    description: "Bubbling sweet orange sparkling juice soda bursting with tropical tang.",
    stamp: "FANTA COLD",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dr-04",
    name: "Club Beer",
    category: "Drinks",
    price: 25,
    description: "Traditional premier lager beer brewed locally in Ghana, served heavily chilled.",
    stamp: "CLUB LAGER",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dr-05",
    name: "Sobolo (Hibiscus Ginger)",
    category: "Drinks",
    price: 20,
    description: "Sweet indigenous deep-ruby hibiscus blossom extract infused with ginger root concentrate.",
    stamp: "HOUSE SOBOLO",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "dr-06",
    name: "Mineral Water",
    category: "Drinks",
    price: 10,
    description: "Chilled bottle of pure local mineral spring drinking water for maximum hydration.",
    stamp: "PURE SPRING",
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?w=600&auto=format&fit=crop&q=80"
  },
  // COMBOS (cb-01 to cb-03)
  {
    id: "cb-01",
    name: "The Solo King",
    category: "Combo Deals",
    price: 45,
    description: "1x Grilled Pork + 1x Jollof Rice + 1x Soft Drink combo platter.",
    stamp: "SAVE GH₵8",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "cb-02",
    name: "Family Feast",
    category: "Combo Deals",
    price: 120,
    description: "3x Grilled Pork, 2x Noodles, 2x Sides, and a cold 1.5L drink bottle.",
    stamp: "SAVE GH₵25",
    image: "/src/assets/images/family_feast_platter_1780630597565.png"
  },
  {
    id: "cb-03",
    name: "Pork Lover Duo",
    category: "Combo Deals",
    price: 68,
    description: "2x Signature Pork, 2x thick-cut crispy Yam Chips, and Extra house sauce.",
    stamp: "SAVE GH₵12",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80"
  },
  // MOST ORDERED TODAY (mo-01 to mo-04)
  {
    id: "mo-01",
    name: "Signature Fried Pork",
    category: "Most Ordered",
    price: 35,
    description: "Legendary local recipe golden-crispy fried seasoned pork chunks.",
    stamp: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "mo-02",
    name: "Pork & Yam Chips",
    category: "Most Ordered",
    price: 40,
    description: "Perfect pairing of wood-grilled crispy pork cuts with dry-salted fried yam logs.",
    stamp: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "mo-03",
    name: "Pork & Jollof",
    category: "Most Ordered",
    price: 45,
    description: "Tender fire-roasted pork chunk combo layered over a classic spicy Jollof rice stack.",
    stamp: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "mo-04",
    name: "Family Pork Platter",
    category: "Most Ordered",
    price: 95,
    description: "Enormous gathering plate featuring a double portion of signature pork, plenty of sides and local pepper sauces.",
    stamp: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },
  // EXTRA FIXINGS (ef-01 to ef-08)
  {
    id: "ef-01",
    name: "Extra Shito",
    category: "Extra Fixings",
    price: 5,
    description: "Rich, spicy caramelized Ghanaian black pepper sauce.",
    stamp: "SHITO",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "ef-02",
    name: "Plantain (4pcs)",
    category: "Extra Fixings",
    price: 7,
    description: "Sweet, ripe golden fried plantain chunks.",
    stamp: "PLANTAIN",
    image: "https://images.unsplash.com/photo-1564844536311-de546a28c87d?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "ef-03",
    name: "Fried Yam",
    category: "Extra Fixings",
    price: 9,
    description: "Crispy supplementary portion of local fried yam sticks.",
    stamp: "FRIED YAM",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "ef-04",
    name: "Extra Pork Portion",
    category: "Extra Fixings",
    price: 11,
    description: "Additional serving of fresh, tender crispy pork belly cubes.",
    stamp: "EXTRA PORK",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "ef-05",
    name: "Coca Cola 350ml",
    category: "Extra Fixings",
    price: 13,
    description: "A cold refreshing glass bottle drink to elevate your meal.",
    stamp: "COLD COKE",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "ef-06",
    name: "House Sauce",
    category: "Extra Fixings",
    price: 15,
    description: "Unique signature creamy dip loaded with chef special herbs and hot pepper.",
    stamp: "SECRET SAUCE",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "ef-07",
    name: "Bottled Water",
    category: "Extra Fixings",
    price: 7,
    description: "Pure, sparkling cool local mineral drinking water bottle.",
    stamp: "WATER",
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "ef-08",
    name: "Side Salad",
    category: "Extra Fixings",
    price: 19,
    description: "Crisp and juicy seasonal leaf salad with garlic-mayo emulsion.",
    stamp: "FRESH SALAD",
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=100&auto=format&fit=crop&q=80"
  },
  // SPECIAL PROMO PACKS REGISTERED IN THE DATABASE
  {
    id: "spec-feast",
    name: "Weekend Pork Feast",
    category: "Special Promos",
    price: 75,
    description: "Crispy fried pork paired with thick-cut yam chips and a chilling soft drink bottle.",
    stamp: "WEEKEND COMBO",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "spec-family",
    name: "Family Pork Pack",
    category: "Special Promos",
    price: 150,
    description: "2 Fried Pork Meals, 2 Yam Chips, and 2 Soft Drinks in a jumbo platter.",
    stamp: "FAMILY PACK",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "spec-couples",
    name: "Couples Combo",
    category: "Special Promos",
    price: 120,
    description: "2 Pork Meals and 2 Drinks. Designed as a cozy feast for couples.",
    stamp: "COUPLES PACK",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "spec-office",
    name: "Office Lunch Bundle",
    category: "Special Promos",
    price: 260,
    description: "4 Pork Meals and 4 Drinks. The complete executive team feast.",
    stamp: "OFFICE PACK",
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=600&auto=format&fit=crop&q=80"
  }
];

// 2. STATE MANAGEMENT
const state = {
  searchQuery: "",
  selectedCategory: "All Items",
  products: PRODUCTS,
  viewMode: "grid", // "grid" or "list"
  cart: JSON.parse(localStorage.getItem("pnp_cart") || "{}") // Map: itemId -> quantity (e.g. { "fp-01": 2 })
};

// 3. DOM ELEMENTS
let searchInput = null;
let searchClearBtn = null;
let searchBtnClear = null;
let categoryListContainer = null;
let productGridContainer = null;
let resultsCountEl = null;
let resetFiltersBtn = null;
let toastContainer = null;

// Cart & Navigation elements
let navCartBadge = null;
let navCartBtn = null;
let navSearchBtn = null;
let mobileNavToggle = null;
let mobileNavMenu = null;

// Floating Mobile Bottom Nav elements
let mobileFloatBar = null;
let floatHomeBtn = null;
let floatSearchBtn = null;
let floatCartBtn = null;
let floatCartBadge = null;

// Layout Views controls
let viewBtnGrid = null;
let viewBtnList = null;
let headerCategoryBadge = null;

// Cart Drawer elements
let cartDrawer = null;
let cartDrawerBackdrop = null;
let cartDrawerPanel = null;
let cartDrawerClose = null;
let cartItemsContainer = null;
let cartSubtotal = null;
let cartCheckoutBtn = null;

// Checkout Modal elements
let checkoutModal = null;
let checkoutBackdrop = null;
let checkoutClose = null;
let checkoutForm = null;
let checkoutSummaryList = null;
let checkoutTotalPrice = null;
let checkoutNameInput = null;
let checkoutPhoneInput = null;
let checkoutServiceSelect = null;
let checkoutNotesInput = null;

// Modal Quickview elements cached
let quickviewModal = null;
let quickviewBackdrop = null;
let quickviewClose = null;
let modalImage = null;
let modalStamp = null;
let modalCategory = null;
let modalId = null;
let modalName = null;
let modalPrice = null;
let modalDescription = null;
let modalAddBtn = null;

// Initialize app when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  setupEventListeners();
  renderCategories();
  renderProducts();
  initHeroSlider();
  renderCart(); // Initial rendering of empty cart state

  // Handle redirect focus from other pages (e.g., specials page)
  if (window.location.search.includes("search-focus=true") || window.location.hash === "#search-input") {
    setTimeout(() => {
      const sInput = document.getElementById("search-input");
      if (sInput) {
        sInput.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          sInput.focus();
        }, 600);
      }
    }, 400);
  } else if (window.location.search.includes("menu-focus=true") || window.location.hash === "#category-list") {
    setTimeout(() => {
      const catList = document.getElementById("category-list");
      if (catList) {
        catList.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 400);
  }
});

// Cache DOM elements to minimize lookups
function cacheElements() {
  searchInput = document.getElementById("search-input");
  searchClearBtn = document.getElementById("search-clear");
  searchBtnClear = document.getElementById("search-btn-clear");
  categoryListContainer = document.getElementById("category-list");
  productGridContainer = document.getElementById("product-grid");
  resultsCountEl = document.getElementById("results-count");
  resetFiltersBtn = document.getElementById("reset-filters");
  toastContainer = document.getElementById("toast-container");

  // Cache Cart & Navigation elements
  navCartBadge = document.getElementById("nav-cart-badge");
  navCartBtn = document.getElementById("nav-cart-btn");
  navSearchBtn = document.getElementById("nav-search-btn");
  mobileNavToggle = document.getElementById("mobile-nav-toggle");
  mobileNavMenu = document.getElementById("mobile-nav-menu");

  // Cache Floating Bottom Navigation elements
  mobileFloatBar = document.getElementById("mobile-float-bar");
  floatHomeBtn = document.getElementById("float-home-btn");
  floatSearchBtn = document.getElementById("float-search-btn");
  floatCartBtn = document.getElementById("float-cart-btn");
  floatCartBadge = document.getElementById("float-cart-badge");

  // Cache Layout Toggles
  viewBtnGrid = document.getElementById("view-btn-grid");
  viewBtnList = document.getElementById("view-btn-list");
  headerCategoryBadge = document.getElementById("header-category-badge");

  // Cache Cart Drawer elements
  cartDrawer = document.getElementById("cart-drawer");
  cartDrawerBackdrop = document.getElementById("cart-drawer-backdrop");
  cartDrawerPanel = document.getElementById("cart-drawer-panel");
  cartDrawerClose = document.getElementById("cart-drawer-close");
  cartItemsContainer = document.getElementById("cart-items-container");
  cartSubtotal = document.getElementById("cart-subtotal");
  cartCheckoutBtn = document.getElementById("cart-checkout-btn");

  // Cache Checkout Modal elements
  checkoutModal = document.getElementById("checkout-modal");
  checkoutBackdrop = document.getElementById("checkout-backdrop");
  checkoutClose = document.getElementById("checkout-close");
  checkoutForm = document.getElementById("checkout-form");
  checkoutSummaryList = document.getElementById("checkout-summary-list");
  checkoutTotalPrice = document.getElementById("checkout-total-price");
  checkoutNameInput = document.getElementById("checkout-name");
  checkoutPhoneInput = document.getElementById("checkout-phone");
  checkoutServiceSelect = document.getElementById("checkout-service");
  checkoutNotesInput = document.getElementById("checkout-notes");

  // Cache new modal DOM elements
  quickviewModal = document.getElementById("quickview-modal");
  quickviewBackdrop = document.getElementById("quickview-backdrop");
  quickviewClose = document.getElementById("quickview-close");
  modalImage = document.getElementById("modal-image");
  modalStamp = document.getElementById("modal-stamp");
  modalCategory = document.getElementById("modal-category");
  modalId = document.getElementById("modal-id");
  modalName = document.getElementById("modal-name");
  modalPrice = document.getElementById("modal-price");
  modalDescription = document.getElementById("modal-description");
  modalAddBtn = document.getElementById("modal-add-btn");
}

// Set up UI event listeners
function setupEventListeners() {
  // Real-time Search Input
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      toggleSearchClearButton();
      renderProducts();
    });
  }

  // Clear Search Button (small inline circle button)
  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        state.searchQuery = "";
        toggleSearchClearButton();
        searchInput.focus();
        renderProducts();
      }
    });
  }

  // Permanent full-width Clear button matching screenshot mockup
  if (searchBtnClear) {
    searchBtnClear.addEventListener("click", () => {
      resetAllFilters();
    });
  }

  // No Results State Reset button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", resetAllFilters);
  }

  // Event delegation for Product Grid (Add to Cart buttons)
  if (productGridContainer) {
    productGridContainer.addEventListener("click", handleProductGridClick);
  }

  // Cart Button Click - opens the Cart Drawer
  if (navCartBtn) {
    navCartBtn.addEventListener("click", () => {
      toggleCartDrawer(true);
    });
  }

  // Search Button Click - scroll to search-input and focus it
  if (navSearchBtn) {
    navSearchBtn.addEventListener("click", () => {
      navigateToMenu();
    });
  }

  // Mobile Floating Bottom Navigation Button Click Events
  if (floatHomeBtn) {
    floatHomeBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  if (floatSearchBtn) {
    floatSearchBtn.addEventListener("click", () => {
      navigateToMenu();
    });
  }
  if (floatCartBtn) {
    floatCartBtn.addEventListener("click", () => {
      toggleCartDrawer(true);
    });
  }

  // Toggle Mobile Floating Bar on window scrolling event (Only for mobile sized viewports < 768px)
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    if (!mobileFloatBar) return;
    const currentY = window.scrollY;
    const isScrollingUp = currentY < lastScrollY;
    if (window.innerWidth < 768) {
      if (currentY > 0) {
        mobileFloatBar.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
        mobileFloatBar.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
      } else {
        mobileFloatBar.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
        mobileFloatBar.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      }
    } else {
      mobileFloatBar.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
      mobileFloatBar.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
    }
    lastScrollY = currentY;
  });

  // Close Cart Drawer
  if (cartDrawerClose) {
    cartDrawerClose.addEventListener("click", () => {
      toggleCartDrawer(false);
    });
  }
  if (cartDrawerBackdrop) {
    cartDrawerBackdrop.addEventListener("click", () => {
      toggleCartDrawer(false);
    });
  }

  // Clear All Cart Items At Once
  const clearCartBtn = document.getElementById("clear-cart-btn");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (Object.keys(state.cart).length === 0) {
        showToastNotification("Platter is Empty", "There are no items to clear.");
        return;
      }
      state.cart = {};
      renderCart();
      showToastNotification("Platter Cleared", "All selections have been cleared.");
    });
  }

  // Grid/List View modes toggles
  if (viewBtnGrid) {
    viewBtnGrid.addEventListener("click", () => {
      state.viewMode = "grid";
      updateViewToggleStyles();
      renderProducts();
    });
  }
  if (viewBtnList) {
    viewBtnList.addEventListener("click", () => {
      state.viewMode = "list";
      updateViewToggleStyles();
      renderProducts();
    });
  }

  // Secure checkout triggers
  if (cartCheckoutBtn) {
    cartCheckoutBtn.addEventListener("click", () => {
      if (Object.keys(state.cart).length === 0) {
        showNotification("Please select items to beginning ordering!");
        return;
      }
      toggleCartDrawer(false);
      openCheckoutModal();
    });
  }

  // Checkout dialog closers
  if (checkoutClose) {
    checkoutClose.addEventListener("click", closeCheckoutModal);
  }
  if (checkoutBackdrop) {
    checkoutBackdrop.addEventListener("click", closeCheckoutModal);
  }

  // Handle Order Submit Form details. Complete the order, wipe state.cart, reset triggers.
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const customerName = checkoutNameInput ? checkoutNameInput.value.trim() : "Guest chef";
      const customerPhone = checkoutPhoneInput ? checkoutPhoneInput.value.trim() : "";
      
      // Calculate final summary
      let totalAmount = 0;
      Object.keys(state.cart).forEach((id) => {
        const item = state.products.find((p) => p.id === id);
        if (item) {
          totalAmount += item.price * state.cart[id];
        }
      });
      
      // Display magnificent real order response notifications
      showOrderSuccessNotification(customerName, totalAmount);
      
      // Clear order cart completely!
      state.cart = {};
      renderCart();
      closeCheckoutModal();
      checkoutForm.reset();
    });
  }

  // Mobile nav toggler
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener("click", () => {
      if (mobileNavMenu) {
        mobileNavMenu.classList.toggle("hidden");
      }
    });
  }

  // Floating cards click listeners
  const floatingCard1 = document.getElementById("hero-floating-card-1");
  const floatingCard2 = document.getElementById("hero-floating-card-2");
  if (floatingCard1) {
    floatingCard1.addEventListener("click", () => {
      addToCart("fp-02", 1);
    });
  }
  if (floatingCard2) {
    floatingCard2.addEventListener("click", () => {
      addToCart("fp-05", 1);
    });
  }

  // Export addToCart helper globally
  window.addToCart = addToCart;
}

// Reset both search query and category filters to default
function resetAllFilters() {
  state.searchQuery = "";
  state.selectedCategory = "All Items";
  
  if (searchInput) {
    searchInput.value = "";
    toggleSearchClearButton();
  }
  
  // Update categories selection visual state
  updateCategoryActiveState();
  renderProducts();
}

// Show/hide search clear ‘✕’ button depending on input content
function toggleSearchClearButton() {
  if (searchClearBtn) {
    if (state.searchQuery.length > 0) {
      searchClearBtn.classList.remove("opacity-0", "pointer-events-none");
    } else {
      searchClearBtn.classList.add("opacity-0", "pointer-events-none");
    }
  }
}

// Render the Left Sidebar Category Buttons Dynamically
function renderCategories() {
  if (!categoryListContainer) return;

  // Uniquely identify the categorizations requested
  const categories = [
    "All Items",
    "Fried Pork",
    "Grilled Pork",
    "Rice Meals",
    "Banku Meals",
    "Barbecue",
    "Extras",
    "Drinks"
  ];

  categoryListContainer.innerHTML = "";

  categories.forEach((category) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.id = `cat-${category.replace(/\s+/g, "-").toLowerCase()}`;
    btn.className = `category-btn w-full text-left px-4 py-2.5 rounded text-xs font-bold tracking-wide uppercase transition-all duration-200 border select-none cursor-pointer flex items-center justify-between`;
    
    btn.textContent = category;

    // Apply active class if selected (gold color background, dark text)
    if (category === state.selectedCategory) {
      btn.classList.add("bg-[#f3ba0b]", "text-black", "border-[#f3ba0b]", "shadow-md");
    } else {
      btn.classList.add("text-zinc-300", "bg-zinc-900/70", "border-zinc-800", "hover:text-white", "hover:bg-zinc-850/50");
    }

    // Set click trigger
    btn.addEventListener("click", () => {
      state.selectedCategory = category;
      updateCategoryActiveState();
      renderProducts();
    });

    categoryListContainer.appendChild(btn);
  });
}

// Update UI active buttons state without full re-rendering of categories block
function updateCategoryActiveState() {
  const buttons = categoryListContainer.querySelectorAll(".category-btn");
  buttons.forEach((btn) => {
    const categoryName = btn.textContent.trim();

    if (categoryName === state.selectedCategory) {
      btn.className = `category-btn w-full text-left px-4 py-2.5 rounded text-xs font-black tracking-wide uppercase transition-all duration-200 border border-[#f3ba0b] bg-[#f3ba0b] text-black shadow-md flex items-center justify-between`;
    } else {
      btn.className = `category-btn w-full text-left px-4 py-2.5 rounded text-xs font-bold tracking-wide uppercase transition-all duration-200 border border-zinc-800 text-zinc-300 bg-zinc-900/70 hover:text-white hover:bg-zinc-850/50 flex items-center justify-between`;
    }
  });
}

// Render dynamic food matches into product-grid supporting Grid vs List layout modes
function renderProducts() {
  if (!productGridContainer) return;

  // Update Category text badge in the header
  if (headerCategoryBadge) {
    headerCategoryBadge.textContent = state.selectedCategory;
  }

  // Perform Combined Filtering
  const filtered = state.products.filter((item) => {
    // Exclude special section-only items from the dynamic Full Menu categories list
    if (["Combo Deals", "Most Ordered", "Extra Fixings"].includes(item.category)) {
      return false;
    }

    // 1. Category Filter
    const matchesCategory =
      state.selectedCategory === "All Items" || item.category === state.selectedCategory;

    // 2. Search Text Filter (Case insensitive match of name)
    const query = state.searchQuery.trim().toLowerCase();
    const matchesSearch = item.name.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Handle empty match states beautifully
  if (filtered.length === 0) {
    productGridContainer.className = "col-span-full py-16 flex flex-col items-center justify-center text-center animate-fade-in";
    productGridContainer.innerHTML = `
      <div class="p-4 rounded-full bg-zinc-900/80 border border-zinc-800 mb-4 select-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 class="font-display text-xl font-semibold text-zinc-100 mb-1">No matches found</h3>
      <p class="text-sm text-zinc-400 max-w-sm mb-6">We couldn't find any food items matching "${escapeHTML(state.searchQuery)}" under "${state.selectedCategory}".</p>
      <button id="grid-reset-btn" class="px-5 py-2.5 bg-zinc-800 text-zinc-200 rounded-md text-sm font-medium hover:bg-zinc-700 transition-colors duration-200 cursor-pointer">
        Reset filters & view all menu
      </button>
    `;
    
    const gridResetBtn = document.getElementById("grid-reset-btn");
    if (gridResetBtn) {
      gridResetBtn.addEventListener("click", resetAllFilters);
    }
    return;
  }

  // Restore dynamic template columns for products grid based on List vs Grid layout selection
  if (state.viewMode === "list") {
    productGridContainer.className = "flex flex-col gap-4.5";
  } else {
    productGridContainer.className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in";
  }
  
  productGridContainer.innerHTML = "";

  // Map elements inside
  filtered.forEach((item, index) => {
    const card = document.createElement("div");
    card.id = `product-card-${item.id}`;
    card.style.animationDelay = `${index * 25}ms`;

    if (state.viewMode === "list") {
      // Horizontal Row Representation (List view format with premium visual rhythm)
      card.className = "food-card animate-fade-in bg-brand-card rounded-lg border border-zinc-800/80 overflow-hidden flex flex-row items-center p-3.5 sm:p-5 gap-4 sm:gap-6 relative group";
      card.innerHTML = `
        <!-- Thumbnail visual on left -->
        <div class="relative w-20 h-20 sm:w-32 sm:h-24 shrink-0 overflow-hidden rounded bg-zinc-950 select-none">
          <img 
            src="${item.image}" 
            alt="${escapeHTML(item.name)}" 
            class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 filter brightness-[0.85] contrast-[1.02]"
            referrerpolicy="no-referrer"
            loading="lazy"
          >
          <span class="font-mono text-[7px] tracking-[0.1em] font-medium text-white/50 bg-black/60 px-1 py-0.5 rounded-xs absolute bottom-1 right-1 uppercase">
            ${escapeHTML(item.stamp)}
          </span>
        </div>
        
        <!-- Info mid-section -->
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 mb-1">
            <span class="py-0.5 px-1.5 bg-zinc-900 border border-zinc-800 text-[8px] sm:text-[9px] uppercase font-mono tracking-wider font-semibold text-zinc-400 rounded-xs select-none">
              ${item.category}
            </span>
          </div>
          <h3 class="font-display font-bold text-xs sm:text-base text-zinc-100 truncate group-hover:text-white transition-colors">
            ${escapeHTML(item.name)}
          </h3>
          <p class="text-[10px] sm:text-xs text-zinc-400 font-sans line-clamp-1 sm:line-clamp-2 mt-1 leading-normal sm:leading-relaxed">
            ${escapeHTML(item.description)}
          </p>
        </div>

        <!-- Price and Actions right-section -->
        <div class="flex flex-col items-end gap-3 shrink-0 pl-2">
          <span class="font-display font-black text-sm sm:text-lg text-amber-500">
            GH₵${item.price.toFixed(2)}
          </span>
          <div class="flex items-center gap-1.5 sm:gap-2">
            <button 
              data-id="${item.id}"
              data-name="${escapeAttribute(item.name)}"
              type="button" 
              class="add-to-cart-btn px-3 py-1.5 bg-brand-red hover:bg-brand-red-light text-white rounded text-[10px] font-bold tracking-wider uppercase transition-all duration-200 transform active:scale-95 cursor-pointer flex items-center gap-1 border border-brand-red hover:border-brand-red-light shadow-sm"
            >
              Add
            </button>
            <button 
              data-id="${item.id}"
              type="button" 
              class="quick-view-btn p-2 bg-[#faf5e6]/25 hover:bg-[#faf5e6] text-[#faf5e6] hover:text-zinc-950 font-bold border border-[#faf5e6]/45 hover:border-[#faf5e6] rounded text-xs transition-all duration-200"
              title="Quick view details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>
      `;
    } else {
      // Standard Cards Grid Representation
      card.className = "food-card animate-fade-in bg-brand-card rounded-lg border border-zinc-800/80 overflow-hidden flex flex-col relative group";
      card.innerHTML = `
        <!-- Thumbnail Visual & Image Box with beautiful hover zoom transition -->
        <div class="relative w-full aspect-video overflow-hidden bg-zinc-950 select-none group/img">
          <img 
            src="${item.image}" 
            alt="${escapeHTML(item.name)}" 
            class="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-110 filter brightness-[0.85] contrast-[1.02]"
            referrerpolicy="no-referrer"
            loading="lazy"
          >
          <!-- Category Badge overlay -->
          <span class="font-mono text-[9px] tracking-[0.2em] font-extrabold text-white bg-black/60 border border-zinc-900/50 px-2 py-0.5 rounded-sm absolute top-3 left-3 uppercase">
            ${item.category}
          </span>
          <!-- Watermark stamp -->
          <span class="font-mono text-[9px] tracking-[0.1em] font-medium text-white/50 bg-black/55 px-1.5 py-0.5 rounded-xs absolute bottom-3 right-3 uppercase">
            ${escapeHTML(item.stamp)}
          </span>
        </div>

        <!-- Detail Card Body Info -->
        <div class="p-5 flex-1 flex flex-col">
          <div class="flex items-start justify-between gap-2 mb-2">
            <span class="inline-block py-0.5 px-2 bg-zinc-900 border border-zinc-800 text-[10px] uppercase font-mono tracking-wider font-semibold text-zinc-300 rounded-sm select-none">
              ${escapeHTML(item.category)}
            </span>
            <span class="font-display font-medium text-lg text-amber-500 shrink-0">
              GH₵${item.price.toFixed(2)}
            </span>
          </div>

          <h3 class="font-display text-base font-bold text-zinc-100 mb-1 leading-tight tracking-tight hover:text-white transition-colors duration-200">
            ${escapeHTML(item.name)}
          </h3>

          <p class="text-xs text-zinc-400 font-sans line-clamp-2 mt-1 mb-5 flex-1 leading-relaxed">
            ${escapeHTML(item.description)}
          </p>

          <!-- Twin Trigger Actions: Add to Cart & Quick View Button (With Yellow Hover Effect) -->
          <div class="mt-auto flex gap-2 w-full">
            <button 
              data-id="${item.id}"
              data-name="${escapeAttribute(item.name)}"
              type="button" 
              class="add-to-cart-btn flex-1 py-2.5 bg-brand-red hover:bg-brand-red-light text-white rounded text-xs font-semibold tracking-wider uppercase transition-all duration-300 transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 border border-brand-red hover:border-brand-red-light shadow-sm focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              Add
            </button>
            
            <button 
              data-id="${item.id}"
              type="button" 
              class="quick-view-btn py-2.5 px-3 bg-[#faf5e6]/25 hover:bg-[#faf5e6] text-[#faf5e6] hover:text-zinc-950 border border-[#faf5e6]/45 hover:border-[#faf5e6] rounded text-xs font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1 focus:outline-none"
              title="Quick view product details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View
            </button>
          </div>
        </div>
      `;
    }

    productGridContainer.appendChild(card);
  });
}

// Handle dynamic click delegating inside the product-grid area
function handleProductGridClick(e) {
  const addToCartBtn = e.target.closest(".add-to-cart-btn");
  const quickViewBtn = e.target.closest(".quick-view-btn");

  if (addToCartBtn) {
    const itemId = addToCartBtn.getAttribute("data-id");
    addToCart(itemId, 1);
  } else if (quickViewBtn) {
    const itemId = quickViewBtn.getAttribute("data-id");
    openQuickView(itemId);
  }
}

// Open Quick View Modal populated with product details
function openQuickView(itemId) {
  const item = PRODUCTS.find((p) => p.id === itemId);
  if (!item || !quickviewModal) return;

  // Populate info nodes
  modalImage.src = item.image;
  modalImage.alt = item.name;
  modalStamp.textContent = item.stamp || "PREMIUM SELECTION";
  modalCategory.textContent = item.category;
  modalId.textContent = `#${item.id.toUpperCase()}`;
  modalName.textContent = item.name;
  modalPrice.textContent = `GH₵${item.price.toFixed(2)}`;
  modalDescription.textContent = item.description;

  // Configure action trigger button
  modalAddBtn.setAttribute("data-id", item.id);
  modalAddBtn.setAttribute("data-name", item.name);
  modalAddBtn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
    Add to Cart • GH₵${item.price.toFixed(2)}
  `;

  // Display modal smoothly using backdrop filters and CSS transitions
  quickviewModal.classList.remove("opacity-0", "pointer-events-none");
  quickviewModal.classList.add("opacity-100");
  
  const modalPanel = quickviewModal.querySelector(".relative.bg-brand-card");
  if (modalPanel) {
    modalPanel.classList.remove("scale-95");
    modalPanel.classList.add("scale-100");
  }

  // Prevent background scroll
  document.body.classList.add("overflow-hidden");

  // Attach escape listener dynamically
  document.addEventListener("keydown", handleQuickviewKeyDown);
}

// Close Quick View Modal sequence
function closeQuickView() {
  if (!quickviewModal) return;

  quickviewModal.classList.remove("opacity-100");
  quickviewModal.classList.add("opacity-0", "pointer-events-none");

  const modalPanel = quickviewModal.querySelector(".relative.bg-brand-card");
  if (modalPanel) {
    modalPanel.classList.remove("scale-100");
    modalPanel.classList.add("scale-95");
  }

  // Restore scrollability
  document.body.classList.remove("overflow-hidden");

  // Remove listener
  document.removeEventListener("keydown", handleQuickviewKeyDown);
}

// Escape key press handler for Quickview closing
function handleQuickviewKeyDown(e) {
  if (e.key === "Escape") {
    closeQuickView();
  }
}

// Attach listeners for modal controls
document.addEventListener("DOMContentLoaded", () => {
  if (quickviewClose) {
    quickviewClose.addEventListener("click", closeQuickView);
  }
  if (quickviewBackdrop) {
    quickviewBackdrop.addEventListener("click", closeQuickView);
  }
  if (modalAddBtn) {
    modalAddBtn.addEventListener("click", () => {
      const itemId = modalAddBtn.getAttribute("data-id");
      addToCart(itemId, 1);
      closeQuickView();
    });
  }
});

// CART & CHECKOUT SYSTEMS INTERACTIVE CORE

/**
 * Close cart and scroll to the searching / filtering menu structure
 */
window.navigateToMenu = function() {
  toggleCartDrawer(false);
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => {
      searchInput.focus();
    }, 605);
  }
};

/**
 * Slide-over Cart Drawer Visibility controller
 */
function toggleCartDrawer(isOpen) {
  if (!cartDrawer) return;

  if (isOpen) {
    cartDrawer.classList.remove("opacity-0", "pointer-events-none");
    cartDrawer.classList.add("opacity-100");
    if (cartDrawerPanel) {
      cartDrawerPanel.classList.remove("translate-x-full");
      cartDrawerPanel.classList.add("translate-x-0");
    }
    document.body.classList.add("overflow-hidden");
  } else {
    if (cartDrawerPanel) {
      cartDrawerPanel.classList.remove("translate-x-0");
      cartDrawerPanel.classList.add("translate-x-full");
    }
    setTimeout(() => {
      cartDrawer.classList.remove("opacity-100");
      cartDrawer.classList.add("opacity-0", "pointer-events-none");
    }, 200);
    document.body.classList.remove("overflow-hidden");
  }
}

/**
 * Add product element to cart or increase quantity
 */
function addToCart(itemId, quantity = 1) {
  if (!itemId) return;
  
  const product = state.products.find((p) => p.id === itemId);
  if (!product) return;

  if (state.cart[itemId]) {
    state.cart[itemId] += quantity;
  } else {
    state.cart[itemId] = quantity;
  }

  // Render upgraded cart layout, totals and badging
  renderCart();
  
  // Show standard premium toast feedback notification
  showToastNotification(product.name, `Added to Platter!`);
}

/**
 * Update singular item quantity inside the cart
 */
function updateCartItemQuantity(itemId, change) {
  if (!state.cart[itemId]) return;

  state.cart[itemId] += change;

  if (state.cart[itemId] <= 0) {
    delete state.cart[itemId];
  }

  renderCart();
}

/**
 * Remove item directly from current order platter
 */
function removeCartItem(itemId) {
  if (state.cart[itemId]) {
    delete state.cart[itemId];
    renderCart();
  }
}

/**
 * Render slide-over shopping platter items list, badge counts and subtotal
 */
function renderCart() {
  localStorage.setItem("pnp_cart", JSON.stringify(state.cart));
  if (!cartItemsContainer || !navCartBadge) return;

  let totalCount = 0;
  let subtotalPrice = 0;
  const itemIds = Object.keys(state.cart);

  // Clear previous markup list
  cartItemsContainer.innerHTML = "";

  if (itemIds.length === 0) {
    // Elegant Empty cart display structure
    cartItemsContainer.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center p-6 animate-fade-in">
        <div class="p-4 rounded-full bg-zinc-900 border border-zinc-855 mb-4 select-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#f3ba0b]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
        </div>
        <h4 class="font-display text-base font-bold text-zinc-100 uppercase mb-1">Your cart is empty...</h4>
        <p class="text-xs text-zinc-400 max-w-xs leading-relaxed font-sans">
          Choose from our prime wood-fired grilled options and cold drinks to start your order!
        </p>
        <button 
          type="button" 
          onclick="navigateToMenu()" 
          class="mt-6 px-5 py-2.5 bg-[#faf5e6] hover:bg-[#ebdcb9] text-zinc-950 text-[11px] font-black uppercase tracking-widest rounded transition-all duration-200 cursor-pointer focus:outline-none shadow-md flex items-center justify-center gap-2 active:scale-[0.97]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Browse Menu
        </button>
      </div>
    `;
    
    // Disable Secure order platter button if selection is empty
    if (cartCheckoutBtn) {
      cartCheckoutBtn.classList.add("opacity-50", "cursor-not-allowed");
      cartCheckoutBtn.setAttribute("disabled", "true");
    }
  } else {
    // Populate active selection platter
    const container = document.createElement("div");
    container.className = "space-y-4 animate-fade-in";
    
    itemIds.forEach((id) => {
      const product = state.products.find((p) => p.id === id);
      if (!product) return;

      const qty = state.cart[id];
      totalCount += qty;
      subtotalPrice += product.price * qty;

      const itemCard = document.createElement("div");
      itemCard.className = "flex items-center gap-3.5 bg-black/40 border border-zinc-900 rounded p-3 relative group/item";
      itemCard.innerHTML = `
        <div class="w-12 h-12 rounded overflow-hidden shrink-0 bg-zinc-900">
          <img src="${product.image}" alt="${escapeHTML(product.name)}" class="w-full h-full object-cover" referrerpolicy="no-referrer">
        </div>
        
        <div class="flex-1 min-w-0">
          <h4 class="font-display font-bold text-sm text-zinc-100 truncate mt-0.5" title="${escapeHTML(product.name)}">
            ${escapeHTML(product.name)}
          </h4>
          <span class="text-xs text-amber-500 font-mono tracking-wide mt-1 block">
            GH₵${product.price.toFixed(2)} each
          </span>
        </div>

        <div class="flex flex-col items-end gap-2 shrink-0">
          <!-- Quantity Adjusters -->
          <div class="flex items-center bg-zinc-950 border border-zinc-800 rounded p-0.5">
            <button 
              type="button" 
              class="qty-btn-minus text-zinc-450 hover:text-white px-1.5 py-0.5 text-xs font-mono rounded cursor-pointer leading-none"
              data-id="${product.id}"
            >
              -
            </button>
            <span class="px-2 text-xs font-mono font-bold text-zinc-200 min-w-[14px] text-center select-none">
              ${qty}
            </span>
            <button 
              type="button" 
              class="qty-btn-plus text-zinc-450 hover:text-white px-1.5 py-0.5 text-xs font-mono rounded cursor-pointer leading-none"
              data-id="${product.id}"
            >
              +
            </button>
          </div>

          <!-- Total price -->
          <span class="text-[13px] font-display font-extrabold text-zinc-200">
            GH₵ ${(product.price * qty).toFixed(2)}
          </span>
        </div>

        <!-- Absolute item delete trigger -->
        <button 
          type="button" 
          class="qty-btn-remove text-zinc-650 hover:text-brand-red absolute -top-1 -right-1 p-1 bg-black rounded border border-zinc-900 opacity-0 group-hover/item:opacity-100 transition-opacity cursor-pointer text-[9px]"
          data-id="${product.id}"
          title="Remove from Platter"
        >
          ✕
        </button>
      `;

      container.appendChild(itemCard);
    });

    cartItemsContainer.appendChild(container);

    // Attach listeners dynamically to the rendered controller elements
    const minusButtons = cartItemsContainer.querySelectorAll(".qty-btn-minus");
    minusButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        updateCartItemQuantity(id, -1);
      });
    });

    const plusButtons = cartItemsContainer.querySelectorAll(".qty-btn-plus");
    plusButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        updateCartItemQuantity(id, 1);
      });
    });

    const removeButtons = cartItemsContainer.querySelectorAll(".qty-btn-remove");
    removeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        removeCartItem(id);
      });
    });

    // Enable secure order button if selected selection contains any elements
    if (cartCheckoutBtn) {
      cartCheckoutBtn.classList.remove("opacity-50", "cursor-not-allowed");
      cartCheckoutBtn.removeAttribute("disabled");
    }
  }

  // Update dynamic badges and prices
  navCartBadge.textContent = totalCount;
  if (floatCartBadge) {
    floatCartBadge.textContent = totalCount;
  }
  if (cartSubtotal) {
    cartSubtotal.textContent = `GH₵${subtotalPrice.toFixed(2)}`;
  }

  // Add subtle pulse effect on selection counters if greater than zero
  if (totalCount > 0) {
    navCartBadge.classList.add("scale-110");
    if (floatCartBadge) {
      floatCartBadge.classList.add("scale-110");
    }
    setTimeout(() => {
      navCartBadge.classList.remove("scale-110");
      if (floatCartBadge) {
        floatCartBadge.classList.remove("scale-110");
      }
    }, 200);
  }
}

/**
 * Open Checkout Dialog panel and populate item arrays
 */
function openCheckoutModal() {
  if (!checkoutModal || !checkoutSummaryList || !checkoutTotalPrice) return;

  let totalAmount = 0;
  checkoutSummaryList.innerHTML = "";

  Object.keys(state.cart).forEach((id) => {
    const item = state.products.find((p) => p.id === id);
    if (!item) return;

    const qty = state.cart[id];
    const cost = item.price * qty;
    totalAmount += cost;

    const div = document.createElement("div");
    div.className = "flex items-center justify-between text-zinc-300 text-xs py-0.5 select-none";
    div.innerHTML = `
      <span class="truncate pr-4">${escapeHTML(item.name)} <span class="text-zinc-500 font-mono text-[10px]">x${qty}</span></span>
      <span class="font-mono text-zinc-100 shrink-0">GH₵${cost.toFixed(2)}</span>
    `;
    checkoutSummaryList.appendChild(div);
  });

  checkoutTotalPrice.textContent = `GH₵${totalAmount.toFixed(2)}`;

  // Display dialog
  checkoutModal.classList.remove("opacity-0", "pointer-events-none");
  checkoutModal.classList.add("opacity-100");
  
  const modalPanel = checkoutModal.querySelector(".relative.bg-brand-card");
  if (modalPanel) {
    modalPanel.classList.remove("scale-95");
    modalPanel.classList.add("scale-100");
  }

  document.body.classList.add("overflow-hidden");
}

/**
 * Shut checkout dialog down
 */
function closeCheckoutModal() {
  if (!checkoutModal) return;

  checkoutModal.classList.remove("opacity-100");
  checkoutModal.classList.add("opacity-0", "pointer-events-none");

  const modalPanel = checkoutModal.querySelector(".relative.bg-brand-card");
  if (modalPanel) {
    modalPanel.classList.remove("scale-100");
    modalPanel.classList.add("scale-95");
  }

  document.body.classList.remove("overflow-hidden");
}

/**
 * Update UI view modes buttons stylings (Grid vs List states)
 */
function updateViewToggleStyles() {
  if (!viewBtnGrid || !viewBtnList) return;

  if (state.viewMode === "list") {
    viewBtnList.className = "p-1.5 rounded transition-all cursor-pointer focus:outline-none text-[#f3ba0b] bg-zinc-900 border border-zinc-808 border-zinc-800";
    viewBtnGrid.className = "p-1.5 rounded transition-all cursor-pointer focus:outline-none text-zinc-550 hover:text-zinc-200";
  } else {
    viewBtnGrid.className = "p-1.5 rounded transition-all cursor-pointer focus:outline-none text-[#f3ba0b] bg-zinc-900 border border-zinc-808 border-zinc-800";
    viewBtnList.className = "p-1.5 rounded transition-all cursor-pointer focus:outline-none text-zinc-550 hover:text-zinc-200";
  }
}

/**
 * Show a premium general notification toast
 */
function showToastNotification(title, message) {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "flex items-center gap-3.5 bg-[#f3ba0b] border-l-4 border-neutral-950 text-neutral-950 p-4 rounded shadow-2xl shadow-black/40 border border-amber-600/20 transition-all duration-300 translate-y-3 opacity-0 select-none max-w-sm w-full";
  
  toast.innerHTML = `
    <div class="p-1 rounded bg-neutral-950/15 text-neutral-950">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    </div>
    <div class="flex-1">
      <h4 class="text-[10px] font-mono font-bold text-neutral-900 font-black uppercase tracking-widest leading-none">PARK N PORK GRILL</h4>
      <p class="text-xs text-neutral-950 font-black mt-1 leading-normal">${escapeHTML(title)} <span class="text-neutral-900 font-semibold text-xs font-sans">${escapeHTML(message)}</span></p>
    </div>
    <button class="toast-close text-neutral-800 hover:text-black font-bold transition-colors cursor-pointer text-xs focus:outline-none p-1">
      ✕
    </button>
  `;

  // Manual close
  const close = toast.querySelector(".toast-close");
  if (close) {
    close.addEventListener("click", () => {
      dismissToast(toast);
    });
  }

  toastContainer.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
  });

  setTimeout(() => { dismissToast(toast); }, 4000);
}

/**
 * Show a highly detailed visual success banner once order has been secured
 */
function showOrderSuccessNotification(customerName, orderTotalPrice) {
  if (!toastContainer) return;

  const toast = document.createElement("div");
  toast.className = "flex flex-col gap-3.5 bg-zinc-950 border-t-4 border-amber-500 text-zinc-100 p-5 rounded-lg bg-opacity-98 shadow-2xl border border-zinc-800/80 transition-all duration-305 translate-y-3 opacity-0 select-none max-w-sm w-full";
  
  toast.innerHTML = `
    <div class="flex items-start gap-3">
      <div class="p-2 rounded-full bg-amber-500/10 text-amber-500 shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </div>
      <div class="flex-1">
        <h4 class="text-[11px] font-mono font-black text-[#f3ba0b] uppercase tracking-wider">WOOD-FIRED FEAST SECURED!</h4>
        <p class="text-xs text-zinc-200 mt-1 leading-normal font-bold">
          Congratulations ${escapeHTML(customerName)}!
        </p>
        <p class="text-[11px] text-zinc-400 mt-1.5 leading-relaxed font-sans">
          Your order platter totaling <span class="text-amber-500 font-bold font-mono">GH₵${orderTotalPrice.toFixed(2)}</span> has been successfully sent to the hot kitchen grill.
        </p>
      </div>
      <button class="toast-close text-zinc-500 hover:text-white transition-colors cursor-pointer text-xs focus:outline-none p-1 shrink-0">
        ✕
      </button>
    </div>
    
    <div class="h-px bg-zinc-900 w-full"></div>
    
    <div class="bg-zinc-900/60 p-2.5 rounded border border-zinc-850/40 text-[10px] text-zinc-400 font-mono tracking-wide space-y-1">
      <div class="flex justify-between"><span>SPOT:</span><span class="text-zinc-200 font-bold uppercase">${escapeHTML(checkoutServiceSelect ? checkoutServiceSelect.value : "pickup")}</span></div>
      <div class="flex justify-between"><span>STATUS:</span><span class="text-green-500 font-bold">PREPARING FEAST</span></div>
    </div>
  `;

  // Manual close
  const close = toast.querySelector(".toast-close");
  if (close) {
    close.addEventListener("click", () => {
      dismissToast(toast);
    });
  }

  toastContainer.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
  });

  // Keep success notification on screen longer for a premium feeling (7.5 seconds)
  setTimeout(() => { dismissToast(toast); }, 7500);
}

// Display Premium Toast Notification explaining Step 1 scope restrictions
function showNotification(itemName) {
  showToastNotification(itemName, "added! Platter lists are dynamically updated.");
}

// Smoothly slide out and dispose toast blocks
function dismissToast(toastEl) {
  if (!toastEl || !toastEl.parentNode) return;
  
  toastEl.style.transform = "translateY(-8px)";
  toastEl.style.opacity = "0";

  setTimeout(() => {
    if (toastEl.parentNode) {
      toastEl.parentNode.removeChild(toastEl);
    }
  }, 300);
}

// Security sanitizers helper functions preventing injection issues
function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Helper to escape attribute values cleanly
function escapeAttribute(str) {
  if (!str) return "";
  return str.replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}


/**
 * Initialize infinite crossfading slide rotation for 3 Hero images and dynamic headlines in sync
 */
function initHeroSlider() {
  const images = document.querySelectorAll(".hero-slider-img");
  const textSlides = document.querySelectorAll(".hero-text-slide");
  const dots = document.querySelectorAll(".hero-dot");
  if (!images.length) return;

  let currentIndex = 0;

  function showSlide(index) {
    // 1. Deactivate old index state
    images[currentIndex].classList.remove("active");
    if (textSlides[currentIndex]) {
      textSlides[currentIndex].classList.remove("active");
    }
    if (dots[currentIndex]) {
      dots[currentIndex].classList.remove("bg-brand-red");
      dots[currentIndex].classList.add("bg-zinc-650");
    }

    // 2. Set new index state
    currentIndex = index;

    // 3. Activate new index state
    images[currentIndex].classList.add("active");
    if (textSlides[currentIndex]) {
      textSlides[currentIndex].classList.add("active");
    }
    if (dots[currentIndex]) {
      dots[currentIndex].classList.remove("bg-zinc-650");
      dots[currentIndex].classList.add("bg-brand-red");
    }
  }

  // Register indicators click navigations
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Cycle automatically every 5 seconds
  setInterval(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    showSlide(nextIndex);
  }, 5000);
}
