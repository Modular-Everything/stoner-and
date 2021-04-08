import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';
import Header from '../components/Header';
import SEO from '../components/SEO';
import Container from '../components/Container';
import IntroText from '../components/IntroText/IntroText';
import Signpost from '../components/Signpost/Signpost';

//

const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <Header gradient={false} />

      <Content>
        <ContentContainer>
          <IntroText />
          <Signpost />
        </ContentContainer>

        <footer style={{ paddingBottom: 'calc(var(--gutter) * 2)' }}>
          <center>Footer</center>
        </footer>
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

const ContentContainer = styled(Container)`
  & > section {
    margin-bottom: calc(var(--gutter) * 2);
  }
`;
