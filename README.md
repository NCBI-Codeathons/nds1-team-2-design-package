# NCBI Web Design System (NWDS)

NCBI-themed [USWDS](https://designsystem.digital.gov/)!

- USWDS settings are overridden in `/_uswds-theme.scss`.
- Roboto has been installed as the default font.
- Color themes based on specification at https://www.ncbi.nlm.nih.gov/style-guide/basics/colors/

## Requirements

- Node.js (v16.x.x)
- npm
- uswds
- uswds-compile

## Team

- James Hancock
  - 4:00 am – 12:30 pm US / 9:00 am - 5:30 pm UK
- Pradeep Chand
  - 9:00 am – 5:00 pm US / 2:00 pm - 10:00 pm UK

Since the team members are working in diferent timezones, we have agreed upon following work handoff protocol:

- Each developr will work on a feature branch and create a pull request for any completed feature for other developer to review
- Other developer will review the pull request, make necessary changes and merge the changes.
- The other developer will start new work off the merged code base.

## How to use

For now, developes can find the latest release of the package in ZIP format at following location:

- Under repository go to `Actions`.
- In the left sidebar, click on `Build assets` workflow.
- From the list of workflow runs, click the name of the run to see the workflow run summary.
- Under Artifacts, click on `uswds-assets`.

To find how to include NWDS package in your webpage, you can look at `/index.html`.

## Architecture

- USWDS is the main component of this package.
- [USWDS compile](https://github.com/uswds/uswds-compile) package is used for copying USWDS static assets and transforming SASS into CSS.
- Github Actions is used to compile and generate NWDS assets

![alt text](/docs/images/workflow.png)

## Contributing to this package

Refer [uswds-compile functions documentation](https://github.com/uswds/uswds-compile#functions) to understand the role of each function.

1. Override USWDS settings in `/_uswds-theme.scss` or add custom styles to `/_uswds-theme-custom-styles.scss`.
1. `npm run build` - compiles Sass files and copies other USWDS assets into the `assets` directory.
1. `npm run compile` - compiles only SCSS files, while `npm run watch` watches the SCSS files for changes and re-compiles on save.
1. Add component template to index.html, and view whether styles are applied correctly.
1. Run formatting and stylelint with `npm run format && npm run stylelint`

## Documentation and assets

All the documentation should be stored inside `/docs/` directory and related images should be stored inside `/docs/images/`.
