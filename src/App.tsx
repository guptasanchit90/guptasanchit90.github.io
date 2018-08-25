import * as React from 'react';
import './App.css';
import { default as MyComponents } from './components/index';
import { Constants } from './Constants';

class App extends React.Component {

  public render() {

    return (
      <div className="App">
        <MyComponents.header className="Header" />

        <div className="content">
          <div className="section-left">
            {this.getProjects()}
          </div>

          <div className="section-right">
            {this.getSkillsAndTools()}
            {this.getEducation()}
          </div>
        </div>
      </div>
    );
  }

  private getEducation() {
    const items: any[] = [];
    items.push(<br />);
    items.push(<br />);
    items.push(<br />);
    items.push(<div className="Section-Title EducationTitle">Education</div>);
    Constants.education.map((data, i) => {
      items.push(<MyComponents.education className="Education" education={data} />);
    });
    return items;
  }

  private getProjects() {
    const projectRows: any[] = [];
    projectRows.push(<div className="Section-Title ProjectTitle">Projects</div>);
    Constants.projects.map((data, i) => {
      projectRows.push(<MyComponents.project className="Project" project={data} />);
    });

    projectRows.push(<br />);
    projectRows.push(<br />);
    projectRows.push(<br />);
    projectRows.push(<div className="Section-Title ProjectTitle">Open Source Projects</div>);
    Constants.projectsOpenSource.map((data, i) => {
      projectRows.push(<MyComponents.project className="Project" project={data} />);
    });
    return projectRows;
  }

  private getSkillsAndTools() {
    const skillRows: any[] = [];
    skillRows.push(<div className="Section-Title SkillOrToolsTitle">Skills</div>);
    Constants.skills.map((data, i) => {
      skillRows.push(<MyComponents.skill className="SkillOrTools" iconName={data.iconName} title={data.title} />);
    });

    skillRows.push(<br />);
    skillRows.push(<br />);
    skillRows.push(<br />);
    skillRows.push(<div className="Section-Title SkillOrToolsTitle">Tools</div>);
    Constants.tools.map((data, i) => {
      skillRows.push(<MyComponents.skill className="SkillOrTools" iconName={data.iconName} title={data.title} />);
    });
    return skillRows;
  }

}

export default App;
