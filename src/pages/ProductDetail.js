import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id, category } = useParams();
  const navigate = useNavigate();

  // Function to get the display name from filename
  const getDisplayName = (filename) => {
    return decodeURIComponent(filename)
      .split('.')[0]
      .split('-300x300')[0]
      .replace(/^\d+\.-/, '')
      .replace(/-/g, ' ')
      .trim();
  };

  // Function to get the correct image directory based on category
  const getImageDirectory = (category) => {
    switch(category) {
      case 'south-granite':
        return 'south_granite_images';
      case 'granite':
        return 'granite_images';
      default:
        return 'granite_images';
    }
  };

  const displayName = getDisplayName(id);
  
  const product = {
    title: displayName,
    description: `Premium quality ${displayName.toLowerCase()} known for its durability and elegant patterns. Perfect for various architectural applications including flooring, countertops, and wall cladding.`,
    specifications: [
      'Density: 2.6-2.8 g/cm³',
      'Water Absorption: < 0.5%',
      'Compressive Strength: > 150 MPa',
      'Available Finishes: Polished, Honed'
    ]
  };

  return (
    <div>
      <div className="py-5 bg-primary text-white">
        <div className="container">
          <h1 className="text-center mb-3">{product.title}</h1>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <img 
              src={`/images/${getImageDirectory(category)}/${decodeURIComponent(id)}`}
              alt={product.title}
              className="img-fluid rounded shadow-sm"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/600x400?text=Product+Image';
                console.log('Failed to load image:', e.target.src);
              }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-4">Product Description</h2>
            <p className="lead mb-4">{product.description}</p>
            
            <h3 className="mb-3">Specifications</h3>
            <ul className="list-group mb-4">
              {product.specifications.map((spec, index) => (
                <li key={index} className="list-group-item">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  {spec}
                </li>
              ))}
            </ul>

            <div className="d-grid gap-2 d-md-flex">
              <button 
                className="btn btn-primary me-md-2" 
                onClick={() => navigate('/products')}
              >
                Back to Products
              </button>
              <button 
                className="btn btn-outline-primary"
                onClick={() => navigate('/#contact')}
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 