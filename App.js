import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - logo
 * - nav items
 * Body
 * - serach bar
 * - cards
 * Footer
 * - copyright
 * - links
 * - disclaimer
 */

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src="/logo.png" />
      </div>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
const restList =  [
    {
      info: {
        id: "10591",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/b1450fc3-5b4f-49c2-94b8-0d93f80f74bd_10591.JPG",
        locality: "Sampige Road",
        areaName: "Malleshwaram",
        costForTwo: "₹600 for two",
        cuisines: ["Pizzas"],
        avgRating: 4,
        parentId: "721",
        avgRatingString: "4.0",
        totalRatingsString: "8.8K+",
        sla: {
          deliveryTime: 44,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "40-50 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-25 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.3",
            ratingCount: "4.5K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/pizza-hut-sampige-road-malleshwaram-rest10591",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "726204",
        name: "Blue Tokai Coffee Roasters",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/7a4a5ef1-88de-4cb6-bf40-67daa2de302f_726204.JPG",
        locality: "Sadhashiv Nagar",
        areaName: "Sadashiva Nagar",
        costForTwo: "₹600 for two",
        cuisines: ["Cafe", "Coffee", "Beverages"],
        avgRating: 4.5,
        parentId: "2682",
        avgRatingString: "4.5",
        totalRatingsString: "1.0K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-25 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
              description:
                "Meals with high protein, low calorie and no added sugar",
            },
            {
              imageId: "newg.png",
              description:
                "Premium gourmet restaurant offering an elevated, high-quality food experience.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Meals with high protein, low calorie and no added sugar",
                    imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description:
                      "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                    imageId: "newg.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹99",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/blue-tokai-coffee-roasters-sadhashiv-nagar-sadashiva-nagar-rest726204",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "667962",
        name: "Paris Panini - Gourmet Sandwiches & Wraps",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/db53f58f-bbcc-4aab-a16b-8c7c5d0b84a1_667962.jpg",
        locality: "Church Street",
        areaName: "Central Bangalore",
        costForTwo: "₹500 for two",
        cuisines: [
          "sandwich",
          "wrap",
          "Fast Food",
          "Pastas",
          "Italian",
          "Salads",
          "Healthy Food",
          "Desserts",
          "Continental",
        ],
        avgRating: 4.6,
        parentId: "21019",
        avgRatingString: "4.6",
        totalRatingsString: "6.1K+",
        sla: {
          deliveryTime: 48,
          lastMileTravel: 4.1,
          serviceability: "SERVICEABLE",
          slaString: "45-55 mins",
          lastMileTravelString: "4.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-25 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
              description:
                "Meals with high protein, low calorie and no added sugar",
            },
            {
              imageId:
                "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
              description: "Top-rated for Gourmet, based on user votes.",
            },
            {
              imageId:
                "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
              description:
                "Top-rated for Subs & Sandwiches, based on user votes.",
            },
            {
              imageId: "newg.png",
              description:
                "Premium gourmet restaurant offering an elevated, high-quality food experience.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Meals with high protein, low calorie and no added sugar",
                    imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description: "Top-rated for Gourmet, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description:
                      "Top-rated for Subs & Sandwiches, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description:
                      "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                    imageId: "newg.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹145",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "1.7K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-church-street-central-bangalore-rest667962",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "333800",
        name: "RNR Biryani - Taste of 1953",
        cloudinaryImageId: "n7has2d95kl7boo33ogy",
        locality: "ITI Layout",
        areaName: "New BEL Road",
        costForTwo: "₹350 for two",
        cuisines: ["Biryani", "South Indian", "Kebabs"],
        avgRating: 4.5,
        parentId: "11620",
        avgRatingString: "4.5",
        totalRatingsString: "11K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 6.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "6.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-26 02:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId:
                "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
              description:
                "Top-rated for Naati Style Biryani, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Top-rated for Naati Style Biryani, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹40",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/rnr-biryani-taste-of-1953-iti-layout-new-bel-road-rest333800",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "30083",
        name: "California Burrito",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/d975fca2-038b-43e6-9c72-31d7113c8ae0_30083.jpg",
        locality: "Sadashivanagar ",
        areaName: "sadashiva nagar ",
        costForTwo: "₹250 for two",
        cuisines: [
          "Mexican",
          "American",
          "Salads",
          "Continental",
          "Keto",
          "Healthy Food",
          "Beverages",
          "Snacks",
          "Desserts",
          "Fast Food",
        ],
        avgRating: 4.6,
        parentId: "1252",
        avgRatingString: "4.6",
        totalRatingsString: "29K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2.6,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-26 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
              description:
                "Meals with high protein, low calorie and no added sugar",
            },
            {
              imageId:
                "brand_cards/Badges%202026/55_Best%20in%20EatRight2026.png",
              description: "Top-rated for EatRight, based on user votes.",
            },
            {
              imageId:
                "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
              description: "Top-rated for Corporate, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Meals with high protein, low calorie and no added sugar",
                    imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description: "Top-rated for EatRight, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/55_Best%20in%20EatRight2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description:
                      "Top-rated for Corporate, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹65",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "631",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/california-burrito-sadashivanagar-sadashiva-nagar-rest30083",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "12811",
        name: "A2B - Adyar Ananda Bhavan",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/7/17a7d607-1ad7-4a41-8c69-50eb8b735e63_12811.JPG",
        locality: "Sampige Road",
        areaName: "Malleshwaram",
        costForTwo: "₹300 for two",
        cuisines: ["South Indian", "Sweets", "Chinese"],
        avgRating: 4.4,
        veg: true,
        parentId: "22",
        avgRatingString: "4.4",
        totalRatingsString: "41K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 2.9,
          serviceability: "SERVICEABLE",
          slaString: "30-40 mins",
          lastMileTravelString: "2.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-25 22:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "android/static-assets/icons/big_rx.png",
              description: "bolt!",
            },
            {
              imageId:
                "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
              description: "Top-rated for South Indian, based on user votes.",
            },
            {
              imageId:
                "brand_cards/Badges%202026/57_Best%20in%20Indian%20Sweets2026.png",
              description: "Top-rated for Indian Sweets, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "android/static-assets/icons/big_rx.png",
                  },
                },
                {
                  attributes: {
                    description:
                      "Top-rated for South Indian, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description:
                      "Top-rated for Indian Sweets, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/57_Best%20in%20Indian%20Sweets2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "70% OFF",
          subHeader: "UPTO ₹140",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-sampige-road-malleshwaram-rest12811",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "5932",
        name: "Burger King",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/02e7c7e0-91ea-41aa-8578-25219e3a694b_5932.jpg",
        locality: "Malleshwaram",
        areaName: "Malleshwaram",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4.3,
        parentId: "166",
        avgRatingString: "4.3",
        totalRatingsString: "33K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-25 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹59",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.2",
            ratingCount: "5.6K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/burger-king-malleshwaram-rest5932",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "347868",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/bcc63cd1-59e0-47f9-bf9f-feffad2c7617_347868.JPG",
        locality: "Cunnigham road",
        areaName: "Central Bangalore",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.1,
        parentId: "547",
        avgRatingString: "4.1",
        totalRatingsString: "7.2K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-26 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "android/static-assets/icons/big_rx.png",
              description: "bolt!",
            },
            {
              imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
              description: "Top-rated for Bolt, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "android/static-assets/icons/big_rx.png",
                  },
                },
                {
                  attributes: {
                    description: "Top-rated for Bolt, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/kfc-cunnigham-road-central-bangalore-rest347868",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "23796",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/14/48e526a7-ea41-4785-a5e3-1b594ac3279b_23796.JPG",
        locality: "Cunningham Road",
        areaName: "Central Bangalore",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.3,
        parentId: "2456",
        avgRatingString: "4.3",
        totalRatingsString: "18K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-26 03:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
              description: "Top-rated for Bolt, based on user votes.",
            },
            {
              imageId: "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
              description: "Top-rated for Pizza, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "Top-rated for Bolt, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description: "Top-rated for Pizza, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹49",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/dominos-pizza-cunningham-road-central-bangalore-rest23796",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "237668",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/18/619c5764-b852-44ad-b535-ce40a5d52f23_237668.JPG",
        locality: "Commercial Street",
        areaName: "Shivajinagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.4,
        parentId: "630",
        avgRatingString: "4.4",
        totalRatingsString: "7.4K+",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 3.9,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "3.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-25 23:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹70",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/mcdonalds-commercial-street-shivajinagar-rest237668",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "672074",
        name: "Subway",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/8f9a90a5-4f89-4234-b4ed-a840580dbe52_672074.jpg",
        locality: "Ashok Nagar",
        areaName: "Sobha Mall",
        costForTwo: "₹350 for two",
        cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
        avgRating: 4.4,
        parentId: "2",
        avgRatingString: "4.4",
        totalRatingsString: "2.7K+",
        sla: {
          deliveryTime: 41,
          lastMileTravel: 3.8,
          serviceability: "SERVICEABLE",
          slaString: "40-50 mins",
          lastMileTravelString: "3.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-26 03:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
              description:
                "Meals with high protein, low calorie and no added sugar",
            },
            {
              imageId:
                "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
              description:
                "Top-rated for Subs & Sandwiches, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Meals with high protein, low calorie and no added sugar",
                    imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description:
                      "Top-rated for Subs & Sandwiches, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹69",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/subway-ashok-nagar-sobha-mall-rest672074",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "231188",
        name: "Taco Bell",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/a175a8d3-aa15-4a6e-8f4a-eda1f03fdaef_231188.JPG",
        locality: "Sampige Road",
        areaName: "Malleshwaram",
        costForTwo: "₹300 for two",
        cuisines: ["Mexican", "Fast Food", "Snacks"],
        avgRating: 4.5,
        parentId: "1557",
        avgRatingString: "4.5",
        totalRatingsString: "5.9K+",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-25 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId:
                "brand_cards/Badges%202026/51_Best%20in%20Global%20Flavours2026.png",
              description:
                "Top-rated for Global Flavours, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Top-rated for Global Flavours, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/51_Best%20in%20Global%20Flavours2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "70% OFF",
          subHeader: "UPTO ₹140",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.5",
            ratingCount: "320",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/taco-bell-sampige-road-malleshwaram-rest231188",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "405798",
        name: "Chinese Wok",
        cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
        locality: "Malleshwaram",
        areaName: "Malleshwaram",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
        avgRating: 4.3,
        parentId: "61955",
        avgRatingString: "4.3",
        totalRatingsString: "2.4K+",
        sla: {
          deliveryTime: 38,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "35-45 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-25 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "70% OFF",
          subHeader: "UPTO ₹140",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "258",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/chinese-wok-malleshwaram-rest405798",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "18974",
        name: "Nandhana Palace",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/0feef1d4-2a66-43a9-8fef-825997de330a_18974.jpg",
        locality: "Lower Parel",
        areaName: "BEL-Road",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
        avgRating: 4.4,
        parentId: "2120",
        avgRatingString: "4.4",
        totalRatingsString: "62K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 6.4,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "6.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-26 02:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId:
                "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
              description: "Top-rated for Andhra Food, based on user votes.",
            },
            {
              imageId:
                "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
              description: "Top-rated for Biryani, based on user votes.",
            },
            {
              imageId:
                "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
              description: "Top-rated for Corporate, based on user votes.",
            },
            {
              imageId:
                "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
              description:
                "Top-rated for Naati Style Biryani, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Top-rated for Andhra Food, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/35_Best%20in%20Andhra%20Food2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description: "Top-rated for Biryani, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description:
                      "Top-rated for Corporate, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description:
                      "Top-rated for Naati Style Biryani, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹49",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "10K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/nandhana-palace-lower-parel-bel-road-rest18974",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "303248",
        name: "Theobroma",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/8/22/67ff44f1-0628-465c-acf3-974b61848c16_303248.JPG",
        locality: "Frazer Town",
        areaName: "Frazer Town",
        costForTwo: "₹400 for two",
        cuisines: ["Desserts", "Bakery", "Beverages"],
        avgRating: 4.5,
        parentId: "1040",
        avgRatingString: "4.5",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 4.1,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "4.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-25 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId:
                "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
              description:
                "Top-rated for Cakes & Desserts, based on user votes.",
            },
            {
              imageId: "newg.png",
              description:
                "Premium gourmet restaurant offering an elevated, high-quality food experience.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Top-rated for Cakes & Desserts, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/43_Best%20in%20Cakes%20&%20Desserts2026.png",
                    theme: "",
                  },
                },
                {
                  attributes: {
                    description:
                      "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                    imageId: "newg.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹49",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.4",
            ratingCount: "436",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/theobroma-frazer-town-rest303248",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "156436",
        name: "The Good Bowl",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/15/06870cad-2755-480c-abee-5d461cbb0493_156436.jpg",
        locality: "SUBRAMANYA NAGAR",
        areaName: "SUBRAMANYA NAGAR",
        costForTwo: "₹400 for two",
        cuisines: ["Biryani", "Pastas", "Punjabi", "Desserts", "Beverages"],
        avgRating: 4.3,
        parentId: "7918",
        avgRatingString: "4.3",
        totalRatingsString: "1.5K+",
        sla: {
          deliveryTime: 39,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "35-45 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-26 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹79",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/the-good-bowl-subramanya-nagar-rest156436",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "570511",
        name: "Bakingo",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2026/8/24/e0d635e6-37d1-44d2-a8b6-7f5a511e5769_570511.jpg",
        locality: "Bangalore South",
        areaName: "Vasanth Nagar",
        costForTwo: "₹299 for two",
        cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
        avgRating: 4.6,
        parentId: "3818",
        avgRatingString: "4.6",
        totalRatingsString: "6.4K+",
        sla: {
          deliveryTime: 12,
          lastMileTravel: 1.2,
          serviceability: "SERVICEABLE",
          slaString: "10-15 mins",
          lastMileTravelString: "1.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-26 01:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "android/static-assets/icons/big_rx.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "bolt!",
                    imageId: "android/static-assets/icons/big_rx.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹69",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/bakingo-south-vasanth-nagar-rest570511",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "721822",
        name: "Cheesecake & co.",
        cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
        locality: "rt nagar",
        areaName: "Koramangala",
        costForTwo: "₹500 for two",
        cuisines: ["Bakery", "Desserts"],
        avgRating: 4.6,
        veg: true,
        parentId: "387417",
        avgRatingString: "4.6",
        totalRatingsString: "1.6K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 5.6,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "5.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-26 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "newg.png",
              description:
                "Premium gourmet restaurant offering an elevated, high-quality food experience.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                    imageId: "newg.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/cheesecake-and-co-rt-nagar-koramangala-rest721822",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "80802",
        name: "Third Wave Coffee",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/15/9ebf7373-a301-4641-a60c-29ddcb73186c_80802.JPG",
        locality: "Sadashiva Nagar",
        areaName: "Sadashiva Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Beverages", "Bakery", "Continental"],
        avgRating: 4.4,
        parentId: "274773",
        avgRatingString: "4.4",
        totalRatingsString: "4.9K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-25 23:59:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId:
                "brand_cards/Badges%202026/110_Best%20in%20Coffee%20&%20Tea2026.png",
              description: "Top-rated for Coffee & Tea, based on user votes.",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description:
                      "Top-rated for Coffee & Tea, based on user votes.",
                    imageId:
                      "brand_cards/Badges%202026/110_Best%20in%20Coffee%20&%20Tea2026.png",
                    theme: "",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "2.3K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/third-wave-coffee-sadashiva-nagar-rest80802",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "776939",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/bcb05119-9e50-44fb-a5dd-9a66aeb57929_776939.jpg",
        locality: "KODHANDARAMAPURAM",
        areaName: "MALLESHWARM",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
        avgRating: 4.4,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.4",
        totalRatingsString: "1.2K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 3.8,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2026-08-26 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹75 OFF",
          subHeader: "ABOVE ₹599",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        priceComparisonComms: {},
      },
      analytics: {
        context: "seo-data-1d1b34b8-39ed-401a-a5ca-c845efcd8ca0",
      },
      cta: {
        link: "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-kodhandaramapuram-malleshwarm-rest776939",
        type: "WEBLINK",
      },
    },
  ]
const ResCard = (props) => {
  const { restData } = props;
  const {name, cuisines, avgRating, sla, cloudinaryImageId} = restData;
    return (
      <div className="res-card">
        <img
          className="res-card-image"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/` + cloudinaryImageId}
          alt="res-card"
        />
        <h3 className="res-name">{name}</h3>
        <h5>{cuisines}</h5>
        <h6>{avgRating}</h6>
        <h6>{sla.deliveryTime}{"MINS"}</h6>
      </div>
    )
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restList?.map((res) => (
          <ResCard key={res?.info?.id} restData={res?.info} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
