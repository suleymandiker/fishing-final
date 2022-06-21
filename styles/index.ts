import { css } from "@emotion/react";
import { theme } from "./theme";
import { fonts } from "./fonts";

export { resetcss } from "./reset-css";

const input = css`
  width: 100%;
  font-family: inherit;
  background: none;
  border: none;
  border-bottom: 2px solid white;
  -webkit-appearance: none;
`;

const arrow = css`
  position: relative;
  width: 15px;
  height: 15px;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 1px;
    border: 3px solid white;
    border-bottom-color: transparent;
    border-left-color: transparent;
    transform-origin: center;
  }
`;

const btn = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 4px;
  background: #ff6476;
  font-family: "Bebas";
  background: var(--secondaryColor);
  border: 2px solid #9cb5e0;
  border-radius: 32px;
  font-size: 26px;
  text-decoration: none;
  color: var(--white);
  font-weight: 400;
  user-select: none;
  cursor: pointer;
  &:before {
    content: " ";
    position: absolute;
    z-index: 1;
    inset: 1px;
    border: 6px solid #ff6476;
    border-radius: 32px;
  }
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    border-radius: 32px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0) 50%
    );
  }
  &.btn_active {
    pointer-events: none;
  }
  &.btn_not_active {
    &:before {
      border-color: #233864;
    }
  }
  &.left_radius {
    border-radius: 32px 0 0 32px;
    &:before,
    &:after {
      border-radius: 32px 0 0 32px;
    }
  }
  &.right_radius {
    border-radius: 0 32px 32px 0;
    &:before,
    &:after {
      border-radius: 0 32px 32px 0;
    }
  }
  &.no_radius {
    border-radius: 0;
    &:before,
    &:after {
      border-radius: 0;
    }
  }
  &:disabled {
    pointer-events: none;
    opacity: 0.7;
    cursor: default;
    &:before {
      border-color: #233864;
    }
  }
  &:hover {
    &:after {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(255, 255, 255, 0) 50%,
        rgba(0, 0, 0, 0.2) 100%
      );
    }
  }
