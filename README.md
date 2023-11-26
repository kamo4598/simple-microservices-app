# simple-microservices-app

Simple blog application using fundamentals of microservices

## Posts Service

| Path     | Method | Body?           | Goal               |
| -------- | ------ | --------------- | ------------------ |
| `/posts` | POST   | {title: string} | Create a new post  |
| `/posts` | GET    | -               | Retrieve all posts |

## Comments Service

| Path                  | Method | Body?             | Goal                                                    |
| --------------------- | ------ | ----------------- | ------------------------------------------------------- |
| `/posts/:id/comments` | POST   | {content: string} | Create a comment associated with the given Post ID      |
| `/posts/:id/comments` | GET    | -                 | Retrieve all comments associated with the given post ID |
