module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nombre de tus componentes? (ex: Home, Products, Blog)',
      },
      {
        type: 'input',
        name: 'url',
        message: 'Nombre de la url omitiendo "/" inicial o final? (ex: products = /productos | blog/top-recomendaciones = /blog/top-recomendaciones )',
      },
    ],
    actions: () => {
      const pageTemplate = {
        type: 'add',
        path: '../src/pages/{{url}}.astro',
        templateFile: `templates/pages/page.astro.hbs`,
      };

      const containerTemplate = {
        type: 'add',
        path: '../src/containers/{{pascalCase name}}/{{pascalCase name}}Content.astro',
        templateFile: `templates/pages/content.astro.hbs`,
      };

      const stylesTemplate = {
        type: 'add',
        path: '../src/containers/{{pascalCase name}}/{{pascalCase name}}Content.module.scss',
        templateFile: `templates/pages/content.module.scss.hbs`,
      };

      const headTemplate = {
        type: 'add',
        path: '../src/containers/{{pascalCase name}}/{{pascalCase name}}Head.astro',
        templateFile: `templates/pages/head.astro.hbs`,
      };

      const actions = [pageTemplate, containerTemplate, stylesTemplate, headTemplate];

      return actions;
    },
  });
};
