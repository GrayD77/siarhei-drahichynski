import React, {FC, useState} from 'react';
import './LazyImg.css';

interface LazyImgProps {
    src: string;
    alt: string;
    placeholder?: string;
    height?: number;
    width?: number;
}

const LazyImg: FC<LazyImgProps> = ({ src, alt, placeholder= `${src}-placeholder` , width, height}) => {
    const [ isLoaded, setIsLoaded ] = useState(false);

    return (
        <div className={'lazy-img-wrapper'}>
            {
                !isLoaded &&
                <img
                    className={'lazy-img-placeholder'}
                    src={placeholder}
                    alt={alt}
                    width={width}
                    height={height}
                />
            }

            <img
                src={src}
                alt={alt}
                onLoad={e => setIsLoaded(true)}
                style={ isLoaded ? {} : { display: 'none' }}
                width={width}
                height={height}
            />
        </div>
    );
};

export default LazyImg;