import React, {useState} from 'react';
import GalleryList from './GalleryList';
import GalleryDesc from './GalleryDesc';
import './GalleryCss.css'
import GalleryItem from './GalleryItem';
import GalleryTitle from './GalleryTitle';


function Gallery(props){

    const {data} = props;
    const [index, setIndex] = useState(0);
   

    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >

            <br />
            <GalleryTitle data={data}></GalleryTitle>
            <br />
            <GalleryItem data={data} index={index} setIndex={setIndex}></GalleryItem>
            <br />
            <GalleryDesc data={data} index={index}></GalleryDesc>
            <br />
            
        </div>
    );
}

export default Gallery;