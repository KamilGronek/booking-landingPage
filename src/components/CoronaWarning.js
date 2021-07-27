import  React from "react"
import { Accordion,AccordionItem,AccordionBody, AccordionHeader,Card, Row, Col} from 'react-bootstrap';

const CoronaWarning = ()=>{

return(
    <Accordion eventKey="0">
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0" style={{backgroundColor: `#fff0e0`}}>
          <Row  style={{
            margin: `0 auto`,
            maxWidth: 1110,
            padding: `0 1.0875rem 0`,
          }}>
                 <svg 
                 className="bk-icon -streamline-info_sign" fill="<TMPL_V bui_color_complement>" color="#923e01" fill="currentColor" height="24" width="24" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>  
                <span className="accordion__sign">Coronavirus (COVID-19) support</span>
          </Row>
      </Accordion.Toggle>

      <Accordion.Collapse eventKey="0">
        <Card.Body className="accordion__card-body">
        <Row className="accordion__card-body-row" 
          style={{
            margin: `0 auto`,
            maxWidth: 1140,
            paddingLeft: "72px",
            paddingBottom: "12px"
          }}>
              Check for travel restrictions. 
            Travel might only be permitted for certain purposes,
            and touristic travel in particular may not be allowed.
        </Row>
        <Row  className="accordion__card-body-row" 
            style={{
              margin: `0 auto`,
              maxWidth: 1140,
              paddingLeft: "72px",
              paddingBottom: "12px"
              }}
        >
          <a href="https://www.booking.com/covid-19.html?aid=304142&amp;label=gen173nr-1DCAEoggI46AdIM1gEaLYBiAEBmAExuAEXyAEM2AED6AEB-AECiAIBqAIDuAKikZCHBsACAdICJDRhZmE4YjhlLTcyZmUtNDFlYi04MTVlLTU0MDc4NjMzYTIyNdgCBOACAQ" target="_blank">
             Read more
          </a>
          </Row>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
</Accordion>
)
}

export default CoronaWarning;
