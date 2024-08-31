# Description

Full stack practice

## Structure

```bash
project-root
├── api
└──　client
```

## Development

### Setup

#### Server

```bash
$ cd api
```

and `console-ninja node --watch app.js` or `nodemon app.js`

```bash
$ node app.js
```

```bash
$ nodemon app.js
```

```bash
$ console-ninja node --watch app.js
```

---

### ERD

```mermaid
erDiagram
    user {
        String  id PK
        String  username
        String  email
        String  avatar
        Date    createdAt
    }

    post {
        String      id PK
        String      userId
        String      title
        Int         price
        String[]    images
        String      address
        String      city
        Int         bedroom
        String      latitude
        String      longitude
        String      type
        String      property
        Date        createdAt
    }

    user ||--o{ post : ""

    postDetail {
        String      id PK
        String      postId
        String      desc
        String      utilities
        String      pet
        String      income
        Int         size
        Int         school
        Int         bus
        Int         restaurant
    }

    post ||--|| postDetail : ""

    savePost {
        String      id PK
        String      userId
        String      postId
        Date        createdAt
    }

    user ||--o{ savePost : ""
    post ||--o{ savePost : ""

    chat {
        String      id PK
        String[]    userIds
        String[]    seenBy
        String      lastMessage
        Date        createdAt
    }

    user ||--o{ chat : ""

    message {
        String      id PK
        String      userId
        String      chatId
        Date        createdAt
    }

    chat ||--o{ message: ""

```
