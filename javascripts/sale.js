const products = [
 {
id: 1,
name: "Mezcla original 200g",
price: 500,
},
{
  id: 2,
  name: "Mezcla original 500g",
  price: 900,
},
{
  id: 3,
  name: "Mezcla especial 200g",
  price:700,
},
{
  id: 4,
  name: "Mezcla especial 500g",
  price: 1200,
}
]
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const targetId = parseInt(priceElement.value);
  const product = products.find(item => item.id == targetId);
  const number = numberElement.value;

  let purchase = {
    product: product,
    number: parseInt(number),
  };

  const newPurchase = purchases.findIndex((item) => item.product.id === purchase.product.id)// --1
  if(purchases.length < 1 || newPurchase === -1) { //--2
    purchases.push(purchase);
  } else {
    purchases[newPurchase].number += purchase.number; //--3
  }

  window.alert(`${display()}\nsubtotal${subtotal()}yenes`);
  priceElement.value = "";
  numberElement.value = "";
}

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.product.price * purchase.number;
  }, 0)
}

function display() {
  return purchases.map(purchase => {
    return `${purchase.product.name} ${purchase.product.price} yenes ${purchase.number}articulo\n`;
  }).join("")
};

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000){
    return 500;
  } else {
    return 250;
  }
}

function calc() {
const sum = subtotal();
const postage = calcPostageFromPurchase(sum);
window.alert(`${display()}\nEl subtotal es ${sum}yenes. Los gastos de envio son${postage}yenes.El total es de ${sum +postage}yenes.`);
debugger
purchases = [];
priceElement.value= "";
numberElement.value= ""; 
  }

