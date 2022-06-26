const dataBracket = {
  France: {
    a: "Italy",
    b: "England",
    aScore: 1,
    bScore: 1,
    target: false,
    children: [
      {
        a: "Italy",
        b: "Spain",
        aScore: 4,
        bScore: 2,
        target: false,
        children: [
          {
            a: "Belgium",
            b: "Italy",
            aScore: 1,
            bScore: 2,
            target: false,
            children: [
              {
                a: "Belgium",
                b: "Portugal",
                aScore: 1,
                bScore: 0,
                target: false,
              },
              {
                a: "Italy",
                b: "Austria",
                aScore: 2,
                bScore: 1,
                target: false,
              },
            ],
          },
          {
            a: "Switzerland",
            b: "Spain",
            aScore: 1,
            bScore: 3,
            target: false,
            children: [
              {
                a: "France",
                b: "Switzerland",
                aScore: 4,
                bScore: 5,
                target: true,
              },
              {
                a: "Croatia",
                b: "Spain",
                aScore: 3,
                bScore: 5,
                target: false,
              },
            ],
          },
        ],
      },
      {
        a: "Italy",
        b: "Spain",
        aScore: 4,
        bScore: 2,
        target: false,
        children: [
          {
            a: "Ukraine",
            b: "England",
            aScore: 0,
            bScore: 4,
            target: false,
            children: [
              {
                a: "Sweden",
                b: "Ukraine",
                aScore: 1,
                bScore: 2,
                target: false,
              },
              {
                a: "England",
                b: "Germany",
                aScore: 2,
                bScore: 0,
                target: false,
              },
            ],
          },
          {
            a: "Czech Republic",
            b: "Danmark",
            aScore: 1,
            bScore: 2,
            target: false,
            children: [
              {
                a: "Netherlands",
                b: "Czech Republic",
                aScore: 0,
                bScore: 2,
                target: false,
              },
              {
                a: "Wales",
                b: "Danmark",
                aScore: 0,
                bScore: 4,
                target: false,
              },
            ],
          },
        ],
      },
    ],
  },
  Senegal: {},
};

export default dataBracket;
