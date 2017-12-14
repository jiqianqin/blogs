import { compose, lifecycle, withHandlers } from "recompose";
import Swiper from 'Swiper';
import { IProps } from "../../../blog.plugins.common/icons/constants/icons";
let mySwiper ;
export const hoc = compose<any, any>(
    withHandlers({
        goNext:(props:IProps)=>{
            return ()=>{
                mySwiper.slideNext();
            }
        }
    }),
    lifecycle({
        componentDidMount: function () {
            mySwiper = new Swiper('.swiper-container', {
                direction : 'vertical',
            })
        }
    })
);