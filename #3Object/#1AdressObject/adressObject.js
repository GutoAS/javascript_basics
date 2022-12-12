// function showAdress(adress) {
//   return {
//     street: "Av Fplm",
//     city: adress,
//     zipCode: 3200,
//   };
// }

// function ShowAdress(adress) {
//   this.street = "Av Fplm";
//   this.city = adress;
//   this.zipCode = 21;
// }

// const adress = new ShowAdress("Nampula");

// console.log(adress);

let adress = {
  street: "Av Fplm",
  city: "Nampula",
  zipCode: 3200,
};

function showAdress(adress) {
  for (let key in adress) console.log(key, adress[key]);
}

showAdress(adress);
