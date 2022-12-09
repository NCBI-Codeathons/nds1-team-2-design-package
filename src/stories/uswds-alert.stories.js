import { formatWithPrettier } from "./utils";

export default {
    title: "USWDS Components/Standard alerts",
    argTypes: {
        type: {
            control: {
                type: "select",
                options: ["info", "warning", "error", "success"],
            },
            description: "select a type",
        },
    },
    args: {
        type: "info",
        heading: "USWDS Alert",
        body: "text",
        icon: true,
        slim: false,
    },
};

const Template = ({ type, heading, body, icon, slim }) => {
    const element = formatWithPrettier(`
    <div class='usa-alert usa-alert--${type} 
    ${icon ? "" : "usa-alert--no-icon"}
    ${slim ? "" : "usa-alert--slim"}
    '>
        <div class='usa-alert__body'>
        <h3 class='usa-alert__heading'>${heading}</h3>
        <p class='usa-alert__text'>${body}</p>
        </div>
    </div>
    `);
    return element;
};

export const Base = Template.bind({});
export const Info = Template.bind({});
export const Warning = Template.bind({});
export const Error = Template.bind({});
export const Success = Template.bind({});
Info.args = {
    type: "info",
    title: "Information Alert",
};
Warning.args = {
    type: "warning",
    title: "Warning Alert",
};
Error.args = {
    type: "error",
    title: "Error Alert",
};
Success.args = {
    type: "success",
    title: "Success Alert",
};
