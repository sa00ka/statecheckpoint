import "./App.css";
import { useState } from "react";
import Navbars from "./components/Navbars";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

function App() {
  // declaration of state variable as array of objects
  const [portfolio, SetPortfolio] = useState([
    {
      FullName: "Sami Krouf",
      Proffession: "Full Stack Developper",
      Bio: "full stack developers straddle two separate web development domains: the front end and the back end.",
      image: "fullstacks.png",
    },
    {
      FullName: "Mohamed Beji",
      Proffession: "Full Stack Developper",
      Bio: "full stack developers straddle two separate web development domains: the front end and the back end.",
      image: "fullstacks2.png",
    },
    {
      FullName: "Hassen Lamine",
      Proffession: "Full Stack Developper",
      Bio: "full stack developers straddle two separate web development domains: the front end and the back end.",
      image: "fullstacks3.png",
    },
  ]);
  // se of state variable toggle boolean
  const [toggle, setToggle] = useState(false);
  // set a handle function to facilate uses
  const HandleFunction = () => {
    setToggle(!toggle);
  };
  // return App component
  return (
    <div className="App">
      <Navbars></Navbars>
      <Button
        className="btnbtn"
        variant="primary"
        onClick={() => HandleFunction()}
      >
        {toggle ? "Hide Profiles" : "Show Profiles"}
      </Button>
      {toggle && (
        <div className="elcarta">
          {portfolio.map((el, index) => (
            <Card
              key="index"
              style={{
                width: "18rem",
                borderRadius: "10px 10px ",
                margin: "70px 20px 20px 20px",
                borderStyle: "none",
                boxShadow: "0 3px 10px rgb(0 0 0 / 0.2",
                backgroundColor: "lightcyan",
                padding: "0px",
              }}
            >
              <Card.Img
                variant="top"
                src={el.image}
                data-aos="fade-up"
                data-aos-duration="1500"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  margin: "20px auto 15px auto",
                  boxShadow: "0 8px 8px -4px gray",
                }}
              />
              <Card.Body style={{ padding: "16px 0px" }}>
                <Card.Title
                  style={{
                    fontFamily: "monospace",
                    fontSize: "30px",
                    fontWeight: "bolder",
                    color: "brown",
                  }}
                >
                  {el.FullName}
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: "monospace",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {el.Proffession}
                </Card.Text>
                <Card.Text
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    margin: "30px 0",
                    padding: "10px 0px",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                  }}
                >
                  {el.Bio}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
