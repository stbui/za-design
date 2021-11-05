import React, { FC } from 'react';
import ListStyle from './style';

export const List: FC<any> = props => {
    return (
        <ListStyle>
            <div className="list-inner">{props.children}</div>
        </ListStyle>
    );
};

export default List;
