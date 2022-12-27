import Router from './Router';
import styled from 'styled-components';
import GlobalStyle from './styles/globalStyle';

export default function App() {
  return (
    <StAppWrapper>
      <GlobalStyle/>
        <Router/>
    </StAppWrapper>
  )
}

const StAppWrapper=styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: KOTRAHOPE;
`