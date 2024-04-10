import images from "../../assets/constant/image"


const applePairCollection = [
  // use array instead of object
    {
        wrapperClass: 'watch-series_watch-ultra row mx-0',
        items: [
          {
            sectionName: "watch-series ",
            imageSrc: images.watchSeriesLogo ,
            altText: 'Watch Series Icon',
            text: 'Smarter.Brighter.Mightier',
            textColor: 'text-white h5',
            linkWrapper: true
          },
          {
            sectionName: "watch-ultra",
            imageSrc: images.watchUltra,
            altText: 'Watch Ultra Icon',
            text: 'Next level adventure.',
            textColor: 'h5',
            linkWrapper: true
          }
        ]
      },
      {
        wrapperClass: 'macbook-pro_fitness mx-0 row',
        items: [
          {
            sectionName :"mt-3 macbook-pro",
            imageSrc: "",
            textColor:" pt-4 display-6 fw-bold ",
            text: 'MacBook Pro',
            description: 'Mind-blowing. Head-turning',
            linkWrapper: true
          },
          {
            sectionName :"mt-3 fitness text-white col-md m-md-2",
            imageSrc: images.fitnessLogo,
            altText: 'Fitness Icon',
            text: 'Work out to an entire playlist of music by your favorite artists.',
            textColor: 'h5',
            description: 'music by your favorite artists.',
            linkWrapper: true
          }
        ]
      },
      {
        wrapperClass: 'card_trade-in row mx-0',
        items: [
          {
            sectionName: " mt-3 applecard col-md m-md-2",
            imageSrc: images.logCard,
            altText: 'Apple Card Icon',
            text: 'Get up to 3% Daily Cash back with every purchase.',
            textColor: 'h5',
            description:"with every purchases.",
            linkWrapper: true
          },
          {
            sectionName: "trade-in mt-3 col-md m-md-2",
            imageSrc: images.tradeIn,
            altText: 'Trade-In Icon',
            text: 'Get $200-$650 in credit when you trade in iPhone 11 or higher.',
            textColor: 'h5',
            linkWrapper: true
          }
        ]
      }
]

export default applePairCollection