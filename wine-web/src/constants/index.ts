export const WINE_API_ENDPOINT = "https://api.sampleapis.com/wines/";
export const Beer_API_ENDPOINT = "https://api.sampleapis.com/beers/";

export const MEDIA_QUERY_END_POINT = {
  MOBILE: "640px",
  TABLET: "1280px",
  DESKTOP: "1920px",
  LARGE: "2560px",
};

export const ROUTES = [
  {
    ID: 0,
    PATH: "/beers",
    LABEL: "Beers",
    SUBS: [
      {
        ID: 0,
        PATH: "/ale",
        LABEL: "Ale",
        ORDER: 0,
        SRC: "https://cdn.pixabay.com/photo/2014/08/19/22/58/beer-422138_1280.jpg",
      },
      {
        ID: 1,
        PATH: "/stouts",
        LABEL: "Stouts",
        ORDER: 1,
        SRC: "https://cdn.pixabay.com/photo/2015/09/05/19/46/dark-beer-924823_1280.jpg",
      },
    ],
  },
  {
    ID: 1,
    PATH: "/wines",
    LABEL: "Wines",
    SUBS: [
      {
        ID: 0,
        PATH: "/dessert",
        LABEL: "Dessert",
        ORDER: 0,
        SRC: "https://cdn.pixabay.com/photo/2013/11/24/11/26/wine-217175_1280.jpg",
      },
      {
        ID: 1,
        PATH: "/port",
        LABEL: "Port",
        ORDER: 1,
        SRC: "https://cdn.pixabay.com/photo/2019/06/24/18/40/port-4296646_1280.jpg",
      },
      {
        ID: 2,
        PATH: "/reds",
        LABEL: "Reds",
        ORDER: 2,
        SRC: "https://cdn.pixabay.com/photo/2020/06/21/02/31/wine-5323009_1280.jpg",
      },
      {
        ID: 3,
        PATH: "/rose",
        LABEL: "Rose",
        ORDER: 3,
        SRC: "https://cdn.pixabay.com/photo/2019/11/06/15/15/wine-4606384_1280.jpg",
      },
      {
        ID: 4,
        PATH: "/sparkling",
        LABEL: "Sparkling",
        ORDER: 4,
        SRC: "https://cdn.pixabay.com/photo/2015/09/24/19/47/wine-glass-956258_1280.jpg",
      },
      {
        ID: 5,
        PATH: "/whites",
        LABEL: "Whites",
        ORDER: 5,
        SRC: "https://cdn.pixabay.com/photo/2014/02/06/11/47/wine-259858_1280.jpg",
      },
    ],
  },
];

// export const ROUTES = {
//   BEERS: {
//     MAIN: {
//       ID: 0,
//       PATH: "/beers",
//       LABEL: "맥주",
//       SUBS: [
//         {
//           ID: 0,
//           PATH: "/ale",
//           LABEL: "에일",
//           ORDER: 0,
//         },
//       ],
//     },
//   },
// };
