import {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <Link to="/imprint" className="footer-link">Imprint</Link>
                    <Link to="/terms" className="footer-link">Terms of Use</Link>
                </div>
                <div className="footer-info">
                    <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

