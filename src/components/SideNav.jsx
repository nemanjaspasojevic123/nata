import React, { Component} from "react";

export default class SideNav extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked })
    }

    render() {
    return (
        <>
        <header>
            <div className="menu-btn" onClick={this.handleClick}>
            <span className={this.state.clicked ? "menu-btn_burger open" : "menu-btn_burger"}></span>
            </div>
            <div className="header_logo"></div>
            <nav className={this.state.clicked ? "nav open" : "nav"}>
                <ul className={this.state.clicked ? "nav open" : "nav"}>
                    <li className={this.state.clicked ? "nav_item open" : "nav_item"} onClick={this.handleClick}><a href="#home" className="nav_link">Početna</a></li>
                    <li className={this.state.clicked ? "nav_item open" : "nav_item"} onClick={this.handleClick}><a href="#shop" className="nav_link">Prodavnica</a></li>
                    <li className={this.state.clicked ? "nav_item open" : "nav_item"} onClick={this.handleClick}><a href="#medicine" className="nav_link">Prirodni lek</a></li>
                    <li className={this.state.clicked ? "nav_item open" : "nav_item"} onClick={this.handleClick}><a href="#contact" className="nav_link">Kontakt</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
    }
}