// Datos de productos (simulando una base de datos)
const products = [
  {
    id: 1,
    name: "Manta Royal  1,30 * 180CM (verde)",
    price: 70000,
    category: "Mantas",
    description:
      "Manta Royal – Suavidad y Estilo para tu Hogar 🛋️✨" +
      "<br>" +
      "Añade un toque de confort y elegancia a tu sala o habitación con la Manta Royal. \n" +
      "Su diseño con textura en relieve y su suave tela te envolverán en calidez y comodidad, perfecta para relajarte en cualquier momento del día." +
      "<br>" +
      "🌟 Características destacadas:" +
      "<br>" +
      "✔ Dimensiones: 1.30 x 1.80 m – ideal para sofás, camas o sillas." +
      "<br>" +
      "✔ Textura ultra suave: Te brinda una sensación acogedora y placentera." +
      "<br>" +
      "✔ Diseño sofisticado: Relieve elegante que aporta un toque decorativo." +
      "<br>" +
      "✔ Material de alta calidad: Ligero, cálido y duradero." +
      "<br>" +
      "✔ Fácil mantenimiento: Lavable a máquina, resistente al uso diario." +
      "<br>" +
      "Dale a tu hogar un toque de calidez y sofisticación con la Manta Royal. ¡Perfecta para acompañarte en tus momentos de descanso! 🛏️💖",

    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417981/lopu/Imagen1_baflq4.jpg",
  },
  {
    id: 2,
    name: "Manta Royal  1,30 * 180CM (azul)",
    price: 70000,
    category: "Mantas",
    description:
      "Manta Royal – Suavidad y Estilo para tu Hogar 🛋️✨" +
      "<br>" +
      "Añade un toque de confort y elegancia a tu sala o habitación con la Manta Royal. Su diseño con textura en relieve y su suave tela te envolverán en calidez y comodidad, perfecta para relajarte en cualquier momento del día." +
      "<br>" +
      "🌟 Características destacadas:" +
      "<br>" +
      "✔ Dimensiones: 1.30 x 1.80 m – ideal para sofás, camas o sillas." +
      "<br>" +
      "✔ Textura ultra suave: Te brinda una sensación acogedora y placentera." +
      "<br>" +
      "✔ Diseño sofisticado: Relieve elegante que aporta un toque decorativo." +
      "<br>" +
      "✔ Material de alta calidad: Ligero, cálido y duradero." +
      "<br>" +
      "✔ Fácil mantenimiento: Lavable a máquina, resistente al uso diario." +
      "<br>" +
      "Dale a tu hogar un toque de calidez y sofisticación con la Manta Royal. ¡Perfecta para acompañarte en tus momentos de descanso! 🛏️💖",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417986/lopu/Imagen2_pzdbwh.jpg",
  },
  {
    id: 3,
    name: "Manta Royal  1,30 * 180CM (blanca)",
    price: 70000,
    category: "Mantas",
    description:
      "Manta Royal – Suavidad y Estilo para tu Hogar 🛋️✨" +
      "<br>" +
      "Añade un toque de confort y elegancia a tu sala o habitación con la Manta Royal. Su diseño con textura en relieve y su suave tela te envolverán en calidez y comodidad, perfecta para relajarte en cualquier momento del día." +
      "<br>" +
      "🌟 Características destacadas:" +
      "<br>" +
      "✔ Dimensiones: 1.30 x 1.80 m – ideal para sofás, camas o sillas." +
      "<br>" +
      "✔ Textura ultra suave: Te brinda una sensación acogedora y placentera." +
      "<br>" +
      "✔ Diseño sofisticado: Relieve elegante que aporta un toque decorativo." +
      "<br>" +
      "✔ Material de alta calidad: Ligero, cálido y duradero." +
      "<br>" +
      "✔ Fácil mantenimiento: Lavable a máquina, resistente al uso diario." +
      "<br>" +
      "Dale a tu hogar un toque de calidez y sofisticación con la Manta Royal. ¡Perfecta para acompañarte en tus momentos de descanso! 🛏️💖",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417986/lopu/Imagen3_dzbmmj.jpg",
  },
  {
    id: 4,
    name: "Almohadas (Blancas)",
    price: 55000,
    category: "Almohadas",
    description:
      "Almohada Premium – Descanso y Comodidad Absoluta 😴✨" +
      "<br>" +
      "Disfruta de un descanso inigualable con nuestra Almohada Premium, diseñada para brindarte el máximo confort y soporte mientras duermes.\n" +
      "Su suavidad y calidad te garantizan noches más relajantes y reparadoras." +
      "<br>" +
      "🌟 Características destacadas:" +
      "<br>" +
      "✔ Relleno esponjoso: Ofrece un equilibrio perfecto entre firmeza y suavidad." +
      "<br>" +
      "✔ Material hipoalergénico: Ideal para personas con alergias o piel sensible." +
      "<br>" +
      "✔ Funda de tela fresca y transpirable: Asegura mayor confort durante toda la noche." +
      "<br>" +
      "✔ Soporte ergonómico: Se adapta a la forma de tu cabeza y cuello." +
      "<br>" +
      "✔ Fácil mantenimiento: Lavable a máquina para mayor higiene y durabilidad." +
      "<br>" +
      "Duerme plácidamente y despierta renovado cada día con la Almohada Premium. ¡Dale a tu descanso la calidad que se merece! 💤💙",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417981/lopu/Imagen4_og7dkz.jpg",
  },
  {
    id: 5,
    name: "Toalla 510 GRS 70*140 (blanca)",
    price: 62000,
    category: "Toallas",
    description:
      "Juego de Toallas Blancas de Lujo – Suavidad y Elegancia para tu Baño" +
      "<br>" +
      "Dale un toque de sofisticación y confort a tu baño con este exclusivo juego de toallas blancas. Fabricadas con algodón de alta calidad, estas toallas ofrecen una suavidad excepcional, gran capacidad de absorción y una textura delicada que cuida tu piel." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Material: 100% algodón premium, extra suave y absorbente." +
      "<br>" +
      "✔ Diseño elegante: Detalles decorativos en el tejido para un toque sofisticado." +
      "<br>" +
      "✔ Durabilidad: Resistentes al uso diario y a múltiples lavadas sin perder suavidad." +
      "<br>" +
      "✔ Set completo: Incluye diferentes tamaños para cuerpo, manos y rostro." +
      "<br>" +
      "Perfectas para el hogar, hoteles o spas. ¡Siente la frescura y comodidad de un baño con la mejor calidad!",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417980/lopu/Imagen5_ui02rm.jpg",
  },
  {
    id: 6,
    name: "Toalla 510 GRS 70*140 (verde menta)",
    price: 62000,
    category: "Toallas",
    description:
      "Juego de Toallas Blancas de Lujo – Suavidad y Elegancia para tu Baño" +
      "<br>" +
      "Dale un toque de sofisticación y confort a tu baño con este exclusivo juego de toallas blancas. Fabricadas con algodón de alta calidad, estas toallas ofrecen una suavidad excepcional, gran capacidad de absorción y una textura delicada que cuida tu piel." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Material: 100% algodón premium, extra suave y absorbente." +
      "<br>" +
      "✔ Diseño elegante: Detalles decorativos en el tejido para un toque sofisticado." +
      "<br>" +
      "✔ Durabilidad: Resistentes al uso diario y a múltiples lavadas sin perder suavidad." +
      "<br>" +
      "✔ Set completo: Incluye diferentes tamaños para cuerpo, manos y rostro." +
      "<br>" +
      "Perfectas para el hogar, hoteles o spas. ¡Siente la frescura y comodidad de un baño con la mejor calidad!",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417982/lopu/Imagen6_xygllo.jpg",
  },
  {
    id: 7,
    name: "Toalla 510 GRS 70*140 (azul)",
    price: 62000,
    category: "Toallas",
    description:
      "Juego de Toallas Blancas de Lujo – Suavidad y Elegancia para tu Baño" +
      "<br>" +
      "Dale un toque de sofisticación y confort a tu baño con este exclusivo juego de toallas blancas. Fabricadas con algodón de alta calidad, estas toallas ofrecen una suavidad excepcional, gran capacidad de absorción y una textura delicada que cuida tu piel." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Material: 100% algodón premium, extra suave y absorbente." +
      "<br>" +
      "✔ Diseño elegante: Detalles decorativos en el tejido para un toque sofisticado." +
      "<br>" +
      "✔ Durabilidad: Resistentes al uso diario y a múltiples lavadas sin perder suavidad." +
      "<br>" +
      "✔ Set completo: Incluye diferentes tamaños para cuerpo, manos y rostro." +
      "<br>" +
      "Perfectas para el hogar, hoteles o spas. ¡Siente la frescura y comodidad de un baño con la mejor calidad!",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417982/lopu/Imagen7_y5vzlr.jpg",
  },
  {
    id: 8,
    name: "Edredón Sherpa Doble",
    price: 200000,
    category: "Edredónes",
    description:
      "Edredón Reversible de Lujo – Comodidad y Elegancia para tu Dormitorio" +
      "<br>" +
      "Renueva tu habitación con este hermoso edredón reversible, diseñado para brindarte calidez, estilo y máximo confort. Con una combinación de colores elegantes en tono azul petróleo y beige, este edredón es perfecto para cualquier decoración, dándole un toque sofisticado y acogedor a tu espacio." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Diseño reversible: Dos colores en uno para que puedas cambiar el estilo de tu cama cuando quieras." +
      "<br>" +
      "✔ Material de alta calidad: Suave, ligero y con textura aterciopelada que brinda un descanso placentero." +
      "<br>" +
      "✔ Fácil mantenimiento: Resistente a múltiples lavadas sin perder suavidad ni color." +
      "<br>" +
      "✔ Incluye: Edredón y fundas para almohadas a juego." +
      "<br>" +
      "Ideal para cualquier temporada, este edredón es la opción perfecta para quienes buscan comodidad y elegancia en un solo producto. ¡Dale a tu dormitorio el toque de lujo que merece! ✨🛏️",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417982/lopu/Imagen8_mmtety.jpg",
  },
  {
    id: 9,
    name: "Edredóna Sherpa Royal Semi Doble",
    price: 200000,
    category: "Edredónes",
    description:
      "Edredón Reversible de Lujo – Comodidad y Elegancia para tu Dormitorio" +
      "<br>" +
      "Renueva tu habitación con este hermoso edredón reversible, diseñado para brindarte calidez, estilo y máximo confort. Con una combinación de colores elegantes en tono azul petróleo y beige, este edredón es perfecto para cualquier decoración, dándole un toque sofisticado y acogedor a tu espacio." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Diseño reversible: Dos colores en uno para que puedas cambiar el estilo de tu cama cuando quieras." +
      "<br>" +
      "✔ Material de alta calidad: Suave, ligero y con textura aterciopelada que brinda un descanso placentero." +
      "<br>" +
      "✔ Fácil mantenimiento: Resistente a múltiples lavadas sin perder suavidad ni color." +
      "<br>" +
      "✔ Incluye: Edredón y fundas para almohadas a juego." +
      "<br>" +
      "Ideal para cualquier temporada, este edredón es la opción perfecta para quienes buscan comodidad y elegancia en un solo producto. ¡Dale a tu dormitorio el toque de lujo que merece! ✨🛏️",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417983/lopu/Imagen9_bxlozd.jpg",
  },
  {
    id: 10,
    name: "Edredóna Sherpa Royal Degrade Semi Doble",
    price: 185000,
    category: "Edredónes",
    description:
      "Edredón Reversible de Lujo – Comodidad y Elegancia para tu Dormitorio" +
      "<br>" +
      "Renueva tu habitación con este hermoso edredón reversible, diseñado para brindarte calidez, estilo y máximo confort. Con una combinación de colores elegantes en tono azul petróleo y beige, este edredón es perfecto para cualquier decoración, dándole un toque sofisticado y acogedor a tu espacio." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Diseño reversible: Dos colores en uno para que puedas cambiar el estilo de tu cama cuando quieras." +
      "<br>" +
      "✔ Material de alta calidad: Suave, ligero y con textura aterciopelada que brinda un descanso placentero." +
      "<br>" +
      "✔ Fácil mantenimiento: Resistente a múltiples lavadas sin perder suavidad ni color." +
      "<br>" +
      "✔ Incluye: Edredón y fundas para almohadas a juego." +
      "<br>" +
      "Ideal para cualquier temporada, este edredón es la opción perfecta para quienes buscan comodidad y elegancia en un solo producto. ¡Dale a tu dormitorio el toque de lujo que merece! ✨🛏️",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417980/lopu/Imagen10_wbwxe6.jpg",
  },
  {
    id: 11,
    name: "Edredóna Sherpa Royal Degrade  Doble",
    price: 215000,
    category: "Edredónes",
    description:
      "Edredón Reversible de Lujo – Comodidad y Elegancia para tu Dormitorio" +
      "<br>" +
      "Renueva tu habitación con este hermoso edredón reversible, diseñado para brindarte calidez, estilo y máximo confort. Con una combinación de colores elegantes en tono azul petróleo y beige, este edredón es perfecto para cualquier decoración, dándole un toque sofisticado y acogedor a tu espacio." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Diseño reversible: Dos colores en uno para que puedas cambiar el estilo de tu cama cuando quieras." +
      "<br>" +
      "✔ Material de alta calidad: Suave, ligero y con textura aterciopelada que brinda un descanso placentero." +
      "<br>" +
      "✔ Fácil mantenimiento: Resistente a múltiples lavadas sin perder suavidad ni color." +
      "<br>" +
      "✔ Incluye: Edredón y fundas para almohadas a juego." +
      "<br>" +
      "Ideal para cualquier temporada, este edredón es la opción perfecta para quienes buscan comodidad y elegancia en un solo producto. ¡Dale a tu dormitorio el toque de lujo que merece! ✨🛏️",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417983/lopu/Imagen11_qfoepd.jpg",
  },
  {
    id: 12,
    name: "Edredóna Sherpa Royal Degrade  Doble",
    price: 215000,
    category: "Edredónes",
    description:
      "Edredón Reversible de Lujo – Comodidad y Elegancia para tu Dormitorio" +
      "<br>" +
      "Renueva tu habitación con este hermoso edredón reversible, diseñado para brindarte calidez, estilo y máximo confort. Con una combinación de colores elegantes en tono azul petróleo y beige, este edredón es perfecto para cualquier decoración, dándole un toque sofisticado y acogedor a tu espacio." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Diseño reversible: Dos colores en uno para que puedas cambiar el estilo de tu cama cuando quieras." +
      "<br>" +
      "✔ Material de alta calidad: Suave, ligero y con textura aterciopelada que brinda un descanso placentero." +
      "<br>" +
      "✔ Fácil mantenimiento: Resistente a múltiples lavadas sin perder suavidad ni color." +
      "<br>" +
      "✔ Incluye: Edredón y fundas para almohadas a juego." +
      "<br>" +
      "Ideal para cualquier temporada, este edredón es la opción perfecta para quienes buscan comodidad y elegancia en un solo producto. ¡Dale a tu dormitorio el toque de lujo que merece! ✨🛏️",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417984/lopu/Imagen12_rprby2.jpg",
  },
  {
    id: 13,
    name: "Cobija Termica Doble",
    price: 165000,
    category: "Cobijas",
    description:
      "Cobija Térmica Doble – Suavidad, Calidez y Estilo en un Solo Producto" +
      "<br>" +
      "Disfruta del máximo confort con esta cobija térmica doble, diseñada para brindarte abrigo en las noches frías sin sacrificar estilo. Su diseño moderno con patrones geométricos y colores vibrantes le dará un toque de alegría y elegancia a tu habitación." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Material ultra suave: Tejido de alta calidad con textura aterciopelada que proporciona una sensación acogedora." +
      "<br>" +
      "✔ Tecnología térmica: Mantiene el calor por más tiempo, ideal para climas fríos." +
      "<br>" +
      "✔ Diseño moderno y versátil: Colores vibrantes y patrones únicos que combinan con cualquier decoración." +
      "<br>" +
      "✔ Tamaño doble: Perfecta para compartir o para quienes buscan mayor comodidad." +
      "<br>" +
      "✔ Fácil mantenimiento: Lavable a máquina y de secado rápido sin perder suavidad." +
      "<br>" +
      "Ideal para el hogar o para regalar. ¡Dale un toque de calidez y color a tus noches con esta cobija térmica de lujo! 🛏️✨",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417985/lopu/Imagen13_nmioi3.jpg",
  },
  {
    id: 14,
    name: "Colcha Piaris Doble",
    price: 145000,
    category: "Colchas",
    description:
      "Colcha Piaris Doble – Elegancia y Confort para tu Dormitorio" +
      "<br>" +
      "Transforma tu habitación con la sofisticación y suavidad de la colcha Piaris doble. Su hermoso diseño en tonos lilas aporta un ambiente relajante y moderno, ideal para quienes buscan comodidad sin perder estilo." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Material de alta calidad: Suave al tacto y ligera, perfecta para cualquier temporada." +
      "<br>" +
      "✔ Diseño elegante: Costuras acolchadas que realzan su textura y brindan un acabado refinado." +
      "<br>" +
      "✔ Tamaño doble: Ideal para camas matrimoniales, brindando una cobertura amplia y uniforme." +
      "<br>" +
      "✔ Incluye: Colcha y fundas para almohadas a juego." +
      "<br>" +
      "✔ Fácil mantenimiento: Lavable a máquina, resistente y duradera." +
      "<br>" +
      "Dale un toque de frescura y distinción a tu dormitorio con la colcha Piaris. ¡Disfruta del descanso que mereces con estilo y comodidad! ✨🛏️",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417984/lopu/Imagen14_zn0utd.jpg",
  },
  {
    id: 15,
    name: "Colcha Fiore Doble",
    price: 120000,
    category: "Colchas",
    description:
      "Colcha Fiore Doble – Elegancia y Confort para tu Dormitorio" +
      "<br>" +
      "Dale un toque de frescura y sofisticación a tu habitación con la colcha Fiore doble. Su diseño en tonos verde y beige, junto con su sutil patrón geométrico, crea un ambiente armonioso y moderno, ideal para quienes buscan una decoración elegante y acogedora." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Material premium: Suave, ligera y transpirable, ideal para cualquier temporada." +
      "<br>" +
      "✔ Diseño reversible: Dos estilos en una sola colcha para renovar tu espacio cuando quieras." +
      "<br>" +
      "✔ Textura acolchada: Patrón delicado que brinda un toque sofisticado y mayor durabilidad." +
      "<br>" +
      "✔ Tamaño doble: Perfecta para camas matrimoniales, cubriendo con elegancia y comodidad." +
      "<br>" +
      "✔ Incluye: Colcha y fundas para almohadas a juego." +
      "<br>" +
      "✔ Fácil mantenimiento: Lavable a máquina, resistente al uso diario sin perder suavidad." +
      "<br>" +
      "Ideal para transformar tu dormitorio con un estilo fresco y sofisticado. ¡Duerme con el confort y la calidad que mereces! 🛏️✨",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417984/lopu/Imagen14_zn0utd.jpg",
  },
  {
    id: 16,
    name: "Colcha Kids Sencillo",
    price: 110000,
    category: "Colchas",
    description:
      "Colcha Kids Sencillo – Diversión y Comodidad para los Pequeños" +
      "<br>" +
      "Convierte la habitación de tu pequeña en un mundo mágico con la Colcha Kids Sencillo. Su diseño encantador con unicornios, arcoíris y colores vibrantes hará que cada noche sea una aventura llena de sueños y alegría." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Material suave y ligero: Perfecto para un descanso cómodo y placentero." +
      "<br>" +
      "✔ Diseño infantil colorido: Estampados divertidos que llenan el espacio de fantasía y diversión." +
      "<br>" +
      "✔ Textura acolchada: Aporta calidez sin ser demasiado pesada, ideal para cualquier temporada." +
      "<br>" +
      "✔ Tamaño individual: Perfecta para camas sencillas." +
      "<br>" +
      "✔ Incluye: Colcha y fundas de almohada a juego." +
      "<br>" +
      "✔ Fácil de lavar: Resistente al uso diario y a múltiples lavadas sin perder color ni suavidad." +
      "<br>" +
      "Ideal para llenar de alegría y color el cuarto de los más pequeños. ¡Dale a tu niña el descanso que merece con la colcha más tierna y mágica! ✨🦄🌈",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417986/lopu/Imagen16_baa3mq.jpg",
  },
  {
    id: 17,
    name: "Juego de Sabanas Lauren Pink",
    price: 100000,
    category: "Sabanas",
    description:
      "Juego de Sábanas Lauren Pink – Suavidad y Elegancia para tu Descanso" +
      "<br>" +
      "Añade un toque de sofisticación y delicadeza a tu habitación con el Juego de Sábanas Lauren Pink. Su diseño en tono rosa suave con sutiles líneas satinadas ofrece un acabado elegante y acogedor, ideal para quienes buscan confort y estilo en cada detalle." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Material de alta calidad: Tela ultra suave y transpirable para una sensación fresca y cómoda." +
      "<br>" +
      "✔ Diseño satinado con textura rayada: Aporta un toque de lujo y elegancia a tu cama." +
      "<br>" +
      "✔ Ajuste perfecto: Incluye sábana bajera con elástico para mayor sujeción." +
      "<br>" +
      "✔ Variedad de tamaños: Disponible para camas individuales, matrimoniales, queen y king size." +
      "<br>" +
      "✔ Incluye: Sábana bajera, sábana superior y fundas para almohadas a juego." +
      "<br>" +
      "✔ Fácil mantenimiento: Lavable a máquina, resistente y de secado rápido." +
      "<br>" +
      "Dale a tu dormitorio un aire sofisticado y disfruta de un descanso placentero con la suavidad del Juego de Sábanas Lauren Pink. ¡Haz que cada noche sea especial! ✨🛏️💖",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417987/lopu/Imagen17_ebwjpy.jpg",
  },
  {
    id: 18,
    name: "Juego de Sabanas Lauren Plata ",
    price: 110000,
    category: "Sabanas",
    description:
      "Juego de Sábanas Lauren Plata – Elegancia y Confort para tu Cama" +
      "<br>" +
      "Renueva tu habitación con el Juego de Sábanas Lauren Plata, un diseño sofisticado en tono gris con delicadas franjas satinadas que aportan un toque de lujo y modernidad. Perfecto para quienes buscan suavidad, frescura y un descanso placentero cada noche." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Tela premium: Suave, fresca y transpirable para mayor comodidad." +
      "<br>" +
      "✔ Diseño satinado con textura rayada: Toque elegante y moderno para cualquier estilo de decoración." +
      "<br>" +
      "✔ Ajuste perfecto: La sábana bajera cuenta con elástico para un mejor ajuste en el colchón." +
      "<br>" +
      "✔ Variedad de tamaños: Disponible en individual, matrimonial, queen y king size." +
      "<br>" +
      "✔ Incluye: Sábana bajera, sábana superior y fundas para almohadas a juego." +
      "<br>" +
      "✔ Fácil mantenimiento: Lavable a máquina, resistente a múltiples lavados sin perder suavidad ni color." +
      "<br>" +
      "Disfruta del descanso perfecto con la suavidad y sofisticación del Juego de Sábanas Lauren Plata. ¡Tu cama nunca se verá mejor! 🛏️✨💎",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417985/lopu/Imagen18_bbqppi.jpg",
  },
  {
    id: 19,
    name: "Juego de Sabanas Satin Milano Doble Habano",
    price: 105000,
    category: "Sabanas",
    description:
      "Juego de Sábanas Satín Milano Doble Habano – Lujo y Suavidad para tu Descanso" +
      "<br>" +
      "Sumérgete en la elegancia y el confort con el Juego de Sábanas Satín Milano Doble Habano, diseñado para quienes buscan la combinación perfecta entre lujo y suavidad. Su acabado satinado brinda una textura sedosa y fresca, ideal para un descanso placentero y sofisticado." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Tela satinada premium: Extra suave y sedosa al tacto." +
      "<br>" +
      "✔ Diseño elegante: Brillo sutil y sofisticado en tono habano que añade un toque de lujo a tu dormitorio." +
      "<br>" +
      "✔ Regulación térmica: Mantiene una temperatura agradable para un descanso reparador en cualquier época del año." +
      "<br>" +
      "✔ Ajuste perfecto: Sábana bajera con elástico para una sujeción óptima al colchón." +
      "<br>" +
      "✔ Variedad de tamaños: Disponible en doble, queen y king size." +
      "<br>" +
      "✔ Incluye: Sábana bajera, sábana superior y fundas para almohadas a juego." +
      "<br>" +
      "✔ Fácil cuidado: Lavable a máquina y resistente a múltiples lavados sin perder su brillo y suavidad." +
      "<br>" +
      "Disfruta del máximo confort con el Juego de Sábanas Satín Milano Doble Habano y transforma cada noche en una experiencia de lujo. ¡Dale a tu cama el estilo que merece! 🛏️✨💫",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417987/lopu/Imagen19_hklvv7.jpg",
  },
  {
    id: 20,
    name: "Juego de Sabanas Embosada Azul Clara",
    price: 70000,
    category: "Sabanas",
    description:
      "Juego de Sábanas Embosada Azul Clara – Suavidad y Elegancia para tu Descanso" +
      "<br>" +
      "Dale un toque de frescura y sofisticación a tu habitación con el Juego de Sábanas Embosada Azul Clara. Diseñado para ofrecerte el máximo confort \n," +
      "su tela suave y transpirable te garantiza un descanso placentero durante toda la noche." +
      "<br>" +
      "🌿 Características:" +
      "<br>" +
      "✔ Material de alta calidad: Suave al tacto, ligero y resistente." +
      "<br>" +
      "✔ Diseño embosado: Elegante textura que añade un toque de distinción." +
      "<br>" +
      "✔ Color azul claro: Tonalidad fresca y relajante, ideal para cualquier estilo de dormitorio." +
      "<br>" +
      "✔ Ajuste perfecto: Sábana bajera con elástico para mayor sujeción." +
      "<br>" +
      "✔ Incluye:" +
      "<br>" +
      "1 sábana bajera" +
      "<br>" +
      "1 sábana superior" +
      "<br>" +
      "Fundas para almohadas a juego" +
      "<br>" +
      "✔ Fácil mantenimiento: Lavable a máquina, resistente a múltiples lavados sin perder su suavidad ni color." +
      "<br>" +
      "Transforma tu descanso con la suavidad y elegancia del Juego de Sábanas Embosada Azul Clara. ¡La opción perfecta para quienes buscan comodidad y estilo! 💤💙",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417987/lopu/Imagen20_wz6ebg.jpg",
  },
  {
    id: 21,
    name: "Juego de Sabanas Embosada Azul Rey",
    price: 70000,
    category: "Sabanas",
    description:
      "Juego de Sábanas Embosada Azul Rey – Elegancia y Confort para tu Descanso" +
      "<br>" +
      "Renueva tu habitación con la sofisticación y el confort del Juego de Sábanas Embosada Azul Rey. Su diseño elegante y su textura suave ofrecen una experiencia de descanso inigualable." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Material premium: Tela suave y transpirable, ideal para un descanso placentero." +
      "<br>" +
      "✔ Diseño embosado: Sutil relieve que aporta un toque de distinción." +
      "<br>" +
      "✔ Color azul rey: Profundo y elegante, perfecto para cualquier estilo de dormitorio." +
      "<br>" +
      "✔ Ajuste seguro: Sábana bajera con elástico para mayor sujeción." +
      "<br>" +
      "✔ Incluye:" +
      "<br>" +
      "1 sábana bajera" +
      "<br>" +
      "1 sábana superior" +
      "<br>" +
      "Fundas de almohada a juego" +
      "<br>" +
      "✔ Fácil de cuidar: Lavable a máquina, resistente al desgaste y conserva su color vibrante." +
      "<br>" +
      "Disfruta de noches de descanso con la suavidad y lujo del Juego de Sábanas Embosada Azul Rey. ¡Un toque de elegancia para tu cama! 💤💙",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417988/lopu/Imagen21_gjgtle.jpg",
  },
  {
    id: 22,
    name: "Juego de Sabanas Zafira",
    price: 123000,
    category: "Sabanas",
    description:
      "Juego de Sábanas Zafira – Estilo Náutico y Confort ⚓🌊" +
      "<br>" +
      "Dale a tu habitación un aire fresco y elegante con el Juego de Sábanas Zafira. Su diseño inspirado en el estilo náutico combina rayas, anclas y tonos azul, blanco y rojo, creando un ambiente sofisticado y relajante." +
      "<br>" +
      "✨ Características:" +
      "<br>" +
      "✔ Material de alta calidad: Tela suave, transpirable y fresca para un descanso óptimo." +
      "<br>" +
      "✔ Diseño exclusivo: Estampado náutico con anclas y líneas que evocan el mar." +
      "<br>" +
      "✔ Ajuste perfecto: Sábana bajera con elástico para mayor comodidad." +
      "<br>" +
      "✔ Incluye:" +
      "<br>" +
      "1 sábana bajera" +
      "<br>" +
      "1 sábana superior" +
      "<br>" +
      "Fundas de almohada con diseño a juego" +
      "<br>" +
      "✔ Fácil mantenimiento: Lavable a máquina, colores resistentes y duraderos." +
      "<br>" +
      "Haz de tu cama un espacio acogedor y con estilo con el Juego de Sábanas Zafira. ¡Ideal para quienes aman la frescura del mar en su hogar! 🌊⚓",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417988/lopu/Imagen22_uhbinq.jpg",
  },
  {
    id: 23,
    name: "Juego de Sabanas Bianca",
    price: 112000,
    category: "Sabanas",
    description:
      "Juego de Sábanas Bianca – Elegancia y Confort en Blanco 🤍✨" +
      "<br>" +
      "Disfruta de la suavidad y frescura del Juego de Sábanas Bianca, diseñado para brindarte el mejor descanso con un estilo clásico y sofisticado. Su tono blanco puro aporta luminosidad y elegancia a cualquier habitación, combinando con todos los estilos de decoración." +
      "<br>" +
      "🌟 Características destacadas:" +
      "<br>" +
      "✔ Tela suave y transpirable: Ideal para un descanso placentero durante todo el año." +
      "<br>" +
      "✔ Diseño atemporal: Color blanco puro que transmite frescura y sofisticación." +
      "<br>" +
      "✔ Ajuste perfecto: Sábana bajera con elástico para mayor comodidad." +
      "<br>" +
      "✔ Incluye:" +
      "<br>" +
      "1 sábana bajera" +
      "<br>" +
      "1 sábana superior" +
      "<br>" +
      "Fundas de almohada a juego" +
      "<br>" +
      "✔ Fácil de lavar: Material resistente que mantiene su suavidad y color con cada lavado." +
      "<br>" +
      "Dale a tu cama un toque de lujo y confort con el Juego de Sábanas Bianca. ¡Perfecto para quienes buscan calidad y elegancia en su descanso! ✨💤",
    image:
      "https://res.cloudinary.com/dl7kjajkv/image/upload/v1742417980/lopu/Imagen23_kmsvqh.jpg",
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
    Mantas: "Mantas",
    Almohadas: "Almohadas",
    Toallas: "Toallas",
    Edredónes: "Edredónes",
    Cobijas: "Cobijas",
    Colchas: "Colchas",
    Sabanas: "Sabanas",
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
  notification.style.backgroundColor = "rgb(255, 87, 34)";
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
    let message = "🛒 *Pedido de la tienda online LAPU*\n\n";

    cart.forEach((item, index) => {
      message += `${item.name} \n💲 Precio: $${item.price.toFixed(
        2
      )} \n📦 Cantidad: ${item.quantity}\n\n`;
    });

    // Agregar datos del usuario
    message += `\n👤 Nombre: ${name}\n\n`;
    message += `📍 Dirección: ${address}\n\n`;
    message += `📞 Teléfono: ${phone}\n\n`;
    message += `✨ ¡Gracias por tu compra!\n`;

    // Número de WhatsApp al que se enviará el pedido
    const whatsappNumber = "573143854460"; // Reemplázalo con tu número real

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