`;

export const body = css`
  // * theme import ediyoruz.
  ${theme}

  // * fonts import ediyoruz.
  ${fonts}

  html {
    scroll-behavior: smooth;
  }
  body {
    padding: 0;
    margin: 0;
    position: relative;
    font-size: 16px;
    font-family: var(--primaryFont);
    line-height: 1.2;
    background-color: var(--backgroundcolor);
    transition: background-color 0.3s;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  input,
  textarea,
  button,
  select,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  button:focus {
    *outline: 0;
  }

  // ******************************************** //
  // ? Sabit renkler
  &.light {
    --bg-color: var(--lightColor);
    --color: var(--darkColor);
    --border-color: var(--darkColor);
    --hover-color: var(--lightColor);
    --hover-bg-color: var(--darkColor);
  }
  &.dark {
    --bg-color: var(--darkColor);
    --color: var(--lightColor);
    --border-color: var(--darkColor);
    --hover-color: var(--darkColor);
    --hover-bg-color: var(--lightColor);
  }
  &.success {
    --bg-color: var(--successColor);
    --color: var(--lightColor);
    --border-color: var(--successColor);
    --hover-color: var(--successColor);
    --hover-bg-color: var(--lightColor);
  }
  &.alert {
    --bg-color: var(--alertColor);
    --color: var(--lightColor);
    --border-color: var(--alertColor);
    --hover-color: var(--alertColor);
    --hover-bg-color: var(--lightColor);
  }
  &.danger {
    --bg-color: var(--dangerColor);
    --color: var(--lightColor);
    --border-color: var(--dangerColor);
    --hover-color: var(--dangerColor);
    --hover-bg-color: var(--lightColor);
  }
  &.primary {
    --bg-color: var(--primaryColor);
    --color: var(--lightColor);
    --border-color: var(--primaryColor);
    --hover-color: var(--primaryColor);
    --hover-bg-color: var(--lightColor);
  }
  &.secondary {
    --bg-color: var(--secondaryColor);
    --color: var(--lightColor);
    --border-color: var(--secondaryColor);
    --hover-color: var(--secondaryColor);
    --hover-bg-color: var(--lightColor);
  }
  &.black {
    --bg-color: var(--black);
    --color: var(--white);
    --border-color: var(--black);
    --hover-color: var(--black);
    --hover-bg-color: var(--white);
  }
  &.white {
    --bg-color: var(--white);
    --color: var(--black);
    --border-color: var(--white);
    --hover-color: var(--black);
    --hover-bg-color: var(--white);
  }

  // ******************************************** //

  .blur_bg {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: brightness(130%) blur(23px);
  }

  .page_loaded {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    animation: pageLoaded 0.8s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;

    &:before {
      position: absolute;
      content: "";
      width: 80px;
      height: 80px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: var(--white);
      border-radius: 50%;
      opacity: 0;
      pointer-events: none;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      z-index: 999999999;
      animation: pageLoadedBefore 0.8s;
      animation-timing-function: ease-in-out;
      animation-direction: alternate;
    }
    &:after {
      position: absolute;
      content: "";
      inset: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: var(--backgroundcolor);
      pointer-events: none;
      z-index: 99999999;
      animation: pageLoadedAfter 0.8s;
      animation-timing-function: ease-in-out;
      animation-direction: alternate;
    }
    @keyframes pageLoadedAfter {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    }

    @keyframes pageLoadedBefore {
      from {
        opacity: 1;
        width: 80px;
        height: 80px;
      }
      to {
        opacity: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
      }
    }
  }

  .page_loading {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;

    &:before {
      position: absolute;
      content: "";
      width: 80px;
      height: 80px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: var(--white);
      border-radius: 50%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      z-index: 999999999;
      animation: pageLoad 0.8s infinite;
      animation-timing-function: ease-in-out;
      animation-direction: alternate;
    }

    @keyframes pageLoad {
      from {
        transform: rotateX(0deg) translate(-50%, -50%);
      }
      to {
        transform: rotateX(30deg) translate(-50%, 30%);
      }
    }
    &:after {
      position: absolute;
      content: "";
      inset: 0;
      width: 100%;
      height: 100%;
      background: var(--backgroundcolor);
      z-index: 99999999;
    }
  }

  .loading {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    background: rgba(255, 255, 255, 0.4);
    z-index: 999999999999;
    &:after {
      position: absolute;
      width: 400px;
      height: 400px;
      content: "";
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: url(/media/logo.webp) center center no-repeat;
      background-size: 200px auto;
      background-size: 200px auto;
      animation: faden 1s infinite;
      animation-direction: alternate;
      animation-timing-function: ease-in-out;
    }
  }

  @keyframes faden {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .mobil_padding {
    @media only screen and (max-width: 1200px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  .arrow_left {
    ${arrow}
    &:after {
      left: 5px;
      transform: rotate(-135deg);
    }
  }
  .arrow_right {
    ${arrow}
    &:after {
      right: 5px;
      transform: rotate(45deg);
    }
  }
  .arrow_up {
    ${arrow}
    &:after {
      top: -3px;
      right: 1px;
      transform: rotate(135deg);
    }
  }

  .arrow_down {
    ${arrow}
    &:after {
      top: -3px;
      right: 1px;
      transform: rotate(135deg);
    }
  }

  .hr_line {
    margin: 50px 0 30px;
    height: 2px;
    background-color: #7488a6;
  }
  .title {
    position: relative;
    width: 100%;
    max-width: 1010px;
    margin: 30px auto;
    text-align: center;
    font-size: 40px;
    color: var(--primaryColor);
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 390px;
      transform: translateX(-100%);
      margin-left: -15px;
      border-top: 2px solid var(--primaryColor);
    }
    &::after {
      content: "";
      position: absolute;
      width: 390px;
      margin-left: 15px;
      border-top: 2px solid var(--primaryColor);
    }
    span {
      font-size: 22px;
    }
    @media only screen and (max-width: 760px) {
      font-size: 24px;
      span {
        font-size: 20px;
      }
    }
    @media only screen and (max-width: 580px) {
      font-size: 24px;
      span {
        font-size: 18px;
      }
    }
    @media only screen and (max-width: 480px) {
      *margin: 10px auto 30px !important;
      font-size: 18px;
      span {
        font-size: 12px;
      }
    }
  }
  .slide_img_title {
    @media only screen and (max-width: 480px) {
      margin: 20px auto !important;
    }

    &::before {
      top: 15px !important;
      @media only screen and (max-width: 480px) {
        top: 2px !important;
      }
    }
    &::after {
      top: 15px !important;
      @media only screen and (max-width: 480px) {
        top: 2px !important;
      }
    }
  }

  /* .animate {
    opacity: 0;
    transition: opacity, transform 0.6s ease-out;
  }
  .slideUp {
    transform: translateY(30px);
  }
  .slideDown {
    transform: translateY(-30px);
  }
  .zoomIn {
    transform: scale(0.7);
  }
  .zoomOut {
    transform: scale(1.1);
  }
  .fade {
    opacity: 0;
  }
  .animate-active {
    opacity: 1;
    transform: translateY(0);
    transform: scale(1);
  } */

  .flex {
    display: flex;
  }
  .f-wrap {
    flex-wrap: wrap;
  }

  .grid {
    display: grid;
  }
  .col-2 {
    grid-template-columns: 1fr 1fr;
  }
  .col-3 {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .col-4 {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .col-5 {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  .col-6 {
    grid-template-columns: repeat(6, 1fr);
  }
  .col-1-9 {
    grid-template-columns: 1fr 8fr;
  }
  .col-2-9 {
    grid-template-columns: 2fr 7fr;
  }
  .col-3-9 {
    grid-template-columns: 3fr 6fr;
  }
  .col-4-9 {
    grid-template-columns: 4fr 5fr;
  }
  .col-5-9 {
    grid-template-columns: 5fr 4fr;
  }

  .col-6-9 {
    grid-template-columns: 6fr 3fr;
  }

  .col-gap-5 {
    column-gap: 5px;
  }
  .col-gap-10 {
    column-gap: 10px;
  }
  .col-gap-20 {
    column-gap: 20px;
  }
  .col-gap-40 {
    column-gap: 40px;
  }
  .row-gap-5 {
    row-gap: 5px;
  }
  .row-gap-10 {
    row-gap: 10px;
  }
  .row-gap-20 {
    row-gap: 20px;
  }
  .row-gap-40 {
    row-gap: 40px;
  }
  .gap-5 {
    gap: 5px;
  }
  .gap-10 {
    gap: 10px;
  }
  .gap-20 {
    gap: 20px;
  }
  .gap-40 {
    gap: 40px;
  }

  .m-0 {
    margin: 0 !important;
  }
  .m-10 {
    margin: 10px !important;
  }
  .m-15 {
    margin: 15px !important;
  }
  .m-20 {
    margin: 20px !important;
  }
  .m-30 {
    margin: 30px !important;
  }
  .m-40 {
    margin: 40px !important;
  }

  .m-left-0 {
    margin-left: 0 !important;
  }
  .m-left-5 {
    margin-left: 5px !important;
  }
  .m-left-10 {
    margin-left: 10px !important;
  }
  .m-left-15 {
    margin-left: 15px !important;
  }
  .m-left-20 {
    margin-left: 20px !important;
  }
  .m-left-30 {
    margin-left: 30px !important;
  }
  .m-left-40 {
    margin-left: 40px !important;
  }
  .m-right-0 {
    margin-right: 0 !important;
  }
  .m-right-5 {
    margin-right: 5px !important;
  }
  .m-right-10 {
    margin-right: 10px !important;
  }
  .m-right-15 {
    margin-right: 15px !important;
  }
  .m-right-20 {
    margin-right: 20px !important;
  }
  .m-right-40 {
    margin-right: 40px !important;
  }
  .m-top-0 {
    margin-top: 0 !important;
  }
  .m-top-5 {
    margin-top: 5px !important;
  }
  .m-top-10 {
    margin-top: 10px !important;
  }
  .m-top-15 {
    margin-top: 15px !important;
  }
  .m-top-20 {
    margin-top: 20px !important;
  }
  .m-top-30 {
    margin-top: 30px !important;
  }
  .m-top-40 {
    margin-top: 40px !important;
  }

  .m-bottom-0 {
    margin-bottom: 0 !important;
  }
  .m-bottom-5 {
    margin-bottom: 5px !important;
  }
  .m-bottom-10 {
    margin-bottom: 10px !important;
  }
  .m-bottom-15 {
    margin-bottom: 15px !important;
  }
  .m-bottom-20 {
    margin-bottom: 20px !important;
  }
  .m-bottom-30 {
    margin-bottom: 30px !important;
  }
  .m-bottom-40 {
    margin-bottom: 40px !important;
  }
  .p-0 {
    padding: 0 !important;
  }
  .p-10 {
    padding: 10px;
  }
  .p-20 {
    padding: 20px;
  }
  .p-30 {
    padding: 30px;
  }
  .p-40 {
    padding: 40px;
  }

  .p-top-5 {
    padding-top: 5px !important;
  }
  .p-top-10 {
    padding-top: 10px !important;
  }
  .p-top-20 {
    padding-top: 20px !important;
  }
  .p-top-30 {
    padding-top: 30px !important;
  }
  .p-top-40 {
    padding-top: 40px !important;
  }

  .p-bottom-5 {
    padding-bottom: 5px !important;
  }
  .p-bottom-10 {
    padding-bottom: 10px !important;
  }
  .p-bottom-20 {
    padding-bottom: 20px !important;
  }
  .p-bottom-30 {
    padding-bottom: 30px !important;
  }
  .p-bottom-40 {
    padding-bottom: 40px !important;
  }

  .p-left-5 {
    padding-left: 5px !important;
  }
  .p-left-10 {
    padding-left: 10px !important;
  }
  .p-left-30 {
    padding-left: 30px !important;
  }
  .p-left-40 {
    padding-left: 40px !important;
  }

  .p-right-5 {
    padding-right: 5px !important;
  }
  .p-right-10 {
    padding-right: 10px !important;
  }
  .p-right-20 {
    padding-right: 20px !important;
  }
  .p-right-30 {
    padding-right: 30px !important;
  }
  .p-right-40 {
    padding-right: 40px !important;
  }

  .t-size-large {
    font-size: 32px;
  }
  .t-size-medium {
    font-size: 24px;
  }
  .t-size-small {
    font-size: 12px;
  }
  .white {
    color: var(--lightColor);
  }
  .primaryColor {
    color: var(--primaryColor);
  }
  .secondaryColor {
    color: var(--secondaryColor);
  }
  .black {
    color: var(--black);
  }
  .gray {
    color: var(--gray);
  }
  .red {
    color: var(--red);
  }

  .overlay {
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  .alert {
    color: var(--alertColor);
  }
  .success {
    color: var(--successColor);
  }
  .danger {
    color: var(--dangerColor);
  }
  .alert_con {
    position: fixed;
    width: intrinsic;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--bg-color);
    color: var(--color);
    top: 3px;
    z-index: 999;
  }
  .bold {
    font-weight: 700;
  }
  small {
    font-size: smaller;
    font-weight: 400;
  }

  .hidden,
  .hide {
    display: none !important;
  }

  .clearfix {
    clear: both;

    &::before,
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    margin-bottom: 60px;
    embed,
    iframe,
    object {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .error {
    float: none !important;
    color: #de5d44;
    border-color: #de5d44;
  }
  .form_group {
    position: relative;
    width: 100%;
    display: inline-block;
    margin-bottom: 10px;
    .tooltip {
      position: relative;
      display: inline-block;
      text-align: center;
      width: 15px;
      height: 15px;
      font-size: 12px;
      line-height: 15px;
      font-weight: 700;
      color: #fff !important;
      background-color: silver;
      border-radius: 50%;
    }
    .tooltip:hover:after {
      position: absolute;
      display: inline-block;
      width: 240px;
      bottom: 25px;
      color: #fff;
      text-align: left;
      content: attr(data-info);
      left: 0;
      padding: 8px 12px;
      z-index: 98;
      background: var(--primaryColor);
      border-radius: 5px;
    }

    label {
      color: var(--gray);
      font-size: 14px;
      transition: 0.1s ease all;
      -moz-transition: 0.1s ease all;
      -webkit-transition: 0.1s ease all;
    }
    .error {
      float: none !important;
      color: #de5d44;
      border-color: #de5d44;
    }

    small {
      font-size: 14px;
    }
  }

  ::placeholder {
    font-size: 13px;
    opacity: 0.8;
  }
  input[type="search"] {
    -webkit-appearance: none;
  }
  input,
  select {
    height: 44px;
  }

  input,
  select,
  textarea {
    ${input}
    margin: 5px 0;
    padding-left: 0px;
    padding-right: 0px;
    font-size: 16px;
  }
  input[disabled] {
    border-color: var(--borderColor) !important;
  }
  .input-small {
    ${input}
    margin: 2px 0;
    height: 28px;
    padding-left: 0px;
    padding-right: 0px;
    font-size: 14px;
  }
  .input-medium {
    ${input}
    margin: 3px 0;
    height: 32px;
    padding-left: 0px;
    padding-right: 0px;
    font-size: 15px;
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: #1989ff;
    outline: 0;
    box-shadow: 0 0 0 4px rgba(222, 222, 222, 0.3);
  }

  input:read-only,
  textarea:read-only {
    border-color: transparent;
    outline: 0;
  }

  select {
    background: #fff url(/media/select-arrow.svg) right 15px center no-repeat;
    background-size: 14px 14px;
    padding-right: 20px;
  }

  input {
    &[type="radio"] {
      position: relative;
      height: 22px;
      width: 22px;
      float: left;
      margin: 0 7px 0 0 !important;
      padding: 0;
      background-color: #fff;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      border: 1px solid var(--borderColor);
      -webkit-appearance: none;
      border-radius: 50%;
      &::after {
        position: absolute;
        left: 4px;
        top: 4px;
        width: 12px;
        height: 12px;
        content: "";
        background-color: white;
        border-radius: 50%;
      }
      &:hover {
        border-color: #4d4d4d;
      }

      &:checked {
        *background-image: url(/media/input-radio-b.svg);
        border-color: #4d4d4d;
        &::after {
          background-color: #4d4d4d;
        }
      }
    }

    &[type="checkbox"] ~ label,
    &[type="radio"] ~ label {
      font-size: 18px;
      color: #333;
    }

    &[type="checkbox"] {
      height: 18px;
      width: 18px;
      float: left;
      margin: 0 7px 0 0 !important;
      padding: 0;
      background-color: #fff;
      background-image: url(/media/input-checkbox-w.svg);
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      border: 1px solid var(--borderColor);
      -webkit-appearance: none;
      border-radius: var(--radius);

      &:hover {
        border-color: #4d4d4d;
      }

      &:checked {
        background-image: url(/media/input-checkbox-b.svg);
        border-color: #4d4d4d;
      }
    }

    &[type="number"] {
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }

  section {
    position: relative;
    clear: both;

    .section_inner {
      display: block;
      width: 100%;
      max-width: 990px;
      margin: 40px auto;
    }
  }
  .max {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .w1366 {
    max-width: 1366px;
  }
  .w1350 {
    max-width: 1350px;
  }
  .w1267 {
    max-width: 1267px;
  }
  .w1280 {
    max-width: 1280px;
  }
  .w1260 {
    max-width: 1280px;
  }

  .w1200 {
    max-width: 1200px;
  }
  .w1180 {
    max-width: 1180px;
  }

  .w1080 {
    max-width: 1080px;
  }

  .w1024 {
    max-width: 1024px;
  }

  .w960 {
    max-width: 960px;
  }
  .w940 {
    max-width: 940px;
  }
  .w860 {
    max-width: 860px;
  }

  .w760 {
    max-width: 760px;
  }

  .w700 {
    max-width: 700px;
  }

  .w660 {
    max-width: 660px;
  }
  .w620 {
    max-width: 620px;
  }
  .w560 {
    max-width: 560px;
  }
  .w480 {
    max-width: 480px;
  }
  .w460 {
    max-width: 460px;
  }
  .w400 {
    max-width: 460px;
  }
  .w360 {
    max-width: 360px;
  }

  .content {
    display: block;
    width: 100%;
    margin: 0 auto 30px;
    @media only screen and (max-width: 1200px) {
      overflow: hidden;
    }
    p {
      font-family: var(--secondaryFont);
      color: var(--pColor);
      font-weight: 500 !important;
      line-height: 1.7;
      margin: 0 auto 10px;
    }

    h2 {
      font-size: 24px;
      font-weight: 300;
      margin: 15px auto 10px;
    }

    h3 {
      margin: 15px auto 10px;
    }

    ul {
      margin: 0 auto 20px;
      list-style: disc;

      li {
        margin-left: 20px;
        margin-bottom: 5px;
      }
    }

    ol {
      margin: 0 auto 20px;
      list-style: decimal;

      li {
        margin-left: 20px;
        margin-bottom: 5px;
      }
    }
  }

  table {
    width: 100%;
    td {
      vertical-align: middle;
      img {
        margin: 0 !important;
      }
    }
    @media only screen and (max-width: 560px) {
      overflow: hidden;
      font-size: 10px;
      td {
        padding: 5px 0;
      }
    }
  }

  .inline-block {
    display: inline-block;
  }
  .border {
    border: 1px solid var(--borderColor);
  }
  .border-top {
    border-top: 1px solid var(--borderColor);
  }
  .border-bottom {
    border-bottom: 1px solid var(--borderColor);
  }
  .border-left {
    border-left: 1px solid var(--borderColor);
  }
  .border-right {
    border-right: 1px solid var(--borderColor);
  }

  table.border {
    td {
      padding: 5px 5px 2px;
      border: 1px solid silver;
    }
  }
  table.border_dot {
    td {
      padding: 5px 5px 2px;
      border: 1px dotted silver;
    }
  }
  h1 {
    margin-bottom: 30px;
    font-size: 80px;
    font-weight: 400;
    line-height: 1.2;
    color: var(--h1Color);
    @media only screen and (max-width: 480px) {
      font-size: 52px;
      margin-bottom: 10px !important;
    }
  }
  h2 {
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 72px;
    line-height: 1.2;
    text-align: left;
    color: var(--h2Color);
    font-family: var(--primaryFont);
    @media only screen and (max-width: 768px) {
      font-size: 22px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 40px;
      margin-bottom: 40px !important;
    }
  }
  h3 {
    margin-bottom: 15px;
    font-weight: 300;
    font-size: 48px;
    line-height: 1.2;
    @media only screen and (max-width: 480px) {
      font-size: 28px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    color: var(--pColor);
    text-align: left;
    padding-bottom: 20px;
  }
  ul {
    padding-bottom: 20px;
    font-size: 16px;
    font-weight: 400;
    color: var(--pColor);
    text-align: left;
    padding-bottom: 20px;
    li {
      padding-bottom: 5px;
      line-height: 1.2;
      margin-left: 20px;
    }
  }

  a {
    color: var(--pColor);
    font-size: 16px;
    position: relative;
    text-decoration: none;
    outline: none;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .text {
    h1 {
      font-size: 46px;
      @media only screen and (max-width: 480px) {
        font-size: auto;
      }
    }
    h2 {
      font-size: 28px;
      @media only screen and (max-width: 480px) {
        font-size: 21px;
      }
    }
    p {
      font-size: 18px;
      @media only screen and (max-width: 480px) {
        font-size: 16px;
      }
    }
  }
  b,
  strong {
    font-weight: 700;
  }

  hr {
    height: 1px;
    background: silver;
    border: none;
  }

  .f-size-14 {
    font-size: 14px !important;
  }
  .f-size-16 {
    font-size: 16px !important;
  }
  .f-size-18 {
    font-size: 18px !important;
  }
  .f-size-21 {
    font-size: 21px !important;
  }

  .pointer {
    cursor: pointer;
  }

  .full-img {
    width: 100%;
    height: auto;
    margin: 20px auto;
  }

  .half-img {
    float: left;
    width: calc(50% - 20px);
    height: auto;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .btn {
    ${btn}
  }
  .btn-xsmall {
    ${btn}
    font-size: 12px;
    height: 16px;
    padding-left: 5px;
    padding-right: 5px;
  }
  .btn-small {
    ${btn}
    height: 45px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 4px;
    font-size: 18px;
    &:before {
      border-width: 4px;
    }
  }

  .btn-medium {
    ${btn}
    height: 50px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 4px;
    font-size: 20px;
  }
  .btn-large {
    ${btn}
    font-size: 42px;
    height: 65px;
    padding-left: 30px;
    padding-right: 30px;
    &:before {
      border-width: 8.5px;
    }
  }
  .bordered {
    color: var(--bg-color);
    background-color: transparent;
    border: 1px solid var(--color);
    &:hover {
      color: var(--bg-color);
      background-color: var(--color);
    }
  }
  .bg-transparent {
    background-color: transparent;
    &:hover {
      background-color: transparent;
    }
  }

  .btn-close {
    width: 20px;
    height: 28px;
    border-radius: 4px;
    font-size: 18px;
    color: var(--black);
    &:hover {
      color: var(--errorColor);
    }
  }

  .r8 {
    border-radius: 8px;
  }
  .r12 {
    border-radius: 12px;
  }
  .r16 {
    border-radius: 16px;
  }

  .accept label {
    font-size: 16px;
  }

  .payment_options {
    display: block;
    margin: 30px 0 50px;

    img {
      width: auto;
      height: 35px;
      margin: 0 auto;
    }
  }

  figure.image {
    img {
      width: 100%;
      height: auto;
    }

    figcaption {
      padding: 7px;
      background: #f4f4f4;
      color: #333;
      font-size: 14px;
    }
  }

  .image-style-align-left {
    width: 50%;
    margin: 0 15px 15px 0;
    float: left;
  }

  .image-style-align-right {
    width: 50%;
    margin: 0 0 15px 15px;
    float: right;
  }

  .note-float-left {
    margin: 0 20px 20px 0;
  }

  .full {
    display: block;
    width: 100% !important;
  }
  .f-center {
    margin-left: auto;
    margin-right: auto;
  }

  .f-left,
  .left {
    float: left;
  }

  .f-right,
  .right {
    float: right;
  }

  .f-none {
    float: none !important;
  }

  .t-left {
    text-align: left;
  }

  .t-right {
    text-align: right;
  }

  .t-center {
    text-align: center;
  }

  .t-justify {
    text-align: justify;
  }

  .underline {
    text-decoration: underline;
  }

  @media only screen and (max-width: 480px) {
    .image-style-align-left,
    .image-style-align-right {
      width: 100%;
      margin: 0 0 15px 0;
      float: none;
    }

    .popup_con {
      width: 260px;
      padding: 6px;
    }
  }
`;
