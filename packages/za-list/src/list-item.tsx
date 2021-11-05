import React, { FC } from 'react';

export const ListItem: FC<any> = props => {
    return (
        <div className="list-item">
            <div className="list-item-content">
                <div className="list-item-content-main">{props.children}</div>
            </div>
        </div>
    );
};

export default ListItem;
