import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FiInstagram, FiTwitter, FiFacebook, FiSmile } from 'react-icons/fi';

import Container from '../Container';
import { ParagraphSmall } from '../Type/Copy';
import { HeaderSmall } from '../Type/Headings';

//

const Footer = () => (
  <FooterSt>
    <GridContainer>
      <article>
        <ul>
          <ParagraphSmall as="li">
            <HeaderSmall as="h6">Customer Service</HeaderSmall>
          </ParagraphSmall>

          <ParagraphSmall as="li">
            <Link to="/">Bespoke Designs</Link>
          </ParagraphSmall>
          <ParagraphSmall as="li">
            <Link to="/">Engagement Rings</Link>
          </ParagraphSmall>
          <ParagraphSmall as="li">
            <Link to="/">Legacy Services</Link>
          </ParagraphSmall>
          <ParagraphSmall as="li">
            <Link to="/">Delivery &amp; Returns</Link>
          </ParagraphSmall>
          <ParagraphSmall as="li">
            <Link to="/">Care &amp; Repair</Link>
          </ParagraphSmall>
        </ul>
      </article>

      <article>
        <ul>
          <ParagraphSmall as="li">
            <HeaderSmall as="h6">Stoner&amp;</HeaderSmall>
          </ParagraphSmall>

          <ParagraphSmall as="li">
            <Link to="/">Sustainability</Link>
          </ParagraphSmall>
          <ParagraphSmall as="li">
            <Link to="/">UK Modern Slavery Act</Link>
          </ParagraphSmall>
          <ParagraphSmall as="li">
            <Link to="/">Website Policies</Link>
          </ParagraphSmall>
          <ParagraphSmall as="li">
            <Link to="/">Site Index</Link>
          </ParagraphSmall>
        </ul>
      </article>

      <article>
        <ul>
          <ParagraphSmall as="li">
            <HeaderSmall as="h6">Get in Touch</HeaderSmall>
          </ParagraphSmall>

          <ParagraphSmall as="li">
            <address>
              Unit 12, Thornton’s Arcade
              <br />
              Land’s Lane
              <br />
              Leeds
              <br />
              West Yorkshire
              <br />
              LS1 4ED
            </address>
          </ParagraphSmall>
          <ParagraphSmall as="li">
            <a href="mailto:info@stonerand.co" className="underline">
              info@stonerand.co
            </a>
          </ParagraphSmall>
        </ul>
      </article>

      <article>
        <ul className="social">
          <ParagraphSmall as="li">
            <HeaderSmall as="h6">On the Web</HeaderSmall>
          </ParagraphSmall>

          <ParagraphSmall as="li">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FiInstagram />
              </span>
              <span className="label">Instagram</span>
            </a>
          </ParagraphSmall>
          <ParagraphSmall as="li">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FiTwitter />
              </span>
              <span className="label">Twitter</span>
            </a>
          </ParagraphSmall>
          <ParagraphSmall as="li">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FiFacebook />
              </span>
              <span className="label">Facebook</span>
            </a>
          </ParagraphSmall>
          <ParagraphSmall as="li">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FiSmile />
              </span>
              <span className="label">Customer Reviews</span>
            </a>
          </ParagraphSmall>
        </ul>
      </article>
    </GridContainer>
  </FooterSt>
);

export default Footer;

const GridContainer = styled(Container)`
  display: grid;
  grid-gap: var(--gutter);
  grid-template-columns: 1fr;
  text-align: center;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    text-align: unset;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterSt = styled.footer`
  padding: calc(var(--gutter) * 2) 0;
  background-color: var(--white);
  color: var(--black);

  a {
    display: flex;
    justify-content: center;
    color: var(--black);
    text-decoration: none;

    @media (min-width: 500px) {
      justify-content: unset;
    }

    &:hover {
      text-decoration: underline;
    }

    &.underline {
      text-decoration: underline;
    }
  }

  article {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      margin-bottom: 0.4rem;
    }

    .social {
      display: flex;
      justify-content: center;
      margin-bottom: 0.4rem;

      li {
        &:first-of-type {
          display: none;
        }

        &:last-of-type .icon {
          margin-right: 0;

          @media (min-width: 500px) {
            margin-right: 1.6rem;
          }
        }
      }

      @media (min-width: 500px) {
        display: unset;
        justify-content: unset;

        li:first-of-type {
          display: unset;
        }
      }

      .icon {
        display: flex;
        align-items: center;
        margin-right: 1.6rem;
        font-size: 2.4rem;

        @media (min-width: 500px) {
          font-size: 1.8rem;
        }
      }

      .label {
        display: none;

        @media (min-width: 500px) {
          display: unset;
        }
      }
    }

    h6 {
      margin-bottom: calc(var(--gutter) / 2);
    }

    address {
      font-style: normal;
    }
  }
`;