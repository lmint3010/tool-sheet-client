const baseUrl = 'http://localhost:3000/api'

const bindUrl = path => `${baseUrl}${path}`

export default {
  users: {
    signup: bindUrl('/users/signup'),
    signin: bindUrl('/users/signin'),
  },
  spreadsheet: {
    fetch: bindUrl('/sprsheet/fetch'),
    delete: bindUrl('/sprsheet/delete'),
    add: bindUrl('/sprsheet/add'),
    listall: bindUrl('/sprsheet/all'),
    search: bindUrl('/sprsheet/search'),
    syncinfo: bindUrl('/sprsheet/syncinfo'),
  },
  google: {
    setToken: bindUrl('/auth/settoken'),
  },
}
