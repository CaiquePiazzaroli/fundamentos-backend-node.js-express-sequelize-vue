import * as logger from "./ex07_logger.js";
import util from 'node:util';




function colorLog (message, typelog) {

    if(typelog === logger.error) {
        const debugError = util.debuglog('ERROR');
        debugError(logger.log(message, typelog));
    }

    if(typelog === logger.warning) {
        const debugWaring = util.debuglog('WARNING');
        debugWaring(logger.log(message, typelog));
    }

    if(typelog === logger.info) {
        const debugWaring = util.debuglog('INFO');
        debugWaring(logger.log(message, typelog));
    }
}
 

colorLog('Erro', logger.info);