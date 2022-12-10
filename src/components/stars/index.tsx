import { StarsProps } from "./types";
import zeroStars from '../../imgs/assets/0.png'
import oneStar from '../../imgs/assets/1.png'
import twoStars from '../../imgs/assets/2.png'
import threeStars from '../../imgs/assets/3.png'
import fourStars from '../../imgs/assets/4.png'
import fiveStars from '../../imgs/assets/5.png'
import Image from "next/image";

export function Stars({stars}: StarsProps) {
  switch(stars) {
    case 0:
      return <Image src={zeroStars} alt="Reputação 0" />
    case 1: 
      return <Image src={oneStar} alt="Reputação 1" />
    case 2:
      return <Image src={twoStars} alt="Reputação 2" />
    case 3:
      return <Image src={threeStars} alt="Reputação 3" />
    case 4:
      return <Image src={fourStars} alt="Reputação 4" />
    case 5:
      return <Image src={fiveStars} alt="Reputação 5" />
    default:
      return <Image src={zeroStars} alt="Reputação 0" />
  }
}