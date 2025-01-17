# tbdex-js

This repo contains 3 npm packages:
* [`@tbdex/protocol`](./packages/protocol/) - create, parse, verify, and validate the tbdex messages and resources defined in the [protocol draft specification](https://github.com/TBD54566975/tbdex-protocol/blob/main/README.md)
* [`@tbdex/http-client`](./packages/http-client) - An HTTP client that can be used to send tbdex messages to PFIs
* [`@tbdex/http-server`](./packages/http-server) - A configurable implementation of the [tbdex http api draft specification](https://github.com/TBD54566975/tbdex-protocol/blob/main/rest-api/README.md)

# Development

This multimodule repository uses `npm` workspaces. All commands are intended to be run from the root folder.

## Prerequisites
### `node` and `npm`
This project is using `node v20.3.0` and `npm v9.6.7`. You can verify your `node` and `npm` installation via the terminal:

```
$ node --version
v20.3.0
$ npm --version
9.6.7
```

If you don't have `node` installed. Feel free to choose whichever approach you feel the most comfortable with. If you don't have a preferred installation method, we recommend using `nvm` (aka [node version manager](https://github.com/nvm-sh/nvm)). `nvm` allows you to install and use different versions of node. It can be installed by running `brew install nvm` (assuming that you have homebrew)

Once you have installed `nvm`, install the desired node version with `nvm install vX.Y.Z`. After installation, you may run `nvm use` to automatically tell `nvm` which `node` version to use (this will be picked up from the target version noted in `.nvmrc`):

```
$> nvm use
Found '/Users/.../TBD54566975/tbdex-js/packages/protocol/.nvmrc' with version <v20.3.0>
Now using node v20.3.0 (npm v9.6.7)
```

## Running Tests
> [!NOTE]
> 
> Make sure you have all the [prerequisites](#prerequisites)

0. clone the repo and `cd` into the project directory
1. Install all project dependencies by `npm install` 
2. Build all workspace projects in this repo by running `npm run build`
3. run tests using `npm run test:node` to run tests within a nodejs runtime
4. run tests using `npm run test:browser` to run tests within a browser runtime. Before doing so, run `npx playwright install --with-deps`, only required once.

## `npm` scripts

| Script                 | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| `npm run clean`        | deletes `dist` dir and compiled tests                     |
| `npm run test:node`    | runs tests in node runtime                                |
| `npm run test:browser` | runs tests in headless browsers (chrome, safari, firefox) |
| `npm run lint`         | runs linter without auto-fixing                           |
| `npm run lint:fix`     | runs linter and applies automatic fixes wherever possible |
| `npm run build`        | builds all distributions and dumps them into `dist`       |