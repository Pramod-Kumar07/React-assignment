import './App.css';
import ProductCard from './Component/ProductCard';

function App() {
  const productDetails1 = {
    productId : '1',
    productPic : "https://images.pexels.com/photos/6050920/pexels-photo-6050920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
    productName : "SHOES",
    Brand : "NIKE JORDAN",
    productDescription :"Nike Mens Jordan Stay Loyal 2 Shoes. Build for comfort and style" ,
    Price : "Rs 10,290",
    Rating : "9.5/10"
 }
 const productDetails2 = {
  productId : '2',
  productPic : "https://content.rolex.com/v7/dam/2023/upright-c/m52508-0006.png?impolicy=v7&imwidth=640",
  productName : "WATCH",
  Brand : "ROLEX",
  productDescription :"The perpetual 1908 features a 39mm case in 18 ct yellow Gold with an alligator leather strap" ,
  Price : "Rs 1,797,500",
  Rating : "9.5/10"
}
const productDetails3 = {
  productId : '3',
  productPic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MpxqrJMtHTEqQQsBm-8_uexVVpDnwkS8MQ&usqp=CAU" ,
  productName : "SUN GLASSES",
  Brand : "RAY-BAN",
  productDescription :"Ray-Ban Aviator with this ultra-light Titanium frame with crystal green polarized lenses" ,
  Price : "Rs 34,090",
  Rating : "9.5/10"
}
const productDetails4 = {
  productId : '4',
  productPic : "https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001__340.png" ,
  productName : "T-SHIRT",
  Brand : "ARROW",
  productDescription :"100% cotton ,machine wash, long lasting and with greater comfort" ,
  Price : "Rs 999",
  Rating : "9/10"
}
const productDetails5 = {
  productId : '5',
  productPic : "https://s7d9.scene7.com/is/image/NewellRubbermaid/1931505_snnt_imgps_20-1?wid=400&hei=400" ,
  productName : "FOUNTAIN PEN",
  Brand : "PARKER",
  productDescription :"Fountain pen boasts a stainless steel cap and barrel accented by a gold-finished clip and trim" ,
  Price : "Rs 14,236",
  Rating : "9.5/10"
}
 
  return (
    <div className="App">
      <div className='firstLine'>
      <ProductCard details={productDetails1} />
      <ProductCard details={productDetails2} />
      <ProductCard details={productDetails3} />
      </div>
      <div className='nextLine'>
      <ProductCard details={productDetails4} />
      <ProductCard details={productDetails5} />
      </div>
    </div>
  );
}

export default App;
