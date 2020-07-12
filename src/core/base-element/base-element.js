import { LitElement, html, css } from 'lit-element';
import { appStyles } from '../../styles/style'

export class BaseElement extends LitElement {

    constructor() {
        super();
    }
    static get is() {
        return 'base-element';
    }
    static get styles() {
        return [appStyles, css``];
    }
    static get properties() {
        return {

        }
    }
    destructor() {

    }
    render() {
        return html``;
    }
    firstUpdated() {

    }
}

export { html, css, unsafeCSS } from 'lit-element';
