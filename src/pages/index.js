import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import Container from '../components/Container';
import IntroText from '../components/IntroText/IntroText';
import Signpost from '../components/Signpost/Signpost';

//

const HomePage = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme({
      ...theme,
      contrast: 'var(--black)',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Content>
        <ContentContainer>
          <IntroText />
          <Signpost />
        </ContentContainer>
      </Content>

      <SEO />
    </>
  );
};

export default HomePage;

const Content = styled.div`
  margin-top: calc(var(--headerHeight) + var(--gutter));
`;

const ContentContainer = styled(Container)`
  & > section {
    margin-bottom: calc(var(--gutter) * 2);
  }
`;
