import React from "react";
//import { Card } from 'react-bootstrap'

export default function AccountCard(props) {
  return (
    <>
      <div className="card mt-4 mb-3" style={{ minWidth: "30vw" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/200" alt="account" />
          </div>
          <div className="col-md-3">
            <div className="card-body">
              <h5 className="card-title">Account Name</h5>
              <p className="card-text"><strong>Website: </strong></p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-body align-items-center">
              <p className="card-text"><strong>Email: </strong></p>
              <p className="card-text"><strong>Password: </strong></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
