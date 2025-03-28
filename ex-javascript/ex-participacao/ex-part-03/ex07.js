import * as logger from "./ex07_logger.js";
import util from 'node:util';




function colorLog (message, typelog) {

    if(typelog === logger.error) {
        console.log('error');
        const debugError = util.debuglog('ERROR');
        debugError(message)
        console.log('');
    }

    if(typelog === logger.warning) {
        console.log('warning');
        console.log('');
    }

    if(typelog === logger.info) {
        console.log('info');
        console.log('');
    }
}
 

colorLog('oi', logger.error);