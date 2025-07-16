import Link from "next/link";

type BreadCrumbProps = {
  pageTitle?: string;
  breadcrumb?: string;
  backgroundImage?: string; // ✅ NEW PROP
};

export const BreadCrumb = ({ pageTitle, breadcrumb, backgroundImage }: BreadCrumbProps) => {
  return (
    <div
      className="page-breadcrumb-area"
      style={{
        backgroundImage: `url(${backgroundImage || "/images/background/default-cover.jpg"})`,
      }}
    >
      <div className="page-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="te-breadcrumb-wrapper">
              <div className="te-page-heading">
                <h3 className="te-page-title">{pageTitle || "404 Page not Found"}</h3>
              </div>
              <div className="te-breadcrumb-list">
                <ul>
                  <li><Link href="/index">Home</Link></li>
                  <li className="active">{breadcrumb || "Error-Page"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
