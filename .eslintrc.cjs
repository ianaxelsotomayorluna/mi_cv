module.exports = {
  extends: [
    "plugin:astro/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect", // Detecta automáticamente la versión de React
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
    project: ["./tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
  },
  overrides: [
    {
      files: ["*.tsx", "*.ts", "*.jsx", "*.js"], // Aplicar estas reglas solo a archivos JavaScript y TypeScript
      rules: {
        // Tus reglas específicas de React/JS/TS aquí
      },
    },
    {
      extends: ["plugin:astro/recommended"],
      files: ["*.astro"], // Configuración específica para archivos Astro
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
        ecmaVersion: 2020,
      },
      env: {
        "astro/astro": true,
        es2020: true,
      },
      rules: {
        // Tus reglas específicas de Astro aquí
        "react/react-in-jsx-scope": "off", // Desactivar reglas específicas de React para .astro
        "react/jsx-uses-react": "off", // Desactivar reglas específicas de React para .astro
        "react/jsx-uses-vars": "off", // Desactivar reglas específicas de React para .astro
        "react/no-unknown-property": "off",
        // Desactiva cualquier otra regla de React que no sea aplicable a .astro
        "prettier/prettier": "off",
      },
    },
  ],
  rules: {
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
      },
    ],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    // Otros ajustes de reglas globales aquí
  },
};
