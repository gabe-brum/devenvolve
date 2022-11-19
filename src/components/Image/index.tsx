import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { ImageStyled } from "./styled";

const { NEXT_PUBLIC_BASE_PATH } = process.env;

type ImageProps = {
    src: string;
    alt: string;
    props?: any;
    externo?: any;
};

export const ImageCustom = ({ src, alt, externo, props }: ImageProps) => {
    return (
        <ImageStyled>
            <LazyLoadImage
                src={externo ? `${src}` : `${NEXT_PUBLIC_BASE_PATH}images/${src}`}
                alt={alt}
                className="hs-image"
                {...props}
            />
        </ImageStyled>
    );
};
