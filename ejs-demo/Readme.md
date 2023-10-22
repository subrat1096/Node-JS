# Step 1 — Setting Up the Project

First, open your terminal window and create a new project directory:

    mkdir ejs-demo

Then, navigate to the newly created directory:

    cd ejs-demo

At this point, you can initialize a new npm project:

    npm init -y

Next, you will need to install the express package:

    npm install express@4.17.1

Then install the ejs package:

    npm install ejs@3.1.6

At this point, you have a new project ready to use Express and EJS.

# Step 1 — Configuring with server.js

With all of the dependencies installed, let’s configure the application to use EJS and set up the routes for the Index page and the About page.

Create a new server.js file and open it with your code editor and add the following lines of code:
server.js

var express = require('express');
var app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
res.render('pages/about');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

This code defines the application and listens on port 3000.

This code also sets EJS as the view engine for the Express application using:

`app.set('view engine', 'ejs');`

Notice how the code sends a view to the user by using res.render(). It is important to note that res.render() will look in a views folder for the view. So you only have to define pages/index since the full path is views/pages/index.

Next, you will create the views using EJS.

# Step 2 — Creating the EJS Partials

Like a lot of the applications you build, there will be a lot of code that is reused. These are considered partials. In this example, there will be three partials that will be reused on the Index page and About page: head.ejs, header.ejs, and footer.ejs. Let’s make those files now.

Create a new views directory:

    mkdir views

Then, create a new partials subdirectory:

    mkdir views/partials

In this directory, create a new head.ejs file and open it with your code editor. Add the following lines of code:
views/partials/head.ejs

<meta charset="UTF-8">
<title>EJS Is Fun</title>

<!-- CSS (load bootstrap from a CDN) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css">
<style>
  body { padding-top:50px; }
</style>

This code contains metadata for the head for an HTML document. It also includes Bootstrap styles.

Next, create a new header.ejs file and open it with your code editor. Add the following lines of code:
views/partials/header.ejs

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">EJS Is Fun</a>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about">About</a>
    </li>
  </ul>
</nav>

This code contains navigation for an HTML document and uses several classes from Bootstrap for styling.

Next, create a new footer.ejs file and open it with your code editor. Add the following lines of code:
views/partials/footer.ejs

<p class="text-center text-muted">&copy; Copyright 2020 The Awesome People</p>

This code contains copyright information and uses several classes from Bootstrap for styling.

Next, you will use these partials in index..ejs and about.ejs.

# Step 3 — Adding the EJS Partials to Views

You have three partials defined. Now you can include them in your views.

Use <%- include('RELATIVE/PATH/TO/FILE') %> to embed an EJS partial in another file.

    The hyphen <%- instead of just <% to tell EJS to render raw HTML.
    The path to the partial is relative to the current file.

Then, create a new pages subdirectory:

    mkdir views/pages

In this directory, create a new index.ejs file and open it with your code editor. Add the following lines of code:
views/pages/index.ejs

<!DOCTYPE html>
<html lang="en">
  <head>
    <%- include("../partials/head.ejs"); %>
  </head>
  <body>
    <div class="container-fluid mainContent">
      <header><%- include("../partials/header.ejs"); %></header>
      <main>
        <div class="jumbotron">
          <h1>This is great</h1>
          <p>Welcome to templating using EJS</p>
        </div>
      </main>
      <footer><%- include("../partials/footer.ejs"); %></footer>
    </div>
  </body>
</html>

Save the changes to this file and then run the application:

    node server.js

If you visit http://localhost:3000/ in a web browser, you can observe the Index page:

Next, create a new about.ejs file and open it with your code editor. Add the following lines of code:

<!DOCTYPE html>
<html lang="en">
  <head>
    <%- include("../partials/head.ejs"); %>
  </head>
  <body>
    <div class="container-fluid mainContent">
      <header>
        <%- include("../partials/header.ejs" , {variant: 'compact'}); %>
      </header>
      <main>
        <div class="row">
          <div class="col-sm-8">
            <div class="jumbotron">
              <h1>This is great</h1>
              <p>Welcome to templating using EJS</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="well">
              <h3>Look I'm A Sidebar!</h3>
            </div>
          </div>
        </div>
      </main>
      <footer><%- include("../partials/footer.ejs"); %></footer>
    </div>
  </body>
