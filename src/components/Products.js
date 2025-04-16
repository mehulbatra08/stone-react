import React, { useState } from 'react';
import { getImagesByCategory } from '../utils/imageUtils';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'south-granite', name: 'South Granite' },
    { id: 'granite', name: 'North Granite' },
    { id: 'granite-blocks', name: 'Granite Blocks' },
    { id: 'granite-cutter-slabs', name: 'Granite Cutter Slabs' },
    { id: 'granite-gangsaw-slabs', name: 'Granite Gangsaw Slabs' },
    { id: 'limestone', name: 'Limestone' },
    { id: 'marble', name: 'Marble' },
    { id: 'monuments', name: 'Monuments' },
    { id: 'sandstone', name: 'Sandstone' },
    { id: 'slate', name: 'Slate' }
  ];

  const getImages = () => {
    if (selectedCategory === 'all') {
      return categories.slice(1).flatMap(category => {
        const images = getImagesByCategory(category.id);
        return images || []; // Handle case where category might not have images
      });
    }
    return getImagesByCategory(selectedCategory) || [];
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Stone Collection</h1>
      
      {/* Category Filter */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4" style={{ maxWidth: '100%', overflowX: 'auto' }}>
        {categories.map(category => (
          <button
            key={category.id}
            className={`btn ${selectedCategory === category.id ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSelectedCategory(category.id)}
            style={{ whiteSpace: 'nowrap' }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {getImages().map((image, index) => (
          <div key={`${image.category}-${index}`} className="col-md-4 col-lg-3">
            <div className="card h-100 product-card shadow-sm">
              <img
                src={image.path}
                className="card-img-top"
                alt={image.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{image.name}</h5>
                <p className="card-text text-muted text-capitalize">{image.category.replace(/-/g, ' ')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show message if no images in category */}
      {getImages().length === 0 && (
        <div className="text-center mt-4">
          <p>No images found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Products; 