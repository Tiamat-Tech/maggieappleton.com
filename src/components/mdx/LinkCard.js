import React from 'react'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import {bpMaxSM} from '../../lib/breakpoints'

const LinkCard = ({ title, link, author, children, ...props }) => {
  const theme = useTheme()

  return (
      <div
        css={css({
          border: '1px solid rgba(52, 61, 68, 0.05)',
          transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;',
          margin: '0.4rem',
          padding: '0.2rem 1rem !important' ,
          width: '400px',
          maxWidth: '400px',
          borderRadius: '6px',
          boxShadow: '0px 1px 2px rgba(52, 61, 68, 0.1)',
          h4: {
            marginTop: '1rem',
          },
          [bpMaxSM]: {
            width: '300px',
            maxWidth: '300px',
            margin: '0.2rem',
          padding: '0 1.2rem !important',
          },
          p: {
            fontSize: '90%'
          },
          ':hover': {
            transform: 'scale(1.012)',
            borderRadius: '0px 0px 6px 6px',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.15)',
            h4: {
              transition: 'all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;',
              color: `${theme.colors.orange}`
            },
          },
        })}
        {...props}
      >
        <a noTip href={link}><h4>{title}</h4>
        <h5>{author}</h5></a>
        <p>{children}</p>
      </div>
  )
}

export default LinkCard
