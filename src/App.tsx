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
          </div>
        </div>
      </div>
    );
  }

  private getProjects() {
    const projectRows: any[] = [];
    projectRows.push(<div className="Project-Header">Projects</div>);
    Constants.projects.map((data, i) => {
      projectRows.push(<MyComponents.project className="Project" project={data} />);
    });

    projectRows.push(<br />);
    projectRows.push(<br />);
    projectRows.push(<br />);
    projectRows.push(<div className="Project-Header">Open Source Projects</div>);
    Constants.projectsOpenSource.map((data, i) => {
      projectRows.push(<MyComponents.project className="Project" project={data} />);
    });
    return projectRows;
  }

  private getSkillsAndTools() {
    const skillRows: any[] = [];
    skillRows.push(<div className="SkillOrTools-Header">Skills</div>);
    Constants.skills.map((data, i) => {
      skillRows.push(<MyComponents.skill className="SkillOrTools" iconName={data.iconName} title={data.title} />);
    });

    skillRows.push(<br />);
    skillRows.push(<br />);
    skillRows.push(<br />);
    skillRows.push(<div className="SkillOrTools-Header">Tools</div>);
    Constants.tools.map((data, i) => {
      skillRows.push(<MyComponents.skill className="SkillOrTools" iconName={data.iconName} title={data.title} />);
    });
    return skillRows;
  }

}

export default App;
