import React from 'react';
import {
  FiFacebook as Facebook,
  FiInstagram as Instagram,
  FiLinkedin as LinkedIn,
  FiSmile as Smiley,
  FiThumbsUp as ThumbsUp,
  FiTwitter as Twitter,
  FiYoutube as YouTube,
} from 'react-icons/fi';

/**
 *
 * @param {string} icon A string, such as 'Instagram'
 * @returns Component / SVG Icon
 */

export default function iconPicker(icon) {
  switch (icon) {
    case 'Facebook':
      return <Facebook />;
    case 'Instagram':
      return <Instagram />;
    case 'LinkedIn':
      return <LinkedIn />;
    case 'Smiley':
      return <Smiley />;
    case 'ThumbsUp':
      return <ThumbsUp />;
    case 'Twitter':
      return <Twitter />;
    case 'YouTube':
      return <YouTube />;
    default:
      return null;
  }
}
