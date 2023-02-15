import { IoFastFoodOutline, IoPeopleOutline } from "react-icons/io5";
import { FiCoffee } from "react-icons/fi";
import {
  AiOutlineShoppingCart,
  AiOutlineAppstore,
  AiOutlineCar,
  AiOutlineStock,
} from "react-icons/ai";
import { BsHouseDoor, BsPhone, BsGift, BsCashCoin } from "react-icons/bs";
import { BiCookie } from "react-icons/bi";
import { FaRegHospital } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
import { RiMoneyDollarCircleLine, RiBankLine } from "react-icons/ri";
import { CiMoneyCheck1 } from "react-icons/ci";

export default function ItemIcon (props) {
  const items = [
    { name: "食物", icon: <IoFastFoodOutline /> },
    { name: "飲品", icon: <FiCoffee /> },
    { name: "點心", icon: <BiCookie /> },
    { name: "日用品", icon: <AiOutlineShoppingCart /> },
    { name: "交通", icon: <AiOutlineCar /> },
    { name: "房租", icon: <BsHouseDoor /> },
    { name: "醫療", icon: <FaRegHospital /> },
    { name: "娛樂", icon: <GrGamepad /> },
    { name: "電子產品", icon: <BsPhone /> },
    { name: "社交", icon: <IoPeopleOutline /> },
    { name: "禮物", icon: <BsGift /> },
    { name: "其他", icon: <AiOutlineAppstore /> },
    { name: "薪水", icon: <BsCashCoin /> },
    { name: "獎金", icon: <CiMoneyCheck1 /> },
    { name: "回饋", icon: <RiMoneyDollarCircleLine /> },
    { name: "股息", icon: <AiOutlineStock /> },
    { name: "投資", icon: <RiBankLine /> },
  ]
const Icon = items.filter(item => item.name === props)[0]
  return Icon.icon
}