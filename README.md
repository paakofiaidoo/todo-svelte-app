# Todo svelte app

this is a basic todo-application built in the svelte framework


## Get started
if using yarn
```bash
git clone https://github.com/paakofiaidoo/todo-svelte-app
cd svelte-app
yarn
yarn dev
```

if using npm
```bash
git clone 
cd svelte-app
npm install
npm run dev
```


*Note that you will need to have [Node.js](https://nodejs.org) installed.*

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.


If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

``


To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```