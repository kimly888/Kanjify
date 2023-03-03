# Kanjify

## About the project

<img width="1280" alt="screenshot of Kanjify" src="https://user-images.githubusercontent.com/62789620/216824470-15416a81-ba1a-49e8-950b-4fecdc3718ec.png">

Ever wonder what your name would be in Japanese?
Introducing Kanjify! Easily convert your name into Japanese and discover its meaning with just one click. Discover your Kanjified name today!

Try it out here: https://kanjify.vercel.app

### Features

-   Generate up to 3 different ways that a user's name can be written and pronounced in Japanese
-   User-friendly interface for easy input of names and display of Japanese names
-   Backend built using Express and Node.js for efficient name generation and retrieval
-   Built using modern web development technologies, including React and JavaScript

### Developers

- [Kurumi Muto](https://github.com/walnut07)
- [Kim Ly](https://github.com/kimly888)
- [Daiki Uema](https://github.com/cskejivic)

### Built Using the Following Technologies

<img width="600" alt="picture of a list of our tech stack" src="https://user-images.githubusercontent.com/90857923/183324714-d879dacd-4638-44aa-9868-316cdf52eea4.png">

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Kanji Alive API](https://app.kanjialive.com/api/docs)
- [WanaKana](https://github.com/WaniKani/WanaKana)
  <!-- - [Knex.js](http://knexjs.org/) -->
  <!-- - [PostgresSQL](https://www.postgresql.org/) -->
- [Vercel](https://www.vercel.com/)

## Installation and Usage

1.  Clone the repository to your local machine.
2.  Install dependencies using npm or yarn: `npm install` or `yarn install`
3.  Start the development server using `npm start` or `yarn start`

<-- Then, set up your local database.
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

After installation is complete, you should be able to run the app.

```shell
$ npm run start
``` -->

## Logic Behind the Scenes

This map shows how frontend and backend communicate each other. It is not 100% accurate but was made for improving developers' understanding.
![Map describing the kanjifying process](https://user-images.githubusercontent.com/90857923/183230404-e9eddeee-a914-4942-aa78-20e942b9e792.png)

## Want to know more about Kanjify?

Please take a look at this slide if you want to know the persona, future features, or engineering challenges.
https://docs.google.com/presentation/d/1T_csjN-K_JbxuHWR56iCB8ss_XQbSkXD7xOw_WlVTF4/edit?usp=sharing

## Contributing

Contributions to Kanjify are always welcome! To contribute, simply fork the repository, make your changes, and submit a pull request. Please ensure that your code is properly tested and documented before submitting a pull request.

## License

Kanjify is released under the MIT License. See the LICENSE file for details.


## Accreditation

- Favicon and Logo are from the [Korean Wiki Project](https://www.koreanwikiproject.com/)
- Background SVG generated using [Haikei](https://haikei.app/)

## Contact

If you have any questions or feedback about Kanjify, please contact us at [kimly.dev@gmail.com](mailto:kimly.dev@gmail.com).
