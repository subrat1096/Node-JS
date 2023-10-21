The package.json file is the heart of Node.js system. It is the manifest file of any Node.js project and contains the metadata of the project. The package.json file is the essential part to understand, learn and work with the Node.js. It is the first step to learn about development in Node.js.
What does package.json file consist of?

# The package.json file contains the metadata information. This metadata information in package.json file can be categorized into below categories.

    Identifying metadata properties: It basically consist of the properties to identify the module/project such as the name of the project, current version of the module, license, author of the project, description about the project etc.

    Functional metadata properties: As the name suggests, it consists of the functional values/properties of the project/module such as the entry/starting point of the module, dependencies in project, scripts being used, repository links of Node project etc.

# Create a package.json file: A package.json file can be created in two ways.

    Using npm init: Running this command, system expects user to fill the vital information required as discussed above. It provides users with default values which are editable by the user.
    Syntax:

    npm init

    Writing directly to file : One can directly write into file with all the required information and can include it in the Node project.

Example: A demo package.json file with the required information.

{
"name": "GeeksForGeeks",
"version": "1.0.0",
"description": "GeeksForGeeks",
"main": "index.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "node start.js",
},
"engines": {
"node": ">=7.6.0",
"npm": ">=4.1.2"
},
"author": "GeeksForGeeks",
"license": "ISC",
"dependencies": {
"body-parser": "^1.17.1",
"express": "^4.15.2",
"express-validator": "^3.1.2",
"mongoose": "^4.8.7",
"nodemon": "^1.14.12",
},
"devDependencies": {},
"repository": {
"type": "git",
"url": "https://github.com/gfg/gfg.git" //sample git repo url
},
"bugs": {
"url": "https://github.com/gfg/gfg/issues"
},
"homepage": "https://github.com/gfg/gfg#readme"
}


Explanation:

    name: The name of the application/project.
    version: The version of application. The version should follow semantic versioning rules.
    description: The description about the application, purpose of the application, technology used like React, MongoDB, etc.
    main: This is the entry/starting point of the app. It specifies the main file of the application that triggers when the application starts. Application can be started using npm start.
    scripts: The scripts which needs to be included in the application to run properly.
    engines: The versions of the node and npm used. These versions are specified in case the application is deployed on cloud like heroku or google-cloud.
    keywords: It specifies the array of strings that characterizes the application.
    author: It consist of the information about the author like name, email and other author related information.
    license: The license to which the application confirms are mentioned in this key-value pair.
    dependencies: The third party package or modules installed using.
    npm: are specified in this segment.
    devDependencies: The dependencies that are used only in the development part of the application are specified in this segment. These dependencies do not get rolled out when the application is in production stage.
    repository: It contain the information about the type and url of the repository where the code of the application lives is mentioned here in this segment.
    bugs: The url and email where the bugs in the application should be reported are mentioned in this segment.

        Note: Here, “body-parser”, “express”, “express-validator”, “mongoose” and “nodemon” are the modules/packages installed using npm (Node Package Manager).

Below is how a typical package.lock.json file looks,

{
    "name": "Your project name",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "requires": true,
    "dependencies": {
        "dependency1": {
            "version": "1.4.0",
            "resolved": 
"https://registry.npmjs.org/dependency1/-/dependency1-1.4.0.tgz",
            "integrity": 
"sha512-a+UqTh4kgZg/SlGvfbzDHpgRu7AAQOmmqRHJnxhRZICKFUT91brVhNNt58CMWU9PsBbv3PDCZUHbVxuDiH2mtA=="
        },
        "dependency2": {
            "version": "1.5.2",
            "resolved": 
"https://registry.npmjs.org/dependency2/-/dependency2-1.5.2.tgz",
            "integrity": 
"sha512-WOn21V8AhyE1QqVfPIVxe3tupJacq1xGkPTB4iagT6o+P2cAgEOOwIxMftr4+ZCTI6d551ij9j61DFr0nsP2uQ=="
        }
    }
}

Below are the main differences between the two,

package.json
    It contains basic information about the project.
    It is mandatory for every project.
    It records important metadata about the project.
    It contains information such as name, description, author, script, and dependencies.

package.lock.json
 	It describes the exact tree that was generated to allow subsequent installs to have the identical tree.
 	It is automatically generated for those operations where npm modifies either node_modules tree or package.json.
 	It allows future devs to install the same dependencies in the project.
 	It contains the name, dependencies, and locked version of the project. 
