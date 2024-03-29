import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { useForm } from 'react-hook-form';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HeaderThree } from '../Type/Headings';
import { ParagraphSmall } from '../Type/Copy';
import { KaleidoscopeBg } from '../Kaleidoscope/KaleidoscopeWrappers';
import { AnimateIn } from '../AnimateIn';

//

const Newsletter = ({ image }) => {
  const [submitted, setSubmitted] = useState('Subscribe');
  const [mailchimp, setMailchimp] = useState(null);
  const { theme } = useContext(ThemeContext);

  let newsletterTheme = {};
  switch (theme.primary) {
    case 'var(--rich-black)':
      newsletterTheme = {
        primary: 'var(--white)',
        secondary: 'var(--white)',
        contrast: 'var(--black)',
      };
      break;
    default:
      newsletterTheme = {
        primary: 'var(--black)',
        secondary: 'var(--off-white)',
        contrast: 'var(--white)',
      };
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const name = watch('name');

  const onSubmit = (data) => {
    setSubmitted('...');

    addToMailchimp(data.email, {
      NAME: data.name,
    }).then((mailchimpData) => {
      setMailchimp(mailchimpData);
      setSubmitted(
        mailchimpData.result === 'error' ? 'Try again' : 'Subscribe'
      );
    });
  };

  return (
    <NewsletterSC theme={newsletterTheme}>
      <AnimateIn>
        <div className="kaleidoscope">
          {image && (
            <KaleidoscopeBg
              image={`${image}?max-h=1080&max-w=1080bg=fffq=75`}
            />
          )}
        </div>

        <div className="content">
          <HeaderThree as="h2">
            18-Karat* News and Offers
            {name && name.includes(' ') && (
              <> &mdash; just for you, {name.split(' ')[0]}!</>
            )}
          </HeaderThree>
          <ParagraphSmall>
            * 75% solid gold newsletter content (the other 25% usually consists
            of zinc, copper and nickel)
          </ParagraphSmall>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="name"
              aria-label="Enter your name"
              placeholder="Your Name"
              {...register('name', { required: true })}
              className={errors.name && 'formError'}
            />

            <input
              type="email"
              name="email"
              aria-label="Enter your email address"
              placeholder="Email Address"
              {...register('email', { required: true })}
              className={errors.email && 'formError'}
            />

            <div className="submit">
              <input
                type="submit"
                name="submit"
                aria-label="submit"
                value={submitted}
                disabled={submitted === '...'}
              />
              <small>
                We’ll never share your details with any third parties and you
                can unsubscribe at any time
              </small>
            </div>

            {submitted && mailchimp && (
              <span className={`message ${mailchimp.result || undefined}`}>
                {/* eslint-disable-next-line react/no-danger */}
                <span dangerouslySetInnerHTML={{ __html: mailchimp.msg }} />
              </span>
            )}
          </form>
        </div>
      </AnimateIn>
    </NewsletterSC>
  );
};

export default Newsletter;

const NewsletterSC = styled.section`
  div {
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }

  .kaleidoscope {
    position: relative;
    padding-bottom: 50%;

    section {
      z-index: unset;
      width: 100%;
      height: 100%;
      overflow: hidden;

      canvas {
        top: -50%;
        width: 100%;
        height: unset;

        @media (min-width: 1024px) {
          top: 0;
          height: 100%;
        }
      }
    }

    @media (min-width: 1024px) {
      width: 50%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - (var(--gutter) * 3));
    padding: calc(var(--gutter) * 1.5);
    background-color: ${({ theme }) => theme.contrast};
    color: ${({ theme }) => theme.primary};

    @media (min-width: 640px) {
      width: calc(100% - (var(--gutter) * 7));
      padding: calc(var(--gutter) * 3.5);
    }

    @media (min-width: 1024px) {
      width: calc(50% - (var(--gutter) * 7));
    }

    h2,
    p {
      max-width: 40rem;
      margin-bottom: var(--gutter);
    }

    form {
      display: flex;
      flex-direction: column;
      font-size: 1.4rem;
      line-height: 2rem;
    }

    label p {
      display: none;
    }

    input[type='text'],
    input[type='email'] {
      width: calc(100% - (var(--gutter) * 2));
      padding: calc(var(--gutter));
      border: 0;
      outline: 0;
      background-color: ${({ theme }) => theme.secondary};
      letter-spacing: 0.1rem;
    }

    input[type='email'] {
      margin: calc(var(--gutter) / 2) 0;
    }

    .formError {
      border: 1px solid red !important;
    }

    .submit {
      @media (min-width: 500px) {
        display: flex;
        align-items: center;
      }

      input[type='submit'] {
        width: 100%;
        max-width: 40rem;
        padding: 1.6rem 3.2rem;
        transition: var(--ease-links);
        border: 0;
        border-radius: 0;
        outline: 0;
        opacity: 1;
        background-color: var(--rich-black);
        color: var(--white);
        font-size: 1.4rem;
        letter-spacing: 0.4rem;
        line-height: 2rem;
        text-align: center;
        text-transform: uppercase;
        cursor: pointer;

        @media (min-width: 500px) {
          width: 35%;
        }

        &:hover {
          opacity: 0.8;
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }

      small {
        display: block;
        width: calc(100% - var(--gutter));
        margin: calc(var(--gutter) / 2) 0 0 0;
        font-size: 1rem;
        line-height: 1.6rem;

        @media (min-width: 500px) {
          width: calc(65% - var(--gutter));
          max-width: 22rem;
          margin: 0 0 0 var(--gutter);
        }
      }
    }

    .message {
      margin-top: var(--gutter);

      &.error,
      &.error a {
        color: red;
      }

      &.success,
      &.success a {
        color: green;
      }
    }
  }
`;

Newsletter.propTypes = {
  image: PropTypes.string.isRequired,
};
