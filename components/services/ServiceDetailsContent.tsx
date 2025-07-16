import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesData from "@/jsonData/latestService/LatestServiceV2Data.json";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
  image: string;
  features?: string[];
  benefits?: string[];
  process?: {
    title: string;
    description: string;
  }[];
}

interface ServiceDetailsContentProps {
  service: Service;
}

const ServiceDetailsContent: React.FC<ServiceDetailsContentProps> = ({
  service,
}) => {
  return (
    <div className="service-details-page">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-8">
            {/* Service Overview */}
            <div className="row gy-4 mb-30">
              <div className="col-12">
                <div className="te-info-card style-3">
                  <div className="te-info-card-inner">
                    <div className="te-content-wrapper">
                      <div className="te-title-wrapper">
                        <div className="icon">
                          <Image
                            src={service.icon}
                            alt={service.title}
                            width={60}
                            height={60}
                          />
                        </div>
                        <h3 className="title">{service.title}</h3>
                      </div>
                      <p className="text">{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Image */}
            <div className="service-thumb mb-30">
              <Image
                src={service.image}
                alt={service.title}
                width={856}
                height={482}
                className="w-100"
              />
            </div>

            {/* Features Section */}
            {service.features && service.features.length > 0 && (
              <div className="features-section mb-30">
                <h3 className="section-title mb-20">Key Features</h3>
                <ul className="feature-list">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits Section */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="benefits-section mb-30">
                <h3 className="section-title mb-20">Benefits</h3>
                <ul className="benefit-list">
                  {service.benefits.map((benefit, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-arrow-right"></i>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Process Section */}
            {service.process && service.process.length > 0 && (
              <div className="process-section">
                <h3 className="section-title mb-20">Our Process</h3>
                <div className="row gy-4">
                  {service.process.map((step, index) => (
                    <div key={index} className="col-md-6">
                      <div className="process-card">
                        <div className="number">{index + 1}</div>
                        <h4>{step.title}</h4>
                        <p>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="service-sidebar">
              <div className="widget widget-category">
                <h4 className="widget-title">Our Services</h4>
                <ul className="category-list">
                  {ServicesData.map((item) => (
                    <li
                      key={item.id}
                      className={item.id === service.id ? "active" : ""}
                    >
                      <Link href={`/service-details/${item.id}`}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="widget widget-contact">
                <h4 className="widget-title">Need Help?</h4>
                <div className="contact-info">
                  <p>
                    Contact us for a free consultation about{" "}
                    {service.title.toLowerCase()}
                  </p>
                  <Link href="/contact" className="btn btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsContent;
