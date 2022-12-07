import { useEffect, useRef } from "react";
import { useLockScroll } from "src/hook/use-lock-scroll";
import { Container } from "./styles";
import { ModalProps } from "./types";


export function Modal({ isOpen, onRequestClose, children, lockPageScrollOnOpen = false }: ModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const { lockScroll, unlockScroll } = useLockScroll()
  const wrapperElement = useRef<Element | null>(null)

  useEffect(() => {
    if (isOpen) {
      if (closeButtonRef?.current) {
        closeButtonRef.current?.focus()
      }

      if (lockPageScrollOnOpen) {
        lockScroll()
      }
    } else {
      unlockScroll()
    }
  }, [isOpen, lockPageScrollOnOpen, lockScroll, unlockScroll])

  function closeModal() {
    onRequestClose?.()
  }

  function renderCloseButton() {
    return (
      <button
        onClick={() => closeModal()}
        ref={closeButtonRef}
        className='close-button'
      >
      <span>X</span>
      </button>
    )
  }

  return (
    <Container
      isOpen={isOpen}
    >
      <button
        className="overlay"
        onClick={() => closeModal()}
      />
      <div className="container-content">
        {renderCloseButton()}
        {children}
      </div>
    </Container>
  )
} 