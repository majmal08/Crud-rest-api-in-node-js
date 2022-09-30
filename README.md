npm init -y
npm i express
npm i -D nodemon
npm i ejs

#for database
npm i mongoose
npm i mysql2

npm i dotenv

sequelize commands
npm install sequelize-cli
npm install --save sequelize

#migration commands

single migration
sequelize migration:generate --name post

sequelize init

sequelize model:generate --name User --attributes name:string, email:string, password:string, phone:string, imageUrl:string
sequelize db:migrate

#seeders command
sequelize seed:generate --name user-seeder
sequelize db:seed --seed 20220926105427-category-seeder
sequelize db:seed:all 


npm install --save-dev @babel/cli @babel/core @babel/preset-env

upload files pkg
npm i --save multer


