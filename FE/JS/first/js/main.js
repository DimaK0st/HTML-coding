import arrayFunc from "./modules/arrayFunc";
import errors from "./modules/errors";
import es6 from "./modules/es6";
import events from "./modules/events";
import fetchAndAjax from "./modules/fetchAndAjax";
import localStorages from "./modules/localStorage";
import promise from "./modules/promise";
import regularExp from "./modules/regularExp";
import jquery from "./modules/jquery";
import generator from "./modules/generator";
import animations from "./modules/animations";

window.addEventListener('DOMContentLoaded', () => {
animations()
    arrayFunc()
    errors()
    es6()
    events()
    fetchAndAjax()
    localStorages()
    promise()
    regularExp()
jquery()
    generator(true)
})


export default function debug(log, bool) {
    bool ? console.log(log) : '';
}
