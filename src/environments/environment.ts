// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,

    openweathermapApi: 'https://api.openweathermap.org/data/2.5',
    openweathermapApiKey: '2ed7ca44ec73367b36ecdc973fcab3e4',

    firebaseKey: {
        apiKey: 'AIzaSyBdEjlxMwIPu2-wSXUu_zv3m0yYMQnvMto',
        authDomain: 'platformbuilders-d4e36.firebaseapp.com',
        databaseURL:
            'https://platformbuilders-d4e36-default-rtdb.firebaseio.com',
        projectId: 'platformbuilders-d4e36',
        storageBucket: 'platformbuilders-d4e36.appspot.com',
        messagingSenderId: '376818170968',
    },
    firebaseAppNameFactory: () => 'platform_builders'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
