// Database configuration
var dbConfig = {
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
};

// Function to add a new project to the database
function addProject(projectName, projectDescription) {
    // Code to connect to the database and execute an INSERT query
    // Example using MySQL:
    var mysql = require('mysql');
    var connection = mysql.createConnection(dbConfig);

    var sql = 'INSERT INTO projects (name, description) VALUES (?, ?)';
    var values = [projectName, projectDescription];

    connection.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log('New project added successfully');
        connection.end();
    });
}

// Function to delete a project from the database
function deleteProject(projectId) {
    // Code to connect to the database and execute a DELETE query
    // Example using MySQL:
    var mysql = require('mysql');
    var connection = mysql.createConnection(dbConfig);

    var sql = 'DELETE FROM projects WHERE id = ?';
    var values = [projectId];

    connection.query(sql, values, function (err, result) {
        if (err) throw err;
        console.log('Project deleted successfully');
        connection.end();
    });
}

// Function to fetch projects from the database
function fetchProjects() {
    // Code to connect to the database and execute a SELECT query
    // Example using MySQL:
    var mysql = require('mysql');
    var connection = mysql.createConnection(dbConfig);

    var sql = 'SELECT * FROM projects';

    connection.query(sql, function (err, results) {
        if (err) throw err;
        projects = results;
        renderProjects();
        connection.end();
    });
}
