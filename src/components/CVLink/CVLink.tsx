import React, {FC} from 'react';
import './CVLink.css';

const CVLink: FC = () => {
    return (
        <a
            className={'cv-link'}
            href={'/drahichynski-siarhei-cv.pdf'}
            download={'drahichynski-siarhei-cv.pdf'}
        >
            <span>cv</span>
        </a>
    );
};

export default CVLink;