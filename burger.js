class BigBurger {
    constructor () {
        this.price = 100;
        this.cal = 40;
    }
};
 
 class SmBurger {
     constructor () {
         this.price = 50;
         this.cal = 20;
     }
 }
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

var burgerbig = new BigBurger();
var burgersm = new SmBurger();
var priceing = new IngPrice();
var caling = new IngCal();


console.log(burgerbig.price + priceing.cheese() + priceing.meat() + priceing.salat());
