import { Button } from "./Button.tsx"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const PrimaryButton:Story = {
  args: {
    variant: "primary",
    children:'PrimaryButton',
  },
}
