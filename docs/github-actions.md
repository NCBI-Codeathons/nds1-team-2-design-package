# GitHub Actions

This project uses the following actions:

## ci.yml

Runs linting of styles and checks that all code matches the formatting configuration set with Prettier.

## release.yml

Compiles all assets and styles from the design package and USWDS into a zip file which can then be downloaded from the repository releases.

https://github.com/NCBI-Codeathons/nds1-team-2-design-package/releases/

This action is triggered on every push or merge into the `main` branch.

## deploy-storybook.yml

Runs the storybook build command and outputs the results to the `gh-pages` branch.

This action is triggered on every push or merge into the `main` branch.
