import http from 'src/utils/http'

const userApi = {
  getUsers: () => http.get('/users')
}
export default userApi
