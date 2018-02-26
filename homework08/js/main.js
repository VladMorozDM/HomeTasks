let multiplicationTableHolder = document.getElementById('multiplication-table');
let matrixHolder = document.getElementById('matrix');
let pascalTriangleHolder = document.getElementById('pascal-triangle');

matrixHolder.innerHTML = render(matrix(10));
multiplicationTableHolder.innerHTML = render(multiplicationTable(10));
pascalTriangleHolder.innerHTML = render(pascal(10));

function multiplicationTable(size) {
    var table = [];

    for (let i = 1; i <= size; i++) {
        let row = [];
        row.push(i);
        for (let j = 1; j <= size - 1; j++) {
            let member = row[row.length - 1];
            member += i;
            row.push(member);
        }
        table.push(row);
    }
    return table;
}

function matrix(size) {
    var matrix = [];
    for (let j = 1; j <= size; j++) {

        let rowMember = [];

        for (let i = 1; i <= size; i++) {
            if (i > j && i < (size + 1) - j) {
                rowMember.push(3);
            }
            else if (i == j) {
                rowMember.push(1);
            }
            else if (i < j && i > (size + 1) - j) {
                rowMember.push(4);
            }
            else if (i == (size + 1) - j) {
                rowMember.push(2);
            }
            else if (i < j) {
                rowMember.push(6);
            }
            else {
                rowMember.push(5);
            }

        }
        matrix.push(rowMember);

    }
    return matrix;
}


function pascal(size) {
    var triangle = [];

    for (let numOfStage = 0; numOfStage < size; numOfStage++) {
        let row = [];
        let factorialOfStage = factorial(numOfStage);
        for (let orderIndex = 0; orderIndex <= numOfStage; orderIndex++) {
                let factorialOfindex = factorial(orderIndex);
                let factorialOfDiff = factorial(numOfStage - orderIndex);
                let member = factorialOfStage / (factorialOfindex * factorialOfDiff);
                row.push(member);
        }
        triangle.push(row);
    }
    return triangle;
}


function factorial(m) {
    console.log(m);
    if(m == 0){
        return 1;
    }
    return (m != 1) ? m * factorial(m - 1) : 1;
}


function render(array) {
    var rowsQty = array.length;
    var result = [];
    for (var i = 0; i < rowsQty; i++) {
        var row = ['<tr><td>', array[i].join('</td><td>'), '</td></tr>'].join('');
        result.push(row);
    }
    return result.join('');
}
