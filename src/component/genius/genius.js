/**
 * 牛人看到的是Boss列表 
 */
import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'

@connect(
    state => state.chatuser,
    {getUserList}
)
class Genius extends React.Component{
    componentDidMount(){
        this.props.getUserList('boss')
    }
    render(){
        // console.log(this.state.data)
        // console.log(this.props.userlist)
        return <UserCard userlist={this.props.userlist}></UserCard>
    }
}

export default Genius