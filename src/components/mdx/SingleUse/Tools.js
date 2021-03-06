import React from 'react'
import { css } from '@emotion/core'
import { bpMaxMD, bpMinMD, bpMinSM } from '../../../lib/breakpoints'

const mainLayout = css`
  grid-column: 1/4;
  max-width: 700px;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 1.8em auto 0;
  a {
    max-width: 200px;
  }
  img {
    transition: all 400ms ease;
    max-width: 120px;
    margin-bottom: 0;
    &:hover {
      transition: all 400ms ease;
      transform: translateY(-6px);
    }
  }
  h5 {
    transition: all 400ms ease;
    text-align: center;
    font-size: 1em;
    max-width: 200px;
    min-width: 200px;
    margin-bottom: 1.6em;
  }
  ${bpMaxMD} {
    flex-wrap: wrap;
  }
`

const largeImages = css`
  ${bpMaxMD} {
    flex-wrap: wrap;
  }
  a {
    max-width: 300px;
    ${bpMinSM} {
    max-width: 400px;
    }
  }
  img {
    max-width: 300px;
    padding: 0 1rem;
    ${bpMinSM} {
      max-width: 400px;
      }
  }
  h5 {
    max-width: 320px;
    min-width: 220px;
  }
`

export const Tools = ({ children }) => {
  return <div css={mainLayout}>{children}</div>
}

export const Hardware = ({ children }) => {
  return <div css={[mainLayout, largeImages]}>{children}</div>
}

