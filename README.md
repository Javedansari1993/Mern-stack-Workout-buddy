
# workouts backend Project

This project using NodeJS, Express, MongoDB Atlas database, Mongoose and dotenv for setting Environment varialbles and including perticular routes end point in the URL, through this users can access all workouts,access particular workouts, add workouts, delete, update workouts by perticular IDs.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Javedansari1993/Mern-stack-Workout-buddy
```

Go to the project directory

```bash
  cd Mern-stack-Workout-buddy
```

Install dependencies

```bash
  npm install
```

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## API Reference

#### Get all workouts

```http
  GET /api/workouts
```


#### Get single workouts

```http
  GET /api/workouts/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of workouts to fetch |

#### Add workouts
```http
  POST /workouts
```

#### Delete workouts
```http
  DELETE /api/workouts/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of workouts to delete |

#### Update workouts
```http
  PATCH /api/workouts/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of workouts to update |




## Features

- Access all workouts from remotely hoisted database
- Add new workouts to database
- Access perticular data from database through a specific IDs
- Delete workouts from the database through a specific IDs
- Update existing workouts in the database through a specific IDs



## FAQ

#### How to add new workouts?

Use Postman to add new workouts in the database.

#### How to delete new workouts?
Use Postman to Delete workouts from the database.

#### How to update new workouts?
Use Postman to update workouts from the database.

## 🚀 About Me
I'm a full stack developer...Currently learning web 3.O from Almabetter


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Javedansari1993)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/javed-ansari-07a327154/)


