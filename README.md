# Galaxar server application template

## Install dependencies

```
pnpm i
```

## Start server

```
pnpm start
```

## Start server in dev mode

Server will be auto-restarted when code changes

```
pnpm dev
```

## Db modeling with prisma

[Refers to Prisma for schema syntax](https://www.prisma.io/docs/getting-started)

*. Update .env file for local db connection string
*. Update model definition in `prisma/schema.prisma`
*. Run `pnpm prisma db push` for incremental migration
*. Run `pnpm prisma db seed` for seeding initial data

## Server configuration

*. conf/server.default.json
*. conf/[server.development.json]
*. conf/[server.production.json]

## Try sample html endpoint

*. Start server
*. Open `http://localhost:2331`
*. Source code: `src/actions/home.js`

## Try sample REST api

*. Install the `REST Client` vscode extension
*. Send request directly in vscode through `test/http/bvt.http`
*. Source code: `src/resources/user.js`

