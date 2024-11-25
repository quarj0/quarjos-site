import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Education.css";

const Work = () => {
  return (
    <div className="container edu-container text-body-primary">
      <div className="top-section">
        <i
          data-aos="fade-right"
          className="fa fa-briefcase fa-1x fa-ico mb-3 text-uppercase"
        >
          {" "}
          experience
        </i>
      </div>
      <div className="title">
        <h2>
          Work &<span className="text-success"> Experience</span>
        </h2>
      </div>
      <div className="timeline">
        <div className="line"></div>

        

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h3>IT Support</h3>
            <p>
             Currently, I am working as an IT Support at the University of Cape Coast (Faculty of Law) .
              My responsibilities include the following:
            </p>
            <ul>
              <li>Providing technical support to staff and students.</li>
              <li>
                Assisting in the installation of new hardware and software.
              </li>
              <li>Assisting in the management of the faculty&apos;s network.</li>
              <li>
                Fixing and maintaining the faculty&apos;s computer systems.
              </li>
            </ul>
            <small className="education-date">2023 - present</small>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h3>IT Support Internship</h3>
            <p>
              During my internship at the University of Cape Coast, I was
              responsible for the following:
            </p>
            <ul>
              <li>
                Assisted in the installation of a new network infrastructure.
              </li>
              <li>
                Assisted in the managing of the university&apos;s online
                learning platform.
              </li>
              <li>
                Assisted in performing routine maintenance on the
                university&apos;s network infrastructure.
              </li>
              <li>
                Tested and evaluated new technologies to be used by the
                university.
              </li>
              <li>
                Troubleshooted and resolved issues with the university&apos;s IT infrastructure
                including systems, networks, and applications.
              </li>
            </ul>
            <small className="education-date">September-November, 2023</small>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h3>IT Manager at LuvTv & LuvFm Online</h3>
            <p>
              As the IT Manager at Luvtv and Luvfm Online, I was responsible for
              the following:
            </p>
            <ul>
              <li>
                Implemented a system upgrade that improved network performance
                by 30%.
              </li>
              <li>
                Managed a team other IT professionals to ensure the smooth running
                of the company&apos;s IT infrastructure.
              </li>
              <li>
                Managed the company&apos;s website and social media platforms.
              </li>
            </ul>
            <small className="education-date">2020 - 2021</small>
          </div>
        </div>

        <div className="section">
          <div className="bead"></div>
          <div className="content">
            <h3>
              BigBen&apos; Printing Press - Graphic Designer & Print Specialist
            </h3>
            <p>
              As the Graphic Designer and Print Specialist at BigBen&apos;
              Printing Press, I was responsible for the following:
            </p>
            <ul>
              <li>
                Created and designed graphics for the company&apos;s clients.
              </li>
              <li>
                Mangaged the printing of the company&apos;s clients&apos;
                products.
              </li>
            </ul>
            <small className="education-date">2016 - 2017</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
