import { formatWithPrettier } from "./utils";

export default {
    title: "NCBI/Components/Site alerts",
    argTypes: {
        type: {
            control: { type: "select", options: ["info", "emergency"] },
            description: "select a type",
        },
    },
    args: {
        type: "info",
        title: "NCBI Site Alert",
        list: [
            "item 1",
            'NWS-TBX team is going to have an awesome New Year Party at <a class="usa-link" href="javascript:void(0);">Pub Med</a>.',
        ],
    },
};

const Template = ({ type, title, list, ...args }) => {
    const renderedList = list.map((item) => `<li>${item}</li>\n`).join("");
    const element = formatWithPrettier(`
        <section
            class="usa-site-alert usa-site-alert--${type}"
            aria-label="NCBI alert"
        >
        <div class="usa-alert">
        <div class="usa-alert__body">
            <h3 class="usa-alert__heading">${title}</h3>
            <ul class="usa-list">
                ${renderedList}
            </ul>
        </div>
        </div>
        </section>
    `);
    return element;
};

export const Base = Template.bind({});
export const Info = Template.bind({});
export const Emergency = Template.bind({});

Info.args = {
    type: "info",
    title: "Information Alert",
};

Emergency.args = {
    type: "emergency",
    title: "Emergency Alert",
};
