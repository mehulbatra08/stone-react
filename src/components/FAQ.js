import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What types of natural stones do you export?",
      answer: "We export a wide variety of natural stones including South Indian Granite, North Indian Granite, Monuments, Sandstones, Slates, and Marbles. Our collection features popular varieties like Black Galaxy, Absolute Black, Kashmir White, and many more."
    },
    {
      question: "What are your quality control measures?",
      answer: "We maintain strict quality control measures throughout our process. Each stone is carefully inspected for color consistency, pattern uniformity, and structural integrity. We conduct regular quality checks during extraction, processing, and before shipment to ensure only the finest stones reach our customers."
    },
    {
      question: "Do you provide samples before bulk orders?",
      answer: "Yes, we provide sample pieces of our stones to help you make an informed decision. These samples accurately represent the color, pattern, and finish of the actual product. Contact us to request samples of specific stone varieties."
    },
    {
      question: "What are your shipping and delivery terms?",
      answer: "We offer flexible shipping options including FOB, CIF, and door-to-door delivery. Our established logistics network ensures safe and timely delivery worldwide. We handle all necessary documentation and packaging to ensure smooth customs clearance."
    },
    {
      question: "What are the available finishes for your stones?",
      answer: "We offer various finishes including Polished, Honed, Flamed, Brushed, and Leather finish. The availability of specific finishes may vary depending on the stone type. We can recommend the most suitable finish based on your application."
    },
    {
      question: "What are the minimum order quantities?",
      answer: "Minimum order quantities vary depending on the stone type and finish. Generally, we can accommodate both small and large orders. Please contact us with your requirements, and we'll provide detailed information about MOQ and pricing."
    }
  ];

  return (
    <section id="faq" className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item border mb-3 rounded shadow-sm" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fw-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${index}`}
                      aria-expanded="false"
                      aria-controls={`faq${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`faq${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      <p className="mb-0 text-muted">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 