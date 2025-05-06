import React from 'react';

const processSteps = [
  {
    title: '1. Sourcing Raw Materials',
    description: 'Carefully selecting the finest natural stones from trusted quarries.',
    icon: 'fa-mountain',
  },
  {
    title: '2. Quality Inspection',
    description: 'Rigorous quality checks to ensure only premium stones are processed.',
    icon: 'fa-search',
  },
  {
    title: '3. Cutting & Shaping',
    description: 'Precision cutting and shaping using advanced machinery.',
    icon: 'fa-cut',
  },
  {
    title: '4. Finishing & Polishing',
    description: 'Applying various finishes and polishing for a flawless look.',
    icon: 'fa-gem',
  },
  {
    title: '5. Packaging & Shipping',
    description: 'Secure packaging and timely shipping to destinations worldwide.',
    icon: 'fa-shipping-fast',
  },
];

const ProcessPage = () => {
  return (
    <div className="bg-light min-vh-100 py-5">
      <div className="container">
        {/* Chawanda Process Overview Section - Expanded Narrative */}
        <section className="mb-5">
          <h2 className="fw-bold mb-4 text-center">From Quarry to Perfection: The Chawanda Process</h2>

          <div className="row g-4">
            <div className="col-12 mb-4">
              <div className="bg-white shadow-sm rounded p-4">
                <h3 className="fw-bold mt-2 mb-3">Mining</h3>
                <p className="lead">At Chawanda, our journey begins deep within the earth, where nature has spent millions of years forming the finest granite and natural stones. With over 25 years of expertise, we have mastered the art and science of mining, ensuring that every block we extract meets the highest standards of quality and sustainability. Our mining operations are strategically located in regions renowned for their rich deposits, and we employ a combination of traditional knowledge and modern technology to uncover these treasures. The process starts with extensive geological surveys and site assessments, followed by careful planning to minimize environmental impact. We use advanced drilling and controlled blasting techniques to extract large, intact blocks of granite from open-cast quarries. Each block is meticulously examined for color consistency, structural integrity, and unique patterns. Our commitment to responsible mining means we rehabilitate quarry sites, manage waste responsibly, and prioritize the safety of our workers at every step. The raw blocks, often weighing several tons, are then transported to our processing facilities, marking the beginning of their transformation into works of art.</p>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="bg-white shadow-sm rounded p-4">
                <h3 className="fw-bold mt-2 mb-3">Manufacturing</h3>
                <p className="lead">Once the raw blocks arrive at our state-of-the-art manufacturing units, the real magic begins. Chawanda operates three fully-equipped factories, each designed to handle every aspect of stone processing with precision and care. The journey of a granite block through our facility is a testament to our dedication to craftsmanship and innovation. The blocks are first sliced into slabs using giant gang saws, a process that requires both power and finesse to ensure minimal waste and maximum yield. Each slab is then polished on one side, revealing the natural beauty and intricate patterns hidden within. Our skilled technicians use a combination of automated and manual techniques to further refine the slabs, trimming rough edges and ensuring uniform thickness. The slabs are then sorted by size, color, and quality, and bundled together for further processing. For custom orders, we offer a range of finishes, from high-gloss polish to honed, flamed, or leathered textures. Our edge-cutting machines and CNC routers allow us to create bespoke shapes and designs, catering to the unique needs of architects, designers, and homeowners. Throughout the manufacturing process, we maintain strict quality control, conducting regular inspections and tests to ensure every piece meets our exacting standards.</p>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="bg-white shadow-sm rounded p-4">
                <h3 className="fw-bold mt-2 mb-3">Packaging</h3>
                <p className="lead">Packaging is a critical step in our process, as it ensures that our products reach customers in perfect condition, no matter how far they travel. At Chawanda, we understand that each stone is unique and requires tailored protection. For smaller items such as tiles, we use sturdy cardboard boxes lined with foam padding to absorb shocks and prevent scratches. Larger slabs are carefully wrapped in plastic to shield them from moisture and dust, then placed on heavy-duty wooden pallets. These pallets are designed for easy handling with forklifts or cranes and are shrink-wrapped for additional security. We also use custom crates for delicate or high-value pieces, providing extra reinforcement and cushioning. Every package is meticulously labeled with product details, handling instructions, and destination information, ensuring smooth logistics and compliance with international shipping standards. Our packaging team is trained to anticipate potential challenges during transit, and we continuously update our methods to incorporate the latest advancements in materials and techniques. The result is a seamless delivery experience, with products arriving safely and ready for installation.</p>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="bg-white shadow-sm rounded p-4">
                <h3 className="fw-bold mt-2 mb-3">Export</h3>
                <p className="lead">Chawanda’s reputation as a global exporter is built on reliability, efficiency, and a deep understanding of international markets. We have established a robust logistics network that spans continents, enabling us to deliver our products to clients in over 25 countries. Our export process begins with detailed planning and coordination, taking into account the specific requirements of each destination, including customs regulations, documentation, and transportation modes. We work closely with trusted shipping partners to ensure timely and secure delivery, whether by sea, air, or land. Our team handles all aspects of export logistics, from booking containers and arranging insurance to tracking shipments and providing real-time updates to customers. We pride ourselves on our ability to meet tight deadlines and accommodate last-minute changes, thanks to our flexible and responsive approach. Sustainability is also a key consideration in our export operations; we strive to minimize our carbon footprint by optimizing routes, consolidating shipments, and using eco-friendly packaging materials whenever possible. Our commitment to excellence extends beyond the point of delivery, as we offer ongoing support and assistance to clients throughout the installation and maintenance phases.</p>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="bg-white shadow-sm rounded p-4">
                <h3 className="fw-bold mt-2 mb-3">Quality & Team</h3>
                <p className="lead">The cornerstone of Chawanda’s success is our unwavering commitment to quality and our exceptional team. Every member of our workforce, from quarry workers to engineers and logistics specialists, shares a passion for excellence and a dedication to continuous improvement. We invest heavily in training and development, offering regular in-house programs to keep our team updated on the latest industry trends, safety protocols, and technological advancements. Our quality control system is multi-layered, with checks at every stage of the process, from raw material selection to final inspection. We use advanced testing equipment to measure density, porosity, flexural strength, and resistance to acids and abrasion. Our team also conducts visual inspections to ensure color consistency, pattern uniformity, and flawless finishes. Feedback from customers is actively sought and used to drive further improvements. At Chawanda, we believe that quality is not just a goal but a culture, embedded in every action and decision. This philosophy has earned us the trust of clients worldwide and a reputation for delivering products that exceed expectations.</p>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="bg-white shadow-sm rounded p-4">
                <h3 className="fw-bold mt-2 mb-3">Technology & Equipment</h3>
                <p className="lead">Chawanda’s manufacturing facilities are equipped with some of the most advanced machinery and tools in the industry. Our investment in technology is driven by a desire to achieve the highest levels of precision, efficiency, and safety. Key equipment includes multiwire gang saws for slicing large blocks, vertical slab multi-cutters for producing uniform tiles, resin lines for enhancing color and durability, and single-blade auto bridge cutting machines for custom shapes. Our auto polishers deliver a mirror-like finish, while CNC routers enable intricate designs and edge profiles. We also use automated material handling systems to move heavy blocks and slabs safely within the factory. Regular maintenance and upgrades ensure that our equipment operates at peak performance, minimizing downtime and maximizing output. Our technical team works closely with equipment manufacturers to stay ahead of emerging trends and incorporate new features that enhance productivity and product quality. This commitment to technological excellence allows us to offer a wide range of customization options and meet the most demanding project specifications.</p>
              </div>
            </div>
            <div className="col-12 mb-4">
              <div className="bg-white shadow-sm rounded p-4">
                <h3 className="fw-bold mt-2 mb-3">Sustainability & Customer Focus</h3>
                <p className="lead">At Chawanda, we recognize our responsibility to the environment and the communities in which we operate. Sustainability is at the heart of our business model, guiding our decisions from quarrying to delivery. We implement eco-friendly practices such as water recycling, dust suppression, and energy-efficient lighting in our factories. Our waste management program focuses on reducing, reusing, and recycling materials wherever possible. We also engage with local communities to support education, health, and infrastructure initiatives, fostering long-term partnerships based on mutual respect and shared value. Customer satisfaction is equally important to us. We take the time to understand each client’s unique needs and preferences, offering personalized solutions and transparent communication throughout the project lifecycle. Our after-sales support includes installation guidance, maintenance tips, and prompt resolution of any issues. By combining sustainability with a customer-centric approach, Chawanda delivers not only superior products but also a positive and lasting impact on people and the planet.</p>
              </div>
            </div>
          </div>
        </section>
        <h2 className="fw-bold text-center mb-5">Our Process Journey</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="position-relative" style={{ paddingLeft: '40px', paddingRight: '40px' }}>
              {/* Vertical line */}
              <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '4px', background: 'linear-gradient(180deg, #b78f59 0%, #fffbe6 100%)', transform: 'translateX(-50%)', zIndex: 0 }}></div>
              {processSteps.map((step, idx) => (
                <div key={idx} className="row mb-5 align-items-center" style={{ position: 'relative', zIndex: 1 }}>
                  <div className={`col-md-6 ${idx % 2 === 0 ? '' : 'order-md-2'}`}> {/* Left or right */}
                    <div className="bg-white shadow-sm rounded p-4 mb-3 mb-md-0">
                      <h5 className="fw-bold mb-2">{step.title}</h5>
                      <p className="mb-0 text-muted">{step.description}</p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center align-items-center flex-column" style={{ position: 'relative' }}>
                    <div className="d-flex flex-column align-items-center" style={{ height: '100%' }}>
                      <div className="bg-white border border-3 border-warning rounded-circle d-flex align-items-center justify-content-center mb-3" style={{ width: '48px', height: '48px', zIndex: 2 }}>
                        <i className={`fas ${step.icon} fa-lg text-warning`}></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology & Equipment Section */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container">
          <h3 className="fw-bold text-center mb-4">Our Technology & Equipment</h3>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4 text-center">
              <div className="p-4 shadow rounded bg-light h-100">
                <i className="fas fa-industry fa-2x mb-3 text-warning"></i>
                <h5 className="fw-bold mb-2">State-of-the-Art Machinery</h5>
                <p className="text-muted">We use advanced cutting, polishing, and finishing machines for precision and efficiency.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-4 shadow rounded bg-light h-100">
                <i className="fas fa-microscope fa-2x mb-3 text-info"></i>
                <h5 className="fw-bold mb-2">Laboratory Testing</h5>
                <p className="text-muted">Every batch is tested for strength, durability, and finish in our in-house labs.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="p-4 shadow rounded bg-light h-100">
                <i className="fas fa-truck-loading fa-2x mb-3 text-success"></i>
                <h5 className="fw-bold mb-2">Efficient Logistics</h5>
                <p className="text-muted">Our logistics team ensures safe, on-time delivery to clients worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Stands Out Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h3 className="fw-bold text-center mb-4">Why Our Process Stands Out</h3>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body text-center">
                  <i className="fas fa-award fa-2x mb-3 text-warning"></i>
                  <h5 className="fw-bold mb-2">Unmatched Quality</h5>
                  <p className="text-muted">Our multi-stage quality checks guarantee only the best stones reach our customers.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body text-center">
                  <i className="fas fa-leaf fa-2x mb-3 text-success"></i>
                  <h5 className="fw-bold mb-2">Sustainable Practices</h5>
                  <p className="text-muted">We prioritize eco-friendly methods and responsible sourcing in every step.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body text-center">
                  <i className="fas fa-users fa-2x mb-3 text-info"></i>
                  <h5 className="fw-bold mb-2">Customer Focus</h5>
                  <p className="text-muted">We work closely with clients to deliver tailored solutions and exceptional service.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage; 