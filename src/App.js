import './App.css';
import Card from "./components/Card";
import styled from 'styled-components';
import { data } from './data';
import { useState } from 'react';

const Ana = styled.div`
 padding:1rem;
background: linear-gradient(106deg, rgba(2,0,36,1) 0%, rgba(9,121,22,0.3708299839228296) 21%, rgba(0,212,255,1) 100%);
 height: 75vh;
 border-radius: 1rem;
 text-shadow: 1px 1px 3px #000;
 box-shadow: 5px 5px 10px #000;
 max-width: 1000px;
 @media (max-width: 1300px) {
  height: 75vh;
 }
 @media (max-width: 768px) {
  height: 90vh;
 }
`

const Ortala = styled.div`
line-height: .7rem;
text-align:center;
margin: .5rem;
`

const Paragraf = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  `

const Tus = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-radius: 5px;
  margin-top: 5%;
  `

const Bas = styled.button`
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
    border: 1px solid #e6e6e6;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
 /*  :hover{
    background-color: #e6e6e6;
    border: 1px solid #e6e6e6;
  } */
  `




const App = () => {

  const [countStart, setCountStart] = useState(0);
  const [countEnd, setCountEnd] = useState(5);

  const handleNext = () => {
    setCountStart(countStart === data.length - 5 ? 0 : countStart + 5);
    setCountEnd(countEnd === data.length ? 5 : countEnd + 5);
  };

  const handlePrev = () => {
    setCountStart(countStart <= 0 ? 15 : countStart - 5);
    setCountEnd(countEnd === 5 ? 20 : countEnd - 5);
  };
  return (

    <Ana className="App">
      <Ortala>
        <h4>Employee List</h4>
        <Paragraf>
          (Employees {countStart + 1} to {countEnd})
        </Paragraf>
      </Ortala>
      <div className="cards">
        {data.slice(countStart, countEnd).map(
          (item) => (
            <Card key={item.id} {...item} />
          )
        )}
      </div>
      <Tus>
        <Bas className="button" onClick={handlePrev}>
          Previous
        </Bas>
        <Bas className="button" onClick={handleNext}>
          Next
        </Bas>
      </Tus>


    </Ana>

  );
}

export default App;
