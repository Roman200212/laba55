// Функция для отображения изображения по имени файла
function showImage(imageName) {
    if (imageName) {
        const imagePath = `images/${imageName}`;
        // Добавление изображения в блок с идентификатором 'story'
        document.getElementById('story').innerHTML += `<img src="${imagePath}" alt="Изображение" style="display: block; margin: 20px auto; width: 450px; height: 400px;">`;
    }
}
// Функция для вывода текста и изображения в блок 'story'
function output(text, imageName) {
    document.getElementById('story').innerHTML = text; // Вывод текста
    showImage(imageName); // Отображение изображения
}

// Функция для отображения опций в виде кнопок
function showOptions(options) {
    let buttons = '';
    // Создание кнопок на основе переданных опций
    for (let i = 0; i < options.length; i++) {
        buttons += `<button onclick="${options[i].action}()">${options[i].text}</button>`;
    }
    // Добавление кнопок в блок 'story'
    document.getElementById('story').innerHTML += `<p>${buttons}</p>`;
}
// Функция для отображения кнопки "Начать игру"
function showStartButton() {
    // Показать кнопку "Начать игру", удалив класс 'hidden'
    document.getElementById('startButton').classList.remove('hidden');
}
function goToStream() {
    output('Вы стоите перед входом в подземелье. Что вы будете делать?', 'example.jpg');
    showOptions([
        { text: 'Войти в подземелье', action: 'enterDark' },
        { text: 'Идти дальше по джунглям', action: 'enterTreees' }
    ]);
    // Скрыть кнопку "Начать игру" после начала игры
    document.getElementById('startButton').classList.add('hidden');
}

function enterTreees() {
    output('Вы пошли в неизвестность и нашли выход из джунглей. Перед вами оказался трудный выбор. Сесть в автобус или такси. Что вы сделаете?', 'tax.jpg');
    showOptions([
        { text: 'Сяду в такси', action: 'taxistXes' },
        { text: 'Сяду в автобус', action: 'busTruns' }
    ]);
}
function taxistXes() {
    output('Таксист оказался маньяком и увёз вас обратно в джунги. Теперь у вас нет шансов. Вы проиграли!', 'manya.jpg');
    showStartButton();
}
function busTruns() {
    output('Автобус отвёз вас в родной город и вы выжили! Поздравляю!', 'buuuuus1.jpg');
    showStartButton();
}
function enterDark() {
    output('Вы вошли в подземелье и увидели три развилки. Дорога расходится. Что же делать?', 'tun.jpg');
    showOptions([
        { text: 'Пойти в левый тоннель', action: 'entLeft' },
        { text: 'Пойти в средний тоннель', action: 'entCenter' },
        { text: 'Пойти в правый тоннель', action: 'entRight' }
    ]);
}

