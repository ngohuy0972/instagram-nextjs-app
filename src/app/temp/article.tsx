import photo_1 from "../../public/photo_1.jpg";
import photo_2 from "../../public/photo_2.jpg";
import photo_3 from "../../public/photo_3.jpg";
import photo_4 from "../../public/photo_4.jpg";
import liverpool from "../../public/Liverpool.png";
import realmardrid from "../../public/RealMadrid.png";
import arsenal from "../../public/Arsenal.png";
import porsche from "../../public/author_avatar.jpg";

export const articles = [
  {
    title: "Article 1",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    author_avatar: porsche,
    author: "Porsche",
    date: "2021-07-01",
    photos: [photo_1, photo_2, photo_3, photo_4],
    likes: 100,
    comments: 20,
    reposts: 15,
  },
  {
    title: "Article 2",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    author_avatar: liverpool,
    author: "Liverpool FC",
    date: "2021-07-01",
    photos: [photo_2],
    likes: 100,
    comments: 20,
    reposts: 15,
  },
  {
    title: "Article 3",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    author_avatar: realmardrid,
    author: "Real Madrid CF",
    date: "2021-07-01",
    photos: [photo_3],
    likes: 100,
    comments: 20,
    reposts: 15,
  },
  {
    title: "Article 4",
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
    author_avatar: arsenal,
    author: "Arsenal FC",
    date: "2021-07-01",
    photos: [photo_4],
    likes: 100,
    comments: 20,
    reposts: 15,
  },
];
