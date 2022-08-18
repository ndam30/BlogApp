import { Link } from "react-router-dom";

const BlogList = ({blogs, handleDelete}) => {

    // const blogs = props.blogs
    return ( 
        <div className="bloglist">
               {
                blogs.map( (blog) => (
                    
                    <div className="blog" key={blog.id}>
                     <div className="dd">
                     <Link to= {`/blog/${blog.id}`} className="blog-title">Title:{blog.title}</Link>
                    <p className="blog-date">Published date:{blog.date}</p>
                    <p className="blog-author" >Published by:{blog.author}</p>
                    {/* <button className="bttn" onClick={ () => handleDelete(blog.id)}>delete</button> */}
                        </div>   
                    
                    <div className="d"></div>
                    <br></br>
                
                </div>
                
                )

                )
               }
            </div>
     );
}
 
export default BlogList;