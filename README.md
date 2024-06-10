#  Timestamp microservice

User stories :

1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)

        /December%2015,%202015

    <!-- -->

        /1450137600

2. If it does, it returns both the Unix timestamp and the natural language form of that date.

         { "unix": 1450137600, "natural": "December 15, 2015" } 

3. If it does not contain a date or Unix timestamp, it returns null for those properties.

        { "unix": null, "natural": null }

https://timestamp-ms.herokuapp.com/

## Run

```
npm install
npm start
```

Go to localhost:8080

## Deploy on Netlify

* Test serverless serving is working

  ``` bash
  npm install netlify-cli -g
  # npm add netlify-lambda serverless-http

  netlify dev
  ```

  Go to http://localhost:8888

* Login to netlify

  ``` bash
  netlify-cli init
  ```

* Deploy draft

  ``` bash
  netlify deploy
  ```

* Deploy

  ``` bash
  netlify deploy --prod
  ```
