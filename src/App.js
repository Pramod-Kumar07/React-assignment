import './App.css';
import ProductCard from './Component/ProductCard';

function App() {
  const productDetails = [{
    productId : '1',
    productPic : "https://images.pexels.com/photos/6050920/pexels-photo-6050920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" ,
    productName : "SHOES",
    Brand : "NIKE JORDAN",
    productDescription :"Nike Mens Jordan Stay Loyal 2 Shoes. Build for comfort and style" ,
    Price : "Rs 10,290",
    Rating : "9.5/10"
 },
 {
  productId : '2',
  productPic : "https://content.rolex.com/v7/dam/2023/upright-c/m52508-0006.png?impolicy=v7&imwidth=640",
  productName : "WATCH",
  Brand : "ROLEX",
  productDescription :"The perpetual 1908 features a 39mm case in 18 ct yellow Gold with an alligator leather strap" ,
  Price : "Rs 1,797,500",
  Rating : "9.5/10"
},
{
  productId : '3',
  productPic : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-MpxqrJMtHTEqQQsBm-8_uexVVpDnwkS8MQ&usqp=CAU" ,
  productName : "SUN GLASSES",
  Brand : "RAY-BAN",
  productDescription :"Ray-Ban Aviator with this ultra-light Titanium frame with crystal green polarized lenses" ,
  Price : "Rs 34,090",
  Rating : "9.5/10"
}]
 
  return (
    <div className="App">
      {
        productDetails.map((element, index)=>
        <li key={element.productId}><ProductCard data={element} /></li>)
      }
    </div>
  );
}

export default App;
