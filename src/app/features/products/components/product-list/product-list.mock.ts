import { Category, ProductModel } from "app/features/products/models/product.model";

export const productListMock: Array<ProductModel> = [
    {
        id: 0,
        name: 'Apple MacBook Pro',
        description: 'Экран 14.2" Liquid Retina XDR (3024x1964) 120 Гц, глянцевый / Apple M1 Max (10 ядер) / RAM 64 ГБ / SSD 8 ТБ / Apple M1 Max Graphics (32 ядра) / без ОД / Wi-Fi / Bluetooth / веб-камера / macOS Monterey / 1.61 кг / космический серый',
        price: 8100,
        category: Category.Laptops,
        isAvailable: true,

        srcImg: 'https://content1.rozetka.com.ua/goods/images/big/271166202.jpg'
    },
    {
        id: 1,
        name: 'Lenovo ThinkPad P17',
        description: 'Ноутбук Lenovo ThinkPad P17 (20YU000GRA) 17.3", 3840x2160 (4К), IPS, Intel Core i9 11950H (до 5.0 ГГц), 32 ГБ, SSD - 1 ТБ, NVIDIA GeForce RTX A3000, GPU - 6 ГБ, Windows 10 Pro, подсветка клавиатуры, сканер отпечатков пальцев, 3.67 кг, черный',
        price: 5700,
        category: Category.Laptops,
        isAvailable: false,
      
        srcImg: 'https://content2.rozetka.com.ua/goods/images/big/273957341.jpg'
    },
    {
        id: 2,
        name: 'HP ZBook Studio G8',
        description: 'Ноутбук HP ZBook Studio G8 (451S6ES) 15.6", 1920х1080 (FullHD), IPS, Intel Core i9 11950H (до 5.0 ГГц), 32 ГБ, SSD - 2 Тб, NVIDIA GeForce RTX 3080, GPU - 16 ГБ, DOS, подсветка клавиатуры, гнездо для замка Kensington, сканер отпечатков пальцев, 1.79 кг, серебристый',
        price: 5750,
        category: Category.Laptops,
        isAvailable: true,

        srcImg: 'https://content1.rozetka.com.ua/goods/images/big/273967302.jpg'
    },
    {
        id: 3,
        name: 'Microsoft Surface Duo 2',
        description: 'Процесор: Qualcomm® Snapdragon™ 888 5G Mobile Platform Пам\'ять: 8 ГБ Об\'єм накопичувача: 256 ГБ Екран: 8.3" Dual PixelSense™ Fusion Роздільна здатність: 2688 x1892 пікс. SIM: 1 x eSIM1 x Nano SIM 15,5 годин відтворення відео Операційна система: Android™ 11',
        price: 1999,
        category: Category.Phones,
        isAvailable: false,
        
        srcImg: 'https://content1.rozetka.com.ua/goods/images/big/260374293.jpg'
    },
    {
        id: 4,
        name: 'Apple iPhone 13 Pro Max',
        description: 'Экран (6.7", OLED (Super Retina XDR), 2778x1284) / Apple A15 Bionic / тройная основная камера: 12 Мп + 12 Мп + 12 Мп, фронтальная камера: 12 Мп / 1 ТБ встроенной памяти / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15',
        price: 1499,
        category: Category.Phones,
        isAvailable: true,
        
        srcImg: 'https://content.rozetka.com.ua/goods/images/big/259416201.jpg'
    },
    {
        id: 5,
        name: 'Sony XR-83A90J',
        description: 'Диагональ 208 см (83 дюйма), Разрешение: 4K Ultra HD (3840 × 2160), Тип подсветки: OLED, Другие особенности: частота панели 100 Гц, когнитивный процессор XR с технологией Cognitive Intelligence, набор технологий для реалистичного XR-изображения (XR Color, XR Contrast, XR Clarity), улучшение контрастности XR OLED Contrast Pro, резкие детали в динамических сценах благодаря технологии XR Motion Clarity, увеличение разрешения изображения с 2K до 4K благодаря XR 4K Upscaling, улучшение деталей и текстур благодаря 4K XR Super Resolution, плавное изображение с 4K XR Smoothing, технология расширенного динамического диапазона XR HDR Remaster , HDR10, HLG, реалистичные цвета XR Triluminos Pro, датчик освещенности, технология Dolby Vision, безрамочный дизайн.',
        price: 7300,
        category: Category.TVs,
        isAvailable: true,
        
        srcImg: 'https://content.rozetka.com.ua/goods/images/big/260163525.png'
    },
    {
        id: 6,
        name: 'Durabook U11I Basic',
        description: '11.6" (1920 x1080) / Intel Core i5-10210Y (1.0 - 4.0 ГГц) / Windows 10 Pro / RAM 8ГБ / SSD 128ГБ / Bridge Battery / Bluetooth 5.0 / USB3.0 + USB2.0 / IP65 / Сертификат MIL-STD 810G, Сертификат MIL-STD 461G',
        price: 3500,
        category: Category.Tablets,
        isAvailable: false,
        
        srcImg: 'https://content.rozetka.com.ua/goods/images/big/21668529.png'
    },
    {
        id: 7,
        name: 'Microsoft Surface Pro 7+ 12.3”',
        description: 'Классический сверхлегкий ноутбук 2-в-1 для бизнеса работает быстрее, чем когда-либо, и обеспечивает продуктивность благодаря увеличенному времени автономной работы в течение всего дня. Теперь с дополнительным LTE Advanced.',
        price: 3250,
        category: Category.Tablets,
        isAvailable: true,
        
        srcImg: 'https://content.rozetka.com.ua/goods/images/big/260244814.jpg'
    },
    {
        id: 8,
        name: 'Apple iPad mini 2021',
        description: 'Экран 8.3" Retina (2266х1488) емкостный MultiTouch / Apple A15 Bionic / 256 ГБ встроенной памяти / 3G / 4G / 5G / Wi-Fi / Bluetooth 5.0 / основная камера 12 Мп, фронтальная 12 Мп / GPS / ГЛОНАСС / iPadOS 15 / 297 г / фиолетовый',
        price: 1100,
        category: Category.Tablets,
        isAvailable: true,
        
        srcImg: 'https://content.rozetka.com.ua/goods/images/big/224016785.jpg'
    },
    {
        id: 9,
        name: 'Apple iPad 10.2" 2021',
        description: 'Экран 10.2" IPS (2160x1620) MultiTouch / Apple A13 Bionic (2.65 ГГц) / 64 ГБ встроенной памяти / Wi-Fi / Bluetooth 4.2 / основная камера 8 Мп, фронтальная - 12 Мп / iPadOS 15 / 487 г / серый космос',
        price: 500,
        category: Category.Tablets,
        isAvailable: false,
        
        srcImg: 'https://content2.rozetka.com.ua/goods/images/big/224009737.jpg'
    },
]