function entRight() {
    output('Вы вошли в тоннель с зыбучимии песками. Вас начало засасывать вниз, шанс выжить только один!', 'pesok.jpg');
    showOptions([
        { text: 'Буду сохранять спокойствие и карабкаться', action: 'sleepMe' },
        { text: 'буду брыкаться, не сохранять спокойствие и пытаться выбраться', action: 'ouSheet' }
    ]);
}
function ouSheet() {
    output('Вас засосало в зыбучие пески, но дно оказалось полым и вы провалились ещё глубже. Перед вами 2 двери. Ваши действия?', 'twodoor.jpg');
    showOptions([
        { text: 'Войду в левую дверь', action: 'leftMe' },
        { text: 'Войду в правую дверь', action: 'rightMe' }
    ]);
}
function sleepMe() {
    output('Вы выбрались из зыбучих песков, но вам откусила голову огромная обезьяна. Вы не выжили.', 'shefu.jpg');
    showStartButton();
}
function leftMe() {
    output('Вы вошли в дверь автобуса с туристами и нашли спасение. Вы выжили!', 'uuuus.jpg');
    showStartButton();
}
function entCenter() {
    output('В среднем тоннеле оказался огромный паук и меч. Будем ли сражаться с пауком?', 'draka.jpg');
    showOptions([
        { text: 'Испытаю удачу и буду драться', action: 'yesGo' },
        { text: 'Не буду траться, страшно', action: 'noPlease' }
    ]);
}
function rightMe() {
    output('Вы открыли дверь с красивой девушкой. Ваши действия?', 'beauty.jpg');
    showOptions([
        { text: 'Познакомлюсь с девушкой', action: 'collectFriend' },
        { text: 'Извинюсь и попытаюсь уйти', action: 'boySorry' }
    ]);
}
function collectFriend() {
    output('Вы завели семью и стали дикими обитателями джунглей. Вы выжили!', 'fam3.jpg');
    showStartButton();
}
function boySorry() {
    output('Девушка оказалась маньяком и привязала вас. Теперь вы навсегда останетесь в джунглях! Вы проиграли!', 'maf.jpg');
    showStartButton();
}
function yesGo() {
    output('Вы победили паука и открыли выход из подземелья. Теперь вы снова в джунглях. Ваши действия?', 'jung.jpg');
    showOptions([
        { text: 'Пойду по джунглям дальше', action: 'goLetsgo' },
        { text: 'Меч в руках, выхода нет, сделаю харакири', action: 'yeaDied' },
        { text: 'Сяду на траву и буду ждать неизвестности', action: 'whatIS' }
    ]);
}

function goLetsgo() {
    output('Перед вами оказалась большая обезьяна, говорящая на русском языке. Что вы сделаете?', 'shefu.jpg');
    showOptions([
        { text: 'Попрошу помощи у обезьяны', action: 'helpME' },
        { text: 'Попробую познакомиться', action: 'friendsSex' }
    ]);
}
function friendsSex() {
    output('Обезьяна в вас влюбилась и вы завели сеьмю. Теперь вы живёте в джунгях с обезьяной. Вы выжили!', 'family.jpg');
    showStartButton();
}
function noPlease() {
    output('Паук  откусил вам ногу, вы не выжили.', 'pauk2.jpg');
    showStartButton();
}
function helpME() {
    output('Обезьяна отказала вам в помощи и откусила голову. Вы не выжили', 'monkey.jpg');
    showStartButton();
}
function yeaDied() {
    output('Вы совершили харакири. Игра окончена.', 'xara.jpg');
    showStartButton();
}
function whatIS() {
    output('Пока вы ждали неизвестности, к вам приполз второй паук и заразил смертельным ядом. Вы не выжили', 'pauk.jpg');
    showStartButton();
}

function entLeft() {
    output('Вы вошли в левый тоннель. Перед вами оказался ящик с золотом. Ваши действия?', 'gold.jpg');
    showOptions([
        { text: 'Открою ящик с золотом', action: 'openCase' },
        { text: 'Выйду из двери обратно', action: 'yamThree' },
        { text: 'Сяду на ящик и буду ждать', action: 'goDied' }
    ]);
}

function openCase() {
    output('Вы открыли ящик с золотом, а там оказалась рация для связи со спасателями, ваши действия?', 'lol.jpg');
    showOptions([
        { text: 'Свяжусь со спасателями', action: 'goHelp' },
        { text: 'Возьму рацию и пойду назад', action: 'noHelp' }
    ]);
}

function yamThree() {
    output('Когда вы пытались выйди из двери, вы упали в яму глубиной 3 метра, ваши действия?', 'xara.jpg');
    showOptions([
        { text: 'Хиракари', action: 'hiraGO' }
    ]);
}

function goDied() {
    output('Пока вы ждали неизвестности, к вам приполз большой паук и заразил смертельным ядом. Вы не выжили', 'pauk.jpg');
    showStartButton();
}
function goHelp() {
    output('Поздравляю! Спасатели сидели в соседней двери и прибыли к вам на помощь, вы победили!', 'win.jpg');
    showStartButton();
}
function hiraGO() {
    output('Вы погибли.', 'died.jpg');
    showStartButton();
}

function noHelp() {
    output('Когда вы шли обратно, вам стало плохо и вы погибли. Вы не выжили.', 'died.jpg');
    showStartButton();
}

