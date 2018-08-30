import React from "react";
import "./Header.css";

const Header = props => (
    <div className="page-header">
        <h1 id="app-title">The New York Times Article Search <span role="img" aria-label="newspaper">📰</span></h1>
            <p>Search for articles by topic and year and save for later</p>
    </div>
)

export default Header;