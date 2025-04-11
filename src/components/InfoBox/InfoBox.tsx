import React, { useState, useEffect } from 'react';
import styles from './InfoBox.module.css';
import { InfoBoxProps } from './InfoBox.types';

const InfoBox: React.FC<InfoBoxProps> = ({
  title,
  text,
  linkText,
  linkUrl,
}) => {
  const [isExternal, setIsExternal] = useState(false);
  const [isSecure, setIsSecure] = useState(false);

  useEffect(() => {
    // Check if the link is external
    const currentOrigin = window.location.origin;
    const linkOrigin = new URL(linkUrl).origin;
    setIsExternal(linkOrigin !== currentOrigin);

    // Check if the link uses HTTPS
    setIsSecure(linkUrl.startsWith('https://'));
  }, [linkUrl]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (isExternal) {
      // Show confirmation dialog for external links
      if (window.confirm('You are about to visit an external site. Do you want to proceed?')) {
        window.open(linkUrl, '_blank', 'noopener,noreferrer');
      }
    } else {
      window.open(linkUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={styles.container}
      role="region"
      aria-label="Information box"
    >
      <h2 
        className={styles.title}
        tabIndex={0}
      >
        {title}
      </h2>
      <p 
        className={styles.text}
        tabIndex={0}
      >
        {text}
      </p>
      <a
        href={linkUrl}
        onClick={handleClick}
        className={styles.button}
        target="_blank"
        rel="noopener noreferrer"
        role="button"
        aria-label={`${linkText} (${isExternal ? 'external link' : ''}${isSecure ? ', secure connection' : ''})`}
      >
        {linkText}
        {isExternal && (
          <span aria-hidden="true" style={{ marginLeft: '8px' }}>↗</span>
        )}
      </a>
    </div>
  );
};

export default InfoBox; 