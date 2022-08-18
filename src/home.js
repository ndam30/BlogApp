import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
     
    const {data: blogs, isLoading,error}= useFetch('http://localhost:8000/blogs?_sort=id&_order=desc')

    return ( 
        <div className="home">
            <h1>OUR HOME PAGE</h1>
            {error && <div style={ {'color': 'red'}}> sorry an error is found</div>}
            {isLoading && <div className="load"> is loading....</div>}
            {blogs && <BlogList blogs ={blogs} />}

        </div>
     );
}
 
export default Home;