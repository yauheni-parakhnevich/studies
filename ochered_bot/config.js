const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    token: process.env.TELEGRAM_BOT_TOKEN,
    url: 'https://gpk.gov.by/situation-at-the-border/punkty-propuska/',
    nodes : [
        { id: 'grigorov', name: 'Григоровщина', country: 'Латвия', alias: ['grigorov', 'григоровщина'], camera: 'http://www.vitebsk.customs.gov.by/webcam/vt01.jpg' },
        { id: 'urbana', name: 'Урбаны', country: 'Латвия', alias: ['urbana', 'урбаны'] },

        { id: 'stone_log', name: 'Каменный Лог', country: 'Литва', alias: ['stonelog', 'каменныйлог'], camera: 'http://www.customs.gov.by/webcam/OSH1.jpg' },
        { id: 'kotlovka', name: 'Котловка', country: 'Литва', alias: ['kotlovka', 'котловка'], camera: 'http://www.customs.gov.by/webcam/OSH2.jpg' },
        { id: 'losha', name: 'Лоша', country: 'Литва', alias: ['losha', 'лоша'], camera: 'https://gpk.gov.by/cam/kamlog2.jpg' },
        { id: 'benekainys', name: 'Бенякони', country: 'Литва', alias: ['benekainys', 'бенякони'], camera: 'https://gpk.gov.by/cam/beniakoni1.jpg' },
        { id: 'privalka', name: 'Привалка', country: 'Литва', alias: ['privalka', 'привалка'], camera: 'http://www.grt.customs.gov.by/webcam/gr03.jpg' },

        { id: 'bruzgi', name: 'Брузги', country: 'Польша', alias: ['bruzgi', 'брузги'], camera: 'http://grt.customs.gov.by/webcam/gr01.jpg' },
        { id: 'berestovitsa', name: 'Берестовица', country: 'Польша', alias: ['berestovitsa', 'берестовица'], camera: 'http://www.grt.customs.gov.by/webcam/gr02.jpg' },
        { id: 'peschatka', name: 'Песчатка', country: 'Польша', alias: ['peschatka', 'песчатка'], camera: 'http://www.brest.customs.gov.by/webcam/brst101_1_c1.jpg' },
        { id: 'kozlovichi', name: 'Козловичи', country: 'Польша', alias: ['kozlovichi', 'козловичи'] },
        { id: 'brest', name: 'Брест', country: 'Польша', alias: ['brest', 'брест'] },
        { id: 'domachevo', name: 'Домачево', country: 'Польша', alias: ['domachevo', 'домачево'], camera: 'http://www.brest.customs.gov.by/webcam/brst140_1.jpg' },

        { id: 'tomashovka', name: 'Томашовка', country: 'Украина', alias: ['tomashovka', 'томашовка'] },
        { id: 'oltush', name: 'Олтуш', country: 'Украина', alias: ['oltush', 'олтуш'] },
        { id: 'mokrany', name: 'Мокраны', country: 'Украина', alias: ['mokrany', 'мокраны'] },
        { id: 'mohr', name: 'Мохро', country: 'Украина', alias: ['mohr', 'мохро'] },
        { id: 'nevel', name: 'Невель', country: 'Украина', alias: ['nevel', 'невель'] },
        { id: 'up_terebezhov', name: 'Верхний Теребежов', country: 'Украина', alias: ['terebezhov', 'теребежов'] },
        { id: 'glushkevichi', name: 'Глушкевичи', country: 'Украина', alias: ['glushkevichi', 'глушкевичи'] },
        { id: 'new_rudnia', name: 'Новая Рудня', country: 'Украина', alias: ['rudnia', 'рудня'] },
        { id: 'oleksandrivka', name: 'Александровка', country: 'Украина', alias: ['oleksandrivka', 'александровка'] },
        { id: 'komarin', name: 'Комарин', country: 'Украина', alias: ['komarin', 'комарин'] },
        { id: 'nova_huta', name: 'Новая Гута', country: 'Украина', alias: ['huta', 'гута'], camera: 'http://www.gomel.customs.gov.by/webcam/gml1.jpg' },
        { id: 'veselivka', name: 'Веселовка', country: 'Украина', alias: ['veselivka', 'веселовка'] }
    ]
}