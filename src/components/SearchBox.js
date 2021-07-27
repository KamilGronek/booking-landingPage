import React, { useState, useRef, useEffect } from "react"
import axios from 'axios';
import { Button, Container, Card, Jumbotron, Row, Col, Overlay, Popover, Form, Select } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DateRangePicker} from 'react-dates';
import { SearchboxButton } from '../styledComponents/styledSearchBox'

import { Link } from "gatsby"
import "../styles/searchbox.css"
import AutoComplete from "./AutoComplete"
// import config from 'gatsby-plugin-config';


let DomParser = require('dom-parser');
let parser = new DomParser();

const SearchBox = () => {

  const [show, setShow] = useState(false);
  const [rootClose, setRootClose] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState()

  const handleClick = (event) => {
    console.log(event)
    setShow(!show);
    setRootClose(!rootClose)
    setTarget(event.target);
  };

  

  const [counterAdult, setCounterAdult] = useState(1);
  const [counterChildren, setCounterChildren] = useState(0);
  const [counterRoom, setCounterRoom] = useState(1);

  const [data, setData] = useState([]);
  const [search_text, setSearch_text] = useState("");

  const api_key = 'pk.eyJ1Ijoia2FtaWxvemlnb2xvIiwiYSI6ImNrbHRsbHQzOTB4aHgyeG1wa3JobGV0MDQifQ.I4Hxd0pgy7exwHySBN04Ng'

  useEffect(() => {
    axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/=${search_text}.json?access_token=${api_key}`)
      .then((response) => {
        setData(response.data.features)
      });
  }, [search_text])


  const handleAutoComplete = (newValue) => {
    setSearch_text(newValue);
  }

  const handleInputSearch = (value) => {
    setSearch_text(value)
  }


  const options = data.map((feature) => feature.text) || [""]
  console.log(options)


  const [paramameters, setParameters] = useState([
    {
      ss: "August%C3%B3w",
      is_ski_area: "0",
      ssne: "August%C3%B3w",
      ssne_untouched: "August%C3%B3w",
      dest_id: "-492452", 
      dest_type: "city",
      checkin_monthday: "4",
      checkin_year_month: "2021-8",
      checkout_monthday: "5",
      checkout_year_month: "2021-8",
      checkin: "2021-08-04",
      checkout: "2021-08-05",
      group_adults: "2",
      group_children: "4",
      age: "16",
      age: "16",
      age: "16",
      age: "16",
      no_rooms: "1",
    }
  ])

  const substractBtn = (option) => {
    switch (option) {
      case "adult":
        setCounterAdult(counterAdult - 1)
        break;
      case "children":
        setCounterChildren(counterChildren - 1)
        deleteButtonChild();
        break;
      case "rooms":
        setCounterRoom(counterRoom - 1)
        break;
      default:
        return "something goes wrong"
    }
  }

  const addBtn = (option) => {
    switch (option) {
      case "adult":
        setCounterAdult(counterAdult + 1)
        console.log(counterAdult)
        break;
      case "children":
        setCounterChildren(counterChildren + 1)
        addButtonChild();
        break;
      case "rooms":
        setCounterRoom(counterRoom + 1)
        break;
      default:
        return "something goes wrong"
    }
  }


  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  }


  const [arrayForSelects, setArrayForSelects] = useState([])

  let childrenAge = [];
  for (let number = 1; number <= 17; number++) {
    childrenAge.push(number)
  }


  const addButtonChild = () => {
    arrayForSelects.push(childrenAge)
    setArrayForSelects(arrayForSelects)
  }

  const deleteButtonChild = () => {
    arrayForSelects.pop();
  }

  const handleChangeColor = () => {
    console.log("zmien kolor")
  }



  return (
    <>
      <Jumbotron fluid >
        <Container className="searchbox">
          <h3>Find deals on hotels, homes, and much more...</h3>
          <p>From cozy country homes to funky city apartments</p>
          <Row>
            <Col lg={4} sm={4} style={{ paddingRight: "0px" }} className="searchbox__autocomplete">
                <AutoComplete 
                  onAutoComplete={handleAutoComplete}
                  onInputSearch={handleInputSearch}
                  options={options}
                />
            </Col>
            <Col lg={3} md={4} sm={6}
              style={{ padding: "0px" }}
            >
              <DateRangePicker style={{ display: "flex" }}
                customInputIcon={<svg aria-hidden="true" class="bk-icon -experiments-calendar sb-date-picker_icon-svg" fill="#BDBDBD" focusable="false" height="20" role="presentation" width="20" viewBox="0 0 128 128"><path d="m112 16h-16v-8h-8v8h-48v-8h-8v8h-16c-4.4 0-8 3.9-8 8.7v86.6c0 4.8 3.6 8.7 8 8.7h96c4.4 0 8-3.9 8-8.7v-86.6c0-4.8-3.6-8.7-8-8.7zm0 95.3a1.1 1.1 0 0 1 -.2.7h-95.6a1.1 1.1 0 0 1 -.2-.7v-71.3h96zm-68-43.3h-12v-12h12zm0 28h-12v-12h12zm26-28h-12v-12h12zm0 28h-12v-12h12zm26 0h-12v-12h12zm0-28h-12v-12h12z" fillRule="evenodd"></path></svg>}
                startDate={startDate}
                startDatePlaceholderText="Check-in"
                startDateId="your_unique_start_date_id"
                endDate={endDate}
                endDatePlaceholderText="Check-out"
                endDateId="your_unique_end_date_id"
                onDatesChange={onDatesChange}
                focusedInput={focusedInput}
                onFocusChange={focusedInput => setFocusedInput(focusedInput)}
              />
            </Col>
            <Col lg={3} md={4} sm={6} 
            style={{
              paddingLeft: "0px",
              paddingRight: "0px"
            }}>

              <div ref={ref}>
              <img 
                 style={{position:"absolute", padding:"20px"}}
                src="https://cf.bstatic.com/static/img/cross_product_index/guest/b2e5f2aa32b71ca0fc66aa671e4e958bcd69b7d0.svg"/>
                <label className="searchbox__guest-toggle">
                    <span>{counterAdult}adults</span>
                    <span data-visible="accommodation"> &nbsp;·&nbsp;</span>
                    <span>{counterChildren}children</span>
                    <span data-visible="accommodation"> &nbsp;·&nbsp;</span>
                    <span>{counterRoom}room</span>
                <img  onClick={handleClick}
                 style={{position:"absolute", paddingLeft:"200px"}}
                 className="searchbox__select"
                src="https://cf.bstatic.com/static/img/cross_product_index/toggle/fb6f63d62231f9fe552d79b5448620b2e63c726e.svg"/>
                </label>
              

                <Overlay className="searchbox__overlay"
                  show={show}
                  target={target}
                  placement="bottom"
                  container={ref.current}
                  containerPadding={20}
                  rootClose={rootClose}
                >
                  <Popover className="searchbox__overlay-popover" id="popover-contained" style={{ marginTop: "27px" }}>
                    <Popover.Content>
                      <Row className="d-flex justify-content-between align-items-center">
                        <label>Adults</label>
                        <div>
                          {counterAdult == 1 ?
                            (<SearchboxButton disabled variant="light">
                              <span>−</span>
                            </SearchboxButton>)
                            :
                            (<SearchboxButton variant="light" onClick={() => substractBtn("adult")}>
                              <span>−</span>
                            </SearchboxButton>)
                          }
                          <span className="searchbox__value">{counterAdult}</span>
                          <SearchboxButton variant="light" onClick={() => addBtn("adult")}>
                            <span>+</span>
                          </SearchboxButton>
                        </div>
                      </Row>
                      <br />
                      <Row className="d-flex justify-content-between">
                        <div className="d-flex flex-column">
                          <label className="searchbox__label">Children</label>
                          <span className="searchbox__span">Ages 0 – 17</span>
                        </div>
                        <div>
                          {counterChildren == 0 ?
                            (<SearchboxButton disabled variant="light" >
                              <span>−</span>
                            </SearchboxButton>)
                            :
                            (<SearchboxButton variant="light" onClick={() => substractBtn("children")}>
                              <span>−</span>
                            </SearchboxButton>)
                          }
                          <span className="searchbox__value">{counterChildren}</span>
                          <SearchboxButton variant="light" onClick={() => addBtn("children")}>
                            <span>+</span>
                          </SearchboxButton>
                        </div>
                      </Row>

                      <Row>
                        {arrayForSelects.map((array) => (
                          <>
                            <select className="custom-select"
                              key={array}
                            >
                              <option>Age needed</option>
                              {array.map(element => (
                                <option value="element" key={element} onChange={handleChangeColor()}>
                                  {`${element} years old`}
                                </option>
                              ))}
                            </select>
                          </>
                        ))}
                        {counterChildren > 0 ?
                          (<label style={{ padding: "8px 0xp 1px" }}>
                            To find a place to stay that fits your entire group
                            along with correct prices, we need to know how old
                            your children will be at check-out
                          </label>)
                          : ""
                        }
                      </Row>
                      <br />
                      <Row className="d-flex justify-content-between align-items-center">
                        <label>Rooms</label>
                        <div>
                          {counterRoom == 1 ?
                            (<SearchboxButton disabled variant="light">
                              <span>−</span>
                            </SearchboxButton>)
                            :
                            (<SearchboxButton variant="light" onClick={() => substractBtn("rooms")} >
                              <span>−</span>
                            </SearchboxButton>)
                          }
                          <span className="searchbox__value">{counterRoom}</span>
                          <SearchboxButton variant="light" onClick={() => addBtn("rooms")}>
                            <span>+</span>
                          </SearchboxButton>
                        </div>
                      </Row>
                    </Popover.Content>
                  </Popover>
                </Overlay>
              </div>
            </Col>
            <Col lg={2} md={12} sm={6} style={{ paddingLeft: "0px" }} className="searchbox__button">
              <Link to="/page-2/" state={{paramameters:paramameters}}>
              <Button className="searchbox_button">Search</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col xs="auto" className="my-1">
              <Form.Check type="checkbox" id="autoSizingCheck2" label="I'm traveling for work" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  )
}

export default SearchBox

