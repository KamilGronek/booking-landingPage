import React from "react"
import "../styles/mainSection.css"

const getImg = (imageLocation) => {
    return (
        <img className="mainSection__displayCountries-img"
            src={`https://cf.bstatic.com/images/city/207x135/${imageLocation}`} 
        />
    )
}


export const itemsCountry =
    [
        {
            img: getImg("689/689587.jpg"),
            text: " You'll love relaxation, restaurants and shopping during your next trip to United States of America!",
            location: "United States of America",
        },
        {
            img: getImg("613/613105.jpg"),
            text: `You'll love old town, scenery and food during your next trip to Italy!`,
            location: "Italy",
        },
        {
            img: getImg("613/613088.jpg"),
            text: "Put tranquillity, scenery and old town on your to-do list for your next trip to France!",
            location: "France",
        },
        {
            img: getImg("971/971353.jpg"),
            text: "If tranquillity, old town and food are your thing, don’t miss out on Spain!",
            location: "Spain",
        },
        {
            img: getImg("972/972613.jpg"),
            text: "Don’t miss out on Germany! Top destination for old town, walking and city walks.",
            location: "Germany",
        },
        {
            img: getImg("613/613095.jpg"),
            text: "Try United Kingdom for your next trip! Enjoy shopping, scenery and sightseeing while you’re there!",
            location: "United Kingdom",
        },
        {
            img: getImg("620/620007.jpg"),
            text: "Russia is highly rated by travelers for city walks, sightseeing and architecture.",
            location: "Russia",
        },
        {
            img: getImg("638/638617.jpg"),
            text: "Croatia is highly rated by travelers for oceanside, relaxation and old town.",
            location: "Croatia",
        },
        {
            img: getImg("653/653641.jpg"),
            text: "Put tranquillity, nature and beaches on your to-do list for your next trip to Brazil!",
            location: "Brazil",
        },
        {
            img: getImg("684/684765.jpg"),
            text: "Relaxation, sightseeing and temples are just a few reasons why travelers enjoy India.",
            location: "India",
        },
    ];


    export const arrayNavigationLinks =
     [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels",
        "Places of interest",
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "B&Bs",
        " Guest houses",
        " Unique places to stay",
        " All destinations",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals",
        "Car rental",
        "Flight finder",
        "Restaurant reservations",
        "Booking.com for Travel Agents",
        "Coronavirus (COVID-19) FAQs",
        "About Booking.com",
        "Contact Customer Service",
        "Partner help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions",
        "Dispute resolution",
        "How We Work",
        "Privacy & cookie statement",
        "Manage cookie settings",
        "Corporate contact",
      ];

      export const itemsPlaces = 
      [
          {
              place:"Bora Bora 1",
              number:"60"
          },
          {
              place:"Hawaii 2",
              number:"5,518"
          },
          {
              place:"Phuket",
              number:"5,494"
          },
          {
              place:"Ras Al Khaimah",
              number:"113"
          },
          {
              place:"Lake Distric",
              number:"2,403"
          },
          {
              place:"Zanzibar",
              number:"834"
          },
          {
              place:"Ibiza",
              number:"1,640"
          },
          {
              place:"Uttar Pradesh",
              number:"4,375"
          },
          {
              place:"Bali",
              number:"12,678"
          },
          {
              place:"Isle of Wight",
              number:"933"
          },
          {
              place:"Texel",
              number:"413"
          },
          {
              place:"Bihar",
              number:"761"
          },
          {
              place:"Cornwall",
              number:"5,275"
          },
          {
              place:"Tenerife",
              number:"9,603"
          },
          {
              place:"Mykonos",
              number:"1,452"
          },
          {
              place:"Guernsey",
              number:"61"
          },
          {
              place:"Jersey",
              number:"89"
          },
          {
              place:"England",
              number:"73,971"
          },
          {
              place:"Santorini",
              number:"1,762"
          }
  
      ];