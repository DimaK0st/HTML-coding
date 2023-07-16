import debug from "../main";

function errors(debugMode=false) {

    debug('start', debugMode)
try{
    debug('process1', debugMode)
    debug(a, debugMode)
    debug('process1', debugMode)
}catch (e){
    debug('process error', debugMode)
}
    debug('end', debugMode)
}
export default errors
