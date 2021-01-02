# TypeScript + TypeORM + JWT Project Boilerplate
### There's three routes:
#### A public route for user creation
`router.post('/users', UserController.create)`

#### A public route for login 
`router.post('/auth', AuthController.authenticate)`

#### A private route, that goes through an authentication middleware
`router.get('/dash', authMiddleware, UserController.index)`

----------------
#### There's not much to say to it, hence it's simplicity.
### For the database, I've created a simple docker container running postgreSQL.


Author: [@LutzGe](https://github.com/LutzGe)