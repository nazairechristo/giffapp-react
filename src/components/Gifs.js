import React from 'react';
import JsFileDownloader from 'js-file-downloader';

const Gifs = ({title, img}) => {


    const saveGifs = (e) => {

        const fileUrl = img;
        
        new JsFileDownloader({ 
            url: fileUrl,
            forceDesktopMode: true
        })
          .then(function () {
            // Called when download ended
            console.log('gif downloaded');
          })
          .catch(function (error) {
            // Called when an error occurred
            console.log('gif undownloaded');
          });
    }

    

    return (
        <li>
            <div className='gif-img freezeframe'>
                <img src={img} alt='' />
                <button onClick={saveGifs}></button>
            </div>
            <div className='text'>
                <span>{title}</span>
            </div>
            
        </li>
    )
}

export default Gifs;