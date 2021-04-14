import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import Container from '../components/Container';
import IntroText from '../components/IntroText/IntroText';
import Signpost from '../components/Signpost/Signpost';
import Layout from '../components/Layout';

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
    <Layout>
      <Content>
        <ContentContainer>
          <IntroText
            title="Design that comes to life"
            subtitle="Lorem ipsum"
            copy={[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis. Lacus luctus accumsan tortor posuere ac. Sit amet venenatis urna cursus eget nunc. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus.',
              'Orci nulla pellentesque dignissim enim sit amet venenatis urna. Risus quis varius quam quisque id diam vel quam. Commodo sed egestas egestas fringilla phasellus faucibus. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Eleifend quam.',
            ]}
          />

          <Signpost />
        </ContentContainer>
      </Content>

      <SEO />
    </Layout>
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
