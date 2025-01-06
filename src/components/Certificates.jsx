import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Certifications = () => {
  return (
    <div className="bg-gray-50 p-6 shadow-lg rounded-lg">
      {/* Header Section */}
      <div className="bg-blue-600 text-white text-center p-4 rounded-t-lg">
        <i className="fa fa-certificate text-2xl uppercase font-semibold">
          {" "}
          Qualifications
        </i>
      </div>
      <div className="p-4">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 text-center">
          Awards & <span className="text-green-500">Achievements</span>
        </h3>

        {/* Timeline Section */}
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
              borderRadius: "8px",
            }}
            contentArrowStyle={{ borderRight: "4px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-lg">
              Security Operations
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-200">
              (ISC)²
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
              borderRadius: "8px",
            }}
            contentArrowStyle={{ borderRight: "4px solid  rgb(33, 150, 243)" }}
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-lg">
              IBM Cybersecurity Analyst Professional Certificate
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-gray-200">
              IBM
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Certifications;
