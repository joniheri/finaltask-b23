import React, { useContext } from "react";
import { Carousel, Image } from "react-bootstrap";
import { AuthContext } from "../CheckLogin2";

export default function HomeComp() {
  const { state, dispatch } = useContext(AuthContext);

  console.log("ResponseDataPayload: ", state);

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={{
              width: "100%",
              height: "550px",
              objectFit: "cover",
            }}
            src={
              require("../../img/Wallpaper/pexels-elti-meshau-333850.jpg")
                .default
            }
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Hallo, Iam is first image slade</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{
              width: "100%",
              height: "550px",
              objectFit: "cover",
            }}
            src={
              require("../../img/Wallpaper/pexels-pixabay-36762.jpg").default
            }
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{
              width: "100%",
              height: "550px",
              objectFit: "cover",
            }}
            src={
              require("../../img/Wallpaper/pexels-sebastiaan-stam-1482476.jpg")
                .default
            }
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* Batas */}
    </div>
  );
}
