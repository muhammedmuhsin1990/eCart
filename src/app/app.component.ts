import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mSpanColor = 'rgb(255, 212, 212)';
  title = 'eCart.com';
  agree = 0;
  productNames = ['Mens', 'Women', 'Kids'];
  productImages = [
    {productName:"Shirt Otto",category: "Men", url: "men1.jpg", size:"S, M, L, XL, XXL", price:"1255" },
    {productName:"Women Dress",category: "Women", url: "women1.jpg", size:"S, M, L, XL, XXL", price:"2650" },
    {productName:"Kids Boys",category: "Kids", url: "kids1.jpg",  size:"S, M, L, XL, XXL", price:"650" },
    {productName:"Shirt Woodland",category: "Men", url: "men2.jpg", size:"S, M, L, XL, XXL", price:"2199" },
    {productName:"Women Dress",category: "Women", url: "women2.jpg", size:"S, M, L, XL, XXL", price:"2300" },
    {productName:"Kids Churidar",category: "Kids", url: "kids2.jpg", size:"S, M, L, XL, XXL", price:"850" },
    {productName:"Shirt LP",category: "Men", url: "men3.jpg", size:"S, M, L, XL, XXL" },
    {productName:"Women Dress",category: "Women", url: "women3.jpg", size:"S, M, L, XL, XXL", price:"1990" },
    {productName:"Kids Churidar",category: "Kids", url: "kids3.jpg", size:"S, M, L, XL, XXL", price:"825" },
    {productName:"Pant Levis",category: "Men", url: "men4.jpg", size:"S, M, L, XL, XXL", price:"1299" },
    {productName:"Women Dress",category: "Women", url: "women4.jpg", size:"S, M, L, XL, XXL", price:"1599" },
    {productName:"Kids Dress",category: "Kids", url: "kids4.jpg", size:"S, M, L, XL, XXL", price:"1250" }
  ]
  
  clickFunction(iv){
    alert(iv);
  }
  
  onCart(){
     return this.agree++;
    }
    onMouseOver(){
      this.mSpanColor = 'rgb(178, 34, 34)';
    }
    onMouseOut(){
      this.mSpanColor = 'rgb(255, 212, 212)';
    }
     

}

