import * as React from "react"

import * as styles from './styles.module.css';

const Row = ({children}) => (
    <div className={styles.root}>
        {children}
    </div>
);

export default Row;
