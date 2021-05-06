import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';
import { BsArrowRight as Arrow } from 'react-icons/bs';

import { HeaderThreeSerif } from '../Type/Headings';
import { ParagraphLarge } from '../Type/Copy';
import { AnimateIn } from '../AnimateIn';

const Signpost = ({ signs }) => (
  <SignPostSt>
    {signs.map((sign) => (
      <TransitionLink
        to={`/${sign._rawLink?.slug?.current || sign._rawLink?._type}`}
        exit={{
          length: 1,
        }}
        entry={{
          delay: 0.6,
        }}
        key={sign._key}
      >
        <AnimateIn>
          <article>
            <div className="content">
              <HeaderThreeSerif as="h3">{sign.title}</HeaderThreeSerif>
              <div className="cta">
                <ParagraphLarge as="p">{sign.caption}</ParagraphLarge>
                <Arrow />
              </div>
            </div>
          </article>
        </AnimateIn>
      </TransitionLink>
    ))}
  </SignPostSt>
);

export default Signpost;

const SignPostSt = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  a {
    position: relative;
    overflow: hidden;
    transition: var(--ease-links);
    border-radius: 0.4rem;
    color: var(--black);
    text-decoration: none;

    &:hover {
      opacity: 0.65;

      .cta svg {
        transform: translateX(0.4rem);
      }
    }
  }

  article {
    margin-bottom: var(--gutter);

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .content {
    display: flex;
    position: relative;
    z-index: 150;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: calc(100% - (var(--gutter) * 2));
    height: calc(100% - (var(--gutter) * 2));
    padding: var(--gutter);
    text-align: center;

    h3 {
      margin-bottom: 1.6rem;
    }
  }

  .cta {
    display: flex;
    align-items: center;

    p {
      margin-right: 0.4rem;
    }

    svg {
      width: 1.4rem;
      height: 1.4rem;
      transition: var(--ease-transform);
    }
  }
`;

Signpost.propTypes = {
  signs: PropTypes.array.isRequired,
};
