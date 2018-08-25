import '../App.css';

import * as React from 'react';

import ContactInfo from './ContactInfo';
import Me from './Me';

class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { name: this.props.defaultName };
    }

    public render() {
        return (
            <div className={this.props.className}>
                <Me className="Me" />
                <ContactInfo className="ContactInfo" />
            </div>
        );
    }
}

export default Header;
