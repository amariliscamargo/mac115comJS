var entradas = [
    document.querySelector('#quantidade')
];

var i = 1;
var tbody = document.querySelector('.table tbody');
var valorMaior = 0;
var trr = document.createElement('tr');
var tdm = document.createElement('td');
tdm.setAttribute("id", "valormaior");

tdm.appendChild(document.createTextNode("O maior valor do mês é " + valorMaior));

document.querySelector('form').addEventListener('submit', function(event) {


    event.preventDefault(); //não recarrega a página evitando perder os dados
    //maneira funcional de interar com js sem ter que utilizar o looping for

    var tr = document.createElement('tr');

    entradas.forEach(function(entrada) {
        var tdd = document.createElement('td');
        var td = document.createElement('td');
        tdd.textContent = i;
        td.textContent = entrada.value;
        tr.appendChild(tdd);
        tr.appendChild(td);
        if (entrada.value > valorMaior) {
            valorMaior = entrada.value;
            document.getElementById('valormaior').value = "O maior valor do mês é  " + valorMaior;
        }
        i++;
    });

    tbody.appendChild(tr);


    entradas[0].value = '';
    entradas[0].focus();

});

trr.appendChild(tdm);
tbody.appendChild(trr);