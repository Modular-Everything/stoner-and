import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

import Container from '../Container';
import iconPicker from '../../helpers/iconPicker';
import { ButtonCallback } from '../Button';
import { AllCapsDetail } from '../Type/Headings';
import { ParagraphSmall } from '../Type/Copy';

//

const Contact = ({ setMenuPage }) => {
  const query = graphql`
    query ContactSettingsQuery {
      settings: sanitySettings {
        socialLinks {
          title
          url: link
          icon
          _key
        }
      }
    }
  `;

  const { settings } = useStaticQuery(query);

  const [submitted, setSubmitted] = useState('Send Message');
  const [response, setResponse] = useState(null);
  // const [mailchimp, setMailchimp] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSubmitted('Sending...');

    console.log(data);

    const templateParams = {
      contact_subject: data.contactSubject,
      contact_name: data.contactName,
      contact_reply_to: data.contactEmail,
      contact_message: data.contactMessage,
    };

    emailjs
      .send(
        'mailjet',
        'template_cpp63cx',
        templateParams,
        process.env.GATSBY_CONTACT_ID
      )
      .then(
        () => {
          setSubmitted('Message Sent');
          setResponse({
            sent: true,
            message:
              'Thanks! Your message was sent successfully. We aim to respond within 2-3 working days.',
          });
        },
        (error) => {
          setResponse({
            sent: false,
            message: error,
          });
        }
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
                disabled={
                  submitted === 'Sending...' || (response && response.sent)
                }
              />
              {response && response.sent && <small>{response.message}</small>}
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
            <ParagraphSmall as="ul">
              {settings.socialLinks.map((link) => (
                <li key={link._key}>
                  <a href={link.url}>
                    {iconPicker(link.icon)}
                    <span>{link.title}</span>
                  </a>
                </li>
              ))}
            </ParagraphSmall>
          </div>

          <div className="details--section">
            <ButtonCallback
              label="Paying us a visit?"
              theme="var(--black)"
              onClick={() => setMenuPage('findUs')}
            />
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

    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        margin-bottom: calc(var(--gutter) / 4);

        span {
          margin-left: calc(var(--gutter) / 2);
        }

        a {
          display: flex;
          align-items: center;
          transition: var(--ease-links);
          opacity: 1;
          color: var(--black);
          text-decoration: none;

          &:hover {
            opacity: 0.6;
          }
        }

        svg {
          color: var(--black);
          font-size: 1.8rem;
        }
      }
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
    width: 100%;
    max-width: 64rem;
    font-size: 1.4rem;
    line-height: 2rem;

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

    .submit {
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (min-width: 500px) {
        flex-direction: row;
      }

      input[type='submit'] {
        width: 100%;
        max-width: 40rem;
        margin-bottom: 0;
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
        max-width: 28rem;
        margin: var(--gutter) 0 0 0;
        font-size: 1.2rem;
        line-height: 1.8rem;

        @media (min-width: 500px) {
          margin: 0 0 0 var(--gutter);
        }
      }
    }

    .formError {
      border: 1px solid red !important;
    }
  }
`;

Contact.propTypes = {
  setMenuPage: PropTypes.func.isRequired,
};
