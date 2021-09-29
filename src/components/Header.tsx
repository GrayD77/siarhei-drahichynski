import React from 'react';
import LinkedIn from "./LinkedIn";
import CVLink from "./CVLink";

const Header = () => {
    return (
        <header>
            <div className="header-content">
                <h1>Siarhei Drahichynski</h1>

                <div className="links">
                    <LinkedIn />

                    <CVLink />
                </div>
            </div>
        </header>
    );
};

export default Header;