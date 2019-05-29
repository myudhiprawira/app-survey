# app-survey
Backup git repo for my 2359 Media back-end test. Built using node JS.

Dependencies:

    cookie-parser: ~1.4.4,
    debug: ~2.6.9,
    express: ~4.16.1,
    http-errors: ~1.6.3,
    morgan: ~1.9.1,
    mysql2: ^1.6.5,
    nodemon: ^1.19.1,
    pug: ^2.0.3,
    sequelize: ^5.8.6
    
How to run:

1. clone this repo,
2. input "npm install" without the quote mark in the terminal working in the cloned repo directory,
3. edit your database credentials in config/config.json,
4. input "sequelize db:migrate", without the quotation mark, and make sure your nysql server is running,
5. input "npm start", the server will listen to your localhost on port 3000.


API files created and used in this project:

1. routes/surveys.js,
2. routes/questions.js,
3. routes/submissions.js.

I have added my development database just in case in /db_dump .
