import styled from 'styled-components';

const Pencere = styled.div`
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   /*  background-color: #fff; */  
    @media (max-width: 768px) {
    max-width: 400px;
    max-height: 50vh;
    }
`

const Kart = styled.div`
    /* border: 2px solid red; */
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin: .5rem;    
    width: 50vh;
    font-size:1rem;
    max-height: 10vh;
    max-width: 50vh;

    @media (max-width: 768px) {
        width: 50vh;
        max-width: 50vh;
        max-height: 10vh;
    `

const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 5px 5px 5px #07000033;
    margin-right: 2rem;
    `

const H1 = styled.h1`
    font-size: 1rem;
    letter-spacing: 2px;
`

const Kartinfo = styled.div`
    line-height: .6rem;
    text-shadow: 3px 3px 3px #07000033;
`

const Notlar = styled.p`
    font-size: .9rem;
    letter-spacing: 1px;
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

/* return (
    <Kart key={id}>
        <Img src={image} alt={name} />
        <div className='desc'>
            <H1>{name}</H1>
            <p>{email}</p>
            <p>{age} years</p>
        </div>
    </Kart>
)
 */