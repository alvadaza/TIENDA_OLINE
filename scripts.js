// Datos de productos (simulando una base de datos)
const products = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: 599.99,
    category: "electronica",
    description:
      "Smartphone de última generación con cámara de alta resolución, batería de larga duración y pantalla AMOLED de 6.5 pulgadas. Incluye 128GB de almacenamiento y 8GB de RAM.",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1741980766/imagens/cell-phone-2411808_640_d09jrn.png",
  },
  {
    id: 2,
    name: "Laptop Pro",
    price: 1299.99,
    category: "electronica",
    description:
      "Laptop potente con procesador de última generación, 16GB de RAM y 512GB de SSD. Pantalla de 15.6 pulgadas y tarjeta gráfica dedicada para gaming y diseño.",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1741980764/imagens/apple-3144234_640_e2sqz8.jpg",
  },
  {
    id: 3,
    name: "Auriculares Bluetooth",
    price: 89.99,
    category: "electronica",
    description:
      "Auriculares inalámbricos con cancelación de ruido, batería de 30 horas y sonido de alta fidelidad. Incluye estuche de carga y micrófono integrado.",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1741980834/imagens/earphones-5938007_640_lxc8oj.png",
  },
  {
    id: 4,
    name: "Camiseta Premium",
    price: 29.99,
    category: "ropa",
    description:
      "Camiseta de algodón 100% de alta calidad. Disponible en varios colores y tallas. Perfecta para el uso diario con un diseño elegante y minimalista.",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1741980764/imagens/ciao-bella-1559348_640_v3xzms.jpg",
  },
  {
    id: 5,
    name: "Jeans Clásicos",
    price: 49.99,
    category: "ropa",
    description:
      "Jeans de corte recto con tejido duradero y cómodo. Disponible en varios lavados y tallas. Ideal para cualquier ocasión casual.",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1741980765/imagens/zip-1268656_640_flznlw.jpg",
  },
  {
    id: 6,
    name: "Zapatillas Deportivas",
    price: 79.99,
    category: "ropa",
    description:
      "Zapatillas con suela amortiguada y transpirables. Perfectas para running o uso diario. Disponibles en varios colores y tallas.",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1689885179/samples/ecommerce/shoes.png",
  },
  {
    id: 7,
    name: "Lámpara de Mesa",
    price: 39.99,
    category: "hogar",
    description:
      "Lámpara de mesa moderna con luz LED ajustable. Perfecta para el escritorio o la mesita de noche. Incluye bombilla de bajo consumo.",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1741980412/imagens/istockphoto-502496344-612x612_cgqqa0.jpg",
  },
  {
    id: 8,
    name: "Juego de Sábanas",
    price: 59.99,
    category: "hogar",
    description:
      "Juego de sábanas de algodón egipcio de 400 hilos. Incluye sábana bajera, sábana encimera y dos fundas de almohada. Disponible en varios colores.",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1741980203/imagens/bedroom-1285156_640_iaa7s9.jpg",
  },
  {
    id: 9,
    name: "Set de Cocina",
    price: 129.99,
    category: "hogar",
    description:
      "Set completo de utensilios de cocina de acero inoxidable. Incluye 10 piezas con mangos ergonómicos y resistentes al calor.",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1741980765/imagens/cooking-pot-159470_640_byhe0g.png",
  },
];

// Variables globales
let cart = [];
let currentCategory = "todos";

// Cargar carrito desde localStorage si existe
function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
    updateCartTotal();
  }
}

// Guardar carrito en localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateCartTotal();
}

// Actualizar contador del carrito
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Actualizar total del carrito
function updateCartTotal() {
  const cartTotal = document.getElementById("cart-total");
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Mostrar productos según la categoría seleccionada
function displayProducts() {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  const filteredProducts =
    currentCategory === "todos"
      ? products
      : products.filter((product) => product.category === currentCategory);

  if (filteredProducts.length === 0) {
    productsContainer.innerHTML =
      '<p class="no-products">No hay productos en esta categoría</p>';
    return;
  }

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card fade-in";
    productCard.innerHTML = `
            <img src="${product.image}" alt="${
      product.name
    }" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-category">${getCategoryName(
                  product.category
                )}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${
                  product.id
                }">Añadir al carrito</button>
            </div>
        `;
    productsContainer.appendChild(productCard);

    // Evento para mostrar detalles del producto
    const productImage = productCard.querySelector(".product-image");
    const productTitle = productCard.querySelector(".product-title");

    productImage.addEventListener("click", () => showProductDetails(product));
    productTitle.addEventListener("click", () => showProductDetails(product));

    // Evento para añadir al carrito
    const addButton = productCard.querySelector(".add-to-cart");
    addButton.addEventListener("click", () => addToCart(product));
  });
}

// Obtener nombre legible de la categoría
function getCategoryName(category) {
  const categories = {
    electronica: "Electrónica",
    ropa: "Ropa",
    hogar: "Hogar",
  };
  return categories[category] || category;
}

