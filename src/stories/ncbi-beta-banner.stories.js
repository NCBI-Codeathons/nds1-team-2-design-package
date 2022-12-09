import { formatWithPrettier } from "./utils";

export default {
    title: "NCBI/Components/Beta Banner",
    args: {
        text: "Welcome to the beta website! ",
        linkText: "Learn more",
        returnLinkText: "Return to classic site",
        slim: false,
        includeBadge: true,
    },
};

export const Base = ({ text, linkText, returnLinkText, includeBadge }) =>
    formatWithPrettier(`
    <div class="ncbi-beta-banner">
    <div
      class="grid-container ncbi-layout__grid-container ncbi-beta-banner__content 
      ${includeBadge ? "ncbi-beta-banner__content--small" : ""}"
    >

      ${
          includeBadge
              ? '<strong class="ncbi-beta-banner__badge">beta</strong>'
              : ""
      }
      <span class="ncbi-beta-banner__text"
        >${text}
        <a
          class="usa-link ncbi--show-only-at-desktop ncbi-beta-banner__link"
          href="/"
          target="_blank"
          rel="noreferrer noopener"
          >${linkText}
        </a>
        </span
      ><span class="ncbi-beta-banner__return-text">
        <a
          class="usa-link ncbi-beta-banner__link usa-link"
          href="https://www.ncbi.nlm.nih.gov"
          aria-label="Go to external link: ${returnLinkText}"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 24 24"
            width="1em"
            class="usa-icon usa-icon--size-3 ncbi-beta-banner__return-icon"
            focusable="false"
            role="img"
            aria-hidden="true"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
            ></path></svg
          >${returnLinkText}</a
        ></span
      >
      <div class="ncbi-beta-banner__dropdown">
        <button
          type="button"
          class="ncbi-beta-banner__dropdown-button"
          aria-controls="beta-banner-dropdown"
          aria-label="Show beta banner dropdown"
          aria-expanded="false"
          data-testid="beta-banner-dropdown-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 24 24"
            width="1em"
            class="usa-icon usa-icon--size-4 ncbi-beta-banner__dropdown-icon"
            focusable="false"
            role="img"
            aria-hidden="true"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
          </svg>
        </button>
        <div
          id="beta-banner-dropdown"
          class="ncbi-beta-banner__dropdown-content"
          data-testid="beta-banner-dropdown-content"
          hidden=""
        >
          <ul>
            <li>
              <a
                class="usa-link usa-link--external ncbi-beta-banner__link"
                href="http://www.google.com"
                aria-label="Go to external link: Learn more"
                target="_blank"
                rel="noreferrer noopener"
                >Learn more</a
              >
            </li>
            <li>
              <a
                class="ncbi-beta-banner__link usa-link"
                href="https://www.ncbi.nlm.nih.gov"
                aria-label="Go to external link: Return to classic site"
                >Return to classic site</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
`);
