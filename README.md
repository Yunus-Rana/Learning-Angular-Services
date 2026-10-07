# Services

A small Angular application demonstrating how an injectable service can provide in-memory product data to a responsive tech accessories catalog. Product data is loaded when you select **Load products**.

## Requirements

- Node.js and npm

## Development server

Install dependencies and start the local development server:

```bash
npm install
npm start
```

Open `http://localhost:4200/`. The app automatically reloads when source files change.

## Product data

The `ProductService` in `src/app/services/product-service.ts` returns products with an ID, name, and price. Edit its seeded array to update the catalog. Prices are displayed in Indian rupees.

## Build

```bash
npm run build
```

Build output is written to `dist/`.

## Unit tests

```bash
npm test
```

Tests use Vitest through the Angular CLI.

## Further reading

For Angular CLI commands and features, see the [Angular CLI documentation](https://angular.dev/tools/cli).
