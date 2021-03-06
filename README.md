# Awesome Game Template

This template comes pre-initialized with Webpack configurations for development
and production, CSS bundling, Babel, React, Jest, and a WebGL game structure.
Also included is a skeleton that you can adapt to your own 

## Get Started

    git clone https://github.com/snordgren/awesome-game-template.git my-new-project
    cd my-new-project && npm install

To customize the template, replace awesome-game-template with the name of your own
project in package.json and webpack.common.js.

## Built-in scripts
The template includes a set of NPM scripts for managing development. To build the 
development version of the project, use `npm run build` or `npm run build-watch` to
have it watch your files while you develop. When you're ready to produce a minified
production build, use `npm run build-release`.

The template also has a pre-commit hook managed using Husky, which ensures that the
`index.html`, `bundle.min.js`, and `bundle.css` files are generated and committed; 
this makes it possible to serve the game from a static host straight out of the 
Git repository.
