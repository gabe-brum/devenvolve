import { CardProps } from "./types";
import { Card as CardStyle } from "./styles";

export default function Card({ children }: CardProps) {
  return (
    <CardStyle>
      {children}
    </CardStyle>
  )
}