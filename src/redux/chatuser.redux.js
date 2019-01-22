/**
 * 用户间聊天redux管理数据
 */
import axios from 'axios'
//action type
const USER_LIST = 'USER_LIST'

const initState = {
	userlist:[]
}

//reducer
export function chatuser(state=initState, action){
	switch(action.type){
		case USER_LIST:
			return {...state, userlist:action.payload}
		default:
			return state
	}
}

//action creator
function userList(data){
	return { type:USER_LIST, payload:data}
}

//优化：异步操作数据的方法
export function getUserList(type){
	return dispatch=>{
		axios.get('/user/list?type='+type)
			.then(res=>{
				if (res.data.code==0) {
                    //dispatch触发数据变化，执行action
					dispatch(userList(res.data.data))
				}
			})

	}
}
