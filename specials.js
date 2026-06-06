/**
 * PARK N PORK — Special Offers Script
 * Implements high-fidelity promotional mechanisms, interactive cart sync, live countdown, and animated reveals.
 */

// 1. PRODUCT DIRECTORY (Matches database indices in script.js)
const SPECIAL_PRODUCTS = {
  "spec-feast": {
    name: "Weekend Pork Feast",
    price: 75,
    original: 90,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop&q=80"
  },
  "mega-pork-madness": {
    name: "Mega Pork Madness Bundle",
    price: 100,
    original: 120,
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=600&auto=format&fit=crop&q=80"
  },
  "spec-family": {
    name: "Family Pork Pack",
    price: 150,
    original: 170,
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=80"
  },
  "lunch-rush-menu-link": {
    name: "Lunch Rush Special",
    price: 45,
    original: 50,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80"
  },
  "spec-couples": {
    name: "Couples Combo",
    price: 120,
    original: 140,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=80"
  },
  "spec-office": {
    name: "Office Lunch Bundle",
    price: 260,
    original: 300,
    image: "https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?w=100&auto=format&fit=crop&q=80"
  },
  "fp-02": {
    name: "Fried Pork + Yam Chips",
    price: 60,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80"
  },
  "gp-02": {
    name: "Grilled Pork + Jollof Rice",
    price: 70,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop&q=80"
  },
  "bq-01": {
    name: "Pork BBQ Stick",
    price: 40,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80"
  },
  "fp-03": {
    name: "Fried Pork + Banku (1 ball)",
    price: 55,
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=80"
  }
};

// 2. STATE CORES
let cart = {};

// 3. EVENT LISTENERS & INITS
document.addEventListener("DOMContentLoaded", () => {
  // Load synchronized local storage cart
  loadCartState();

  // Initialize features
  initCountdownTimer();
  initSuperDealSlider();
  initBuyMoreSaveMore();
  setupScrollReveal();
  setupPromoScrollEffects();
  setupCartDrawerAndClicks();
  setupWhatsAppCommunity();
  
  // Render cart visual counters initially
  renderLocalCart();
});

// Load cart state from localStorage
function loadCartState() {
  const stored = localStorage.getItem("pnp_cart");
  if (stored) {
    try {
      cart = JSON.parse(stored);
    } catch (e) {
      cart = {};
    }
  } else {
    cart = {};
  }
}

// Save cart state to localStorage and render cart UI
function saveCartAndRender() {
  localStorage.setItem("pnp_cart", JSON.stringify(cart));
  renderLocalCart();
  
  // Trigger update event if on same browser window or window reload
  window.dispatchEvent(new Event('storage'));
}

