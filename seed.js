var database = require('./config/database');
var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose 
seeder.connect(database.url, function() {

    // Load Mongoose models 
    seeder.loadModels([
        'app/models/category.js',
        'app/models/city.js'
    ]);

    // Clear specified collections 
    seeder.clearModels(['Category', 'City'], function() {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data);

    });
});

// Data array containing seed data - documents organized by Model 
var data = [
    {
        'model': 'Category',
        'documents': [
            {
                'name': 'Автомобили с пробегом',
                'group': 'Транспорт'
            },
            {
                'name': 'Запчасти и аксессуары',
                'group': 'Транспорт'
            },
            {
                'name': 'Водный транспорт',
                'group': 'Транспорт'
            },
            {
                'name': 'Мотоциклы и мототехника',
                'group': 'Транспорт'
            },
            {
                'name': 'Комнаты',
                'group': 'Недвижимость'
            },
            {
                'name': 'Квартиры',
                'group': 'Недвижимость'
            },
            {
                'name': 'Дома, дачи, коттеджи',
                'group': 'Недвижимость'
            },
            {
                'name': 'Гаражи и машиноместа',
                'group': 'Недвижимость'
            },
            {
                'name': 'Грузовики и спецтехника',
                'group': 'Недвижимость'
            },
            {
                'name': 'Земельные участки',
                'group': 'Транспорт'
            },
            {
                'name': 'Коммерческая недвижимость',
                'group': 'Недвижимость'
            },
            {
                'name': 'Новые автомобили',
                'group': 'Транспорт'
            },
            {
                'name': 'Вакансии (поиск сотрудников)',
                'group': 'Работа'
            },
            {
                'name': 'Резюме (поиск работы)',
                'group': 'Работа'
            }
        ]
    },
    {
        'model': 'City',
        'documents': [
            {
                'name': 'Барабинск'
            },
            {
                'name': 'Бердск'
            },
            {
                'name': 'Искитим'
            },
            {
                'name': 'Колывань'
            },
            {
                'name': 'Краснообск'
            },
            {
                'name': 'Куйбышев'
            },
            {
                'name': 'Мошково'
            },
            {
                'name': 'Новосибирск'
            },
            {
                'name': 'Обь'
            },
            {
                'name': 'Ордынское'
            },
            {
                'name': 'Черепаново'
            }
        ]
    }
];  