import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import {TbWindsock} from 'react-icons/tb'
import {BiCurrentLocation} from 'react-icons/bi'
import {TbTemperatureCelsius} from 'react-icons/tb'
import {WiHumidity} from 'react-icons/wi'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const [search, setSearch] = useState("");
  const [cities, setCity] = useState({});
  function HandleSearch(e) {
    setSearch(e.target.value);
  }
  function HandleCity() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        search +
        "&appid=" +
        "f56f24967aaf51182d1d4df628297c6d"
    )
      .then((res) => res.json())
      .then((data) => setCity(data));
  }
  // useEffect(()=>{
  //   fetch()
  // },[])
  return (
    <>
      {console.log(cities?.weather?.[0].icon)}
      {console.log("Bhavish", cities?.wind?.speed)}
      <Navbar bg="primary" expand="lg">
      <Container>
      <Navbar.Brand style={{color:"white"}}>
        <img
          alt="Logo"
          src="https://cdn-icons-png.flaticon.com/512/4052/4052984.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
         {' '} Weather App
      </Navbar.Brand>
      </Container>
      </Navbar>
      
      <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={HandleSearch}
      />
      <Button variant="btn-sm" onClick={HandleCity}>
      Search
    </Button>
    </Form>

      <Card style={{ width: "18rem" ,display : 'flex', alignItem:'center',justifyContent:'center'}}>
        <Card.Img variant="background" src="https://i.pinimg.com/originals/e7/7a/60/e77a6068aa8bb2731e3b6d835c09c84c.gif" />
        <Card.Body >
          <Card.Title>{cities?.name}</Card.Title>
          <Card.Text>
          <ul>
          <h3 >
           <TbTemperatureCelsius/> {(cities?.main?.temp - 273.15).toFixed(2)}{','}{cities?.weather?.[0].main}
          </h3>
          <h4> <BiCurrentLocation/>{'  '}{cities?.name}{','} {cities?.sys?.country}</h4>
          <h5></h5>
          <h5><WiHumidity/> {cities?.main?.humidity}%</h5>
          <h5><TbWindsock /> {'  '}{cities?.wind?.speed}</h5>
        </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default App;