// 4. THE LIVE COUNTDOWN ENGINE
function initCountdownTimer() {
  const daysEl = document.getElementById("timer-days");
  const hoursEl = document.getElementById("timer-hours");
  const minutesEl = document.getElementById("timer-minutes");
  const secondsEl = document.getElementById("timer-seconds");
  const countdownBox = document.getElementById("countdown-box");

  // Store expiration in localStorage or set to 48 hours in future for live urgency
  let targetTime = localStorage.getItem("pnp_specials_expiration");
  if (!targetTime) {
    const fortyEightHours = 2 * 24 * 60 * 60 * 1000;
    targetTime = Date.now() + fortyEightHours;
    localStorage.setItem("pnp_specials_expiration", targetTime);
  } else {
    targetTime = parseInt(targetTime, 10);
    // If already expired, reset to give fresh live simulation of ticking urgency
    if (targetTime < Date.now()) {
      const fortyEightHours = 2 * 24 * 60 * 60 * 1000;
      targetTime = Date.now() + fortyEightHours;
      localStorage.setItem("pnp_specials_expiration", targetTime);
    }
  }

  function updateTimer() {
    const now = Date.now();
    const distance = targetTime - now;

    if (distance <= 0) {
      if (countdownBox) {
        countdownBox.innerHTML = `
          <div class="col-span-4 text-center py-4 text-[#C0392B] bg-[#C0392B]/10 border border-[#C0392B]/30 rounded-lg font-mono text-sm tracking-widest font-black uppercase">
            ⚠️ WEEKEND DEALS EXPIRED! Check back soon for fresh promotions.
          </div>
        `;
      }
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(d).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');
  }

  // Initial and subsequent tics
  updateTimer();
  setInterval(updateTimer, 1000);
}

// 5. BUY MORE SAVE MORE CALCULATING SLIDERS
function initBuyMoreSaveMore() {
  updateSavingsTiers();
}

function updateSavingsTiers() {
  const trackerSubtotal = document.getElementById("tracker-subtotal");
  const trackerMessage = document.getElementById("tracker-message");
  const progressPercent = document.getElementById("savings-progress-bar");
  
  const tier100 = document.getElementById("tier-100");
  const tier200 = document.getElementById("tier-200");
  const tier300 = document.getElementById("tier-300");

  const tierBadge1 = document.getElementById("tier-badge-1");
  const tierBadge2 = document.getElementById("tier-badge-2");
  const tierBadge3 = document.getElementById("tier-badge-3");

  const statusBadge1 = document.getElementById("tier-status-badge-1");
  const statusBadge2 = document.getElementById("tier-status-badge-2");
  const statusBadge3 = document.getElementById("tier-status-badge-3");

  const priceTag1 = document.getElementById("tier-price-tag-1");
  const priceTag2 = document.getElementById("tier-price-tag-2");
  const priceTag3 = document.getElementById("tier-price-tag-3");

  const marker100 = document.getElementById("marker-100");
  const marker200 = document.getElementById("marker-200");
  const marker300 = document.getElementById("marker-300");

  let subtotal = calculateSubtotalPrice();
  
  if (trackerSubtotal) {
    trackerSubtotal.textContent = `GH₵${subtotal.toFixed(2)}`;
  }

  // Reset helper helper to clear custom styles
  const resetTierCard = (card, badge, status, price, marker, defaultLabel) => {
    if (!card) return;
    card.className = "tier-card bg-black/40 hover:bg-black/60 border border-zinc-900/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300";
    
    if (badge) {
      badge.className = "w-11 h-11 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-[#f3ba0b] flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 transition-all duration-300";
      if (badge.id === "tier-badge-3") {
        badge.className = "w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 transition-all duration-300";
      }
      badge.textContent = defaultLabel;
    }

    if (status) status.classList.add("hidden");

    if (price) {
      price.className = "font-mono font-black text-sm text-[#f3ba0b] bg-[#f3ba0b]/5 border border-[#f3ba0b]/20 px-3 py-1.5 rounded-lg transition-all duration-300";
    }

    if (marker) {
      marker.className = "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center transition-all duration-300 shadow-md";
      const innerDot = marker.querySelector("span");
      if (innerDot) {
        innerDot.className = "w-1.5 h-1.5 rounded-full bg-zinc-700 transition-all duration-300";
      }
    }
  };

  resetTierCard(tier100, tierBadge1, statusBadge1, priceTag1, marker100, "01");
  resetTierCard(tier200, tierBadge2, statusBadge2, priceTag2, marker200, "02");
  resetTierCard(tier300, tierBadge3, statusBadge3, priceTag3, marker300, "Max");

  // Helper inside to set ACHIEVED styling
  const setTierAchieved = (card, badge, status, price, marker) => {
    if (!card) return;
    card.className = "tier-card bg-[#f3ba0b]/5 hover:bg-[#f3ba0b]/10 border border-[#f3ba0b]/60 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 shadow-[0_0_15px_rgba(243,186,11,0.06)]";
    
    if (badge) {
      badge.className = "w-11 h-11 rounded-xl bg-[#f3ba0b] text-zinc-950 flex items-center justify-center font-mono font-black text-xs flex-shrink-0 transition-all duration-300";
      badge.textContent = "✓";
    }

    if (status) status.classList.remove("hidden");

    if (price) {
      price.className = "font-mono font-black text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg transition-all duration-350 tracking-wider uppercase";
    }

    if (marker) {
      marker.className = "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full bg-emerald-500 border-2 border-emerald-400/50 flex items-center justify-center transition-all duration-300 shadow-[0_0_8px_rgba(16,185,129,0.5)]";
      const innerDot = marker.querySelector("span");
      if (innerDot) {
        innerDot.className = "w-1.5 h-1.5 rounded-full bg-white";
      }
    }
  };

  // Helper inside to set ACTIVE TARGET styling
  const setTierTarget = (card, price, marker) => {
    if (!card) return;
    card.className = "tier-card bg-zinc-900/40 hover:bg-zinc-900/60 border border-yellow-500/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 scale-[1.01] shadow-[0_4px_20px_rgba(0,0,0,0.5)]";

    if (price) {
      price.className = "font-mono font-black text-sm text-black bg-[#f3ba0b] border border-[#f3ba0b] px-3 py-1.5 rounded-lg transition-all duration-300 animate-target-pulse shadow-[0_0_12px_rgba(243,186,11,0.5)]";
    }

    if (marker) {
      marker.className = "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full bg-zinc-950 border-2 border-[#f3ba0b] flex items-center justify-center transition-all duration-300 shadow-[0_0_10px_rgba(243,186,11,0.5)]";
      const innerDot = marker.querySelector("span");
      if (innerDot) {
        innerDot.className = "w-1.5 h-1.5 rounded-full bg-[#f3ba0b]";
      }
    }
  };

  let percentage = 0;
  let message = "";

  if (subtotal === 0) {
    percentage = 0;
    message = "Add a delicious Pork meal above to unlock up to 15% in combo discounts!";
    setTierTarget(tier100, priceTag1, marker100);
  } else if (subtotal < 100) {
    percentage = (subtotal / 100) * 33.33;
    const remains = 100 - subtotal;
    message = `Spend <strong>GH₵${remains.toFixed(0)}</strong> more to unlock an absolute <strong>5% Instant Discount</strong>!`;
    setTierTarget(tier100, priceTag1, marker100);
  } else if (subtotal < 200) {
    setTierAchieved(tier100, tierBadge1, statusBadge1, priceTag1, marker100);
    setTierTarget(tier200, priceTag2, marker200);
    percentage = 33.33 + ((subtotal - 100) / 100) * 33.33;
    const remains = 200 - subtotal;
    message = `<strong>5% Discount unlocked!</strong> Add <strong>GH₵${remains.toFixed(0)}</strong> more to claim the premium <strong>10% Off</strong> level!`;
  } else if (subtotal < 300) {
    setTierAchieved(tier100, tierBadge1, statusBadge1, priceTag1, marker100);
    setTierAchieved(tier200, tierBadge2, statusBadge2, priceTag2, marker200);
    setTierTarget(tier300, priceTag3, marker300);
    percentage = 66.66 + ((subtotal - 200) / 100) * 33.33;
    const remains = 300 - subtotal;
    message = `<strong>10% Discount claimed!</strong> Spend another <strong>GH₵${remains.toFixed(0)}</strong> to unlock the ultimate <strong>15% Off Family Special</strong>!`;
  } else {
    setTierAchieved(tier100, tierBadge1, statusBadge1, priceTag1, marker100);
    setTierAchieved(tier200, tierBadge2, statusBadge2, priceTag2, marker200);
    setTierAchieved(tier300, tierBadge3, statusBadge3, priceTag3, marker300);
    percentage = 100;
    message = "<strong>15% maximum discount tier reached!</strong> Enjoy the ultimate local pork feast at the lowest rates possible!";
  }

  if (progressPercent) {
    progressPercent.style.width = `${percentage}%`;
  }
  if (trackerMessage) {
    trackerMessage.innerHTML = message;
  }
}

// Helper to determine exact raw subtotal in Cedi
function calculateSubtotalPrice() {
  let sub = 0;
  Object.keys(cart).forEach(id => {
    const product = SPECIAL_PRODUCTS[id];
    if (product) {
      sub += product.price * cart[id];
    }
  });
  return sub;
}

// 6. ADDTOCART MECHANISMS AND FLYOUT CART
function setupCartDrawerAndClicks() {
  // Mobile drawer clicks and layout triggers
  const cartTriggerBtn = document.getElementById("nav-cart-btn");
  const floatCartBtn = document.getElementById("float-cart-btn");
  const drawerCloseBtn = document.getElementById("cart-drawer-close");
  const backdropOverlay = document.getElementById("cart-drawer-backdrop");
  const checkoutCloseBtn = document.getElementById("checkout-close");
  const checkoutBackdrop = document.getElementById("checkout-backdrop");
  const checkoutBtn = document.getElementById("cart-checkout-btn");

  const toggleCartFn = (isOpen) => {
    const drawer = document.getElementById("cart-drawer");
    const panel = document.getElementById("cart-drawer-panel");
    if (!drawer) return;
    
    if (isOpen) {
      drawer.classList.remove("opacity-0", "pointer-events-none");
      drawer.classList.add("opacity-100");
      if (panel) {
        panel.classList.remove("translate-x-full");
        panel.classList.add("translate-x-0");
      }
    } else {
      if (panel) {
        panel.classList.remove("translate-x-0");
        panel.classList.add("translate-x-full");
      }
      setTimeout(() => {
        drawer.classList.remove("opacity-100");
        drawer.classList.add("opacity-0", "pointer-events-none");
      }, 200);
    }
  };

  if (cartTriggerBtn) cartTriggerBtn.addEventListener("click", () => toggleCartFn(true));
  if (floatCartBtn) floatCartBtn.addEventListener("click", () => toggleCartFn(true));
  if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", () => toggleCartFn(false));
  if (backdropOverlay) backdropOverlay.addEventListener("click", () => toggleCartFn(false));

  // Connect order/add buttons on page
  document.addEventListener("click", (e) => {
    const clicker = e.target.closest(".order-promo-btn");
    if (clicker) {
      const pId = clicker.getAttribute("data-id");
      if (pId && SPECIAL_PRODUCTS[pId]) {
        addItemToCart(pId);
        toggleCartFn(true); // Open drawer instantly for conversion boost
      }
    }
  });

  // Checkout overlay triggers
  const toggleCheckoutFn = (isOpen) => {
    const modal = document.getElementById("checkout-modal");
    if (!modal) return;
    if (isOpen) {
      modal.classList.remove("opacity-0", "pointer-events-none");
      buildCheckoutSummary();
    } else {
      modal.classList.add("opacity-0", "pointer-events-none");
    }
  };

  if (checkoutBtn) checkoutBtn.addEventListener("click", () => {
    toggleCartFn(false);
    setTimeout(() => toggleCheckoutFn(true), 250);
  });
  if (checkoutCloseBtn) checkoutCloseBtn.addEventListener("click", () => toggleCheckoutFn(false));
  if (checkoutBackdrop) checkoutBackdrop.addEventListener("click", () => toggleCheckoutFn(false));

  // Hook Checkout Submit Form
  const checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const customerName = document.getElementById("checkout-name")?.value || "Valued Customer";
      
      // Beautiful completion alert
      const finalDialog = document.createElement("div");
      finalDialog.className = "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fade-in";
      finalDialog.innerHTML = `
        <div class="bg-zinc-950 border border-yellow-500 max-w-md w-full rounded-2xl p-8 text-center shadow-[0_20px_50px_rgba(244,180,0,0.15)]">
          <div class="w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 flex items-center justify-center mx-auto mb-4 select-none">
            <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 class="font-display font-black text-xl text-white uppercase tracking-tight mb-2">Order Placed Successfully!</h4>
          <p class="text-xs text-zinc-400 font-sans mb-6 leading-relaxed">
            Thank you, <strong class="text-zinc-150">${customerName}</strong>! We've received your pork platter reservation. Our grill masters are readying your hot spices!
          </p>
          <button id="close-success-dialog" class="w-full py-3 bg-yellow-500 text-black font-mono font-black text-xs uppercase tracking-widest rounded-lg transition-all transform hover:scale-102 cursor-pointer outline-none">
            Main Menu
          </button>
        </div>
      `;
      document.body.appendChild(finalDialog);

      document.getElementById("close-success-dialog").addEventListener("click", () => {
        // Clear cart
        cart = {};
        saveCartAndRender();
        finalDialog.classList.add("opacity-0");
        setTimeout(() => finalDialog.remove(), 250);
        toggleCheckoutFn(false);
        // Redirect
        window.location.href = "./";
      });
    });
  }
}

