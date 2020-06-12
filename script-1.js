let name = prompt("Masukan nama Anda");
let product = prompt("Silahkan beli");

function tokoOnline(name, product) {
  return `Terimakasih ${name} telah membeli ${product}`;
}

document.write(tokoOnline(name, product));
console.log(tokoOnline(name, product));
