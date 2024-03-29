import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Container from '../components/Container';
import IntroText from '../components/IntroText/IntroText';

//

const MissingPage = () => {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme({
      primary: 'var(--white)',
      contrast: 'var(--black)',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Content>
        <Container>
          <IntroText title="Page Not Found" subtitle="404" />
        </Container>
      </Content>

      <SEO title="...missing pages?" data-react-helmet="true" />
    </Layout>
  );
};

export default MissingPage;

const Content = styled.div`
  margin: calc(var(--headerHeight) + var(--gutter)) 0;
`;
