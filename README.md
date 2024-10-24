## Setup

1. clone repo

```
git clone git@github.com:gopi2401/node.git
```

2. install dependences

```
npm i
```

3. sql database create (use any sql managing tool)

```
CREATE DATABASE IF NOT EXISTS my_db
```

4. project start

```
npm start
```

5. server running port `http://localhost:3000/`use the path `/api/v1` and `/users`

6. table creating query

```
CREATE TABLE IF NOT EXISTS users (
    id BIGINT UNSIGNED AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    created_at DATETIME NOT NULL,
    PRIMARY KEY (id)
);
```

and add data

```
insert into users (name, email,phone)
values('test','example@gmail.com','+91678901234');
```

## Dependences

- express.js
- mysql2
- cors

## Api endpoints

1. users get all records

`GET` `http://localhost:3000/api/v1/users`

Example output:-

```
{
    "data": [
        {
            "id": 1,
            "name": "test",
            "email": "new@gmail.com",
            "phone": "+912344555588",
            "created_at": "2024-10-24T06:49:59.000Z"
        },
        {
            "id": 2,
            "name": "test2",
            "email": "new@gmail.com",
            "phone": "+912344555588",
            "created_at": "2024-10-24T10:13:36.000Z"
        },
       ...
    ]
}

```

2. users get specific record use `id`

`GET` `http://localhost:3000/api/v1/users/:id`

Example output:-

```
{
    "data": [
         {
            "id": 2,
            "name": "test2",
            "email": "new@gmail.com",
            "phone": "+912344555588",
            "created_at": "2024-10-24T10:13:36.000Z"
        }
    ]
}
```

3. insert user record

`POST` `http://localhost:3000/api/v1/users`

Example input:-

```
{
    "name": "test",
    "email": "example@gmail.com",
    "phone": "+919876543210"
}
```

Example output:-

```
{
    "data": [
        {
            "id": 1,
            "name": "test",
            "email": "example@gmail.com",
            "phone": "+919876543210",
            "created_at": "2024-10-24T10:43:59.000Z"
        }
    ]
}
```

4. update specific record with `id`

`PUT` `http://localhost:3000/api/v1/users/:id`

Example input:-

```
{
    "name": "test",
    "email": "example@gmail.com",
    "phone": "+919876543210"
}
```

Example output:-

```
{
    "changes": 1,
    "data": [
        {
            "id": 7,
            "name": "test",
            "email": "example@gmail.com",
            "phone": "+919876543210",
            "created_at": "2024-10-24T10:43:59.000Z"
        }
    ]
}
```

5. delete user specific record with `id`

`DELETE` `http://localhost:3000/api/v1/users/:id`

Example output:-

```
{
    "message": "deleted record id 7"
}
```
