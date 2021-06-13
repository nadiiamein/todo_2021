import React  from "react"
import './app-header.css';

const AppHeader = ({toDo, done}
) => {
    return (
    <div className="app-header d-flex">
        <h1> Meine To-Do-Liste</h1>
        <h2> {toDo} mehr zu tun ,{done} getan</h2>
        </div>);
};
export default AppHeader;
