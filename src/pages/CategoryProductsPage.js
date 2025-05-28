import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const CategoryProductsPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    // Fetch products for the specific category
    const categoryImages = getImagesByCategory(categoryId);
    setProducts(categoryImages || []);
  }, [categoryId]); // Re-run effect when categoryId changes

  // Function to format category name for display
  const formatCategoryName = (id) => {
    const nameMap = {
      'south-granite': 'South Indian Granite',
      'granite': 'North Indian Granite', // Assuming 'granite' maps to North
      'granite-blocks': 'Granite Blocks',
      'granite-cutter-slabs': 'Granite Cutter Slabs',
      'granite-gangsaw-slabs': 'Granite Gangsaw Slabs',
      'limestone': 'Limestone',
      'marble': 'Marble',
      'monuments': 'Monuments',
      'sandstone': 'Sandstone',
      'slate': 'Slate'
    };
    return nameMap[id] || id.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <>
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-white" style={{ minHeight: '40vh', background: 'linear-gradient(120deg, #b78f59 60%, #fffbe6 100%)' }}>
        <div className="container text-center py-5">
          <h1 className="display-4 fw-bold mb-3">{formatCategoryName(categoryId)}</h1>
          <p className="lead mb-4">Explore our collection of {formatCategoryName(categoryId)} products.</p>
        </div>
      </section>

      <div className="container py-5">
        {/* Product Grid */}
        <div className="row g-4">
          {products.map((image, index) => (
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
                  {/* You might want to show more details here if available in image object */}
                  <p className="card-text text-muted text-capitalize">{image.category.replace(/-/g, ' ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no images in category */}
        {products.length === 0 && (
          <div className="text-center mt-4">
            <p>No products found in the {formatCategoryName(categoryId)} category.</p>
          </div>
        )}

        {/* Product Modal (Reusing the modal structure from Products component) */}
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
    </>
  );
};

export default CategoryProductsPage; 