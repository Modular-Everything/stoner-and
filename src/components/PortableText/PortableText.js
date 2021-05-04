import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';

import { HeaderTwoSerif, HeaderThree } from '../Type/Headings';
import { ParagraphLarge } from '../Type/Copy';

//

const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '');

    if (level === '2' || level === '3') {
      return (
        <HeaderTwoSerif as={`h${level}`} style>
          {props.children}
        </HeaderTwoSerif>
      );
    }

    return (
      <HeaderThree as={`h${level}`} style>
        {props.children}
      </HeaderThree>
    );
  }

  if (style === 'normal') {
    return <ParagraphLarge>{props.children}</ParagraphLarge>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

//

const PortableText = ({ content }) => {
  if (!content) return null;

  return (
    <PortableTextSC>
      <BlockContent
        blocks={content}
        serializers={{ types: { block: BlockRenderer } }}
      />
    </PortableTextSC>
  );
};

export default PortableText;

const PortableTextSC = styled.section`
  max-width: 88rem;
  margin: 0 auto;
  width: 100%;

  div > * {
    margin-bottom: var(--gutter);
    display: inline-block;
    color: var(--black);
  }

  ul,
  ol {
    font-family: var(--halyard-text);
    font-weight: 300;
    margin-top: 0;
    padding-top: 0;
    padding-bottom: 0;
    font-size: 1.6rem;

    & + p {
      text-indent: 1.6rem;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: calc(var(--gutter) / 2);

    & + p {
      text-indent: 1.6rem;
    }
  }

  p:first-of-type {
    text-indent: 1.6rem;
  }

  a {
    color: var(--black);
    transition: var(--ease-links);
    opacity: 1;

    &:hover {
      opacity: 0.5;
    }
  }
`;

PortableText.propTypes = {
  content: PropTypes.array.isRequired,
};