export const AppQuestion = () => {
  return (
    <svg fill="none" height="168" viewBox="0 0 438 168" width="100%" style={{ margin: '1rem auto'}}>
      <filter
        id="a"
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
        height="167.009"
        width="438"
        x="0"
        y="0"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
        />
        <feBlend
          in2="BackgroundImageFix"
          mode="normal"
          result="effect1_dropShadow"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
        />
        <feBlend
          in2="effect1_dropShadow"
          mode="normal"
          result="effect2_dropShadow"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow"
          mode="normal"
          result="shape"
        />
      </filter>
      <mask id="b" fill="#fff">
        <path
          clip-rule="evenodd"
          d="m70 5c-34.2416 0-62 27.7583-62 62 0 34.242 27.7583 62 62 62h98c26.471 1.372 42.742 3.715 48.885 26.154.324 1.184 3.484 1.12 3.768-.074 5.036-21.18 20.485-24.918 49.347-26.08h98c34.242 0 62-27.758 62-62 0-34.2417-27.758-62-62-62z"
          fill="#fff"
          fill-rule="evenodd"
        />
      </mask>
      <g filter="url(#a)">
        <path
          clip-rule="evenodd"
          d="m70 5c-34.2416 0-62 27.7583-62 62 0 34.242 27.7583 62 62 62h98c26.471 1.372 42.742 3.715 48.885 26.154.324 1.184 3.484 1.12 3.768-.074 5.036-21.18 20.485-24.918 49.347-26.08h98c34.242 0 62-27.758 62-62 0-34.2417-27.758-62-62-62z"
          fill="#fbfbfb"
          fill-rule="evenodd"
        />
        <path
          d="m168 129 .052-.999-.026-.001h-.026zm48.885 26.154.964-.264zm3.768-.074-.973-.231zm49.347-26.08v-1h-.02l-.02.001zm-261-62c0-33.6894 27.3106-61 61-61v-2c-34.7939 0-63 28.2061-63 63zm61 61c-33.6894 0-61-27.311-61-61h-2c0 34.794 28.2061 63 63 63zm98 0h-98v2h98zm-.052 1.999c13.268.687 23.767 1.617 31.717 5.094 7.837 3.428 13.254 9.363 16.255 20.325l1.929-.528c-3.142-11.477-8.931-17.933-17.383-21.629-8.339-3.648-19.21-4.575-32.414-5.26zm47.972 25.419c.198.723.788 1.119 1.271 1.317.503.206 1.079.284 1.612.273.534-.01 1.107-.111 1.601-.336.475-.216 1.048-.633 1.221-1.361l-1.945-.462c.031-.131.103-.092-.105.002-.188.086-.479.151-.811.158-.333.006-.625-.047-.815-.125-.209-.085-.136-.125-.1.006zm5.705-.107c2.456-10.327 7.397-16.285 15.185-19.869 7.898-3.635 18.789-4.861 33.23-5.443l-.08-1.998c-14.42.58-25.685 1.804-33.986 5.624-8.411 3.87-13.714 10.371-16.294 21.224zm146.375-27.311h-98v2h98zm61-61c0 33.689-27.311 61-61 61v2c34.794 0 63-28.206 63-63zm-61-61c33.689 0 61 27.3106 61 61h2c0-34.7939-28.206-63-63-63zm-298 0h298v-2h-298z"
          fill="#f0eded"
          mask="url(#b)"
        />
      </g>
      <path
        d="m109.745 52h-9.6l.16 1.52 1.48.28c.72.16 1.16.44 1.4.8.2.4.24 1.12.08 2.16-.16 1.08-.6 2.72-1.28 4.96l-3.0803 10.16-.28.04-4.2-13.92c-.52-1.52-.76-2.6-.76-3.16s.28-.92.92-1.04l1.88-.28.12-1.52h-11.4l.12 1.52 1.84.4c.76.16 1.24.56 1.44 1.24l.92 2.8-4.96 13.92h-.24l-4.28-13.88c-.28-.88-.48-1.56-.6-2-.08-.4-.16-.8-.16-1.2 0-.36.04-.6.2-.72s.44-.2.76-.28l1.84-.28.12-1.52h-11.56l.12 1.52 1.92.4c.76.16 1.24.56 1.44 1.24l7.36 21.88h3.28l5.72-16.36h.2l5.28 16.36h3.2l4.9603-15.32c.8-2.36 1.4-4.04 1.88-5.08s.88-1.72 1.2-2.04.84-.56 1.52-.8l.88-.28zm20.656 25-.12-1.48-.92-.12c-.68-.08-1.12-.16-1.32-.28-.24-.08-.32-.24-.32-.48v-10.4c0-2-.52-3.52-1.52-4.56-.88-.88-2-1.32-3.36-1.32-1.92 0-4.08 1-6.48 2.92h-.2v-12.16l-6.8 1.96-.12 1.08 2.4 1.04c.36.24.56.6.56 1.16v20.28c0 .44-.48.68-1.36.76l-1.04.12-.12 1.48h9.36l-.12-1.48-1.24-.12c-1.04-.04-1.52-.28-1.52-.72v-11.68c1.24-.96 2.56-1.48 3.96-1.48 1.24 0 2.16.4 2.72 1.12s.84 2.04.84 3.92v8.08c0 .48-.44.72-1.36.76l-.88.12-.12 1.48zm19.195-2.24-.68-.96c-.88.64-1.52.96-1.92.96-.72 0-1-.52-.92-1.64l.28-6.68c.08-3.04-.32-5.12-1.2-6.32-.92-1.16-2.52-1.76-4.84-1.76-1.84 0-3.64.6-5.48 1.72-1.84 1.16-2.76 2.28-2.76 3.36 0 .56.2 1.04.64 1.44.4.4.96.56 1.6.56s1.2-.2 1.6-.6.64-.88.64-1.4c0-.32-.08-.68-.24-1s-.32-.56-.48-.76-.24-.32-.24-.36c0-.16.28-.32.92-.52s1.28-.32 1.92-.32c1.28 0 2.28.4 2.96 1.2.64.8.96 2.12.96 4v.36c-3.56.84-6.16 1.8-7.76 2.88-1.6 1.04-2.4 2.4-2.4 4.04 0 1.36.48 2.48 1.44 3.36s2.08 1.32 3.44 1.32c1.68 0 3.36-1.04 5.08-3.08h.2c.04 1.04.32 1.8.88 2.36.52.52 1.2.8 2.04.8 1.4 0 2.84-1 4.32-2.96zm-7.48-1.6c-1.16 1.04-2.24 1.6-3.24 1.6-.76 0-1.4-.28-1.96-.76-.56-.52-.84-1.2-.84-2.04 0-.96.48-1.8 1.36-2.52.88-.76 2.48-1.44 4.8-2zm21.43 1.68-.16-1.08c-1.16.64-2.28.92-3.36.92-2.32 0-3.44-1.32-3.36-3.96l.24-9.44h6.24l.28-2.2h-6.52l.04-3.68-1.6-.24-5.44 4.72-.04 1.32 3.16.24-.24 10.4c-.04 1.92.4 3.36 1.28 4.32s2.08 1.44 3.6 1.44c1.08 0 2.16-.24 3.2-.76 1.04-.48 1.96-1.16 2.68-2zm28.511-.08-.68-.96c-.88.64-1.52.96-1.92.96-.72 0-1-.52-.92-1.64l.28-6.68c.08-3.04-.32-5.12-1.2-6.32-.92-1.16-2.52-1.76-4.84-1.76-1.84 0-3.64.6-5.48 1.72-1.84 1.16-2.76 2.28-2.76 3.36 0 .56.2 1.04.64 1.44.4.4.96.56 1.6.56s1.2-.2 1.6-.6.64-.88.64-1.4c0-.32-.08-.68-.24-1s-.32-.56-.48-.76-.24-.32-.24-.36c0-.16.28-.32.92-.52s1.28-.32 1.92-.32c1.28 0 2.28.4 2.96 1.2.64.8.96 2.12.96 4v.36c-3.56.84-6.16 1.8-7.76 2.88-1.6 1.04-2.4 2.4-2.4 4.04 0 1.36.48 2.48 1.44 3.36s2.08 1.32 3.44 1.32c1.68 0 3.36-1.04 5.08-3.08h.2c.04 1.04.32 1.8.88 2.36.52.52 1.2.8 2.04.8 1.4 0 2.84-1 4.32-2.96zm-7.48-1.6c-1.16 1.04-2.24 1.6-3.24 1.6-.76 0-1.4-.28-1.96-.76-.56-.52-.84-1.2-.84-2.04 0-.96.48-1.8 1.36-2.52.88-.76 2.48-1.44 4.8-2zm27.87-5.88c0-2.44-.68-4.48-2-6.12-1.36-1.68-3.08-2.48-5.24-2.48-2.08 0-3.96 1-5.68 3h-.2v-3.28l-6.56 1.8-.04 1.16.88.2c.72.2 1.2.48 1.4.84.2.4.32 1.2.32 2.4v19.68c0 .44-.48.68-1.36.76l-1.12.12-.12 1.48h9.68l-.12-1.48-1.44-.12c-1.04-.04-1.52-.28-1.52-.72v-7.44h.04c1.2.36 2.36.52 3.52.52 2.88 0 5.16-1 6.92-3.04s2.64-4.48 2.64-7.28zm-4.32 1.6c0 2.08-.44 3.8-1.32 5.08s-1.96 1.92-3.16 1.92c-1.44 0-2.88-.8-4.32-2.44v-9.76c1.08-1.28 2.4-1.92 3.96-1.92 1.44 0 2.6.64 3.48 1.92s1.36 3.04 1.36 5.2zm26-1.6c0-2.44-.68-4.48-2-6.12-1.36-1.68-3.08-2.48-5.24-2.48-2.08 0-3.96 1-5.68 3h-.2v-3.28l-6.56 1.8-.04 1.16.88.2c.72.2 1.2.48 1.4.84.2.4.32 1.2.32 2.4v19.68c0 .44-.48.68-1.36.76l-1.12.12-.12 1.48h9.68l-.12-1.48-1.44-.12c-1.04-.04-1.52-.28-1.52-.72v-7.44h.04c1.2.36 2.36.52 3.52.52 2.88 0 5.16-1 6.92-3.04s2.64-4.48 2.64-7.28zm-4.32 1.6c0 2.08-.44 3.8-1.32 5.08s-1.96 1.92-3.16 1.92c-1.44 0-2.88-.8-4.32-2.44v-9.76c1.08-1.28 2.4-1.92 3.96-1.92 1.44 0 2.6.64 3.48 1.92s1.36 3.04 1.36 5.2zm22.541-16.28c0-.72-.24-1.36-.68-1.88-.48-.48-1.08-.76-1.84-.76-.8 0-1.4.28-1.84.76-.48.52-.68 1.16-.68 1.88 0 .76.2 1.4.68 1.92.44.52 1.04.76 1.84.76.76 0 1.36-.24 1.84-.76.44-.52.68-1.16.68-1.92zm2.48 24.4-.12-1.48-1-.12c-1.04-.04-1.52-.28-1.52-.72v-16.32l-6.52 1.8-.04 1.16.84.2c.72.24 1.2.52 1.4.88.2.4.32 1.2.32 2.4v9.84c0 .44-.48.68-1.36.76l-1 .12-.12 1.48zm16.247-5.28c0-.8-.16-1.56-.44-2.2-.32-.64-.76-1.16-1.36-1.6-.64-.44-1.2-.8-1.72-1.08-.56-.24-1.24-.56-2.08-.88-1.6-.6-2.72-1.12-3.32-1.56-.64-.4-.92-1.04-.92-1.88 0-.72.28-1.32.88-1.8.56-.48 1.32-.72 2.2-.72 1.12 0 2.08.32 2.92.88l.96 3.44h2.24l-.24-5.84-1.48.52c-1.32-.44-2.72-.68-4.16-.68-2.08 0-3.76.56-4.96 1.6-1.2 1.08-1.8 2.36-1.8 3.88 0 .88.12 1.6.4 2.24s.72 1.16 1.32 1.6c.56.44 1.12.8 1.64 1.04.48.24 1.2.56 2.08.88.6.24 1 .36 1.16.44s.48.2.96.4c.48.24.84.4 1 .52s.36.28.64.52c.24.24.44.48.52.72s.16.52.16.8c0 .88-.4 1.6-1.12 2.16s-1.56.84-2.48.84c-1.08 0-2.12-.32-3.08-1l-.96-3.56h-2.36l.2 5.28c1.6.64 3.52.92 5.8.92s4.08-.56 5.4-1.68 2-2.52 2-4.2zm24.619 3.12-.16-1.08c-1.16.64-2.28.92-3.36.92-2.32 0-3.44-1.32-3.36-3.96l.24-9.44h6.24l.28-2.2h-6.52l.04-3.68-1.6-.24-5.44 4.72-.04 1.32 3.16.24-.24 10.4c-.04 1.92.4 3.36 1.28 4.32s2.08 1.44 3.6 1.44c1.08 0 2.16-.24 3.2-.76 1.04-.48 1.96-1.16 2.68-2zm22.09 2.16-.12-1.48-.92-.12c-.68-.08-1.12-.16-1.32-.28-.24-.08-.32-.24-.32-.48v-10.4c0-2-.52-3.52-1.52-4.56-.88-.88-2-1.32-3.36-1.32-1.92 0-4.08 1-6.48 2.92h-.2v-12.16l-6.8 1.96-.12 1.08 2.4 1.04c.36.24.56.6.56 1.16v20.28c0 .44-.48.68-1.36.76l-1.04.12-.12 1.48h9.36l-.12-1.48-1.24-.12c-1.04-.04-1.52-.28-1.52-.72v-11.68c1.24-.96 2.56-1.48 3.96-1.48 1.24 0 2.16.4 2.72 1.12s.84 2.04.84 3.92v8.08c0 .48-.44.72-1.36.76l-.88.12-.12 1.48zm19.195-2.24-.68-.96c-.88.64-1.52.96-1.92.96-.72 0-1-.52-.92-1.64l.28-6.68c.08-3.04-.32-5.12-1.2-6.32-.92-1.16-2.52-1.76-4.84-1.76-1.84 0-3.64.6-5.48 1.72-1.84 1.16-2.76 2.28-2.76 3.36 0 .56.2 1.04.64 1.44.4.4.96.56 1.6.56s1.2-.2 1.6-.6.64-.88.64-1.4c0-.32-.08-.68-.24-1s-.32-.56-.48-.76-.24-.32-.24-.36c0-.16.28-.32.92-.52s1.28-.32 1.92-.32c1.28 0 2.28.4 2.96 1.2.64.8.96 2.12.96 4v.36c-3.56.84-6.16 1.8-7.76 2.88-1.6 1.04-2.4 2.4-2.4 4.04 0 1.36.48 2.48 1.44 3.36s2.08 1.32 3.44 1.32c1.68 0 3.36-1.04 5.08-3.08h.2c.04 1.04.32 1.8.88 2.36.52.52 1.2.8 2.04.8 1.4 0 2.84-1 4.32-2.96zm-7.48-1.6c-1.16 1.04-2.24 1.6-3.24 1.6-.76 0-1.4-.28-1.96-.76-.56-.52-.84-1.2-.84-2.04 0-.96.48-1.8 1.36-2.52.88-.76 2.48-1.44 4.8-2zm21.43 1.68-.16-1.08c-1.16.64-2.28.92-3.36.92-2.32 0-3.44-1.32-3.36-3.96l.24-9.44h6.24l.28-2.2h-6.52l.04-3.68-1.6-.24-5.44 4.72-.04 1.32 3.16.24-.24 10.4c-.04 1.92.4 3.36 1.28 4.32s2.08 1.44 3.6 1.44c1.08 0 2.16-.24 3.2-.76 1.04-.48 1.96-1.16 2.68-2zm14.329-16.36c0-1.84-.84-3.44-2.44-4.88-1.64-1.44-3.52-2.16-5.64-2.16-1.12 0-1.96.24-2.6.72s-.92 1.08-.92 1.84c0 .64.2 1.2.68 1.6 1.12-.2 2.08-.28 2.88-.28 1.68 0 3.08.24 4.28.8 1.2.52 1.8 1.2 1.8 2 0 .32-.16.64-.4.92-.36.32-1.36.84-3.04 1.48-1.72.6-2.96 1.2-3.72 1.84s-1.12 1.6-1.12 2.88c0 1.6.92 3.04 2.76 4.32h1.4c-1.12-1.16-1.64-2.16-1.64-2.96 0-.48.16-.92.48-1.24.32-.4 1.24-.84 2.72-1.4 1.6-.64 2.76-1.32 3.48-2 .68-.72 1.04-1.88 1.04-3.48zm-4.52 16.56c0-.72-.24-1.32-.72-1.8s-1.12-.72-1.84-.72-1.36.24-1.84.72c-.52.48-.76 1.08-.76 1.8s.24 1.32.76 1.84c.48.52 1.12.8 1.84.8s1.36-.28 1.84-.8.72-1.12.72-1.84z"
        fill="#3b3b49"
      />
    </svg>
  )
}
