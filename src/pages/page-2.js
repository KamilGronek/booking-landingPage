import * as React from "react"
import { Link } from "gatsby"
import { Button,Container,Card,Jumbotron,Row,Col,Overlay,Popover,Form,Pagination} from 'react-bootstrap';
import Layout from "../components/layout"
import Seo from "../components/seo"
// import {SearchBox} from "../styledComponents/styledSearchBox"
import "../styles/styles.css";
import {HumanIcon} from "../images/logosSVG";
import axios from 'axios';

import {Column,Sort,Sort_Link, HotelName} from "../styledComponents/styledPage2"
import "../styles/page-2.css"

const SecondPage = ({location}) => {
// console.log(location.state.paramameters)

  const [hotelValues, setHotelValues] = React.useState(
    [
      {
        hotelName:null,
        nameAndKm:null,
        tripleRoom:null,
        freeCancel:null,
        rate:null,
        views:null,
        score:null,
        dataRoom:null,
        price:null,
        includes:null,
        images:null
      }
    ]
  )

  const [paramameters,setParameters] = React.useState(
    // location.state.paramameters
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
  )

  let dataFromServer = null;
  let DomParser = require('dom-parser');
  let parser = new DomParser();
  
  React.useEffect(() =>  {
      axios.get(`https://www.booking.com/searchresults.html?
      label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEM2AED6AEBiAIBqAIDuALklryHBsACAdICJGNiNDUwZDc1LTM0ZjktNGJiMy04ZTE1LTg4MDcwYzljNGE3ZtgCBOACAQ
      &sid=3e617b867e153c47c7b40da1a5948082
      &sb=1
      &sb_lp=1
      &src=index
      &src_elem=sb
      &error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Flabel%3Dgen173nr-1DCAE
      oggI46AdIM1gEaLYBiAEBmAEeuAEXyAEM2AED6AEBiAIBqAIDuALklryHBsACAdICJGNiNDUwZDc1
      LTM0ZjktNGJiMy04ZTE1LTg4MDcwYzljNGE3ZtgCBOACAQ%3Bsid%3D3e617b867e153c47c7b40da
      1a5948082%3Bsb_price_type%3Dtotal%3Bsrpvid%3D85cd715a39e800aa%26%3B
      &ss=${paramameters.ss}
      &is_ski_area=0
      &ssne=${paramameters.ssne}
      &ssne_untouched=${paramameters.ssne_untouched}
      &dest_id=${paramameters.dest_id}
      &dest_type=${paramameters.dest_type}
      &checkin_monthday=${paramameters.checkin_monthday}
      &checkin_year_month=${paramameters.checkin_year_month}
      &checkout_monthday=${paramameters.checkout_monthday}
      &checkout_year_month=${paramameters.checkin_year_month}
      &checkin=${paramameters.checkin}
      &checkout=${paramameters.checkout}
      &group_adults=${paramameters.group_adults}
      &group_children=${paramameters.group_children}
      &age=${paramameters.age}
      &age=${paramameters.age}
      &age=${paramameters.age}
      &age=${paramameters.age}
      &no_rooms=${paramameters.no_rooms}
      &b_h4u_keep_filters=&from_sf=1`)
      .then(response => {
          let html = response.data;
          let dom = parser.parseFromString(html, 'text/xml');

      let arrayResults = [];
      let itemsLength = dom.getElementsByClassName('sr-card__item__content').length;
      console.log(itemsLength);

      let hotelNameTab = dom.getElementsByClassName('sr-card__name');
      let nameAndKmTab = dom.getElementsByClassName('sr-card__item__content');
      let tripleRoomTab = dom.getElementsByClassName('m_sr_card__price_unit_name m_sr_card__price_unit_name--grey m_sr_card__price_small m_sr_card__price_unit_name-bold');
      let freeCancelTab = dom.getElementsByClassName('sr-card__item--strong');
      let rateTab = dom.getElementsByClassName('bui-review-score__title');
      let viewsTab = dom.getElementsByClassName('bui-review-score__text');
      let scoreTab = dom.getElementsByClassName('bui-review-score__badge');
      let dataRoomTab = dom.getElementsByClassName('mpc-no-wrap-helper');
      let priceTab = dom.getElementsByClassName('prco-js-headline-price mpc-inline-block-maker-helper bui-price-display__value mpc-color_dark-green-helper');
      let includesTab = dom.getElementsByClassName('prd-taxes-and-fees-under-price mpc-inline-block-maker-helper blockuid-');
      let imagesTab = dom.getElementsByClassName('sr-card__image');
      for (let i = 0; i < itemsLength; i++ ) {
          let hotelName = getValue(hotelNameTab[i])
          let nameAndKm = getValue(nameAndKmTab[i])
          let tripleRoom= getValue(tripleRoomTab[i])
          let freeCancel= getValue(freeCancelTab[i])
          let rate= getValue(rateTab[i])
          let views= getValue(viewsTab[i])
          let score= getValue(scoreTab[i])
          let dataRoom= getValue(dataRoomTab[i])
          let price= getValue(priceTab[i])
          let includes= getValue(includesTab[i])
          let images= getImages(imagesTab[i])
        
          let item = {
            hotelName,
            nameAndKm,
            tripleRoom,
            freeCancel,
            rate,
            views,
            score,
            dataRoom,
            price,
            includes,
            images
          }    
          arrayResults.push(item)
      }

      setHotelValues(arrayResults)

      })
      .catch(error => {
          console.log(error);
          console.log("error")
      })
  },[location]);

  const getValue = (value) => {
    return value == undefined ? null : value.textContent;
  }

const getImages = (value) => {
  return value == undefined ? null : value.getAttribute("data-src").split(",")[0]
}

const[pagesNumber,setPagesNumber] = React.useState(0);
const countriesPerPage = 25;
const pagesVisited = pagesNumber * countriesPerPage;


const displayResults =()=>{
    return(
    hotelValues
    .slice(pagesVisited,pagesVisited + countriesPerPage)
    .map((value)=>(
        <>
           <Row key={value.hotelName} style={{border:"1px solid #c6c6c6", padding:"16px", marginTop:"16px"}}>
                <Col sm={4}>
                    <img src={value.images}/>
                </Col>  
                <Col sm={6}>
                   <Row>
                     <HotelName>{value.hotelName}</HotelName>
                    </Row>
                      <Row style={{fontSize:"12px"}}>
                        <span>
                          <span className="dot-separator"></span>
                         {value.nameAndKm}
                        </span>
                      </Row>
                      <Row>
                        <span><HumanIcon/></span>
                        <span>{value.tripleRoom}</span>
                      </Row>
                      <Row>
                       {value.freeCancel}
                      </Row>
                      <Row>
                        You can cancal later, so lock in this great price today!
                      </Row>
                </Col>
                <Col sm={2}>
                  <Row>
                    <div style={{
                      display:"flex",
                      flexDirection:"column"}}>
                       <span>{value.rate}</span>
                       <span>{value.views}</span>
                    </div>
                      <div className="bui-review-score__badge" aria-label="Scored 0 "
                            style={{
                                background:"#003580",
                                color:"#fff",
                                borderRadius: "4px",
                                height:"32px",
                                width:"32px",
                                textAlign: "center",
                                marginLeft:"20px"
                            }}
                            >{value.score}
                      </div>
                    </Row>
                    <Row>
                        <span>{value.dataRoom}</span>
                    </Row>
                    <Row>
                        <span>{value.price}</span>
                    </Row>
                    <Row>
                        <span>{value.includes}</span>
                    </Row>
                    <Row>
                    <Button>See availability</Button>
                    </Row>
                </Col>
              </Row>
        </>
    ))
    )
}


const [active, setActive] = React.useState(1)
let itemsPagination = [];

const numberOfPage=()=>{
    
}

for (let number = 1; number <= 4; number++) {
    itemsPagination.push(
    <Pagination.Item key={number} active={number === active} onClick={()=>numberOfPage()} >
         {number}
    </Pagination.Item>,
    );
}   

return(
  <Layout>
      <Container  style={{
          margin: `0 auto`,
          maxWidth: 1140,
          padding: `0 1.0875rem 1.45rem`,
        }}>
          <br/>
            
         <Row>
           <Col sm={3}>
             <div className="searchBox">
              <span>Search</span>
              <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Destination/property name:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Check-in date</Form.Label>
                <Form.Control type="date" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Check-out date</Form.Label>
                <Form.Control type="date" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I'm travelling for work" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
             </div> 
          </Col>
          <Col sm={9}>
              <Row style={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
              }}>
                <h1 style={{fontSize:"23px"}}>
                   Augustów: 11 properties found
                </h1>
                <div className="entry-point__container_small">
                  <button className=" show_map entry-point__map_small ">
                  <Button className="show_map bui-button entry-point__button_small" type="button">
                        Show on map
                  </Button>
                  </button>     
              </div>
              </Row>
              <br/>
              <Row>
                <Column sm={3}><Sort variant="outline-primary"><Sort_Link>Top Picks for Families</Sort_Link></Sort></Column>
                <Column sm={3}><Sort variant="outline-primary"><Sort_Link>Entire homes & apartments</Sort_Link></Sort></Column>
                <Column sm={3}><Sort variant="outline-primary"><Sort_Link>Distnce from closest beach</Sort_Link></Sort></Column>
                <Column sm={3}><Sort variant="outline-primary"><Sort_Link>Price (lowest first)</Sort_Link></Sort></Column>
              </Row>
              <br/>
                    {displayResults()}    
              <br/>     
              <Row>
                 Podlaskie: 92 properties found
              </Row>
              <Row  
                style={{display:"flex",
                justifyContent:"space-between",
                border:"1px solid #c6c6c6", padding:"8px"
              }}
                >
                  <Pagination size="sm">
                  <Pagination.Prev />
                      {itemsPagination}
                  <Pagination.Next />
                </Pagination>
                <span>Showing 1 - 25</span>
              </Row>
           </Col>
         </Row>
      
        </Container>
  </Layout>
  )
}

export default SecondPage;
