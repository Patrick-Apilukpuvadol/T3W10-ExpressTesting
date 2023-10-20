// This where we run the server

const {app, PORT, HOST} = require('./server');

app.listen(HOST, PORT, () => {
    console.log("Server running on port: " + PORT);
});