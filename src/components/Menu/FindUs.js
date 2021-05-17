import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticGoogleMap, Marker } from 'react-static-google-map';
import { MdOpenInNew as NewWindowIcon } from 'react-icons/md';

import Container from '../Container';
import { AllCapsDetail } from '../Type/Headings';
import { ParagraphSmall } from '../Type/Copy';
import { ButtonCallback } from '../Button';

//

const FindUs = ({ setMenuPage }) => {
  const query = graphql`
    query FindUsQuery {
      findUs: sanityFindUs(_id: { regex: "/findUs/" }) {
        openingTimes {
          _key
          day
          hours
        }
        map {
          lat
          lng
        }
      }

      settings: sanitySettings(_id: { regex: "/settings/" }) {
        address
      }
    }
  `;

  const { findUs, settings } = useStaticQuery(query);

  const mapUrl = settings.address.replace(/\n/g, ', ');

  return (
    <FindUsSC>
      <FindUsContainer>
        <MapWrapper>
          <a href={`https://www.google.com/maps/search/?api=1&query=${mapUrl}`}>
            <StaticGoogleMap
              size="750x750"
              className="google-static-map"
              apiKey="AIzaSyDhhlV2JsbO79NtLyfjAbVx-OFcBcBrCeI"
              zoom="14"
            >
              <Marker location={{ lat: findUs.map.lat, lng: findUs.map.lng }} />
            </StaticGoogleMap>
          </a>

          <div className="open">
            <AllCapsDetail
              as="a"
              href={`https://www.google.com/maps/search/?api=1&query=${mapUrl}`}
            >
              <span>Open in Google Maps</span>
              <NewWindowIcon />
            </AllCapsDetail>
          </div>
        </MapWrapper>

        <div className="details">
          <div className="details--section">
            <AllCapsDetail as="h4">Visit Our Store</AllCapsDetail>
            <ParagraphSmall as="address">{settings.address}</ParagraphSmall>
          </div>

          <div className="details--section">
            <AllCapsDetail as="h4">Opening Hours</AllCapsDetail>
            <ul>
              {findUs.openingTimes.map((time) => (
                <ParagraphSmall as="li" key={time._key}>
                  {time.day}
                  <br />
                  {time.hours}
                </ParagraphSmall>
              ))}
            </ul>
          </div>

          <div className="details--section">
            <ButtonCallback
              label="Get in touch"
              theme="var(--black)"
              onClick={() => setMenuPage('contact')}
            />
          </div>
        </div>
      </FindUsContainer>
    </FindUsSC>
  );
};

export default FindUs;

const FindUsContainer = styled(Container)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: unset;
  }
`;

const FindUsSC = styled.div`
  width: calc(100vw - (var(--gutter) * 2));
  height: calc(100vh - (var(--gutter) * 2) - var(--headerHeight));
  padding: calc(var(--gutter) + var(--headerHeight)) var(--gutter) var(--gutter);

  @media (min-width: 768px) {
    height: calc(100vh - (var(--gutter) * 2));
    margin-top: unset;
    padding: var(--gutter);
  }

  .details {
    width: 100%;
    margin-bottom: calc(var(--gutter) * 2);
    color: var(--black);

    @media (min-width: 768px) {
      width: calc(25% - calc(var(--gutter) * 2));
      margin-bottom: 0;
      margin-left: calc(var(--gutter) * 2);
    }

    .details--section {
      margin-bottom: calc(var(--gutter) * 2);

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    h4 {
      margin-bottom: calc(var(--gutter) / 2);
      color: var(--rich-black);
    }

    address {
      font-style: normal;
      font-weight: 300;
      text-transform: capitalize;
      white-space: pre-wrap;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        margin-bottom: calc(var(--gutter) / 2);
      }
    }
  }
`;

const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: var(--gutter);

  @media (min-width: 768px) {
    justify-content: center;
    width: calc(75% - (var(--gutter) * 2));
    height: 100%;
    margin-right: calc(var(--gutter) * 2);
    padding-bottom: 0;
  }

  a:hover .google-static-map {
    opacity: 1;
  }

  .google-static-map {
    width: 100%;
    height: 100%;
    max-height: 32rem;
    transition: var(--ease-links);
    opacity: 0.9;
    object-fit: cover;
    filter: grayscale(100%);
    mix-blend-mode: multiply;

    @media (min-width: 768px) {
      max-height: 76rem;
    }
  }

  .open a {
    display: flex;
    align-items: center;
    margin-top: var(--gutter);
    transition: var(--ease-links);
    opacity: 1;
    color: var(--black);
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }

    span {
      margin-right: 0.4rem;
    }
  }
`;

FindUs.propTypes = {
  setMenuPage: PropTypes.func.isRequired,
};
