import { css } from '@emotion/react'

export const resetcss = css`
  body {
    min-width: 320px;
    line-height: 1;
  }

  :invalid,
  :-moz-submit-invalid,
  :-moz-ui-invalid {
    box-shadow: none;
  }

  *,
  :after,
  :before {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  img {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    &:after,
    &:before {
      content: '';
      content: none;
    }
  }

  a {
    text-decoration: none;
    background: transparent;

    &:visited {
      filter: grayscale(50%);
    }

    &:active,
    &:hover {
      outline: 0;
    }

    img {
      border: 0;
    }
  }

  input,
  select,
  textarea {
    border-radius: 0px;
    appearance: none;
    outline: none;
    border: 0;
  }

  fieldset {
    border: 0;
  }

  button {
    outline-color: #fff;
    border: 0;
    appearance: none;
    background-clip: padding-box;
    background-color: transparent;
  }

  button,
  input[type='button'] {
    cursor: pointer;
    appearance: button;
    border: 0;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  button,
  input {
    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
  }

  input {
    border: none;
    outline: none;

    &[type='reset'],
    &[type='submit'] {
      cursor: pointer;
      appearance: button;
    }

    &[type='search'] {
      appearance: textfield;
      box-sizing: border-box;

      &::-webkit-search-cancel-button,
      &::-webkit-search-decoration {
        appearance: none;
      }
    }

    &::-ms-clear {
      display: none !important;
    }
  }

  input[type='password']::-ms-reveal {
    display: none !important;
  }

  textarea {
    resize: none;
    overflow: auto;
  }

  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }

  img {
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    pointer-events: none;
    user-select: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-animation: autofill 0s forwards;
    animation: autofill 0s forwards;
    // border-color: #fff !important;
  }

  @keyframes autofill {
    100% {
      background: transparent;
      color: #fff;
    }
  }

  @-webkit-keyframes autofill {
    100% {
      background: transparent;
      color: #fff;
    }
  }
`
