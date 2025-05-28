import React, { useState } from 'react';
import { getImagesByCategory } from '../utils/imageUtils';

const mockProductDetails = {
  origin: 'India',
  gangsawSlab: '280 x 180 cm',
  cutterSlab: '180 x 60 cm',
  tiles: '30 x 30, 30 x 60, 60 x 60, 60 x 120 cm',
  thickness: '2, 3, 4, 5 upto 20 cm',
  countertops: 'Custom',
  finishes: 'Flamed, Polished, Lapotra, Honed, Brushed, Leather, Antique, Bush Hammered and Shot Blast',
  viewDetails: '#',
  categories: 'Granite Price List, Granite Stone For Floor, Granite Stone For Kitchen, North Indian Granite Manufacturer & Exporter From India, Red Granite'
};

const Products = ({ selectedCategory }) => {
  const [modalProduct, setModalProduct] = useState(null);

  const getImages = () => {
    if (selectedCategory === 'all') {
      const allCategories = [
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
      return allCategories.flatMap(category => {
        const images = getImagesByCategory(category.id);
        return images || [];
      });
    }
    return getImagesByCategory(selectedCategory) || [];
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Our Stone Collection</h1>
      
      {/* Product Grid */}
      <div className="row g-4">
        {getImages().map((image, index) => (
          <div key={`${image.category}-${index}`} className="col-md-4 col-lg-3">
            <div className="card h-100 product-card shadow-sm" style={{ cursor: 'pointer' }} onClick={() => setModalProduct(image)}>
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

      {/* Product Modal */}
      {modalProduct && (
        modalProduct.category === 'monuments' ? (
          <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog" onClick={() => setModalProduct(null)}>
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document" onClick={e => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{modalProduct.name}</h5>
                  <button type="button" className="btn-close" onClick={() => setModalProduct(null)} aria-label="Close"></button>
                </div>
                <div className="modal-body row g-0 align-items-center">
                  <div className="col-md-6 text-center mb-3 mb-md-0">
                    <img src={modalProduct.path} alt={modalProduct.name} className="img-fluid rounded" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                  </div>
                  <div className="col-md-6">
                    <div className="mb-2 fw-bold">{modalProduct.name}</div>
                    <div className="mb-2"><span className="fw-bold">Category:</span> <span className="text-danger">Granite Monuments Manufacturer & Exporter From India</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="modal fade show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }} tabIndex="-1" role="dialog" onClick={() => setModalProduct(null)}>
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document" onClick={e => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{modalProduct.name} From India</h5>
                  <button type="button" className="btn-close" onClick={() => setModalProduct(null)} aria-label="Close"></button>
                </div>
                <div className="modal-body row g-0">
                  <div className="col-md-6 text-center mb-3 mb-md-0">
                    <img src={modalProduct.path} alt={modalProduct.name} className="img-fluid rounded" style={{ maxHeight: '300px', objectFit: 'cover' }} />
                  </div>
                  <div className="col-md-6">
                    <table className="table table-bordered mb-3">
                      <tbody>
                        <tr><th>Origin</th><td>{mockProductDetails.origin}</td></tr>
                        <tr><th>Gangsaw Slab</th><td>{mockProductDetails.gangsawSlab}</td></tr>
                        <tr><th>Cutter Slab</th><td>{mockProductDetails.cutterSlab}</td></tr>
                        <tr><th>Tiles</th><td>{mockProductDetails.tiles}</td></tr>
                        <tr><th>Thickness</th><td>{mockProductDetails.thickness}</td></tr>
                        <tr><th>Countertops</th><td>{mockProductDetails.countertops}</td></tr>
                        <tr><th>Finishes</th><td>{mockProductDetails.finishes}</td></tr>
                      </tbody>
                    </table>
                    <div className="text-muted small">Categories: <span className="text-danger">{mockProductDetails.categories}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Products; 