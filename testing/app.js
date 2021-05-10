const prices = document.querySelectorAll('[data-ns-test="price"]');

console.log(prices);
const total = 0;
for(const i =0; i< prices.length; i++){
    total += prices[i].value();
}

console.log(total);
// Find a <table> element with id="myTable":
var table = document.getElementById("myTable");

// Create an empty <tr> element and add it to the 1st position of the table:
var newRow = table.insertRow();
var cell1 = newRow.insertCell();


//cell1.setAttribute(data-ns-test, "grandTotal");

var newText = document.createTextNode('Grand total');
newText.textContent = total;

cell1.appendChild(newText);

const tr = document.createElement('tr');

//tr.setAttribute('data-ns-test', "grandTotal");

const tn = document.createTextNode("Grand Total");

tr.appendChild(tn);

const done = document.querySelector(".myTable").appendChild(tr);