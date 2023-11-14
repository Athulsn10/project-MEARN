import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { registerAPI } from "../Services/allAPI";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Auth({register}) {
  const navigate = useNavigate()
  const isRegisterForm = register?true:false

  // Handle registration
  const [userData, setUserData] = useState({
      username: "",
      email: "",
      password: ""
  })
  const handleRegister = async(e) => {
      e.preventDefault()
      const {username, email, password} = userData
      if (!username || !email || !password) {
          toast.info("Please fill all details")
      } else {
          const result = await registerAPI(userData)
          console.log("result"+result);
          console.log("result.response"+result.response);
          if (result.status === 200) {
              toast.success(`${result.data.username} has registered successfully`)
              navigate('/login')
          } else {
              toast.warning(result.response.data)
          }
      }
  }
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
                : "sign in to your account"}
            </h5>
            <Form className="w-100">
              {isRegisterForm && (
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control
                    type="text"
                    placeholder="Enter Userame"
                    value={userData.username}
                    onChange={(e) =>
                      setUserData({ ...userData, username: e.target.value })
                    }
                  />
                </Form.Group>
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicpaswd">
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </Form.Group>
              {isRegisterForm ? (
                <div>
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      className="btn btn-primary"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                  </div>
                  <p className="mt-2">
                    Already A user? <Link to={"/login"}>Login</Link>{" "}
                  </p>
                </div>
              ) : (
                <div>
                  <div className="d-flex align-items-center justify-content-center">
                    <button className="btn btn-primary">Register</button>
                  </div>
                  <p className="mt-2">
                    Dont Have Account? <Link to={"/register"}>Register</Link>{" "}
                  </p>
                </div>
              )}
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Auth;
