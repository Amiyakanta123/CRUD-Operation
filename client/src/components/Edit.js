import React, { useState } from "react";
import { NavLink } from "react-router-dom";



const Edit = () => {
    const [inpval, setINP] = useState({
        name: "",
        email: "",
        age: "",
        mobile: "",
        work: "",
        add: "",
        des: "",
      });
      
      const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
          return {
            ...preval,
            [name]: value,
          };
        });
      };


  return (
    <div className="container">
      <NavLink to="/">Home-2</NavLink>
      <form className="mt-4">
        <div className="row">
          <div class="mb-3 clo-lg-6 col-md-6 col-12">
            <label for="exampleInputEmail1" class="form-label">
              Name
            </label>
            <input
              type="text"
              onChange={setdata}
              value={inpval.name}
              name="name"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3 clo-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Email
            </label>
            <input
              type="email"
              onChange={setdata}
              value={inpval.email}
              name="email"
              class="form-control"
              id="exampleInputPassword1"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3 clo-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Age
            </label>
            <input
              type="number"
              onChange={setdata}
              value={inpval.age}
              name="number"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 clo-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Mobile
            </label>
            <input
              type="number"
              onChange={setdata}
              value={inpval.mobile}
              name="mobile"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 clo-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Work
            </label>
            <input
              type="text"
              onChange={setdata}
              value={inpval.work}
              name="work"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 clo-lg-6 col-md-6 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Address
            </label>
            <input
              type="text"
              onChange={setdata}
              value={inpval.add}
              name="add"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 clo-lg-12 col-md-12 col-12">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <textarea
              name="des"
              onChange={setdata}
              value={inpval.des}
              className="form-control"
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
