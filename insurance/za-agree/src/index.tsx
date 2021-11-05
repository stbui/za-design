import React from 'react';
import styled from 'styled-components';

const Root = styled.div``;

export const Calendar = props => {
    const { ...other } = props;

    return <Root {...other} />;
};

Calendar.defaultProps = {};

export default Calendar;