</html>

This code adds a Bootstrap sidebar to demonstrate how partials can be structured to reuse across different templates and pages.

Save the changes to this file and then run the application:

    node server.js

If you visit http://localhost:3000/about in a web browser, you can observe the About page with a sidebar:

Now you can start using EJS for passing data from the Node application to the views.
Step 4 — Passing Data to Views and Partials

Let’s define some basic variables and a list to pass to the Index page.

Revisit server.js in your code editor and add the following lines of code inside the app.get('/') route:

var express = require('express');
var app = express();
const port = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
var mascots = [
{ name: "Subrat", organization: "CodeXP", birth_year: 1991 },
{ name: "Piyush", organization: "Cardinal Health", birth_year: 1991 },
{ name: "Rajesh", organization: "Infosys", birth_year: 1991 },
];
var tagline =
"No programming concept is complete without a cute animal mascot.";

res.render("pages/index", {
mascots: mascots,
tagline: tagline,
});
});

// about page
app.get('/about', function(req, res) {
res.render('pages/about');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

This code defines an array called mascots and a string called tagline. Next, let’s use them in index.ejs.
Rendering a Single Variable in EJS

To echo a single variable, you can use <%= tagline %>.

Revisit index.ejs in your code editor and add the following lines of code:

<!DOCTYPE html>
<html lang="en">
  <head>
    <%- include("../partials/head.ejs"); %>
  </head>
  <body>
    <div class="container-fluid mainContent">
      <header><%- include("../partials/header.ejs"); %></header>
      <main>
        <div class="jumbotron">
          <h1>This is great</h1>
          <p>Welcome to templating using EJS</p>
          <h2>Variable</h2>
          <p><%= tagline %></p>
        </div>
      </main>
      <footer><%- include("../partials/footer.ejs"); %></footer>
    </div>
  </body>
</html>

This code will display the tagline value on the Index page.
Looping Over Data in EJS

To loop over data, you can use .forEach.

Revisit index.ejs in your code editor and add the following lines of code:

<!DOCTYPE html>
<html lang="en">
  <head>
    <%- include("../partials/head.ejs"); %>
  </head>
  <body>
    <div class="container-fluid mainContent">
      <header><%- include("../partials/header.ejs"); %></header>
      <main>
        <div class="jumbotron">
          <h1>This is great</h1>
          <p>Welcome to templating using EJS</p>
          <h2>Variable</h2>
          <p><%= tagline %></p>
          <ul>
            <% mascots.forEach(function(mascot) { %>
            <li>
              <strong><%= mascot.name %></strong>
              representing <%= mascot.organization %>, born <%=
              mascot.birth_year %>
            </li>
            <% }); %>
          </ul>
        </div>
      </main>
      <footer><%- include("../partials/footer.ejs"); %></footer>
    </div>
  </body>
</html>

Save the changes to this file and then run the application:

    node server.js

If you visit http://localhost:3000/ in a web browser, you can observe the Index page with the mascots:

Passing Data to a Partial in EJS

The EJS partial has access to all the same data as the parent view. But be careful. If you are referencing a variable in a partial, it needs to be defined in every view that uses the partial or it will throw an error.

You can also define and pass variables to an EJS partial in the include syntax like this:
views/pages/about.ejs

...

<header>
  <%- include('../partials/header', {variant: 'compact'}); %>
</header>
...

But you need to again be careful about assuming a variable has been defined.

If you want to reference a variable in a partial that may not always be defined, and give it a default value, you can do so like this:
views/partials/header.ejs

...
<em>Variant: <%= typeof variant != 'undefined' ? variant : 'default' %></em>
...

In the line above, the EJS code is rendering the value of variant if it’s defined, and default if not.
