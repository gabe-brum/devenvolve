import { UseScrollTop } from "./types";

function unlockScroll() {
  document.body.style.overflow = 'unset'
}

function lockScroll() {
  document.body.style.overflow = 'hidden'
}

export function useLockScroll() : UseScrollTop {
  return {
    lockScroll,
    unlockScroll
  }
}