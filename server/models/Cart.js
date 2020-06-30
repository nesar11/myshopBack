module.exports = function Cart(oldCart){
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0 ;
  
    this.add = function(item, id) {
  
      var Product = this.items[id];
      if (!Product){
        Product = this.items[id] = {item: item, qty: 0, Price: 0};
  
      }
      Product.qty++;
      Product.Price = Product.item.Price * Product.qty;
      this.totalQty++;
      this.totalPrice += Product.item.Price;
    }
    this.generateArray = function(){
      var arr =[];
      for (var id in this.items){
  
        arr.push(this.items[id])
      }
      return arr;
    };
  };


// module.exports = function Cart(oldCart){
//   this.items=oldCart.items;
//   this.totalQty=oldCart.totalQty
//   this.totalPrice=oldCart.totalPrice;
  
//   this.add = function(item, id){
//   console.log(item)
//   console.log(id)
  
//   var Product = this.items[id]
//   console.log(Product)
  
//   if(!Product){
//     Product = this.item[id]= {item: item, qty:0, Price:0};
//   }
//   Product.qty++;
//   Product.Price =Product.item.Price*Product.qty;
//   this.totalQty++
//   this.totalPrice += Product.item.Price;}
  
//   this.generateArry = function(){
//   var arr= [];
//   for(var id in this.items){
//   arr.push(this.items[id]);
//   }
//   return arr;
//   }
//   }