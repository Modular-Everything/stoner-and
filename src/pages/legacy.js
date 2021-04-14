import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';
import SEO from '../components/SEO';
import Container from '../components/Container';
import JewelleryDevice from '../components/JewelleryDevice/JewelleryDevice';
import ImageHeading from '../components/ImageHeading/ImageHeading';
import Layout from '../components/Layout';

//

const LegacyPage = () => {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme({
      primary: 'var(--rich-black)',
      contrast: 'var(--white)',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <ImageHeading />

      <Content>
        <ContentContainer>
          <JewelleryDevice
            title="Bring new life to your unwanted collections"
            subtitle="Legacy"
            copy={[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis. Lacus luctus accumsan tortor posuere ac. Sit amet venenatis urna cursus eget nunc. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus.',
              'Orci nulla pellentesque dignissim enim sit amet venenatis urna. Risus quis varius quam quisque id diam vel quam. Commodo sed egestas egestas fringilla phasellus faucibus. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Eleifend quam.',
            ]}
          />
        </ContentContainer>
      </Content>

      <SEO title="Legacy" />
    </Layout>
  );
};

export default LegacyPage;

const Content = styled.div`
  margin-top: calc(-1 * (var(--gutter) * 7));
`;

const ContentContainer = styled(Container)`
  & > section {
    margin-bottom: calc(var(--gutter) * 2);
  }
`;
