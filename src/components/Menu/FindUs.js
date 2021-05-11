import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticGoogleMap, Marker } from 'react-static-google-map';
import { MdOpenInNew as NewWindowIcon } from 'react-icons/md';

import { AllCapsDetail } from '../Type/Headings';
import { ParagraphSmall } from '../Type/Copy';

//

const FindUs = () => {
  const query = graphql`
    query FindUsQuery {
      findUs: sanityFindUs(_id: { regex: "/findUs/" }) {
        address
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
    }
  `;

  const { findUs } = useStaticQuery(query);

  return (
    <FindUsSC>
      <MapWrapper>
        <StaticGoogleMap
          size="750x750"
          className="google-static-map"
          apiKey="AIzaSyDhhlV2JsbO79NtLyfjAbVx-OFcBcBrCeI"
          zoom="14"
        >
          <Marker location={{ lat: findUs.map.lat, lng: findUs.map.lng }} />
        </StaticGoogleMap>

        <div className="open">
          <AllCapsDetail
            as="a"
            href={`https://www.google.com/maps/search/?api=1&query=${findUs.address}`}
          >
            <span>Open in Google Maps</span>
            <NewWindowIcon />
          </AllCapsDetail>
        </div>
      </MapWrapper>

      <div className="details">
        <div className="details--section">
          <AllCapsDetail as="h4">Visit Our Store</AllCapsDetail>
          <ParagraphSmall as="address">{findUs.address}</ParagraphSmall>
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
      </div>
    </FindUsSC>
  );
};

export default FindUs;

const FindUsSC = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  width: calc(100vw - (var(--gutter) * 2));
  height: calc(100vh - (var(--gutter) * 2) - var(--headerHeight));
  padding: calc(var(--gutter) + var(--headerHeight)) var(--gutter) var(--gutter);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: unset;
    height: calc(100vh - (var(--gutter) * 2));
    margin-top: unset;
    padding: var(--gutter);
  }

  .details {
    width: 100%;
    margin-bottom: calc(var(--gutter) * 2);

    @media (min-width: 768px) {
      width: calc(25% - var(--gutter));
      margin-bottom: 0;
      margin-left: var(--gutter);
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
    width: 75%;
    height: 100%;
    padding-bottom: 0;
  }

  .google-static-map {
    width: 100%;
    height: 100%;
    object-fit: cover;
    max-height: 32rem;
    filter: grayscale(100%);
    opacity: 0.9;
    mix-blend-mode: multiply;

    @media (min-width: 768px) {
      max-height: 76rem;
    }
  }

  a {
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
