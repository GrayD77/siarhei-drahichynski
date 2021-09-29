import React from 'react';
import { ReactComponent as LinkedInIcon } from './in.svg';
import './LinkedIn.css';

const LinkedIn = () => {

    return (
        <a
            target='_blank'
            rel='noreferrer noopener'
            className='linkedIn'
            href="https://www.linkedin.com/in/siarhei-drahichynski-frontend/"
        >
            <LinkedInIcon
                width={34}
                height={34}
            />
        </a>
    );
};

export default LinkedIn;