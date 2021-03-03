import React from 'react';

const products = [
    {
        id: 1,
        name: 'Proizvod 1',
    },
    {
        id: 2,
        name: 'Proizvod 2',
    },
    {
        id: 3,
        name: 'Proizvod 3',
    },
    {
        id: 4,
        name: 'Proizvod 4',
    },
    {
        id: 5,
        name: 'Proizvod 5',
    },
    {
        id: 6,
        name: 'Proizvod 6',
    }
]

export const Shop = () => {
    return (
        <section id="shop">
            <h1>Prodavnica</h1>
            <div className="shop">
                {products.map(product => {return <div className="product" key={product.id}>{product.name}<img className="img-fluid" src={ `https://unsplash.it/350/140/?${Math.floor(Math.random(0,100) * 100)}` } alt="portfolio_img" /></div>})}
            </div>
        </section>
    )
}