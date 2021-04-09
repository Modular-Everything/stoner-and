import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import Container from '../components/Container';
import IntroText from '../components/IntroText/IntroText';

//

const MissingPage = () => {
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
        <Container>
          <IntroText title="Page Not Found" subtitle="404" />
        </Container>
      </Content>

      <SEO title="...missing pages?" />
    </>
  );
};

export default MissingPage;

const Content = styled.div`
  margin: calc(var(--headerHeight) + var(--gutter)) 0;
`;
