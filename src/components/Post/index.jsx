import React from 'react';
import {MdFavorite} from "react-icons/md"

import PerfilPost from '../PerfilPost';

const Post = ({
    perfilPhoto,
    name,
    text,
    photoPost
}) => {

    return(
        <div className='container-Post'>
            <PerfilPost 
            perfilPhoto={perfilPhoto}
            name= {name} />

            <p className='text-Post'>{text}</p>

            <img className='image-Post' src={photoPost} alt="Imagem Postada"></img>

            <div className='interaction-line-Post'>
                <div className='heart-interaction-comment-line-Post'>
                    <MdFavorite color='red'/>
                    <p>Comments</p>
                </div>
                <p>Share</p>
            </div>

            <p>Liked by others</p>

        </div>
    )
}

export default Post;