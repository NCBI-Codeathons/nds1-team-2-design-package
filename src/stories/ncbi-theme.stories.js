import { formatWithPrettier } from "./utils";

export default {
    title: 'NCBI/Design tokens',
}

export const BackgroundColors = () => (`
<div class="grid-container">
    <h1>NCBI Theme Colors</h1>
    <p>These are NCBI specific colors used as part of USWDS theme overrides.</p>

    <div class="grid-row">
    <div class="grid-col-2">
        <div class="square-15 bg-primary"></div>
        <p>Primary</p>
    </div>
    <div class="grid-col-2">
        <div class="square-15 bg-primary-dark"></div>
        <p>Primary dark</p>
    </div>
    <div class="grid-col-2">
        <div class="square-15 bg-primary-darker"></div>
        <p>Primary darker</p>
    </div>
    <div class="grid-col-2">
        <div class="square-15 bg-secondary"></div>
        <p>Secondary</p>
    </div>
    <div class="grid-col-2">
        <div class="square-15 bg-secondary-dark"></div>
        <p>Secondary dark</p>
    </div>
    <div class="grid-col-2">
        <div class="square-15 bg-secondary-darker"></div>
        <p>Secondary darker</p>
    </div>
    <div class="grid-col-2">
    <div class="square-15 bg-info-lighter"></div>
    <p>Info lighter</p>
    </div>
    <div class="grid-col-2">
        <div class="square-15 bg-emergency"></div>
        <p>emergency</p>
    </div>
    </div>
</div>
`);
