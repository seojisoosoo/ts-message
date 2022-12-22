import Router from './Router';
import styled from 'styled-components';

export default function App() {
  return (
    <StAppWrapper>
        <Router/>
    </StAppWrapper>
  )
}

const StAppWrapper=styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`