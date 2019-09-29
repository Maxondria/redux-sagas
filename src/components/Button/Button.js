import React from 'react';

import './styles.css';

const Button = ({ loading = false, ...props }) => (
    <button className="button" disabled={loading} {...props}>
        {loading ? 'Loading...' : 'Load More'}
    </button>
);

export default Button;
