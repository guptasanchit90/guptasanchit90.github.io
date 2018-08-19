import * as React from 'react';
import '../App.css';

class ContactInfo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
            <div className={this.props.className}>
                <a href="https://github.com/guptasanchit90" target="_blank"><img className="social-icon" src={require('../icons/github.png')} /></a>
                <a href="https://www.linkedin.com/in/guptasanchit90/" target="_blank"><img className="social-icon" src={require('../icons/linkedin.png')} /></a>
                <a href="https://stackoverflow.com/users/4149453/sanchit-gupta?tab=profile" target="_blank"><img className="social-icon" src={require('../icons/stackoverflow.png')} /></a>
                <a href={require('../resume.pdf')} download="Sanchit Gupta - Full stack developer.pdf"><img className="social-icon" src={require('../icons/pdf.png')} /></a>
            </div>
        );
    }
}

export default ContactInfo;
