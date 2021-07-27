import React from "react"
import Carousel from "react-elastic-carousel";
import {Item,Item2} from "./Item";
import { CarouselCard,CardBody } from "../styledComponents/styledSection";
import { Row} from 'react-bootstrap';
import {
  ThePationBarcelona,RomanceAlColosseo,ChiadoMercy,BeautifulApartment,
  DocksideWalkSuite
} from "../images/logosSVG";

import "../styles/carousel.css"


const breakPoints = [
    { width: 220, itemsToShow: 1 },
    { width: 220, itemsToShow: 2, itemsToScroll: 2 },
    { width: 220, itemsToShow: 3 },
    { width: 220, itemsToShow: 4 },
    { width: 220, itemsToShow: 5 },
  ];

  const breakPoints2 = [
    { width: 220, itemsToShow: 1 },
    { width: 220, itemsToShow: 2, itemsToScroll: 2 },
    { width: 220, itemsToShow: 3 },
    { width: 220, itemsToShow: 4 },
  ];


  const getImg = (imageLocation) => {
    return (
        <img className="carouselImg" 
            src={`https://cf.bstatic.com/static/img/theme-index/carousel_320x240/${imageLocation}`} />
    )
  }


  const itemsCarousel =
    [
            {  
                img: <img className="carouselImg" src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&amp;o="/>,
                text: "Hotels",
                numbersofAvilable: "785,832 hotels"
            },
            {    
                img: getImg("card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"),
                text: "Apartments",
                numbersofAvilable: "790,220 apartments"
            },
            {   
                 img: getImg("bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"),
                 text: "Resports",
                 numbersofAvilable: "17,514 resorts"
            },
            {  
                img: getImg("card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"),
                text: "Villas",
                numbersofAvilable: "386,046 villas"
            },
            {    
                img:  getImg("card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"),
                text: "Cabins",
                numbersofAvilable: "30,960 cabins"
            },
            {   
                img:  getImg("bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg"),
                 text: "Cottages",
                 numbersofAvilable: "140,846 cottages"
            },
            {   
                img: getImg("bg_glamping/6e181b9e942c160f4605239be7ddc1728cbcc4c8.jpg"),
                text: "Glamping",
                numbersofAvilable: "10,509 GlampingSites"
           },
           {   
                img: getImg("bg_aparthotel/10e092f390b128dcff92727912299eef7824b751.jpg"),
                text: "Serviced Apartments",
                numbersofAvilable: "33,526 serviced apartments"
           },
           {   
                img: getImg("card-image-holidayhomes_300/604c7484d34a9e8791c2d5a0e2df4bc8c803dc7c.jpg"),
                text: "Vacation HomesPic",
                numbersofAvilable: "386,046 vacation homes"
           },
           {   
                img: getImg("bg_guest_house/70618d86d515349ce56296a56d2eaaf283fd1542.jpg"),
                text: "Guest houses",
                numbersofAvilable: "115,142 guest houses"
           },
           {   
                img: getImg("bg_hostels/cd5489c0d29025a9ca9daa602ac1581ba042bc69.jpg"),
                text: "Hostels",
                numbersofAvilable: "17,942 hostels"
           },
           {   
                img: getImg("bg_motels/9673cd1b55cbc1e1cdaeae09d87d16aa9d84d5f7.jpg"),
                text: "Motels",
                numbersofAvilable: "13,870 motels"
           },
           {   
                img: getImg("bg_bed_and_breakfast/a6a4a3f904284337c187771d94a4bb6169b168d7.jpg"),
                text: "B&Bs",
                numbersofAvilable: "205,936 B&Bs"
           },
           {   
                img: getImg("bg_ryokans/e4f002b9907a13a55b4e10b85fdd5d8ea436eb2d.jpg"),
                text: "Ryokans",
                numbersofAvilable: "2,283 ryokans"
           },
           {   
                img: getImg("bg_riad/ec1ea267f18d830b68ca76a666734f8e93a1853d.jpg"),
                text: "Riads",
                numbersofAvilable: "1,016 riads"
           },
           {   
                img: getImg("bg_holidaypark/891162048c0a9c104752ed3c4462f2c230e2fabc.jpg"),
                text: "Resort Villages",
                numbersofAvilable: "6,447 resort villages"
           },
           {   
                img: getImg("bg_home_stay/9499c7a4ab5a599218da6d49422dae03384013e3.jpg"),
                text: "Homestays",
                numbersofAvilable: "147,584 homestays"
           },
           {   
                img: getImg("bg_campsite/6d40bef46964b8841a84cd88793fc8f0fa6663d9.jpg"),
                text: "Campgrounds",
                numbersofAvilable: "8,826 campgrounds"
           },
           {   
                img: getImg("/bg_country_house/6ffa05069b50124c993f00c998f1dfc66999c93f.jpg"),
                text: "Country Houses",
                numbersofAvilable: "12,776 country houses"
           },
           {   
                img: getImg("bg_farmhouses/9aeedf4b943c722367e5e901681463bf543c5afd.jpg"),
                text: "FarmStays",
                numbersofAvilable: "10,832 farm stays"
           },
           {   
                img: getImg("bg_boats/5b974434f444153092a0249af70b3678c2e22e7c.jpg"),
                text: "Boats",
                numbersofAvilable: "1,347 boats"
           },
           {   
                img: getImg("bg_tented_camp/adf0677a5fd80032dc577fad07ad528312dfcadf.jpg"),
                text: "Luxury Tents",
                numbersofAvilable: "3,122 luxury tents"
           },
           {   
                img: getImg("bg_self-catering/7a0939f5a5338faf255840e895953a522335434a.jpg"),
                text: "Self-catering Accommodations",
                numbersofAvilable: "662,360 Self-catering Properties"
           },
           {   
                img: getImg("bg_tiny_house/953faca2af408d667f469ecd3d2b4f1687d7b07f.jpg"),
                text: "Tiny houses",
                numbersofAvilable: "376 tiny houses"
           },
    ];


