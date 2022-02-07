# Azure Static Web Apps Template

A web application example using Vite, React, TypeScript, GraphQL and hosted on Azure Static Web Apps.

You can see the running app here: https://green-island-0e0ec2900.azurestaticapps.net/.

This app uses:

- [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React](https://ja.reactjs.org/)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server)
- [GraphQL Code Generator](https://www.graphql-code-generator.com/)
- [React Query](https://react-query.tanstack.com/)
- [React Router](https://reactrouter.com/)
- [Chakra UI](https://chakra-ui.com/)

## Setup

Run the following command.

```sh
dev/setup
```

You can set environment variables read from Azure Functions in [`local.settings.json`](https://docs.microsoft.com/en-US/azure/azure-functions/functions-develop-vs?tabs=in-process#local-settings). Copy and edit the file as the following command.

```sh
cp api/local.settings.json.example api/local.settings.json
```

### Recommended

Useful VS Code extension for developing Azure Static Web Apps: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps

## Run

The following command will start both API and frontend application.

```sh
dev/start
```

- You can open http://localhost:4280/ in your browser.
- `dev/start` runs also `graphql-codegen --watch` to generate GraphQL types implementations when you modify GraphQL schema.
- Frontend app hot-reloads by Vite dev server and API app restarts by nodemon when the code generation occurs or you modify some codes.

### API only

Run only API app by the following command.

```sh
cd api
yarn dev
```

- Open http://localhost:7071/api/graphql in your browser to launch GraphQL Playground.
- API app restarts by `nodemon` when you modify some codes.

## Deploy

Example app: https://green-island-0e0ec2900.azurestaticapps.net/

You can deploy your own app as Azure Static Web Apps.

1. Clone this repository, run setup, and remove `.github` directory including an example azure app info.
1. Create Azure Static Web App. See https://docs.microsoft.com/en-US/azure/static-web-apps/getting-started?tabs=vanilla-javascript.
    - Specify `/` as an app location and `dist` as an output location.
1. Auto-generated GitHub Actions deploy this app when codes are pushed to `main` branch 🚀

# LICENSE

MIT
