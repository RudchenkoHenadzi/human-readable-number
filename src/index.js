module.exports = function toReadable (number) {

    // Уникальные комбинации чисел

    let numberName = {
        "0": 'zero',
        "1": 'one',
        "2": 'two',
        "3": 'three',
        "4": 'four',
        "5": 'five',
        "6": 'six',
        "7": 'seven',
        "8": 'eight',
        "9": 'nine',
        "10": 'ten',
        "11": 'eleven',
        "12": 'twelve',
        "13": 'thirteen',
        "14": 'fourteen',
        "15": 'fifteen',
        "16": 'sixteen',
        "17": 'seventeen',
        "18": 'eighteen',
        "19": 'nineteen',
        "20": 'twenty',
        "30": 'thirty',
        "40": 'forty',
        "50": 'fifty',
        "60": 'sixty',
        "70": 'seventy',
        "80": 'eighty',
        "90": 'ninety',
        "100": 'hundred',
    }

    let numberStr = String(number); // делаем передаваемый агрумет строкой для того что бы можно было им управлять

    if(number <= 20) {                                                                  // Выводим числа от нуля до 20
        return numberName[number];      
    } else if (number > 20 && number < 100 && numberStr[1] === '0') {
        return numberName[numberStr[0] + numberStr[1]];
    } else if (number > 20 && number < 100) {                                           // Выводим числа от 20 до 100
        let numberRound = numberStr[0] + '0';
        return numberName[numberRound] + ' ' + numberName[numberStr[1]];
    } else if (numberStr.length === 3 && numberStr[1] === '0' && numberStr[2] === '0') { // Выводим сотки
        return numberName[numberStr[0]] + ' hundred';
    } else if (numberStr.length  === 3 && numberStr[1] === '0') {                        // выводим первую десятку в сотках : 102, 203, 309, 506 ...
        return numberName[numberStr[0]] + ' hundred ' + numberName[numberStr[2]];
    } else if (numberStr.length  === 3 && numberStr[1] + numberStr[2] < 20) {
        return numberName[numberStr[0]] + ' hundred ' + numberName[numberStr[1] + numberStr[2]];
    } else if (numberStr.length  === 3 && numberStr[2] === '0') {                        // выводим десятки в сотках: 120, 130, 140, 150 ...
        return numberName[numberStr[0]] + ' hundred ' + numberName[numberStr[1] + numberStr[2]];
    } else if (numberStr.length  === 3) {                                                // выводим все остальное
        return numberName[numberStr[0]] + ' hundred ' + numberName[numberStr[1] + '0'] + ' ' + numberName[numberStr[2]];
    }

}
