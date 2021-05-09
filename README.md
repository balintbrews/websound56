# WebSound56

[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Experimental JavaScript library for playing sound loops mapped to scroll
positions of a web page.

🔗 [Demo: https://websound56.benleavez.com](https://websound56.benleavez.com)

**Concept and sound design by
[Bence Csontos a.k.a Ben Leavez](https://benleavez.com).**

## Usage

1. Upload sound loop files to the `assets` folder.

2. Edit the `src/config.json` file to reference the uploaded files and set up
   loop segments.

3. To integrate into your website add the following `<script>` tag to the
   `<head>` or before the closing tag of your `<body>`:

```
<script defer="defer" src="https://websound56.benleavez.com/app.js"></script>
```

## Development

Changes pushed to the `main` branch are automatically built and deployed to
GitHub Pages published at
[https://websound56.benleavez.com](https://websound56.benleavez.com). Automation
is handled by GitHub Actions (see
[workflow file](https://github.com/balintk/websound56/blob/main/.github/workflows/deploy.yml)).

The following scripts are available for development.

| Command                | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| `npm run start`        | Start a web server for local development with live-reload. |
| `npm run build`        | Build artifacts for distribution.                          |
| `npm run lint`         | Lint codebase with ESLint and Prettier.                    |
| `npm run lint-fix`     | Attempt to fix lint and formatting errors.                 |
| `npm run format`       | Format non-JS files. (JS is handled by `lint`.)            |
| `npm run format-check` | Check formatting of non-JS files.                          |
