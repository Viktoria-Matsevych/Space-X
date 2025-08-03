console.clear()

document.addEventListener("DOMContentLoaded", () => {
    // Це забезпечує завантаження DOM перед спробою доступу до елементів
    let loader = document.querySelector(".space-loader");
    let container = document.querySelector(".container")
    setTimeout(() => {
        loader.style.display = "none"; // Приховати лоадер
        container.style.display = "block" // Показати основний контент

    }, 1000);
})

setInterval(() => {
    const s = document.querySelector(".sec")
    const m = document.querySelector(".min")
    const h = document.querySelector(".hour")

    const now = new Date()
    const sec = now.getSeconds()
    const min = now.getMinutes()
    const hs = now.getHours()


    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    h.style.transform = `rotate(${hs * 30}deg)`

    console.log(sec)
}, 1000)

let textsUk = [
    'Фалькон 9', 'Falcon Heavy', 'Дракон', 'Оновлення', 'Про нас', 'Галерея', 'Магазин',
    'ВАЖКИЙ СОКІЛ', 'найпотужніша діюча ракета у світі вдвічі',
    'Огляд Falcon Heavy', 'ВИСОТА', 'ДІАМЕТР', 'МАСА', ' КОРИСНЕ ВАНТАЖЕННЯ ДО LEO',
    'КОРИСНЕ ВАНТАЖЕННЯ ДО GTO', 'КОРИСНЕ ВАНТАЖЕННЯ НА МАРС', '70 м / 229,229,6 футів ', '12,2 м / 39,9 футів',
    '1 420 788 кг / 3 125 735 фунтів', '63 800 кг / 140 660 фунтів', '26 700 кг / 58 860 фунтів', '16 800 кг / 37 040 фунтів',
    'НЕПЕРЕВЕРШЕНА ПРОДУКТИВНІСТЬ', 'Маючи тягу понад 5 мільйонів фунтів під час зльоту, Falcon Heavy є найпотужнішою ракетою-носієм. Для порівняння, тяга Falcon Heavy під час зльоту дорівнює приблизно вісімнадцяти літакам 747 на повній потужності. Falcon Heavy може вивести на орбіту еквівалент повністю завантаженого реактивного лайнера 737 — разом з пасажирами, багажем та паливом.',
    'Твіттер', 'Ютуб', 'Інстаграм', 'Флікр', 'LinkedIn', 'Конфіденційність', 'Політика',
    'Якщо у вас є додаткові запитання, звертайтеся за ', 'Зв\'яжіться з нами'
]

function translateToUk() {
    let targets = document.querySelectorAll(".target");

    for (let i = 0; i < targets.length; i++) {
        targets[i].textContent = textsUk[i];
    }
}

let textsEn = [
    'Falcon 9', 'Falcon Heavy', 'Dragon', 'Updates', 'About', 'About', 'Shop',
    'FALCON HEAVY', 'the most powerful operational rocket in the world by a factor of two',
    'Falcon Heavy  Overview', 'HEIGHT', 'DIAMETER', 'MASS', 'PAYLOAD TO LEO',
    'PAYLOAD TO GTO', 'PAYLOAD TO MARS', '70 m / 229.6 ft ', '12.2 m / 39.9 ft',
    '1,420,788 kg / 3,125,735 lb', '63,800 kg / 140,660 lb', '26,700 kg / 58,860 lb', '16,800 kg / 37,040 lb',
    'UNMATCHED PERFORMANCE', 'With more than 5 million pounds of thrust at liftoff, Falcon Heavy is the most capable rocket flying. By comparison,the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit.',
    'Twitter', 'Youtube', 'Instagram', 'Flickr', 'LinkedIn', 'Privacy','Policy',
    'For additional questions, contact', 'Contact us'
]

function translateToEn() {
    let targets = document.querySelectorAll(".target");

    for (let i = 0; i < targets.length; i++) {
        targets[i].textContent = textsEn[i];
    }
}