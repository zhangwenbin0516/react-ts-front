/**
********************************************
* @Project File: index.ts
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/4/21 23:17
********************************************
*/

import { connect, Dispatch } from 'react-redux';

import { storeState } from '@redux/state';

import PageModule from '@page/index';

import { addAction, updateAction } from '@redux/action';

const mapStateToProps = (state: storeState): any => ({
    value: state
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onIncrement: () => dispatch(addAction()),
    onDecrement: () => dispatch(updateAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(PageModule);