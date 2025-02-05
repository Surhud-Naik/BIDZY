import React,{useState} from 'react';
import './style.css'
import Image2 from '../assets/searchicon.png'
import Fashion from '../assets/fashion.png'
import Mobile from '../assets/mobile.png'
import Elec from '../assets/elec.png'
import Acc from '../assets/acc.png'
import Laptop from '../assets/laptop.png'
import Gadget from '../assets/gadget.png'


export const ProductCard = () =>{
  const [products,setProducts]=useState([]);
  const [loading,setLoading]=useState(true); 

  useEffect(()=>{
    fetch('/api/products')
    .then(response => response.json())
    .then(data => {
      setProducts(data);
      setLoading(false);
    })
    .catch(err => {
      console.error('Error fetching products: ',err);
      setLoading(false);
    });
  }.[]);

  return (
    
  {loading ? (
    <p>Loading Products ...</p>
  ) : (
    <div className="card-container">
        <div className="product_box">
        {products.map(product => (
          <div className="description" key={product.id}>
          <img className="product_image" src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p className="details">{product.description}</p>
          <p className="price">{product.price}</p>
          <button className="button">Buy Now!</button><br></br>
          <button className="bidbutton">Bid Now!</button>
        </div>
        ))}
        </div>
      )}
    </div>
  );
};


export const SearchBar = () => {
  return (
      <div style={{display: "flex"}}>
        <img className="search_icon" src={Image2} alt="" /> 
        <input placeholder="Search Item"></input>
      </div>
  )
}

export const FashionCat = () => {
  return (
    <div className="categories">
      <button className="category_button">
        <img className="fashion_image" src={Fashion} alt="" />
      </button>
      <p>Fashion</p>
    </div>
  )
}

export const MobileCat = () => {
  return (
    <div className="categories">
      <button className="category_button">
        <img className="mobile_image" src={Mobile} alt="" />
      </button>
      <p>Mobile</p>
    </div>
  )
}

export const ElecCat = () => {
  return (
    <div className="categories">
      <button className="category_button">
        <img className="elec_image" src={Elec} alt="" />
      </button>
      <p>Electronics</p>
    </div>
  )
}

export const LaptopCat = () => {
  return (
    <div className="categories">
      <button className="category_button">
        <img className="laptop_image" src={Laptop} alt="" />
      </button>
      <p>Laptop</p>
    </div>
  )
}

export const AccCat = () => {
  return (
    <div className="categories">
      <button className="category_button">
        <img className="acc_image" src={Acc} alt="" />
      </button>
      <p>Accessories</p>
    </div>
  )
}

export const GadgetCat = () => {
  return (
    <div className="categories">
      <button className="category_button">
        <img className="gadget_image" src={Gadget} alt="" />
      </button>
      <p>Gadgets</p>
    </div>
  )
}


