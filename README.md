# WUDNodeAuthentication
Tutorial - authenticataion sessionbased application using Nodejs

### Branch 1-express

Steps
- initial git repo, npm setup 
- express, dotenv

Use .env file to set application secrets | variables. 

**How to run application**
1. Clone git repo branch
2. Install dependencies `npm i`
3. Start server `node server` 
4. Open a browser and visit localhost:3000

___

## Comments...

### Server event order
1. dependencies
2. middleware | sessions, handle posts
3. routes | endpoints: api response json, render page using template engine
4. static files
5. 404 not found - custom page | info
6. 500 server error
7. listen on server requests

### Template engine

Embedded JavaScript templating | Handlebars

Use Visual Studio Code extension EJS Language support 

https://ejs.co/

*folder structure*

- views
  - partials
    - header.ejs
    - footer.js
    - nav.ejs 
- index.ejs
- about.ejs
- user.ejs
- ...


### Routes

- routes
  - route-start.js
  - route-about.js