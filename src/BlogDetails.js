import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetail = () => {
    const {id} = useParams();
    const {data: blogs, isLoading,error}= useFetch('http://localhost:8000/blogs/'+id)

    const history = useHistory()

    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/'+id,{
            method :'DELETE'

        })
        .then(() => {
            history.push('/');
            console.log('deleted')
        })
    }
    return ( 
        <div className="detail">
            <h1>Details of each blog - {id}</h1>
            {isLoading && <div className="load"> is loading....</div>}
            {blogs && (<div className="dd">
            <h2 className="blog-title">{`Title:${blogs.title}`}</h2>
            <p className="blog-body" >{`Body: ${blogs.body}`}</p>
                    <p className="blog-date">{`published date:${blogs.date}`}</p>
                    <p className="blog-author" >{`published by: ${blogs.author}`}</p>
                    <button className="btn" onClick={handleDelete}>delete</button>
            </div>)}
        </div>
     );
}
 
export default BlogDetail;