/**
********************************************
* @Project File: index.ts
* @author: <zhangwenbin>
* @E-mail: <942623159@qq.com>
* @Create Date: 2020/4/21 23:17
********************************************
*/

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { storeState } from '@redux/state';

import * as PageModule from '@page/index';

import { addAction, updateAction } from '@redux/action';

const mapStateToProps = (state: storeState): any => ({
    ...state
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onUpdateData: () => dispatch(updateAction()),
    onAddData: () => dispatch(addAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(PageModule);