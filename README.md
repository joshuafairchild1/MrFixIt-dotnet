# Mr. Fix-It
##### A repair technician job service.
#### Joshua Fairchild, August 18th, 2017



Mr. Fix-It is a website that allows users to create accounts and post job listings for work that they would like completed. Existing users of the application can sign up to be a "Worker" for Mr. Fix-It, allowing them to claim jobs that they would like to complete. Workers may then mark a job as "Active", or "Complete".

This application was adapted from an existing project provided by Epicodus curriculum. The program had these features originally:
* Users can register and log on
* Users may sign up to be "workers" on the site.
* New jobs may be added to the jobs list.
* A worker can claim a job.
* A worker may take on multiple jobs from the Worker Dashboard.

I added the following functionality:
* A worker claiming a job is completed by an AJAX action.
* Workers may designate a job as "Active", once it has been claimed (via AJAX).
* Workers may designate a job as "Completed", once it has been claimed (via AJAX).
* Consistent, thoughtful styling created using Materialize CSS.
* Small bug/convention fixes.


## Prerequisites

You will need the following software properly installed on your computer.

* [Visual Studio 2015](https://www.visualstudio.com/vs/older-downloads/)
* [Microsoft SQL Server](https://www.microsoft.com/en-in/sql-server/sql-server-downloads)

## Installation/Database Setup

* Clone this repository.

  `$ git clone https://github.com/joshuafairchild1/MrFixIt-dotnet`

* Open MS SQL Server and establish a local connection.

* In Visual Studio, open and build the project.

* Run the following commands in PowerShell to generate the database:

  `$ cd .\src\MrFixIt\`

  `$ dotnet ef database update 20170818192949_FixWorkerModelTypo`

* You can now view the application by pressing Ctrl + F5 in Visual Studio, you will be navigated to the application in your web browser.


## Built With

* C#
* ASP.NET Core MVC
* Microsoft SQL Server
* Identity (C# framework)
* CSS
* Materialize (CSS library)

## License

This project is licensed under the MIT License

Copyright (c) Joshua Fairchild, 2017
