import React, {useState} from 'react';
import './GalleryCss.css'

function GalleryTitle(props) {

    const {data} = props;

    return(

        <h3>
            {data.title}
        </h3>

    );
}

export default GalleryTitle;