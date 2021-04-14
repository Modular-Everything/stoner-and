import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Gem from '../../images/shapes/gem-with-fade.inline.svg';
import Placeholder from '../../images/placeholders/square.jpeg';
import { HeaderTwoSerif } from '../Type/Headings';
import { ParagraphLarge } from '../Type/Copy';

const Signpost = () => {
  console.log('Loaded: Signpost');

  const TEST_ITEMS = [0, 1, 2];

  return (
    <SignPostSt>
      {TEST_ITEMS.map(() => (
        <Link to="/">
          <article>
            <div className="content">
              <HeaderTwoSerif as="h3">Engagement</HeaderTwoSerif>
              <ParagraphLarge>Find the perfect ring</ParagraphLarge>
            </div>

            <div className="gem">
              <Gem />
            </div>

            <div className="background">
              <img src={Placeholder} alt="" />
            </div>
          </article>
        </Link>
      ))}
    </SignPostSt>
  );
};

export default Signpost;

const SignPostSt = styled.section`
  display: grid;
  grid-gap: var(--gutter);
  grid-template-columns: 1fr;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  a {
    position: relative;
    overflow: hidden;
    border-radius: 0.4rem;
    color: var(--black);
    text-decoration: none;

    &:nth-of-type(1) .gem {
      width: 28rem;
      height: 32rem;
    }

    &:nth-of-type(2) .gem {
      width: 34rem;
      height: 20rem;
    }

    &:last-of-type {
      @media (min-width: 500px) {
        grid-column: span 2;
      }

      @media (min-width: 768px) {
        grid-column: unset;
      }
    }
  }

  article {
    height: 32rem;

    @media (min-width: 640px) {
      height: 43.2rem;
    }
  }

  .content {
    display: flex;
    position: relative;
    z-index: 150;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;

    h3 {
      margin-bottom: 1.6rem;
    }
  }

  .gem {
    position: absolute;
    z-index: 50;
    top: 50%;
    left: 50%;
    width: 32rem;
    height: 32rem;
    transform: translate(-50%, -50%);

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .background {
    position: absolute;
    z-index: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
