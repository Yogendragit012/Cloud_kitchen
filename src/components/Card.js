import React from "react";

function Card() {
  return (
    <>
      <div className="container">
        <div className="card mt-1" style={{ width: "18rem", maxHeight: "320px" }}>
          <img
            src="https://source.unsplash.com/random/100×700/?burger"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Burger</h5>
            <p className="card-text">Some quick example text.</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
