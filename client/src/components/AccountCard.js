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
              <p className="card-text"><strong>Website: <input value={props.data.url} readOnly/></strong></p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-body align-items-center">
              <p className="card-text"><strong>Username: <input value={props.data.username} readOnly/> </strong></p>
              <p className="card-text"><strong>Password: <input value={props.data.password} type="password" readOnly/></strong></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
