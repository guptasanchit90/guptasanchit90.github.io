import './App.css';

import * as React from 'react';
import MediaQuery from 'react-responsive';

import { default as MyComponents } from './components/index';
import { Constants } from './Constants';

class App extends React.Component {

  public render() {

    return (
      <div className="App">
        <MyComponents.header className="Header" />

        <div className="content">
          <MediaQuery minDeviceWidth={1224}>
            <div className="section-left">
              {this.getProjects()}
              {this.getAwards()}
            </div>

            <div className="section-right">
              {this.getSkillsAndTools()}
              {this.getEducation()}
            </div>
          </MediaQuery>

          <MediaQuery maxWidth={1224}>
            <div className="section-single">
              {this.getSkillsAndTools()}
              {this.getEducation()}
              <br />
              <br />
              {this.getProjects()}
              {this.getAwards()}
            </div>
          </MediaQuery>

        </div>
      </div>
    );
  }

  private getAwards() {
    const items: any[] = [];
    items.push(<br />);
    items.push(<br />);
    items.push(<br />);
    items.push(<div className="Section-Title AwardTitle">Awards</div>);
    Constants.awards.map((data, i) => {
      const id = "Award-" + i;
      items.push(<MyComponents.award key={id} className="Award" award={data} />);
    });
    return items;
  }

  private getEducation() {
    const items: any[] = [];
    items.push(<br />);
    items.push(<br />);
    items.push(<br />);
    items.push(<div className="Section-Title EducationTitle">Education</div>);
    Constants.education.map((data, i) => {
      const id = "Education-" + i;
      items.push(<MyComponents.education key={id} className="Education" education={data} />);
    });
    return items;
  }

  private getProjects() {
    const projectRows: any[] = [];
    projectRows.push(<div className="Section-Title ProjectTitle">Projects</div>);
    Constants.projects.map((data, i) => {
      const id = "Project-" + i;
      projectRows.push(<MyComponents.project key={id} className="Project" project={data} />);
    });

    projectRows.push(<br />);
    projectRows.push(<br />);
    projectRows.push(<br />);
    projectRows.push(<div className="Section-Title ProjectTitle">Open Source Projects</div>);
    Constants.projectsOpenSource.map((data, i) => {
      const id = "ProjectOpen-" + i;
      projectRows.push(<MyComponents.project key={id} className="Project" project={data} />);
    });
    return projectRows;
  }

  private getSkillsAndTools() {
    const skillRows: any[] = [];
    skillRows.push(<div className="Section-Title SkillOrToolsTitle">Skills</div>);
    Constants.skills.map((data, i) => {
      const id = "Skill-" + i;
      skillRows.push(<MyComponents.skill key={id} className="SkillOrTools" iconName={data.iconName} title={data.title} />);
    });

    skillRows.push(<br />);
    skillRows.push(<br />);
    skillRows.push(<br />);
    skillRows.push(<div className="Section-Title SkillOrToolsTitle">Tools</div>);
    Constants.tools.map((data, i) => {
      const id = "Tool-" + i;
      skillRows.push(<MyComponents.skill key={id} className="SkillOrTools" iconName={data.iconName} title={data.title} />);
    });
    return skillRows;
  }

}

export default App;
