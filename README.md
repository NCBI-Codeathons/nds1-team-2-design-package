# NCBI Web Design System (NWDS)
NCBI-themed [USWDS](https://designsystem.digital.gov/)!

* USWDS settings are overridden in `/_uswds-theme.scss`.
* Roboto as the default Font.
* Color themes based on specification at https://www.ncbi.nlm.nih.gov/style-guide/basics/colors/

## Requirements
* Node.js (v16)
* npm
* uswds
* uswds-compile

## How to use

For now, developes can find the latest release of the package in ZIP format at following location:

* Under repository go to `Actions`.
* In the left sidebar, click on `Build assets` workflow.
* From the list of workflow runs, click the name of the run to see the workflow run summary.
* Under Artifacts, click on `uswds-assets`.

To find how to include NWDS package in your webpage, you can look at `/index.html`.

## Architecture
* USWDS is the main component of this package.
* [USWDS compile](https://github.com/uswds/uswds-compile) package is used for copying USWDS static assets and transforming SASS into CSS.
* Github actions is used to compile and generate NWDS assets

![alt text](/images/workflow.png)

## Contributing to this package
Refer [uswds-compile functions documentation](https://github.com/uswds/uswds-compile#functions) to understand the role of each function.
1. `$ npx gulp init` - Copy all the themes and assets and to compile. Use this function only once in the beginning as using it later will overwrite your customization.
1. Override USWDS settings in `/_uswds-theme.scss`.
1. Add custome styles in `/_uswds-theme-custom-styles.scss`.
1. `$ npx gulp compile` -  Compiles Sass files into dist css directory and builds USWDS icon sprite into distribution img directory.


