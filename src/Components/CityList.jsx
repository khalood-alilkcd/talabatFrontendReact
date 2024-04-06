import { Col, Container, Row } from "react-bootstrap";
import { GoChevronRight } from "react-icons/go";
import { useThemeHook } from "../GlobalComponent/ThemeProvider";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./CityList.css";
import { Scrollbars } from "react-custom-scrollbars";

function CityList(props) {
  const [theme] = useThemeHook();
  const cities = [
    "Alexandria",
    "Cairo",
    "Tanta",
    "Suez",
    "Aswan",
    "Alexandria",
    "Cairo",
    "Tanta",
    "Suez",
    "Aswan",
  ];

  return (
    <Container
      className={`pt-5 ${theme ? "text-dark-primary" : "bg-light-2"}}`}
    >
      <h3 className={theme ? "text-dark-primary" : "bg-light-2"}>
        Select to get Clients in the City you Choose
      </h3>

      <div className="py-5  d-flex flex-lg-row ">
        {/* Content goes here */}
        <div style={{ overflowX: "scroll" }} className="">
          <div
            style={{
              width: "1700px",
              height: "100px",
              backgroundColor: "lightgray",
            }}
            className="d-flex "
          >
            {cities.map((city) => (
              <Link
                to={`/clients/${city}`}
                className={`px-2 ${
                  theme ? "bg-dark-primary text-black" : "bg-light-primary"
                } d-flex justify-content-between align-items-center border rounded-2 item `}
                style={{ width: "200px", height: "100px" }}
              >
                <h3 className={theme ? " text-black" : "text-light"} key={city}>
                  {city}
                </h3>

                <GoChevronRight
                  width="1.8rem"
                  className={theme ? " text-black" : "text-light"}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default CityList;
