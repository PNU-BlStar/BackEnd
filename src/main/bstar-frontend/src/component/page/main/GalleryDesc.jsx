import React from "react";

const GalleryDesc = (props) => {

    const {index, data} = props;

    return(
        <p>{data.desc[index]}</p>
    );
};

export default GalleryDesc;