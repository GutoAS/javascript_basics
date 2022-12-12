function showAdress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

console.log(showAdress("Av Fplm", "Nampula", 3200));

function ShowAdress(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const adress = new ShowAdress("Av Fplm", "Nampula", 3200);

console.log(adress);
