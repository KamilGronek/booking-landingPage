import React, {useState} from "react"
import {
    Container, Row, Col, Tabs, Tab,
    Button, Toast, Pagination
} from 'react-bootstrap';
import "../styles/styles.css";
import { HideButton } from "../images/logosSVG";
import { PostCardPlace,  PostCardPrice, PostCardSpan } from "../styledComponents/styledSection";
import SectionArticles from "./SectionArticles"
import { GetCarousel, GetCarouselSecond, GetCarouselThird } from "./Carousels"
import {itemsCountry,itemsPlaces} from "./arrayItems"
import "../styles/mainSection.css"


const MainSection = () => {
    const [pagesNumber, setPagesNumber] = useState(0);
    const countriesPerPage = 5;
    const pagesVisited = pagesNumber * countriesPerPage;


    const [show, setShow] = useState(true);

    const handleCloseBtn = () => {
        setShow(false)
        console.log("close")
    }

    
    const [active, setActive] = useState(1)
    let itemsPagination = [];

    const numberOfPage = (number) => {
        setPagesNumber(number > 3 ? 0 : number - 1);
        setActive(number)
    }

    for (let number = 1; number <= 11; number++) {
        itemsPagination.push(
            <Pagination.Item key={number} active={number === active} onClick={() => numberOfPage(number)} >
                {number}
            </Pagination.Item>,
        );
    }



    const renderViewFor=(column, elementsForColumn, itemsPlaces)=> {
        if (itemsPlaces == null || itemsPlaces.length == 0) {
          return <></>;
        }
      
        let lastResult = column * elementsForColumn;
        let firstColumn = lastResult - elementsForColumn;
        let elementsInList = itemsPlaces.length;
      
        if (elementsInList < firstColumn) {
          return <></>;
        }
      
        return itemsPlaces.filter((element, index) => index >= firstColumn && index < lastResult)
          .map(element => (
           <>
              <li><a href="">{element.place}</a></li>
              <li><p>{element.number} properties</p></li>
          </>
        ))
      }
 
        const rangeColumn = (min,max) => [...Array(max - min + 1).keys()].map(i => i + min);

        const renderTable = ()=>{
          return(
            rangeColumn(1, 5).map(col => (
                    <Col>
                        <ul className="mainSection__getRegions">
                            {renderViewFor(col, 4, itemsPlaces)}
                        </ul>
                    </Col>
            ))
        )
    }


    const displayCountries = () => {
        return (
            itemsCountry
                .slice(pagesVisited, pagesVisited + countriesPerPage)
                .map((item) => (
                    <>
                        <div key={item} className="mainSection__displayCountries">
                            <div>{item.img}</div>
                            <p className="overlay ellipsis">
                                {item.text}
                            </p>
                            <div className="mainSection__displayCountries-location">
                                {item.location}
                            </div>
                        </div>
                    </>
                ))
        )
    }

    return (
        <Container
            style={{
                margin: `0 auto`,
                maxWidth: 1140,
                padding: `0 1.0875rem 1.45rem`,
            }}
        >
            <h4 className="mainSection__title">
                Browse by property type
            </h4>
            <GetCarousel />
            <Row>
                <Col md={6} sm={12} style={{ position: "relative" }}>
                    <PostCardPlace>
                        <h3>
                            <a className="mainSection__a"
                                href="/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEM2AED6AEBiAIBqAIDuAK2-vuGBsACAdICJGU1Y2I4ZThiLWU1MTQtNGYwMC1iM2U5LWE0ZGRjZGUxYjAzM9gCBOACAQ;sid=3e617b867e153c47c7b40da1a5948082;city=20097977;from_idr=1;dr_ps=IDR;ilp=1;d_dcp=1">
                                Dublin
                                <img src="https://cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png" alt="United States of America" valign="middle" />
                            </a>
                        </h3>
                        <p className="mainSection__p">25 properties</p>
                    </PostCardPlace>
                    <img className="mainSection__img2"
                     
                        src="https://cf.bstatic.com/xdata/images/city/540x270/957800.webp?k=6e50f4c36265ab07bf1c6498c298d8a9de40400f606365b83266a3e7ffe67877&amp;o=" alt="" />
                    <PostCardPrice>
                        <PostCardSpan>
                            Deals start at
                        </PostCardSpan>
                        <span>
                            US$294
                        </span>
                    </PostCardPrice>

                </Col>

                <Col md={6} sm={12} style={{ position: "relative"}}>
                    <PostCardPlace>
                        <h3>
                            <a className="mainSection__a"
                                href="/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEM2AED6AEBiAIBqAIDuAK2-vuGBsACAdICJGU1Y2I4ZThiLWU1MTQtNGYwMC1iM2U5LWE0ZGRjZGUxYjAzM9gCBOACAQ;sid=3e617b867e153c47c7b40da1a5948082;city=20097977;from_idr=1;dr_ps=IDR;ilp=1;d_dcp=1">
                                Truckee
                                <img src="https://cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png" alt="United States of America" valign="middle" />
                            </a>
                        </h3>
                        <p className="mainSection__p">493 properties</p>
                    </PostCardPlace>
                    <img className="mainSection__img2"
                     
                        src="https://cf.bstatic.com/xdata/images/city/540x270/823860.webp?k=ad78ae3df378d8246dc7c5a486520020f40ea92ca3b08569514092bd1ec34750&amp;o=" alt="" />
                    <PostCardPrice>
                        <PostCardSpan>
                            Deals start at
                        </PostCardSpan>
                        <span>
                            US$1,945
                        </span>
                    </PostCardPrice>
                </Col>
            </Row>
            {/* <br /> */}
            <Row style={{ paddingBottom: "15pxs" }}>
                <Col md={4} sm={12} style={{ position: "relative", display: "flex" }}>
                    <PostCardPlace>
                        <h3>
                            <a style={{
                                fontSize: "28.48px",
                                color: "#FFFFFF",
                                maxHeight: "400px",
                                objectFit: "cover"
                            }}
                                href="/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEM2AED6AEBiAIBqAIDuAK2-vuGBsACAdICJGU1Y2I4ZThiLWU1MTQtNGYwMC1iM2U5LWE0ZGRjZGUxYjAzM9gCBOACAQ;sid=3e617b867e153c47c7b40da1a5948082;city=20097977;from_idr=1;dr_ps=IDR;ilp=1;d_dcp=1">
                                South Lake Tahoe
                                <img src="https://cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png" alt="United States of America" valign="middle" />
                            </a>
                        </h3>
                        <p className="mainSection__p">664 properties</p>
                    </PostCardPlace>
                    <img
                       className="mainSection__img"
                        src="https://cf.bstatic.com/xdata/images/city/540x270/689418.webp?k=d39081abcd45a070b313a85e992b6849b0503d7f1f7e4fb7effae77c9a2c019f&o=" />
                    <PostCardPrice
                    >
                        <PostCardSpan>
                            Deals start at
                        </PostCardSpan>
                        <span>
                            US$1,037
                        </span>
                    </PostCardPrice>
                </Col>
                <Col md={4} sm={12} style={{ position: "relative", display: "flex" }}>
                    <PostCardPlace>
                        <h3>
                            <a style={{
                                fontSize: "28.48px",
                                color: "#FFFFFF",
                                height: "270px",
                                maxWidth: "400px",
                                objectFit: "cover"
                            }}
                                href="/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEM2AED6AEBiAIBqAIDuAK2-vuGBsACAdICJGU1Y2I4ZThiLWU1MTQtNGYwMC1iM2U5LWE0ZGRjZGUxYjAzM9gCBOACAQ;sid=3e617b867e153c47c7b40da1a5948082;city=20097977;from_idr=1;dr_ps=IDR;ilp=1;d_dcp=1">
                                Austin
                                <img src="https://cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png" alt="United States of America" valign="middle" />
                            </a>
                        </h3>
                        <p className="mainSection__p">719 properties</p>
                    </PostCardPlace>
                    <img
                       className="mainSection__img"
                        src="https://cf.bstatic.com/xdata/images/city/540x270/690329.webp?k=330403cfa8e49ee98d01a4808f169d520e49f24348154b8cb7f637497015802f&o=" />
                    <PostCardPrice>
                        <PostCardSpan>
                            Deals start at
                        </PostCardSpan>
                        <span>
                            US$299
                        </span>
                    </PostCardPrice>
                </Col>
                <Col md={4} sm={12} style={{ position: "relative", display: "flex" }}>
                    <PostCardPlace>
                        <h3>
                            <a style={{ fontSize: "28.48px", color: "#FFFFFF" }}
                                href="/searchresults.html?label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEM2AED6AEBiAIBqAIDuAK2-vuGBsACAdICJGU1Y2I4ZThiLWU1MTQtNGYwMC1iM2U5LWE0ZGRjZGUxYjAzM9gCBOACAQ;sid=3e617b867e153c47c7b40da1a5948082;city=20097977;from_idr=1;dr_ps=IDR;ilp=1;d_dcp=1">
                                Reno
                                <img src="https://cf.bstatic.com/static/img/flags/24/us/e39c170c852301a1817b3d0833be23f677a2f922.png" alt="United States of America" valign="middle" />
                            </a>
                        </h3>
                        <p className="mainSection__p">77 properties</p>
                    </PostCardPlace>
                    <img
                       className="mainSection__img"
                        src="https://cf.bstatic.com/xdata/images/city/540x270/689874.webp?k=5a29b0d987e962b9ce2c78ae5dae52d02fb2ed959b1e2b00faf022306e103f8b&o=" />
                    <PostCardPrice
                    >
                        <PostCardSpan>
                            Deals start at
                        </PostCardSpan>
                        <span>
                            US$743
                        </span>
                    </PostCardPrice>
                </Col>
            </Row>
            <br/>
            <h5>Explore Poland</h5>
            <p>These popular destinations have a lot to offer</p>
            <GetCarousel />
            {show ?
                <Toast
                    style={{
                        margin: `0 auto`,
                        maxWidth: 1140,
                        padding: `0 1.0875rem 1.45rem`,
                        boxShadow: 'none',
                        marginBottom: '20px'
                    }}
                >
                    <Toast.Body>
                        <Row>
                            <Col lg={1}>
                            </Col>
                            <Col lg={11}>
                             <Row className ="d-flex justify-content-between">
                                    <div className="mainSection__div">
                                        Sign in for members-only deals
                                    </div>
                                    <HideButton onClick={handleCloseBtn} />
                                </Row>
                                <Row>
                                    <p>Reveal all Secret Deals</p>
                                </Row>
                                <Row>
                                    <Button variant="light" className="mainSection__button">Sign in</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Toast.Body>
                </Toast>
                : ""}

            <h4 className="mainSection__title">
                Homes guests love
            </h4>
            <GetCarouselSecond />
            <br />
            <SectionArticles />

            <h4 className="mainSection__title">Connect with other travelers</h4>
            <GetCarouselThird />

            <h4>Destinations we love</h4>
            <Tabs  defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Regions">
                  <Row>
                    {renderTable()}
                  </Row>
                </Tab>
                <Tab eventKey="profile" title="Cities">
                  <Row>
                    {renderTable()}
                  </Row>
                </Tab>
                <Tab eventKey="profil" title="Place of interest">
                  <Row>
                    {renderTable()}
                 </Row>
                </Tab>
            </Tabs>
            <h4>Discover</h4>
            <Row className ="mainSection__pagination d-flex justify-content-end" style={{margin:"0px 20px"}}>
                <Pagination size="sm">{itemsPagination}</Pagination>
                <a href="#">More countries</a>
            </Row>
            <br />
            <Row className ="d-flex justify-content-between" style={{margin:"10px"}}>
                {displayCountries()}
            </Row>
        </Container>
    )
}

export default MainSection;


