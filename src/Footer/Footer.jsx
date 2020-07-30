import React, {
    Component
} from 'react';
import './Footer.css';
import MainMenu from '../MainMenu/MainMenu';

class Footer extends Component {

    render() {
        let menu = this.props.menu
        return (
            <footer className="main-footer bg-dark">
                <MainMenu menu={menu} />
            </footer >
        )
    }
}

export default Footer;