import { IArt } from "../types/interfaces";
import artFirst from "../images/arts/art-1.jpg";
import artSecond from "../images/arts/art-2.jpg";
import artThird from "../images/arts/art-3.jpg";
import avatarFirst from "../images/arts/avatar-1.jpg";
import avatarSecond from "../images/arts/avatar-2.jpg";
import avatarThird from "../images/arts/avatar-3.jpg";

export const arts: IArt[] = [
  {
    image: artFirst,
    author_avatar: avatarFirst,
    author_name: "Alex Smith",
    author_username: "@pixel_pioneer",
    date: "2024-05-14",
    title: "Urban Serenity #223",
  },
  {
    image: artSecond,
    author_avatar: avatarSecond,
    author_name: "Jamie Lee",
    author_username: "@canvasCrusader",
    date: "2023-11-22",
    title: "Ethereal Dreams #19",
  },
  {
    image: artThird,
    author_avatar: avatarThird,
    author_name: "Morgan Taylor",
    author_username: "@maestr0stick",
    date: "2024-01-30",
    title: "Abstract Horizon #75",
  },
];
