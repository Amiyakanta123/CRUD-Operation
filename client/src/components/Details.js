import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Details = () => {
  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}>Welcome Amiya</h1>

      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
        <div className="add_btn">
                <button className="btn btn-primary mx-3">
                  <BorderColorIcon />
                </button>
                <button className="btn btn-danger">
                  <DeleteIcon />
                </button>
              </div>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12">
              <img src="/Image.png" style={{ width: 50 }} alt="profile" />
              <h3 className="mt-3">
                Name: <span>Amiyakanta Behera</span>
              </h3>
              <h3 className="mt-3">
                Age: <span>21</span>
              </h3>
              <p className="mt-3">
                <EmailIcon />
                Email: <span>amiya@gmail.com</span>
              </p>
              <p className="mt-3">
                <WorkIcon />
                Occupation: <span>Webdevloper</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              
              <p className="mt-5">
                <PhoneIphoneIcon />
                Mobile: <span>+91 7008605124</span>
              </p>
              <p className="mt-3">
                <LocationOnIcon />
                Location: <span>Banglore</span>
              </p>
              <p className="mt-3">
                Description:{" "}
                <span>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum
                  molestiae
                </span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
