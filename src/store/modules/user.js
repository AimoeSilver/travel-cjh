import { login } from '@/api/sys'
import {getItem , setItem} from '@/utils/storage'
import { TOKEN } from '@/constant/index'

const v = {
  namespaced: true,
  state: () => ({
    token: getItem('token') || ''
  }),
  mutation: {
    setToken(state, token){
      state.token = token
      setItem(TOKEN,token)
    }
  },
  actions: {
    login(content, userInfo) {
        const { name, password } = userInfo
        const username = name
        console.log(username, password)
        return new Promise((resolve, reject) => {
            
            login({username , password})
            .then(data => {
                
                resolve(data)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
  }
}

export default v
