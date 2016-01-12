
# Envrionment Setup

Install node.js with which npm will come prepackaged: https://nodejs.org/en/

Install npm packages.
```
$ npm install
```
Run the app.
```
$ npm run watch
```

This will run the webpack development server.

Open `http://localhost:8080`.

# Development
Make a new branch. Name your branch the name of your new intended feature, prefixed with your initials and a slash.
```
$ git checkout -b nz/my-new-feature
```

Make your changes. `commit` frequently. `git add`'s `-p` option is encouraged (interactive add). Commit messages should be in the imperative present tense.
```
$ git add -p
...
$ git add ./stuff/morestuff/my-untracked-file
...
$ git commit -m "Implement my new WORKING sub-feature-1"
...
$ git commit -m "Implement my new WORKING sub-feature-2"
...
$ git commit -m "Implement my new WORKING sub-feature-3"
```

Test. jk, we don't have testing yet.

```
$ gulp test
```

Fix your mistakes. Test again.
```
$ gulp test
```

When finished, push to a NEW branch on github.
```
$ git push -u origin js/my-new-feature
```

Make a pull request, tag someone in a comment or poke someone on slack for review. Merge and delete branch when done.




# Dependencies
*Npm* manages the packages.

The client is built with *webpack*.

The code uses ECMAScript 2015 (ES6) syntax which is compiled with *babel*.

The client is written primarily in *React.js*.

The (pseudo) FLUX Architecture is managed with *Redux*.

Routing is managed with *react-router* (along with redux-simple-router).

*Parse* is used to make calls to the Parse backend.

An (unused) eslint configuration is in place for general code styling and hygeine.

Sublime Text is recommended with package control installed and babel snippets.




# Docs/References

React-Router Docs
https://github.com/rackt/react-router/tree/master/docs

Parse-React Docs
https://github.com/ParsePlatform/ParseReact

general eslint rules:
http://eslint.org/docs/rules/

eslint-react rules
https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules

sublime text 3, package control, babel & stylus snippets, sublimelinter & sublimelinter-eslint, editorconfig.
https://packagecontrol.io/installation


eslint-react rules:
https://github.com/yannickcr/eslint-plugin-react/tree/master/lib/rules

FLUX action standard:
https://github.com/acdlite/flux-standard-action
