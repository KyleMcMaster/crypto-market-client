# Payroll Processor

Sample HRIS application where a list of employees and their payroll information would be available in report format.

<p>
  <a href="https://github.com/KyleMcMaster/payroll-processor/graphs/contributors" alt="Contributors">
  <img src="https://img.shields.io/github/contributors/KyleMcMaster/payroll-processor" /></a>

  <a href="https://github.com/KyleMcMaster/payroll-processor/stargazers" alt="Stars">
  <img src="https://img.shields.io/github/stars/KyleMcMaster/payroll-processor" /></a>

  <a href="https://github.com/KyleMcMaster/payroll-processor/issues" alt="Issues">
  <img src="https://img.shields.io/github/issues/KyleMcMaster/payroll-processor" /></a>

  <a href="https://github.com/KyleMcMaster/payroll-processor/blob/master/LICENSE" alt="License">
  <img src="https://img.shields.io/github/license/KyleMcMaster/payroll-processor" /></a>
</p>

![Twitter Follow](https://img.shields.io/twitter/follow/kylemcmaster?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/seangwright?style=social)

<img src="https://shields.io/endpoint?url=https://prod-nimble-metrics-appservice.azurewebsites.net/api/badge/kylemcmaster/payroll-processor"/>

## Status of this Repository

This project was started as an exploration into various technologies and approaches that the contributors had been meaning to try but weren't able to exercise in their employer's production code. The effort and success this project achieved was a labor of love and will forever hold fond memories in my (@KyleMcMaster's) heart as a catalyst for learning and growth that had an impactful experience on my career. Since 2022 or so, development on this project has become stale and the primary contributors have all taken interest in other technologies and problems that aren't represented within the space of this sample application. You can follow my latest development efforts over at [FShopOnWeb](https://github.com/NitroDevs/FShopOnWeb) I hope this code can continue to be a reference for anyone interested in the patterns and principles applied here.

## Build status

### Api and Functions

![dotnet core - build & test](https://github.com/KyleMcMaster/payroll-processor/workflows/dotnet%20core%20-%20build%20&%20test/badge.svg)

### Client

![.github/workflows/policy-npm.yml](https://github.com/KyleMcMaster/payroll-processor/workflows/client%20-%20build%20&%20test/badge.svg)
[![Styled with Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io)

## Motivation

This project was created to explore a variety of technologies, patterns, and frameworks in a sandbox style environment.
The fictional domain of the application is designed be restrictive enough to mimic a real world application while
also allowing creative and technical freedom for the developers involved.

Areas of interest:

- Functional Programming
- Automated Tests
- Basics of Angular, TypeScript, Rxjs, and Bootstrap
- Synergy that exists between Azure Functions and .NET Core Web APIs
- Event Sourcing and CQRS
- Having fun!

## Roadmap

### MVP

- [x] Employee and Payroll CRUD functionality representing a simple workflow for the domain
- [x] Administration screen for seeding data

### Future Enhancements

- Analytics like payroll totals by department, risk, and time
- Integrate Cosmos Db change feed
- Handle poison queue messages
- Add helpful notifications from SignalR messages
- Configure Tye app orchestrations

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/KyleMcMaster"><img src="https://avatars1.githubusercontent.com/u/11415127?v=4" width="100px;" alt=""/><br /><sub><b>Kyle McMaster</b></sub></a><br /><a href="#design-KyleMcMaster" title="Design">🎨</a> <a href="https://github.com/KyleMcMaster/payroll-processor/commits?author=KyleMcMaster" title="Code">💻</a> <a href="https://github.com/KyleMcMaster/payroll-processor/commits?author=KyleMcMaster" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://www.seangwright.me"><img src="https://avatars3.githubusercontent.com/u/1382768?v=4" width="100px;" alt=""/><br /><sub><b>Sean G. Wright</b></sub></a><br /><a href="#design-seangwright" title="Design">🎨</a> <a href="https://github.com/KyleMcMaster/payroll-processor/commits?author=seangwright" title="Code">💻</a> <a href="https://github.com/KyleMcMaster/payroll-processor/pulls?q=is%3Apr+reviewed-by%3Aseangwright" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://conklin.dev"><img src="https://avatars2.githubusercontent.com/u/2951907?v=4" width="100px;" alt=""/><br /><sub><b>Justin Conklin</b></sub></a><br /><a href="https://github.com/KyleMcMaster/payroll-processor/pulls?q=is%3Apr+reviewed-by%3Aeyev" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/KyleMcMaster/payroll-processor/commits?author=eyev" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Star History ⭐

<a href="https://star-history.com/#kylemcmaster/payroll-processor&Date">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=kylemcmaster/payroll-processor&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=kylemcmaster/payroll-processor&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=kylemcmaster/payroll-processor&type=Date" />
  </picture>
</a>


## Project Structure

api/ - .NET API and Azure Functions backend

client/ - Main view of the application built with Angular and Boostrap

vue-client/ - Alternate view of the Admin page built with Vue3 and Tailwind CSS

## References

[Akita-Demo](https://github.com/seangwright/akita-demo)

## Build / Run

This project uses VS Code [Multi-root Workspaces](https://code.visualstudio.com/docs/editor/multi-root-workspaces).
For the best developer experience, open the workspace directly with VS Code (`code payroll-processor.code-workspace`)
or open the root of the repository in VS Code (`code .`) and when prompted, open the workspace.

### API

The API solution (`PayrollProcessor.sln`) is set up as the default solution
for [Omnisharp](https://github.com/OmniSharp/omnisharp-vscode), and is loaded as soon as the
VS Code workspace is opened.

All of the backend .NET code is found in the `/api` folder.

This solution contains 2 applications `PayrollProcessor.Functions.Api` and `PayrollProcess.Web.Api`
This solution also contains multiple shared libraries and test projects.

There are VS Code tasks (Clean, Build, Test) at the solution and the individual application project level.

#### PayrollProcess.Web.Api

Currently there are no application secrets or app settings to customize for the Web API.
However, settings for the application can be found in `appsettings.Development.json` and `appsettings.json`.

To run the Web API run the following launch configuration (Debug: Select and Start Debugging)

- API: Run and Attach (Debug)

The application will start and listen for requests on [http://localhost:5000](http://localhost:5000).

#### PayrollProcessor.Functions.Api

- Ensure the [Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions)
  VS Code extension is installed.

- Run "Azure Functions: Install or Update Azure Functions Core Tools" from the command palette.

- [Update Powershell security policy](https://github.com/Azure/azure-functions-core-tools/issues/1821#issuecomment-586925919)

- Start the Azure Storage Emulator and Azure Cosmos Db Emulator (see: Data Storage below)

- Copy

  `api/PayrollProcessor.Functions.Api/local.settings.json.sample`

  to

  `api/PayrollProcessor.Functions.Api/local.settings.json`

- F5 or run from the VS Code Debug drop down "Function: Run & Attach (Debug)"

- Optional: Run any of the following tasks (Task: Run Task)

  - Function: Test
  - Function: Build (Debug)

- Optional: Run any of the following launch configurations (Debug: Select and Start Debugging)

  - Function: Run & Attach (Debug)

The application will listen for requests on [http://localhost:7071](http://localhost:7071).

### Angular Client

- Copy

  `client/src/environments/environment.local.sample.ts`

  to

  `client/src/environments/environment.local.ts`

- Run the "Client: Serve" VS Code task (this will install packages and start serving the app)

## Data Storage

The project currently stores data in Azure Table Storage, which can be simulated locally using the [Azurite](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azurite?tabs=visual-studio).

The locally stored data can be viewed using the [Azure Storage Explorer](https://azure.microsoft.com/en-us/features/storage-explorer/).

This project also uses the [Azure Cosmos Db Emulator](https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator)
which can be downloaded at [https://aka.ms/cosmosdb-emulator](https://aka.ms/cosmosdb-emulator)

> Note: There is a [Linux/MacOS emulator](https://github.com/zeit/cosmosdb-server) available as well

### Data Initialization / Seeding

#### Create Collections / Queues

For performing any of the following operations ensure the following:

- The Azure Storage Emulator & Azure Cosmos DB Emulator are running
- The functions API project (see: `PayrollProcessor.Functions.Api` above) is running

To initialize the data storage structure (a few tables and a queue):

- Make a POST request to `http://localhost:7071/api/resources/`
- Optional: Use `Create Resources` request in `/docs/PayrollProcessor.postman_collection.json` [Postman](https://www.postman.com/) collection

The creation process will skip any resources that already exist.

#### Create Seed Data

There is also an endpoint to initialize randomly generated data in the data storage:

- Make a POST request to `http://localhost:7071/api/resources/data`
  - There are 2 optional query parameters
    - `employeesCount`: Sets the number of employees created by the request
    - `payrollsMaxCount`: Sets the maximum number of payrolls created for each employee (random value 1-max)
- Optional: Use `Create Seed Data` request in `/docs/PayrollProcessor.postman_collection.json` [Postman](https://www.postman.com/) collection

#### Reset Collections / Queues and Data

Finally, there's an endpoint to clear/reset all the data currently in the app.
This can be useful if you are changing schemas and don't want to write migrations.

- Make a DELETE request to `http://localhost:7071/api/resources`
- Optional: Use `Delete Resources` request in `/docs/PayrollProcessor.postman_collection.json` [Postman](https://www.postman.com/) collection
