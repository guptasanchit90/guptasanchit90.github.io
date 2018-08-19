import * as React from 'react';
import '../App.css';

class Me extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
            <div className={`${this.props.className}`}>
                <img className="meImage" src={require('../me.jpeg')} />
                <div className="details">
                    <span className="name">Sanchit Gupta</span>
                    <br />
                    <span className="role">Full Stack Developer</span>
                    <br />
                    <br />
                    <a href="mailto:gupta.sanchit90@gmail.com">gupta.sanchit90@gmail.com</a>
                </div>
            </div>
        );
    }
}

export default Me;
