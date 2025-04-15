import React, { useState } from 'react';
import { getImagesByCategory, getAllImages } from '../utils/imageUtils';
import { useNavigate } from 'react-router-dom';

const GraniteGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [failedImages, setFailedImages] = useState(new Set());
  const navigate = useNavigate();
  
  const images = selectedCategory === 'all' 
    ? getAllImages() 
    : getImagesByCategory(selectedCategory);

  const handleImageError = (imagePath) => {
    setFailedImages(prev => new Set([...prev, imagePath]));
  };

  const handleImageClick = (image) => {
    // Pass the full image path information
    const pathParts = image.path.split('/');
    const filename = pathParts[pathParts.length - 1];
    navigate(`/products/${image.category}/${encodeURIComponent(filename)}`);
  };

  return (
    <section id="gallery" className="py-5 bg-light">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="text-center fw-bold mb-4">Our Granite Collection</h2>
            <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
              {['all', 'south-granite', 'granite'].map(category => (
                <button
                  key={category}
                  className={`btn ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All' : category === 'south-granite' ? 'South Granite' : 'Granite'}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="row g-4">
          {images
            .filter(image => !failedImages.has(image.path))
            .map((image, index) => (
            <div key={index} className="col-md-4 col-lg-3">
              <div 
                className="card h-100 border-0 shadow-sm hover-shadow transition"
                onClick={() => handleImageClick(image)}
                style={{ cursor: 'pointer' }}
              >
                <div className="position-relative" style={{ height: '250px', overflow: 'hidden' }}>
                  <img 
                    src={image.path} 
                    alt={image.name}
                    className="card-img-top h-100 w-100"
                    style={{ objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                    }}
                  />
                  <div className="position-absolute bottom-0 start-0 end-0 p-2 bg-dark bg-opacity-50">
                    <h5 className="text-white mb-0 text-capitalize">{image.name}</h5>
                  </div>
                </div>
                <div className="card-body">
                  <span className="badge bg-primary text-capitalize">
                    {image.category.replace(/-/g, ' ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="modal-backdrop fade show"
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1040
            }}
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="modal-dialog modal-dialog-centered modal-lg"
              style={{ 
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1050,
                margin: 0,
                width: '90%',
                maxWidth: '800px'
              }}
              onClick={e => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-capitalize">{selectedImage.name}</h5>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setSelectedImage(null)}
                  ></button>
                </div>
                <div className="modal-body p-0">
                  <img 
                    src={selectedImage.path} 
                    alt={selectedImage.name}
                    className="img-fluid w-100"
                    style={{ maxHeight: '80vh', objectFit: 'contain' }}
                  />
                </div>
                <div className="modal-footer">
                  <span className="badge bg-primary text-capitalize">
                    {selectedImage.category.replace(/-/g, ' ')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GraniteGallery; 