/**
 * 用户信息校验，跳转登录
 */
import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {loadData} from '../../redux/user.redux'

@withRouter
@connect(
   null,
   {loadData}
)
class AuthRoute extends React.Component{
    componentDidMount() {
       const publicList = ['/login', 'register']
       const pathname = this.props.location.pathname;
       if(publicList.indexOf(pathname) > -1){
           return null
       }
       //获取用户信息
       axios.get('/user/info')
          .then(res => {
             if(res.status == 200){
                if(res.data.code == 0){  //登录
                   this.props.loadData(res.data.data)
                }else{
                   this.props.history.push('/login')
                   //console.log(this.props.history)
                }
             }
          })
       //现在的url地址，login是不需要跳转的
    }
    render(){
		return null
	}
}

export default AuthRoute