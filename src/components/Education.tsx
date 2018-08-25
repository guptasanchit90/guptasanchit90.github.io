import * as React from 'react';
import '../App.css';

class Education extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
            <div className={this.props.className}>
                <div className="card">
                    <p>{this.getTitle()}</p>
                    <span className="duration">{this.props.education.duration}</span>
                    <br />
                    <span className="description">{this.props.education.description || ''}</span>
                </div>
            </div>
        );
    }

    private getTitle() {
        const title: any[] = [];
        title.push(<span className="institute">{this.props.education.institute}</span>);
        title.push(<span className="location">, {this.props.education.location}</span>);
        title.push(<span className="title"> - {this.props.education.title}</span>);
        return title;
    }
}

export default Education;
