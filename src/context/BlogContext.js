import React, { createContext, useContext } from 'react';

const BlogContext = createContext();

const blogPosts = [
  {
    image: '/assets/images/blog1.png',
    title: '7 ways to decor your home',
    date: 'October 16, 2023',
  },
  {
    image: '/assets/images/blog2.png',
    title: 'Kitchen organization',
    date: 'October 15, 2023',
  },
  {
    image: '/assets/images/blog3.png',
    title: 'Decor your bedroom',
    date: 'October 14, 2023',
  },
  {
    image: '/assets/images/blog4.png',
    title: 'Choosing the right lighting',
    date: 'October 13, 2023',
  },
  {
    image: '/assets/images/blog5.png',
    title: 'Minimalism in interior',
    date: 'October 12, 2023',
  },
  {
    image: '/assets/images/blog6.png',
    title: 'Maximize your storage',
    date: 'October 11, 2023',
  },
  {
    image: '/assets/images/blog7.jpg',
    title: 'Design your small workspace',
    date: 'October 10, 2023',
  },
  {
    image: '/assets/images/blog8.png',
    title: 'Outdoor decor inspiration',
    date: 'October 9, 2023',
  },
  {
    image: '/assets/images/blog9.png',
    title: 'Modern taxes home is beautiful and completely kid-friendly',
    date: 'October 8, 2023',
  },
];

export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={{ blogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);