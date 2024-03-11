


const appl = +prompt('Введите число');

switch (appl) {
  case 1:
    console.log('Понедельник');
    break;
  case 2:
    console.log('Вторник');
    break;
  case 3:
    console.log('Среда');
    break;
  case 4:
    console.log('Четверг');
    break;
  case 5:
    console.log('Пятница');
    break;
  case 6:
    console.log('Суббота');
    break;
  case 7:
    console.log('Воскресенье');
    break;
  default:
    console.log(appl);
}











const number = +prompt('Введите число (0-дон, 1-ке, 2-ге, 3-ке):', '');

switch (number) {
  case 0:
    alert('Силер 0 санын жаздынар');
    break;
  case 1:
    alert('Силер 1 санын жаздынар');
    break;
  case 2:
    alert('Силер 2 санын жаздынар');
  case 3:
    alert('Силер 2 же 3 санын жаздынар');
    break;
    case 4: 
    alert('Силер 4 же 5 санын жаздынар');
   breakж
  default:
    alert('сан жазгыла');
}
















const browser = prompt('Браузердин атын жазгыла', '');

if (browser === 'Edge') {
  alert("Бул Edge браузер!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  alert('Бул Chrome же Firefox же Safari же Opera');
} else {
  alert('Бул сенин барузерин)');
}