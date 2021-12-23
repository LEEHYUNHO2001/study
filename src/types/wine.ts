import { Rating } from "./Rating";

export interface Wine {
  winery: string;
  wine: string;
  rating: Rating;
  location: string;
  image: string;
  id: number;
}

// interface WineRating{
//   average: string;
//   reviews: string;
// }
