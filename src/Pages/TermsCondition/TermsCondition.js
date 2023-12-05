import React from 'react';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    return (
        <div>
            <h2>accepts our terms and conditionn</h2>
            <p>go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsCondition;