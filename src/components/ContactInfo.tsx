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
                Phone : <a href="tel:+919650694400">+91-965-069-4400</a><br />
                Email : <a href="mailto:gupta.sanchit90@gmail.com">gupta.sanchit90@gmail.com</a><br /><br />
                LinkedIn : <a href="https://www.linkedin.com/in/guptasanchit90/">guptasanchit90</a><br />
                GitHub : <a href="https://github.com/guptasanchit90">guptasanchit90</a><br />
            </div>
        );
    }
}

export default ContactInfo;
