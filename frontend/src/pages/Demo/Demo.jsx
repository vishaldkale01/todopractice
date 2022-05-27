import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, useFormik } from 'formik'
import * as yup from "yup"
export default function Demo() {
        const formik = useFormik({
            initialValues :{
                email: "",
                password : ""
            },
            validationSchema: yup.object({
                email:yup.string().email("this is not valid").required("can not be empty"),
                password:yup.string().required("password can not be empty")
              }),
              onSubmit :  () => {
                // e.preventdefault()
                console.log("formik.value",formik.values);
              }
            })
  return (
    <div style={{backgroundColor : "whitesmoke" , height : "100%",  position : "relative"  }} className="d-flex justify-content-between">
            <div style={{backgroundColor : "#1affa3" , height : "100vh" , paddingTop:"10%" , width : "30%", position : "absolute"}}>
                <div style={{backgroundColor : "#1affa3" , height : "70vh" , width : "50%", marginLeft : "50%", border : "1px ", position : "relative" , padding: "25px", boxShadow: "1px 2px 10px 0px black" }}>
                  <div style={{backgroundColor : "red" , height : "20vh" , width : "20%" , position : "absolute" , Left: "60%" , right : "50%", marginTop : "50%" }}>
                    <img src="Show-classic-cars-vector-car-illustrations-on-transparent-background-PNG.png" alt="" />
                  </div>
                </div>
            </div>
            <div style={{backgroundColor : "white" , height : "100vh" , width :  "100%", paddingTop:"10%" }}>
            <div style={{backgroundColor : "whitesmoke" , height : "70vh" , width : "80%" , border : "5px solid whitesmoke ", padding: "10px", boxShadow: "1px 2px 10px 0px black"  }}>
                <div className="card"  style={{width: '100vh',  backgroundColor : "whitesmoke", marginLeft : "30%", position : "absolute" , marginTop:"5%" , border : "1px " , borderRadius : "25px" }}>
                   <div className="card-body">
                    <h5 className="card-title " style={{textAlign :"center"}}>Log In</h5>


                    <div className="col-md-6 m-auto">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="email" style={{}}>Email </label>
                          <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={formik.handleChange} value={formik.values.email} />
                          <label htmlFor="">{formik?.errors.email}</label>
                        </div>
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} />
                        </div>
                        <label htmlFor="">{formik?.errors.password}</label>

                        <div className="form-check">
                          <label className="form-check-label float-right"  htmlFor="remember">
                            <Link to={"/"} >forget Password</Link>
                          </label> 
                        </div> <br />
                        <button type="submit" class="btn btn-primary form-control ">Login</button>
                      </form>
                    </div>
                  </div> 
                </div>
                
            </div>
            </div>
    </div>
  )
}
