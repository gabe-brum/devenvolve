import React from "react"

export interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
  children: React.ReactNode
  lockPageScrollOnOpen?: boolean
}