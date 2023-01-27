import React, { Component, createContext } from "react";
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        isDarkMode: true,
        dark: {
            bg: "#222222",
            color: "rgba(239, 83, 81, 1)",
            hover: "rgba(239, 83, 81, 0.8)"
        },
        light: {
            bg: "#ECF0F1",
            color: "#222222",
            hover: "rgba(255, 193, 1, 0.8)"
        }
    }

    changeTheme = () => {
        this.setState({
            isDarkMode: !this.state.isDarkMode
        })
    }

    render() {
        return <ThemeContext.Provider value={{ ...this.state, changeTheme: this.changeTheme }}>{this.props.children}</ThemeContext.Provider>
    }
}

export default ThemeContextProvider;