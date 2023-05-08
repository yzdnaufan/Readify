# This is API documentation for Bookshelf Project

## Table of Contents

- [Base URL](#base-url)
- [Admin API Endpoint](#admin-api-endpoint-need-authentication)
  - [GET `/user`](#get-user)
  - [GET `/user/[id]`](#get-userid)
  - [POST `/books`](#post-books)
  - [PUT `/books/[book_id]`](#put-booksbook_id)
  - [DELETE `/books/[book_id]`](#delete-booksbook_id)
- [User API Endpoint](#user-api-endpoint)

//TODO : add user API endpoint
- [ERROR CODE](#error-code)



## Base URL

>`https://{deployment-url}/api/v1/`

this API will be divided into 2 section, which is for admin API and for general user API

-----

## Admin API Endpoint (Need Authentication)

-----

### GET `/user`

this will return all user with their encrypted password and their data.

Date created is using <mark>ISO format (YYYY-MM-DDT00:00:00.0000Z)</mark>, for more information about this please visit official javascript documentation.

request :

```query
    GET /user
```

response(200 OK) :

```json
    {    
        {
            "id":"12309124dqw091jfe0"
            "username":"Andi",
            "location":"Sleman, Yogyakarta"
            "email":"andi@example.com",
            "password":"$2a$12$CdFxPDis4W8hU/D8iykK0uo347DL3J2kHVbZXGqlzPJF2e7vJ8Ffq",
            "book_list":"1,201,30,40",
            "createdAt":"2011-10-05T14:48:00.000Z"
        },
        {
            "id":"asdlm1123kjna2002"
            "username":"Ita",
            "location":"Cilacap, Jawa Tengah"
            "email":"ita@example.com",
            "password":"$2a$12$l5C658xFWPT5G1SserRPOu6b7qDJCJMWaExfVkVC4WDyV3wYRa65u",
            "book_list":"3,221,10",
            "createdAt":"2011-10-11T14:48:00.000Z"
        },
    }
```

error :

```json
    {
        "errorCode": "404",
        "errorMessage": "User not found"
    }
```

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```

### GET `/user/[id]`

this will return user by selected `[id]`

Date created is using <mark>ISO format (YYYY-MM-DDT00:00:00.0000Z)</mark>, for more information about this please visit official javascript documentation.

request :

```query
    GET /user/[id]
```

response :

```json
    {
            "id":"12309124dqw091jfe0"
            "username":"Andi",
            "location":"Sleman, Yogyakarta"
            "email":"andi@example.com",
            "password":"$2a$12$CdFxPDis4W8hU/D8iykK0uo347DL3J2kHVbZXGqlzPJF2e7vJ8Ffq",
            "book_list":"1,201,30,40",
            "createdAt":"2011-10-05T14:48:00.000Z"
    }
```

error :

```json
    {
        "errorCode": "404",
        "errorMessage": "User not found"
    }
```

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```


### POST `/books`

this will upload a books to the server. Details :

|attributes|description|
|-----|-----|
|book_id|refer to book_id at goodreads.com, this should in `int`|
|image_url|could be any image URL for book covers, as long as it is not a temporary URL|

request :

```json
    POST /books
    host : {deployment}
    Content-Type : application/json
    Accept : application/json
    Accept-Charset : utf-8
    body :
    {
        "original_title":"50 Shades of Grey",
        "book_id":"10818853",
        "isbn":"9781612130293",
        "authors": "E.L. James",
        "original_publication_year":"2011",
        "language-code":"en-US",
        "image_url":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385207843i/10818853.jpg"
    }
```

response :

```json
    {
            "statusCode":"202"
            "statusMessage":"Data inputed"
    }
```

error :

```json
    {
        "errorCode": "401",
        "errorMessage": "Mohon isi {field yang kosong}"
    }
```

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```
### PUT `/books/[book_id]`

this will edit a books to the server. Details :

|attributes|description|
|-----|-----|
|book_id|refer to book_id at goodreads.com, this should in `int`|
|image_url|could be any image URL for book covers, as long as it is not a temporary URL|

request :

```json
    PUT /books/[book_id]
    host : {deployment}
    Content-Type : application/json
    Accept : application/json
    Accept-Charset : utf-8
    body :
    {
        "original_title":"50 Shades of Grey",
        "book_id":"10818853",
        "isbn":"9781612130293",
        "authors": "E.L. James",
        "original_publication_year":"2011",
        "language-code":"en-US",
        "image_url":"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1385207843i/10818853.jpg"
    }
```

response :

```json
    {
            "statusCode":"202"
            "statusMessage":"Data inputed"
    }
```

error :

```json
    {
        "errorCode": "401",
        "errorMessage": "Mohon isi {field yang kosong}"
    }
```

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```

### DELETE `/books/[book_id]`

this will delete a books to the server. Details :

|attributes|description|
|-----|-----|
|book_id|refer to book_id at goodreads.com, this should in `int`|

request :

```json
    DELETE /books/[book_id]
    host : {deployment}
    Content-Type : application/json
    Accept : application/json
    Accept-Charset : utf-8
```

response :

```json
    {
            "statusCode":"202"
            "statusMessage":"Data deleted"
    }
```

error :

```json
    {
        "errorCode": "401",
        "errorMessage": "Please provide books_id"
    }
```

```json
    {
        "errorCode": "403",
        "errorMessage": "Unauthorized Access"
    }
```

-----

except for given methods above, default response for any other method is :

```json
    {
        "errorCode": "405",
        "errorMessage": "Method not permitted"
    }
```


-----

## General User API Endpoints

-----

### POST `/register/user/`

request :

    this is req

response :

    asdasd

error :

    asdasda

### POST `/login`

request :

    this is req

response :

    asdasd

error :

    asdasda

### GET `/recommendation`

request :

    this is req

response :

    asdasd

error :

    asdasda

### GET `/books`

request :

    this is req

response :

    asdasd

error :

    asdasda

### GET `/books/[id]`

request :

    this is req

response :

    asdasd

error :

    asdasda

### GET `/books/content/[id]`

request :

    this is req

response :

    asdasd

error :

    asdasda

### POST Reading List book(s) by `[id]`

request :

    this is req

response :

    asdasd

error :

    asdasda

### PUT/EDIT Reading List Book(s) by `[id]`

request :

    this is req

response :

    asdasd

error :

    asdasda

### DELETE Reading List Book(s) by `[id]`

request :

    this is req

response :

    asdasd

error :

    asdasda

## DELETE