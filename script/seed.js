'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'mary@mary.com', password: 'mary', isAdmin: true}),
    User.create({email: 'someone@gmail.com', password: '123', first: 'Kelly', middle: 'V', last: 'Smith', age: 20, address: '172 nw 113th ave, Orlando, FL 32695'}),
    User.create({email: 'BlueTuna@gmail.com', password: '123', first: 'Gill', middle: 'H', last: 'Brown', age: 22, address: '151 Midcrest way, Sonoma, CA, 84147'})
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}


async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}


module.exports = seed
