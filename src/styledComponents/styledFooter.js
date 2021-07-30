import styled from "styled-components";
import { Row, InputGroup} from 'react-bootstrap';


export const InputGroupRow = styled(Row)`
@media (max-width: 768px) {
    display: flex;
    justify-content: center;
}
`

export const Input = styled(InputGroup)`
@media (max-width: 768px) {
    width: 310px;
}
`