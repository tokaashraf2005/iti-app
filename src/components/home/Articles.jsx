import React from 'react';
import { Link } from 'react-router-dom'; 
import '../../styles/Articles.css';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "7 ways to decor your home",
      imgSrc: "/assets/images/blog1.png",
      alt: "Living room",
      link: "/blog", 
    },
    {
      id: 2,
      title: "Kitchen organization",
      imgSrc: "/assets/images/blog2.png",
      alt: "Kitchen",
      link: "/blog",
    },
    {
      id: 3,
      title: "Decor your bedroom",
      imgSrc: "/assets/images/blog3.png",
      alt: "Bedroom",
      link: "/blog",
    },
  ];

  return (
    <section className="articles-section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h1">Articles</h2>
          <Link to="/blog" className="text-decoration-underline fw-medium">
            More Articles →
          </Link>
        </div>

        <div className="row g-4">
          {articles.map(({ id, title, imgSrc, alt, link }) => (
            <div key={id} className="col-md-4">
              <div className="card h-100 d-flex flex-column">
                <img src={imgSrc} className="card-img-top" alt={alt} />
                <div className="card-body px-3 d-flex flex-column justify-content-between">
                  <h5 className="card-title">{title}</h5>
                  <Link to={link} className="text-decoration-underline mt-3">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;

