import {useEffect, useState} from "react";
import {postService} from "../../../services/postService";
import {Post} from "../post/post";
import css from './post.module.css'
import {PostDetails} from "../postDetails/postDetails";


const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)

    useEffect(() => {
        postService.getAll().then(({data}) => setPosts(data))
    }, []);

    const getCurrentPostDetails = (post) =>{
        setPostDetails(post)
    }

    return (
        <div className={css.Posts}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} getCurrentPostDetails={getCurrentPostDetails}/>)}
            </div>
            <hr/>
            {postDetails != null && <PostDetails postDetails={postDetails}/> }
        </div>
    );
};

export {
    Posts
};