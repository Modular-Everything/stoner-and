import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SwiperCore, { Scrollbar, A11y } from 'swiper';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ThemeContext } from '../../contexts/ThemeContext';
import 'swiper/swiper-bundle.css';

import { AllCapsDetail, HeaderSerif } from '../Type/Headings';
import { ParagraphLarge } from '../Type/Copy';
import { ButtonLink } from '../Button/Button';
import { AnimateIn } from '../AnimateIn';

//

SwiperCore.use([Scrollbar, A11y]);

//

const Slider = ({ slides }) => {
  const { theme } = useContext(ThemeContext);

  if (!slides) return null;

  return (
    <SliderSC theme={theme}>
      <AnimateIn>
        <Swiper
          spaceBetween={24}
          slidesPerView="auto"
          scrollbar={{ draggable: true }}
        >
          {slides.map((slide) => {
            const image = getImage(slide.background.asset.gatsbyImageData);
            const { alt } = slide.background;

            return (
              <SwiperSlide>
                <div className="content">
                  <div className="content__top">
                    <AllCapsDetail as="h4">{slide.subtitle}</AllCapsDetail>
                    <HeaderSerif as="h3">{slide.title}</HeaderSerif>
                    <ParagraphLarge>{slide.caption}</ParagraphLarge>
                  </div>

                  <div className="content__bottom">
                    <ButtonLink
                      label={slide._rawLink.title}
                      to={`/${slide._rawLink.link._type}`}
                      theme="var(--white)"
                    />
                  </div>
                </div>

                <div className="background">
                  <Skrim />
                  <GatsbyImage image={image} alt={alt} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </AnimateIn>
    </SliderSC>
  );
};

export default Slider;

const SliderSC = styled.section`
  .swiper-slide {
    width: 32rem;
    height: 40rem;

    @media (min-width: 640px) {
      width: 43.2rem;
      height: 55.6rem;
    }

    &:nth-of-type(2) {
      .content {
        flex-direction: column-reverse;
      }
    }

    .content {
      display: flex;
      position: relative;
      z-index: 50;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: calc(100% - (var(--gutter) * 3));
      padding: calc(var(--gutter) * 1.5);
      text-align: center;

      h3 {
        color: var(--white);
      }

      h4 {
        margin-bottom: calc(var(--gutter) / 2);
        color: var(--white);
      }
    }

    .background {
      position: absolute;
      z-index: 0;
      top: 0;
      width: 100%;
      height: 100%;

      .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .swiper-container {
    overflow: visible;
  }

  .swiper-scrollbar {
    right: 0;
    bottom: calc(var(--gutter) * -2);
    left: 0;
    width: 100%;
    border-radius: 0;
    background: rgba(150, 150, 150, 0.15);

    .swiper-scrollbar-drag {
      border-radius: 0;
      background: ${({ theme }) => theme.contrast};
      cursor: grab;
    }
  }
`;

const Skrim = styled.div`
  position: absolute;
  z-index: 25;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0) 25%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 25%);
`;

Slider.propTypes = {
  slides: PropTypes.object.isRequired,
};
