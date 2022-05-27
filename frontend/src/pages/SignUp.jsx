import React from 'react'
import { Link } from 'react-router-dom'
import {useFormik} from "formik"
import * as yup from "yup"
import {axios} from "axios"

export default function SignUp() {
  const formik = useFormik({
    initialValues:{
      name: "",
      email : "",
      password : "",
      cpassword : ""
    },
    validationSchema: yup.object({
      name:yup.string().required("Name Is requerd"),
      email:yup.string().email("this is not valid").required("can not be empty"),
      password:
      yup
        .string()
        .required("password can not be empty")
        .min(3, "password can not be less than 3 charactors"),
    cpassword:
      yup.string()
        .required("confirm password can not be empty")
        .oneOf(
          [yup.ref("password"), null],
          "password and confirm password do not matched"
        ),
        
    }),
    onSubmit :  () => {
      // e.preventdefault()
      console.log("formik.value",formik.values);
    }
  })
  return (
    <div>
        <div className="container">
              <div className="row">
                <div className="col-sm-6 offset-sm-3">
                  <div className="card">
                    <div className="card-header">Signup</div>
                    <form onSubmit={formik.handleSubmit} >
                    <div className="card-body">
                      <div>
                        <label for="name" className="form-label">First name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter your name"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          // error={formk?.error.name}
                        />
                        <label  className='text-danger'>{formik?.errors.name}</label>
                      </div>
                      <div className="mt-2">
                        <label for="email" className="form-label">First Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Enter Your Email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                        />
                        <label  className='text-danger'>{formik?.errors.email}</label>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a username.</div>
                      </div>
                      <div className="mt-2">
                        <label for="password" className="form-label">Password</label>
                        <input
                          type="text"
                          className="form-control"
                          id="password"
                          placeholder="Enter Your Password"
                          onChange={formik.handleChange}
                          value={formik.values.password}
                        />
                        <label  className='text-danger'>{formik?.errors.password}</label>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please choose a password.</div>
                      </div>
                      <div className="mt-2">
                        <label for="cpassword" className="form-label"
                          >Confirm Password</label
                        >
                        <input
                          type="text"
                          className="form-control"
                          id="cpassword"
                          placeholder="Confirm Your Password"
                          onChange={formik.handleChange}
                          value={formik.values.cpassword}
                        />
                        <label  className='text-danger'>{formik?.errors.cpassword}</label>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">
                          Please Recheck Your Password.
                        </div>
                      </div>
                      <button type='sumbit'  className="btn btn-primary w-100 mt-3">
                        Signup
                      </button>
                      <p className="text-center mt-3">
                        Already Have Account? <Link to={"/"}>Login</Link>
                      </p>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

    </div>
  )
}
