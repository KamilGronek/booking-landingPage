import * as React from "react"
import {Row,Col} from 'react-bootstrap';
import "../styles/sectionArticles.css"

const SectionArticles = ()=>{
    return(
        <>
        <h4 className="sectionArticles__title">
        Get inspiration for your net trip
    </h4>
    <Row>
    <Col lg={4} className="d-flex align-items-end sectionArticles__column">
        <div className="sectionArticles__column-img">
            <h4>
                5 breathtaking stays with a private
            </h4>
            <p className="sectionArticles__column-p">
                 Enjoy your vacation reclining by a private infinity pool or a panoramic plunge pool.
            </p>
        </div>
            <img className="sectionArticles__img"
            src="https://cf.bstatic.com/xdata/images/xphoto/540x405/63486779.webp?k=316f6f1b92d64eb083891b2d8cf4d6f9b88a487052eed17a97846ff1f74da509&amp;o=" alt=""/>
    </Col>
    <Col lg={4} className="d-flex align-items-end  sectionArticles__column">
          <div className="sectionArticles__column-img">
            <h4>
            5 of New York City’s Coolest Rooftop Pools
            </h4>
            <p className="sectionArticles__column-p">
            From Brooklyn getaways with skyline views, to a luxurious oasis on Park Avenue. 
            </p>
        </div>
            <img className="sectionArticles__img"
            src="https://cf.bstatic.com/xdata/images/xphoto/720x405/66116733.webp?k=312372ba218a3edd3ae693b31c0952f4384f364a9587694e93b9d2cf843fb02f&o=" alt=""/>
    </Col>
    <Col lg={4} className="d-flex align-items-end  sectionArticles__column">
         <div className="sectionArticles__column-img">
            <h4>
            The ultimate Santorini summer home escapes
            </h4>
            <p className="sectionArticles__column-p">
            Ease into a sublime summer at these incredible Santorini vacation homes.
            </p>
        </div>
            <img className="sectionArticles__img"
            src="https://cf.bstatic.com/xdata/images/xphoto/540x405/37680501.webp?k=ec4d8ece0cc3547af25f33f1ad879751936a27b3952e1ddb3036be48438efcd6&o=" alt=""/>
    </Col>
    </Row>
    <br/>
    <Row>
    <Col lg={6} className="d-flex align-items-end  sectionArticles__column">
        <div className="sectionArticles__column-img">
            <h4>
            A local guide to traveling in Portugal
            </h4>
            <p className="sectionArticles__column-p">
            Follow in the footsteps of local travelers and discover a new side of Portugal.
            </p>
        </div>
        <img className="sectionArticles__imgBottom"
            src="https://cf.bstatic.com/xdata/images/xphoto/540x405/116099712.webp?k=b7fa9c665459dba1a8bf2a2d67b75feba8e9ec94436f2a140c1e0ef358c88f20&o=" alt=""/>
    </Col>
    <Col lg={6}className="d-flex align-items-end  sectionArticles__column" >
        <div className="sectionArticles__column-img">
            <h4>
            The Best Dog-Friendly Vacations In The US
            </h4>
            <p className="sectionArticles__column-p">
            We showcase the best places around the US for dog-friendly vacations.
            </p>
        </div>
        <img className="sectionArticles__imgBottom"
            src="https://cf.bstatic.com/xdata/images/xphoto/540x405/116425937.webp?k=610ce7e7cf8db4f46ad380912470a773328d6230500155749e9cc2b3e3343c90&o=" alt=""/>
    </Col>
    </Row>
    <br/>
    </>
    )
}

export default SectionArticles;