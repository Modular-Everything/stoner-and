import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { ThemeContext } from '../../contexts/ThemeContext';
import Container from '../Container';
import { ParagraphSmall } from '../Type/Copy';
import { HeaderSmall } from '../Type/Headings';
import { AnimateIn } from '../AnimateIn';
import iconPicker from '../../helpers/iconPicker';

//

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const query = graphql`
    query FooterQuery {
      settings: sanitySettings(_id: { regex: "/settings/" }) {
        address
        email
        telephone
        socialLinks {
          _key
          icon
          url: link
        }
      }
      footer: sanityFooterSettings(_id: { regex: "/footerSettings/" }) {
        columnOne {
          title
          _rawPages(resolveReferences: { maxDepth: 1 })
        }
        columnTwo {
          title
          _rawPages(resolveReferences: { maxDepth: 1 })
        }
      }
    }
  `;

  const { settings, footer } = useStaticQuery(query);

  return (
    <AnimateIn>
      <FooterSt theme={theme}>
        <GridContainer>
          <article>
            <ul>
              <ParagraphSmall as="li">
                <HeaderSmall as="h3">{footer.columnOne.title}</HeaderSmall>
              </ParagraphSmall>

              {footer.columnOne._rawPages.map((page) => (
                <ParagraphSmall as="li">
                  <Link
                    to={`/${(page.slug && page.slug.current) || page._type}`}
                  >
                    {page.title}
                  </Link>
                </ParagraphSmall>
              ))}
            </ul>
          </article>

          <article>
            <ul>
              <ParagraphSmall as="li">
                <HeaderSmall as="h3">{footer.columnTwo.title}</HeaderSmall>
              </ParagraphSmall>

              {footer.columnTwo._rawPages.map((page) => (
                <ParagraphSmall as="li">
                  <Link
                    to={`/${(page.slug && page.slug.current) || page._type}`}
                  >
                    {page.title}
                  </Link>
                </ParagraphSmall>
              ))}
            </ul>
          </article>

          <article>
            <ul>
              <ParagraphSmall as="li">
                <HeaderSmall as="h3">Get in Touch</HeaderSmall>
              </ParagraphSmall>

              <ParagraphSmall as="li">
                <address>{settings.address}</address>
              </ParagraphSmall>
              <ParagraphSmall as="li">
                <a href={`mailto:${settings.email}`} className="underline">
                  {settings.email}
                </a>
              </ParagraphSmall>
              <ParagraphSmall as="li">
                <a
                  href={`tel:${settings.telephone.replace(/\s/g, '')}`}
                  className="underline"
                >
                  {settings.telephone}
                </a>
              </ParagraphSmall>
            </ul>
          </article>

          <article>
            <ul className="social">
              <ParagraphSmall as="li">
                <HeaderSmall as="h3">On the Web</HeaderSmall>
              </ParagraphSmall>

              {settings.socialLinks.map((link) => (
                <ParagraphSmall as="li" key={link._key}>
                  <a href={link.url}>
                    <span className="icon">{iconPicker(link.icon)}</span>
                    <span className="label">{link.title}</span>
                  </a>
                </ParagraphSmall>
              ))}
            </ul>
          </article>
        </GridContainer>
      </FooterSt>
    </AnimateIn>
  );
};

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

    h3 {
      margin-bottom: calc(var(--gutter) / 2);
      color: ${({ theme }) =>
        theme.contrast === 'var(--off-white)' ||
        theme.contrast === 'var(--white)'
          ? 'var(--black)'
          : theme.contrast};
    }

    address {
      font-style: normal;
      white-space: pre-wrap;
    }
  }
`;
