import { UilMessage } from "@iconscout/react-unicons";
import "./project-in-mind.scss";
import { scrollToView } from "../../../shared/utils";

const ProjectInMind = () => {
  return (
    <section className="project section">
      <div className="backgroundImgContainer">
        <div className="projectContainer container ">
          <h2 className="title">You have a new project ?</h2>
          <p className="description">Contact me to discuss on the same !</p>
          <button
            onClick={() => scrollToView("contact_me")}
            className="common-button button-flex button-white"
          >
            Contact Me <UilMessage className="icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectInMind;
