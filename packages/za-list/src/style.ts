import styled, { css } from 'styled-components';

export const ListStyle = styled.div`
    background-color: #ffffff;
    overflow: hidden;
    font-size: 17px;

    .list-inner {
        margin-bottom: -1px;
    }

    .list-default {
        border: 1px solid rgb(238 238 238);
        border-right: none;
        border-left: none;
    }

    .list-card {
        margin: 12px;
        border-radius: 8px;
    }

    .list-item {
        display: block;
        padding-left: 12px;

        &-title,
        &-description {
            color: #999999;
            font-size: 15px;
        }
        &-content {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 12px 12px 12px 0;
            border-bottom: solid 1px rgb(238 238 238);
            &-prefix {
                width: auto;
                flex: none;
                padding-right: 12px;
            }
            &-main {
                flex: auto;
            }
            &-extra {
                flex: none;
                padding-left: 12px;
            }
            &-arrow {
                flex: none;
                display: flex;
                align-items: center;
                padding-left: 12px;
                font-size: 16px;
            }
        }
        &-disabled {
            && > .list-item-content > * {
                cursor: not-allowed;
                opacity: 0.6;
                pointer-events: none;
            }
        }
    }

    .list-item-content {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 12px 12px 12px 0;
        border-bottom: 1px solid rgb(238 238 238);
    }

    .list-item-content-main {
        flex: auto;
    }
`;

export default ListStyle;
