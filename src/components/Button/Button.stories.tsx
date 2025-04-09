import { Button } from "./Button.tsx"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: Button,
  tags:['autodocs']
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>
/** Primary variant. Used as 'default'*/
export const PrimaryButton: Story = {
  args: {
    variant: "primary",
    children: "PrimaryButton",
  },
}
/** Secondary variant.*/
export const SecondaryButton: Story = {
  args: {
    ...PrimaryButton,
    variant: "secondary",
    children: "SecondaryButton",
  },
}

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "OutlinedButton",

  },
}

export const ButtonAsLink: Story = {
  tags:['!autodocs'],
  args: {
    asChild: true,
    variant: "primary",
    children: <a href={'#'}>linkButton</a>,
  },
}
