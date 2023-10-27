import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Auth({ register }) {
  const isRegisterForm = register ? true : false;
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="">
        <div className="card shadow-sm p-5 mb-2">
          <div className="d-flex align-items-center flex-column">
            <h3>Project Fair</h3>
            <h5 className="mt-2 mb-4">
              {isRegisterForm
                ? "sign up to your account"
                : "sign in to your account"
              }
            </h5>
            <Form className="w-100">
              {
                isRegisterForm &&
              <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Enter Userame" />
              </Form.Group>
              }
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicpaswd">
              <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>
              {
                isRegisterForm ?
               <div>
                  <div className="d-flex align-items-center justify-content-center">
                    <button className="btn btn-primary">Register</button>
               </div>
               <p className="mt-2">Already A user? <Link to={'/login'}>Login</Link> </p>
                </div>
                :<div>
                <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-primary">Register</button>
                </div>
                <p className="mt-2">Dont Have Account? <Link to={'/register'}>Register</Link> </p>
                </div>
              }
            </Form>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link
            style={{
              textDecoration: "none",
              fontWeight: "bolder",
              border: "none",
            }}
            to={"/"}
          >
            Back To Home
            <i className="fa-solid fa-house" style={{ color: "#000000" }}></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Auth;
