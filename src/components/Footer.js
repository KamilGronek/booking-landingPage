import  React from "react"
import {
  Container, Row, Col,
  Form, Button, Jumbotron, InputGroup, FormControl
} from 'react-bootstrap';

import {arrayNavigationLinks} from "./arrayItems";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <Jumbotron fluid className="d-flex flex-column align-items-center footer__jumbotron">
        <h3 className="footer__title">Save time, save money!</h3>
        <p className="footer__title">
          Sign up and we'll send the best deals to you
        </p>
        <Row>
          <InputGroup className="footer__jumbotron-input mb-3">
            <FormControl 
            style={{height:"48px"}}
              placeholder="Your email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">
              Subscribe
            </Button>
          </InputGroup>
          <Form.Check className="footer__title-checkbox" type="checkbox" id="autoSizingCheck2" label=" Send me a link to get the FREE Booking.com app!" />
        </Row>
      </Jumbotron>

      <Row className="d-flex justify-content-center footer__subscribe">
        <Button className="footer__subscribe-button" variant="outline-light">List your property</Button>
      </Row>
      <div className="footer__container">
        <Row style={{
          margin: `0 auto`,
          maxWidth: 1140,
          padding: "0px 8px"
        }}>
          <Col>
            <a href="https://www.booking.com/content/affiliates.html?label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEM2AED6AEBiAIBqAIDuAK2-vuGBsACAdICJGU1Y2I4ZThiLWU1MTQtNGYwMC1iM2U5LWE0ZGRjZGUxYjAzM9gCBOACAQ;sid=3e617b867e153c47c7b40da1a5948082" data-bui-component="Tooltip" class="footer_become_affiliate" data-ga-track="click|pageview:/internallink/partner/footer/affiliatelink/index/en-us" data-tooltip-text="Become an affiliate"
              className="footer__ahref"
            >
              Mobile version
            </a></Col>
          <Col>
            <a href="https://account.booking.com/auth/oauth2?bkng_action=index&amp;state=UtEDFbniDMdRjEIwuATu2gJK1xVQZh8rkdG7bzpXD-Z1BXnbWrqdlN8C9PM8isGlnx_6elVrj2H0K0HWP09Vp4h491iw1CkqO8dc26MjFPZIzoE_dH3RMyDBESEEV6C1wqIdiUvmFI0KG1lLqSi185pKaAm9Sav7Ml-AhgHUQa3U58cqVHwFnkn-0_OLHiV5ZuhPDGQ0pCSNFTiq3NMY1acd_f9weunxlSIHvq1jsblva8EBEV4K27cCZn4ZxdMxoJb7c7jKo3yPV-0cHkwcAeGnVeu-nD1W3qxCROafj53d8VnnZPxTGMb6c-9nQUiifG-raeVpaG8PtWLI6ce96Kx4R3emTslkYyq_u0pNr3yi5WiUQh1Gu96IyzeIBt9ZavkglbCdonGyfRFVouSFYUxrFJx6sqIyfkppZ26x_0EfYt_N4AQ65WDZj_c2-SfYfk3mVSJO92Qg1k9IBz4TJ7evTphWQz9oY04fA_6yMajMjW--lmQlN9vJbF9UjTU7HexoLxe1bwxJU9fSkdQNRuYYDRrR3Eecwcigme5v798WOnlxztEIV9gMNGcM2BgqLuwPLPsnzsXZ_gg2DDFOvzZE1WRa-h2or-S1F-EKIm6pI9g_&amp;response_type=code&amp;dt=1625241778&amp;redirect_uri=https%3A%2F%2Fsecure.booking.com%2Flogin.html%3Fop%3Doauth_return&amp;client_id=vO1Kblk7xX9tUn2cpZLS&amp;lang=en-us&amp;aid=304142"
              className="footer__ahref"
            >
              Your account
            </a></Col>
          <Col><a className="manage" href="https://secure.booking.com/content/cs.html?label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEM2AED6AEBiAIBqAIDuAK2-vuGBsACAdICJGU1Y2I4ZThiLWU1MTQtNGYwMC1iM2U5LWE0ZGRjZGUxYjAzM9gCBOACAQ;sid=3e617b867e153c47c7b40da1a5948082"
            className="footer__ahref"
          >
            Make changes online to your booking
          </a></Col>
          <Col><a className="cuca" href="https://secure.booking.com/help.html?label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEM2AED6AEBiAIBqAIDuAK2-vuGBsACAdICJGU1Y2I4ZThiLWU1MTQtNGYwMC1iM2U5LWE0ZGRjZGUxYjAzM9gCBOACAQ&amp;sid=3e617b867e153c47c7b40da1a5948082#/?source=blue_footer" data-ga-track="click|Click|Action: index|hc_entrypoint_blue_footer" data-bui-component="Tooltip" data-et-click="OTfdASFXOVAUVSZYdFfGEXGO:1" data-tooltip-text="Your Reference ID is “3E617B8”"
            className="footer__ahref"
          >
            Contact Customer Service
          </a></Col>
          <Col><a href="https://www.booking.com/content/affiliates.html?label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEM2AED6AEBiAIBqAIDuAK2-vuGBsACAdICJGU1Y2I4ZThiLWU1MTQtNGYwMC1iM2U5LWE0ZGRjZGUxYjAzM9gCBOACAQ;sid=3e617b867e153c47c7b40da1a5948082" data-bui-component="Tooltip" className="footer_become_affiliate" data-ga-track="click|pageview:/internallink/partner/footer/affiliatelink/index/en-us" data-tooltip-text="Become an affiliate"
            className="footer__ahref"
          >
            Become an affiliate
          </a></Col>
          <Col><a href="https://www.booking.com/business.html?label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAEeuAEXyAEM2AED6AEBiAIBqAIDuAK2-vuGBsACAdICJGU1Y2I4ZThiLWU1MTQtNGYwMC1iM2U5LWE0ZGRjZGUxYjAzM9gCBOACAQ&amp;sid=3e617b867e153c47c7b40da1a5948082&amp;bbtb=1&amp;stid=818308" className="tracked" data-google-track="Click/Action: index/BBTool Footer"
            className="footer__ahref"
          >
            Booking.com for Business</a>
          </Col>
        </Row>
      </div>
      <Container
        style={{
          margin: `0 auto`,
          maxWidth: 1140,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Row style={{ padding: "16px 0px" }}>
          <Col >
            {arrayNavigationLinks
              .slice(0, 7)
              .map(link => (
                <ul key={link} className="footer__navigation-links">
                  <li><a href="#">{link}</a></li>
                </ul>
              ))}
          </Col>
          <Col>
            {arrayNavigationLinks
              .slice(7, 14)
              .map(link => (
                <ul key={link} className="footer__navigation-links">
                  <li><a href="#">{link}</a></li>
                </ul>
              ))}
          </Col>
          <Col>
            {arrayNavigationLinks
              .slice(14, 20)
              .map(link => (
                <ul key={link} className="footer__navigation-links">
                  <li><a href="#">{link}</a></li>
                </ul>
              ))}
          </Col>
          <Col>
            {arrayNavigationLinks
              .slice(20, 24)
              .map(link => (
                <ul key={link} className="footer__navigation-links">
                  <li><a href="#">{link}</a></li>
                </ul>
              ))}
          </Col>
          <Col>
            {arrayNavigationLinks
              .slice(24, 39)
              .map(link => (
                <ul key={link} className="footer__navigation-links">
                  <li><a href="#">{link}</a></li>
                </ul>
              ))}
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <a className="footer__navigation-a" href="https://admin.booking.com/?lang=xu&amp;utm_source=extranet_login_footer&amp;utm_medium=frontend&amp;utm_campaign=login_footer_v0" data-ga-track="click|Footer|Click - Extranet login|index">
            Extranet login
          </a>
        </Row>
        <div
          style={{
            // marginTop: `2rem`,
            margin: `0 auto`,
            maxWidth: 1140,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          Copyright© 1996-{new Date().getFullYear()} Booking.com.
          All right reserved.
        </div>
        <Row className="d-flex justify-content-center">
          <p className="footer__extranet-link">Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
        </Row>
        <footer>
          <Row
            style={{
              margin: `0 auto`,
              maxWidth: 900,
            }}
          >
            <Col><img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png" title="Booking.com" alt="Booking.com" height="26" width="91" /></Col>
            <Col><img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png" title="Priceline" alt="Priceline" height="26" width="91" /></Col>
            <Col><img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png" title="Kayak" alt="Kayak" height="26" width="79" /></Col>
            <Col><img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png" title="Agoda" alt="Agoda" height="26" width="70" /></Col>
            <Col><img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png" title="Rentalcars" alt="Rentalcars" height="26" width="109" /></Col>
            <Col><img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png" title="OpenTable" alt="OpenTable" height="26" width="95" /></Col>
          </Row>
        </footer>
      </Container>
    </>
  );
}
export default Footer