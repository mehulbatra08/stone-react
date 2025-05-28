import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ProductsPage = () => {

  const categories = [
    { id: 'all', name: 'All Products', image: '/images/hero-bg.jpg' }, // Using a general image for All
    { id: 'south-granite', name: 'South Granite', image: '/images/south_granite_images/Ruby-Red-Granite-300x300.png' }, // Random image from south_granite_images
    { id: 'granite', name: 'North Granite', image: '/images/granite_images/4.-IMPERIAL-RED-GRANITE-1-300x300.jpeg' }, // Random image from granite_images
    { id: 'granite-blocks', name: 'Granite Blocks', image: '/images/granite-blocks/8.-River-Blue-300x300.jpg' }, // Random image from granite-blocks
    { id: 'granite-cutter-slabs', name: 'Granite Cutter Slabs', image: '/images/granite-cutter-slabs/8.-P-WHITE-GRANITE-300x281.jpg' }, // Random image from granite-cutter-slabs
    { id: 'granite-gangsaw-slabs', name: 'Granite Gangsaw Slabs', image: '/images/granite-gangsaw-slabs/havana-300x281.png' }, // Random image from granite-gangsaw-slabs
    { id: 'limestone', name: 'Limestone', image: '/images/limestone/7.-Kota-Brown-Limestone-rotated-1-300x300.jpg' }, // Random image from limestone
    { id: 'marble', name: 'Marble', image: '/images/marble/6.-WHITE-FANTASY-300x300.jpg' }, // Random image from marble
    { id: 'monuments', name: 'Monuments', image: '/images/monuments/Vizag-Blue-Granite-Headstone-300x300.jpg' }, // Random image from monuments
    { id: 'sandstone', name: 'Sandstone', image: '/images/sandstone/3.-Sagar-Black-Sandstone-300x300.jpg' }, // Random image from sandstone
    { id: 'slate', name: 'Slate', image: '/images/slate/7.-Indian-Autumn-Slate-300x300.jpg' }
  ];

  // Remove the placeholderImages array as images are now in categories
  // const placeholderImages = [
  //   '/images/hero-bg.jpg',
  //   '/images/Chawanda-Logo-No-Bg.png',
  //   '/images/bla.png',
  // ];

  return (
    <div>
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-white" style={{ minHeight: '40vh', background: 'linear-gradient(120deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3">Our Products</h1>
          <p className="lead mb-4">Discover our wide range of high-quality natural stone products.</p>
        </div>
      </section>

      <div className="container py-5">
        <h2 className="text-center mb-5">Browse by Category</h2>
        {/* Category Filter Cards - Now Links with Images */}
        <div className="row g-4 justify-content-center mb-5">
          {categories.map((category) => (
            <div key={category.id} className="col-6 col-md-4 col-lg-2">
              {/* Use Link for navigation */}
              <Link 
                to={category.id === 'all' ? '/products' : `/products/${category.id}`}
                className="card h-100 text-center text-decoration-none text-dark"
                style={{ cursor: 'pointer' }}
              >
                {/* Use the image path from the category object */}
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="card-img-top"
                  style={{ height: '100px', objectFit: 'cover' }}
                />
                <div className="card-body p-2">
                  <h6 className="card-title mb-0">{category.name}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Remove Products Grid Section from here */}
        {/* Products will be displayed on a new page */} 

      </div>

      {/* Call to Action Section */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(90deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Order?</h2>
          <p className="lead mb-4">Contact us for a quote or to discuss your requirements with our experts.</p>
          <a href="/#contact" className="btn btn-lg btn-light px-5 py-3 text fw-semibold shadow">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage; 