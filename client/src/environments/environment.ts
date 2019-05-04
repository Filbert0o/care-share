// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
         API_KEY: '948eb06b5ccd93341d0ef00617dcc021',
         API_ID: '2637efc5',
         production: false,
         baseUrl: "http://localhost:3001",
         baseUri: "http://localhost:4200",
         auth: {
           url: "https://gojitodo.auth0.com",
           clientID: "VANeB8AM0hUWxi3YLpYlrUj0uTg7FoAF",
           domain: "gojitodo.auth0.com",
           audience: "http://localhost:3001/api",
           redirect: "http://localhost:4200/callback",
           scope: "openid profile user_metadata app_metadata email"
         }
       };


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
