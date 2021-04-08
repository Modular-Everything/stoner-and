import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';
import Header from '../components/Header';
import SEO from '../components/SEO';
import Container from '../components/Container';
import IntroText from '../components/IntroText/IntroText';

//

const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <Header gradient={false} />

      <Content>
        <Container>
          <IntroText />
        </Container>
      </Content>

      <SEO />
    </>
  );
};

export default HomePage;

const Content = styled.div`
  position: relative;
  top: calc(var(--headerHeight) + var(--gutter));
`;
