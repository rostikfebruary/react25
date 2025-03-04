import css from '../post/post.module.css'


const Post = ({post, getCurrentPostDetails}) => {
    const {userId, id, title, body} = post
    return (

        <div className={css.Post}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <button onClick={() => getCurrentPostDetails(post)}>Show details</button>
        </div>

    );
};

export {Post};