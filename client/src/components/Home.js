import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2">
          <NavLink to="/register" className="btn btn-primary mb-2">Add data</NavLink>
        </div>
        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <tr>
              <th scope="row">1</th>
              <td>Amiya</td>
              <td>amiya@gmail.com</td>
              <td>Web_devloper</td>
              <td>7008605124</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success"><RemoveRedEyeIcon/></button>
                <button className="btn btn-primary"><BorderColorIcon/></button>
                <button className="btn btn-danger"><DeleteIcon/></button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Amiya</td>
              <td>amiya@gmail.com</td>
              <td>Web_devloper</td>
              <td>7008605124</td>
              <td className="d-flex justify-content-between">
              <button className="btn btn-success"><RemoveRedEyeIcon/></button>
                <button className="btn btn-primary"><BorderColorIcon/></button>
                <button className="btn btn-danger"><DeleteIcon/></button>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
