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
      },
      {
        ID: 1,
        PATH: "/stouts",
        LABEL: "Stouts",
        ORDER: 1,
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
      },
      {
        ID: 1,
        PATH: "/port",
        LABEL: "Port",
        ORDER: 1,
      },
      {
        ID: 2,
        PATH: "/reds",
        LABEL: "Reds",
        ORDER: 2,
      },
      {
        ID: 3,
        PATH: "/rose",
        LABEL: "Rose",
        ORDER: 3,
      },
      {
        ID: 4,
        PATH: "/sparkling",
        LABEL: "Sparkling",
        ORDER: 4,
      },
      {
        ID: 5,
        PATH: "/whites",
        LABEL: "Whites",
        ORDER: 5,
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
