import React from 'react';

const DisplayCheckOut = (props) => {
    const {name, img, price, ratings, seller, category} = props.photo

    return (
        <div>
               <div>
             <div className="col">
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <h5 className="card-title">price: {price}</h5>
        <h5 className="card-title">seller: {seller}</h5>
        <h5 className="card-title">Category: {category}</h5>
        <h5 className="card-title">ratings: {ratings}</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <button  type="button" className="btn btn-success">Check-out</button>
    </div>
  </div>
        </div>
        </div>
    );
};

export default DisplayCheckOut;