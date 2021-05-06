import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FiInstagram, FiTwitter, FiFacebook, FiSmile } from 'react-icons/fi';

import Container from '../Container';
import { ParagraphSmall } from '../Type/Copy';
import { HeaderSmall } from '../Type/Headings';
import { AnimateIn } from '../AnimateIn';

//

const Footer = () => (
  <AnimateIn>
    <FooterSt>
      <GridContainer>
        <article>
          <ul>
            <ParagraphSmall as="li">
              <HeaderSmall as="h6">Customer Service</HeaderSmall>
            </ParagraphSmall>

            <ParagraphSmall as="li">
              <Link to="/bespoke">Bespoke Designs</Link>
            </ParagraphSmall>
            <ParagraphSmall as="li">
              <Link to="/engagement">Engagement Rings</Link>
            </ParagraphSmall>
            <ParagraphSmall as="li">
              <Link to="/legacy">Legacy Services</Link>
            </ParagraphSmall>
            <ParagraphSmall as="li">
              <Link to="/delivery-and-returns">Delivery &amp; Returns</Link>
            </ParagraphSmall>
            <ParagraphSmall as="li">
              <Link to="/care-and-repair">Care &amp; Repair</Link>
            </ParagraphSmall>
          </ul>
        </article>

        <article>
          <ul>
            <ParagraphSmall as="li">
              <HeaderSmall as="h6">Stoner&amp;</HeaderSmall>
            </ParagraphSmall>

            <ParagraphSmall as="li">
              <Link to="/sustainability">Sustainability</Link>
            </ParagraphSmall>
            <ParagraphSmall as="li">
              <Link to="/uk-modern-slavery-act">UK Modern Slavery Act</Link>
            </ParagraphSmall>
            <ParagraphSmall as="li">
              <Link to="/website-policies">Website Policies</Link>
            </ParagraphSmall>
            <ParagraphSmall as="li">
              <Link to="/site-index">Site Index</Link>
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
                Christopher Stoner
                <br />
                Windsor House
                <br />
                Harrogate
                <br />
                HG1 2PW
              </address>
            </ParagraphSmall>
            <ParagraphSmall as="li">
              <a href="mailto:info@stonerand.co" className="underline">
                info@stonerand.co
              </a>
            </ParagraphSmall>
            <ParagraphSmall as="li">
              <a href="tel:+441423523596" className="underline">
                01423 523596
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
  </AnimateIn>
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
