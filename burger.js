const bigburgerprice = 100;
const bigburgercal = 40;
const smburgerprice = 50;
const smburgercal = 20;


 class IngPrice {
      salat () {
          return this.price = 10;
      }
      meat () {
          return this.price = 50;
      }
      cheese () {
          return this.price = 30;
      }
      mayo () {
          return this.price = 20;
      }
 };

class IngCal{
      salat () {
          return this.cal = 5;
      }
      meat () {
          return this.cal = 200;
      }
      cheese () {
          return this.cal = 60;
      }
      mayo () {
          return this.cal = 50;
      }
 };

var priceing = new IngPrice();
var caling = new IngCal();


console.log('Ціна великого бургера', + bigburgerprice + priceing.cheese() + priceing.meat() + priceing.salat() + priceing.mayo());
console.log('Ціна маленького бургера', + smburgerprice + priceing.cheese() + priceing.mayo() + priceing.meat() + priceing.salat());
console.log( 'Калорійність великого бургера', + bigburgercal + caling.salat() + caling.cheese() + caling.mayo() + caling.meat());
console.log( 'Калорійність маленького бургера', + smburgercal + caling.salat() + caling.cheese() + caling.mayo() + caling.meat());
