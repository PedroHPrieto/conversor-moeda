var v1;
var v2;


function medidaUm(brl) {
    var btn1 = document.getElementById('btn1');
    
    switch (brl) {
        case 'brl':
            v1 = 'brl';
            btn1.textContent = 'brl ';
            break;

        case 'euro':
            v1 = 'euro';
            btn1.textContent = 'euro';
            break;
        case 'libra':
            v1 = 'libra';
            btn1.textContent = 'libra';
            case 'dolar':
                v1 = 'dolar';
                btn1.textContent = 'dolar';
    }
}

function medidaDois(m2) {
    var btn2 = document.getElementById('btn2');
    switch (m2) {
        case 'ml':
            v2 = 'ml';
            btn2.textContent = 'Metros';
            break;

        case 'km':
            v2 = 'km';
            btn2.textContent = 'Quilômetros';
            break;
        case 'pes':
            v2 = 'pes';
            btn2.textContent = 'Pés';
    }
}

function medidaDois(m3) {
    var btn2 = document.getElementById('btn2');
    switch (m2) {
        case 'ml':
            v2 = 'ml';
            btn2.textContent = 'Metros';
            break;

        case 'km':
            v2 = 'km';
            btn2.textContent = 'Quilômetros';
            break;
        case 'pes':
            v2 = 'pes';
            btn2.textContent = 'Pés';
    }
}

function medidaDois(m4) {
    var btn2 = document.getElementById('btn2');
    switch (m2) {
        case 'ml':
            v2 = 'ml';
            btn2.textContent = 'Metros';
            break;

        case 'km':
            v2 = 'km';
            btn2.textContent = 'Quilômetros';
            break;
        case 'pes':
            v2 = 'pes';
            btn2.textContent = 'Pés';
    }
}
function Calcular() {

    var valor = parseFloat(document.getElementById('valor').value);
    if (v1 === 'brl') {
        if (v2 === 'ml') {
            valor = valor;
        }

        else if (v2 === 'km') {
            valor /= 1000;
        }

        else {
            valor *= 3.281;
        }
    }

    else if (v1 === 'brl') {
        if (v2 === 'ml') {
            valor *= 1000;
        }

        else if (v2 === 'km') {
            valor = valor;
        }

        else {
            valor *= 1381;
        }
    }

    else if (v1 === 'brl') {
        if (v2 === 'ml') {
            valor /= 1.381;
        }

        else if (v2 === 'km') {
            valor *= 1381;
        }

        else {
            valor = valor;
        }
    }
    inputResultado.value = valor;
}