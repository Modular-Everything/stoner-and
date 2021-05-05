import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Container from '../components/Container';
import PortableText from '../components/PortableText';
import SEO from '../components/SEO';
import { ThemeContext } from '../contexts/ThemeContext';

//

export const query = graphql`
  query($slug: String!) {
    fineprint: sanityGeneric(slug: { current: { eq: $slug } }) {
      title
      content: _rawFineprint(resolveReferences: { maxDepth: 10 })
    }
  }
`;

const Fineprint = ({ data }) => {
  const { fineprint } = data;

  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme({
      primary: 'var(--off-white)',
      contrast: 'var(--black)',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Content>
        <Container>
          <PortableText content={fineprint.content} />
        </Container>
      </Content>

      <SEO title={fineprint.title} />
    </Layout>
  );
};

export default Fineprint;

const Content = styled.div`
  margin: calc(var(--headerHeight) + var(--gutter)) 0;
`;

Fineprint.propTypes = {
  data: PropTypes.shape({
    fineprint: PropTypes.object.isRequired,
  }).isRequired,
};
