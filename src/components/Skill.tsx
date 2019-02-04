import * as React from 'react';
import '../App.css';

class Skill extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
            <div className={this.props.className} style={{ background: this.props.isPrimary ? "lightgrey" : "" }}>
                <i className={`${this.props.iconName} colored`} /> {this.props.title}
            </div>
        );
    }
}

export default Skill;
