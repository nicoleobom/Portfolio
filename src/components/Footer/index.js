import React from 'react';
import Social from '../Social/index';
import './index.css'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer-fixed">
                <Social />
            </div>
        )
    }
}