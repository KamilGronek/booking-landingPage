import styled from "styled-components";
import { Card} from 'react-bootstrap';


export const PostCardPlace = styled.div
`
position: absolute;
left: 16px;
top: 0px;
z-index: 1;
margin: 0px 0px 15px;
padding: 21px 15px 25px;
`;


export const PostCardPlace2 = styled.div
`
position: absolute;
right: 16px;
bottom: 0px;
z-index: 2;
margin: 0px 0px 15px;
padding: 21px 15px 25px;
`;



export const PostCardPrice = styled.div
`
position: absolute;
right: 26px;
bottom:60px;
z-index: 4;
background-color:#ff8000;
border-color: #ff8000;
text-align:right;    
@media (max-width: 768px) {
    right: 100px;
}             
`


export const PostCardSpan = styled.div
`
font-size: 12px;
line-height: 15px;
padding-top: 4px;            
`

export const CarouselCard = styled(Card)
`
width: 18rem;
display: flex;
justify-content: center;
align-items: center;
border:none;
`

export const CardBody = styled.div
`
padding:0;
float: left !important;
margin-left:-30px;

`

