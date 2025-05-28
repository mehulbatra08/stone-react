import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const categories = [
    { id: 'all', name: 'All Products', image: '/images/hero-bg.jpg' },
    { id: 'south-granite', name: 'South Granite', image: '/images/south_granite_images/Ruby-Red-Granite-300x300.png' },
    { id: 'granite', name: 'North Granite', image: '/images/granite_images/4.-IMPERIAL-RED-GRANITE-1-300x300.jpeg' },
    // { id: 'granite-blocks', name: 'Granite Blocks', image: '/images/granite_images/7.-BLACK-MARCINO-GRANITE-300x300.jpeg' },
    { id: 'granite-cutter-slabs', name: 'Granite Cutter Slabs', image: '/images/granite-cutter-slabs/8.-P-WHITE-GRANITE-300x281.jpg' },
    { id: 'granite-gangsaw-slabs', name: 'Granite Gangsaw Slabs', image: '/images/granite-gangsaw-slabs/havana-300x281.png' },
    { id: 'limestone', name: 'Limestone', image: '/images/limestone/7.-Kota-Brown-Limestone-rotated-1-300x300.jpg' },
    { id: 'marble', name: 'Marble', image: '/images/marble/6.-WHITE-FANTASY-300x300.jpg' },
    { id: 'monuments', name: 'Monuments', image: '/images/monuments/Vizag-Blue-Granite-Headstone-300x300.jpg' },
    { id: 'sandstone', name: 'Sandstone', image: '/images/sandstone/3.-Sagar-Black-Sandstone-300x300.jpg' },
    { id: 'slate', name: 'Slate', image: '/images/slate/7.-Indian-Autumn-Slate-300x300.jpg' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-white" style={{ minHeight: '40vh', background: 'linear-gradient(120deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3">Our Products</h1>
          <p className="lead mb-4">Discover our wide range of high-quality natural stone products.</p>
        </div>
      </section>

      {/* Categories */}
      <div className="container py-5">
        <h2 className="text-center mb-5">Browse by Category</h2>
        <div className="row g-4 justify-content-center mb-5">
          {categories
            .filter(category => category.id !== 'all')
            .map(category => (
              <div key={category.id} className="col-6 col-md-4 col-lg-3">
                <Link
                  to={category.id === 'all' ? '/products' : `/products/${category.id}`}
                  className="card h-100 text-decoration-none position-relative overflow-hidden border-0 shadow-sm"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="card-img-top"
                    style={{ height: '280px', objectFit: 'cover' }}
                  />
                  {/* Bottom Overlay */}
                  <div
                    className="position-absolute bottom-0 start-0 w-100 text-white p-3"
                    style={{
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 100%)'
                    }}
                  >
                    <h6 className="mb-2">{category.name}</h6>
                    <span className="btn btn-sm btn-light fw-semibold">Read More</span>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-5 text-white" style={{ background: 'linear-gradient(90deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Ready to Order?</h2>
          <p className="lead mb-4">Contact us for a quote or to discuss your requirements with our experts.</p>
          <a href="/#contact" className="btn btn-lg btn-light px-5 py-3 fw-semibold shadow">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
