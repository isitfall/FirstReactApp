import React from 'react';
import PostListItem from '../post-list-item';

const PostList = () => {
    return(
       <ul className="app-list list-froup">
           <PostListItem/>
           <PostListItem/>
           <PostListItem/>
       </ul> 
    )
}

export default PostList;