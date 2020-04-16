/**
********************************************
* @Project File: index.ts
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/4/15 22:43
********************************************
*/
import { connect, DispatchProp } from 'react-redux';
import { actions, ADD_DATA, UPDATE_DATA } from './action';
import { StoreState } from './state';

export function setState(state: StoreState, action: actions): StoreState {
    switch (action.type) {
        case UPDATE_DATA:
            return state;
            break;
        case ADD_DATA:
            return state;
            break;
        default:
            return state;
    }
}

export function mapStateToProps({}: actions) {
    return {}
}

export function mapDispatchToProps(dispatch: DispatchProp<actions>) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps);