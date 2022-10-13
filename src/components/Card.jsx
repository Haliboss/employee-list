import { data } from '../data';
import styled from 'styled-components';

const Pencere = styled.div`
    border: 2px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

const Kart = styled.div`
    border: 2px solid red;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    margin: .5rem;    
    width: 500px;
    font-size:1rem;
    `

const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 2rem;
    `

const H1 = styled.h1`
    font-size: 1.4rem;
    letter-spacing: 2px;
`

const Card = (page, setPage) => {

    let count = 0;
    let pageData = data.slice((page - 1) * 5, page * 5);

    return (

        <Pencere>
            {pageData.map((item) => {
                count++;
                console.log(count);
                return (
                    <Kart key={count}> 
                        <Img src={item.image} alt={item.name} />
                        <div>
                            <H1>{item.name}</H1>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                        </div>
                    </Kart>
                )
            })}

        </Pencere>
    )
}

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