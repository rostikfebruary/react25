const PostDetails = ({postDetails}) => {
    const{id, title, body} = postDetails
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {PostDetails};