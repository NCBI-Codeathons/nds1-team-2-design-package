import { formatWithPrettier } from "./utils";

export default {
    title: "NCBI/Components/NoScript banner",
};

export const Base = () =>
    formatWithPrettier(`
    <span
        class="usa-site-alert usa-site-alert--emergency ncbi-alert"
        aria-label="Javascript disabled alert"
        data-testid="noscript"
        >
        <div class="usa-alert">
            <div class="usa-alert__body">
                <h1 class="usa-alert__heading">Please enable JavaScript</h1>
                <div class="rich-text">
                    <p>
                        This website requires JavaScript. Please enable JavaScript in your browser (
                        <a
                            href="https://www.enablejavascript.io/en"
                            class="usa-link usa-link--external"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            instructions
                        </a>
                        ).
                    </p>
                </div>
            </div>
        </div>
    </span>
`);
