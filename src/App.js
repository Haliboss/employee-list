import './App.css';
import Card from "./components/Card";
import Button from "./components/Button";
import Header from './components/Header';
import styled from 'styled-components';
import { data } from './data';
import { useState } from 'react';

const Ana = styled.div`
 padding:1rem;
 background-color:white;
 height: 70vh;
`

function App() {

  const [count, setCount] = useState(0);

  const prev = () => {
    if (count > 0) { setCount(count - 5) }
    if (count < 4) { setCount(15) }
  }

  const next = () => {
    if (count < 15) { setCount(count + 5) }
    if (count > 14) { setCount(0) }
  }
  return (

    <Ana className="App">
      <Header count={count} />
      <div className="next">
        {data.slice(count, count + 5).map((item) => {
          return <Card key={item.id} {...item} />
        }
        )}
        <Button prev={prev} next={next} />
      </div>

    </Ana>

  );
}

export default App;
