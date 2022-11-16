import { Fragment } from "react";
import classes from './Header.module.css';

const HeaderBottom = (props) => {
    return(
        <Fragment>
            <div className={classes.container}>
                <h1>The Generics</h1>
            </div>
        </Fragment>
    )
};

export default HeaderBottom;