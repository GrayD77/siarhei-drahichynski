import React from 'react';
import LinkedIn from "./LinkedIn";
import CVLink from "./CVLink";

const Header = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="links">
                    <LinkedIn />
                    <CVLink />
                </div>
            </div>
        </footer>
    );
};

export default Header;