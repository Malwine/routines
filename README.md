# Routines

A lightweight app to track routines such as fitness workouts.

## Versions

### V1

- [x] Initialize project
- [x] Create [app design in Figma](https://www.figma.com/file/0P9jKFJoGaWL2kz5Le4fY1/Fitness-Routines?type=design&node-id=0%3A1&mode=design&t=H40qrGNbU17FIl0r-1)
- [ ] Add views
- [ ] Use Tailwind
- [ ] Insert example data
- [ ] Deploy on Vercel

### V2

- [ ] Tracking a hard-coded routine (start and end)

### V3

- [ ] Track which exercises have been completed

### V4

- [ ] Track detailed exercises with repetition or minutes
- [ ] Toggle exercise card

### V5

- [ ] Add CRUD functionality for routines, exercises and sets

### V6

- [ ] Implement offline usage

### V7

- [ ] Testing

### V8

- [ ] Use express.js and a database to store data persistently

## Further information

### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
