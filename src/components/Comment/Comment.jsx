import "./Comment.css"


export function Comment({comment})
{
    const date = new Date(comment.created_at).toLocaleString();

    return(
        <div className="comment">
            <p><b>User</b></p>
            <p>{comment.text}</p>
            <p><b>{date}</b></p>
        </div>
    )
}