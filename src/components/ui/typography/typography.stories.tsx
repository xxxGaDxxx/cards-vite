import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
        'error',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    children: 'large Card content',
    variant: 'large',
  },
}

export const H1: Story = {
  args: {
    children: 'h1 Card content',
    variant: 'h1',
    as: 'h1',
  },
}

export const H2: Story = {
  args: {
    children: 'h2 Card content',
    variant: 'h2',
  },
}

export const H3: Story = {
  args: {
    children: 'h3 Card content',
    variant: 'h3',
  },
}

export const Body1: Story = {
  args: {
    children: 'body1Card content',
    variant: 'body1',
  },
}

export const Body2: Story = {
  args: {
    children: 'body2 Card content',
    variant: 'body2',
  },
}

export const Subtitle1: Story = {
  args: {
    children: 'subtitle1 Card content',
    variant: 'subtitle1',
  },
}

export const Subtitle2: Story = {
  args: {
    children: 'subtitle2 Card content',
    variant: 'subtitle2',
  },
}

export const Caption: Story = {
  args: {
    children: 'caption Card content',
    variant: 'caption',
  },
}

export const Overline: Story = {
  args: {
    children: 'overline Card content',
    variant: 'overline',
  },
}

export const Link1: Story = {
  args: {
    children: 'link1 Card content',
    variant: 'link1',
  },
}

export const Link2: Story = {
  args: {
    children: 'link2 Card content',
    variant: 'link2',
  },
}

export const Error: Story = {
  args: {
    children: 'error Card content',
    variant: 'error',
  },
}
