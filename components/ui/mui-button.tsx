'use client'

import { Button as MuiButton } from "@mui/material"
import { styled } from "@mui/material/styles"

export const Button = styled(MuiButton)({
  borderRadius: '0.5rem',
  textTransform: 'none',
  fontWeight: 600,
  padding: '0.5rem 1rem',
  '&.primary': {
    backgroundColor: '#9333ea',
    color: 'white',
    '&:hover': {
      backgroundColor: '#7e22ce',
    },
  },
  '&.outline': {
    border: '1px solid currentColor',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  '&.ghost': {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
})
