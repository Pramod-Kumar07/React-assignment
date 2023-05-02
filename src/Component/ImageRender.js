import { useEffect, useState, useRef } from "react";
import './ImageRender.css';


function ImageRender() {
    

    const [image,setImage] = useState(['https://i.pinimg.com/originals/81/20/41/8120418f86b665b62839e3347903e2ee.jpg','https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg','https://img.freepik.com/premium-photo/elegant-golden-blue-flowers-branches-light-background-vintage-floral-decor-postcard_434911-173.jpg?w=996']);

    const [index, setIndex] = useState(0);

    const imageRef= useRef();
  

    function handleClick() {
      index!== image.length-1 ? setIndex(index+1) : setIndex(0)
    }


    useEffect(()=>{
        imageRef.current.src=image[index];
    },[index]);
       
    
  return (
    <div>
        <img alt="badiya" ref={imageRef} />
        <button onClick={handleClick } >Next image</button>
    </div>
  );
}

export default ImageRender;
