import React, { Component } from "react";
import ExperienceButton from "../experienceButton/ExperienceButton";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div
        className="experience-card"
        style={{ border: `1px solid ${experience["color"]}` }}
      >
        <div className="experience-card-logo-div">
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
        </div>
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          <p
            className="experience-card-description"
            style={{ color: theme.text }}
          >
            {experience["description"]}
          </p>
          <div className="btn-div">
            <ExperienceButton
              text="Report"
              newTab={true}
              href={experience["report_link"]}
              theme={theme}
              experience={experience}
            />
            <ExperienceButton
              text="Completion Letter"
              newTab={true}
              href="https://drive.google.com/file/d/1DJiW5HbwRuVFEFxnHfCXzrlKddx9uNrX/view?usp=sharing"
              theme={theme}
              experience={experience}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
