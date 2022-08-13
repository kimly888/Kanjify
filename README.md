# Kanjify
## About the project
<img width="1280" alt="screenshot of Kanjify" src="https://user-images.githubusercontent.com/90857923/183323486-118d6e93-6000-4c69-9623-94d48353ec9b.png">

Want to know how to spell your name in kanji? 
Kanjify is here for you to give you a kanjified name.

Try it out here: https://kanjify.herokuapp.com

### Developers
- [Kurumi Muto](https://github.com/walnut07)
- [Kim Ly](https://github.com/Double0Asian)
- [Daiki Uema](https://github.com/cskejivic)

### Built with
<img width="600" alt="picture of a list of our tech stack" src="https://user-images.githubusercontent.com/90857923/183324714-d879dacd-4638-44aa-9868-316cdf52eea4.png">

* [React](https://reactjs.org/)
* [Express](https://expressjs.com/)
* [Knex.js](http://knexjs.org/)
* [PostgresSQL](https://www.postgresql.org/)
* [Heroku](https://www.heroku.com/)
* [Kanji Alive API](https://app.kanjialive.com/api/docs)
* [WanaKana](https://github.com/WaniKani/WanaKana)

## Getting Started
Once forking this repository and cloning it to your computer, install libraries.
- npm

In `Kanjify/server` and `Kanjify/client`, run
```shell
$ npm install
```

- Express / Knex.js / Wanakana

In `Kanjify/server`, run
```shell
$ npm install express knex wanakana
```

Then, set up your local database.
Create a local Postgres database called 'kanjify'.
```SQL
CREATE DATABASE kanjify;
```
In `server/db`, run
```shell
$ knex migrate:latest
```
Create `.env.local` file in `server/db`. Write information below.

```
DB_USER=YOUR PSQL USERNAME
DB_PASSWORD=YOUR PSQL PASSWORD
DB_NAME=kanjify
```

After installing those libraries, you should be able to run the app.
In `Kanjify/client` and `In Kanjify/server`, run
```shell
$ npm start
```

## Logic behind the scenes
This map shows how frontend and backend communicate each other. It is not 100% accurate but was made for improving developers' understanding.
![Map describing the kanjifying process](https://user-images.githubusercontent.com/90857923/183230404-e9eddeee-a914-4942-aa78-20e942b9e792.png)

## Want to know more about Kanjify?
Please take a look at this slide if you want to know the persona, future features, or engineering challenges.
https://docs.google.com/presentation/d/1T_csjN-K_JbxuHWR56iCB8ss_XQbSkXD7xOw_WlVTF4/edit?usp=sharing
