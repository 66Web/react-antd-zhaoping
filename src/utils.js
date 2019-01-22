/**
 * 工具函数
 */
export function getRedirectPath({type, avatar}){
    //根据用户信息 返回跳转地址
    //判断user.type ：bose /genius
    //判断user.avtar ：bossinfo /geniusinfo
    let url = (type === 'boss') ? '/boss' : '/genius'
    if(!avatar){
       url += 'info'
    }
    return url
}

export function getChatId(userId, targetId){
    return [userId, targetId].sort().join('_')
}
