import * as React from 'react';

class Award extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
            <div className={`${this.props.className}`}>
                <p><span className="title">{this.props.award.title}</span></p>
                <p><span className="duration">{this.props.award.duration}</span></p>
                <p><a className="link" href={this.props.award.link}>{this.props.award.link || ''}</a></p>
            </div>
        );
    }
}

export default Award;
