// See https://stylelint.io/user-guide/rules/.
"use strict";

// Consider using stylelint-config-standard with the scss plugin instead.
// Consider installing further stylelint plugins in future, following the HomeApp FE setup

module.exports = {
    extends: ["stylelint-config-standard-scss", "stylelint-config-prettier"],
    rules: {
        "selector-class-pattern": null, // disabled specifically for this Codeathon to aid development
        "scss/dollar-variable-empty-line-before": null,
        "color-function-notation": null,
        "alpha-value-notation": null,
        "scss/at-extend-no-missing-placeholder": null,
        "scss/double-slash-comment-empty-line-before": null,

        "color-named": "never",
        "number-leading-zero": "always",
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-no-important": true,
        "selector-max-id": 0,
        "selector-max-type": [
            2,
            { ignore: ["child", "compounded", "next-sibling"] },
        ],
        "max-nesting-depth": 4,
        "selector-max-specificity": "0,4,0",
        "value-no-vendor-prefix": true,
        "property-no-vendor-prefix": true,
        "selector-no-vendor-prefix": true,
        "media-feature-name-no-vendor-prefix": true,
        "declaration-empty-line-before": null,
        "no-descending-specificity": null,
        "at-rule-no-vendor-prefix": true,
        "at-rule-no-unknown": null,
        "rule-empty-line-before": [
            "always",
            {
                ignore: ["after-comment", "first-nested"],
                except: ["first-nested"],
            },
        ],
        // SCSS
        "scss/at-rule-no-unknown": true,
        "scss/declaration-nested-properties": "never",
        "scss/selector-no-redundant-nesting-selector": true,
        "scss/percent-placeholder-pattern": "^do-not-use-placeholders$",
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/at-mixin-argumentless-call-parentheses": "always",
        "scss/at-mixin-pattern": /^[a-z0-9-]+$/,
    },
};
