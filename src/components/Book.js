import React from 'react'
import { fonts } from '../lib/typography'
import { rhythm } from '../lib/typography'
import Img from 'gatsby-image'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { bpMaxMD, bpMaxSM } from '../lib/breakpoints'
import { useTheme } from 'components/Theming'

export const Book = props => {
  const theme = useTheme()
  return (
      <Link to={ props.redirectTo ? `/${props.redirectTo}` : `/${props.slug}`}  aria-label={`View ${props.title}`}>
      <div
        key={props.id}
        css={props.small ?
          (css`
        padding: 0;
        margin: 0 0.8rem;
        margin-bottom: 2rem;
        width: 260px;
        max-width: 100%;
        .gatsby-image-wrapper {
          border-radius: 4px;
          transition: all 500ms ease;
          -webkit-box-shadow: 0px 4px 10px -5px rgba(115, 130, 140, 0.98);
          box-shadow: 0px 4px 10px -5px rgba(115, 130, 140, 0.98);
        }
        ${bpMaxMD} {
          width: 240px;
          margin: 0 0.8rem 1.4rem;
        }
        ${bpMaxSM} {
          margin: 0 0.4rem 1.4rem;
        }
        &:hover {
          .gatsby-image-wrapper {
            transform: translateY(-4px) scale(1.02);
            -webkit-box-shadow: 0px 7px 13px -7px rgba(115, 130, 140, 0.98);
            box-shadow: 0px 7px 13px -7px rgba(115, 130, 140, 0.98);
          }
          h4 {
            color: ${theme.colors.black};
          }
        }
      `) : 
      (css`
          padding: 0;
          margin: 0 1rem;
          margin-bottom: 2rem;
          width: 280px;
          max-width: 100%;
          .gatsby-image-wrapper {
            border-radius: 4px;
            transition: all 500ms ease;
            -webkit-box-shadow: 0px 4px 10px -5px rgba(115, 130, 140, 0.98);
            box-shadow: 0px 4px 10px -5px rgba(115, 130, 140, 0.98);
          }
          ${bpMaxMD} {
            width: 260px;
            margin: 0 0.8rem 1.4rem;
          }
          ${bpMaxSM} {
            width: 240px;
            margin: 0 0.4rem 1.4rem;
          }
          &:hover {
            .gatsby-image-wrapper {
              transform: translateY(-4px) scale(1.02);
              -webkit-box-shadow: 0px 7px 13px -7px rgba(115, 130, 140, 0.98);
              box-shadow: 0px 7px 13px -7px rgba(115, 130, 140, 0.98);
            }
            h4 {
              color: ${theme.colors.black};
            }
          }
        `)
        }
      >
        {props.fluidImg ? (
          <Img alt={props.title} fluid={props.fluidImg} />
        ) : (
          <img alt={props.title} src={props.src} />
        )}
        <h4
          css={css`
            font-family: ${fonts.regularSansBold};
            color: ${theme.colors.darkGrey};
            font-weight: 200;
            margin-top: 1em;
            margin-bottom: ${rhythm(0.2)};
            transition: all 700ms ease;
          `}
        >
          {props.title}
        </h4>
        <h6 css={css`margin: 0;`}>{props.author}</h6>
        <h6 css={css`margin: 0; padding: 0; font-size: 70%;`}>{props.lastTended}</h6>
      </div>
    </Link>
  )
}

export const AntiBook = props => {
  const theme = useTheme()
  return (
    <a rel="noopener noreferrer" target="_blank" href={props.url}>
      <div
        key={props.id}
        css={css`
          padding: 0;
          margin-left: 1.6em;
          width: 240px;
          .gatsby-image-wrapper {
            border-radius: 4px;
            transition: all 500ms ease;
            -webkit-box-shadow: 0px 4px 10px -5px rgba(115, 130, 140, 0.98);
            box-shadow: 0px 4px 10px -5px rgba(115, 130, 140, 0.98);
          }
          ${bpMaxMD} {
            padding: 0.4em;
            width: 200px;
            margin: 0em 0.3em;
          }
          ${bpMaxSM} {
            width: 360px;
          }
          &:hover {
            .gatsby-image-wrapper {
              transform: translateY(-2px) scale(1.01);
              -webkit-box-shadow: 0px 7px 13px -7px rgba(115, 130, 140, 0.98);
              box-shadow: 0px 7px 13px -7px rgba(115, 130, 140, 0.98);
            }
            h4 {
              color: ${theme.colors.black};
            }
          }
        `}
      >
        {props.fluidImg ? (
          <Img alt={props.title} fluid={props.fluidImg} />
        ) : (
          <img alt={props.title} src={props.src} />
        )}
        <h4
          css={css`
            font-family: ${fonts.regularSansBold};
            color: ${theme.colors.darkGrey};
            font-weight: 200;
            margin-top: 1em;
            margin-bottom: ${rhythm(0.2)};
            transition: all 700ms ease;
          `}
        >
          {props.title}
        </h4>
        <h6>{props.author}</h6>
      </div>
      </a>
  )
}
