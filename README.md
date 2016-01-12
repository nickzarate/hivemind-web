# hivemind-web
HiveMind application on the web


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

# Dependencies
The HiveMind client is written primarily in *React.js*.

The (pseudo) FLUX Architecture is managed with *Redux*.

Routing is managed with *react-router* (along with redux-simple-router).

*Parse* is used to make calls to the Parse backend.

An (unused) eslint configuration is in place for general code styling and hygeine.

Sublime Text 3 is recommended with package control installed and babel snippets.




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

# FLUX action standard:
https://github.com/acdlite/flux-standard-action
