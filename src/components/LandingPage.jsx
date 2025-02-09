import React from 'react'
import { SearchBar ,ProductCard,FashionCat,MobileCat,ElecCat,AccCat,GadgetCat,LaptopCat} from './AllComponents.jsx'
import './style.css'
import Image3 from '../assets/Logo.png'

function LandingPage() {
    const product = [{
        image: 'https://www.zebrs.com/uploads/zebrs/products/1-927694058174310_l.jpg?v=423',
        name: 'Realme Narzo 70 Turbo',
        basePrice: '10,000',
        currentPrice: '70,000',
        expiresOn: '30 February 2025',
      }]
  return (
    <div className="landing_page">
        <div>
            <div >
                <img className="logo_image" src={Image3} alt="" />                    
            </div>
            <div style={{marginTop:"10px",border: "1px solid black",padding:"3px",borderRadius:"10px"}}>
                <SearchBar/>
            </div>
            <div>
                <h1 className="titles" style={{marginTop:"50px",fontFamily:"afacad",fontWeight:"600",fontSize:"25px",height:"24px"}}>Explore popular categories</h1>
            </div>
            <div className="categories_container">
                <FashionCat /><MobileCat /><ElecCat /><LaptopCat /><GadgetCat /><AccCat />
            </div>
            <div>
                <h1 style={{marginBottom: "30px",marginTop:"40px", fontFamily:"afacad",fontWeight:"600",fontSize:"25px",height:"24px"}}>Best selling products</h1>
            </div>
            <div className="cards">
                <ProductCard /><ProductCard /><ProductCard /> <ProductCard /><ProductCard /><ProductCard />
            </div>
        </div>
        {/* <div>
            {product.map((product) => {
                <img src="" alt="" />
            })}
        </div> */}
    </div>
  )
}

export default LandingPage