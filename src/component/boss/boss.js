/**
 * Boss看到的是牛人列表 
 */
import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/chatuser.redux'
import UserCard from '../usercard/usercard'

@connect(
    state => state.chatuser,
    {getUserList}
)
class Boss extends React.Component{
    componentDidMount(){
        this.props.getUserList('genius')
    }
    render(){
        // console.log(this.state.data)
        // console.log(this.props.userlist)
        return <UserCard userlist={this.props.userlist}></UserCard>
    }
}

export default Boss