import * as React from 'react';
import '../App.css';

class Project extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
            <div className={this.props.className}>
                <div className="card">
                    {this.getTitle()}
                    {this.getRoleAndTeamSize()}
                    {this.getDescriptionAndLink()}
                </div>
            </div>
        );
    }

    private getTitle() {
        const title: any[] = [];
        title.push(<span className="title">{this.props.project.title}</span>);

        if (this.props.project.skills) {
            title.push(<span className="skill"> - {this.props.project.skills.join(', ')}</span>);
        }
        return title;
    }

    private getRoleAndTeamSize() {
        const data: any[] = [];
        if (this.props.project.role && this.props.project.teamSize) {
            data.push(<br />);
            data.push(<br />);
            data.push(<b>Role</b>);
            data.push(<span>: {this.props.project.role}</span>);
            data.push(<br />);
            data.push(<b>Team Size</b>);
            data.push(<span>: {this.props.project.teamSize}</span>);
        }
        return data;
    }

    private getDescriptionAndLink() {
        const data: any[] = [];
        data.push(<br />);
        data.push(<br />);
        data.push(<span>{this.props.project.description}</span>);

        if (this.props.project.link) {
            data.push(<br />);
            data.push(<br />);
            data.push(<a href={this.props.project.link}>{this.props.project.link}</a>);
        }
        return data;
    }

}

export default Project;
