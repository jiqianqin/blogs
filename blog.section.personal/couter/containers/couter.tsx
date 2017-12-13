
import {compose,lifecycle} from "recompose";
import {connect} from "react-redux";
import {increment, decrement, reset} from "../actions/counter";

// 将属性转换到props中
const mapStateToProps = (state) => {
    return {
        personal: state.personal
    }
};
// 将方法转换到props中
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment());
        },
        decrement: () => {
            dispatch(decrement());
        },
        reset: () => {
            dispatch(reset());
        }
    }
};

export const hoc = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount: function () {
            console.log("竟然进来了？");
        }
    })
);