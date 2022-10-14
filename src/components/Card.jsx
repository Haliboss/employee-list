import styled from 'styled-components';

const Pencere = styled.div`
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:  1rem;
   /*  background-color: #fff; */
    @media (max-width: 1050px) {
        max-width: 100%;
    } 
    @media (max-width: 768px) {
    max-width: 400px;
    max-height: 25vh;
    }
`

const Kart = styled.div`
    /* border: 2px solid red; */
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1%;    
    width: 50vh;
    font-size:1rem;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 50vh;
        max-width: 50vh;
        max-height: 12vh;
    }
    `

const Img = styled.img`
    width: 50%;
    /* height: 100px; */
    border-radius: 50%;
    box-shadow: 5px 5px 5px #07000033;
    margin: 0 1rem;
    @media (max-width: 1100px) {
    width: 80px;
    height: 80px;
    }
    @media (max-width: 768px) {
        width: 70px;
        height: 70px; 
    }
    `

const H1 = styled.h1`
    font-size: 1rem;
    letter-spacing: 2px;
    padding: 0.4rem 0;
`

const Kartinfo = styled.div`
    line-height: .6rem;
    text-shadow: 3px 3px 3px #07000033;
    text-align: left;
`

const Notlar = styled.p`
    font-size: .9rem;
    letter-spacing: 1px;
    padding: .3rem 0;
    `

const Card = ({ name, image, email, age }) => {
    return (
        <Pencere >
            <Kart>
                <div>
                    <Img src={image} alt="image" />
                </div>
                <Kartinfo>
                    <H1 >{name}</H1>
                    <Notlar>{email}</Notlar>
                    <Notlar>{age} years</Notlar>
                </Kartinfo>
            </Kart>
        </Pencere>
    );
};
export default Card;
