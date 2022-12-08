# Customizing USWDS styles

## Changing USWDS Theme Settings

You can copy the NCBI theme settings file from `src/theme/sass/_ncbi-theme.scss` and place it in your project sass folder. Give it a different name, update the file contents with your new USWDS settings, and update the import in `index.scss`.

```scss
// Load the USWDS styles with your custom theme settings applied.
@forward "your-new-theme";
@forward "uswds";
```

## Adding New Components

Extra components can be imported at the bottom of the components section.

```scss
// Load the custom NCBI component styles
@import "ncbi-components/site-alert";
@import "ncbi-components/collection";

@import "components/your-custom-component";
```

You can use USWDS and NCBI settings / mixins in your components - make sure to include the following rule at the top of your files.

```scss
@use "uswds-core" as *;
```
