// Test Server
const baseUrl = 'http://localhost:3000/api'

// Real Server
// const baseUrl = 'https://dfo-data-tool.herokuapp.com/api'

const bindUrl = path => `${baseUrl}${path}`

export default {
  users: {
    signup: bindUrl('/users/signup'),
    signin: bindUrl('/users/signin'),
    all: bindUrl('/users/all'),
    resetPassword: bindUrl('/users/reset-password'),
    validToken: bindUrl('/users/valid-resettoken'),
    renewPassword: bindUrl('/users/renew-password'),
  },
  spreadsheet: {
    fetch: bindUrl('/sprsheet/fetch'),
    delete: bindUrl('/sprsheet/delete'),
    add: bindUrl('/sprsheet/add'),
    listall: bindUrl('/sprsheet/all'),
    search: bindUrl('/sprsheet/search'),
    syncinfo: bindUrl('/sprsheet/syncinfo'),
    like: bindUrl('/sprsheet/setdefault'),
    workspaceData: bindUrl('/sprsheet/get-workspace-data'),
  },
  google: {
    setToken: bindUrl('/auth/settoken'),
  },
}
