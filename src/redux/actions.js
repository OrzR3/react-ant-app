/*包含n个用来创建action的工厂函数(action creator)*/
/*增加的action creator*/
import {INCREMENT, DECREMENT} from "./action-types"

export const increment = number => ({type: INCREMENT, data: number})
/*减少的action creator*/
export const decrement = number => ({type: DECREMENT, data: number})