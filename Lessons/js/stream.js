let a =0;
let b =0;
// do{
//     a = prompt('Type x: ', '');
//     a = parseInt(a);
//     if(isNaN(a)){
//         alert('Глаза роззуй, "a"');
//     } else{
//         b = prompt('Type y: ', '');
//         b = parseInt(b);
//         if(isNaN(b)){
//             alert('Глаза роззуй, "b"');
//         }
//     }
// } while(isNaN(a)||isNaN(b));



// for (let i=0; i<10; i++){
//     if(i % 2 === 0) continue; //cool
//     console.log(i);
// }

var table = document.createElement('table');
table.onClick = function () {
    alert('AAAAAAAAAAA!!');
}

let dayNum = parseInt(prompt("Today is ..."));
switch(dayNum) {
    case 1:
        alert('Monday');
        break;
    case 2:
        alert('Tuesday');
        break;
    case 3:
        alert('Wenthsday');
        break;
    case 4:
        alert('Monday');
        break;
    case 5:
        alert('Monday');
        break;
    case 6:
        alert('Monday');
        break;
    case 7:
        alert('Monday');
        break;
    default:
        alert('moron');
}


var date = new Date();
dayNumber =
switch(date.getDate()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        alert('Get to work!');
        break;
    case 6:
    case 7:
        alert('RIP');
        break;
    default:
        alert('moron');
}