// Add item function
function addItemToCart(id) {
  if (cart[id]) {
    cart[id] += 1;
  } else {
    cart[id] = 1;
  }
  saveCartAndRender();
  showLocalToast(SPECIAL_PRODUCTS[id].name);
}

// Adjust quantity
function changeLocalQty(id, change) {
  if (!cart[id]) return;
  cart[id] += change;
  if (cart[id] <= 0) {
    delete cart[id];
  }
  saveCartAndRender();
}

// Remove item
function deleteLocalItem(id) {
  delete cart[id];
  saveCartAndRender();
}

// Modern toaster notification for adds
function showLocalToast(name) {
  let container = document.getElementById("promo-toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "promo-toast-container";
    container.className = "fixed bottom-24 sm:bottom-6 right-6 z-[9999] flex flex-col gap-2 max-w-sm w-full px-4 sm:px-0 pointer-events-none";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  // Use the exact same yellow styling classes seen in menu page
  toast.className = "flex items-center gap-3.5 bg-[#f3ba0b] border-l-4 border-neutral-950 text-neutral-950 p-4 rounded shadow-2xl shadow-black/40 border border-amber-600/20 transition-all duration-300 translate-y-3 opacity-0 select-none max-w-sm w-full pointer-events-auto";
  toast.style.transition = "all 0.3s ease";
  
  toast.innerHTML = `
    <div class="p-1 rounded bg-neutral-950/15 text-neutral-950 flex-shrink-0 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    </div>
    <div class="flex-1 min-w-0">
      <h4 class="text-[10px] font-mono font-bold text-neutral-900 font-black uppercase tracking-widest leading-none">PARK N PORK GRILL</h4>
      <p class="text-xs text-neutral-950 font-black mt-1 leading-normal truncate">${name} <span class="text-neutral-900 font-semibold text-xs font-sans">added!</span></p>
    </div>
    <button class="toast-close text-neutral-800 hover:text-black font-bold transition-colors cursor-pointer text-xs focus:outline-none p-1 shrink-0">
      &times;
    </button>
  `;

  container.appendChild(toast);
  
  // Show animation
  requestAnimationFrame(() => {
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
  });

  // Close trigger
  toast.querySelector(".toast-close").addEventListener("click", () => {
    dismissLocalToast(toast);
  });

  // Auto remove
  setTimeout(() => {
    dismissLocalToast(toast);
  }, 4000);
}

function dismissLocalToast(toastEl) {
  if (!toastEl || !toastEl.parentNode) return;
  toastEl.style.transform = "translateY(-8px)";
  toastEl.style.opacity = "0";
  setTimeout(() => {
    if (toastEl.parentNode) {
      toastEl.parentNode.removeChild(toastEl);
    }
  }, 300);
}

// Render dynamic cart drawer
function renderLocalCart() {
  const container = document.getElementById("cart-items-container");
  const navBadge = document.getElementById("nav-cart-badge");
  const floatBadge = document.getElementById("float-cart-badge");
  const subtotalText = document.getElementById("cart-subtotal");
  const checkoutBtn = document.getElementById("cart-checkout-btn");

  if (!container) return;

  container.innerHTML = "";
  let totalCount = 0;
  let subtotal = 0;

  const ids = Object.keys(cart);

  if (ids.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center p-8 animate-fade-in text-zinc-500">
        <div class="p-4 rounded-full bg-zinc-900 border border-zinc-900 mb-4 select-none text-zinc-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <p class="font-mono text-xs uppercase tracking-wider font-extrabold text-zinc-400">Platter is empty</p>
        <p class="text-[10px] text-zinc-500 mt-2 font-sans max-w-xs leading-relaxed">Browse our high-quality deals or Best Sellers section and build your feast now!</p>
      </div>
    `;
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.className = "w-full py-4 bg-zinc-900 text-zinc-600 font-mono font-black text-xs uppercase tracking-widest rounded-lg cursor-not-allowed text-center select-none";
    }
  } else {
    ids.forEach(id => {
      const product = SPECIAL_PRODUCTS[id];
      if (!product) return;

      const qty = cart[id];
      totalCount += qty;
      const combinedItemPrice = product.price * qty;
      subtotal += combinedItemPrice;

      const itemWidget = document.createElement("div");
      itemWidget.className = "flex gap-3 bg-zinc-900/40 border border-zinc-900 p-3 rounded-lg relative hover:border-zinc-800 transition-colors duration-200";
      itemWidget.innerHTML = `
        <img src="${product.image}" class="w-12 h-12 rounded object-cover border border-zinc-800 flex-shrink-0" alt="${product.name}">
        <div class="flex-grow min-w-0">
          <div class="flex items-start justify-between gap-2">
            <h6 class="text-xs font-mono font-bold text-white uppercase truncate tracking-tight pr-4" title="${product.name}">${product.name}</h6>
            <button class="delete-item-btn text-zinc-600 hover:text-red-500 text-xs transition-colors absolute top-2.5 right-2.5 outline-none cursor-pointer" data-id="${id}">&times;</button>
          </div>
          <p class="text-[10px] text-zinc-400 font-sans mt-0.5">Price: GH₵${product.price}</p>
          <div class="flex items-center justify-between mt-2 flex-wrap gap-2">
            <div class="flex items-center gap-2 border border-zinc-800 rounded bg-black/40 overflow-hidden">
              <button class="qty-minus-btn px-2 py-0.5 text-zinc-400 hover:text-white hover:bg-zinc-900 text-xs font-bold transition-all outline-none cursor-pointer" data-id="${id}">&minus;</button>
              <span class="text-xs font-mono font-bold text-zinc-100 select-none px-0.5">${qty}</span>
              <button class="qty-plus-btn px-2 py-0.5 text-zinc-400 hover:text-white hover:bg-zinc-900 text-xs font-bold transition-all outline-none cursor-pointer" data-id="${id}">+</button>
            </div>
            <p class="text-xs font-mono font-extrabold text-[#f3ba0b]">GH₵${combinedItemPrice.toFixed(2)}</p>
          </div>
        </div>
      `;
      container.appendChild(itemWidget);
    });

    if (checkoutBtn) {
      checkoutBtn.disabled = false;
      checkoutBtn.className = "w-full py-4 bg-[#f3ba0b] text-black hover:bg-yellow-400 active:scale-98 font-mono font-black text-xs uppercase tracking-widest rounded-lg cursor-pointer transition-all text-center select-none shadow-[0_4px_12px_rgba(244,180,0,0.15)] outline-none";
    }

    // Attach listeners inside render
    container.querySelectorAll(".qty-minus-btn").forEach(btn => {
      btn.addEventListener("click", () => changeLocalQty(btn.getAttribute("data-id"), -1));
    });
    container.querySelectorAll(".qty-plus-btn").forEach(btn => {
      btn.addEventListener("click", () => changeLocalQty(btn.getAttribute("data-id"), 1));
    });
    container.querySelectorAll(".delete-item-btn").forEach(btn => {
      btn.addEventListener("click", () => deleteLocalItem(btn.getAttribute("data-id")));
    });
  }

  // Update badges
  if (navBadge) {
    navBadge.textContent = totalCount;
    if (totalCount > 0) {
      navBadge.classList.add("scale-110");
      setTimeout(() => navBadge.classList.remove("scale-110"), 200);
    }
  }
  if (floatBadge) {
    floatBadge.textContent = totalCount;
    if (totalCount > 0) {
      floatBadge.classList.add("scale-110");
      setTimeout(() => floatBadge.classList.remove("scale-110"), 200);
    }
  }

  // Evaluate final checkout discount tier
  let finalSubtotal = subtotal;
  let savingsAmount = 0;
  
  if (subtotal >= 300) {
    savingsAmount = subtotal * 0.15;
    finalSubtotal = subtotal - savingsAmount;
  } else if (subtotal >= 200) {
    savingsAmount = subtotal * 0.10;
    finalSubtotal = subtotal - savingsAmount;
  } else if (subtotal >= 100) {
    savingsAmount = subtotal * 0.05;
    finalSubtotal = subtotal - savingsAmount;
  }

  if (subtotalText) {
    if (savingsAmount > 0) {
      subtotalText.innerHTML = `
        <div class="flex flex-col text-right">
          <span class="text-[10px] text-zinc-500 line-through">GH₵${subtotal.toFixed(2)}</span>
          <span class="text-[10px] text-green-500 font-sans">Save GH₵${savingsAmount.toFixed(2)} unlocked!</span>
          <span class="text-sm font-mono font-black text-[#f3ba0b]">GH₵${finalSubtotal.toFixed(2)}</span>
        </div>
      `;
    } else {
      subtotalText.textContent = `GH₵${subtotal.toFixed(2)}`;
    }
  }

  // Sync savings tracker
  updateSavingsTiers();
}

// 7. BUILD DETAILS IN CHECKOUT
function buildCheckoutSummary() {
  const container = document.getElementById("checkout-summary-list");
  const totalEl = document.getElementById("checkout-total-price");
  if (!container || !totalEl) return;

  container.innerHTML = "";
  let subtotal = 0;
  const ids = Object.keys(cart);

  if (ids.length === 0) {
    container.innerHTML = `<li class="text-xs text-zinc-500 p-2">Item Platter is empty</li>`;
    totalEl.textContent = "GH₵0.00";
    return;
  }

  ids.forEach(id => {
    const product = SPECIAL_PRODUCTS[id];
    if (!product) return;
    const qty = cart[id];
    const combinedPrice = product.price * qty;
    subtotal += combinedPrice;

    const li = document.createElement("li");
    li.className = "flex justify-between items-center text-xs border-b border-zinc-900 pb-2 text-zinc-300";
    li.innerHTML = `
      <div class="truncate max-w-[200px]">
        <strong class="font-mono text-white">${qty}x</strong> ${product.name}
      </div>
      <span class="font-mono font-bold text-zinc-200">GH₵${combinedPrice.toFixed(2)}</span>
    `;
    container.appendChild(li);
  });

  // Calculate savings on payment total
  let finalSubtotal = subtotal;
  let savingsAmount = 0;
  let tierLabel = "";

  if (subtotal >= 300) {
    savingsAmount = subtotal * 0.15;
    finalSubtotal = subtotal - savingsAmount;
    tierLabel = "Spend Savvy 15% Max Off";
  } else if (subtotal >= 200) {
    savingsAmount = subtotal * 0.10;
    finalSubtotal = subtotal - savingsAmount;
    tierLabel = "Power Bundle 10% Off";
  } else if (subtotal >= 100) {
    savingsAmount = subtotal * 0.05;
    finalSubtotal = subtotal - savingsAmount;
    tierLabel = "Intro Platter 5% Off";
  }

  if (savingsAmount > 0) {
    const liDiscount = document.createElement("li");
    liDiscount.className = "flex justify-between items-center text-xs border-b border-zinc-900 pb-2 text-green-400 font-sans font-bold";
    liDiscount.innerHTML = `
      <span>Discount: ${tierLabel}</span>
      <span>- GH₵${savingsAmount.toFixed(2)}</span>
    `;
    container.appendChild(liDiscount);
  }

  totalEl.textContent = `GH₵${finalSubtotal.toFixed(2)}`;
}

// 8. NESTED SCROLL REVEAL TRIGGERS
function setupScrollReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  
  const handleScroll = () => {
    const triggerBottom = window.innerHeight * 0.88;
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add("revealed");
      }
    });
  };

  // Immediate check
  handleScroll();
  window.addEventListener("scroll", handleScroll);
}

// 9. STICKY DYNAMIC PROMO TIMED SCROLL CONTROLLER
function setupPromoScrollEffects() {
  const mobileFloat = document.getElementById("mobile-float-bar");

  let specialsLastScrollY = window.scrollY;
  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    const isScrollingUp = currentY < specialsLastScrollY;

    // Toggle Mobile Floating custom bar scroll triggers (Only for < 768px viewports)
    if (mobileFloat) {
      if (window.innerWidth < 768) {
        if (currentY > 0) {
          mobileFloat.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
          mobileFloat.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
        } else {
          mobileFloat.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
          mobileFloat.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
        }
      } else {
        mobileFloat.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
        mobileFloat.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      }
    }
    specialsLastScrollY = currentY;
  });

  // Mobile menu expand mechanics (similar to header.js/index.js behavior)
  const menuBtn = document.getElementById("mobile-nav-toggle");
  const menuDropdown = document.getElementById("mobile-nav-menu");

  if (menuBtn && menuDropdown) {
    menuBtn.addEventListener("click", () => {
      menuDropdown.classList.toggle("hidden");
    });
  }
}

// 10. WHATSAPP COMMUNITY REGISTRY
const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/LhB2yXf6r2vD9j9F6E8Z90"; // Community invite link placeholder

function setupWhatsAppCommunity() {
  const joinBtn = document.getElementById("whatsapp-join-btn");
  if (joinBtn) {
    joinBtn.addEventListener("click", () => {
      window.open(WHATSAPP_COMMUNITY_LINK, "_blank");
    });
  }
}

// 11. THE PREMIUM SUPER DISCOUNT CAROUSEL SLIDER CONTROLLER
function initSuperDealSlider() {
  const track = document.getElementById("super-deal-slider-track");
  const slides = track ? track.children : [];
  const prevBtn = document.getElementById("slider-btn-prev");
  const nextBtn = document.getElementById("slider-btn-next");
  const dots = document.querySelectorAll(".slider-dot");
  
  if (!track || slides.length === 0) return;
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoSlideInterval = null;
  const SLIDE_DURATION = 3500; // 3.5s auto-slide

  function updateSlider() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Highlight active dot indicator
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.remove("bg-zinc-800", "w-2");
        dot.classList.add("bg-[#f3ba0b]", "w-4");
      } else {
        dot.classList.remove("bg-[#f3ba0b]", "w-4");
        dot.classList.add("bg-zinc-800", "w-2");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  // Set up click triggers
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"), 10);
      if (!isNaN(idx)) {
        currentIndex = idx;
        updateSlider();
        resetInterval();
      }
    });
  });

  // Auto-sliding loop
  function startInterval() {
    autoSlideInterval = setInterval(nextSlide, SLIDE_DURATION);
  }

  function stopInterval() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
    }
  }

  function resetInterval() {
    stopInterval();
    startInterval();
  }

  const viewport = document.getElementById("super-deal-slider-viewport");
  if (viewport) {
    viewport.addEventListener("mouseenter", stopInterval);
    viewport.addEventListener("mouseleave", startInterval);
  }

  // Swipe support for mobile viewports
  let touchStartX = 0;
  let touchEndX = 0;

  if (viewport) {
    viewport.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    viewport.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      nextSlide();
      resetInterval();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      prevSlide();
      resetInterval();
    }
  }

  // Initial render
  updateSlider();
  startInterval();
}
