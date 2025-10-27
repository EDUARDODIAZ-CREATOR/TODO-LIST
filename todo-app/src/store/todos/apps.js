import html from './app.html?raw';

/**
 * 
 * @param {String} elementId 
 */

export const App = ( elementId ) => {

    //Cuando se llame la funcion app () se llama esta funcion anonima autoejecutable
    (() => {
        const app = document.createElement('div');
        app.innerHTML= html;
        document.getElementById( elementId ).append( app );
    })();
};