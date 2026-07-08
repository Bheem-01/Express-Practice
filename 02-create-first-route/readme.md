Whenever you build an Express app, think in 5 steps:

Import Express → Bring the Express library.

Create App → Create your web application.

Choose a Port → Decide where the server will run.

Start the Server → Begin listening for requests.

Create Routes → Decide what happens when users visit URLs.


===========================ExecutionFlow======================

1. Node.js starts executing the file.
        ↓
2. Express is imported using require().
        ↓
3. An Express application is created using express().
        ↓
4. A port number (3000) is assigned.
        ↓
5. app.listen() starts the server and waits for incoming requests.
        ↓
6. The Home Route ("/") is registered with Express.
        ↓
7. A client visits http://localhost:3000.
        ↓
8. Express matches the "/" route.
        ↓
9. The callback function is executed.
        ↓
10. res.send() sends the response to the browser.
        ↓
11. The browser displays:
    "Welcome to my first Express application"