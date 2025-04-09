import type { Meta, StoryObj } from "@storybook/react"
import { ModalRadix, type ModalRadixProps } from "./ModalRadix.tsx"
import { useEffect, useState } from "react"
import { Button } from "../Button/Button.tsx"

const meta = {
  component: ModalRadix,
  tags: ["autodocs"],
} satisfies Meta<typeof ModalRadix>

export default meta

type Story = StoryObj<typeof ModalRadix>

const Render = (args: ModalRadixProps) => {
  const { children, size, modalTitle, open } = args

  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    setShowModal(open)
  }, [open])

  const openModalHandler = () => {
    setShowModal(true)
  }

  const closeModalHandler = () => {
    setShowModal(false)
  }

  return (
    <>
      <Button variant={"primary"} onClick={openModalHandler}>
        Open modal
      </Button>
      <ModalRadix open={showModal} size={size} onClose={closeModalHandler} modalTitle={modalTitle}>
        <p>{children}</p>
        <Button variant={"secondary"} onClick={closeModalHandler}>
          Accept
        </Button>
      </ModalRadix>
    </>
  )
}

/** Modal default*/
export const Modal: Story = {
  args: {
    modalTitle: "Popup",

    open: false,
    children: "andrey",
  },
  render: Render,
}

/** Modal default*/
export const SmallModal: Story = {
  args: {
    ...Modal.args,
    size: "sm",
  },
  render: Render,
}

export const BigModal: Story = {
  args: {
    ...Modal.args,
    size: "lg",
  },
  render: Render,
}
