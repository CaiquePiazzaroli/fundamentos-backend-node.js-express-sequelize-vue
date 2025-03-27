import util from 'node:util';
import { error, warning, info, log } from "./ex04_logger.js";

const debugWARN = util.debuglog('WARN');
debugWARN(log('\x1b[31m Erro \x1b[0m', error));
