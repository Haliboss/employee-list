import styled from "styled-components";

const H1 = styled.h1`
text-align: center;
font-weight:400;
letter-spacing: 2px;
font-size: 1.5rem;
`

const H4 =styled(H1)`
font-size: 1rem;
font-weight:700;
letter-spacing: 1px;
`


const Header = (props) => {

    return (
        <div>
            <H1>Employee List</H1>
            <H4>(Employees {props.count} to {props.counter + 5})</H4>
        </div>
    )
};

export default Header;