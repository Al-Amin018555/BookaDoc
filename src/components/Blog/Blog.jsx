import { Link } from "react-router";

const Blog = ({ blog }) => {
    const {question,answer} = blog;
    return (
        <div>
            <div className="card rounded-3xl bg-base-100 shadow-sm mb-6">
                <div className="card-body">
                    <h2 className="card-title mb-4 text-2xl font-extrabold text-[#141414]">{question}</h2>
                    <div className="py-4 border-t-1 border-b-1 border-dashed border-[rgba(15,15,15,0.2)]">
                        <p className="text-lg">{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;