// Mostrar detalles del producto
function showProductDetails(product) {
  const productModal = document.getElementById("product-modal");
  const productDetail = document.getElementById("product-detail");

  productDetail.innerHTML = `
        <div class="product-detail">
            <img src="${product.image}" alt="${
    product.name
  }" class="product-detail-image">
            <div class="product-detail-info">
                <h2 class="product-detail-title">${product.name}</h2>
                <p class="product-detail-category">${getCategoryName(
                  product.category
                )}</p>
                <p class="product-detail-price">$${product.price.toFixed(2)}</p>
                <p class="product-detail-description">${product.description}</p>
                <button class="add-to-cart-detail" data-id="${
                  product.id
                }">Añadir al carrito</button>
            </div>
        </div>
    `;

  productModal.style.display = "flex";

  // Evento para añadir al carrito desde detalles
  const addButton = productDetail.querySelector(".add-to-cart-detail");
  addButton.addEventListener("click", () => {
    addToCart(product);
    productModal.style.display = "none";
  });

  // Cerrar modal
  const closeButton = document.getElementById("close-product-modal");
  closeButton.addEventListener("click", () => {
    productModal.style.display = "none";
  });

  // Cerrar modal al hacer clic fuera
  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) {
      productModal.style.display = "none";
    }
  });
}

// Añadir producto al carrito
function addToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  saveCart();
  showNotification(`${product.name} añadido al carrito`);
  renderCartItems();
}

// Mostrar notificación
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;

  // Estilos para la notificación
  notification.style.position = "fixed";
  notification.style.bottom = "20px";
  notification.style.right = "20px";
  notification.style.backgroundColor = "#4a6de5";
  notification.style.color = "white";
  notification.style.padding = "10px 20px";
  notification.style.borderRadius = "4px";
  notification.style.zIndex = "1001";
  notification.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";

  document.body.appendChild(notification);

  // Eliminar después de 3 segundos
  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.transition = "opacity 0.5s ease";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 500);
  }, 3000);
}

// Renderizar items del carrito
function renderCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<div class="empty-cart">Tu carrito está vacío</div>';
    return;
  }

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${item.name}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="cart-item-actions">
                    <button class="quantity-btn decrease" data-id="${
                      item.id
                    }">-</button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="quantity-btn increase" data-id="${
                      item.id
                    }">+</button>
                    <button class="remove-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    cartItemsContainer.appendChild(cartItem);

    // Eventos para los botones de cantidad
    const decreaseBtn = cartItem.querySelector(".decrease");
    const increaseBtn = cartItem.querySelector(".increase");
    const removeBtn = cartItem.querySelector(".remove-item");

    decreaseBtn.addEventListener("click", () =>
      updateItemQuantity(item.id, -1)
    );
    increaseBtn.addEventListener("click", () => updateItemQuantity(item.id, 1));
    removeBtn.addEventListener("click", () => removeFromCart(item.id));
  });
}

// Actualizar cantidad de un item
function updateItemQuantity(id, change) {
  const itemIndex = cart.findIndex((item) => item.id === id);

  if (itemIndex !== -1) {
    cart[itemIndex].quantity += change;

    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }

    saveCart();
    renderCartItems();
  }
}

// Eliminar item del carrito
function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCartItems();
}

// Vaciar carrito
function clearCart() {
  cart = [];
  saveCart();
  renderCartItems();
}

// Inicializar la aplicación
function init() {
  // Cargar carrito
  loadCart();

  // Mostrar productos iniciales
  displayProducts();

  // Renderizar carrito
  renderCartItems();

  // Eventos para categorías
  const categoryLinks = document.querySelectorAll(".categories a");
  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Actualizar clase activa
      categoryLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      // Filtrar productos
      currentCategory = link.getAttribute("data-category");
      displayProducts();
    });
  });

  // Eventos para el carrito
  const cartIcon = document.getElementById("cart-icon");
  const cartModal = document.getElementById("cart-modal");
  const closeCart = document.getElementById("close-cart");
  const checkoutBtn = document.getElementById("checkout-btn");
  const clearCartBtn = document.getElementById("clear-cart");

  cartIcon.addEventListener("click", () => {
    cartModal.style.display = "block";
  });

  closeCart.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  const modal = document.getElementById("order-modal");
  const closeModal = document.getElementById("close-modal");
  const sendOrderBtn = document.getElementById("send-order");
  // 🚀 Asegurar que el modal SIEMPRE esté oculto al cargar la página
  window.addEventListener("DOMContentLoaded", () => {
    modal.style.display = "none";
  });

  // Mostrar el formulario solo cuando el usuario hace clic en "Proceder al pago"
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert(
        "Tu carrito está vacío. Añade productos antes de proceder al pago."
      );
      return;
    }
    modal.style.display = "flex"; // Mostrar el modal
  });

  // Cerrar el formulario al hacer clic en la "X"
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Función para enviar el pedido a WhatsApp
  function sendOrderToWhatsApp() {
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Validar que los campos no estén vacíos
    if (!name || !address || !phone) {
      alert("Por favor, completa todos los campos antes de enviar el pedido.");
      return;
    }

    // Construir el mensaje del pedido
    let message = "🛒 *Pedido de la tienda online*%0A%0A";
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - $${item.price.toFixed(2)} x ${
        item.quantity
      }%0A`;
    });

    // Agregar datos del usuario
    message += `%0A👤 Nombre: ${name}`;
    message += `%0A📍 Dirección: ${address}`;
    message += `%0A📞 Teléfono: ${phone}`;
    message += `%0A✨ ¡Gracias por tu compra!`;

    // Número de WhatsApp al que se enviará el pedido
    const whatsappNumber = "573133574711"; // Reemplázalo con tu número real

    // Crear enlace de WhatsApp
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappURL, "_blank");

    // Ocultar el formulario y vaciar el carrito
    modal.style.display = "none";
    clearCart();
  }

  // Evento para enviar el pedido
  sendOrderBtn.addEventListener("click", sendOrderToWhatsApp);
}

// Iniciar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", init);
