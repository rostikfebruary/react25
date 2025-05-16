import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/tiers'}>Tiers List</NavLink>
            <NavLink to={'/orders'}>Orders</NavLink>
            <NavLink to={'/customers'}>Customers</NavLink>
        </div>
    );
};

export {Header};