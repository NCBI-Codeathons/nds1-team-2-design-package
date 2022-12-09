const uswds = require("@uswds/compile");

/**
 * USWDS version
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 * See documentation here: https://github.com/uswds/uswds-compile/
 */

uswds.paths.src.fonts = "./src/theme/fonts";
uswds.paths.src.projectSass = "./src/theme/scss";

uswds.paths.dist.css = "./assets/css";
uswds.paths.dist.fonts = "./assets/fonts";
uswds.paths.dist.js = "./assets/js";
uswds.paths.dist.img = "./assets/img";
uswds.paths.dist.theme = "./src/theme/sass";

/**
 * Exports
 * Add as many as you need
 * See documentation here: https://github.com/uswds/uswds-compile/
 */
// USWDS compile functions
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.copyAssets = uswds.copyAssets;
exports.watch = uswds.watch;
exports.build = uswds.updateUswds;
exports.copyFonts = uswds.copyFonts;
