const products = [
    { id: '1', name: 'Samsung Led Curvo Full HD 24"', price: 39000, category: 'monitor', img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/018/096/products/1585891344_monitor_24_led_samsung_curvo_cf390_full_hd_11-58ed1bd6f8032e7f8b15998676798937-640-0.png', stock: 12, description: '23.5 pulgadas, resolucion 1920x1080. Conexion VGA y HDMI, Headphone x1.'},
    // { id: '2', name: 'Gigabyte Led Curvo Full HD 27"', price: 64000, category: 'monitor', img: 'https://mla-s1-p.mlstatic.com/609395-MLA48690831774_122021-F.jpg', stock: 10, description: '27 pulgadas, resolucion 1920x1080. Adaptive-Sync,FreeSync, HDMI x2.'},
    // { id: '3', name: 'Samsung Led Curvo 4K 32"', price: 91000, category: 'monitor', img: 'https://www.venex.com.ar/products_images/1648744210_81xzyribkll._sl1500_.jpg', stock: 8, description: '31.5 pulgadas, resolucion 3840x2160. MagicUpscale, Eye Saver, HDMI y DP.'},
    { id: '4', name: 'Redragon Draconic K530 White', price: 8000, category: 'teclado', img: 'https://m.media-amazon.com/images/I/61VHJfO7aDL._AC_SY450_.jpg', stock: 15, description: 'Mecánico, Conexion Bluetooth 5.0 y cable. Switches outemu.'},
    // { id: '5', name: 'Corsair K65 Mini RGB', price: 13000, category: 'teclado', img: 'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/ItemImages/21167_800.jpg', stock: 12, description: 'Mecánico, Conexion por USB 3.0. Switches Cherry Mx.'},
    // { id: '6', name: 'Corsair K100 Rgb', price: 41000, category: 'teclado', img: 'https://http2.mlstatic.com/D_NQ_NP_946047-MLA45600040370_042021-O.webp', stock: 7, description: 'Mecánico, diseño de aluminio con RGB, tecnología CORSAIR AXON y switches Cherry Mx Speed.'},
    { id: '7', name: 'Set Night Sakura Cherry', price: 9800, category: 'keycaps', img: 'https://i0.wp.com/onicaps.com.ar/wp-content/uploads/2022/05/H44a6355842ec40dca9f960be022adcedo-scaled.jpg?fit=2560%2C2560&ssl=1', stock: 10, description: 'Material PBT, 131 Teclas, ANSI layout.'},
    // { id: '8', name: 'Set Eva-01 evangelion Cherry', price: 9800, category: 'keycaps', img: 'https://i0.wp.com/onicaps.com.ar/wp-content/uploads/2022/05/Hf14a7517ff7d484ab28a1d0d2b849e50g.jpg?fit=1000%2C1000&ssl=1', stock: 10, description: 'Material PBT, 125 Teclas, ANSI layout.'},
    // { id: '9', name: 'Set Red Samurai Cherry', price: 13500, category: 'keycaps', img: 'https://i0.wp.com/onicaps.com.ar/wp-content/uploads/2022/05/H5ffb9990b0c345a796256b4a0c43efc8c-scaled.jpg?fit=2560%2C1707&ssl=1', stock: 10, description: 'Material ABS, Perfil cherry, 173 Teclas, ANSI layout con soporte ISO'},
    { id: '10', name: 'Mouse Trust Yvi Fx', price: 1020, category: 'mouse', img: 'https://www.xt-pc.com.ar/img/productos/Pics_Prod/MOU837.jpg', stock: 24, description: 'Iluminacion LED, conexion inalambrica, dpi 800/1600 DPI.'},
    // { id: '11', name: 'Mouse Redragon M607 Griffin', price: 1900, category: 'mouse', img: 'https://malditohard.com.ar/img/migration/MOUSE-GAMER-REDRAGON-M607-GRIFFIN.webp', stock: 18, description: 'Laterales y banda RGB, 100/7200 DPI. Cableado, 6 botones.'},
    // { id: '12', name: 'Mouse Trust Gxt164 Sikanda', price: 4050, category: 'mouse', img: 'https://www.xt-pc.com.ar/img/productos/Pics_Prod/MOU743_1.jpg', stock: 15, description: 'RGB regulable, 13 botones programables, DPI hasta 5000'},
    { id: '13', name: 'Mousepad Kakashi', price: 2900, category: 'mousepad', img: 'https://d22fxaf9t8d39k.cloudfront.net/6884d5cb3470701aa36da3d5faa9cb1ad1ef745341193913079cc7fb862a1c7d46976.jpeg', stock: 32, description: 'Compuesto por 3 capas compactas, brinda comodidad y confort. Tipo Control'},
    // { id: '14', name: 'Mousepad Eva', price: 2900, category: 'mousepad', img: 'https://d22fxaf9t8d39k.cloudfront.net/5d96266302e30857eb6d8ae38a16d365dd552c24a067559d2ba7f38d0cccc94746976.jpeg', stock: 30, description: 'Compuesto por 3 capas compactas, brinda comodidad y confort. Tipo Control'},
    // { id: '15', name: 'Mousepad HiperBeast', price: 2900, category: 'mousepad', img: 'https://d22fxaf9t8d39k.cloudfront.net/948891554b4ad82e2ee551b7fbf522124f7c59d378c7f0ef62b213c573916bbd46976.jpeg', stock: 28, description: 'Compuesto por 3 capas compactas, brinda comodidad y confort. Tipo Control'},
    { id: '16', name: 'Redragon Zeus', price: 8500, category: 'auricular', img: 'https://unitytech.uy/wp-content/uploads/2020/08/Redragon-Zeus-H510-3.jpg', stock: 30, description: 'Salida 7.1 Virtual, copas circumaurales, diadema metalica ajustable. Conector USB 2m'},
    // { id: '17', name: 'Hyperx Cloud Alpha S', price: 15900, category: 'auricular', img: 'https://http2.mlstatic.com/D_NQ_NP_934452-MLA42766520398_072020-O.webp', stock: 22, description: 'Sonido surround 7.1, 3 niveles de graves, orejeras acolchadas'},
    // { id: '18', name: 'Jbl Quantum Q600', price: 34000, category: 'auricular', img: 'https://delta.com.ar/media/catalog/product/cache/03229c62aec18bc8968e7effca99b533/n/u/nuevo_proyecto_3_26_1.jpg', stock: 20, description: 'Iluminacion RGB, conectividad inalambrica. Duración de reproducción musical: 14 horas'},
]

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            !categoryId
                ? resolve(products)
                : resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}