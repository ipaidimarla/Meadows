import { css } from 'lit-element';

export const appStyles =

  // Button 
  css`.btn-primary {
    color: #ffffff;
    background-color: #2196f3;
    border-color: #2196f3;
    box-shadow: none;
  }
    .btn {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.46875rem 1rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .btn:hover,
  .btn:focus {
    text-decoration: none;
  }
  
  .btn:focus,
  .btn.focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);
  }
  
  .btn.disabled,
  .btn:disabled {
    opacity: 0.65;
    box-shadow: none;
  }
  
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  
  .btn:not(:disabled):not(.disabled):active,
  .btn:not(:disabled):not(.disabled).active {
    background-image: none;
    box-shadow: none;
  }
  
  .btn:not(:disabled):not(.disabled):active:focus,
  .btn:not(:disabled):not(.disabled).active:focus {
    box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25), none;
  }
  
  a.btn.disabled,
  fieldset:disabled a.btn {
    pointer-events: none;
  }
  
  .btn-primary {
    color: #ffffff;
    background-color: #2196f3;
    border-color: #2196f3;
    box-shadow: none;
  }
  
  .btn-primary:hover {
    color: #ffffff;
    background-color: #0c83e2;
    border-color: #0c7cd5;
  }
  
  .btn-primary:focus,
  .btn-primary.focus {
    box-shadow: none, 0 0 0 0.2rem rgba(33, 150, 243, 0.5);
  }
  
  .btn-primary.disabled,
  .btn-primary:disabled {
    color: #ffffff;
    background-color: #2196f3;
    border-color: #2196f3;
  }
  
  .btn-primary:not(:disabled):not(.disabled):active,
  .btn-primary:not(:disabled):not(.disabled).active,
  .show>.btn-primary.dropdown-toggle {
    color: #ffffff;
    background-color: #0c7cd5;
    border-color: #0b75c9;
  }
  
  .btn-primary:not(:disabled):not(.disabled):active:focus,
  .btn-primary:not(:disabled):not(.disabled).active:focus,
  .show>.btn-primary.dropdown-toggle:focus {
    box-shadow: none, 0 0 0 0.2rem rgba(33, 150, 243, 0.5);
  }
  
  .btn-secondary {
    color: #ffffff;
    background-color: #6c757d;
    border-color: #6c757d;
    box-shadow: none;
  }
  
  .btn-secondary:hover {
    color: #ffffff;
    background-color: #5a6268;
    border-color: #545b62;
  }
  
  .btn-secondary:focus,
  .btn-secondary.focus {
    box-shadow: none, 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
  }
  
  .btn-secondary.disabled,
  .btn-secondary:disabled {
    color: #ffffff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show>.btn-secondary.dropdown-toggle {
    color: #ffffff;
    background-color: #545b62;
    border-color: #4e555b;
  }
  
  .btn-secondary:not(:disabled):not(.disabled):active:focus,
  .btn-secondary:not(:disabled):not(.disabled).active:focus,
  .show>.btn-secondary.dropdown-toggle:focus {
    box-shadow: none, 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
  }
  
  .btn-success {
    color: #ffffff;
    background-color: #4caf50;
    border-color: #4caf50;
    box-shadow: none;
  }
  
  .btn-success:hover {
    color: #ffffff;
    background-color: #409444;
    border-color: #3d8b40;
  }
  
  .btn-success:focus,
  .btn-success.focus {
    box-shadow: none, 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
  }
  
  .btn-success.disabled,
  .btn-success:disabled {
    color: #ffffff;
    background-color: #4caf50;
    border-color: #4caf50;
  }
  
  .btn-success:not(:disabled):not(.disabled):active,
  .btn-success:not(:disabled):not(.disabled).active,
  .show>.btn-success.dropdown-toggle {
    color: #ffffff;
    background-color: #3d8b40;
    border-color: #39833c;
  }
  
  .btn-success:not(:disabled):not(.disabled):active:focus,
  .btn-success:not(:disabled):not(.disabled).active:focus,
  .show>.btn-success.dropdown-toggle:focus {
    box-shadow: none, 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
  }
  
  .btn-info {
    color: #ffffff;
    background-color: #00bcd4;
    border-color: #00bcd4;
    box-shadow: none;
  }
  
  .btn-info:hover {
    color: #ffffff;
    background-color: #009aae;
    border-color: #008fa1;
  }
  
  .btn-info:focus,
  .btn-info.focus {
    box-shadow: none, 0 0 0 0.2rem rgba(0, 188, 212, 0.5);
  }
  
  .btn-info.disabled,
  .btn-info:disabled {
    color: #ffffff;
    background-color: #00bcd4;
    border-color: #00bcd4;
  }
  
  .btn-info:not(:disabled):not(.disabled):active,
  .btn-info:not(:disabled):not(.disabled).active,
  .show>.btn-info.dropdown-toggle {
    color: #ffffff;
    background-color: #008fa1;
    border-color: #008394;
  }
  
  .btn-info:not(:disabled):not(.disabled):active:focus,
  .btn-info:not(:disabled):not(.disabled).active:focus,
  .show>.btn-info.dropdown-toggle:focus {
    box-shadow: none, 0 0 0 0.2rem rgba(0, 188, 212, 0.5);
  }
  
  .btn-warning {
    color: #212529;
    background-color: #ffeb3b;
    border-color: #ffeb3b;
    box-shadow: none;
  }
  
  .btn-warning:hover {
    color: #212529;
    background-color: #ffe715;
    border-color: #ffe608;
  }
  
  .btn-warning:focus,
  .btn-warning.focus {
    box-shadow: none, 0 0 0 0.2rem rgba(255, 235, 59, 0.5);
  }
  
  .btn-warning.disabled,
  .btn-warning:disabled {
    color: #212529;
    background-color: #ffeb3b;
    border-color: #ffeb3b;
  }
  
  .btn-warning:not(:disabled):not(.disabled):active,
  .btn-warning:not(:disabled):not(.disabled).active,
  .show>.btn-warning.dropdown-toggle {
    color: #212529;
    background-color: #ffe608;
    border-color: #fae100;
  }
  
  .btn-warning:not(:disabled):not(.disabled):active:focus,
  .btn-warning:not(:disabled):not(.disabled).active:focus,
  .show>.btn-warning.dropdown-toggle:focus {
    box-shadow: none, 0 0 0 0.2rem rgba(255, 235, 59, 0.5);
  }
  
  .btn-danger {
    color: #ffffff;
    background-color: #f44336;
    border-color: #f44336;
    box-shadow: none;
  }
  
  .btn-danger:hover {
    color: #ffffff;
    background-color: #f22112;
    border-color: #ea1c0d;
  }
  
  .btn-danger:focus,
  .btn-danger.focus {
    box-shadow: none, 0 0 0 0.2rem rgba(244, 67, 54, 0.5);
  }
  
  .btn-danger.disabled,
  .btn-danger:disabled {
    color: #ffffff;
    background-color: #f44336;
    border-color: #f44336;
  }
  
  .btn-danger:not(:disabled):not(.disabled):active,
  .btn-danger:not(:disabled):not(.disabled).active,
  .show>.btn-danger.dropdown-toggle {
    color: #ffffff;
    background-color: #ea1c0d;
    border-color: #de1b0c;
  }
  
  .btn-danger:not(:disabled):not(.disabled):active:focus,
  .btn-danger:not(:disabled):not(.disabled).active:focus,
  .show>.btn-danger.dropdown-toggle:focus {
    box-shadow: none, 0 0 0 0.2rem rgba(244, 67, 54, 0.5);
  }
  
  .btn-light {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    box-shadow: none;
  }
  
  .btn-light:hover {
    color: #212529;
    background-color: #e2e6ea;
    border-color: #dae0e5;
  }
  
  .btn-light:focus,
  .btn-light.focus {
    box-shadow: none, 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }
  
  .btn-light.disabled,
  .btn-light:disabled {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  
  .btn-light:not(:disabled):not(.disabled):active,
  .btn-light:not(:disabled):not(.disabled).active,
  .show>.btn-light.dropdown-toggle {
    color: #212529;
    background-color: #dae0e5;
    border-color: #d3d9df;
  }
  
  .btn-light:not(:disabled):not(.disabled):active:focus,
  .btn-light:not(:disabled):not(.disabled).active:focus,
  .show>.btn-light.dropdown-toggle:focus {
    box-shadow: none, 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }
  
  .btn-dark {
    color: #ffffff;
    background-color: #343a40;
    border-color: #343a40;
    box-shadow: none;
  }
  
  .btn-dark:hover {
    color: #ffffff;
    background-color: #23272b;
    border-color: #1d2124;
  }
  
  .btn-dark:focus,
  .btn-dark.focus {
    box-shadow: none, 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
  }
  
  .btn-dark.disabled,
  .btn-dark:disabled {
    color: #ffffff;
    background-color: #343a40;
    border-color: #343a40;
  }
  
  .btn-dark:not(:disabled):not(.disabled):active,
  .btn-dark:not(:disabled):not(.disabled).active,
  .show>.btn-dark.dropdown-toggle {
    color: #ffffff;
    background-color: #1d2124;
    border-color: #171a1d;
  }
  
  .btn-dark:not(:disabled):not(.disabled):active:focus,
  .btn-dark:not(:disabled):not(.disabled).active:focus,
  .show>.btn-dark.dropdown-toggle:focus {
    box-shadow: none, 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
  }
  
  .btn-outline-primary {
    color: #2196f3;
    background-color: transparent;
    background-image: none;
    border-color: #2196f3;
  }
  
  .btn-outline-primary:hover {
    color: #ffffff;
    background-color: #2196f3;
    border-color: #2196f3;
  }
  
  .btn-outline-primary:focus,
  .btn-outline-primary.focus {
    box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.5);
  }
  
  .btn-outline-primary.disabled,
  .btn-outline-primary:disabled {
    color: #2196f3;
    background-color: transparent;
  }
  
  .btn-outline-primary:not(:disabled):not(.disabled):active,
  .btn-outline-primary:not(:disabled):not(.disabled).active,
  .show>.btn-outline-primary.dropdown-toggle {
    color: #ffffff;
    background-color: #2196f3;
    border-color: #2196f3;
  }
  
  .btn-outline-primary:not(:disabled):not(.disabled):active:focus,
  .btn-outline-primary:not(:disabled):not(.disabled).active:focus,
  .show>.btn-outline-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.5);
  }
  
  .btn-outline-secondary {
    color: #6c757d;
    background-color: transparent;
    background-image: none;
    border-color: #6c757d;
  }
  
  .btn-outline-secondary:hover {
    color: #ffffff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  
  .btn-outline-secondary:focus,
  .btn-outline-secondary.focus {
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
  }
  
  .btn-outline-secondary.disabled,
  .btn-outline-secondary:disabled {
    color: #6c757d;
    background-color: transparent;
  }
  
  .btn-outline-secondary:not(:disabled):not(.disabled):active,
  .btn-outline-secondary:not(:disabled):not(.disabled).active,
  .show>.btn-outline-secondary.dropdown-toggle {
    color: #ffffff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
  
  .btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
  .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
  .show>.btn-outline-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
  }
  
  .btn-outline-success {
    color: #4caf50;
    background-color: transparent;
    background-image: none;
    border-color: #4caf50;
  }
  
  .btn-outline-success:hover {
    color: #ffffff;
    background-color: #4caf50;
    border-color: #4caf50;
  }
  
  .btn-outline-success:focus,
  .btn-outline-success.focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
  }
  
  .btn-outline-success.disabled,
  .btn-outline-success:disabled {
    color: #4caf50;
    background-color: transparent;
  }
  
  .btn-outline-success:not(:disabled):not(.disabled):active,
  .btn-outline-success:not(:disabled):not(.disabled).active,
  .show>.btn-outline-success.dropdown-toggle {
    color: #ffffff;
    background-color: #4caf50;
    border-color: #4caf50;
  }
  
  .btn-outline-success:not(:disabled):not(.disabled):active:focus,
  .btn-outline-success:not(:disabled):not(.disabled).active:focus,
  .show>.btn-outline-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.5);
  }
  
  .btn-outline-info {
    color: #00bcd4;
    background-color: transparent;
    background-image: none;
    border-color: #00bcd4;
  }
  
  .btn-outline-info:hover {
    color: #ffffff;
    background-color: #00bcd4;
    border-color: #00bcd4;
  }
  
  .btn-outline-info:focus,
  .btn-outline-info.focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 188, 212, 0.5);
  }
  
  .btn-outline-info.disabled,
  .btn-outline-info:disabled {
    color: #00bcd4;
    background-color: transparent;
  }
  
  .btn-outline-info:not(:disabled):not(.disabled):active,
  .btn-outline-info:not(:disabled):not(.disabled).active,
  .show>.btn-outline-info.dropdown-toggle {
    color: #ffffff;
    background-color: #00bcd4;
    border-color: #00bcd4;
  }
  
  .btn-outline-info:not(:disabled):not(.disabled):active:focus,
  .btn-outline-info:not(:disabled):not(.disabled).active:focus,
  .show>.btn-outline-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 188, 212, 0.5);
  }
  
  .btn-outline-warning {
    color: #ffeb3b;
    background-color: transparent;
    background-image: none;
    border-color: #ffeb3b;
  }
  
  .btn-outline-warning:hover {
    color: #212529;
    background-color: #ffeb3b;
    border-color: #ffeb3b;
  }
  
  .btn-outline-warning:focus,
  .btn-outline-warning.focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 235, 59, 0.5);
  }
  
  .btn-outline-warning.disabled,
  .btn-outline-warning:disabled {
    color: #ffeb3b;
    background-color: transparent;
  }
  
  .btn-outline-warning:not(:disabled):not(.disabled):active,
  .btn-outline-warning:not(:disabled):not(.disabled).active,
  .show>.btn-outline-warning.dropdown-toggle {
    color: #212529;
    background-color: #ffeb3b;
    border-color: #ffeb3b;
  }
  
  .btn-outline-warning:not(:disabled):not(.disabled):active:focus,
  .btn-outline-warning:not(:disabled):not(.disabled).active:focus,
  .show>.btn-outline-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 235, 59, 0.5);
  }
  
  .btn-outline-danger {
    color: #f44336;
    background-color: transparent;
    background-image: none;
    border-color: #f44336;
  }
  
  .btn-outline-danger:hover {
    color: #ffffff;
    background-color: #f44336;
    border-color: #f44336;
  }
  
  .btn-outline-danger:focus,
  .btn-outline-danger.focus {
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5);
  }
  
  .btn-outline-danger.disabled,
  .btn-outline-danger:disabled {
    color: #f44336;
    background-color: transparent;
  }
  
  .btn-outline-danger:not(:disabled):not(.disabled):active,
  .btn-outline-danger:not(:disabled):not(.disabled).active,
  .show>.btn-outline-danger.dropdown-toggle {
    color: #ffffff;
    background-color: #f44336;
    border-color: #f44336;
  }
  
  .btn-outline-danger:not(:disabled):not(.disabled):active:focus,
  .btn-outline-danger:not(:disabled):not(.disabled).active:focus,
  .show>.btn-outline-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(244, 67, 54, 0.5);
  }
  
  .btn-outline-light {
    color: #f8f9fa;
    background-color: transparent;
    background-image: none;
    border-color: #f8f9fa;
  }
  
  .btn-outline-light:hover {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  
  .btn-outline-light:focus,
  .btn-outline-light.focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }
  
  .btn-outline-light.disabled,
  .btn-outline-light:disabled {
    color: #f8f9fa;
    background-color: transparent;
  }
  
  .btn-outline-light:not(:disabled):not(.disabled):active,
  .btn-outline-light:not(:disabled):not(.disabled).active,
  .show>.btn-outline-light.dropdown-toggle {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
  }
  
  .btn-outline-light:not(:disabled):not(.disabled):active:focus,
  .btn-outline-light:not(:disabled):not(.disabled).active:focus,
  .show>.btn-outline-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
  }
  
  .btn-outline-dark {
    color: #343a40;
    background-color: transparent;
    background-image: none;
    border-color: #343a40;
  }
  
  .btn-outline-dark:hover {
    color: #ffffff;
    background-color: #343a40;
    border-color: #343a40;
  }
  
  .btn-outline-dark:focus,
  .btn-outline-dark.focus {
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
  }
  
  .btn-outline-dark.disabled,
  .btn-outline-dark:disabled {
    color: #343a40;
    background-color: transparent;
  }
  
  .btn-outline-dark:not(:disabled):not(.disabled):active,
  .btn-outline-dark:not(:disabled):not(.disabled).active,
  .show>.btn-outline-dark.dropdown-toggle {
    color: #ffffff;
    background-color: #343a40;
    border-color: #343a40;
  }
  
  .btn-outline-dark:not(:disabled):not(.disabled):active:focus,
  .btn-outline-dark:not(:disabled):not(.disabled).active:focus,
  .show>.btn-outline-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
  }
  
  .btn-link {
    font-weight: 400;
    color: #9c27b0;
    background-color: transparent;
  }
  
  .btn-link:hover {
    color: #0a6ebd;
    text-decoration: underline;
    background-color: transparent;
    border-color: transparent;
  }
  
  .btn-link:focus,
  .btn-link.focus {
    text-decoration: underline;
    border-color: transparent;
    box-shadow: none;
  }
  
  .btn-link:disabled,
  .btn-link.disabled {
    color: #999;
  }
  
  .btn-lg,
  .btn-group-lg>.btn {
    padding: 1.125rem 2.25rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
  }
  
  .btn-sm,
  .btn-group-sm>.btn {
    padding: 0.40625rem 1.25rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.1875rem;
  }
  
  .btn-block {
    display: block;
    width: 100%;
  }
  
  .btn-block+.btn-block {
    margin-top: 0.5rem;
  }


  
    .form-group {
    margin-bottom: 1rem;
  }

  


  

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
  }

  a {
    color: #9c27b0;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:hover {
    color: #0a6ebd;
    text-decoration: underline;
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
  }

  a:not([href]):not([tabindex]):hover,
  a:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none;
  }

  a:not([href]):not([tabindex]):focus {
    outline: 0;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    -ms-overflow-style: scrollbar;
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #6c757d;
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: .5rem;
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }

  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }

  @media print {
    *,
    *::before,
    *::after {
      text-shadow: none !important;
      box-shadow: none !important;
    }
    a:not(.btn) {
      text-decoration: underline;
    }
    abbr[title]::after {
      content: " (" attr(title) ")";
    }
    pre {
      white-space: pre-wrap !important;
    }
    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }
    thead {
      display: table-header-group;
    }
    tr,
    img {
      page-break-inside: avoid;
    }
    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }
    h2,
    h3 {
      page-break-after: avoid;
    }
    @page {
      size: a3;
    }
    body {
      min-width: 992px !important;
    }
    .container {
      min-width: 992px !important;
    }
    .navbar {
      display: none;
    }
    .badge {
      border: 1px solid #000;
    }
    .table {
      border-collapse: collapse !important;
    }
    .table td,
    .table th {
      background-color: #fff !important;
    }
    .table-bordered th,
    .table-bordered td {
      border: 1px solid #ddd !important;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  @-ms-viewport {
    width: device-width;
  }

  article,
  aside,
  dialog,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  body {
    margin: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fafafa;
  }

  [tabindex="-1"]:focus {
    outline: 0 !important;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 500;
  }

  dd {
    margin-bottom: .5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  dfn {
    font-style: italic;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
  }

  a {
    color: #9c27b0;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  a:hover {
    color: #0a6ebd;
    text-decoration: underline;
  }

  a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
  }

  a:not([href]):not([tabindex]):hover,
  a:not([href]):not([tabindex]):focus {
    color: inherit;
    text-decoration: none;
  }

  a:not([href]):not([tabindex]):focus {
    outline: 0;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    -ms-overflow-style: scrollbar;
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #6c757d;
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: .5rem;
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }
  
  

  @media (min-width: 768px) {
    .col-md {
      flex-basis: 0;
      flex-grow: 1;
      max-width: 100%;
    }
    .col-md-auto {
      flex: 0 0 auto;
      width: auto;
      max-width: none;
    }
    .col-md-1 {
      flex: 0 0 8.333333%;
      max-width: 8.333333%;
    }
    .col-md-2 {
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
    }
    .col-md-3 {
      flex: 0 0 25%;
      max-width: 25%;
    }
    .col-md-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
    .col-md-5 {
      flex: 0 0 41.666667%;
      max-width: 41.666667%;
    }
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .col-md-7 {
      flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
    .col-md-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
    .col-md-9 {
      flex: 0 0 75%;
      max-width: 75%;
    }
    .col-md-10 {
      flex: 0 0 83.333333%;
      max-width: 83.333333%;
    }
    .col-md-11 {
      flex: 0 0 91.666667%;
      max-width: 91.666667%;
    }
    .col-md-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
    .order-md-first {
      order: -1;
    }
    .order-md-last {
      order: 13;
    }
    .order-md-0 {
      order: 0;
    }
    .order-md-1 {
      order: 1;
    }
    .order-md-2 {
      order: 2;
    }
    .order-md-3 {
      order: 3;
    }
    .order-md-4 {
      order: 4;
    }
    .order-md-5 {
      order: 5;
    }
    .order-md-6 {
      order: 6;
    }
    .order-md-7 {
      order: 7;
    }
    .order-md-8 {
      order: 8;
    }
    .order-md-9 {
      order: 9;
    }
    .order-md-10 {
      order: 10;
    }
    .order-md-11 {
      order: 11;
    }
    .order-md-12 {
      order: 12;
    }
    .offset-md-0 {
      margin-left: 0;
    }
    .offset-md-1 {
      margin-left: 8.333333%;
    }
    .offset-md-2 {
      margin-left: 16.666667%;
    }
    .offset-md-3 {
      margin-left: 25%;
    }
    .offset-md-4 {
      margin-left: 33.333333%;
    }
    .offset-md-5 {
      margin-left: 41.666667%;
    }
    .offset-md-6 {
      margin-left: 50%;
    }
    .offset-md-7 {
      margin-left: 58.333333%;
    }
    .offset-md-8 {
      margin-left: 66.666667%;
    }
    .offset-md-9 {
      margin-left: 75%;
    }
    .offset-md-10 {
      margin-left: 83.333333%;
    }
    .offset-md-11 {
      margin-left: 91.666667%;
    }
  }
  

  
  
  
  
  
  
  
  
  
  
  `
// `