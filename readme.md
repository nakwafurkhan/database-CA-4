# how to run it locally 

1. *npm i* 

2. *make a env file*
    - make two variables 
        - PORT = 5000
        - MONGODB_URI= "your mongodb link"

3. *use api tester (e.g.Thuner client , bruno ,postman)*
    - **Endports**
        - http://localhost:5000//users
            - post
            - {
                 "username": "furkhan123",
                 "email": "furkhan@kalvium.community",
                 "password": "secret123"
              }
        - http://localhost:5000/
            - post
            - {
                  "title": "Study DSA",
                  "description": "Focus on linked lists and trees",
                  "status": "pending",
                  "userId": "PUT_USER_ID_HERE"
              }
        - http://localhost:5000//tasks/:userId
            - get




