import "bootstrap/dist/css/bootstrap.min.css";
import systemresponse from "../assets/sysanalyzer.png";
import appscreen from "../assets/interface.png";
import statement from "../assets/statement.png";
import mobiletrans from "../assets/mobiletrans.png";
import verify from "../assets/verify.png";


import ImageCarousel from "./ImageCarousel";

const Advantages = () => {
  const AtmImages = [appscreen, statement, mobiletrans, verify];
  return (
    <div className="container-fluid text-body-primary">
      <div className="container text-start card-body">
        <i className="fa fa-building fa-1x fa-ico mt-4 mb-2  text-uppercase">
          {" "}
          portfolio
        </i>
      </div>
      <h3 className="card-title">
        <span className="text-body-primaryy text-start fs-1">Featured</span>
        <span className="text-success m-lg-1 fs-1">Projects</span>
      </h3>
      <section className="text-body-primary">
        <p className="text-body-primary fs-6">
          Dive into a collection of projects that showcase my technical skills
          and creativity. These projects span web development, programming, and
          cybersecurity, providing a glimpse of my problem-solving abilities and
          innovative thinking.
        </p>
      </section>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 mb-3">
        <div className="col" data-aos="fade-right">
          <div className="card h-100">
            <img
              src={systemresponse}
              className="card-img-top"
              alt="system-response-analyser"
            />
            <div className="card-body">
              <h5 className="card-header text-center">
                System Analyser
              </h5>
              <p className="card-subtitle mt-3 text-body-primary">
                A script written in python to assess and evaluate the behavior
                and performance of a computer system. Platforms: Linux OS, Windows, Rasberry Pi and
                MacOS
                <p className="text-body-primary">Features</p>
                <ul className="text-body-primary">
                  <li className="text-body-primary">
                    Measuring response time for a given url
                  </li>
                  <li className="text-body-primary">
                    Checking if operatiing system is updated and patched
                  </li>
                  <li className="text-body-primary">
                    Checking availability of updates
                  </li>
                  <li className="text-body-primary">
                    Checking disk, memory and CPU usage{" "}
                  </li>
                  <li className="text-body-primary">
                    Network speed testing as an indicator of network performance.
                  </li>
                  <li className="text-body-primary">
                    System uptime and system information
                  </li>
                  <li className="text-body-primary">etc</li>
                </ul>
              </p>
              <p className="link-to-project text-sm-center ">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/quarj0/system-analyser"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-down">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Hostel Management</h5>
              <small className="m-3 text-danger">APIs Only</small>{" "}
              <p className="card-text">
                A mobile application APIs for a hostel management service. 
                <br />
                <br />
                The application
                is built with Django and Django Rest Framework for the backend and 
                it&apos;s only the backend part of the project consisting of fully functional RESTful APIs.
              </p>
              <p className="text-body-primary">Features</p>
              <ul className="text-body-primary">
                <li>Authentication and Authorization</li>
                <li>Profile management</li>
                <li>Search and Filter functionality</li>
                <li>Booking management functionality</li>
                <li>Review management functionality</li>
                <li>Favouriting management functionality</li>
                <li>Categorizing Hostels</li>
                <li>etc</li>
              </ul>
              <p className="link-to-project text-sm-center">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/quarj0/hostel_management"                  target="_blank"
                    rel="noreferrer"
                  >
                    Private Repo
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-top">
          <div className="card h-100">
            <ImageCarousel images={AtmImages} />
            <div className="card-body">
              <h5 className="card-header text-center">
                FingerPrint Based ATM Simulator{" "}
              </h5>
              <p className="card-text">
                A simple ATM simulator built with Java programming language.
                It&apos;s a full GUI application that allows users to perform
                basic ATM operations such as fingerprint verification, deposit,
                withdraw, check balance, etc. It uses the fingerprint sensor to
                verify the user&apos;s identity. No database is used in this
                project. All data is logically stored in the application itself
                and can be accessed by the user. Framework used: JavaSwing
              </p>
              <p className="link-to-project text-sm-center">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/qquarjo/atm-simulator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-down">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Campus Glide</h5>
              <small className="m-3 text-danger">APIs Only</small>{" "}
              <p className="card-text">
              A mobile application APIs for  E-Scooter rental service.
              <br />
              <br />
              The application is built with Django and Django Rest Framework for the backend 
              and it&apos;s only the backend part of the project consisting of fully functional RESTful APIs.
              </p>
              <p className="link-to-project text-sm-center">
                <small>
                  <a
                    className="btn btn-success w-50"
                    href="https://github.com/quarj0/campusglidebackend" 
                  >
                    Private Repo
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advantages;
