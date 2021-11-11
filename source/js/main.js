import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initIntroToMobile} from './modules/init-intro-to-mobile';
import {initLoader} from './modules/init-loader';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initLoader();
initModals();
initIntroToMobile();
