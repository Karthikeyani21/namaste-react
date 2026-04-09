#igniting app

ingite - production ready app which has super power like minification, bundling, etc...

- npm init
- package.json - configuration for npm. also known as dependencies(our app dependent on these packages)

// start installing dependencies
1. bundler - popular - webpack, parcel, vite
   parcel- zero configuration bundler, easy to install and use
   // install
   npm i -D parcel
   -D - dev dependencies, not for production

   2 type of dependencies - 1.dev - developement phase
                            2.normal - can used in production also
                
package.json
    all the dependencies will be stored in dependencies or devDependencies

package-lock.json
    stores exact version of dependecies
    production

node_modules - contains all the code of project dependencies and its dependencies 
           transitive dependencies - dependencies and its dependencies

#parcel
- Dev build 
- local server
- HMR - hot module replacement
- file matching alogithm 
- faster build using caching code
- image optimization
- minification
- building
- compress
- consistant hashing
- code spilitting 
- differenctial bundling - 


1. npm init
2. npm i -D parcel
3. npm install react and react-dom
4. import react and reactDOM from react and react-dom/client
5. parcel will execute the react project
