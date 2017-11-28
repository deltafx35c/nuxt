import { Router } from 'express'
import * as axios from 'axios'
import { logger } from '../log4js'

const router = Router()

// Mock Users
let users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', async function (req, res, next) {
  // let { data: result } = await axios.get('http://lpapi.rongzi.com/api/Account/IsLogin')
  // let newUsers = users.concat()
  // if (result.Content) {
  //   newUsers.push({ name: 'Loduvic' })
  // } else {
  //   newUsers.push({ name: 'Alexis' })
  // }
  //logger('applog').debug(newUsers)
  res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

export default router
