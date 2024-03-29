import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">Product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">Name of Product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">Price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">Quantity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">Remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">Total</p>
        </div>
      </div>
    </div>
  );
}
