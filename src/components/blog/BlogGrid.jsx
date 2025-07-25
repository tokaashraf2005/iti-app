import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    img: '../assets/images/blog1.png',
    title: '7 ways to decor your home',
    date: 'October 16, 2023',
  },
  {
    img: '../assets/images/blog2.png',
    title: 'Kitchen organization',
    date: 'October 15, 2023',
  },
  {
    img: '../assets/images/blog3.png',
    title: 'Decor your bedroom',
    date: 'October 14, 2023',
  },
  {
    img: '../assets/images/blog4.png',
    title: 'Choosing the right lighting',
    date: 'October 13, 2023',
  },
  {
    img: '../assets/images/blog5.png',
    title: 'Minimalism in interior',
    date: 'October 12, 2023',
  },
  {
    img: '../assets/images/blog6.png',
    title: 'Maximize your storage',
    date: 'October 11, 2023',
  },
  {
    img: '../assets/images/blog7.jpg',
    title: 'Design your small workspace',
    date: 'October 10, 2023',
  },
  {
    img: '../assets/images/blog8.png',
    title: 'Outdoor decor inspiration',
    date: 'October 9, 2023',
  },
  {
    img: '../assets/images/blog9.png',
    title: 'Modern taxes home is beautiful and completely kid-friendly',
    date: 'October 8, 2023',
  },
];

const BlogGrid = () => {
  return (
    <section className="container py-4">
      <div id="blogGrid" className="row g-3 align-items-stretch">
        {blogPosts.map((post, index) => (
          <div className="col-12 col-sm-6 col-lg-4" key={index}>
            <div className="card border-0">
              <img src={post.img} className="card-img-top" alt={post.title} />
              <div className="card-body px-0">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted small">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More */}
      <div className="text-center mt-5">
        <Link
          to="/blog"
          className="btn btn-outline-dark rounded-pill px-4"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Show more
        </Link>

      </div>
    </section>
  );
};

export default BlogGrid;

