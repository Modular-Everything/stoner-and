import React, { useState } from 'react';
import styled from 'styled-components';
// import { graphql, useStaticQuery } from 'gatsby';
import { useForm } from 'react-hook-form';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import Container from '../Container';
import { AllCapsDetail } from '../Type/Headings';
import { ParagraphSmall } from '../Type/Copy';

//

const Contact = () => {
  const [submitted, setSubmitted] = useState('Send Message');
  const [mailchimp, setMailchimp] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSubmitted('Sending...');

    console.log(data);

    setTimeout(() => setSubmitted('Send Message'), 2000);

    addToMailchimp(
      data.contactEmail,
      {
        NAME: data.contactName,
        SUBJECT: data.contactSubject,
        // MESSAGE: data.contactMessage,
      },
      'https://us1.list-manage.com/contact-form?u=86e604503fc42249d937a8c23&form_id=e85ee9bdbbf6a97e1c73dc89f981c67d'
    );
  };

  return (
    <ContactSC>
      <ContactContainer>
        <FormWrapper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              {...register('contactName', { required: true })}
              className={errors.contactName && 'formError'}
            />

            <input
              type="email"
              placeholder="Email Address"
              {...register('contactEmail', { required: true })}
              className={errors.contactEmail && 'formError'}
            />

            <input
              type="text"
              placeholder="Subject"
              {...register('contactSubject', { required: true })}
              className={errors.contactSubject && 'formError'}
            />

            <textarea
              placeholder="Your Message"
              {...register('contactMessage', { required: true })}
              className={errors.contactMessage && 'formError'}
            />

            <div className="submit">
              <input
                type="submit"
                value={submitted}
                disabled={submitted === 'Submitting...'}
              />
              <small>
                We’ll never share your details with any third parties and you
                can unsubscribe at any time
              </small>
            </div>
          </form>
        </FormWrapper>

        <div className="details">
          <div className="details--section">
            <AllCapsDetail as="h4">Get in touch</AllCapsDetail>
            <ParagraphSmall as="p">
              Use our contact form to get in touch and we’ll aim to respond as
              soon as we can. Alternatively, give us a call or email us
              directly.
            </ParagraphSmall>
          </div>

          <div className="details--section">
            <ParagraphSmall as="p">
              +44 0113 123 4567
              <br />
              mail@stonerand.co
            </ParagraphSmall>
          </div>

          <div className="details--section">
            <ParagraphSmall as="p">Social!</ParagraphSmall>
          </div>
        </div>
      </ContactContainer>
    </ContactSC>
  );
};

export default Contact;

const ContactContainer = styled(Container)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: unset;
  }
`;

const ContactSC = styled.div`
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

    @media (min-width: 768px) {
      width: calc(35% - calc(var(--gutter) * 2));
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

    p {
      max-width: 32rem;
    }
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: var(--gutter);

  @media (min-width: 768px) {
    align-items: flex-end;
    justify-content: center;
    width: calc(65% - (var(--gutter) * 2));
    height: 100%;
    margin-right: calc(var(--gutter) * 2);
    padding-bottom: 0;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: var(--gutter);
    }

    input[type='text'],
    input[type='email'],
    textarea {
      width: calc(100% - (var(--gutter) * 2));
      padding: calc(var(--gutter));
      border: 0;
      outline: 0;
      background-color: ${({ theme }) => theme.secondary};
      letter-spacing: 0.1rem;
    }

    textarea {
      height: 16rem;
      margin-bottom: var(--gutter);
    }

    input[type='submit'] {
      width: 100%;
      padding: calc(var(--gutter) / 1.5);
      transition: var(--ease-links);
      border: 0;
      border-radius: 0;
      outline: 0;
      opacity: 1;
      background-color: var(--rich-black);
      color: var(--white);
      letter-spacing: 0.2rem;
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

    .formError {
      border: 1px solid red !important;
    }
  }
`;
