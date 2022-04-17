import React from 'react';

const DisplayService = (props) => {
    const {name, img, price, ratings, seller, category} = props.photo
    return (
        <div>
             <div class="col">
    <div class="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Name: {name}</h5>
        <h5 class="card-title">price: {price}</h5>
        <h5 class="card-title">seller: {seller}</h5>
        <h5 class="card-title">Category: {category}</h5>
        <h5 class="card-title">ratings: {ratings}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <button type="button" class="btn btn-success">Success</button>
    </div>
  </div>
        </div>
    );
};

export default DisplayService;