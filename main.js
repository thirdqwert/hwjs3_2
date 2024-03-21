const users = {}

for (let i = 1; i <= 10; i++) {
    users[i] = {
        user: `Пользователь - ${i}`,
        name: `Имя - ${prompt('Введите имя')}`,
        age: `Возраст - ${prompt('Введите возраст')}`
    }
}
for (const key in users) {
    for (const key2 in users[key]) {
        console.log(users[key][key2]);
    }
}

const lor = receipt()
var sum = 0
var dlvr = 9000
var allList = ''

for (const key in lor) {
    var allList = allList + key + ' ' + lor[key]['info'] + ', '
    for (const key2 in lor[key]) {
        if (!isNaN(lor[key][key2])) {
            sum = sum + lor[key][key2]
        }
        // sum = sum + lor[key]['price'] / 2 
    }
}

console.log(`Вы заказали ${allList}| Общая стоимость ${sum+dlvr} сум с доставкой (${dlvr})`);
