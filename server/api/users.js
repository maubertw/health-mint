const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({where: {isAdmin: false},
      attributes: ['id', 'email', 'first', 'last', 'middle', 'address', 'age']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({where:{id: req.params.id},
    attributes: ['id', 'email', 'first', 'last', 'middle', 'address', 'age']
  })
    res.json(user)
  } catch (err) {
    next(err)
  }
})
