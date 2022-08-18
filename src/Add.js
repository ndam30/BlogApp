import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Add = () => {
     const[title,setTitle] = useState('');
     const[body,setBody] = useState('');
     const[author,setAuthor] = useState('');
     let [isLoading, setIsLoading] = useState(false);

     const history = useHistory('')

     const handleAdd = (e) =>{
        e.preventDefault(e);
        const tmpdate = new Date().toISOString().split('t');
        const date = `${tmpdate[0]} ${tmpdate[1]}`;
        const blog = {title, author, body, date};
        setIsLoading(true);
        console.log(blog);

        fetch('http://localhost:8000/blogs',
        {   
            method : 'post',
            headers : {'content-type': 'application/json'},
            body: JSON.stringify(blog),
        
           
        }
        )
        .then (()=>{
            console.log('added');
           setIsLoading(false);
           history.push('/');

        //    history.go(1);

        })
     }

    return ( 
        <div>
            <h2 className="top">Add a new article</h2>

            <form onSubmit={handleAdd}>
  <div className ="inf">
    <label className="tit">Title </label>
    <input className="info" type="text"  id="title" placeholder="Enter the title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    />
    </div><br></br>

    <div className="inf">
    <label className="tit" >Body </label>
    <input className="info-b" type="text" id="body" placeholder="body"
     value={body}
     onChange={(e) => setBody(e.target.value)}
     />
  </div><br></br>

  <div className="inf">
    <label className="tit" >Author </label>
    <input className="info" type="text" id="author" placeholder="author"
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
    />
  </div><br></br>
  

  
 {!isLoading && <button type="submit" className="btn">Add</button>}
 {isLoading && <button type="submit" className="btn ">Add</button>}
</form>
<p>{title}</p>
<p>{body}</p>
<p>{author}</p>
        </div>
        
     );
}
 
export default Add;