const items =
  [
          {   
              img: <ThePationBarcelona/>,
              text: "Resports",
              location: "Barcelona",
              price:"Starting from US$362",
              rate: "Exceptional",
              views: "3,490 reviews"
          },
          {  
              img: <RomanceAlColosseo/>,
              text: "Romance al Colosseo",
              location: "Rome",
              price:"Starting from US$418",
              rate: "Exceptional",
              views: "768 reviews"
          },
          {    
              img: <ChiadoMercy/>,
              text: "Chiado Apartments",
              location: "Lizbon",
              price:"Starting from US$362",
              rate: "Wonderful",
              views: "826 reviews"
          },
          {  
              img: <BeautifulApartment/>,
              text: "Villas",
              location: "Denmark",
              price:"Starting from US$565",
              rate: "Very Good",
              views: "443 reviews"
          },
          {    
              img: <DocksideWalkSuite/>,
              text: "Cabins",
              location: "London",
              price:"Starting from US$459",
              rate: "Very Good",
              views: "459 reviews"
          },
  ];



  export const GetCarousel=()=>{
    return(
        <div className="carousel">         
    <Carousel 
        breakPoints={breakPoints}>
        {itemsCarousel.map((itemCarousel) => (
            <CarouselCard key={itemCarousel.img}>
                <Item 
                     >{itemCarousel.img}
                </Item>
                <CardBody>
                    <a href="#" className="carousel__text">
                    {itemCarousel.text}
                    </a>
                    <p className="carousel__numbersofAvilable">
                    {itemCarousel.numbersofAvilable}
                    </p>
                </CardBody>
            </CarouselCard>
        ))}
    </Carousel>
  </div>
    )
}



export const GetCarouselSecond=()=>{
  return(
      <div className="carousel">         
  <Carousel 
      breakPoints={breakPoints2}>
      {items.map((itemSecond) => (
          <CarouselCard>
              <Item2 
                   key={itemSecond.img}>{itemSecond.img}
              </Item2>
              <CardBody>
                  <span href="#" className="carouselSecond__text">
                    {itemSecond.text}
                  </span>
                  <p  className="carouselSecond__location">
                    {itemSecond.location}
                  </p>
                  <p className="carouselSecond__price">
                    {itemSecond.price}
                  </p>
                  <Row className="d-flex justify-content-between">
                  <div aria-label="Scored 0 "
                     className="carouselSecond__score"
                      >9.6 
                  </div>
                  <p className="carouselSecond__rate">
                    {itemSecond.rate}
                  </p>
                  <p className="carouselSecond__view">
                    {itemSecond.views}
                  </p>
                  </Row>
              </CardBody>
          </CarouselCard>
      ))}
  </Carousel>
</div>
  )
}

export const GetCarouselThird=()=>{
  return(
      <div className="carousel">         
  <Carousel 
      breakPoints={breakPoints2}>
      {items.map((item) => (
          <CarouselCard 
              >
              <Item2 
                   key={item.img}>{item.img}
              </Item2>
              <CardBody>
                  <a href="#" className="carouselThird__text">
                  {item.text}
                  </a>
                  <p className="carouselThird__location">
                  {item.location}
                  </p>
                  <p className="carouselThird__price">
                  {item.price}
                  </p>
              </CardBody>
          </CarouselCard>
      ))}
  </Carousel>
</div>
  )
}