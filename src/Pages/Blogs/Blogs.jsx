import { useLoaderData } from "react-router";
import Blog from "../../components/Blog/Blog";

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className="max-w-7xl mx-auto py-10">

            <div>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>

        </div>
    );
};

export default Blogs;