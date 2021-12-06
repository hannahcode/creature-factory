# Creature Factory

![image](https://user-images.githubusercontent.com/70654324/144891754-9ef98aa9-7e49-485a-8d9d-18d4c09f7443.png)

_creature factory is a capstone project for BrainStation's web development diploma program_

#### How I deployed via heroku

Added scripts to root directory package.json:

- "start": "cd server && node index.js"
- "heroku-postbuild": "npm install --prefix client && npm install --prefix server && npm run build --prefix client"

Added this chunk of code to index.js in server:

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
  });
}

Added a config file to client side src folder with an index.js file containing the api url, one for heroku if the app is in production and one for running it locally.

Did the following command line prompts.

- heroku login *then logged in*
- heroku create creature-factory
- git remote -v *just to check heroku remote was there*
- git push heroku main
- heroku apps:open

Then, the app opens in your browser. It works, but sometimes has an internal server error which I still need to figure out. 

