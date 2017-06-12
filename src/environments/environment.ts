// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC_FBnCt23N_38KIPFZqeE6IjEuVm1nM80',
    authDomain: 'noteapp-85b8c.firebaseapp.com',
    databaseURL: 'https://noteapp-85b8c.firebaseio.com',
    projectId: 'noteapp-85b8c',
    storageBucket: 'noteapp-85b8c.appspot.com',
    messagingSenderId: '248576039623'
  }
};
