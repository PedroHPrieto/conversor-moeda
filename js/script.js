var moeda, cotDolar, cotEuro, cotLibra, ResultDolar, ResultEuro, ResultLibra;
function cotar(c) {
    switch (c) {
        case 'BR':
            moeda = document.getElementById("reais").value;
            break;

        case 'US':
            cotDolar = document.getElementById("Dolar").value;
            break;

        case 'EU':
            cotEuro = document.getElementById("Euro").value;
            break;

        case 'LB':
            cotLibra = document.getElementById("Libra").value;
            break;
    }

    if (moeda != null) {
        if (cotDolar != null) {
            ResultDolar = moeda / cotDolar;
            document.getElementById("Conv1").value = ResultDolar.toFixed(2);

        }
        if (cotEuro != null) {
            ResultEuro = moeda / cotEuro;
            document.getElementById("Conv2").value = ResultEuro.toFixed(2);
        }
        if (cotLibra != null) {
            ResultLibra = moeda / cotLibra;
            document.getElementById("Conv3").value = ResultLibra.toFixed(2);
        }


    }


}