import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { useForm } from 'react-hook-form';

import { ThemeContext } from '../../contexts/ThemeContext';
import { HeaderThree } from '../Type/Headings';
import { ParagraphSmall } from '../Type/Copy';

//

const Newsletter = () => {
  const [submitted, setSubmitted] = useState('Subscribe');
  const [mailchimp, setMailchimp] = useState(null);
  const { theme } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const name = watch('name');

  const onSubmit = (data) => {
    setSubmitted('Submitting...');

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
    <NewsletterSC theme={theme}>
      <div className="kaleidoscope" />
      <div className="content">
        <HeaderThree as="h3">
          18-Karat* News and Offers
          {name && name.includes(' ') && (
            <> &mdash; just for you, {name.split(' ')[0]}!</>
          )}
        </HeaderThree>
        <ParagraphSmall>
          * 75% solid gold newsletter content (the other 25% usually consists of
          zinc, copper and nickel)
        </ParagraphSmall>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
            className={errors.name && 'formError'}
          />

          <input
            type="email"
            placeholder="Email Address"
            {...register('email', { required: true })}
            className={errors.email && 'formError'}
          />

          <div className="submit">
            <input
              type="submit"
              value={submitted}
              disabled={submitted === 'Submitting...'}
            />
            <small>
              We’ll never share your details with any third parties and you can
              unsubscribe at any time
            </small>
          </div>

          {submitted && mailchimp && (
            <span className={`message ${mailchimp.result || undefined}`}>
              <span dangerouslySetInnerHTML={{ __html: mailchimp.msg }} />
            </span>
          )}
        </form>
      </div>
    </NewsletterSC>
  );
};

export default Newsletter;

const NewsletterSC = styled.section`
  display: flex;

  .kaleidoscope {
    width: 50%;
  }

  .content {
    width: calc(50% - (var(--gutter) * 7));
    padding: calc(var(--gutter) * 3.5);
    background-color: ${({ theme }) => theme.contrast};
    color: ${({ theme }) =>
      theme.primary === 'var(--rich-black)' ? 'var(--black)' : theme.primary};

    h3,
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

    input[type='text'],
    input[type='email'] {
      width: calc(100% - (var(--gutter)));
      padding: calc(var(--gutter) / 1.5);
      border: 0;
      outline: 0;
      background-color: var(--white);
      letter-spacing: 0.1rem;
    }

    input[type='email'] {
      margin: calc(var(--gutter) / 2) 0;
    }

    .formError {
      border: 1px solid red !important;
    }

    .submit {
      display: flex;
      align-items: center;

      input[type='submit'] {
        width: 35%;
        padding: calc(var(--gutter) / 1.5);
        transition: var(--ease-links);
        border: 0;
        outline: 0;
        opacity: 1;
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.contrast};
        letter-spacing: 0.2rem;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }

        &:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }

      small {
        width: calc(65% - var(--gutter));
        max-width: 22rem;
        margin-left: var(--gutter);
        font-size: 1rem;
        line-height: 1.6rem;
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
