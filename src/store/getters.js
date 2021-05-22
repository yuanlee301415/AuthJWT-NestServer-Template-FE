const getters = {
  token: state => state.user.token,
  userid: state => state.user.userid,
  username: state => state.user.username,
  avatar: state => state.user.avatar,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting
}
export default getters
