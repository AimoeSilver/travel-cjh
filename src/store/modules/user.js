import { login } from '@/api/sys'

const v = {
  namespaced: true,
  state: () => ({}),
  mutation: {},
  actions: {
    login(content, userInfo) {
        const { name, password } = userInfo
        const username = name
        console.log(username, password)
        return new Promise((resolve, reject) => {
            
            login({username , password})
            .then(date => {
                resolve(date)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
  }
}

export default v
