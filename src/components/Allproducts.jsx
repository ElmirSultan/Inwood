import React, { useState } from 'react'
import "../css/allproducts.css"
import Productcard from './Productcard'
import prdctJson from "../assets/json/products.json"
const Allproducts = ({handleClick}) => {

    const [product, setProduct] = useState("chair")
    const productSec = (secim) => {
        setProduct(secim)
    }

    return (
        <section className='all-products'>
            <h1>Our Products</h1>
            <div className="productss">
                <div className="left-productss">
                    <div className="left-product-names">
                    <p onClick={() => productSec("chair")} className={`${product === "chair" ? "klik" : ""}`}>Chair</p>
                    <p onClick={() => productSec("table")} className={`${product === "table" ? "klik" : ""}`}>Table</p>
                    <p onClick={() => productSec("sofa")} className={`${product === "sofa" ? "klik" : ""}`}>Sofa</p>
                    <p onClick={() => productSec("closet")} className={`${product === "closet" ? "klik" : ""}`}>Closet</p>
                    <p onClick={() => productSec("lamp")} className={`${product === "lamp" ? "klik" : ""}`}>Lamp</p>
                    <p onClick={() => productSec("bookshelf")} className={`${product === "bookshelf" ? "klik" : ""}`}>Bookshelf</p>
                    </div>
                </div>
                <div className="right-productss">
                    
                    {product === 'chair' &&
                        prdctJson.chairs.map((chair) => (
                            <Productcard key={chair.id} item={chair} handleClick={handleClick} />
                        ))}
                    {product === 'table' &&
                        prdctJson.tables.map((table) => (
                            <Productcard key={table.id} item={table} handleClick={handleClick} />
                        ))}
                    {product === 'sofa' &&
                        prdctJson.sofa.map((sofa) => (
                            <Productcard key={sofa.id} item={sofa} handleClick={handleClick} />
                        ))}
                    {product === 'closet' &&
                        prdctJson.closet.map((closet) => (
                            <Productcard key={closet.id} item={closet} handleClick={handleClick} />
                        ))}
                    {product === 'lamp' &&
                        prdctJson.lamp.map(lamp => (
                            <Productcard key={lamp.id} item={lamp} handleClick={handleClick} />
                        ))}
                    {product === 'bookshelf' &&
                        prdctJson.bookshelf.map(bookshelf => (
                            <Productcard key={bookshelf.id} item={bookshelf} handleClick={handleClick} />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Allproducts