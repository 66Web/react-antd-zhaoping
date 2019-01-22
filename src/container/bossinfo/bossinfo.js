import React from 'react'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {connect} from 'react-redux'
import {update} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
    state => state.user,
    {update}
)
class BossInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            desc: '',
            company: '',
            money: ''
        }
    }
    onChange(key, val){
        this.setState({
            [key]: val
        }) 
    }
    render(){
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            <div>
               {redirect&&redirect!==path  ? <Redirect to={this.props.redirectTo}/> : null}
               <NavBar mode="dark">Boss完善信息页面</NavBar>
                <AvatarSelector
                   selectAvatar={(imgname) => {
                       this.setState({
                           avatar: imgname
                       })
                   }}
                ></AvatarSelector>
                <InputItem onChange={(v) => this.onChange('title', v)}>
                    招聘职位
                </InputItem>
                <InputItem onChange={(v) => this.onChange('company', v)}>
                    公司名称
                </InputItem>
                <InputItem onChange={(v) => this.onChange('money', v)}>
                    职位薪资
                </InputItem>
                <TextareaItem
                    rows={3}
                    title="职位要求"
                    autoHeight
                    onChange={(v) => this.onChange('desc', v)}
                >
                </TextareaItem>
                <Button
                    onClick={()=>{
                        this.props.update(this.state)
                    }}
                    type="primary"
                >保存</Button>
            </div>
        )
    }
}

export default BossInfo