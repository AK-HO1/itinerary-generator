# Itinerary Generator — Project Context

## What this tool does
Takes an experience ID, calls Headout APIs, rewrites itinerary content in Airbnb style using OpenAI, outputs a JSON.

## APIs

### Collections API
GET https://api.headout.com/api/v1/collection/{collectionId}/tour-groups
Example: https://api.headout.com/api/v1/collection/212/tour-groups

Sample response:
{
  "collectionId": 212,
  "city": "LONDON",
  "tourGroups": [
    {
      "id": 39006,
      "name": "Headout London Pass: Save up to 40% at All Top Attractions",
      "primaryCollection": null,
      "primaryCategory": {
        "id": 1,
        "name": "Tickets",
        "rank": 1,
        "displayName": "Tickets",
        "heading": "London Attractions",
        "metaTitle": "Book Discount Tickets to Attractions & Activities in London | Headout",
        "metaDescription": "Book tickets to top attractions and activities in London. Get 10% additional cashback, flexible cancelation, and 24/7 support on each booking.",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/tickets-london-ca-1~7426/",
          "ES": "/es/entradas-london-ca-1~7426/",
          "FR": "/fr/billets-london-ca-1~7426/",
          "IT": "/it/biglietti-london-ca-1~7426/",
          "DE": "/de/tickets-london-ca-1~7426/",
          "PT": "/pt/ingressos-london-ca-1~7426/",
          "NL": "/nl/tickets-london-ca-1~7426/",
          "PL": "/pl/tickets-london-ca-1~7426/",
          "KO": "/ko/tickets-london-ca-1~7426/",
          "JA": "/ja/tickets-london-ca-1~7426/",
          "ZH_HANS": "/zh-hans/tickets-london-ca-1~7426/",
          "DA": "/da/billetter-london-ca-1~7426/",
          "NO": "/no/billetter-london-ca-1~7426/",
          "RO": "/ro/bilete-london-ca-1~7426/",
          "RU": "/ru/tickets-london-ca-1~7426/",
          "SV": "/sv/biljetter-london-ca-1~7426/",
          "TR": "/tr/tickets-london-ca-1~7426/"
        },
        "medias": [],
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": ""
        },
        "ratingsInfo": {
          "ratingsCount": 22898,
          "averageRating": 4.4,
          "showRatings": true
        }
      },
      "primarySubCategory": {
        "id": 1008,
        "name": "City Cards",
        "categoryId": 1,
        "rank": 6,
        "displayName": "City Cards",
        "heading": "London City Cards",
        "metaTitle": "London City Cards  – Best Sightseeing Experiences",
        "metaDescription": "Book London city cards at Headout for the ultimate sightseeing experience. Enjoy priority access & guided tours of top attractions, and get free public transport.",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/city-cards-london-sc-1008~7426/",
          "ES": "/es/tarjetas-turisticas-london-sc-1008~7426/",
          "FR": "/fr/cartes-touristiques-london-sc-1008~7426/",
          "IT": "/it/city-card-london-sc-1008~7426/",
          "DE": "/de/city-cards-london-sc-1008~7426/",
          "PT": "/pt/city-cards-london-sc-1008~7426/",
          "NL": "/nl/city-cards-london-sc-1008~7426/",
          "PL": "/pl/city-cards-london-sc-1008~7426/",
          "KO": "/ko/city-cards-london-sc-1008~7426/",
          "JA": "/ja/city-cards-london-sc-1008~7426/",
          "ZH_HANS": "/zh-hans/city-cards-london-sc-1008~7426/",
          "DA": "/da/bykort-london-sc-1008~7426/",
          "NO": "/no/bykort-london-sc-1008~7426/",
          "RO": "/ro/city-cards-london-sc-1008~7426/",
          "RU": "/ru/city-cards-london-sc-1008~7426/",
          "SV": "/sv/stadskort-london-sc-1008~7426/",
          "TR": "/tr/city-cards-london-sc-1008~7426/"
        },
        "medias": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/38d1a736962bb0169bb6f3658fb1dc69-1008%20City%20Pass.jpg",
            "type": "IMAGE",
            "metadata": {
              "altText": "Blue Planet Aquarium entrance with visitors exploring marine exhibits.",
              "height": 1000,
              "width": 1600,
              "videoDuration": null,
              "uploadDate": "2023-08-24",
              "filename": "City Pass",
              "fileSize": 871.33
            },
            "info": {
              "sourceType": "PARTNER",
              "sourceUrl": "https://scorpio.headout.com/admin/vendor/experiencelisting/1418/change/",
              "credit": "Visit Berlin",
              "filename": "City Pass",
              "fileSize": 871.33
            }
          }
        ],
        "ratingsInfo": {
          "ratingsCount": 22898,
          "averageRating": 4.4,
          "showRatings": true
        },
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": ""
        }
      },
      "listingAvailability": {
        "nextAvailableDate": {
          "date": "2026-02-19",
          "remaining": 20,
          "availability": "UNLIMITED"
        }
      },
      "ticketValidity": {
        "ticketValidityType": "EXTENDABLE_BUT_UNKNOWN",
        "ticketValidityUntilDate": null,
        "ticketValidityUntilDaysFromPurchase": null
      },
      "allTags": [],
      "callToAction": "",
      "inclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EAccess to 2/3/4/5/6/7 attractions (as per option selected)\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003EChoose from:\u003C/strong\u003E\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003ETop hits:\u003C/strong\u003E London Eye, The Shard\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003ELandmarks & palaces:\u003C/strong\u003E Westminster Abbey & Tower of London tour with Headout's AI-powered audioguide, St Paul’s Cathedral, Kensington Palace\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003EMuseums:\u003C/strong\u003E Tate Modern, Moco Museum, The National Gallery & more\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003EZoos & aquariums:\u003C/strong\u003E SEA LIFE London Aquarium, London Zoo\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003EBus tours & cruises:\u003C/strong\u003E Hop-on-Hop-off with optional Thames cruise & more\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003EGuided tours:\u003C/strong\u003E Harry Potter Walking Tour, Walking Tour of Westminster & Churchill's War Rooms\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003EUnique experiences & activities:\u003C/strong\u003E Up at The O2 Climb, Frameless London, Afternoon Tea at the British Museum\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003ETransportation & transfers:\u003C/strong\u003E Heathrow Express, Stansted Express, IFS Cloud Cable Car Tickets\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003ESports:\u003C/strong\u003E Arsenal FC Stadium Tour\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003E\u003Cstrong\u003EFamily attractions:\u003C/strong\u003E Paddington Bear Experience\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EGet the full attraction list from \u003Ca href=\"https://city-card-manager.lovable.app/citycard-info/london\"\u003Ehere\u003C/a\u003E\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "neighbourhood": null,
      "hidden": false,
      "flowType": "PROPERTY_SELECTION",
      "startPoint": {
        "latitude": 51.5072174072266,
        "longitude": -0.127586200833321
      },
      "reviewCount": 126,
      "cancellationPolicy": {
        "cancellable": true,
        "cancellableUpTo": 0
      },
      "ratingCount": 126,
      "showRatings": true,
      "media": {
        "productImages": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/aef4ae30-a8a1-4483-8285-ec53db1ec441-1764318740579-331582.1.png",
            "altText": "Houses of Parliament and Big Ben by the River Thames in London with Headout Pass logo.",
            "description": "Houses of Parliament and Big Ben by the River Thames in London with Headout Pass logo.",
            "credit": "salparadis"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/3c515fec-b86e-40f6-9127-e21d543cc27c-1769065256440-331582.jpg",
            "altText": "Top attractions list with blurred Houses of Parliament and Big Ben by the River Thames in London.",
            "description": "Top attractions list with blurred Houses of Parliament and Big Ben by the River Thames in London.",
            "credit": "salparadis"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/1cff3da8-c254-40ea-8421-13e397d6c894-1769065539108-274803.jpg",
            "altText": "Tower of London with river view and historic architecture.",
            "description": "Tower of London with river view and historic architecture.",
            "credit": "chris"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/a1301555-3796-41c3-9aba-7db61740450c-1764319282385-271973.jpg",
            "altText": "London Eye and Thames River with a boat on a sunny day.",
            "description": "London Eye and Thames River with a boat on a sunny day.",
            "credit": "byjeng"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/ac512b24-ac18-46ed-8288-76e1816eb8c7-1768797875070-341418.jpg",
            "altText": "St. Paul's Cathedral in London with a red double-decker bus in front.",
            "description": "St. Paul's Cathedral in London with a red double-decker bus in front.",
            "credit": " zefart"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/c357855b-017f-4ffe-8598-b8640cb5b792-1764319194354-331098.jpg",
            "altText": "Westminster Abbey illuminated at night, London.",
            "description": "Westminster Abbey illuminated at night, London.",
            "credit": " Richie Chan"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/2eee8aa4-a5a2-4bf0-8aeb-464e2ff3bbe0-1764322330621-331629.jpg",
            "altText": "Wax figure of The Rock at Madame Tussauds London with two people celebrating an award.",
            "description": "Wax figure of The Rock at Madame Tussauds London with two people celebrating an award.",
            "credit": "Merlin Entertainments"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/ffc42e60-8a2f-4f8f-bcf1-3ccdba6c305d-1769065539108-342257.jpg",
            "altText": "Big Bus London tour in front of St. Paul's Cathedral.",
            "description": "Big Bus London tour in front of St. Paul's Cathedral.",
            "credit": "Big Bus GBP"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/e6b2ad85-ba56-4e76-8355-965c59257017-1769064749650-221091.jpg",
            "altText": "Uber Boat by Thames Clippers passing Houses of Parliament on the Thames River, London.",
            "description": "Uber Boat by Thames Clippers passing Houses of Parliament on the Thames River, London.",
            "credit": "Thames Clippers"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/35e78b13-f283-4056-aaa8-bb633612ebb9-1764319194354-313795.jpg",
            "altText": "Children watching penguins swim at SEA LIFE London Aquarium.",
            "description": "Children watching penguins swim at SEA LIFE London Aquarium.",
            "credit": "Golden Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/89707a70-db0a-4616-bcba-09a80e78135d-1764319194354-313796.jpg",
            "altText": "Visitors react to a live actor performance at The London Dungeon.",
            "description": "Visitors react to a live actor performance at The London Dungeon.",
            "credit": "Golden Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/d29f3eaf-9938-4691-b3ff-3a0cb7d8ef82-1764322090856-331602.jpg",
            "altText": "Aerial view of the Shard tower in central London at sunset.",
            "description": "Aerial view of the Shard tower in central London at sunset.",
            "credit": "Jack"
          }
        ],
        "safetyImages": [],
        "safetyVideos": []
      },
      "highlights": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003ESelect from 45+ must-see \u003Ca href=\"https://city-card-manager.lovable.app/citycard-info/london\"\u003ELondon experiences\u003C/a\u003E, from the London Eye and Tower of London to Frameless, Shrek’s Adventure, Madame Tussauds, and London Zoo.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EYou can also pick from options like Thames River cruises, hop-on hop-off bus tours, walking tours, and top attractions like Chelsea FC Stadium Tour, Kensington Palace.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EWith your pass being valid for 30 days from the selected date, and access to 2 to 7 attractions, you can shape your trip to be quick and breezy or pleasantly packed.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EExperience Tower of London or Westminster Abbey with Headout's exclusive AI audioguide, uncovering immersive stories and hands-free exploration.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EWith a single pass, you can access London attractions smoothly without juggling tickets, saving money and avoiding the hassle of repeated online bookings.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "imageUrl": "https://cdn-imgix.headout.com/media/images/aef4ae30-a8a1-4483-8285-ec53db1ec441-1764318740579-331582.1.png",
      "listingPrice": {
        "currencyCode": "GBP",
        "originalPrice": 52,
        "finalPrice": 52,
        "minimumPayablePrice": 52,
        "type": "PER_PERSON",
        "otherPricesExist": true,
        "bestDiscount": 0,
        "cashbackValue": 0,
        "cashbackType": "PERCENTAGE",
        "tourId": 83552
      },
      "schedule": null,
      "averageRating": 4.7,
      "promotionLabel": "",
      "tourType": "TOUR",
      "shortSummary": "",
      "reschedulePolicy": {
        "reschedulable": false,
        "reschedulableUpTo": null
      },
      "urlSlugs": {
        "EN": "/city-cards/headout-london-pass-e-39006/",
        "ES": "/es/city-passes/headout-london-pass-ahorra-hasta-un-40-en-las-principales-atracciones-e-39006/",
        "FR": "/fr/cartes-touristiques/headout-london-pass-economisez-jusqua-40-sur-les-principales-attractions-e-39006/",
        "IT": "/it/city-pass/headout-london-pass-risparmia-fino-al-40-su-tutte-le-attrazioni-piu-importanti-e-39006/",
        "DE": "/de/city-pass/headout-london-pass-bis-zu-40-rabatt-bei-allen-top-attraktionen-e-39006/",
        "PT": "/pt/city-passes/headout-london-pass-economize-ate-40-em-todas-as-principais-atracoes-e-39006/",
        "NL": "/nl/stadspassen/headout-londen-pas-bespaar-tot-40-bij-alle-topattracties-e-39006/",
        "PL": "/pl/city-cards/headout-london-pass-e-39006/",
        "KO": "/ko/city-cards/headout-london-pass-e-39006/",
        "JA": "/ja/city-cards/headout-london-pass-e-39006/",
        "ZH_HANS": "/zh-hans/city-cards/headout-london-pass-e-39006/",
        "DA": "/da/city-cards/headout-london-pass-spar-op-til-40-pa-alle-de-bedste-attraktioner-e-39006/",
        "NO": "/no/city-cards/headout-london-pass-spar-opptil-40-pa-alle-de-beste-attraksjonene-e-39006/",
        "RO": "/ro/city-cards/headout-london-pass-economisiti-pana-la-40-la-toate-atractiile-de-top-e-39006/",
        "RU": "/ru/city-cards/headout-london-pass-e-39006/",
        "SV": "/sv/city-cards/headout-london-pass-spara-upp-till-40-pa-alla-de-basta-attraktionerna-e-39006/",
        "TR": "/tr/city-cards/headout-london-pass-e-39006/"
      },
      "distance": null,
      "exclusions": "",
      "cityCode": "LONDON",
      "language": "EN",
      "validity": null,
      "combo": false,
      "multiVariant": true,
      "allVariantOpenDated": false,
      "descriptors": [
        {
          "code": "DURATION",
          "name": "Duration",
          "displayName": "Explore at your pace",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/clock.svg",
          "description": "Choose your entry time, stay as long as you like",
          "type": "STANDARD"
        },
        {
          "code": "FREE_CANCELLATION",
          "name": "Free Cancellation",
          "displayName": "Free cancellation",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/cancellation.svg",
          "description": "Free cancellation up to 0 hours before the start of your experience",
          "type": "STANDARD"
        },
        {
          "code": "TRANSFERS",
          "name": "Transfers available",
          "displayName": "Transfers available",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/transfers.svg",
          "description": "",
          "type": "INCLUSION_BASED"
        },
        {
          "code": "GUIDED_TOUR",
          "name": "Live Tour Guide",
          "displayName": "Guided tour",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/guidedtours.svg",
          "description": "Expert local tour guide",
          "type": "INCLUSION_BASED"
        },
        {
          "code": "AUDIO_GUIDE",
          "name": "Multilingual Audio Guide",
          "displayName": "Audio guide",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/headphones.svg",
          "description": "Access to multilingual audio guide",
          "type": "INCLUSION_BASED"
        }
      ],
      "topReviews": [
        {
          "tourId": 85283,
          "bookingId": 29721229,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15129277,
          "nonCustomerName": "Paula Shay",
          "reviewerImgUrl": null,
          "rating": 4,
          "content": "It was very good tickets all came through & excursions were really good.The only thing is i couldnt go on the tower bridge one as we had a suitcase but there was nowhere to leave it so my partner had to go his own think there should be places to store bags & cases",
          "reviewTime": 1771187225000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 83557,
          "bookingId": null,
          "customerUserId": 0,
          "title": "",
          "source": "PARTNER",
          "id": 15059306,
          "nonCustomerName": "Zoe",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Honestly, I was kinda skeptical about getting the London Pass at first (felt like a touristy move?) but it was sooo worth it. We (me, my partner and our 10yo son) zipped into the Tower of London in no time. The best was saving money on all the entries – didn't feel like we had to pick and chose just the 'main' stuff. We chose and hit the zoo, the Churchill War Rooms, and the river cruise. Weather was classic grey but didn't matter. ",
          "reviewTime": 1767052800000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": null
        },
        {
          "tourId": 83557,
          "bookingId": null,
          "customerUserId": 0,
          "title": "",
          "source": "PARTNER",
          "id": 15059308,
          "nonCustomerName": "Maya",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Traveling solo and felt like a total explorer with the pass. Did the hop-on bus, which was such a good intro, and then just followed my nose. Kew Gardens was STUNNING (def bring a rain jacket tho, classic UK weather). Only bummer was you can't take pics inside Westminster Abbey, but wandered around for ages anyway. 10/10 recommend for anyone who wants to get a lot done without the fuss.",
          "reviewTime": 1766793600000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": null
        },
        {
          "tourId": 83557,
          "bookingId": null,
          "customerUserId": 0,
          "title": "",
          "source": "PARTNER",
          "id": 15059311,
          "nonCustomerName": "Sofia",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Went with my parents, both in their late 60s. Was worried it might be too much walking for them but the hop-on hop-off bus was a lifesaver. Managed to see St Paul's and the Churchill War Rooms without any fuss. We did notice some steep stairs at the Tower of London (not ideal for everyone), but the staff were patient and helpful. Weather was chilly but dry – lucky us!",
          "reviewTime": 1766361600000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": null
        },
        {
          "tourId": 83557,
          "bookingId": null,
          "customerUserId": 0,
          "title": "",
          "source": "PARTNER",
          "id": 15059307,
          "nonCustomerName": "Mateo",
          "reviewerImgUrl": null,
          "rating": 4,
          "content": "Used this pass with my gf for 4 attractions. Westminster had a short wait, which was fine. We loved being able to just flash the venue tickets and walk in. Only thing, the app glitched once and wouldn't show our QR, so had to redownload it outside the British Museum—bit awkward. Still, we saw soooo much more than we would’ve otherwise.",
          "reviewTime": 1766880000000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": null
        }
      ],
      "cityDisplayName": "London",
      "microBrandsDescriptor": "",
      "listingDate": "2026-02-04",
      "experienceVideo": null,
      "experienceItineraryIds": [],
      "reviewsDetails": {
        "reviewsCount": 126,
        "ratingsCount": 126,
        "averageRating": 4.7,
        "ratingsSplit": {
          "1": 0,
          "2": 0,
          "3": 4,
          "4": 25,
          "5": 97
        },
        "showRatings": true,
        "displayConfig": {
          "exposeRatings": true,
          "exposeSorting": true,
          "exposeFiltering": true,
          "exposeLoadMore": true
        },
        "reviewCountries": {
          "countries": [],
          "count": 1
        }
      },
      "tourGroupUrl": "/city-cards/headout-london-pass-e-39006/",
      "minDuration": null,
      "maxDuration": null,
      "microBrandsHighlight": "###### Highlights\n\n**Build your ideal London trip with one pass that bundles top sights & keeps your budget in check.**\r\n\n- Choose from a [curated list](https://city-card-manager.lovable.app/citycard-info/london) of 45+ London staples, from the London Eye and Tower of London to quirky picks like Frameless and Shrek’s Adventure.\r\n- Make your choice from more options like Thames River cruises, hop-on hop-off bus tours, walking tours, and more top sights like Chelsea FC Stadium Tour, Kensington Palace.\r\n- Your pass is valid for 30 days from selected date. So, you can pick 2 to 7 attractions and opt for a relaxed plan or a busy day of sightseeing.\r\n- If you visit Tower of London or Westminster Abbey, you get to experience Headout's exclusive AI audioguide, giving you interactive, location-based stories within the attraction.\r\n- No need to juggle multiple tickets since your pass manages entry across London while helping you cut costs and avoid constant checkout steps.\n###### Need to know\n\n- London’s top attractions are popular and can sell out quickly, so booking the attractions early is highly recommended.\r\n- Each attraction can be visited only once during your pass's validity.\r\n- Attraction bookings can't be changed or cancelled once confirmed.\r\n- Opening hours and terms for some attractions may change occasionally, so it’s a good idea to check the attraction’s website before your visit.\r\n- Headout AI-powered audio guide is compatible only with iPhone & is available only in English.\n###### How to use\n\n- **Validity:** Your pass is active for 30 calendar days from the selected date.\r\n- During these 30 days, you can book and visit the attractions of your choice.\r\n- For example, if you pick a 3-attraction pass, you can visit any three included spots within 30 days of activation.\r\n- Full details for each attraction will be provided in your tickets after booking."
    },
    {
      "id": 6274,
      "name": "From London: Stonehenge Half-Day Trip",
      "primaryCollection": {
        "id": 212,
        "name": "London To Stonehenge Tours",
        "displayName": "London To Stonehenge Tours"
      },
      "primaryCategory": {
        "id": 2,
        "name": "Tours",
        "rank": 2,
        "displayName": "Tours",
        "heading": "London Tours",
        "metaTitle": "Plan and Book Top-rated, Exclusive Tours in London | Headout",
        "metaDescription": "Book exclusive tours of museums, attractions, historical sites, and more in London. Get 10% additional cashback, flexible cancelation, and 24/7 support on each booking.",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/tours-london-ca-2~7426/",
          "ES": "/es/tours-london-ca-2~7426/",
          "FR": "/fr/visites-london-ca-2~7426/",
          "IT": "/it/tour-london-ca-2~7426/",
          "DE": "/de/touren-london-ca-2~7426/",
          "PT": "/pt/tours-london-ca-2~7426/",
          "NL": "/nl/tours-london-ca-2~7426/",
          "PL": "/pl/tours-london-ca-2~7426/",
          "KO": "/ko/tours-london-ca-2~7426/",
          "JA": "/ja/tours-london-ca-2~7426/",
          "ZH_HANS": "/zh-hans/tours-london-ca-2~7426/",
          "DA": "/da/ture-london-ca-2~7426/",
          "NO": "/no/turer-london-ca-2~7426/",
          "RO": "/ro/tururi-london-ca-2~7426/",
          "RU": "/ru/tours-london-ca-2~7426/",
          "SV": "/sv/rundturer-london-ca-2~7426/",
          "TR": "/tr/tours-london-ca-2~7426/"
        },
        "medias": [],
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": null
        },
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        }
      },
      "primarySubCategory": {
        "id": 1143,
        "name": "Day trips",
        "categoryId": 2,
        "rank": 19,
        "displayName": "Day Trips",
        "heading": "Day Trips From London",
        "metaTitle": "Day Trips from London | Visit Stonehenge, Bath, Warwick & More",
        "metaDescription": "Venture away from London and explore popular destinations such as Stonehenge, Canterbury, Oxford. Plan your day trip from London now!",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/day-trips-london-sc-1143~7426/",
          "ES": "/es/tours-de-un-dia-london-sc-1143~7426/",
          "FR": "/fr/excursions-dune-journee-london-sc-1143~7426/",
          "IT": "/it/day-trips-london-sc-1143~7426/",
          "DE": "/de/tagesausfluge-london-sc-1143~7426/",
          "PT": "/pt/excursoes-de-um-dia-london-sc-1143~7426/",
          "NL": "/nl/day-trips-london-sc-1143~7426/",
          "PL": "/pl/day-trips-london-sc-1143~7426/",
          "KO": "/ko/day-trips-london-sc-1143~7426/",
          "JA": "/ja/day-trips-london-sc-1143~7426/",
          "ZH_HANS": "/zh-hans/day-trips-london-sc-1143~7426/",
          "DA": "/da/day-trips-london-sc-1143~7426/",
          "NO": "/no/day-trips-london-sc-1143~7426/",
          "RO": "/ro/excursii-de-o-zi-london-sc-1143~7426/",
          "RU": "/ru/day-trips-london-sc-1143~7426/",
          "SV": "/sv/day-trips-london-sc-1143~7426/",
          "TR": "/tr/day-trips-london-sc-1143~7426/"
        },
        "medias": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/78e4cdec19e98dc1239e6ab76ca41b00-SubCategory-Day-Trips.jpg",
            "type": "IMAGE",
            "metadata": {
              "altText": "Tourists exploring a historic street with a guide pointing out landmarks.",
              "height": 1000,
              "width": 1600,
              "videoDuration": null,
              "uploadDate": "2023-09-01",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            },
            "info": {
              "sourceType": "SOURCED",
              "sourceUrl": "https://stock.adobe.com/in/images/tour-guide-in-sunglasses-pointing-with-hand-during-excursion-with-interracial-tourists-on-andrews-descent-in-kyiv/580769408",
              "credit": "LIGHTFIELD STUDIOS",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            }
          }
        ],
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        },
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": ""
        }
      },
      "listingAvailability": {
        "nextAvailableDate": {
          "date": "2026-02-19",
          "remaining": 36,
          "availability": "LIMITED"
        }
      },
      "ticketValidity": {
        "ticketValidityType": "NOT_EXTENDABLE",
        "ticketValidityUntilDate": null,
        "ticketValidityUntilDaysFromPurchase": null
      },
      "allTags": [
        "ESCAPE",
        "RECOMMENDED6",
        "SAFETY_CLEANED_EQUIPMENTS",
        "SAFETY_CONTACTLESS",
        "SAFETY_HANDWASH",
        "SAFETY_MASK_GUEST",
        "SAFETY_MASK_STAFF",
        "SAFETY_RESTRICTED_CAPACITY",
        "SAFETY_SOCIAL_DISTANCING",
        "SAFETY_TRAINED_STAFF",
        "SCHEDULE-300-DAYS",
        "STONEHENGE",
        "STONEHENGE2"
      ],
      "callToAction": "",
      "inclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EHalf-day tour of Stonehenge\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ERound-trip AC coach transfers\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EBoarding from central London\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAudio guide in English, German, Spanish, French, Dutch, Italian, Ukrainian, Mandarin, Russian, Polish, Japanese, Korean, and Brazilian Portuguese\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "neighbourhood": null,
      "hidden": false,
      "flowType": "NORMAL",
      "startPoint": {
        "latitude": 51.5072174072266,
        "longitude": -0.127586200833321
      },
      "reviewCount": 1320,
      "cancellationPolicy": {
        "cancellable": true,
        "cancellableUpTo": 1440
      },
      "ratingCount": 1320,
      "showRatings": true,
      "media": {
        "productImages": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/571ae4b6fabc4dd99ec5ca3f1fdbb5c5-stonehenge-03.jpg",
            "altText": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
            "description": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
            "credit": "Pawel Pajor"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/35305d6c96fe679c4a4de98f0607bb91-6274-london-stonehenge-entry-tickets-with-transfers-from-london-02.jpg",
            "altText": "Person reading a brochure on a bus during a Stonehenge and Windsor tour from London.",
            "description": "Person reading a brochure on a bus during a Stonehenge and Windsor tour from London.",
            "credit": "Evan Evans_API"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/4c1bdd8e35652c76777a0ef8829b80dd-6274-london-stonehenge-entry-tickets-with-transfers-from-london-03.jpg",
            "altText": "Stonehenge aerial view with tourists on a path, part of a half-day tour from London.",
            "description": "Stonehenge aerial view with tourists on a path, part of a half-day tour from London.",
            "credit": "Golden Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/2bb3d5c05b2b8fecdec275ee1d191f5a-6269-salisbury-stonehenge-entry-tickets-05.jpg",
            "altText": "Tourist using audio guide in a lush green park setting.",
            "description": "Tourist using audio guide in a lush green park setting.",
            "credit": "hin255"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/0efd1793f2c7a115b1b312bc86c6e78e-6274-london-stonehenge-entry-tickets-with-transfers-from-london-05.jpg",
            "altText": "Visitors pulling a large stone replica at Stonehenge exhibit during half-day tour from London.",
            "description": "Visitors pulling a large stone replica at Stonehenge exhibit during half-day tour from London.",
            "credit": "Evan Evans_API"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/7300c80c3c066b4592ab54aa927db019-stonehenge-02.jpg",
            "altText": "Reconstructed Neolithic huts near Stonehenge, England.",
            "description": "Reconstructed Neolithic huts near Stonehenge, England.",
            "credit": "vasildakov"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/b6668815d69a004d58a75a720f5ce0ec-6274-london-stonehenge-entry-tickets-with-transfers-from-london-07.jpg",
            "altText": "Riverside view with historic buildings and boats near London.",
            "description": "Riverside view with historic buildings and boats near London.",
            "credit": "dbrnjhrj"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/1ce4159465dfc838c447783ec7a15ad2-6274-london-stonehenge-entry-tickets-with-transfers-from-london-08.jpg",
            "altText": "Tourists using audio guides at the Roman Baths in Bath, part of a day trip from London.",
            "description": "Tourists using audio guides at the Roman Baths in Bath, part of a day trip from London.",
            "credit": "Golden Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/05519e8dceeeb1079d14a4ad632051b2-27282-london-windsor-day-trip-with-stonehenge--inner-circle--access-05.jpg",
            "altText": "Visitor exploring Stonehenge inner circle with a group, Wiltshire, England.",
            "description": "Visitor exploring Stonehenge inner circle with a group, Wiltshire, England.",
            "credit": "Midjourney"
          }
        ],
        "safetyImages": [],
        "safetyVideos": []
      },
      "highlights": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EEnjoy round-trip transfers to Stonehenge in a comfortable AC coach from Central London that is easily accessible by public transport.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EGet over two hours to explore Stonehenge, a UNESCO World Heritage Site, Salisbury's landscape, as well as the exhibition at the Visitor Center.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAdmire a display of over 250 ancient artefacts, including tools, pottery, and jewellery that are thousands of years old, with a multilingual audio guide included.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "imageUrl": "https://cdn-imgix.headout.com/media/images/571ae4b6fabc4dd99ec5ca3f1fdbb5c5-stonehenge-03.jpg",
      "listingPrice": {
        "currencyCode": "GBP",
        "originalPrice": 58.32,
        "finalPrice": 55.4,
        "minimumPayablePrice": 55.4,
        "type": "PER_PERSON",
        "otherPricesExist": true,
        "bestDiscount": 5,
        "cashbackValue": 0,
        "cashbackType": "PERCENTAGE",
        "tourId": 11367
      },
      "schedule": null,
      "averageRating": 4.5,
      "promotionLabel": "",
      "tourType": "TOUR",
      "shortSummary": "",
      "reschedulePolicy": {
        "reschedulable": false,
        "reschedulableUpTo": null
      },
      "urlSlugs": {
        "EN": "/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
        "ES": "/es/tour-a-stonehenge-desde-londres/desde-londres-tour-de-medio-dia-a-stonehenge-con-audioguia-e-6274/",
        "FR": "/fr/escapades-londres-stonehenge/stonehenge-excursion-dune-demi-journee-depuis-londres-avec-audioguide-e-6274/",
        "IT": "/it/tour-da-londra-a-stonehenge/gita-di-mezza-giornata-da-londra-a-stonehenge-con-audio-guida-e-6274/",
        "DE": "/de/london-nach-stonehenge-touren/halbtagestour-london-nach-stonehenge-mit-audioguide-e-6274/",
        "PT": "/pt/tours-londres-a-stonehenge/visita-de-meio-dia-a-stonehenge-de-londres-com-guia-de-audio-e-6274/",
        "NL": "/nl/stonehenge-tours-vanuit-londen/stonehenge-tickets-met-transfers-vanuit-londen-audiogids-e-6274/",
        "PL": "/pl/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
        "KO": "/ko/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
        "JA": "/ja/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
        "ZH_HANS": "/zh-hans/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
        "DA": "/da/ture-fra-london-til-stonehenge/fra-london-stonehenge-halvdagsudflugt-e-6274/",
        "NO": "/no/turer-fra-london-til-stonehenge/fra-london-stonehenge-halvdagstur-e-6274/",
        "RO": "/ro/tururi-de-la-londra-la-stonehenge/de-la-londra-excursie-de-o-zi-la-stonehenge-e-6274/",
        "RU": "/ru/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
        "SV": "/sv/turer-fran-london-till-stonehenge/fran-london-stonehenge-halvdagsutflykt-e-6274/",
        "TR": "/tr/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/"
      },
      "distance": null,
      "exclusions": "\u003Cul\u003E\n\u003Cli\u003EGuide\u003C/li\u003E\n\u003C/ul\u003E",
      "cityCode": "LONDON",
      "language": "EN",
      "validity": "",
      "combo": false,
      "multiVariant": false,
      "allVariantOpenDated": false,
      "descriptors": [
        {
          "code": "DURATION",
          "name": "Duration",
          "displayName": "Duration",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/clock.svg",
          "description": "6 hrs",
          "type": "STANDARD"
        },
        {
          "code": "FREE_CANCELLATION",
          "name": "Free Cancellation",
          "displayName": "Free cancellation",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/cancellation.svg",
          "description": "Free cancellation up to 24 hours before the start of your experience",
          "type": "STANDARD"
        },
        {
          "code": "BOOK_NOW_PAY_LATER",
          "name": "Book now, pay later",
          "displayName": "Book now, pay later",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/bnpl.svg",
          "description": "Book now without paying anything. Cancel for free if your plans change.",
          "type": "STANDARD"
        },
        {
          "code": "TRANSFERS",
          "name": "Transfers available",
          "displayName": "Transfers available",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/transfers.svg",
          "description": "Enjoy comfortable roundtrip transfers",
          "type": "INCLUSION_BASED"
        },
        {
          "code": "AUDIO_GUIDE",
          "name": "Multilingual Audio Guide",
          "displayName": "Audio guide",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/headphones.svg",
          "description": "Access to multilingual audio guide",
          "type": "INCLUSION_BASED"
        }
      ],
      "topReviews": [
        {
          "tourId": 11367,
          "bookingId": 29776134,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15123270,
          "nonCustomerName": "Aurora Orsini",
          "reviewerImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocLVhJotWimevyPlsc0qgFtPVBu-tEQeNMTWYErVuMTQo2yZkhBl=s96-c",
          "rating": 5,
          "content": "Loved it! The staff was super kind and they also gave us snacks for the trip. Just be careful about the pickup destination that varies in the morning and in the afternoon!🥰",
          "reviewTime": 1770998747000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "FAMILY",
            "localisedLabel": "Family"
          }
        },
        {
          "tourId": 11367,
          "bookingId": 29152202,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15096194,
          "nonCustomerName": "Juan Pedro Frere Affanni",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Gorgeous trip, amazing views, great comments, advice and fun facts from our kind driver. ",
          "reviewTime": 1769932849000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "SOLO",
            "localisedLabel": "Solo"
          }
        },
        {
          "tourId": 11367,
          "bookingId": 29183782,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15037254,
          "nonCustomerName": "Aravind Venkatesh",
          "reviewerImgUrl": null,
          "rating": 4,
          "content": "Kee, our driver cum guide shared interesting insights and stories to keep us engaged along the way. The coach was comfortable and the mini snack hamper provided was perfect for an early 8:30 am start. There was enough time to explore Stonehenge and the museum, so we didn't feel rushed. Once we reached, Kee gave clear instructions on things to do and departure time. I highly recommend this trip if you are looking for a half day trip from London to Stonehenge.",
          "reviewTime": 1767715763000,
          "reviewMedias": [
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/29183782/3b06e25f84371cee2faf32f9a532e577-07466431ba2d",
              "fileType": "IMAGE",
              "fileSize": 4713499,
              "width": null,
              "height": null,
              "fileName": "IMG_2593.jpeg"
            }
          ],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "FAMILY",
            "localisedLabel": "Family"
          }
        },
        {
          "tourId": 11367,
          "bookingId": 29630581,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15067712,
          "nonCustomerName": "Maria Lujan del Rosario Bustos",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Cómodo el bus, muy amable el chofer que explicaba todo el recorrido ,Armando. Te regalaban merienda. El lugar fué increíble ",
          "reviewTime": 1768811715000,
          "reviewMedias": [
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/29630581/e9390925f9a9beca4be1e6ab00ef6ba0-e10c822f51af",
              "fileType": "IMAGE",
              "fileSize": 1170974,
              "width": null,
              "height": null,
              "fileName": "1000505457.jpg"
            }
          ],
          "translatedContent": "The bus was comfortable, and the driver, Armando, was very friendly and explained the entire route. They gave us snacks. The place was incredible. ",
          "useTranslatedContent": true,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "ES",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "SOLO",
            "localisedLabel": "Solo"
          }
        },
        {
          "tourId": 11367,
          "bookingId": 29356372,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15037295,
          "nonCustomerName": "Giovanni Spagnuolo ",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "L'organizzazione è stata perfetta: il punto di incontro era facile da trovare. Il bus era moderno, molto pulito e dotato di ogni comfort, il che ha reso il viaggio estremamente piacevole e rilassante. \nUna volta arrivati a Stonehenge, tutto è stato gestito in modo fluido. Siamo scesi dal bus e in pochi minuti eravamo già pronti per la visita, evitando lunghe attese. Il sito è magico e l'organizzazione sul posto permette di godersi l'atmosfera senza fretta. Consiglio vivamente questo tour a chiunque voglia visitare Stonehenge in totale comodità!",
          "reviewTime": 1767715973000,
          "reviewMedias": [],
          "translatedContent": "The organization was perfect: the meeting point was easy to find. The bus was modern, very clean, and equipped with every comfort, which made the trip extremely pleasant and relaxing. \nOnce we arrived at Stonehenge, everything was handled smoothly. We got off the bus and within minutes we were ready for the tour, avoiding long waits. The site is magical and the organization on site allows you to enjoy the atmosphere without rushing. I highly recommend this tour to anyone who wants to visit Stonehenge in total comfort!",
          "useTranslatedContent": true,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "IT",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "FAMILY",
            "localisedLabel": "Family"
          }
        }
      ],
      "cityDisplayName": "London",
      "microBrandsDescriptor": "",
      "listingDate": "2025-09-22",
      "experienceVideo": null,
      "experienceItineraryIds": [93],
      "reviewsDetails": {
        "reviewsCount": 1320,
        "ratingsCount": 1320,
        "averageRating": 4.5,
        "ratingsSplit": {
          "1": 26,
          "2": 13,
          "3": 20,
          "4": 508,
          "5": 753
        },
        "showRatings": true,
        "displayConfig": {
          "exposeRatings": true,
          "exposeSorting": true,
          "exposeFiltering": true,
          "exposeLoadMore": true
        },
        "reviewCountries": {
          "countries": [
            {
              "code": "US",
              "displayName": "United States"
            },
            {
              "code": "IT",
              "displayName": "Italy"
            },
            {
              "code": "CL",
              "displayName": "Chile"
            },
            {
              "code": "ES",
              "displayName": "Spain"
            },
            {
              "code": "AR",
              "displayName": "Argentina"
            },
            {
              "code": "DE",
              "displayName": "Germany"
            },
            {
              "code": "FR",
              "displayName": "France"
            },
            {
              "code": "MX",
              "displayName": "Mexico"
            },
            {
              "code": "BR",
              "displayName": "Brazil"
            },
            {
              "code": "HR",
              "displayName": "Croatia"
            }
          ],
          "count": 36
        }
      },
      "tourGroupUrl": "/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
      "minDuration": 21600000,
      "maxDuration": 21600000,
      "microBrandsHighlight": "###### Highlights\n\n**Perfect for those short on time, visit Stonehenge with round-trip transfers from Central London.**\r\n\n- **Day out to** Stonehenge with round-trip transfers from a conveniently located departure point in Central London on an exclusive AC coach.\r\n- **You’ll get** a half-day convenient trip in a comfortable AC coach in Central London and a multilingual audio guide in 13 languages.\r\n- **Stonehenge:** Admire this UNESCO World Heritage Site as well as the Salisbury landscape with over 2 hours of free time.\r\n- **Visitor Center:** See over 250 ancient items excavated on this site that are thousands of years old, from tools and pottery to jewellery.\n###### Need to know\n\n**What’s not allowed**\r\n\r\n\n- You will not be allowed to enter the Stonehenge Circle itself. This is due to the restoration attempts and the relative instability of the structure. Your Stonehenge tickets allow you to access about 10 meters of the monument.\r\n\n\r\n**Accessibility**\r\n\r\n\n- ​​This experience is wheelchair and pram/stroller accessible.\r\n- Your guide dogs are welcome at the venue.\r\n\n\r\n**Additional information**\r\n\r\n\n- These tours run daily from April to October and on Tuesdays, Thursdays, Saturdays, and Sundays from November to March.\r\n- English Heritage and National Trust England members can enjoy free admission to Stonehenge."
    },
    {
      "id": 9641,
      "name": "From London: Stonehenge, Windsor & Oxford Full Day Trip",
      "primaryCollection": {
        "id": 212,
        "name": "London To Stonehenge Tours",
        "displayName": "London To Stonehenge Tours"
      },
      "primaryCategory": {
        "id": 2,
        "name": "Tours",
        "rank": 2,
        "displayName": "Tours",
        "heading": "London Tours",
        "metaTitle": "Plan and Book Top-rated, Exclusive Tours in London | Headout",
        "metaDescription": "Book exclusive tours of museums, attractions, historical sites, and more in London. Get 10% additional cashback, flexible cancelation, and 24/7 support on each booking.",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/tours-london-ca-2~7426/",
          "ES": "/es/tours-london-ca-2~7426/",
          "FR": "/fr/visites-london-ca-2~7426/",
          "IT": "/it/tour-london-ca-2~7426/",
          "DE": "/de/touren-london-ca-2~7426/",
          "PT": "/pt/tours-london-ca-2~7426/",
          "NL": "/nl/tours-london-ca-2~7426/",
          "PL": "/pl/tours-london-ca-2~7426/",
          "KO": "/ko/tours-london-ca-2~7426/",
          "JA": "/ja/tours-london-ca-2~7426/",
          "ZH_HANS": "/zh-hans/tours-london-ca-2~7426/",
          "DA": "/da/ture-london-ca-2~7426/",
          "NO": "/no/turer-london-ca-2~7426/",
          "RO": "/ro/tururi-london-ca-2~7426/",
          "RU": "/ru/tours-london-ca-2~7426/",
          "SV": "/sv/rundturer-london-ca-2~7426/",
          "TR": "/tr/tours-london-ca-2~7426/"
        },
        "medias": [],
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": null
        },
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        }
      },
      "primarySubCategory": {
        "id": 1143,
        "name": "Day trips",
        "categoryId": 2,
        "rank": 19,
        "displayName": "Day Trips",
        "heading": "Day Trips From London",
        "metaTitle": "Day Trips from London | Visit Stonehenge, Bath, Warwick & More",
        "metaDescription": "Venture away from London and explore popular destinations such as Stonehenge, Canterbury, Oxford. Plan your day trip from London now!",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/day-trips-london-sc-1143~7426/",
          "ES": "/es/tours-de-un-dia-london-sc-1143~7426/",
          "FR": "/fr/excursions-dune-journee-london-sc-1143~7426/",
          "IT": "/it/day-trips-london-sc-1143~7426/",
          "DE": "/de/tagesausfluge-london-sc-1143~7426/",
          "PT": "/pt/excursoes-de-um-dia-london-sc-1143~7426/",
          "NL": "/nl/day-trips-london-sc-1143~7426/",
          "PL": "/pl/day-trips-london-sc-1143~7426/",
          "KO": "/ko/day-trips-london-sc-1143~7426/",
          "JA": "/ja/day-trips-london-sc-1143~7426/",
          "ZH_HANS": "/zh-hans/day-trips-london-sc-1143~7426/",
          "DA": "/da/day-trips-london-sc-1143~7426/",
          "NO": "/no/day-trips-london-sc-1143~7426/",
          "RO": "/ro/excursii-de-o-zi-london-sc-1143~7426/",
          "RU": "/ru/day-trips-london-sc-1143~7426/",
          "SV": "/sv/day-trips-london-sc-1143~7426/",
          "TR": "/tr/day-trips-london-sc-1143~7426/"
        },
        "medias": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/78e4cdec19e98dc1239e6ab76ca41b00-SubCategory-Day-Trips.jpg",
            "type": "IMAGE",
            "metadata": {
              "altText": "Tourists exploring a historic street with a guide pointing out landmarks.",
              "height": 1000,
              "width": 1600,
              "videoDuration": null,
              "uploadDate": "2023-09-01",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            },
            "info": {
              "sourceType": "SOURCED",
              "sourceUrl": "https://stock.adobe.com/in/images/tour-guide-in-sunglasses-pointing-with-hand-during-excursion-with-interracial-tourists-on-andrews-descent-in-kyiv/580769408",
              "credit": "LIGHTFIELD STUDIOS",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            }
          }
        ],
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        },
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": ""
        }
      },
      "listingAvailability": {
        "nextAvailableDate": {
          "date": "2026-02-19",
          "remaining": 142,
          "availability": "LIMITED"
        }
      },
      "ticketValidity": {
        "ticketValidityType": "NOT_EXTENDABLE",
        "ticketValidityUntilDate": null,
        "ticketValidityUntilDaysFromPurchase": null
      },
      "allTags": [
        "ESCAPE",
        "OXFORD",
        "OXFORD1",
        "SAFETY_CLEANED_EQUIPMENTS",
        "SAFETY_CONTACTLESS",
        "SAFETY_HANDWASH",
        "SAFETY_MASK_GUEST",
        "SAFETY_MASK_STAFF",
        "SAFETY_RESTRICTED_CAPACITY",
        "SAFETY_SOCIAL_DISTANCING",
        "SAFETY_TRAINED_STAFF",
        "SCHEDULE-360-DAYS",
        "STONEHENGE",
        "STONEHENGE7",
        "WINDSOR",
        "WINDSOR5",
        "WINDSORCASTLE",
        "WINDSORCASTLE5"
      ],
      "callToAction": "",
      "inclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EFull-day tour of Stonehenge, Windsor, and Oxford\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEntry to Stonehenge\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ERound-trip AC coach transfers\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ELive-guided walking tour of Oxford\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAudio guide in English, German, Spanish, French, Dutch, Italian, Ukrainian, Mandarin, Russian, Polish, Japanese, Korean, and Brazilian Portuguese at Stonehenge\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EExpert English, Spanish, Japanese, Portuguese, or French-speaking guide on the bus and at all three locations (as per option selected)\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEntry to Windsor Castle (as per option selected)\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "neighbourhood": null,
      "hidden": false,
      "flowType": "GUIDED_TOUR_PROPERTY_SELECTION",
      "startPoint": {
        "latitude": 51.4925041198731,
        "longitude": -0.148165225982666
      },
      "reviewCount": 1365,
      "cancellationPolicy": {
        "cancellable": true,
        "cancellableUpTo": 1440
      },
      "ratingCount": 1365,
      "showRatings": true,
      "media": {
        "productImages": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/7be827809b286328bee34031dd9d9835-9641-london-from-london--stonehenge--windsor-castle---oxford-day-trip-01.jpg",
            "altText": "Stonehenge at sunrise with clear sky in England, United Kingdom.",
            "description": "Stonehenge at sunrise with clear sky in England, United Kingdom.",
            "credit": "Pawel Pajor"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/8146f90a1555f1cefc3e6964df035203-9641-london-from-london--stonehenge--windsor-castle---oxford-day-trip-04.jpg",
            "altText": "Windsor Castle exterior with lush green lawns and a pathway leading to the entrance.",
            "description": "Windsor Castle exterior with lush green lawns and a pathway leading to the entrance.",
            "credit": "Golden Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/87b7bede6231929fe9d64890c5a750bc-2845---London---From-London--Oxford--Stratford-upon-Avon--Cotswolds-and-Warwick-Castle-Day-Trip---09.jpg",
            "altText": "Bridge of Sighs over a street in Oxford, England, with pedestrians walking below.",
            "description": "Bridge of Sighs over a street in Oxford, England, with pedestrians walking below.",
            "credit": "A.B.G."
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/4deb8d616f69d2fc0a8e1c3bbc48ed61-9641-london-from-london--stonehenge%2C-windsor-castle-%26-oxford-day-trip-09.jpg",
            "altText": "Windsor Castle interior with ornate ceiling, chandelier, and paintings on red walls.",
            "description": "Windsor Castle interior with ornate ceiling, chandelier, and paintings on red walls.",
            "credit": "Royal Collection Trust"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/631c03f64efcdb921e823f1330fbff10-9641-london-from-london--stonehenge--windsor-castle---oxford-day-trip-08.jpg",
            "altText": "Mother and child visiting Stonehenge, England.",
            "description": "Mother and child visiting Stonehenge, England.",
            "credit": "Evan Evans_API"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/da8aba52e12071fcd63fa35d22fd3cd1-9641-london-from-london--stonehenge--windsor-castle---oxford-day-trip-02.jpg",
            "altText": "Recreation of ancient Stonehenge builder's house with thatched roof and wattle fence.",
            "description": "Recreation of ancient Stonehenge builder's house with thatched roof and wattle fence.",
            "credit": "Susan Vineyard"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/fd1a9a5cf29480b23cd652fb15b472e7-2926-london-from-london--stonehenge--windsor-castle--bath---roman-baths-day-trip-05.jpg",
            "altText": "Windsor Castle stone exterior with lush greenery and blue sky.",
            "description": "Windsor Castle stone exterior with lush greenery and blue sky.",
            "credit": "Michael"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/421beb3d10f3f4a1f6fc794425c057a1-9641-london-from-london--stonehenge%2C-windsor-castle-%26-oxford-day-trip-06.jpg",
            "altText": "Radcliffe Camera dome and surrounding Bodleian Library buildings in Oxford, England.",
            "description": "Radcliffe Camera dome and surrounding Bodleian Library buildings in Oxford, England.",
            "credit": "Evan Evans_API"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/9ca638e35fc23ffe90029c4f8ce3e68d-9641-london-windsor-castle--oxford---stonehenge-tour-from-london-02.jpg",
            "altText": "St George’s Chapel exterior with blue sky and green lawn, Windsor Castle in background.",
            "description": "St George’s Chapel exterior with blue sky and green lawn, Windsor Castle in background.",
            "credit": "Evan Evans_API"
          },
          {
            "url": "https://cdn-imgix.headout.com/tour/17446/TOUR-IMAGE/8baf34d8-9992-4139-850e-2f86f3459972-9641-london-windsor-castle",
            "altText": "Oxford college garden with historic stone buildings and vibrant flowers.",
            "description": "Oxford college garden with historic stone buildings and vibrant flowers.",
            "credit": "Evan Evans_API"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/d5d4d0c7f94cc556c2315611a420a115-9641-london-from-london--stonehenge%2C-windsor-castle-%26-oxford-day-trip-07.jpg",
            "altText": "Examination Schools courtyard with clock tower, Oxford, England.",
            "description": "Examination Schools courtyard with clock tower, Oxford, England.",
            "credit": "Andrei Nekrassov"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/eb49dda8bc48376016942249979923f5-stonehenge-05.jpg",
            "altText": "Stonehenge with blue sky and yellow flowers during daytime.",
            "description": "Stonehenge with blue sky and yellow flowers during daytime.",
            "credit": "Evan Evans_API"
          }
        ],
        "safetyImages": [],
        "safetyVideos": []
      },
      "highlights": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EGo on a journey aboard an AC coach from central London through England's royal, ancient, and academic heartlands, exploring three legendary landmarks.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EImmerse yourself in expertly guided tours, where you'll unravel the prehistoric significance of Stonehenge, the royal history of Windsor, and Oxford’s academic legend.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAt Stonehenge, uncover the secrets of the Stone Circle, and in Windsor, enjoy a peaceful stroll along the cobbled streets with a view of Windsor Castle.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAdmire architecture from the early Saxon to the Gothic Revival eras as you explore Oxford, where popular TV series and films, like \u003Cem\u003EHarry Potter\u003C/em\u003E, were filmed.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEnhance your experience with an upgrade to explore Windsor Castle, including the grand State Apartments and the gothic St. George’s Chapel.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "imageUrl": "https://cdn-imgix.headout.com/media/images/7be827809b286328bee34031dd9d9835-9641-london-from-london--stonehenge--windsor-castle---oxford-day-trip-01.jpg",
      "listingPrice": {
        "currencyCode": "GBP",
        "originalPrice": 105,
        "finalPrice": 94.5,
        "minimumPayablePrice": 94.5,
        "type": "PER_PERSON",
        "otherPricesExist": true,
        "bestDiscount": 10,
        "cashbackValue": 0,
        "cashbackType": "PERCENTAGE",
        "tourId": 56329
      },
      "schedule": null,
      "averageRating": 4.6,
      "promotionLabel": "",
      "tourType": "TOUR",
      "shortSummary": "",
      "reschedulePolicy": {
        "reschedulable": false,
        "reschedulableUpTo": null
      },
      "urlSlugs": {
        "EN": "/london-to-stonehenge-tours/windsor-castle-stonehenge-and-oxford-from-london-e-9641/",
        "ES": "/es/tour-a-stonehenge-desde-londres/visita-castillo-de-windsor-stonehenge-y-oxford-desde-londres-e-9641/",
        "FR": "/fr/escapades-londres-stonehenge/visite-du-chateau-de-windsor-de-stonehenge-et-doxford-depuis-londres-e-9641/",
        "IT": "/it/tour-da-londra-a-stonehenge/tour-del-castello-di-windsor-stonehenge-ed-oxford-da-londra-e-9641/",
        "DE": "/de/london-nach-stonehenge-touren/tour-von-london-windsor-castle-stonehenge-und-oxford-e-9641/",
        "PT": "/pt/tours-londres-a-stonehenge/excursao-castelo-windsor-stonehenge-e-oxford-saindo-de-londres-e-9641/",
        "NL": "/nl/stonehenge-tours-vanuit-londen/rondleiding-windsor-castle-oxford-stonehenge-vanuit-londen-e-9641/",
        "PL": "/pl/london-to-stonehenge-tours/windsor-castle-stonehenge-and-oxford-from-london-e-9641/",
        "KO": "/ko/london-to-stonehenge-tours/windsor-castle-stonehenge-and-oxford-from-london-e-9641/",
        "JA": "/ja/london-to-stonehenge-tours/windsor-castle-stonehenge-and-oxford-from-london-e-9641/",
        "ZH_HANS": "/zh-hans/london-to-stonehenge-tours/windsor-castle-stonehenge-and-oxford-from-london-e-9641/",
        "DA": "/da/ture-fra-london-til-stonehenge/fra-london-heldagstur-til-stonehenge-windsor-og-oxford-e-9641/",
        "NO": "/no/turer-fra-london-til-stonehenge/fra-london-heldagstur-til-stonehenge-windsor-og-oxford-e-9641/",
        "RO": "/ro/tururi-de-la-londra-la-stonehenge/din-londra-excursie-de-o-zi-la-stonehenge-windsor-si-oxford-e-9641/",
        "RU": "/ru/london-to-stonehenge-tours/windsor-castle-stonehenge-and-oxford-from-london-e-9641/",
        "SV": "/sv/turer-fran-london-till-stonehenge/fran-london-stonehenge-windsor-oxford-heldagsutflykt-e-9641/",
        "TR": "/tr/london-to-stonehenge-tours/windsor-castle-stonehenge-and-oxford-from-london-e-9641/"
      },
      "distance": null,
      "exclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EHotel pick-up/drop-off\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ELunch\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "cityCode": "LONDON",
      "language": "EN",
      "validity": "",
      "combo": false,
      "multiVariant": true,
      "allVariantOpenDated": false,
      "descriptors": [
        {
          "code": "DURATION",
          "name": "Duration",
          "displayName": "Duration",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/clock.svg",
          "description": "11 hrs - 12 hrs",
          "type": "STANDARD"
        },
        {
          "code": "FREE_CANCELLATION",
          "name": "Free Cancellation",
          "displayName": "Free cancellation",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/cancellation.svg",
          "description": "Free cancellation up to 24 hours before the start of your experience",
          "type": "STANDARD"
        },
        {
          "code": "BOOK_NOW_PAY_LATER",
          "name": "Book now, pay later",
          "displayName": "Book now, pay later",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/bnpl.svg",
          "description": "Book now without paying anything. Cancel for free if your plans change.",
          "type": "STANDARD"
        },
        {
          "code": "TRANSFERS",
          "name": "Transfers available",
          "displayName": "Transfers available",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/transfers.svg",
          "description": "Enjoy comfortable roundtrip transfers",
          "type": "INCLUSION_BASED"
        },
        {
          "code": "AUDIO_GUIDE",
          "name": "Multilingual Audio Guide",
          "displayName": "Audio guide",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/headphones.svg",
          "description": "Access to multilingual audio guide",
          "type": "INCLUSION_BASED"
        }
      ],
      "topReviews": [
        {
          "tourId": 69722,
          "bookingId": 29707739,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15077574,
          "nonCustomerName": "Anna Rita Melosu",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "ha sido una experiencia muy placentera el viaje fué bastante  entretenido  sobretodo gracias al guia Saul que estuvo muy pendiente  a nivel logistico  y  muy preparado!!!   ir a visitar sitios maravillosos como stonehenge  y Windsor  teniendo detalles historicos importante  permite apreciar aun mas  lo que vemos !!!",
          "reviewTime": 1769203424000,
          "reviewMedias": [
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/29707739/506b1763a57c3059c94e67a6dcc21e1e-374844efac46",
              "fileType": "IMAGE",
              "fileSize": 4578771,
              "width": null,
              "height": null,
              "fileName": "20260123_103129.jpg"
            }
          ],
          "translatedContent": "It was a very pleasant experience. The trip was quite entertaining, especially thanks to our guide Saul, who was very attentive to logistics and very knowledgeable! Visiting wonderful places like Stonehenge and Windsor and learning important historical details allows us to appreciate what we see even more!",
          "useTranslatedContent": true,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "ES",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "SOLO",
            "localisedLabel": "Solo"
          }
        },
        {
          "tourId": 56329,
          "bookingId": 29550972,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15058050,
          "nonCustomerName": "Jana Fabecic",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "really productively spent day, everything was great\nwe were informed correctly at every point of trip\nour guide was so nice",
          "reviewTime": 1768434889000,
          "reviewMedias": [
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/29550972/10921a18fc83c8d572db9991fa269ca4-66603df2127d",
              "fileType": "IMAGE",
              "fileSize": 2375236,
              "width": null,
              "height": null,
              "fileName": "IMG_3100.jpeg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/29550972/7a6d94e2e4d2c08706ac76d2b05467d3-f89fd9017eed",
              "fileType": "IMAGE",
              "fileSize": 3510486,
              "width": null,
              "height": null,
              "fileName": "IMG_3068.jpeg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/29550972/95fb53131db49ebd322315a3f404b53d-8d87e6a2b7e9",
              "fileType": "IMAGE",
              "fileSize": 1939775,
              "width": null,
              "height": null,
              "fileName": "IMG_3044.jpeg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/29550972/b20ef08c41382fff8498f66ebb971573-0b02cfd915e6",
              "fileType": "IMAGE",
              "fileSize": 2122664,
              "width": null,
              "height": null,
              "fileName": "IMG_3015.jpeg"
            }
          ],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "FAMILY",
            "localisedLabel": "Family"
          }
        },
        {
          "tourId": 69718,
          "bookingId": 29415305,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15051012,
          "nonCustomerName": "Eugenia pulido",
          "reviewerImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocJxzuCFFF_PmbtaRL0fQRNUjaS89cd1lkuRpfytXkGQ24mfRVLJ=s96-c",
          "rating": 5,
          "content": "I love it all the guide was funny , i want to tell You thats You have to be more accurate un the location of departure it was really confusing may be just saying that You have to enter the station we almost miss the tour",
          "reviewTime": 1768164827000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 56329,
          "bookingId": 28670585,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15006355,
          "nonCustomerName": "Joey Beken",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "I loved our tour guid she was absolutly amazing and brilliant. We got to learn so much of the history about these places with a lot of laughter in between. Everything was scheduled perfectly in the right order and so we had plenty of time and opportunities to go to the restroom and to have a snack or a drink. This was an amzing experience, thank you! I would definitly recomend!",
          "reviewTime": 1766795445000,
          "reviewMedias": [
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28670585/773786e8f0cf6bba98126fcf7c4f5554-a3f1582a1671",
              "fileType": "IMAGE",
              "fileSize": 5238064,
              "width": null,
              "height": null,
              "fileName": "IMG_6228.jpeg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28670585/5de727810070c10ea8e311d1ee9744ef-e7f31c54d52a",
              "fileType": "IMAGE",
              "fileSize": 4862274,
              "width": null,
              "height": null,
              "fileName": "IMG_6499.jpeg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28670585/68c0394406622c4cc2c78c1831369934-871a92019d06",
              "fileType": "IMAGE",
              "fileSize": 5097721,
              "width": null,
              "height": null,
              "fileName": "IMG_6484.jpeg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28670585/6e1b133b62554bbfd76df41d41e71d58-b80beae1c5e7",
              "fileType": "IMAGE",
              "fileSize": 5908098,
              "width": null,
              "height": null,
              "fileName": "IMG_6533.jpeg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28670585/c387eca9f77266e256bac945d1e38386-ae4174f8fb62",
              "fileType": "IMAGE",
              "fileSize": 2824235,
              "width": null,
              "height": null,
              "fileName": "IMG_6731.jpeg"
            }
          ],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "FAMILY",
            "localisedLabel": "Family"
          }
        },
        {
          "tourId": 17448,
          "bookingId": 29182366,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15009309,
          "nonCustomerName": "Holly Elliott",
          "reviewerImgUrl": null,
          "rating": 3,
          "content": "This tour is basically transportation and tickets. Our guide was very knowledgeable during the driving and when we arrived at Stonehenge and Windsor Castle, we were given our tickets and told what time to be back at the bus. Which is fine however we were at Stonehenge about an hour too long and that time should've been done at Windsor. Be aware of the driving is about an hour and a half or more between each venue.",
          "reviewTime": 1766922840000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "SOLO",
            "localisedLabel": "Solo"
          }
        }
      ],
      "cityDisplayName": "London",
      "microBrandsDescriptor": "",
      "listingDate": "2025-03-21",
      "experienceVideo": null,
      "experienceItineraryIds": [25],
      "reviewsDetails": {
        "reviewsCount": 1365,
        "ratingsCount": 1365,
        "averageRating": 4.6,
        "ratingsSplit": {
          "1": 15,
          "2": 6,
          "3": 10,
          "4": 427,
          "5": 907
        },
        "showRatings": true,
        "displayConfig": {
          "exposeRatings": true,
          "exposeSorting": true,
          "exposeFiltering": true,
          "exposeLoadMore": true
        },
        "reviewCountries": {
          "countries": [
            {
              "code": "US",
              "displayName": "United States"
            },
            {
              "code": "CA",
              "displayName": "Canada"
            },
            {
              "code": "IN",
              "displayName": "India"
            },
            {
              "code": "DE",
              "displayName": "Germany"
            },
            {
              "code": "BR",
              "displayName": "Brazil"
            },
            {
              "code": "IT",
              "displayName": "Italy"
            },
            {
              "code": "HU",
              "displayName": "Hungary"
            },
            {
              "code": "RO",
              "displayName": "Romania"
            },
            {
              "code": "AT",
              "displayName": "Austria"
            },
            {
              "code": "MX",
              "displayName": "Mexico"
            }
          ],
          "count": 23
        }
      },
      "tourGroupUrl": "/london-to-stonehenge-tours/windsor-castle-stonehenge-and-oxford-from-london-e-9641/",
      "minDuration": 39600000,
      "maxDuration": 43200000,
      "microBrandsHighlight": "###### Highlights\n\n**See the royal, prehistoric, and academic side of England with this full-day trip from London.**\r\n\r\n\n- **Day out to:** Oxford, Windsor, and Stonehenge with round-trip transportation in an AC coach from central London.\r\n- **You’ll get:** A guided tour of Oxford, Windsor Castle, and Stonehenge, with insights into the history, architecture, and significance of each attraction.\r\n- **Stonehenge & Windsor:** Observe the Stone Circle as you hear theories about its construction and purpose, and stroll along the Thames Promenade at Windsor.\r\n- **Oxford:** Explore the ‘City of Dreaming Spires’ and admire Oxford University, the oldest in the English-speaking world.\r\n- **Upgrades:** Choose to upgrade your tour to gain access to Windsor Castle and see the State Apartments and St. George’s Chapel.\n###### Need to know\n\n### **What’s not allowed**\n\n- Entry inside the Stonehenge Circle is not permitted, due to restoration efforts and the structure’s fragile condition. Your ticket grants access up to 10 meters from the monument.\r\n- Photography is not allowed inside Windsor Castle.\r\n- Large backpacks and pushchairs cannot be taken into the Windsor Castle State Apartments.\r\n- Pets are not permitted on this experience, with the exception of guide dogs.\r\n\n### **Accessibility**\n\n- This tour is partially accessible for wheelchairs and prams/strollers.\r\n- Guide dogs are welcome at the venue.\r\n\n### **Additional information**\n\n- Tours operate daily except December 24–26.\r\n- Windsor Castle is closed on Tuesdays and Wednesdays. On these days, tickets including entry are unavailable; instead, guests enjoy a walking tour of Windsor.\r\n- St. George’s Chapel at Windsor is closed on Sundays, and the State Apartments may occasionally be closed on other days.\r\n- Members of English Heritage and National Trust England receive free entry to Stonehenge."
    },
    {
      "id": 2926,
      "name": "From London: Stonehenge, Windsor Castle & Bath Full-Day Trip",
      "primaryCollection": {
        "id": 212,
        "name": "London To Stonehenge Tours",
        "displayName": "London To Stonehenge Tours"
      },
      "primaryCategory": {
        "id": 2,
        "name": "Tours",
        "rank": 2,
        "displayName": "Tours",
        "heading": "London Tours",
        "metaTitle": "Plan and Book Top-rated, Exclusive Tours in London | Headout",
        "metaDescription": "Book exclusive tours of museums, attractions, historical sites, and more in London. Get 10% additional cashback, flexible cancelation, and 24/7 support on each booking.",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/tours-london-ca-2~7426/",
          "ES": "/es/tours-london-ca-2~7426/",
          "FR": "/fr/visites-london-ca-2~7426/",
          "IT": "/it/tour-london-ca-2~7426/",
          "DE": "/de/touren-london-ca-2~7426/",
          "PT": "/pt/tours-london-ca-2~7426/",
          "NL": "/nl/tours-london-ca-2~7426/",
          "PL": "/pl/tours-london-ca-2~7426/",
          "KO": "/ko/tours-london-ca-2~7426/",
          "JA": "/ja/tours-london-ca-2~7426/",
          "ZH_HANS": "/zh-hans/tours-london-ca-2~7426/",
          "DA": "/da/ture-london-ca-2~7426/",
          "NO": "/no/turer-london-ca-2~7426/",
          "RO": "/ro/tururi-london-ca-2~7426/",
          "RU": "/ru/tours-london-ca-2~7426/",
          "SV": "/sv/rundturer-london-ca-2~7426/",
          "TR": "/tr/tours-london-ca-2~7426/"
        },
        "medias": [],
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": null
        },
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        }
      },
      "primarySubCategory": {
        "id": 1143,
        "name": "Day trips",
        "categoryId": 2,
        "rank": 19,
        "displayName": "Day Trips",
        "heading": "Day Trips From London",
        "metaTitle": "Day Trips from London | Visit Stonehenge, Bath, Warwick & More",
        "metaDescription": "Venture away from London and explore popular destinations such as Stonehenge, Canterbury, Oxford. Plan your day trip from London now!",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/day-trips-london-sc-1143~7426/",
          "ES": "/es/tours-de-un-dia-london-sc-1143~7426/",
          "FR": "/fr/excursions-dune-journee-london-sc-1143~7426/",
          "IT": "/it/day-trips-london-sc-1143~7426/",
          "DE": "/de/tagesausfluge-london-sc-1143~7426/",
          "PT": "/pt/excursoes-de-um-dia-london-sc-1143~7426/",
          "NL": "/nl/day-trips-london-sc-1143~7426/",
          "PL": "/pl/day-trips-london-sc-1143~7426/",
          "KO": "/ko/day-trips-london-sc-1143~7426/",
          "JA": "/ja/day-trips-london-sc-1143~7426/",
          "ZH_HANS": "/zh-hans/day-trips-london-sc-1143~7426/",
          "DA": "/da/day-trips-london-sc-1143~7426/",
          "NO": "/no/day-trips-london-sc-1143~7426/",
          "RO": "/ro/excursii-de-o-zi-london-sc-1143~7426/",
          "RU": "/ru/day-trips-london-sc-1143~7426/",
          "SV": "/sv/day-trips-london-sc-1143~7426/",
          "TR": "/tr/day-trips-london-sc-1143~7426/"
        },
        "medias": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/78e4cdec19e98dc1239e6ab76ca41b00-SubCategory-Day-Trips.jpg",
            "type": "IMAGE",
            "metadata": {
              "altText": "Tourists exploring a historic street with a guide pointing out landmarks.",
              "height": 1000,
              "width": 1600,
              "videoDuration": null,
              "uploadDate": "2023-09-01",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            },
            "info": {
              "sourceType": "SOURCED",
              "sourceUrl": "https://stock.adobe.com/in/images/tour-guide-in-sunglasses-pointing-with-hand-during-excursion-with-interracial-tourists-on-andrews-descent-in-kyiv/580769408",
              "credit": "LIGHTFIELD STUDIOS",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            }
          }
        ],
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        },
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": ""
        }
      },
      "listingAvailability": {
        "nextAvailableDate": {
          "date": "2026-02-19",
          "remaining": 194,
          "availability": "LIMITED"
        }
      },
      "ticketValidity": {
        "ticketValidityType": "NOT_EXTENDABLE",
        "ticketValidityUntilDate": null,
        "ticketValidityUntilDaysFromPurchase": null
      },
      "allTags": [
        "BATH",
        "BATH1",
        "ESCAPE",
        "SAFETY_CLEANED_EQUIPMENTS",
        "SAFETY_CONTACTLESS",
        "SAFETY_HANDWASH",
        "SAFETY_MASK_GUEST",
        "SAFETY_MASK_STAFF",
        "SAFETY_RESTRICTED_CAPACITY",
        "SAFETY_SOCIAL_DISTANCING",
        "SAFETY_TRAINED_STAFF",
        "SCHEDULE-360-DAYS",
        "STONEHENGE",
        "STONEHENGE5",
        "WINDSOR",
        "WINDSOR3",
        "WINDSORCASTLE",
        "WINDSORCASTLE3"
      ],
      "callToAction": "",
      "inclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EFull-day tour of Stonehenge, Windsor Castle, and Bath\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEntry to Stonehenge\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ERound-trip AC coach transfers\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EBoarding from central London\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ELive-guided walking tour of the town of Bath\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAudio guide in English, German, Spanish, French, Dutch, Italian, Ukrainian, Mandarin, Russian, Polish, Japanese, Korean, and Brazilian Portuguese at Stonehenge\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EExpert English, Spanish, Japanese, Portuguese, French, or Italian-speaking guide (as per option selected)\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEntry to Windsor Castle (as per option selected)\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEntry to the Roman Baths (as per option selected)\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "neighbourhood": null,
      "hidden": false,
      "flowType": "GUIDED_TOUR_PROPERTY_SELECTION",
      "startPoint": {
        "latitude": 51.4925003051758,
        "longitude": -0.148161500692368
      },
      "reviewCount": 4960,
      "cancellationPolicy": {
        "cancellable": true,
        "cancellableUpTo": 2280
      },
      "ratingCount": 4960,
      "showRatings": true,
      "media": {
        "productImages": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/26bfa607b1d788dafce8a860ad8e82bb-stonehenge.jpg",
            "altText": "Tourists walking around Stonehenge on a day trip from London.",
            "description": "Tourists walking around Stonehenge on a day trip from London.",
            "credit": "Lightning Strike Pro"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/399b5c63ea2f91fa113e2f1f3259ec33-2926-london-windsor-castle--bath---stonehenge-guided-tour-with-optional-entry-07.jpg",
            "altText": "Windsor Castle entrance with lush green lawns and historic architecture.",
            "description": "Windsor Castle entrance with lush green lawns and historic architecture.",
            "credit": "Golden Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/1ce4159465dfc838c447783ec7a15ad2-6274-london-stonehenge-entry-tickets-with-transfers-from-london-08.jpg",
            "altText": "Tourists using audio guides at the Roman Baths in Bath, part of a day trip from London.",
            "description": "Tourists using audio guides at the Roman Baths in Bath, part of a day trip from London.",
            "credit": "Golden Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/571ae4b6fabc4dd99ec5ca3f1fdbb5c5-stonehenge-03.jpg",
            "altText": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
            "description": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
            "credit": "Pawel Pajor"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/d101b22a872aad0fb5fd055e7193632f-3354-london-buckingham-palace-%26-windsor-castle-full-day-guided-tour-06.jpg",
            "altText": "Crimson Drawing Room with ornate gold decor and chandeliers, Windsor Castle.",
            "description": "Crimson Drawing Room with ornate gold decor and chandeliers, Windsor Castle.",
            "credit": "Royal Collection Trust / © His Majesty King Charles III 2024."
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/9ca638e35fc23ffe90029c4f8ce3e68d-9641-london-windsor-castle--oxford---stonehenge-tour-from-london-02.jpg",
            "altText": "St George’s Chapel exterior with blue sky and green lawn, Windsor Castle in background.",
            "description": "St George’s Chapel exterior with blue sky and green lawn, Windsor Castle in background.",
            "credit": "Evan Evans_API"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/fd1a9a5cf29480b23cd652fb15b472e7-2926-london-from-london--stonehenge--windsor-castle--bath---roman-baths-day-trip-05.jpg",
            "altText": "Windsor Castle stone exterior with lush greenery and blue sky.",
            "description": "Windsor Castle stone exterior with lush greenery and blue sky.",
            "credit": "Michael"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/5f8fd92f18f8c440a2948d31a7b6bec8-27283-london-private-viewing-of-stonehenge-with-bath---lacock-guided-tour-05.jpg",
            "altText": "Roman Baths in Bath with steam rising, part of a day trip from London including Stonehenge and Windsor Castle.",
            "description": "Roman Baths in Bath with steam rising, part of a day trip from London including Stonehenge and Windsor Castle.",
            "credit": "Premium Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/773815ff8cea67ba6331059eef7b7d3a-6274-london-stonehenge-entry-tickets-with-transfers-from-london-09.jpg",
            "altText": "Stonehenge with tourists exploring the ancient stone monument on a day trip from London.",
            "description": "Stonehenge with tourists exploring the ancient stone monument on a day trip from London.",
            "credit": "mrnai"
          }
        ],
        "safetyImages": [],
        "safetyVideos": []
      },
      "highlights": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EExperience three iconic UK treasures—Stonehenge, Windsor Castle, and Bath—in a seamless day trip with comfortable round-trip coach travel from London.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEnjoy expertly guided tours and hear fascinating historical context and insights at Stonehenge, Windsor Castle, and throughout the charming streets of Bath.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EMarvel at the awe-inspiring Stone Circle and then see the grandeur of Windsor Castle's Gothic architecture, including the iconic Round Tower, from outside.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EStroll through Bath, where you'll pass the historic Roman Baths, the Pulteney Bridge, and the Bath Abbey, and learn about the city’s Roman roots.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEnhance your journey with optional upgrades to explore the State Apartments and St. George’s Chapel at Windsor and the Roman Baths.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "imageUrl": "https://cdn-imgix.headout.com/media/images/26bfa607b1d788dafce8a860ad8e82bb-stonehenge.jpg",
      "listingPrice": {
        "currencyCode": "GBP",
        "originalPrice": 109,
        "finalPrice": 109,
        "minimumPayablePrice": 109,
        "type": "PER_PERSON",
        "otherPricesExist": true,
        "bestDiscount": 0,
        "cashbackValue": 0,
        "cashbackType": "PERCENTAGE",
        "tourId": 4524
      },
      "schedule": null,
      "averageRating": 4.3,
      "promotionLabel": "",
      "tourType": "TOUR",
      "shortSummary": "\u003Cp\u003EHead to Stonehenge, Windsor Castle, and Bath on a guided day trip from London with round-trip luxury coach transfers. See ancient stones, a royal castle, and Roman baths!\u003C/p\u003E",
      "reschedulePolicy": {
        "reschedulable": false,
        "reschedulableUpTo": null
      },
      "urlSlugs": {
        "EN": "/london-to-stonehenge-tours/stonehenge-bath-and-windsor-tour-from-london-e-2926/",
        "ES": "/es/tour-a-stonehenge-desde-londres/tour-a-stonehenge-bath-y-windsor-desde-londres-e-2926/",
        "FR": "/fr/escapades-londres-stonehenge/visite-guidee-du-chateau-de-windsor-de-bath-et-de-stonehenge-au-depart-de-londres-e-2926/",
        "IT": "/it/tour-da-londra-a-stonehenge/stonehenge-bath-and-windsor-tour-from-london-e-2926/",
        "DE": "/de/london-nach-stonehenge-touren/stonehenge-bath-und-windsor-tour-von-london-e-2926/",
        "PT": "/pt/tours-londres-a-stonehenge/tour-a-stonehenge-bath-e-windsor-tour-saindo-de-londres-e-2926/",
        "NL": "/nl/stonehenge-tours-vanuit-londen/windsor-castle-bath-stonehenge-rondleiding-vanuit-londen-e-2926/",
        "PL": "/pl/london-to-stonehenge-tours/stonehenge-bath-and-windsor-tour-from-london-e-2926/",
        "KO": "/ko/london-to-stonehenge-tours/stonehenge-bath-and-windsor-tour-from-london-e-2926/",
        "JA": "/ja/london-to-stonehenge-tours/stonehenge-bath-and-windsor-tour-from-london-e-2926/",
        "ZH_HANS": "/zh-hans/london-to-stonehenge-tours/stonehenge-bath-and-windsor-tour-from-london-e-2926/",
        "DA": "/da/ture-fra-london-til-stonehenge/fra-london-heldagstur-til-stonehenge-windsor-castle-og-bath-e-2926/",
        "NO": "/no/turer-fra-london-til-stonehenge/fra-london-heldagstur-til-stonehenge-windsor-castle-og-bath-e-2926/",
        "RO": "/ro/tururi-de-la-londra-la-stonehenge/din-londra-excursie-de-o-zi-la-stonehenge-castelul-windsor-si-bath-e-2926/",
        "RU": "/ru/london-to-stonehenge-tours/stonehenge-bath-and-windsor-tour-from-london-e-2926/",
        "SV": "/sv/turer-fran-london-till-stonehenge/fran-london-heldagsutflykt-till-stonehenge-windsor-castle-och-bath-e-2926/",
        "TR": "/tr/london-to-stonehenge-tours/stonehenge-bath-and-windsor-tour-from-london-e-2926/"
      },
      "distance": null,
      "exclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EHotel pick-up/drop-off\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ELunch\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "cityCode": "LONDON",
      "language": "EN",
      "validity": "",
      "combo": false,
      "multiVariant": true,
      "allVariantOpenDated": false,
      "descriptors": [
        {
          "code": "DURATION",
          "name": "Duration",
          "displayName": "Duration",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/clock.svg",
          "description": "11 hrs - 11 hrs 30 mins",
          "type": "STANDARD"
        },
        {
          "code": "FREE_CANCELLATION",
          "name": "Free Cancellation",
          "displayName": "Free cancellation",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/cancellation.svg",
          "description": "Free cancellation up to 38 hours before the start of your experience",
          "type": "STANDARD"
        },
        {
          "code": "BOOK_NOW_PAY_LATER",
          "name": "Book now, pay later",
          "displayName": "Book now, pay later",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/bnpl.svg",
          "description": "Book now without paying anything. Cancel for free if your plans change.",
          "type": "STANDARD"
        },
        {
          "code": "TRANSFERS",
          "name": "Transfers available",
          "displayName": "Transfers available",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/transfers.svg",
          "description": "Enjoy comfortable roundtrip transfers",
          "type": "INCLUSION_BASED"
        },
        {
          "code": "AUDIO_GUIDE",
          "name": "Multilingual Audio Guide",
          "displayName": "Audio guide",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/headphones.svg",
          "description": "Access to multilingual audio guide",
          "type": "INCLUSION_BASED"
        }
      ],
      "topReviews": [
        {
          "tourId": 69644,
          "bookingId": 28961805,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15100071,
          "nonCustomerName": "Jeanine Kenigstein",
          "reviewerImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocIXWfbefCZlhcfZ3PLdf6FXpts58Nn5kpAj8_A1Vfm13n4RCtbF=s96-c",
          "rating": 4,
          "content": "Es un tour ambicioso porque visitas 3 lugares en un mismo día. Eso te da la oportunidad de conocer mucho en poco tiempo, pero son visitas muy cortitas y uno se queda con ganas de mas. Además pasamos bastante rato arriba del bus por lo que hay que ir mentalmente preparado para eso. Los destinos son maravillosos, vale la pena!",
          "reviewTime": 1770070465000,
          "reviewMedias": [
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28961805/cd5f1326c2789ea7a6c5065137e9551a-5039f97de530",
              "fileType": "IMAGE",
              "fileSize": 6703167,
              "width": null,
              "height": null,
              "fileName": "IMG_4384.jpeg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28961805/586599818fb98f524b317f56e9822f9b-f09160fef3db",
              "fileType": "IMAGE",
              "fileSize": 3389022,
              "width": null,
              "height": null,
              "fileName": "IMG_4390.jpeg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28961805/c819217b691c89a211290e00e60cbf5c-1084dea95b59",
              "fileType": "IMAGE",
              "fileSize": 6552283,
              "width": null,
              "height": null,
              "fileName": "IMG_4413.jpeg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28961805/fb3e34b53f263dfeaf66e57aebf3684a-8a65c20d0061",
              "fileType": "IMAGE",
              "fileSize": 4944793,
              "width": null,
              "height": null,
              "fileName": "IMG_4447.jpeg"
            }
          ],
          "translatedContent": "It's an ambitious tour because you visit three places in one day. That gives you the opportunity to see a lot in a short time, but the visits are very short and you're left wanting more. We also spend quite a bit of time on the bus, so you have to be mentally prepared for that. The destinations are wonderful, it's worth it!",
          "useTranslatedContent": true,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "ES",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "FAMILY",
            "localisedLabel": "Family"
          }
        },
        {
          "tourId": 56359,
          "bookingId": 28293758,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15036629,
          "nonCustomerName": "Maria Celeste Mosqueira Bremer",
          "reviewerImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocKrOqzeBuMFTnBLJzjp79693Wbko__-eLw3LoaitY7ZWIqXjKWF=s96-c",
          "rating": 5,
          "content": "El itinerario del tour es muy bueno y nuestra guia Maria fue increible!",
          "reviewTime": 1767700867000,
          "reviewMedias": [
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28293758/289c4e795496a522c6678f412913d9af-666fb37bc6b2",
              "fileType": "IMAGE",
              "fileSize": 5363582,
              "width": null,
              "height": null,
              "fileName": "IMG_6298.jpeg"
            }
          ],
          "translatedContent": "The tour itinerary is excellent, and our guide Maria was incredible!",
          "useTranslatedContent": true,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "ES",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 56680,
          "bookingId": 27964063,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15024665,
          "nonCustomerName": "B Jay Mangulabnan",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Wonderful experience on all visited places ",
          "reviewTime": 1767490117000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 4524,
          "bookingId": 29191213,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15015949,
          "nonCustomerName": "Laurel K McQuay Peninger",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "As so many others have mentioned, this was a great way to see a lot in a short amount of time.  Our guide, Pablo, was great.  He shared lots of stories and bits of history.  ",
          "reviewTime": 1767135262000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "GROUP",
            "localisedLabel": "Group"
          }
        },
        {
          "tourId": 56680,
          "bookingId": 28597713,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14957430,
          "nonCustomerName": "Suzan Bekiroglu",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Everything was perfect but the weather, although that cannot be helped 😊\nOur guide kept us well informed about the history of the locations and also gave us recommendations for places to get food.\nOur driver was kind as well.\nA+",
          "reviewTime": 1763980054000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "SOLO",
            "localisedLabel": "Solo"
          }
        }
      ],
      "cityDisplayName": "London",
      "microBrandsDescriptor": "",
      "listingDate": "2025-03-25",
      "experienceVideo": null,
      "experienceItineraryIds": [24],
      "reviewsDetails": {
        "reviewsCount": 4960,
        "ratingsCount": 4960,
        "averageRating": 4.3,
        "ratingsSplit": {
          "1": 304,
          "2": 151,
          "3": 156,
          "4": 1329,
          "5": 3020
        },
        "showRatings": true,
        "displayConfig": {
          "exposeRatings": true,
          "exposeSorting": true,
          "exposeFiltering": true,
          "exposeLoadMore": true
        },
        "reviewCountries": {
          "countries": [
            {
              "code": "US",
              "displayName": "United States"
            },
            {
              "code": "IN",
              "displayName": "India"
            },
            {
              "code": "IT",
              "displayName": "Italy"
            },
            {
              "code": "MX",
              "displayName": "Mexico"
            },
            {
              "code": "FR",
              "displayName": "France"
            },
            {
              "code": "AU",
              "displayName": "Australia"
            },
            {
              "code": "SG",
              "displayName": "Singapore"
            },
            {
              "code": "CO",
              "displayName": "Colombia"
            },
            {
              "code": "HU",
              "displayName": "Hungary"
            },
            {
              "code": "RO",
              "displayName": "Romania"
            }
          ],
          "count": 22
        }
      },
      "tourGroupUrl": "/london-to-stonehenge-tours/stonehenge-bath-and-windsor-tour-from-london-e-2926/",
      "minDuration": 39600000,
      "maxDuration": 41400000,
      "microBrandsHighlight": "###### Highlights\n\n**Visit three historic sites in the UK in just one day with round-trip coach transfers from London.**\r\n\r\n\n- **Day out to:** Stonehenge, Windsor Castle, and Bath in a luxury AC coach from Central London, easily accessible by public transport.\r\n- **You’ll get:** A guided tour of Stonehenge, Windsor Castle, and the beautiful town of Bath with historical context, interesting facts, and insights on a structured tour.\r\n- **Stonehenge:** Witness the striking arrangement of sarsen and bluestones in the iconic Stone Circle, a prehistoric wonder steeped in mystery.\r\n- **Windsor Castle:** Stroll through the castle grounds and admire its magnificent Gothic architecture, while discovering its role as the world’s largest inhabited castle.\r\n- **Bath:** Walk past the Roman Baths, Pulteney Bridge, and the Bath Abbey on your visit to Bath and trace the city’s Roman roots and Georgian elegance.\r\n- **Upgrades:** Explore the State Apartments and St. George’s Chapel at Windsor Castle, and the preserved Roman Baths by upgrading your experience.\n###### Need to know\n\n### What's not allowed\n\n- Photography is strictly prohibited inside Windsor Castle.\r\n- Large backpacks and pushchairs are not permitted inside the Windsor Castle State Apartments.\r\n- Your pets are not permitted on this experience.\r\n\n### Accessibility\n\n- This experience is partially accessible to wheelchair and pram/stroller users.\r\n- For your convenience, your guide dogs are welcome to join you.\r\n\n### Additional information\n\n- You will not be allowed to enter the Stonehenge Circle itself. This is due to the restoration attempts and the relative instability of the structure. Your Stonehenge tickets allow you to access about 10 meters of the monument.\r\n- These tours run daily except from December 24 to 26.\r\n- Windsor Castle is closed on Tuesdays and Wednesdays. St. George’s Chapel at Windsor is closed to visitors on Sundays. On some days, the State Apartments may also be closed.\r\n- English Heritage and National Trust England members can enjoy free admission to Stonehenge."
    },
    {
      "id": 30436,
      "name": "From London: Stonehenge and Windsor Day Trip",
      "primaryCollection": {
        "id": 212,
        "name": "London To Stonehenge Tours",
        "displayName": "London To Stonehenge Tours"
      },
      "primaryCategory": {
        "id": 2,
        "name": "Tours",
        "rank": 2,
        "displayName": "Tours",
        "heading": "London Tours",
        "metaTitle": "Plan and Book Top-rated, Exclusive Tours in London | Headout",
        "metaDescription": "Book exclusive tours of museums, attractions, historical sites, and more in London. Get 10% additional cashback, flexible cancelation, and 24/7 support on each booking.",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/tours-london-ca-2~7426/",
          "ES": "/es/tours-london-ca-2~7426/",
          "FR": "/fr/visites-london-ca-2~7426/",
          "IT": "/it/tour-london-ca-2~7426/",
          "DE": "/de/touren-london-ca-2~7426/",
          "PT": "/pt/tours-london-ca-2~7426/",
          "NL": "/nl/tours-london-ca-2~7426/",
          "PL": "/pl/tours-london-ca-2~7426/",
          "KO": "/ko/tours-london-ca-2~7426/",
          "JA": "/ja/tours-london-ca-2~7426/",
          "ZH_HANS": "/zh-hans/tours-london-ca-2~7426/",
          "DA": "/da/ture-london-ca-2~7426/",
          "NO": "/no/turer-london-ca-2~7426/",
          "RO": "/ro/tururi-london-ca-2~7426/",
          "RU": "/ru/tours-london-ca-2~7426/",
          "SV": "/sv/rundturer-london-ca-2~7426/",
          "TR": "/tr/tours-london-ca-2~7426/"
        },
        "medias": [],
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": null
        },
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        }
      },
      "primarySubCategory": {
        "id": 1143,
        "name": "Day trips",
        "categoryId": 2,
        "rank": 19,
        "displayName": "Day Trips",
        "heading": "Day Trips From London",
        "metaTitle": "Day Trips from London | Visit Stonehenge, Bath, Warwick & More",
        "metaDescription": "Venture away from London and explore popular destinations such as Stonehenge, Canterbury, Oxford. Plan your day trip from London now!",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/day-trips-london-sc-1143~7426/",
          "ES": "/es/tours-de-un-dia-london-sc-1143~7426/",
          "FR": "/fr/excursions-dune-journee-london-sc-1143~7426/",
          "IT": "/it/day-trips-london-sc-1143~7426/",
          "DE": "/de/tagesausfluge-london-sc-1143~7426/",
          "PT": "/pt/excursoes-de-um-dia-london-sc-1143~7426/",
          "NL": "/nl/day-trips-london-sc-1143~7426/",
          "PL": "/pl/day-trips-london-sc-1143~7426/",
          "KO": "/ko/day-trips-london-sc-1143~7426/",
          "JA": "/ja/day-trips-london-sc-1143~7426/",
          "ZH_HANS": "/zh-hans/day-trips-london-sc-1143~7426/",
          "DA": "/da/day-trips-london-sc-1143~7426/",
          "NO": "/no/day-trips-london-sc-1143~7426/",
          "RO": "/ro/excursii-de-o-zi-london-sc-1143~7426/",
          "RU": "/ru/day-trips-london-sc-1143~7426/",
          "SV": "/sv/day-trips-london-sc-1143~7426/",
          "TR": "/tr/day-trips-london-sc-1143~7426/"
        },
        "medias": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/78e4cdec19e98dc1239e6ab76ca41b00-SubCategory-Day-Trips.jpg",
            "type": "IMAGE",
            "metadata": {
              "altText": "Tourists exploring a historic street with a guide pointing out landmarks.",
              "height": 1000,
              "width": 1600,
              "videoDuration": null,
              "uploadDate": "2023-09-01",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            },
            "info": {
              "sourceType": "SOURCED",
              "sourceUrl": "https://stock.adobe.com/in/images/tour-guide-in-sunglasses-pointing-with-hand-during-excursion-with-interracial-tourists-on-andrews-descent-in-kyiv/580769408",
              "credit": "LIGHTFIELD STUDIOS",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            }
          }
        ],
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        },
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": ""
        }
      },
      "listingAvailability": {
        "nextAvailableDate": {
          "date": "2026-02-19",
          "remaining": 129,
          "availability": "LIMITED"
        }
      },
      "ticketValidity": {
        "ticketValidityType": "NOT_EXTENDABLE",
        "ticketValidityUntilDate": null,
        "ticketValidityUntilDaysFromPurchase": null
      },
      "allTags": [],
      "callToAction": "",
      "inclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EFull-day tour of Stonehenge and Windsor\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEntry to Stonehenge\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EExpert English or Italian-speaking guide (as per option selected)\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ERound-trip AC coach transfers\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EBoarding from central London\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAudio guide in English, German, Spanish, French, Dutch, Italian, Ukrainian, Mandarin, Russian, Polish, Japanese, Korean, and Brazilian Portuguese at Stonehenge\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E\n\u003Cp\u003E\u003Cstrong\u003EAdditional paid upgrades:\u003C/strong\u003E\u003C/p\u003E\n\u003Cul\u003E\n\u003Cli\u003EEntry to Windsor Castle\u003C/li\u003E\n\u003C/ul\u003E",
      "neighbourhood": null,
      "hidden": false,
      "flowType": "PROPERTY_SELECTION",
      "startPoint": {
        "latitude": 51.4925003051758,
        "longitude": -0.148161500692368
      },
      "reviewCount": 23,
      "cancellationPolicy": {
        "cancellable": true,
        "cancellableUpTo": 1440
      },
      "ratingCount": 23,
      "showRatings": true,
      "media": {
        "productImages": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/d7728378ad77a26b1ea46a33f6e27b6c-6274-london-stonehenge-entry-tickets-with-transfers-from-london-01.jpg",
            "altText": "Visitor photographing Stonehenge with audio guide, Wiltshire, England.",
            "description": "Visitor photographing Stonehenge with audio guide, Wiltshire, England.",
            "credit": "davidebgm"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/399b5c63ea2f91fa113e2f1f3259ec33-2926-london-windsor-castle--bath---stonehenge-guided-tour-with-optional-entry-07.jpg",
            "altText": "Windsor Castle entrance with lush green lawns and historic architecture.",
            "description": "Windsor Castle entrance with lush green lawns and historic architecture.",
            "credit": "Golden Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/dc01fa09be843fad6f05188cb958378b-3354-london-buckingham-palace-%26-windsor-castle-full-day-guided-tour-05.jpg",
            "altText": "Round Tower at Windsor Castle surrounded by gardens, Windsor, England.",
            "description": "Round Tower at Windsor Castle surrounded by gardens, Windsor, England.",
            "credit": "Royal Collection Trust / © His Majesty King Charles III 2024."
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/3f0a49f58fe581c379f23034b2cfe5e0-30436-london-from-london--stonehenge-and-windsor-day-trip-01.jpg",
            "altText": "Windsor Castle interior with ornate chandeliers, tapestries, and gilded decor.",
            "description": "Windsor Castle interior with ornate chandeliers, tapestries, and gilded decor.",
            "credit": "Royal Collection Trust"
          },
          {
            "url": "https://cdn-imgix.headout.com/microbrands-content-image/image/ea593b46ecbf7f75b994d43b6fc5bac9-st-georges-chapel-windsor-castle.jpg",
            "altText": "Stained glass windows and ornate Gothic interior of St George's Chapel, Windsor Castle, England.",
            "description": "Stained glass windows and ornate Gothic interior of St George's Chapel, Windsor Castle, England.",
            "credit": "David Tato"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/0d6e0b98ea4641a64990567770461c8c-stonehenge-10.jpg",
            "altText": "Visitors walking among Stonehenge stones during exclusive tour from London.",
            "description": "Visitors walking among Stonehenge stones during exclusive tour from London.",
            "credit": "Premium Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/eaabff15a472074ab4d0d3419d52d14e-eton%20college%20windsor.jpg",
            "altText": "Windsor Castle exterior with green lawn, part of London day trip tour.",
            "description": "Windsor Castle exterior with green lawn, part of London day trip tour.",
            "credit": "Chris Lofty"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/7be827809b286328bee34031dd9d9835-9641-london-from-london--stonehenge--windsor-castle---oxford-day-trip-01.jpg",
            "altText": "Stonehenge at sunrise with clear sky in England, United Kingdom.",
            "description": "Stonehenge at sunrise with clear sky in England, United Kingdom.",
            "credit": "Pawel Pajor"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/610aa4e0d663f2ba24baea20b78a39f2-30436-london-from-london--stonehenge-and-windsor-day-trip-02.jpg",
            "altText": "Windsor Castle interior with ornate ceiling, red carpet, and historical busts.",
            "description": "Windsor Castle interior with ornate ceiling, red carpet, and historical busts.",
            "credit": "Royal Collection Trust"
          }
        ],
        "safetyImages": [],
        "safetyVideos": []
      },
      "highlights": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EExperience Windsor’s charm and Stonehenge’s mystery on a budget-friendly day trip from Central London with effortless round-trip travel.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EPerfect for first-time visitors, relax in an AC coach and let your guide uncover the mysteries and history of both Stonehenge and Windsor, or answer questions.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EWalk around the enigmatic Stone Circle and see over 250 ancient artifacts excavated from the site, from tools to jewelry, at the visitor center.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EWander Windsor’s picturesque streets and enjoy views of the Thames on the Thames Promenade, with Windsor Castle as your backdrop.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EElevate your experience with entry to Windsor Castle, and step into St George’s Chapel, the final resting place of royalty, including Queen Elizabeth II.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "imageUrl": "https://cdn-imgix.headout.com/media/images/d7728378ad77a26b1ea46a33f6e27b6c-6274-london-stonehenge-entry-tickets-with-transfers-from-london-01.jpg",
      "listingPrice": {
        "currencyCode": "GBP",
        "originalPrice": 105,
        "finalPrice": 105,
        "minimumPayablePrice": 105,
        "type": "PER_PERSON",
        "otherPricesExist": true,
        "bestDiscount": 0,
        "cashbackValue": 0,
        "cashbackType": "PERCENTAGE",
        "tourId": 69617
      },
      "schedule": null,
      "averageRating": 4.4,
      "promotionLabel": "",
      "tourType": "TOUR",
      "shortSummary": "",
      "reschedulePolicy": {
        "reschedulable": false,
        "reschedulableUpTo": null
      },
      "urlSlugs": {
        "EN": "/london-to-stonehenge-tours/from-london-stonehenge-and-windsor-day-trip-e-30436/",
        "ES": "/es/tour-a-stonehenge-desde-londres/desde-londres-excursion-de-un-dia-a-stonehenge-y-windsor-e-30436/",
        "FR": "/fr/escapades-londres-stonehenge/depuis-londres-excursion-dune-journee-a-stonehenge-et-windsor-e-30436/",
        "IT": "/it/tour-da-londra-a-stonehenge/da-londra-gita-di-un-giorno-a-stonehenge-e-windsor-e-30436/",
        "DE": "/de/london-nach-stonehenge-touren/von-london-aus-stonehenge-und-windsor-tagesausflug-e-30436/",
        "PT": "/pt/tours-londres-a-stonehenge/de-londres-viagem-de-um-dia-a-stonehenge-e-windsor-e-30436/",
        "NL": "/nl/stonehenge-tours-vanuit-londen/vanuit-londen-dagtocht-naar-stonehenge-en-windsor-e-30436/",
        "PL": "/pl/london-to-stonehenge-tours/from-london-stonehenge-and-windsor-day-trip-e-30436/",
        "KO": "/ko/london-to-stonehenge-tours/from-london-stonehenge-and-windsor-day-trip-e-30436/",
        "JA": "/ja/london-to-stonehenge-tours/from-london-stonehenge-and-windsor-day-trip-e-30436/",
        "ZH_HANS": "/zh-hans/london-to-stonehenge-tours/from-london-stonehenge-and-windsor-day-trip-e-30436/",
        "DA": "/da/ture-fra-london-til-stonehenge/fra-london-stonehenge-og-windsor-dagsudflugt-e-30436/",
        "NO": "/no/turer-fra-london-til-stonehenge/fra-london-dagstur-til-stonehenge-og-windsor-e-30436/",
        "RO": "/ro/tururi-de-la-londra-la-stonehenge/de-la-londra-excursie-de-o-zi-la-stonehenge-si-windsor-e-30436/",
        "RU": "/ru/london-to-stonehenge-tours/from-london-stonehenge-and-windsor-day-trip-e-30436/",
        "SV": "/sv/turer-fran-london-till-stonehenge/fran-london-dagsutflykt-till-stonehenge-och-windsor-e-30436/",
        "TR": "/tr/london-to-stonehenge-tours/from-london-stonehenge-and-windsor-day-trip-e-30436/"
      },
      "distance": null,
      "exclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EHotel pick-up/drop-off\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ELunch\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "cityCode": "LONDON",
      "language": "EN",
      "validity": null,
      "combo": false,
      "multiVariant": true,
      "allVariantOpenDated": false,
      "descriptors": [
        {
          "code": "DURATION",
          "name": "Duration",
          "displayName": "Duration",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/clock.svg",
          "description": "9 hrs - 10 hrs 30 mins",
          "type": "STANDARD"
        },
        {
          "code": "FREE_CANCELLATION",
          "name": "Free Cancellation",
          "displayName": "Free cancellation",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/cancellation.svg",
          "description": "Free cancellation up to 24 hours before the start of your experience",
          "type": "STANDARD"
        },
        {
          "code": "BOOK_NOW_PAY_LATER",
          "name": "Book now, pay later",
          "displayName": "Book now, pay later",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/bnpl.svg",
          "description": "Book now without paying anything. Cancel for free if your plans change.",
          "type": "STANDARD"
        },
        {
          "code": "TRANSFERS",
          "name": "Transfers available",
          "displayName": "Transfers available",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/transfers.svg",
          "description": "Enjoy comfortable roundtrip transfers",
          "type": "INCLUSION_BASED"
        },
        {
          "code": "AUDIO_GUIDE",
          "name": "Multilingual Audio Guide",
          "displayName": "Audio guide",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/headphones.svg",
          "description": "Access to multilingual audio guide",
          "type": "INCLUSION_BASED"
        }
      ],
      "topReviews": [
        {
          "tourId": 63618,
          "bookingId": 26936482,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14909142,
          "nonCustomerName": "Rehn Kovacic",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Being with the stones were magical ",
          "reviewTime": 1762205035000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 63618,
          "bookingId": 25939499,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14626814,
          "nonCustomerName": "Evelyne Silvia Inda",
          "reviewerImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocL6yaBobtPlZHLtRDN2VPjZzsx1eJuA9SCIbDDHgQS50SVrtuEN=s96-c",
          "rating": 4,
          "content": "The tour guide was nice and friendly.",
          "reviewTime": 1757798460000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 63618,
          "bookingId": 25263895,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14459154,
          "nonCustomerName": "DOUGLAS CRAWFORD",
          "reviewerImgUrl": null,
          "rating": 3,
          "content": "Seeing Stonehenge and Windsor Castle. \nThe Leslie our guide did a great job and is very knowledgeable presenting the information very well.\nJody drove safely.\nUnfortunately,  the trip was too compressed so we had to rush through many areas. I would have liked an extra hour at both Stonehenge and Windsor Castle and gotten home two hours later.",
          "reviewTime": 1752394799000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "FAMILY",
            "localisedLabel": "Family"
          }
        },
        {
          "tourId": 63618,
          "bookingId": 25542300,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14470986,
          "nonCustomerName": "Pamela B Purtell",
          "reviewerImgUrl": null,
          "rating": 4,
          "content": "The history while traveling was awesome.  Very friendly and helpful.   Definitely not enough time at each stop though.  I would have liked to just doing Stonehenge and the caves with more time.  ",
          "reviewTime": 1752922720000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "FAMILY",
            "localisedLabel": "Family"
          }
        },
        {
          "tourId": 63618,
          "bookingId": 25591399,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14433902,
          "nonCustomerName": "Alyssa Tate",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Tour guides were amazing, had lots of time at both attractions. Loved this tour! ",
          "reviewTime": 1751437771000,
          "reviewMedias": [
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/25591399/4bd6e60ef49a09791444b0decd0212e6-30ec9df0da5b",
              "fileType": "IMAGE",
              "fileSize": 4618373,
              "width": null,
              "height": null,
              "fileName": "IMG_4347.jpeg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/25591399/957bf8a56cf09e51e83c6456c2623f9a-cc9d467823fb",
              "fileType": "IMAGE",
              "fileSize": 2718872,
              "width": null,
              "height": null,
              "fileName": "IMG_4356.jpeg"
            }
          ],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        }
      ],
      "cityDisplayName": "London",
      "microBrandsDescriptor": "",
      "listingDate": "2025-03-27",
      "experienceVideo": null,
      "experienceItineraryIds": [397],
      "reviewsDetails": {
        "reviewsCount": 23,
        "ratingsCount": 23,
        "averageRating": 4.4,
        "ratingsSplit": {
          "1": 1,
          "2": 0,
          "3": 3,
          "4": 4,
          "5": 15
        },
        "showRatings": true,
        "displayConfig": {
          "exposeRatings": true,
          "exposeSorting": true,
          "exposeFiltering": true,
          "exposeLoadMore": true
        },
        "reviewCountries": {
          "countries": [
            {
              "code": "US",
              "displayName": "United States"
            },
            {
              "code": "CA",
              "displayName": "Canada"
            },
            {
              "code": "RO",
              "displayName": "Romania"
            },
            {
              "code": "DK",
              "displayName": "Denmark"
            },
            {
              "code": "TR",
              "displayName": "Turkey"
            },
            {
              "code": "IN",
              "displayName": "India"
            },
            {
              "code": "MX",
              "displayName": "Mexico"
            }
          ],
          "count": 8
        }
      },
      "tourGroupUrl": "/london-to-stonehenge-tours/from-london-stonehenge-and-windsor-day-trip-e-30436/",
      "minDuration": 32400000,
      "maxDuration": 37800000,
      "microBrandsHighlight": "###### Highlights\n\n**Perfect for budget travelers, see the best of Windsor and Stonehenge without breaking the bank.**\r\n\r\n\n- **Day out to** the historic town of Windsor and the UNESCO World Heritage Site of Stonehenge on a guided day trip from London with round-trip transportation.\r\n- **You’ll get** round-trip transfers in an AC coach and a knowledgeable guide who will share historical and architectural insights and answer your questions.\r\n- **Stonehenge:** Learn about the history and the myths around Stonehenge, and see the reconstruction of a man’s face who lived on the site thousands of years ago.\r\n- **Windsor:** Explore the charming town of Windsor, stroll along the River Thames, and picnic at the Windsor Great Park, all with spectacular views of Windsor Castle.\r\n- **Upgrades:** Upgrade for Windsor Castle entry and walk through the State Apartments of the largest occupied castle, adorned with art by Rembrandt and Rubens.\n###### Need to know\n\n- You will not be allowed to enter the Stonehenge Circle itself. This is due to the restoration attempts and the relative instability of the structure. Your Stonehenge tickets allow you to access about 10 meters of the monument.\r\n- These tours run daily except from December 25.\r\n- Windsor Castle is closed on Tuesdays and Wednesdays. Tours with entry to Windsor Castle are unavailable on these days. Instead, you can go on a walking tour of Windsor.\r\n- St. George’s Chapel at Windsor is closed to visitors on Sundays. On some days, the State Apartments may also be closed.\r\n- English Heritage and National Trust England members can enjoy free admission to Stonehenge.\r\n- Photography is strictly prohibited inside Windsor Castle.\r\n- Large backpacks and pushchairs are not permitted inside the Windsor Castle State Apartments.\r\n- Your pets are not permitted on this experience.\r\n- ​​This experience is partially accessible to wheelchair and pram/stroller users.\r\n- For your convenience, your guide dogs are welcome to join you."
    },
    {
      "id": 27283,
      "name": "From London: Exclusive Entry to Stonehenge Inner Circle & Windsor Tour",
      "primaryCollection": {
        "id": 212,
        "name": "London To Stonehenge Tours",
        "displayName": "London To Stonehenge Tours"
      },
      "primaryCategory": {
        "id": 2,
        "name": "Tours",
        "rank": 2,
        "displayName": "Tours",
        "heading": "London Tours",
        "metaTitle": "Plan and Book Top-rated, Exclusive Tours in London | Headout",
        "metaDescription": "Book exclusive tours of museums, attractions, historical sites, and more in London. Get 10% additional cashback, flexible cancelation, and 24/7 support on each booking.",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/tours-london-ca-2~7426/",
          "ES": "/es/tours-london-ca-2~7426/",
          "FR": "/fr/visites-london-ca-2~7426/",
          "IT": "/it/tour-london-ca-2~7426/",
          "DE": "/de/touren-london-ca-2~7426/",
          "PT": "/pt/tours-london-ca-2~7426/",
          "NL": "/nl/tours-london-ca-2~7426/",
          "PL": "/pl/tours-london-ca-2~7426/",
          "KO": "/ko/tours-london-ca-2~7426/",
          "JA": "/ja/tours-london-ca-2~7426/",
          "ZH_HANS": "/zh-hans/tours-london-ca-2~7426/",
          "DA": "/da/ture-london-ca-2~7426/",
          "NO": "/no/turer-london-ca-2~7426/",
          "RO": "/ro/tururi-london-ca-2~7426/",
          "RU": "/ru/tours-london-ca-2~7426/",
          "SV": "/sv/rundturer-london-ca-2~7426/",
          "TR": "/tr/tours-london-ca-2~7426/"
        },
        "medias": [],
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": null
        },
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        }
      },
      "primarySubCategory": {
        "id": 1143,
        "name": "Day trips",
        "categoryId": 2,
        "rank": 19,
        "displayName": "Day Trips",
        "heading": "Day Trips From London",
        "metaTitle": "Day Trips from London | Visit Stonehenge, Bath, Warwick & More",
        "metaDescription": "Venture away from London and explore popular destinations such as Stonehenge, Canterbury, Oxford. Plan your day trip from London now!",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/day-trips-london-sc-1143~7426/",
          "ES": "/es/tours-de-un-dia-london-sc-1143~7426/",
          "FR": "/fr/excursions-dune-journee-london-sc-1143~7426/",
          "IT": "/it/day-trips-london-sc-1143~7426/",
          "DE": "/de/tagesausfluge-london-sc-1143~7426/",
          "PT": "/pt/excursoes-de-um-dia-london-sc-1143~7426/",
          "NL": "/nl/day-trips-london-sc-1143~7426/",
          "PL": "/pl/day-trips-london-sc-1143~7426/",
          "KO": "/ko/day-trips-london-sc-1143~7426/",
          "JA": "/ja/day-trips-london-sc-1143~7426/",
          "ZH_HANS": "/zh-hans/day-trips-london-sc-1143~7426/",
          "DA": "/da/day-trips-london-sc-1143~7426/",
          "NO": "/no/day-trips-london-sc-1143~7426/",
          "RO": "/ro/excursii-de-o-zi-london-sc-1143~7426/",
          "RU": "/ru/day-trips-london-sc-1143~7426/",
          "SV": "/sv/day-trips-london-sc-1143~7426/",
          "TR": "/tr/day-trips-london-sc-1143~7426/"
        },
        "medias": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/78e4cdec19e98dc1239e6ab76ca41b00-SubCategory-Day-Trips.jpg",
            "type": "IMAGE",
            "metadata": {
              "altText": "Tourists exploring a historic street with a guide pointing out landmarks.",
              "height": 1000,
              "width": 1600,
              "videoDuration": null,
              "uploadDate": "2023-09-01",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            },
            "info": {
              "sourceType": "SOURCED",
              "sourceUrl": "https://stock.adobe.com/in/images/tour-guide-in-sunglasses-pointing-with-hand-during-excursion-with-interracial-tourists-on-andrews-descent-in-kyiv/580769408",
              "credit": "LIGHTFIELD STUDIOS",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            }
          }
        ],
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        },
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": ""
        }
      },
      "listingAvailability": {
        "nextAvailableDate": {
          "date": "2026-02-23",
          "remaining": 9,
          "availability": "LIMITED"
        }
      },
      "ticketValidity": {
        "ticketValidityType": "NOT_EXTENDABLE",
        "ticketValidityUntilDate": null,
        "ticketValidityUntilDaysFromPurchase": null
      },
      "allTags": [],
      "callToAction": "",
      "inclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EFull-day tour of Stonehenge and Windsor\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAccess to the Stonehenge Inner Circle\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEntry tickets to Stonehenge\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EExpert English-speaking guide\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ERound-trip AC coach transfers\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EBoarding from central London\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EWalking tour of Windsor (as per option selected)\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAudio guide in English, German, Spanish, French, Dutch, Italian, Ukrainian, Mandarin, Russian, Polish, Japanese, Korean, and Brazilian Portuguese at Stonehenge\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E\n\u003Cp\u003E\u003Cstrong\u003EAdditional paid upgrades:\u003C/strong\u003E\u003C/p\u003E\n\u003Cul\u003E\n\u003Cli\u003EEntry tickets to Windsor Castle\u003C/li\u003E\n\u003C/ul\u003E",
      "neighbourhood": null,
      "hidden": false,
      "flowType": "NORMAL",
      "startPoint": {
        "latitude": 51.5072174072266,
        "longitude": -0.127586200833321
      },
      "reviewCount": 6,
      "cancellationPolicy": {
        "cancellable": true,
        "cancellableUpTo": 4320
      },
      "ratingCount": 6,
      "showRatings": false,
      "media": {
        "productImages": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/0d6e0b98ea4641a64990567770461c8c-stonehenge-10.jpg",
            "altText": "Visitors walking among Stonehenge stones during exclusive tour from London.",
            "description": "Visitors walking among Stonehenge stones during exclusive tour from London.",
            "credit": "Premium Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/145014a0c7ae83cf20054b958f5bb587-2926-london-from-london--stonehenge--windsor-castle--bath---roman-baths-day-trip-.jpg",
            "altText": "Tourists walking towards Windsor Castle through a tree-lined path on a day trip from London.",
            "description": "Tourists walking towards Windsor Castle through a tree-lined path on a day trip from London.",
            "credit": "Simon Hurry"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/0599179fe46a440bcd60cfd5de412cb3-stonehenge-08.jpg",
            "altText": "Pulteney Bridge over River Avon in Bath, England, with cascading weir in foreground.",
            "description": "Pulteney Bridge over River Avon in Bath, England, with cascading weir in foreground.",
            "credit": "Scott Bufkin"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/fb4e9add98181f6c8d52afdbd1194105-27283-london-private-viewing-of-stonehenge-with-bath---lacock-guided-tour-02.jpg",
            "altText": "Visitors walking among Stonehenge stones under a blue sky in Wiltshire, England.",
            "description": "Visitors walking among Stonehenge stones under a blue sky in Wiltshire, England.",
            "credit": "Premium Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/631c03f64efcdb921e823f1330fbff10-9641-london-from-london--stonehenge--windsor-castle---oxford-day-trip-08.jpg",
            "altText": "Mother and child visiting Stonehenge, England.",
            "description": "Mother and child visiting Stonehenge, England.",
            "credit": "Evan Evans_API"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/8146f90a1555f1cefc3e6964df035203-9641-london-from-london--stonehenge--windsor-castle---oxford-day-trip-04.jpg",
            "altText": "Windsor Castle exterior with lush green lawns and a pathway leading to the entrance.",
            "description": "Windsor Castle exterior with lush green lawns and a pathway leading to the entrance.",
            "credit": "Golden Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/610aa4e0d663f2ba24baea20b78a39f2-30436-london-from-london--stonehenge-and-windsor-day-trip-02.jpg",
            "altText": "Windsor Castle interior with ornate ceiling, red carpet, and historical busts.",
            "description": "Windsor Castle interior with ornate ceiling, red carpet, and historical busts.",
            "credit": "Royal Collection Trust"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/d05ce962a14e859f3a6c89cdd96f7871-stonehenge.jpg",
            "altText": "Stonehenge stones at sunrise during a full-day tour from London.",
            "description": "Stonehenge stones at sunrise during a full-day tour from London.",
            "credit": "Anderson Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/4278265348745517d5640001b7f63f14-6269-salisbury-stonehenge-entry-tickets-06.jpg",
            "altText": "Historic Cotswold stone houses in a quaint English village near Stonehenge.",
            "description": "Historic Cotswold stone houses in a quaint English village near Stonehenge.",
            "credit": "cpphotoimages"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/26bfa607b1d788dafce8a860ad8e82bb-stonehenge.jpg",
            "altText": "Tourists walking around Stonehenge on a day trip from London.",
            "description": "Tourists walking around Stonehenge on a day trip from London.",
            "credit": "Lightning Strike Pro"
          }
        ],
        "safetyImages": [],
        "safetyVideos": []
      },
      "highlights": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EJourney to Windsor and Stonehenge and step inside the Inner Circle for an exclusive, crowd-free exploration, with comfortable London transfers in an AC coach.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EExperience the magic of Stonehenge's Inner Circle outside regular hours, enjoying a limited, close-up encounter—with even a chance to touch the ancient stones!\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EStand in awe beside Stonehenge's towering sarsens and bluestones, free from the usual ropes, and then see over 250 ancient artifacts at the visitor center.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EDiscover Windsor's royal charm on a guided walking tour, strolling past quaint tea rooms and shops while learning its fascinating history as a home to British royalty.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EUpgrade your journey with Windsor Castle entry, and explore the State Apartments and St. George’s Chapel, instead of the walking tour of Windsor.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "imageUrl": "https://cdn-imgix.headout.com/media/images/0d6e0b98ea4641a64990567770461c8c-stonehenge-10.jpg",
      "listingPrice": {
        "currencyCode": "GBP",
        "originalPrice": 169,
        "finalPrice": 169,
        "minimumPayablePrice": 169,
        "type": "PER_PERSON",
        "otherPricesExist": true,
        "bestDiscount": 0,
        "cashbackValue": 0,
        "cashbackType": "PERCENTAGE",
        "tourId": 56153
      },
      "schedule": null,
      "averageRating": 5,
      "promotionLabel": "",
      "tourType": "TOUR",
      "shortSummary": "",
      "reschedulePolicy": {
        "reschedulable": false,
        "reschedulableUpTo": null
      },
      "urlSlugs": {
        "EN": "/london-to-stonehenge-tours/private-viewing-of-stonehenge-with-bath-and-lacock-guided-tour-e-27283/",
        "ES": "/es/tour-a-stonehenge-desde-londres/visita-privada-a-stonehenge-con-tour-guiado-por-bath-y-lacock-e-27283/",
        "FR": "/fr/escapades-londres-stonehenge/visite-privee-de-stonehenge-avec-visite-guidee-de-bath-et-lacock-e-27283/",
        "IT": "/it/tour-da-londra-a-stonehenge/visita-privata-di-stonehenge-con-tour-guidato-di-bath-e-lacock-e-27283/",
        "DE": "/de/london-nach-stonehenge-touren/private-besichtigung-von-stonehenge-mit-bath-lacock-gefuhrte-tour-e-27283/",
        "PT": "/pt/tours-londres-a-stonehenge/visita-privada-a-stonehenge-com-tour-guiado-por-bath-e-lacock-e-27283/",
        "NL": "/nl/stonehenge-tours-vanuit-londen/prive-bezichtiging-van-stonehenge-met-rondleiding-in-bath-lacock-e-27283/",
        "PL": "/pl/london-to-stonehenge-tours/private-viewing-of-stonehenge-with-bath-and-lacock-guided-tour-e-27283/",
        "KO": "/ko/london-to-stonehenge-tours/private-viewing-of-stonehenge-with-bath-and-lacock-guided-tour-e-27283/",
        "JA": "/ja/london-to-stonehenge-tours/private-viewing-of-stonehenge-with-bath-and-lacock-guided-tour-e-27283/",
        "ZH_HANS": "/zh-hans/london-to-stonehenge-tours/private-viewing-of-stonehenge-with-bath-and-lacock-guided-tour-e-27283/",
        "DA": "/da/ture-fra-london-til-stonehenge/fra-london-eksklusiv-indgang-til-stonehenge-inner-circle-windsor-tour-e-27283/",
        "NO": "/no/turer-fra-london-til-stonehenge/fra-london-eksklusiv-inngang-til-stonehenge-inner-circle-tur-til-windsor-e-27283/",
        "RO": "/ro/tururi-de-la-londra-la-stonehenge/din-londra-acces-exclusiv-la-stonehenge-inner-circle-si-turul-windsor-e-27283/",
        "RU": "/ru/london-to-stonehenge-tours/private-viewing-of-stonehenge-with-bath-and-lacock-guided-tour-e-27283/",
        "SV": "/sv/turer-fran-london-till-stonehenge/fran-london-exklusiv-entre-till-stonehenge-inner-circle-windsor-tour-e-27283/",
        "TR": "/tr/london-to-stonehenge-tours/private-viewing-of-stonehenge-with-bath-and-lacock-guided-tour-e-27283/"
      },
      "distance": null,
      "exclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EHotel pick-up/drop-off\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ELunch\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "cityCode": "LONDON",
      "language": "EN",
      "validity": null,
      "combo": false,
      "multiVariant": true,
      "allVariantOpenDated": false,
      "descriptors": [
        {
          "code": "DURATION",
          "name": "Duration",
          "displayName": "Duration",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/clock.svg",
          "description": "11 hrs",
          "type": "STANDARD"
        },
        {
          "code": "FREE_CANCELLATION",
          "name": "Free Cancellation",
          "displayName": "Free cancellation",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/cancellation.svg",
          "description": "Free cancellation up to 3 days before the start of your experience",
          "type": "STANDARD"
        },
        {
          "code": "BOOK_NOW_PAY_LATER",
          "name": "Book now, pay later",
          "displayName": "Book now, pay later",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/bnpl.svg",
          "description": "Book now without paying anything. Cancel for free if your plans change.",
          "type": "STANDARD"
        },
        {
          "code": "TRANSFERS",
          "name": "Transfers available",
          "displayName": "Transfers available",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/transfers.svg",
          "description": "Enjoy comfortable roundtrip transfers",
          "type": "INCLUSION_BASED"
        },
        {
          "code": "AUDIO_GUIDE",
          "name": "Multilingual Audio Guide",
          "displayName": "Audio guide",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/headphones.svg",
          "description": "Access to multilingual audio guide",
          "type": "INCLUSION_BASED"
        }
      ],
      "topReviews": [
        {
          "tourId": 57256,
          "bookingId": 27063219,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14643122,
          "nonCustomerName": "Kamilla Yoshida Queiroz",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": null,
          "reviewTime": 1758625397000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "SOLO",
            "localisedLabel": "Solo"
          }
        },
        {
          "tourId": 57256,
          "bookingId": 23614163,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14392187,
          "nonCustomerName": "Nathan Lewis",
          "reviewerImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocLhiQHMDZ7POABaWIEYf3uc6w8bv79oHGUJXJDqyuIEYG5f7S0=s96-c",
          "rating": 5,
          "content": null,
          "reviewTime": 1748768284000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 57256,
          "bookingId": 23590359,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14332662,
          "nonCustomerName": "Chenhsiu Hou",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": null,
          "reviewTime": 1745879968000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "FAMILY",
            "localisedLabel": "Family"
          }
        },
        {
          "tourId": 57256,
          "bookingId": 23606760,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14161150,
          "nonCustomerName": "Larry Gittleson",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": null,
          "reviewTime": 1742410659000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "SOLO",
            "localisedLabel": "Solo"
          }
        },
        {
          "tourId": 56153,
          "bookingId": 18680927,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 13197649,
          "nonCustomerName": "Matthew Allan Loveland",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Our tour guide, Simon, was outstanding!!!",
          "reviewTime": 1722683964000,
          "reviewMedias": [
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/18680927/35f8eb836d36d6917fb9ab1ebe169c03-a4cc3c197dfe",
              "fileType": "IMAGE",
              "fileSize": 3589494,
              "width": null,
              "height": null,
              "fileName": "IMG_4887.jpeg"
            }
          ],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "GROUP",
            "localisedLabel": "Group"
          }
        }
      ],
      "cityDisplayName": "London",
      "microBrandsDescriptor": "",
      "listingDate": "2024-05-09",
      "experienceVideo": null,
      "experienceItineraryIds": [132],
      "reviewsDetails": {
        "reviewsCount": 6,
        "ratingsCount": 6,
        "averageRating": 5,
        "ratingsSplit": {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 6
        },
        "showRatings": false,
        "displayConfig": {
          "exposeRatings": false,
          "exposeSorting": true,
          "exposeFiltering": true,
          "exposeLoadMore": true
        },
        "reviewCountries": {
          "countries": [
            {
              "code": "BR",
              "displayName": "Brazil"
            },
            {
              "code": "AU",
              "displayName": "Australia"
            },
            {
              "code": "TW",
              "displayName": "Taiwan"
            },
            {
              "code": "US",
              "displayName": "United States"
            }
          ],
          "count": 4
        }
      },
      "tourGroupUrl": "/london-to-stonehenge-tours/private-viewing-of-stonehenge-with-bath-and-lacock-guided-tour-e-27283/",
      "minDuration": 39600000,
      "maxDuration": 39600000,
      "microBrandsHighlight": "###### Highlights\n\n**Get a rare, intimate experience with exclusive access to the Inner Circle at Stonehenge.**\r\n\r\n\n- **Day out to** Windsor and Stonehenge with exclusive access to the Inner Circle, and round-trip AC coach transfers from Central London.\r\n- **You’ll get** exclusive, close-up interaction with the Inner Circle outside regular visiting hours among limited people, with a chance to even touch the Neolithic stones!\r\n- **Stonehenge:** Stand beside the 30-foot-tall sarsens and bluestones inside the Inner Circle, unhindered by the rope that holds off other visitors for an unobstructed view.\r\n- **Windsor:** Explore the town of Windsor on a guided walking tour and stroll past its quaint tea rooms and shops as your guide talks about its royal history.\r\n- **Upgrades:** Skip the walking tour and upgrade to enter Windsor Castle, and admire the State Apartments and St. George’s Chapel, the site for royal weddings and burials.\n###### Need to know\n\n- The early access tours run on select Saturdays, while the late access tours are available on select Mondays and Saturdays.\r\n- Early tours visit Stonehenge first, followed by Windsor, while late tours visit Windsor first, followed by Stonehenge.\r\n- If you choose the Windsor Castle option, you will not be able to join the walking tour of Windsor.\r\n- Windsor Castle is closed on Tuesdays and Wednesdays. Tours with entry to Windsor Castle are unavailable on these days. Instead, you can go on a walking tour of Windsor.\r\n- St. George’s Chapel at Windsor is closed to visitors on Sundays. On some days, the State Apartments may also be closed.\r\n- English Heritage and National Trust England members can enjoy free admission to Stonehenge.\r\n- ​​This experience is partially accessible to wheelchair and pram/stroller users.\r\n- For your convenience, your guide dogs are welcome to join you.\r\n- Photography is strictly prohibited inside Windsor Castle.\r\n- Large backpacks and pushchairs are not permitted inside the Windsor Castle State Apartments.\r\n- Your pets are not permitted on this experience."
    },
    {
      "id": 10675,
      "name": "From London: Stonehenge and Bath Day Trip",
      "primaryCollection": {
        "id": 212,
        "name": "London To Stonehenge Tours",
        "displayName": "London To Stonehenge Tours"
      },
      "primaryCategory": {
        "id": 2,
        "name": "Tours",
        "rank": 2,
        "displayName": "Tours",
        "heading": "London Tours",
        "metaTitle": "Plan and Book Top-rated, Exclusive Tours in London | Headout",
        "metaDescription": "Book exclusive tours of museums, attractions, historical sites, and more in London. Get 10% additional cashback, flexible cancelation, and 24/7 support on each booking.",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/tours-london-ca-2~7426/",
          "ES": "/es/tours-london-ca-2~7426/",
          "FR": "/fr/visites-london-ca-2~7426/",
          "IT": "/it/tour-london-ca-2~7426/",
          "DE": "/de/touren-london-ca-2~7426/",
          "PT": "/pt/tours-london-ca-2~7426/",
          "NL": "/nl/tours-london-ca-2~7426/",
          "PL": "/pl/tours-london-ca-2~7426/",
          "KO": "/ko/tours-london-ca-2~7426/",
          "JA": "/ja/tours-london-ca-2~7426/",
          "ZH_HANS": "/zh-hans/tours-london-ca-2~7426/",
          "DA": "/da/ture-london-ca-2~7426/",
          "NO": "/no/turer-london-ca-2~7426/",
          "RO": "/ro/tururi-london-ca-2~7426/",
          "RU": "/ru/tours-london-ca-2~7426/",
          "SV": "/sv/rundturer-london-ca-2~7426/",
          "TR": "/tr/tours-london-ca-2~7426/"
        },
        "medias": [],
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": null
        },
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        }
      },
      "primarySubCategory": {
        "id": 1143,
        "name": "Day trips",
        "categoryId": 2,
        "rank": 19,
        "displayName": "Day Trips",
        "heading": "Day Trips From London",
        "metaTitle": "Day Trips from London | Visit Stonehenge, Bath, Warwick & More",
        "metaDescription": "Venture away from London and explore popular destinations such as Stonehenge, Canterbury, Oxford. Plan your day trip from London now!",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/day-trips-london-sc-1143~7426/",
          "ES": "/es/tours-de-un-dia-london-sc-1143~7426/",
          "FR": "/fr/excursions-dune-journee-london-sc-1143~7426/",
          "IT": "/it/day-trips-london-sc-1143~7426/",
          "DE": "/de/tagesausfluge-london-sc-1143~7426/",
          "PT": "/pt/excursoes-de-um-dia-london-sc-1143~7426/",
          "NL": "/nl/day-trips-london-sc-1143~7426/",
          "PL": "/pl/day-trips-london-sc-1143~7426/",
          "KO": "/ko/day-trips-london-sc-1143~7426/",
          "JA": "/ja/day-trips-london-sc-1143~7426/",
          "ZH_HANS": "/zh-hans/day-trips-london-sc-1143~7426/",
          "DA": "/da/day-trips-london-sc-1143~7426/",
          "NO": "/no/day-trips-london-sc-1143~7426/",
          "RO": "/ro/excursii-de-o-zi-london-sc-1143~7426/",
          "RU": "/ru/day-trips-london-sc-1143~7426/",
          "SV": "/sv/day-trips-london-sc-1143~7426/",
          "TR": "/tr/day-trips-london-sc-1143~7426/"
        },
        "medias": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/78e4cdec19e98dc1239e6ab76ca41b00-SubCategory-Day-Trips.jpg",
            "type": "IMAGE",
            "metadata": {
              "altText": "Tourists exploring a historic street with a guide pointing out landmarks.",
              "height": 1000,
              "width": 1600,
              "videoDuration": null,
              "uploadDate": "2023-09-01",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            },
            "info": {
              "sourceType": "SOURCED",
              "sourceUrl": "https://stock.adobe.com/in/images/tour-guide-in-sunglasses-pointing-with-hand-during-excursion-with-interracial-tourists-on-andrews-descent-in-kyiv/580769408",
              "credit": "LIGHTFIELD STUDIOS",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            }
          }
        ],
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        },
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": ""
        }
      },
      "listingAvailability": {
        "nextAvailableDate": {
          "date": "2026-02-27",
          "remaining": 88,
          "availability": "LIMITED"
        }
      },
      "ticketValidity": {
        "ticketValidityType": "NOT_EXTENDABLE",
        "ticketValidityUntilDate": null,
        "ticketValidityUntilDaysFromPurchase": null
      },
      "allTags": [
        "SAFETY_CLEANED_EQUIPMENTS",
        "SAFETY_CONTACTLESS",
        "SAFETY_HANDWASH",
        "SAFETY_MASK_GUEST",
        "SAFETY_MASK_STAFF",
        "SAFETY_RESTRICTED_CAPACITY",
        "SAFETY_SOCIAL_DISTANCING",
        "SAFETY_TRAINED_STAFF",
        "SCHEDULE-90-DAYS",
        "STONEHENGE",
        "STONEHENGE1",
        "ZENDESK"
      ],
      "callToAction": "",
      "inclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EFull-day tour of Stonehenge and Bath\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEntry to Stonehenge\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EExpert English or Italian-speaking guide (as per option selected)\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ERound-trip AC coach transfers\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EBoarding from central London\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAudio guide in English, German, Spanish, French, Dutch, Italian, Ukrainian, Mandarin, Russian, Polish, Japanese, Korean, and Brazilian Portuguese at Stonehenge\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E\n\u003Cp\u003E\u003Cstrong\u003EAdditional paid upgrades:\u003C/strong\u003E\u003C/p\u003E\n\u003Cul\u003E\n\u003Cli\u003EEntry to the Roman Baths\u003C/li\u003E\n\u003C/ul\u003E",
      "neighbourhood": null,
      "hidden": false,
      "flowType": "NORMAL",
      "startPoint": {
        "latitude": 51.4925003051758,
        "longitude": -0.148161500692368
      },
      "reviewCount": 1774,
      "cancellationPolicy": {
        "cancellable": true,
        "cancellableUpTo": 1440
      },
      "ratingCount": 1774,
      "showRatings": true,
      "media": {
        "productImages": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/1ce4159465dfc838c447783ec7a15ad2-6274-london-stonehenge-entry-tickets-with-transfers-from-london-08.jpg",
            "altText": "Tourists using audio guides at the Roman Baths in Bath, part of a day trip from London.",
            "description": "Tourists using audio guides at the Roman Baths in Bath, part of a day trip from London.",
            "credit": "Golden Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/e35fb0c7e9e30fa228ae3308f9da1974-stonehenge-06.jpg",
            "altText": "Stonehenge stone circle under blue sky on a day trip from London.",
            "description": "Stonehenge stone circle under blue sky on a day trip from London.",
            "credit": "Premium Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/dfa4123ebec69bb7aef63360885f937e-stonehenge-07.jpg",
            "altText": "Roman Baths in Bath, England, with tourists exploring the ancient site.",
            "description": "Roman Baths in Bath, England, with tourists exploring the ancient site.",
            "credit": "sw67"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/62f3acbfd5b560f8eb0455d5d46fb4cc-10675-london-stonehenge-and-all-afternoon-in-bath-04.jpg",
            "altText": "Roman Baths entrance sign in Bath, England, with historic architecture in the background.",
            "description": "Roman Baths entrance sign in Bath, England, with historic architecture in the background.",
            "credit": "Premium Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/be1571b6e5424964a35c7d69b1e3ca3d-2926-london-from-london--stonehenge--windsor-castle--bath---roman-baths-day-trip-07.jpg",
            "altText": "Visitors with guide and audio devices inside Windsor Castle.",
            "description": "Visitors with guide and audio devices inside Windsor Castle.",
            "credit": "Evan Evans"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/571ae4b6fabc4dd99ec5ca3f1fdbb5c5-stonehenge-03.jpg",
            "altText": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
            "description": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
            "credit": "Pawel Pajor"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/489f089e942132f464ac535f7c492802-10675-london-10675---from-london---stonehenge---bath-day-trip-03.jpg",
            "altText": "Visitors at Stonehenge visitor center during London to Stonehenge and Bath day trip.",
            "description": "Visitors at Stonehenge visitor center during London to Stonehenge and Bath day trip.",
            "credit": "Evan Evans_API"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/67d3387601be2c1ab85d5cf1cbe6905e-10675-london-10675---from-london---stonehenge---bath-day-trip-04.jpg",
            "altText": "Visitors pulling a rope to move a large stone at Stonehenge exhibit, England.",
            "description": "Visitors pulling a rope to move a large stone at Stonehenge exhibit, England.",
            "credit": "Evan Evans_API"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/7300c80c3c066b4592ab54aa927db019-stonehenge-02.jpg",
            "altText": "Reconstructed Neolithic huts near Stonehenge, England.",
            "description": "Reconstructed Neolithic huts near Stonehenge, England.",
            "credit": "vasildakov"
          }
        ],
        "safetyImages": [],
        "safetyVideos": []
      },
      "highlights": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EJourney to Bath's healing springs and Stonehenge's ancient mysteries on an expertly guided day trip in an AC coach from London, leaving travel worries behind.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EUncover hidden stories with an English or Italian-speaking guide, revealing the rich history of and fascinating facts about Stonehenge and Bath.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ELearn about the theories and myths surrounding Stonehenge and observe a virtual recreation of a Neolithic man who lived on the site 5500 years ago.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EStroll through Bath's elegant Georgian streets and see its honey-colored houses, cross the Pulteney Bridge, and learn about the Roman Baths.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEnhance your experience with entry to the Roman Baths, originally a temple to the goddess Sulis Minerva, and admire the ruins of this ancient religious spa.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "imageUrl": "https://cdn-imgix.headout.com/media/images/1ce4159465dfc838c447783ec7a15ad2-6274-london-stonehenge-entry-tickets-with-transfers-from-london-08.jpg",
      "listingPrice": {
        "currencyCode": "GBP",
        "originalPrice": 99,
        "finalPrice": 99,
        "minimumPayablePrice": 99,
        "type": "PER_PERSON",
        "otherPricesExist": true,
        "bestDiscount": 0,
        "cashbackValue": 0,
        "cashbackType": "PERCENTAGE",
        "tourId": 19930
      },
      "schedule": null,
      "averageRating": 4.5,
      "promotionLabel": null,
      "tourType": "TOUR",
      "shortSummary": "",
      "reschedulePolicy": {
        "reschedulable": false,
        "reschedulableUpTo": null
      },
      "urlSlugs": {
        "EN": "/london-to-stonehenge-tours/stonehenge-and-bath-tour-from-london-e-10675/",
        "ES": "/es/tour-a-stonehenge-desde-londres/tour-a-stonehenge-y-bath-desde-londres-e-10675/",
        "FR": "/fr/escapades-londres-stonehenge/au-depart-de-londres-visite-guidee-de-stonehenge-et-bath-avec-entree-optionnelle-e-10675/",
        "IT": "/it/tour-da-londra-a-stonehenge/tour-da-londra-a-stonehenge-e-bath-e-10675/",
        "DE": "/de/london-nach-stonehenge-touren/stonehenge-und-bath-tour-ab-london-e-10675/",
        "PT": "/pt/tours-londres-a-stonehenge/excursao-a-stonehenge-e-bath-saindo-de-londres-e-10675/",
        "NL": "/nl/stonehenge-tours-vanuit-londen/vanuit-londen-tour-naar-stonehenge-en-bath-e-10675/",
        "PL": "/pl/london-to-stonehenge-tours/stonehenge-and-bath-tour-from-london-e-10675/",
        "KO": "/ko/london-to-stonehenge-tours/stonehenge-and-bath-tour-from-london-e-10675/",
        "JA": "/ja/london-to-stonehenge-tours/stonehenge-and-bath-tour-from-london-e-10675/",
        "ZH_HANS": "/zh-hans/london-to-stonehenge-tours/stonehenge-and-bath-tour-from-london-e-10675/",
        "DA": "/da/ture-fra-london-til-stonehenge/fra-london-stonehenge-og-bath-dagsudflugt-e-10675/",
        "NO": "/no/turer-fra-london-til-stonehenge/fra-london-dagstur-til-stonehenge-og-bath-e-10675/",
        "RO": "/ro/tururi-de-la-londra-la-stonehenge/de-la-londra-excursie-de-o-zi-la-stonehenge-si-bath-e-10675/",
        "RU": "/ru/london-to-stonehenge-tours/stonehenge-and-bath-tour-from-london-e-10675/",
        "SV": "/sv/turer-fran-london-till-stonehenge/fran-london-dagsutflykt-till-stonehenge-och-bath-e-10675/",
        "TR": "/tr/london-to-stonehenge-tours/stonehenge-and-bath-tour-from-london-e-10675/"
      },
      "distance": null,
      "exclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EHotel pick-up/drop-off\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ELunch\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "cityCode": "LONDON",
      "language": "EN",
      "validity": "",
      "combo": false,
      "multiVariant": true,
      "allVariantOpenDated": false,
      "descriptors": [
        {
          "code": "DURATION",
          "name": "Duration",
          "displayName": "Duration",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/clock.svg",
          "description": "10 hrs 30 mins",
          "type": "STANDARD"
        },
        {
          "code": "FREE_CANCELLATION",
          "name": "Free Cancellation",
          "displayName": "Free cancellation",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/cancellation.svg",
          "description": "Free cancellation up to 24 hours before the start of your experience",
          "type": "STANDARD"
        },
        {
          "code": "BOOK_NOW_PAY_LATER",
          "name": "Book now, pay later",
          "displayName": "Book now, pay later",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/bnpl.svg",
          "description": "Book now without paying anything. Cancel for free if your plans change.",
          "type": "STANDARD"
        },
        {
          "code": "TRANSFERS",
          "name": "Transfers available",
          "displayName": "Transfers available",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/transfers.svg",
          "description": "Enjoy comfortable roundtrip transfers",
          "type": "INCLUSION_BASED"
        },
        {
          "code": "AUDIO_GUIDE",
          "name": "Multilingual Audio Guide",
          "displayName": "Audio guide",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/headphones.svg",
          "description": "Access to multilingual audio guide",
          "type": "INCLUSION_BASED"
        }
      ],
      "topReviews": [
        {
          "tourId": 19931,
          "bookingId": 29380620,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15060093,
          "nonCustomerName": "Brenda Ekmo",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Our tour guide was informative 😍✌️",
          "reviewTime": 1768508566000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "FAMILY",
            "localisedLabel": "Family"
          }
        },
        {
          "tourId": 19930,
          "bookingId": 28757379,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15013214,
          "nonCustomerName": "Silvina Lorena Peña",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Puntuales en todo momento. Muy buenas explicaciones de Omar y el servicio excelente. Omar nos acompañó en cada sitio y dio instrucciones muy claras. Manejo del chófer AJ muy responsable",
          "reviewTime": 1767043355000,
          "reviewMedias": [
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28757379/a1987061efaf24f1b88c39784ffed1e2-425d4816003e",
              "fileType": "IMAGE",
              "fileSize": 3619278,
              "width": null,
              "height": null,
              "fileName": "1000280236.jpg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28757379/49756172134689fb0ebd274fe5ae65fc-2dad55608e15",
              "fileType": "IMAGE",
              "fileSize": 3239241,
              "width": null,
              "height": null,
              "fileName": "1000280392.jpg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28757379/6f91648646efc36e88a80ea23f9a717a-1dff80c017c5",
              "fileType": "IMAGE",
              "fileSize": 4596344,
              "width": null,
              "height": null,
              "fileName": "1000280360.jpg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28757379/0eca1c4a1007212ada4db1fff063f2a3-7e682556a7ee",
              "fileType": "IMAGE",
              "fileSize": 3717522,
              "width": null,
              "height": null,
              "fileName": "1000280199.jpg"
            },
            {
              "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/28757379/5847ea9539e6474641451c6959aced08-4c68f71d2f5a",
              "fileType": "IMAGE",
              "fileSize": 3453035,
              "width": null,
              "height": null,
              "fileName": "1000280244.jpg"
            }
          ],
          "translatedContent": "Punctual at all times. Very good explanations from Omar and excellent service. Omar accompanied us in every place and gave very clear instructions. The driver AJ was very responsible.",
          "useTranslatedContent": true,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "ES",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 19931,
          "bookingId": 28346615,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14964828,
          "nonCustomerName": "EMERLITO IGNACIO",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Really good experience and great tour ",
          "reviewTime": 1764218738000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "SOLO",
            "localisedLabel": "Solo"
          }
        },
        {
          "tourId": 19931,
          "bookingId": 29308255,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 15024424,
          "nonCustomerName": "Arlene Leva",
          "reviewerImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocL_JwG6EbsDCDTPaES0iIFAGdF_MrI1ILPxoucEWCoelAkNow=s96-c",
          "rating": 5,
          "content": null,
          "reviewTime": 1767477682000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "SOLO",
            "localisedLabel": "Solo"
          }
        },
        {
          "tourId": 19930,
          "bookingId": 28578713,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14973060,
          "nonCustomerName": "HALEELUR RAHMAN MA",
          "reviewerImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocK2_9Ng-sTw6OhZzDwIdDvh1Wn02_dD8m6BZnSUnydQQ02Bt3Kj=s96-c",
          "rating": 5,
          "content": null,
          "reviewTime": 1764627873000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "FAMILY",
            "localisedLabel": "Family"
          }
        }
      ],
      "cityDisplayName": "London",
      "microBrandsDescriptor": "",
      "listingDate": "2025-03-21",
      "experienceVideo": null,
      "experienceItineraryIds": [133],
      "reviewsDetails": {
        "reviewsCount": 1774,
        "ratingsCount": 1774,
        "averageRating": 4.5,
        "ratingsSplit": {
          "1": 107,
          "2": 34,
          "3": 22,
          "4": 287,
          "5": 1324
        },
        "showRatings": true,
        "displayConfig": {
          "exposeRatings": true,
          "exposeSorting": true,
          "exposeFiltering": true,
          "exposeLoadMore": true
        },
        "reviewCountries": {
          "countries": [
            {
              "code": "US",
              "displayName": "United States"
            },
            {
              "code": "AR",
              "displayName": "Argentina"
            },
            {
              "code": "IN",
              "displayName": "India"
            },
            {
              "code": "BR",
              "displayName": "Brazil"
            },
            {
              "code": "SG",
              "displayName": "Singapore"
            },
            {
              "code": "MU",
              "displayName": "Mauritius"
            },
            {
              "code": "CL",
              "displayName": "Chile"
            },
            {
              "code": "SE",
              "displayName": "Sweden"
            },
            {
              "code": "PH",
              "displayName": "Philippines"
            },
            {
              "code": "IE",
              "displayName": "Ireland"
            }
          ],
          "count": 19
        }
      },
      "tourGroupUrl": "/london-to-stonehenge-tours/stonehenge-and-bath-tour-from-london-e-10675/",
      "minDuration": 37800000,
      "maxDuration": 37800000,
      "microBrandsHighlight": "###### Highlights\r\n\r\n**Skip the hassle of coordinating travel between two UNESCO sites on this guided day trip.**\r\n\r\n\r\n- **Day out to** Britain’s only natural spring in Bath and the mysterious prehistoric Stonehenge on a guided day trip with round-trip transfers from Central London.\r\n- **You’ll get** an English or Italian-speaking guide who will share the historical context of both sites that you may miss on a self-guided tour.\r\n- **Stonehenge:** See the 5000-year-old stone monoliths and explore more than 250 artifacts, including tools and jewelry, on display at the visitor center.\r\n- **Bath:** Walk the streets of this Georgian city, admire the exterior architecture of the Bath Abbey, and find out more about the Roman Baths’ healing waters.\r\n- **Upgrades:** Visit the Roman Baths, the most famous site of Roman Britain, learn about Roman bathing rituals, and see the Haruspex stone on display.\r\n###### Sites visited\r\n\r\n- Stonehenge\r\n- Bath\r\n###### Need to know\r\n\r\n- You will not be allowed to enter the Stonehenge Circle itself. This is due to the restoration attempts and the relative instability of the structure. Your Stonehenge tickets allow you to access about 10 meters of the monument.\r\n- This tour runs daily from April to October and only on Mondays, Wednesdays, and Fridays from November to March.\r\n- This experience is partially accessible to wheelchair and pram/stroller users.\r\n- For your convenience, your guide dogs are welcome to join you.\r\n- English Heritage and National Trust England members can enjoy free admission to Stonehenge."
    },
    {
      "id": 9639,
      "name": "Windsor Castle, Stonehenge & Bath Guided Tour with Access to Roman Bath",
      "primaryCollection": {
        "id": 212,
        "name": "London To Stonehenge Tours",
        "displayName": "London To Stonehenge Tours"
      },
      "primaryCategory": {
        "id": 2,
        "name": "Tours",
        "rank": 2,
        "displayName": "Tours",
        "heading": "London Tours",
        "metaTitle": "Plan and Book Top-rated, Exclusive Tours in London | Headout",
        "metaDescription": "Book exclusive tours of museums, attractions, historical sites, and more in London. Get 10% additional cashback, flexible cancelation, and 24/7 support on each booking.",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/tours-london-ca-2~7426/",
          "ES": "/es/tours-london-ca-2~7426/",
          "FR": "/fr/visites-london-ca-2~7426/",
          "IT": "/it/tour-london-ca-2~7426/",
          "DE": "/de/touren-london-ca-2~7426/",
          "PT": "/pt/tours-london-ca-2~7426/",
          "NL": "/nl/tours-london-ca-2~7426/",
          "PL": "/pl/tours-london-ca-2~7426/",
          "KO": "/ko/tours-london-ca-2~7426/",
          "JA": "/ja/tours-london-ca-2~7426/",
          "ZH_HANS": "/zh-hans/tours-london-ca-2~7426/",
          "DA": "/da/ture-london-ca-2~7426/",
          "NO": "/no/turer-london-ca-2~7426/",
          "RO": "/ro/tururi-london-ca-2~7426/",
          "RU": "/ru/tours-london-ca-2~7426/",
          "SV": "/sv/rundturer-london-ca-2~7426/",
          "TR": "/tr/tours-london-ca-2~7426/"
        },
        "medias": [],
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": null
        },
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        }
      },
      "primarySubCategory": {
        "id": 1143,
        "name": "Day trips",
        "categoryId": 2,
        "rank": 19,
        "displayName": "Day Trips",
        "heading": "Day Trips From London",
        "metaTitle": "Day Trips from London | Visit Stonehenge, Bath, Warwick & More",
        "metaDescription": "Venture away from London and explore popular destinations such as Stonehenge, Canterbury, Oxford. Plan your day trip from London now!",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/day-trips-london-sc-1143~7426/",
          "ES": "/es/tours-de-un-dia-london-sc-1143~7426/",
          "FR": "/fr/excursions-dune-journee-london-sc-1143~7426/",
          "IT": "/it/day-trips-london-sc-1143~7426/",
          "DE": "/de/tagesausfluge-london-sc-1143~7426/",
          "PT": "/pt/excursoes-de-um-dia-london-sc-1143~7426/",
          "NL": "/nl/day-trips-london-sc-1143~7426/",
          "PL": "/pl/day-trips-london-sc-1143~7426/",
          "KO": "/ko/day-trips-london-sc-1143~7426/",
          "JA": "/ja/day-trips-london-sc-1143~7426/",
          "ZH_HANS": "/zh-hans/day-trips-london-sc-1143~7426/",
          "DA": "/da/day-trips-london-sc-1143~7426/",
          "NO": "/no/day-trips-london-sc-1143~7426/",
          "RO": "/ro/excursii-de-o-zi-london-sc-1143~7426/",
          "RU": "/ru/day-trips-london-sc-1143~7426/",
          "SV": "/sv/day-trips-london-sc-1143~7426/",
          "TR": "/tr/day-trips-london-sc-1143~7426/"
        },
        "medias": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/78e4cdec19e98dc1239e6ab76ca41b00-SubCategory-Day-Trips.jpg",
            "type": "IMAGE",
            "metadata": {
              "altText": "Tourists exploring a historic street with a guide pointing out landmarks.",
              "height": 1000,
              "width": 1600,
              "videoDuration": null,
              "uploadDate": "2023-09-01",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            },
            "info": {
              "sourceType": "SOURCED",
              "sourceUrl": "https://stock.adobe.com/in/images/tour-guide-in-sunglasses-pointing-with-hand-during-excursion-with-interracial-tourists-on-andrews-descent-in-kyiv/580769408",
              "credit": "LIGHTFIELD STUDIOS",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            }
          }
        ],
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        },
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": ""
        }
      },
      "listingAvailability": {
        "nextAvailableDate": {
          "date": "2026-02-19",
          "remaining": 2,
          "availability": "LIMITED"
        }
      },
      "ticketValidity": {
        "ticketValidityType": "NOT_EXTENDABLE",
        "ticketValidityUntilDate": null,
        "ticketValidityUntilDaysFromPurchase": null
      },
      "allTags": [
        "BATH",
        "BATH3",
        "ESCAPE",
        "SAFETY_CLEANED_EQUIPMENTS",
        "SAFETY_CONTACTLESS",
        "SAFETY_HANDWASH",
        "SAFETY_MASK_GUEST",
        "SAFETY_MASK_STAFF",
        "SAFETY_RESTRICTED_CAPACITY",
        "SAFETY_SOCIAL_DISTANCING",
        "SAFETY_TRAINED_STAFF",
        "SCHEDULE-360-DAYS",
        "STONEHENGE",
        "WINDSOR",
        "WINDSOR2",
        "WINDSORCASTLE",
        "WINDSORCASTLE2"
      ],
      "callToAction": "",
      "inclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EAdmission to Windsor Castle, St. George's Chapel and State Apartments\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAdmission to the Roman Baths\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EPanoramic tour of Bath\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAdmission to the Stonehenge (with interactive map)\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ERound-trip transfers on air-conditioned coach\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EFree WiFi on coach\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EExpert tour guide (English/Spanish/French)\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EVOX personal audio headset\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "neighbourhood": null,
      "hidden": false,
      "flowType": "NORMAL",
      "startPoint": {
        "latitude": 51.4924774169922,
        "longitude": -0.148270502686501
      },
      "reviewCount": 8739,
      "cancellationPolicy": {
        "cancellable": true,
        "cancellableUpTo": 2880
      },
      "ratingCount": 8739,
      "showRatings": true,
      "media": {
        "productImages": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/145014a0c7ae83cf20054b958f5bb587-2926-london-from-london--stonehenge--windsor-castle--bath---roman-baths-day-trip-.jpg",
            "altText": "Tourists walking towards Windsor Castle through a tree-lined path on a day trip from London.",
            "description": "Tourists walking towards Windsor Castle through a tree-lined path on a day trip from London.",
            "credit": "Simon Hurry"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/571ae4b6fabc4dd99ec5ca3f1fdbb5c5-stonehenge-03.jpg",
            "altText": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
            "description": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
            "credit": "Pawel Pajor"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/00822f583ab1b0fda068614efb1d8210-22476-bath-bridgerton-tour-and-bath-city-highlights-with-music-02.jpg",
            "altText": "Historic Bath city street with tour group near Pulteney Bridge, live music performance nearby.",
            "description": "Historic Bath city street with tour group near Pulteney Bridge, live music performance nearby.",
            "credit": "Golden Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/73b371c52fe5206b2cd2a65b47da6d91-27139-london-guided-tour-to-windsor-castle---afternoon-tea-02.jpg",
            "altText": "Tour guide speaking to a group at Windsor Castle on a sunny day.",
            "description": "Tour guide speaking to a group at Windsor Castle on a sunny day.",
            "credit": "luisrojasstock"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/5f8fd92f18f8c440a2948d31a7b6bec8-27283-london-private-viewing-of-stonehenge-with-bath---lacock-guided-tour-05.jpg",
            "altText": "Roman Baths in Bath with steam rising, part of a day trip from London including Stonehenge and Windsor Castle.",
            "description": "Roman Baths in Bath with steam rising, part of a day trip from London including Stonehenge and Windsor Castle.",
            "credit": "Premium Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/63c23fbe1733c0b9acbb0d6aabf06368-happy%20customer%20in%20AC%20bus.jpg",
            "altText": "Customers smiling on air-conditioned bus during Herculaneum tour from Naples.",
            "description": "Customers smiling on air-conditioned bus during Herculaneum tour from Naples.",
            "credit": "Brastock Images"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/e64af626a1d60fc460caf2e33114a9f2-audio%20guide.jpg",
            "altText": "Woman listening to audio guide on ship with earphones, holding smartphone.",
            "description": "Woman listening to audio guide on ship with earphones, holding smartphone.",
            "credit": "PheelingsMedia"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/9ca638e35fc23ffe90029c4f8ce3e68d-9641-london-windsor-castle--oxford---stonehenge-tour-from-london-02.jpg",
            "altText": "St George’s Chapel exterior with blue sky and green lawn, Windsor Castle in background.",
            "description": "St George’s Chapel exterior with blue sky and green lawn, Windsor Castle in background.",
            "credit": "Evan Evans_API"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/fcc2eb41ace05cc946a897a99545f894-27139-london-guided-tour-to-windsor-castle---afternoon-tea-05.jpg",
            "altText": "Crimson Drawing Room in Windsor Castle with ornate gold decor and chandeliers.",
            "description": "Crimson Drawing Room in Windsor Castle with ornate gold decor and chandeliers.",
            "credit": "Axis and Globe"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/eb49dda8bc48376016942249979923f5-stonehenge-05.jpg",
            "altText": "Stonehenge with blue sky and yellow flowers during daytime.",
            "description": "Stonehenge with blue sky and yellow flowers during daytime.",
            "credit": "Evan Evans_API"
          }
        ],
        "safetyImages": [],
        "safetyVideos": []
      },
      "highlights": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EVisit three of England's most cherished attractions in one day and discover more than 5,000 years of history\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEnjoy round-trip transfers on air-conditioned coaches as you get transported from one attraction to the other\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EVisit the Windsor Castle first, a 900-year-old castle that still acts as the official residence of the Queen of England\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ENext, explore the Roman Baths, a 2000-year-old bathhouse and historic site housing historic objects and artifacts\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ELastly, head to Stonehenge, a revered UNESCO World Heritage Site and learn all about this Neolithic monument\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EThis guided tour is available in English, Spanish and French\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "imageUrl": "https://cdn-imgix.headout.com/media/images/145014a0c7ae83cf20054b958f5bb587-2926-london-from-london--stonehenge--windsor-castle--bath---roman-baths-day-trip-.jpg",
      "listingPrice": {
        "currencyCode": "GBP",
        "originalPrice": 165,
        "finalPrice": 165,
        "minimumPayablePrice": 165,
        "type": "PER_PERSON",
        "otherPricesExist": true,
        "bestDiscount": 0,
        "cashbackValue": 0,
        "cashbackType": "PERCENTAGE",
        "tourId": 17443
      },
      "schedule": null,
      "averageRating": 4.4,
      "promotionLabel": "RECOMMENDED",
      "tourType": "TOUR",
      "shortSummary": "\u003Cp\u003EVisit the top three out-of-town attractions from London on a day tour that takes you to the town of Windsor, the hamlet of Bath and Stonehenge!\u003C/p\u003E",
      "reschedulePolicy": {
        "reschedulable": true,
        "reschedulableUpTo": 2880
      },
      "urlSlugs": {
        "EN": "/london-to-stonehenge-tours/windsor-castle-stonehenge-bath-guided-tour-with-access-to-roman-bath-e-9639/",
        "ES": "/es/tour-a-stonehenge-desde-londres/visita-guiada-al-castillo-de-windsor-stonehenge-y-bath-con-acceso-al-bano-romano-e-9639/",
        "FR": "/fr/escapades-londres-stonehenge/visite-guidee-du-chateau-de-windsor-de-stonehenge-et-de-bath-avec-acces-a-roman-bath-e-9639/",
        "IT": "/it/tour-da-londra-a-stonehenge/tour-guidato-del-castello-di-windsor-stonehenge-e-bath-con-accesso-a-roman-bath-e-9639/",
        "DE": "/de/london-nach-stonehenge-touren/windsor-castle-stonehenge-bath-gefuhrte-tour-mit-zugang-zum-romischen-bath-e-9639/",
        "PT": "/pt/tours-londres-a-stonehenge/visita-guiada-ao-castelo-de-windsor-stonehenge-e-bath-com-acesso-ao-banho-romano-e-9639/",
        "NL": "/nl/stonehenge-tours-vanuit-londen/windsor-castle-stonehenge-bath-rondleiding-met-toegang-tot-romeins-bath-e-9639/",
        "PL": "/pl/london-to-stonehenge-tours/windsor-castle-stonehenge-bath-guided-tour-with-access-to-roman-bath-e-9639/",
        "KO": "/ko/london-to-stonehenge-tours/windsor-castle-stonehenge-bath-guided-tour-with-access-to-roman-bath-e-9639/",
        "JA": "/ja/london-to-stonehenge-tours/windsor-castle-stonehenge-bath-guided-tour-with-access-to-roman-bath-e-9639/",
        "ZH_HANS": "/zh-hans/london-to-stonehenge-tours/windsor-castle-stonehenge-bath-guided-tour-with-access-to-roman-bath-e-9639/",
        "DA": "/da/ture-fra-london-til-stonehenge/windsor-castle-stonehenge-bath-guidet-tur-med-tilgngelighed-til-roman-bath-e-9639/",
        "NO": "/no/turer-fra-london-til-stonehenge/windsor-castle-stonehenge-bath-guidet-tur-med-tilgjengelighet-til-roman-bath-e-9639/",
        "RO": "/ro/tururi-de-la-londra-la-stonehenge/castelul-windsor-stonehenge-si-bath-tur-ghidat-cu-acces-la-roman-bath-e-9639/",
        "RU": "/ru/london-to-stonehenge-tours/windsor-castle-stonehenge-bath-guided-tour-with-access-to-roman-bath-e-9639/",
        "SV": "/sv/turer-fran-london-till-stonehenge/slottet-windsor-stonehenge-bath-guidad-tur-med-tillganglighet-till-roman-bath-e-9639/",
        "TR": "/tr/london-to-stonehenge-tours/windsor-castle-stonehenge-bath-guided-tour-with-access-to-roman-bath-e-9639/"
      },
      "distance": null,
      "exclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EHotel transfers\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ELunch\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "cityCode": "LONDON",
      "language": "EN",
      "validity": "",
      "combo": false,
      "multiVariant": true,
      "allVariantOpenDated": false,
      "descriptors": [
        {
          "code": "DURATION",
          "name": "Duration",
          "displayName": "Duration",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/clock.svg",
          "description": "11 hrs",
          "type": "STANDARD"
        },
        {
          "code": "FREE_CANCELLATION",
          "name": "Free Cancellation",
          "displayName": "Free cancellation",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/cancellation.svg",
          "description": "Free cancellation up to 48 hours before the start of your experience",
          "type": "STANDARD"
        },
        {
          "code": "TRANSFERS",
          "name": "Transfers available",
          "displayName": "Transfers available",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/transfers.svg",
          "description": "Enjoy comfortable roundtrip transfers",
          "type": "INCLUSION_BASED"
        },
        {
          "code": "GUIDED_TOUR",
          "name": "Live Tour Guide",
          "displayName": "Guided tour",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/guidedtours.svg",
          "description": "Expert local tour guide",
          "type": "INCLUSION_BASED"
        }
      ],
      "topReviews": [
        {
          "tourId": 17443,
          "bookingId": 24739837,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14354000,
          "nonCustomerName": "Florence Ng",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": null,
          "reviewTime": 1746792500000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "SOLO",
            "localisedLabel": "Solo"
          }
        },
        {
          "tourId": 17443,
          "bookingId": 24244308,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14289487,
          "nonCustomerName": "Anne Morin",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": null,
          "reviewTime": 1744855985000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 17443,
          "bookingId": 21812266,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14051743,
          "nonCustomerName": "SARA SİBEL ELKAZA",
          "reviewerImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocJ_RFWse9f0JkGOGexKQmDK5zhs-2N_t2mKAvGhy24H3y6vrQ=s96-c",
          "rating": 4,
          "content": null,
          "reviewTime": 1737491295000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "FAMILY",
            "localisedLabel": "Family"
          }
        },
        {
          "tourId": 17443,
          "bookingId": 20745552,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14047801,
          "nonCustomerName": "Daniel Michael Casey ",
          "reviewerImgUrl": null,
          "rating": 1,
          "content": "O passeio em si foi muito bom, nos entendemos que deve ser corrido para dar tempo de mostrar tudo o que estava incluído no pacote. A nossa grande insatisfação, e eu não vou indicar vocês para ninguém foi quando paramos no Stonehenge e do local até o ônibus dependiamos de pegar uma van para voltar ao estacionamento. Entramos na fila 30 minutos de antecedência e não sei o que houve mas parou por um certo período de vir a van e com isso iríamos atrasar mas por uma graça divina eu tinha pegado o número da menina que estava no grupo e disse a ela avisar a guia o que estava acontecendo e foi então que ela nos esperou. Nós atrasamos 10 minutos, não foi 30 e nem 1 hora e se não fosse por essa menina ela teria nos deixado lá no meio do nada, sem transporte para voltar, sem ao menos verificar o que tinha ocorrido. Quando a pessoa tem que voltar no ônibus e depende das suas próprias pernas nos concordamos plenamente mas nesta situação dependiamos da Van. Graças a Deus não nos deixaram mas fiquei pensando imagine se tivesse? Imagine se fosse meus pais? Sem Internet, sem dinheiro, só com cartão, sem telefone? Eu acho que vocês deveriam rever essas regras porque o passeio que deveria ser bom foi stressante, desconfortável só de imaginar que ela iria nos deixar lá por causa de 10 minutos!!!!!!!!!!!!!",
          "reviewTime": 1737110634000,
          "reviewMedias": [],
          "translatedContent": "The tour itself was very good, we understood that it had to be rushed to allow time to see everything that was included in the package. Our big dissatisfaction, and I'm not going to recommend you to anyone, was when we stopped at Stonehenge and from the site to the bus we had to take a van back to the parking lot. We queued 30 minutes in advance and I don't know what happened but the van stopped coming for a while and we were going to be late, but by some divine grace I had taken the number of the girl who was in the group and told her to let the guide know what was happening and that's when she waited for us. We were 10 minutes late, not 30, not an hour, and if it hadn't been for this girl she would have left us in the middle of nowhere, with no transport to get back, without even checking what had happened. When you have to get back on the bus and you have to rely on your own legs, we fully agree, but in this situation we had to rely on the van. Thank God they didn't leave us, but I kept thinking, imagine if they had? Imagine if it was my parents? No Internet, no money, only cards, no phone? I think you should review these rules because the tour, which was supposed to be good, was stressful, uncomfortable just imagining that she was going to drop us off for 10 minutes!!!!!!!!!!!!!",
          "useTranslatedContent": true,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "PT",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 17443,
          "bookingId": null,
          "customerUserId": 0,
          "title": null,
          "source": "TOURLANDISH",
          "id": 3944456,
          "nonCustomerName": "Headout Guest",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": null,
          "reviewTime": 1724422112000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": null,
          "nonCustomerCountryName": null,
          "personaLabel": null
        }
      ],
      "cityDisplayName": "London",
      "microBrandsDescriptor": "{clock} Duration:11 Hrs, {transfers} Roundtrip Transfers, {user} Expert Guided Tour, {cancel} Free Cancellation",
      "listingDate": "2020-03-23",
      "experienceVideo": null,
      "experienceItineraryIds": [535],
      "reviewsDetails": {
        "reviewsCount": 8739,
        "ratingsCount": 8739,
        "averageRating": 4.4,
        "ratingsSplit": {
          "1": 723,
          "2": 181,
          "3": 271,
          "4": 925,
          "5": 6639
        },
        "showRatings": true,
        "displayConfig": {
          "exposeRatings": true,
          "exposeSorting": true,
          "exposeFiltering": true,
          "exposeLoadMore": true
        },
        "reviewCountries": {
          "countries": [
            {
              "code": "US",
              "displayName": "United States"
            },
            {
              "code": "FR",
              "displayName": "France"
            }
          ],
          "count": 2
        }
      },
      "tourGroupUrl": "/london-to-stonehenge-tours/windsor-castle-stonehenge-bath-guided-tour-with-access-to-roman-bath-e-9639/",
      "minDuration": 39600000,
      "maxDuration": 39600000,
      "microBrandsHighlight": "###### Highlights\r\n\r\n**A guided tour of Windsor Castle, Stonehenge & Roman Baths**\r\n\r\n- Uncover more than 5,000 years of history in one day with a visit to three of England's national treasures.\r\n- Sign on for a scenic and educational tour that takes you from one picture-perfect location to another.\r\n- Enjoy convenient transfers in a luxury A/C coach and guidance from an expert tour guide.\r\n- Head out first to Windsor Castle, the 900-year-old official residence of the Queen of England.\r\n- Take in the lavishly-decorated State Rooms and St George's Chapel, and on select mornings, you'll catch the Changing the Guard Ceremony.\r\n- Next up, visit the Roman baths, a historical bathhouse built over hot springs over 2000 years ago by the Romans.\r\n- Saunter through its quiet, charming streets and admire historic sites like Bath Abbey and Pulteney Bridge.\r\n- Don't forget to taste the famous spa water containing 43 minerals, attracting visitors from all over the world.\r\n- Finally, head to the 5000-year-old Stonehenge, a UNESCO World Heritage Site with significant historical relevance.\r\n\r\n###### Ticket Information\r\n\r\n- Ticket options provided guided tours in English, Spanish and French. Choose as per convenience.\r\n\r\n###### Discounted Tickets\r\n\r\n- Ages 0-3yrs go free. Ages 3-16yrs, students, and families (2 adults+2 children) enjoy reduced ticket pricing (carry a valid photo ID).\r\n\r\n###### Cancellation Policy\r\n\r\n- Get a full refund on canceling this ticket up to 24hrs before the schedule."
    },
    {
      "id": 31398,
      "name": "From London: Stonehenge, Windsor, and Bath Small Group Day Trip",
      "primaryCollection": {
        "id": 212,
        "name": "London To Stonehenge Tours",
        "displayName": "London To Stonehenge Tours"
      },
      "primaryCategory": {
        "id": 2,
        "name": "Tours",
        "rank": 2,
        "displayName": "Tours",
        "heading": "London Tours",
        "metaTitle": "Plan and Book Top-rated, Exclusive Tours in London | Headout",
        "metaDescription": "Book exclusive tours of museums, attractions, historical sites, and more in London. Get 10% additional cashback, flexible cancelation, and 24/7 support on each booking.",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/tours-london-ca-2~7426/",
          "ES": "/es/tours-london-ca-2~7426/",
          "FR": "/fr/visites-london-ca-2~7426/",
          "IT": "/it/tour-london-ca-2~7426/",
          "DE": "/de/touren-london-ca-2~7426/",
          "PT": "/pt/tours-london-ca-2~7426/",
          "NL": "/nl/tours-london-ca-2~7426/",
          "PL": "/pl/tours-london-ca-2~7426/",
          "KO": "/ko/tours-london-ca-2~7426/",
          "JA": "/ja/tours-london-ca-2~7426/",
          "ZH_HANS": "/zh-hans/tours-london-ca-2~7426/",
          "DA": "/da/ture-london-ca-2~7426/",
          "NO": "/no/turer-london-ca-2~7426/",
          "RO": "/ro/tururi-london-ca-2~7426/",
          "RU": "/ru/tours-london-ca-2~7426/",
          "SV": "/sv/rundturer-london-ca-2~7426/",
          "TR": "/tr/tours-london-ca-2~7426/"
        },
        "medias": [],
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": null
        },
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        }
      },
      "primarySubCategory": {
        "id": 1143,
        "name": "Day trips",
        "categoryId": 2,
        "rank": 19,
        "displayName": "Day Trips",
        "heading": "Day Trips From London",
        "metaTitle": "Day Trips from London | Visit Stonehenge, Bath, Warwick & More",
        "metaDescription": "Venture away from London and explore popular destinations such as Stonehenge, Canterbury, Oxford. Plan your day trip from London now!",
        "noIndex": false,
        "canonicalUrl": null,
        "urlSlugs": {
          "EN": "/day-trips-london-sc-1143~7426/",
          "ES": "/es/tours-de-un-dia-london-sc-1143~7426/",
          "FR": "/fr/excursions-dune-journee-london-sc-1143~7426/",
          "IT": "/it/day-trips-london-sc-1143~7426/",
          "DE": "/de/tagesausfluge-london-sc-1143~7426/",
          "PT": "/pt/excursoes-de-um-dia-london-sc-1143~7426/",
          "NL": "/nl/day-trips-london-sc-1143~7426/",
          "PL": "/pl/day-trips-london-sc-1143~7426/",
          "KO": "/ko/day-trips-london-sc-1143~7426/",
          "JA": "/ja/day-trips-london-sc-1143~7426/",
          "ZH_HANS": "/zh-hans/day-trips-london-sc-1143~7426/",
          "DA": "/da/day-trips-london-sc-1143~7426/",
          "NO": "/no/day-trips-london-sc-1143~7426/",
          "RO": "/ro/excursii-de-o-zi-london-sc-1143~7426/",
          "RU": "/ru/day-trips-london-sc-1143~7426/",
          "SV": "/sv/day-trips-london-sc-1143~7426/",
          "TR": "/tr/day-trips-london-sc-1143~7426/"
        },
        "medias": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/78e4cdec19e98dc1239e6ab76ca41b00-SubCategory-Day-Trips.jpg",
            "type": "IMAGE",
            "metadata": {
              "altText": "Tourists exploring a historic street with a guide pointing out landmarks.",
              "height": 1000,
              "width": 1600,
              "videoDuration": null,
              "uploadDate": "2023-09-01",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            },
            "info": {
              "sourceType": "SOURCED",
              "sourceUrl": "https://stock.adobe.com/in/images/tour-guide-in-sunglasses-pointing-with-hand-during-excursion-with-interracial-tourists-on-andrews-descent-in-kyiv/580769408",
              "credit": "LIGHTFIELD STUDIOS",
              "filename": "Subcategory Global - Day Trips",
              "fileSize": 631.25
            }
          }
        ],
        "ratingsInfo": {
          "ratingsCount": 82176,
          "averageRating": 4.5,
          "showRatings": true
        },
        "microBrandInfo": {
          "descriptors": null,
          "highlights": null,
          "supportedLanguages": [],
          "metaTitle": null,
          "metaDescription": ""
        }
      },
      "listingAvailability": {
        "nextAvailableDate": {
          "date": "2026-02-22",
          "remaining": 4,
          "availability": "LIMITED"
        }
      },
      "ticketValidity": {
        "ticketValidityType": "NOT_EXTENDABLE",
        "ticketValidityUntilDate": null,
        "ticketValidityUntilDaysFromPurchase": null
      },
      "allTags": [],
      "callToAction": "",
      "inclusions": "\u003Cul\u003E\n\u003Cli\u003EFull-day tour of Stonehenge, Windsor, and Bath\u003C/li\u003E\n\u003Cli\u003ERound-trip transfers from London in AC mini-coach\u003C/li\u003E\n\u003Cli\u003EExpert tour guide\u003C/li\u003E\n\u003Cli\u003EEntry tickets to Stonehenge\u003C/li\u003E\n\u003Cli\u003EEntry tickets to Windsor Castle\u003C/li\u003E\n\u003C/ul\u003E",
      "neighbourhood": null,
      "hidden": false,
      "flowType": "NORMAL",
      "startPoint": {
        "latitude": 51.5136413574219,
        "longitude": -0.158868297934532
      },
      "reviewCount": 5,
      "cancellationPolicy": {
        "cancellable": true,
        "cancellableUpTo": 1440
      },
      "ratingCount": 5,
      "showRatings": false,
      "media": {
        "productImages": [
          {
            "url": "https://cdn-imgix.headout.com/media/images/b538e9bd1315a42748d2bccbdb3d7fab-31398-london--stonehenge--windsor--and-bath-small-group-tour-07.jpg",
            "altText": "Stonehenge under a clear blue sky in Wiltshire, England.",
            "description": "Stonehenge under a clear blue sky in Wiltshire, England.",
            "credit": "International Friends"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/4dbc90d929fed3d5b6db01334a03ca32-31398-london--stonehenge--windsor--and-bath-small-group-tour-02.jpg",
            "altText": "Windsor Castle entrance with pathway and surrounding gardens.",
            "description": "Windsor Castle entrance with pathway and surrounding gardens.",
            "credit": "International Friends "
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/518bc1a2338814471ea5e6c4db115018-2926-london-windsor-castle--bath---stonehenge-guided-tour-with-optional-entry-09.jpg",
            "altText": "Family enjoying audio tour at Roman Baths, UK.",
            "description": "Family enjoying audio tour at Roman Baths, UK.",
            "credit": "Golden Tours"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/2f2dab507e48517e3e884c7376fd7aa6-31398-london--stonehenge--windsor--and-bath-small-group-tour-03.jpg",
            "altText": "Guards in red uniforms marching with instruments in front of Windsor Castle.",
            "description": "Guards in red uniforms marching with instruments in front of Windsor Castle.",
            "credit": "International Friends"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/347b6bd0a9752dfbb5abdecea90358be-31398-london--stonehenge--windsor--and-bath-small-group-tour-01.jpg",
            "altText": "Aerial view of Bath, featuring Bath Abbey and surrounding Georgian architecture.",
            "description": "Aerial view of Bath, featuring Bath Abbey and surrounding Georgian architecture.",
            "credit": "International Friends "
          },
          {
            "url": "https://cdn-imgix.headout.com/microbrands-content-image/image/2621bb11219eb34dc051aab130194e14-windsor-castle-state-apartments.jpg",
            "altText": "Windsor Castle state apartments interior with ornate chandelier and decorated Christmas tree.",
            "description": "Windsor Castle state apartments interior with ornate chandelier and decorated Christmas tree.",
            "credit": "Royal Collection Trust / © His Majesty King Charles III 2023"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/4ab0fed0878d0a6814ad3771aa992dda-31398-london--stonehenge--windsor--and-bath-small-group-tour-10.jpg",
            "altText": "Historic bridge over river in Bath, England, surrounded by greenery and historic buildings.",
            "description": "Historic bridge over river in Bath, England, surrounded by greenery and historic buildings.",
            "credit": "International Friends "
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/571ae4b6fabc4dd99ec5ca3f1fdbb5c5-stonehenge-03.jpg",
            "altText": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
            "description": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
            "credit": "Pawel Pajor"
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/36b0e2aedb919df7e72312fd9626b73d-31398-london--stonehenge--windsor--and-bath-small-group-tour-06.jpg",
            "altText": "Royal Crescent in Bath, UK with blooming daffodils in the foreground.",
            "description": "Royal Crescent in Bath, UK with blooming daffodils in the foreground.",
            "credit": "International Friends "
          },
          {
            "url": "https://cdn-imgix.headout.com/media/images/05efc3bc19975f577f0351b31cd61bb2-31398-london--stonehenge--windsor--and-bath-small-group-tour-08.jpg",
            "altText": "Pulteney Bridge over River Avon in Bath, part of Stonehenge, Windsor, and Bath tour.",
            "description": "Pulteney Bridge over River Avon in Bath, part of Stonehenge, Windsor, and Bath tour.",
            "credit": "International Friends "
          }
        ],
        "safetyImages": [],
        "safetyVideos": []
      },
      "highlights": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EStep into history with a full-day guided tour of Stonehenge, Bath, and Windsor, with the convenience of round-trip executive mini-bus transfers from London.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EYou will be joined by a small, intimate group as an expert tour guide shares the history and insightful commentary on the three sites you visit.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EDelve into the mysteries of Stonehenge before the crowds arrive as your guide leads you through the historic site, including the Stone Circle and Visitor Centre.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EWander through the enchanting city of Bath as you view the Georgian-style architecture of the UNESCO-listed city's landmarks like the Bath Abbey.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EWitness the grandeur of the largest inhabited castle in the world, the Windsor Castle, and gain entry inside to the State Apartments and other rooms.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
      "imageUrl": "https://cdn-imgix.headout.com/media/images/b538e9bd1315a42748d2bccbdb3d7fab-31398-london--stonehenge--windsor--and-bath-small-group-tour-07.jpg",
      "listingPrice": {
        "currencyCode": "GBP",
        "originalPrice": 182,
        "finalPrice": 182,
        "minimumPayablePrice": 182,
        "type": "PER_PERSON",
        "otherPricesExist": false,
        "bestDiscount": 0,
        "cashbackValue": 0,
        "cashbackType": "PERCENTAGE",
        "tourId": 65770
      },
      "schedule": null,
      "averageRating": 3.4,
      "promotionLabel": "",
      "tourType": "TOUR",
      "shortSummary": "\u003Cp\u003EDiscover England's historic marvels on a day-long guided tour with transfers from London, covering Stonehenge, Bath's Roman relics, and the regal Windsor Castle.\u003C/p\u003E",
      "reschedulePolicy": {
        "reschedulable": false,
        "reschedulableUpTo": null
      },
      "urlSlugs": {
        "EN": "/london-to-stonehenge-tours/from-london-stonehenge-windsor-and-bath-small-group-day-trip-e-31398/",
        "ES": "/es/tour-a-stonehenge-desde-londres/desde-londres-excursion-de-un-dia-en-grupo-pequeno-a-stonehenge-windsor-y-bath-e-31398/",
        "FR": "/fr/escapades-londres-stonehenge/depuis-londres-excursion-dune-journee-en-petit-groupe-a-stonehenge-windsor-et-bath-e-31398/",
        "IT": "/it/tour-da-londra-a-stonehenge/da-londra-stonehenge-windsor-e-bath-gita-di-un-giorno-in-piccolo-gruppo-e-31398/",
        "DE": "/de/london-nach-stonehenge-touren/von-london-aus-stonehenge-windsor-und-bath-tagesausflug-in-einer-kleingruppe-e-31398/",
        "PT": "/pt/tours-londres-a-stonehenge/de-londres-tour-de-um-dia-em-grupo-pequeno-a-stonehenge-windsor-e-bath-e-31398/",
        "NL": "/nl/stonehenge-tours-vanuit-londen/dagtour-voor-kleine-groep-vanuit-londen-naar-stonehenge-windsor-en-bath-e-31398/",
        "PL": "/pl/london-to-stonehenge-tours/from-london-stonehenge-windsor-and-bath-small-group-day-trip-e-31398/",
        "KO": "/ko/london-to-stonehenge-tours/from-london-stonehenge-windsor-and-bath-small-group-day-trip-e-31398/",
        "JA": "/ja/london-to-stonehenge-tours/from-london-stonehenge-windsor-and-bath-small-group-day-trip-e-31398/",
        "ZH_HANS": "/zh-hans/london-to-stonehenge-tours/from-london-stonehenge-windsor-and-bath-small-group-day-trip-e-31398/",
        "DA": "/da/ture-fra-london-til-stonehenge/fra-london-stonehenge-windsor-og-bath-dagsudflugt-i-lille-gruppe-e-31398/",
        "NO": "/no/turer-fra-london-til-stonehenge/fra-london-stonehenge-windsor-og-bath-dagstur-i-liten-gruppe-e-31398/",
        "RO": "/ro/tururi-de-la-londra-la-stonehenge/de-la-londra-stonehenge-windsor-si-bath-excursie-de-o-zi-in-grup-mic-e-31398/",
        "RU": "/ru/london-to-stonehenge-tours/from-london-stonehenge-windsor-and-bath-small-group-day-trip-e-31398/",
        "SV": "/sv/turer-fran-london-till-stonehenge/fran-london-dagsutflykt-med-liten-grupp-till-stonehenge-windsor-och-bath-e-31398/",
        "TR": "/tr/london-to-stonehenge-tours/from-london-stonehenge-windsor-and-bath-small-group-day-trip-e-31398/"
      },
      "distance": null,
      "exclusions": "\u003Cul\u003E\n\u003Cli\u003EEntry to the Roman Baths\u003C/li\u003E\n\u003C/ul\u003E",
      "cityCode": "LONDON",
      "language": "EN",
      "validity": null,
      "combo": false,
      "multiVariant": false,
      "allVariantOpenDated": false,
      "descriptors": [
        {
          "code": "FREE_CANCELLATION",
          "name": "Free Cancellation",
          "displayName": "Free cancellation",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/cancellation.svg",
          "description": "Free cancellation up to 24 hours before the start of your experience",
          "type": "STANDARD"
        },
        {
          "code": "BOOK_NOW_PAY_LATER",
          "name": "Book now, pay later",
          "displayName": "Book now, pay later",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/bnpl.svg",
          "description": "Book now without paying anything. Cancel for free if your plans change.",
          "type": "STANDARD"
        },
        {
          "code": "TRANSFERS",
          "name": "Transfers available",
          "displayName": "Transfers available",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/transfers.svg",
          "description": "Enjoy comfortable roundtrip transfers",
          "type": "INCLUSION_BASED"
        },
        {
          "code": "GUIDED_TOUR",
          "name": "Live Tour Guide",
          "displayName": "Guided tour",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/guidedtours.svg",
          "description": "Expert local tour guide",
          "type": "INCLUSION_BASED"
        },
        {
          "code": "HOTEL_PICKUP",
          "name": "Pickup Available",
          "displayName": "Pickup available",
          "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/hotel.svg",
          "description": "Convenient pick-up at your location",
          "type": "INCLUSION_BASED"
        }
      ],
      "topReviews": [
        {
          "tourId": 65770,
          "bookingId": 26097194,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14675640,
          "nonCustomerName": "Christine Caron",
          "reviewerImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocIlY8Zm6JucpzTss-R1zcPH9EzCW1Zeb6pnAchjqPeeKhaiuQ=s96-c",
          "rating": 4,
          "content": "Nous sommes partis avec un peu de retard, ce qui nous a d'abord inquiété, car il était précisé de se présenter à l'heure. Malgré cela, les endroits visités étaient incroyables! Coup de cœur pour le château de Windsor! Nous étions convaincues que l'excursion était offerte en français...Guide très sympathique!",
          "reviewTime": 1758997350000,
          "reviewMedias": [],
          "translatedContent": "We left a little late, which worried us at first, as it was specified that we should arrive on time. Despite this, the places we visited were incredible! Our favorite was Windsor Castle! We were convinced that the tour was in French... Very friendly guide!",
          "useTranslatedContent": true,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "FR",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 65770,
          "bookingId": 25959763,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14472952,
          "nonCustomerName": "Mildred Diaz",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Yes, it was amazing. The tour guys was fantastic and very professional ",
          "reviewTime": 1753046834000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "GROUP",
            "localisedLabel": "Group"
          }
        },
        {
          "tourId": 65770,
          "bookingId": 25315943,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14462485,
          "nonCustomerName": "Cornelia Gossage",
          "reviewerImgUrl": null,
          "rating": 5,
          "content": "Loved our guide, Ed. We was beyond knowledgable and funny.",
          "reviewTime": 1752608230000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 65770,
          "bookingId": 25842899,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14485925,
          "nonCustomerName": "Margarita Gili Alou",
          "reviewerImgUrl": null,
          "rating": 1,
          "content": "Esperaba una visita con entrada al circulo interior de Stonehenge.\nEl guia tardo en llegar y nos dio inseguridad, llegó a las 7,35 en lugar de llegar 7,15 que era la hora acirdada para el encuentro.\n\nEstuvimos 2 horas en windsor y 45 minutos en Stonehenge.\nPor lo demas el guia muy anable y el conductor condujo muy bien.\n\n",
          "reviewTime": 1753544857000,
          "reviewMedias": [],
          "translatedContent": "I was expecting a visit with entrance to the inner circle of Stonehenge.\nThe guide was late in arriving and gave us insecurity, he arrived at 7.35 instead of arriving at 7.15 which was the scheduled time for the meeting.\n\nWe spent 2 hours in Windsor and 45 minutes in Stonehenge.\nOtherwise the guide was very nice and the driver drove very well.\n\n",
          "useTranslatedContent": true,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "ES",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        },
        {
          "tourId": 65770,
          "bookingId": 25204770,
          "customerUserId": 0,
          "title": null,
          "source": "CUSTOMER",
          "id": 14475877,
          "nonCustomerName": "Oxana Kiforenko",
          "reviewerImgUrl": null,
          "rating": 2,
          "content": "Stonehenge was lovely, but our time at Bath and Windsor was very limited. Due to some traffic, we only got half an hour at Bath, and less than expected at Windsor. Plus, our tour guide was incredibly rude to my daughter, who was just translating the tour to me very quietly because I don't understand English well. ",
          "reviewTime": 1753260951000,
          "reviewMedias": [],
          "translatedContent": null,
          "useTranslatedContent": false,
          "nonCustomerCountryCode": null,
          "sourceLanguage": "EN",
          "nonCustomerCountryName": null,
          "personaLabel": {
            "reviewPersonaLabel": "COUPLE",
            "localisedLabel": "Couple"
          }
        }
      ],
      "cityDisplayName": "London",
      "microBrandsDescriptor": "",
      "listingDate": "2025-03-01",
      "experienceVideo": null,
      "experienceItineraryIds": [698],
      "reviewsDetails": {
        "reviewsCount": 5,
        "ratingsCount": 5,
        "averageRating": 3.4,
        "ratingsSplit": {
          "1": 1,
          "2": 1,
          "3": 0,
          "4": 1,
          "5": 2
        },
        "showRatings": false,
        "displayConfig": {
          "exposeRatings": false,
          "exposeSorting": true,
          "exposeFiltering": true,
          "exposeLoadMore": true
        },
        "reviewCountries": {
          "countries": [
            {
              "code": "US",
              "displayName": "United States"
            },
            {
              "code": "CA",
              "displayName": "Canada"
            }
          ],
          "count": 2
        }
      },
      "tourGroupUrl": "/london-to-stonehenge-tours/from-london-stonehenge-windsor-and-bath-small-group-day-trip-e-31398/",
      "minDuration": 39600000,
      "maxDuration": 39600000,
      "microBrandsHighlight": "###### Highlights\n\n**Get personalized attention from your expert guide on this small-group tour**\n\n- **Day out** to Stonehenge, Bath, and Windsor from London on a completely planned, full-day guided tour with round-trip executive mini-coach transfers.\n- **You'll get** an expert English-speaking guide, a small, intimate group of maximum 16 people, and entry tickets to Stonehenge and Windsor Castle.\n- **Stonehenge:** Explore the ancient site with your guide, including the Stone Circle and the Visitor Centre, in the morning before the crowds arrive.\n- **Bath:** Stroll past Bath Abbey and Pulteney Bridge at the UNESCO-listed city of Bath, and purchase tickets to enter the 2,000 year-old Roman Baths.\n- **Windsor:** Visit Windsor and explore the largest and oldest occupied castle in the world, the Windsor Castle, with access to the State Apartments, and St. George's Chapel.\n\n\n\n\n\n\n\n\n###### Need to know\n\n- Windsor Castle is a working Royal residence, and as such can be subject to last-minute closures.\n- St George’s Chapel is closed to visitors on Sundays as services are held throughout the day so you will not be able to enter the chapel. Access to St George’s Chapel may be limited on busy days and during service.\n- On Tuesday & Wednesday, Windsor Castle does not open. On these days we will still visit Windsor Town but entry to the Castle will not be possible. You will get to enter the Roman Baths instead.\n- From 1st November to 29th February, the tour will run in reverse with the first stop being Windsor and the last stop Bath.\n- You are welcome to bring your own snacks and drinks onboard the coach. However, we kindly ask that you avoid bringing anything that has a strong smell, and ensure any hot drinks have a secure lid.\n- Safety is a priority so this experience is restricted for guests under the age of 3 years.\n"
    }
  ],
  "nextUrl": null,
  "prevUrl": null,
  "total": 9,
  "nextOffset": null
}


### Experience API  
GET https://api.headout.com/api/v6/tour-groups/{experienceId}
Example: https://api.headout.com/api/v6/tour-groups/6274

Sample response:
{
  "id": 6274,
  "name": "From London: Stonehenge Half-Day Trip",
  "flowType": "NORMAL",
  "neighbourhood": "",
  "url": "/tour/6274/united-kingdom/london/stonehenge-half-day-tour-from-london-with-audio-guide",
  "city": {
    "code": "LONDON",
    "displayName": "London",
    "country": {
      "code": "GB",
      "displayName": "United Kingdom",
      "currency": {
        "code": "GBP",
        "currencyName": "British Pound",
        "symbol": "GBP",
        "localSymbol": "£",
        "precision": 2,
        "currency": "GBP"
      }
    },
    "imageUrl": null,
    "timeZone": "Europe/London"
  },
  "imageUploads": [
    {
      "url": "https://cdn-imgix.headout.com/media/images/571ae4b6fabc4dd99ec5ca3f1fdbb5c5-stonehenge-03.jpg",
      "alt": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
      "keyword": "Tourists exploring Stonehenge, a unique day trip from London, featuring ancient stone structures and green fields under a clear sky",
      "title": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
      "credit": "Pawel Pajor"
    },
    {
      "url": "https://cdn-imgix.headout.com/media/images/35305d6c96fe679c4a4de98f0607bb91-6274-london-stonehenge-entry-tickets-with-transfers-from-london-02.jpg",
      "alt": "Person reading a brochure on a bus during a Stonehenge and Windsor tour from London.",
      "keyword": "From London: Stonehenge & Windsor with Exclusive Walk Between The Stones Experience",
      "title": "Person reading a brochure on a bus during a Stonehenge and Windsor tour from London.",
      "credit": "Evan Evans_API"
    },
    {
      "url": "https://cdn-imgix.headout.com/media/images/4c1bdd8e35652c76777a0ef8829b80dd-6274-london-stonehenge-entry-tickets-with-transfers-from-london-03.jpg",
      "alt": "Stonehenge aerial view with tourists on a path, part of a half-day tour from London.",
      "keyword": "Stonehenge Half Day Tour from London with Audio Guide",
      "title": "Stonehenge aerial view with tourists on a path, part of a half-day tour from London.",
      "credit": "Golden Tours"
    },
    {
      "url": "https://cdn-imgix.headout.com/media/images/2bb3d5c05b2b8fecdec275ee1d191f5a-6269-salisbury-stonehenge-entry-tickets-05.jpg",
      "alt": "Tourist using audio guide in a lush green park setting.",
      "keyword": "tourist using audio guide",
      "title": "Tourist using audio guide in a lush green park setting.",
      "credit": "hin255"
    },
    {
      "url": "https://cdn-imgix.headout.com/media/images/0efd1793f2c7a115b1b312bc86c6e78e-6274-london-stonehenge-entry-tickets-with-transfers-from-london-05.jpg",
      "alt": "Visitors pulling a large stone replica at Stonehenge exhibit during half-day tour from London.",
      "keyword": "Stonehenge Half Day Tour from London with Audio Guide",
      "title": "Visitors pulling a large stone replica at Stonehenge exhibit during half-day tour from London.",
      "credit": "Evan Evans_API"
    },
    {
      "url": "https://cdn-imgix.headout.com/media/images/7300c80c3c066b4592ab54aa927db019-stonehenge-02.jpg",
      "alt": "Reconstructed Neolithic huts near Stonehenge, England.",
      "keyword": "Stonehenge Entry Tickets",
      "title": "Reconstructed Neolithic huts near Stonehenge, England.",
      "credit": "vasildakov"
    },
    {
      "url": "https://cdn-imgix.headout.com/media/images/b6668815d69a004d58a75a720f5ce0ec-6274-london-stonehenge-entry-tickets-with-transfers-from-london-07.jpg",
      "alt": "Riverside view with historic buildings and boats near London.",
      "keyword": "Stonehenge Half Day Tour from London with Audio Guide",
      "title": "Riverside view with historic buildings and boats near London.",
      "credit": "dbrnjhrj"
    },
    {
      "url": "https://cdn-imgix.headout.com/media/images/1ce4159465dfc838c447783ec7a15ad2-6274-london-stonehenge-entry-tickets-with-transfers-from-london-08.jpg",
      "alt": "Tourists using audio guides at the Roman Baths in Bath, part of a day trip from London.",
      "keyword": "Tourists exploring Stonehenge, a famous prehistoric monument, on a day trip from London, which also includes visits to Windsor Castle, Bath & Roman Baths",
      "title": "Tourists using audio guides at the Roman Baths in Bath, part of a day trip from London.",
      "credit": "Golden Tours"
    },
    {
      "url": "https://cdn-imgix.headout.com/media/images/05519e8dceeeb1079d14a4ad632051b2-27282-london-windsor-day-trip-with-stonehenge--inner-circle--access-05.jpg",
      "alt": "Visitor exploring Stonehenge inner circle with a group, Wiltshire, England.",
      "keyword": "STONEHENGE 'INNER CIRCLE ACCESS' & WINDSOR",
      "title": "Visitor exploring Stonehenge inner circle with a group, Wiltshire, England.",
      "credit": "Midjourney"
    }
  ],
  "experienceVideo": null,
  "media": {
    "productImages": [
      {
        "url": "https://cdn-imgix.headout.com/media/images/571ae4b6fabc4dd99ec5ca3f1fdbb5c5-stonehenge-03.jpg",
        "altText": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
        "description": "Tourists at Stonehenge, viewing ancient stone structures on a day trip from London.",
        "credit": "Pawel Pajor"
      },
      {
        "url": "https://cdn-imgix.headout.com/media/images/35305d6c96fe679c4a4de98f0607bb91-6274-london-stonehenge-entry-tickets-with-transfers-from-london-02.jpg",
        "altText": "Person reading a brochure on a bus during a Stonehenge and Windsor tour from London.",
        "description": "Person reading a brochure on a bus during a Stonehenge and Windsor tour from London.",
        "credit": "Evan Evans_API"
      },
      {
        "url": "https://cdn-imgix.headout.com/media/images/4c1bdd8e35652c76777a0ef8829b80dd-6274-london-stonehenge-entry-tickets-with-transfers-from-london-03.jpg",
        "altText": "Stonehenge aerial view with tourists on a path, part of a half-day tour from London.",
        "description": "Stonehenge aerial view with tourists on a path, part of a half-day tour from London.",
        "credit": "Golden Tours"
      },
      {
        "url": "https://cdn-imgix.headout.com/media/images/2bb3d5c05b2b8fecdec275ee1d191f5a-6269-salisbury-stonehenge-entry-tickets-05.jpg",
        "altText": "Tourist using audio guide in a lush green park setting.",
        "description": "Tourist using audio guide in a lush green park setting.",
        "credit": "hin255"
      },
      {
        "url": "https://cdn-imgix.headout.com/media/images/0efd1793f2c7a115b1b312bc86c6e78e-6274-london-stonehenge-entry-tickets-with-transfers-from-london-05.jpg",
        "altText": "Visitors pulling a large stone replica at Stonehenge exhibit during half-day tour from London.",
        "description": "Visitors pulling a large stone replica at Stonehenge exhibit during half-day tour from London.",
        "credit": "Evan Evans_API"
      },
      {
        "url": "https://cdn-imgix.headout.com/media/images/7300c80c3c066b4592ab54aa927db019-stonehenge-02.jpg",
        "altText": "Reconstructed Neolithic huts near Stonehenge, England.",
        "description": "Reconstructed Neolithic huts near Stonehenge, England.",
        "credit": "vasildakov"
      },
      {
        "url": "https://cdn-imgix.headout.com/media/images/b6668815d69a004d58a75a720f5ce0ec-6274-london-stonehenge-entry-tickets-with-transfers-from-london-07.jpg",
        "altText": "Riverside view with historic buildings and boats near London.",
        "description": "Riverside view with historic buildings and boats near London.",
        "credit": "dbrnjhrj"
      },
      {
        "url": "https://cdn-imgix.headout.com/media/images/1ce4159465dfc838c447783ec7a15ad2-6274-london-stonehenge-entry-tickets-with-transfers-from-london-08.jpg",
        "altText": "Tourists using audio guides at the Roman Baths in Bath, part of a day trip from London.",
        "description": "Tourists using audio guides at the Roman Baths in Bath, part of a day trip from London.",
        "credit": "Golden Tours"
      },
      {
        "url": "https://cdn-imgix.headout.com/media/images/05519e8dceeeb1079d14a4ad632051b2-27282-london-windsor-day-trip-with-stonehenge--inner-circle--access-05.jpg",
        "altText": "Visitor exploring Stonehenge inner circle with a group, Wiltshire, England.",
        "description": "Visitor exploring Stonehenge inner circle with a group, Wiltshire, England.",
        "credit": "Midjourney"
      }
    ],
    "safetyImages": [],
    "safetyVideos": []
  },
  "displaySeatsLeftDisabled": false,
  "displayTags": [],
  "allTags": [
    "ESCAPE",
    "RECOMMENDED6",
    "SAFETY_CLEANED_EQUIPMENTS",
    "SAFETY_CONTACTLESS",
    "SAFETY_HANDWASH",
    "SAFETY_MASK_GUEST",
    "SAFETY_MASK_STAFF",
    "SAFETY_RESTRICTED_CAPACITY",
    "SAFETY_SOCIAL_DISTANCING",
    "SAFETY_TRAINED_STAFF",
    "SCHEDULE-300-DAYS",
    "STONEHENGE",
    "STONEHENGE2"
  ],
  "promotionLabel": "",
  "metaTitle": "Stonehenge Half-Day Tour from London | Audio Guide",
  "metaDescription": "Explore Stonehenge at your leisure with this ticket & round-trip transfers in an AC coach from Central London. Book on Headout & get 24/7 support.",
  "summary": "",
  "highlights": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EEnjoy round-trip transfers to Stonehenge in a comfortable AC coach from Central London that is easily accessible by public transport.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EGet over two hours to explore Stonehenge, a UNESCO World Heritage Site, Salisbury's landscape, as well as the exhibition at the Visitor Center.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAdmire a display of over 250 ancient artefacts, including tools, pottery, and jewellery that are thousands of years old, with a multilingual audio guide included.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
  "faq": "\u003Ch2\u003EKnow before you go\u003C/h2\u003E\n\u003Ch3\u003EWhat’s not allowed\u003C/h3\u003E\n\u003Cul\u003E\n\u003Cli\u003EYou will not be allowed to enter the Stonehenge Circle itself. This is due to the restoration attempts and the relative instability of the structure. Your Stonehenge tickets allow you to access about 10 meters of the monument.\u003C/li\u003E\n\u003C/ul\u003E\n\u003Ch3\u003EAccessibility\u003C/h3\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003E​​This experience is wheelchair and pram/stroller accessible.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EYour guide dogs are welcome at the venue.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E\n\u003Ch3\u003EAdditional information\u003C/h3\u003E\n\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EThese tours run daily from April to October and on Tuesdays, Thursdays, Saturdays, and Sundays from November to March.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EEnglish Heritage and National Trust England members can enjoy free admission to Stonehenge.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
  "validity": "",
  "cancellation": null,
  "adhoc": null,
  "shortSummary": "",
  "ticketDeliveryInfo": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EYour voucher will be emailed to you instantly.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EDisplay the voucher on your mobile phone with a valid photo ID at the redemption point. Students must show a valid student ID.\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EPlease arrive at the redemption point 15 minutes before the scheduled time of your experience to avoid any delays.\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E\n\u003Ch3\u003ETicket redemption point\u003C/h3\u003E\n\u003Cul\u003E\n\u003Cli\u003EPlease check your final voucher for the redemption point details and specific instructions.\u003C/li\u003E\n\u003C/ul\u003E",
  "confirmedTicketInfo": "",
  "inclusions": "\u003Cul\u003E\n\u003Cli\u003E\n\u003Cp\u003EHalf-day tour of Stonehenge\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003ERound-trip AC coach transfers\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EBoarding from central London\u003C/p\u003E\n\u003C/li\u003E\n\u003Cli\u003E\n\u003Cp\u003EAudio guide in English, German, Spanish, French, Dutch, Italian, Ukrainian, Mandarin, Russian, Polish, Japanese, Korean, and Brazilian Portuguese\u003C/p\u003E\n\u003C/li\u003E\n\u003C/ul\u003E",
  "exclusions": "\u003Cul\u003E\n\u003Cli\u003EGuide\u003C/li\u003E\n\u003C/ul\u003E",
  "additionalInfo": null,
  "hasMobileTicket": true,
  "hasHotelPickup": false,
  "hasInstantConfirmation": true,
  "hasSkipTheLine": false,
  "hasFreeCancellation": true,
  "flexiDate": false,
  "startLocation": {
    "latitude": 51.5072174072266,
    "longitude": -0.127586200833321,
    "addressLine1": "London",
    "addressLine2": "",
    "cityName": "London",
    "postalCode": "",
    "state": "",
    "countryCode": "United Kingdom"
  },
  "endLocation": {
    "latitude": 51.5072174072266,
    "longitude": -0.127586200833321,
    "addressLine1": "London",
    "addressLine2": "",
    "cityName": "London",
    "postalCode": "",
    "state": "",
    "countryCode": "United Kingdom"
  },
  "minDuration": 21600000,
  "maxDuration": 21600000,
  "distance": null,
  "tourType": "TOUR",
  "descriptors": [
    {
      "code": "FREE_CANCELLATION",
      "name": "Free Cancellation",
      "displayName": "Free cancellation",
      "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/cancellation.svg",
      "description": "Free cancellation up to 24 hours before the start of your experience",
      "type": "STANDARD"
    },
    {
      "code": "BOOK_NOW_PAY_LATER",
      "name": "Book now, pay later",
      "displayName": "Book now, pay later",
      "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/bnpl.svg",
      "description": "Book now without paying anything. Cancel for free if your plans change.",
      "type": "STANDARD"
    },
    {
      "code": "TRANSFERS",
      "name": "Transfers available",
      "displayName": "Transfers available",
      "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/transfers.svg",
      "description": "Enjoy comfortable roundtrip transfers",
      "type": "INCLUSION_BASED"
    },
    {
      "code": "AUDIO_GUIDE",
      "name": "Multilingual Audio Guide",
      "displayName": "Audio guide",
      "iconUrl": "https://cdn-imgix.headout.com/assets/svg/descriptors/headphones.svg",
      "description": "Access to multilingual audio guide",
      "type": "INCLUSION_BASED"
    }
  ],
  "primaryCollection": {
    "id": 212,
    "name": "London To Stonehenge Tours",
    "displayName": "London To Stonehenge Tours",
    "tags": [
      "stonehenge",
      "global-top-collection140"
    ],
    "svg": null,
    "imageUrl": "https://cdn-imgix.headout.com/media/images/6ab4570c799bbe4d12605ff6188b07fa-212-london-01-london-%7C-day-trips-from-london_stonehenge-tours-01.jpg"
  },
  "collectionsFromRoot": [
    {
      "id": 212,
      "name": "London To Stonehenge Tours",
      "displayName": "London To Stonehenge Tours",
      "cityCode": "LONDON",
      "urlSlug": "/london-to-stonehenge-tours-c-212/",
      "heroImageUrl": "https://cdn-imgix.headout.com/media/images/6ab4570c799bbe4d12605ff6188b07fa-212-london-01-london-%7C-day-trips-from-london_stonehenge-tours-01.jpg",
      "cardImageUrl": "https://cdn-imgix.headout.com/media/images/7b4d8cf54917432907457bff5fd52370-212-london-01-london-%7C-day-trips-from-london_stonehenge-tours-02.jpg",
      "title": "Day Trip from London To Stonehenge | Best Tour Options",
      "heading": "London To Stonehenge Tours",
      "subtext": "Uncover the mystery of Stonehenge, the 5,000-year-old UNESCO site, on a guided day trip from London.",
      "longFormDescription": null,
      "metaDescription": "Discover the ancient Stonehenge on a day trip from London. Enjoy free cancellation, flexible duration, and secure mobile tickets. Book your tour today!",
      "primaryParentId": 212,
      "super": true,
      "experienceCount": null,
      "tags": [
        "stonehenge",
        "global-top-collection140"
      ],
      "parentIds": [276],
      "childrenIds": [],
      "canonicalUrl": null,
      "noIndex": false,
      "supportedLanguages": [
        "EN",
        "ES",
        "FR",
        "IT",
        "DE",
        "PT",
        "NL",
        "PL",
        "DA",
        "NO",
        "RO",
        "RU",
        "SV",
        "TR"
      ],
      "language": "EN",
      "urlSlugs": {
        "EN": "/london-to-stonehenge-tours-c-212/",
        "ES": "/es/tour-a-stonehenge-desde-londres-c-212/",
        "FR": "/fr/escapades-londres-stonehenge-c-212/",
        "IT": "/it/tour-da-londra-a-stonehenge-c-212/",
        "DE": "/de/london-nach-stonehenge-touren-c-212/",
        "PT": "/pt/tours-londres-a-stonehenge-c-212/",
        "NL": "/nl/stonehenge-tours-vanuit-londen-c-212/",
        "PL": "/pl/london-to-stonehenge-tours-c-212/",
        "KO": "/ko/london-to-stonehenge-tours-c-212/",
        "JA": "/ja/london-to-stonehenge-tours-c-212/",
        "ZH_HANS": "/zh-hans/london-to-stonehenge-tours-c-212/",
        "DA": "/da/ture-fra-london-til-stonehenge-c-212/",
        "NO": "/no/turer-fra-london-til-stonehenge-c-212/",
        "RO": "/ro/tururi-de-la-londra-la-stonehenge-c-212/",
        "RU": "/ru/london-to-stonehenge-tours-c-212/",
        "SV": "/sv/turer-fran-london-till-stonehenge-c-212/",
        "TR": "/tr/london-to-stonehenge-tours-c-212/"
      },
      "startingPrice": null,
      "parentCollections": null,
      "active": true,
      "ratingsInfo": null,
      "collectionVideo": null,
      "videos": [],
      "poiId": null,
      "heroMedia": null,
      "cardMedia": null,
      "secondaryCities": [],
      "microBrandInfo": {
        "descriptors": null,
        "highlights": null,
        "supportedLanguages": [],
        "metaTitle": "",
        "metaDescription": ""
      },
      "useOldDesign": false,
      "personaAffinityTags": null,
      "distanceInKms": null,
      "pageTitle": "London To Stonehenge Tours",
      "category": null,
      "subcategory": null
    }
  ],
  "primaryCategory": {
    "id": 2,
    "name": "Tours",
    "rank": 2,
    "displayName": "Tours",
    "heading": "London Tours",
    "metaTitle": "Plan and Book Top-rated, Exclusive Tours in London | Headout",
    "metaDescription": "Book exclusive tours of museums, attractions, historical sites, and more in London. Get 10% additional cashback, flexible cancelation, and 24/7 support on each booking.",
    "noIndex": false,
    "canonicalUrl": null,
    "urlSlugs": {
      "EN": "/tours-london-ca-2~7426/",
      "ES": "/es/tours-london-ca-2~7426/",
      "FR": "/fr/visites-london-ca-2~7426/",
      "IT": "/it/tour-london-ca-2~7426/",
      "DE": "/de/touren-london-ca-2~7426/",
      "PT": "/pt/tours-london-ca-2~7426/",
      "NL": "/nl/tours-london-ca-2~7426/",
      "PL": "/pl/tours-london-ca-2~7426/",
      "KO": "/ko/tours-london-ca-2~7426/",
      "JA": "/ja/tours-london-ca-2~7426/",
      "ZH_HANS": "/zh-hans/tours-london-ca-2~7426/",
      "DA": "/da/ture-london-ca-2~7426/",
      "NO": "/no/turer-london-ca-2~7426/",
      "RO": "/ro/tururi-london-ca-2~7426/",
      "RU": "/ru/tours-london-ca-2~7426/",
      "SV": "/sv/rundturer-london-ca-2~7426/",
      "TR": "/tr/tours-london-ca-2~7426/"
    },
    "medias": [],
    "microBrandInfo": {
      "descriptors": null,
      "highlights": null,
      "supportedLanguages": [],
      "metaTitle": null,
      "metaDescription": null
    },
    "ratingsInfo": null
  },
  "primarySubCategory": {
    "id": 1143,
    "name": "Day trips",
    "categoryId": 2,
    "rank": 19,
    "displayName": "Day Trips",
    "heading": "Day Trips From London",
    "metaTitle": "Day Trips from London | Visit Stonehenge, Bath, Warwick & More",
    "metaDescription": "Venture away from London and explore popular destinations such as Stonehenge, Canterbury, Oxford. Plan your day trip from London now!",
    "noIndex": false,
    "canonicalUrl": null,
    "urlSlugs": {
      "EN": "/day-trips-london-sc-1143~7426/",
      "ES": "/es/tours-de-un-dia-london-sc-1143~7426/",
      "FR": "/fr/excursions-dune-journee-london-sc-1143~7426/",
      "IT": "/it/day-trips-london-sc-1143~7426/",
      "DE": "/de/tagesausfluge-london-sc-1143~7426/",
      "PT": "/pt/excursoes-de-um-dia-london-sc-1143~7426/",
      "NL": "/nl/day-trips-london-sc-1143~7426/",
      "PL": "/pl/day-trips-london-sc-1143~7426/",
      "KO": "/ko/day-trips-london-sc-1143~7426/",
      "JA": "/ja/day-trips-london-sc-1143~7426/",
      "ZH_HANS": "/zh-hans/day-trips-london-sc-1143~7426/",
      "DA": "/da/day-trips-london-sc-1143~7426/",
      "NO": "/no/day-trips-london-sc-1143~7426/",
      "RO": "/ro/excursii-de-o-zi-london-sc-1143~7426/",
      "RU": "/ru/day-trips-london-sc-1143~7426/",
      "SV": "/sv/day-trips-london-sc-1143~7426/",
      "TR": "/tr/day-trips-london-sc-1143~7426/"
    },
    "medias": [
      {
        "url": "https://cdn-imgix.headout.com/media/images/78e4cdec19e98dc1239e6ab76ca41b00-SubCategory-Day-Trips.jpg",
        "type": "IMAGE",
        "metadata": {
          "altText": "Tourists exploring a historic street with a guide pointing out landmarks.",
          "height": 1000,
          "width": 1600,
          "videoDuration": null,
          "uploadDate": "2023-09-01",
          "filename": "Subcategory Global - Day Trips",
          "fileSize": 631.25
        },
        "info": {
          "sourceType": "SOURCED",
          "sourceUrl": "https://stock.adobe.com/in/images/tour-guide-in-sunglasses-pointing-with-hand-during-excursion-with-interracial-tourists-on-andrews-descent-in-kyiv/580769408",
          "credit": "LIGHTFIELD STUDIOS",
          "filename": "Subcategory Global - Day Trips",
          "fileSize": 631.25
        }
      }
    ],
    "ratingsInfo": {
      "ratingsCount": 82176,
      "averageRating": 4.5,
      "showRatings": true
    },
    "microBrandInfo": {
      "descriptors": null,
      "highlights": null,
      "supportedLanguages": [],
      "metaTitle": null,
      "metaDescription": ""
    }
  },
  "microBrandsDescriptor": "",
  "microBrandsHighlight": "###### Highlights\n\n**Perfect for those short on time, visit Stonehenge with round-trip transfers from Central London.**\r\n\n- **Day out to** Stonehenge with round-trip transfers from a conveniently located departure point in Central London on an exclusive AC coach.\r\n- **You’ll get** a half-day convenient trip in a comfortable AC coach in Central London and a multilingual audio guide in 13 languages.\r\n- **Stonehenge:** Admire this UNESCO World Heritage Site as well as the Salisbury landscape with over 2 hours of free time.\r\n- **Visitor Center:** See over 250 ancient items excavated on this site that are thousands of years old, from tools and pottery to jewellery.\n###### Need to know\n\n**What’s not allowed**\r\n\r\n\n- You will not be allowed to enter the Stonehenge Circle itself. This is due to the restoration attempts and the relative instability of the structure. Your Stonehenge tickets allow you to access about 10 meters of the monument.\r\n\n\r\n**Accessibility**\r\n\r\n\n- ​​This experience is wheelchair and pram/stroller accessible.\r\n- Your guide dogs are welcome at the venue.\r\n\n\r\n**Additional information**\r\n\r\n\n- These tours run daily from April to October and on Tuesdays, Thursdays, Saturdays, and Sundays from November to March.\r\n- English Heritage and National Trust England members can enjoy free admission to Stonehenge.",
  "microBrandSupportedLanguages": [
    "EN",
    "ES",
    "FR",
    "IT",
    "DE",
    "PT",
    "NL",
    "PL",
    "DA",
    "NO",
    "RO",
    "RU",
    "SV",
    "TR"
  ],
  "microbrandInfo": {
    "descriptors": "",
    "highlights": "###### Highlights\n\n**Perfect for those short on time, visit Stonehenge with round-trip transfers from Central London.**\r\n\n- **Day out to** Stonehenge with round-trip transfers from a conveniently located departure point in Central London on an exclusive AC coach.\r\n- **You’ll get** a half-day convenient trip in a comfortable AC coach in Central London and a multilingual audio guide in 13 languages.\r\n- **Stonehenge:** Admire this UNESCO World Heritage Site as well as the Salisbury landscape with over 2 hours of free time.\r\n- **Visitor Center:** See over 250 ancient items excavated on this site that are thousands of years old, from tools and pottery to jewellery.\n###### Need to know\n\n**What’s not allowed**\r\n\r\n\n- You will not be allowed to enter the Stonehenge Circle itself. This is due to the restoration attempts and the relative instability of the structure. Your Stonehenge tickets allow you to access about 10 meters of the monument.\r\n\n\r\n**Accessibility**\r\n\r\n\n- ​​This experience is wheelchair and pram/stroller accessible.\r\n- Your guide dogs are welcome at the venue.\r\n\n\r\n**Additional information**\r\n\r\n\n- These tours run daily from April to October and on Tuesdays, Thursdays, Saturdays, and Sundays from November to March.\r\n- English Heritage and National Trust England members can enjoy free admission to Stonehenge.",
    "supportedLanguages": [
      "EN",
      "ES",
      "FR",
      "IT",
      "DE",
      "PT",
      "NL",
      "PL",
      "DA",
      "NO",
      "RO",
      "RU",
      "SV",
      "TR"
    ],
    "metaTitle": null,
    "metaDescription": null
  },
  "averageRating": 4.5,
  "reviewCount": 1320,
  "topReviews": [
    {
      "tourId": 11367,
      "bookingId": 29776134,
      "customerUserId": 0,
      "title": null,
      "source": "CUSTOMER",
      "id": 15123270,
      "nonCustomerName": "Aurora Orsini",
      "reviewerImgUrl": "https://lh3.googleusercontent.com/a/ACg8ocLVhJotWimevyPlsc0qgFtPVBu-tEQeNMTWYErVuMTQo2yZkhBl=s96-c",
      "rating": 5,
      "content": "Loved it! The staff was super kind and they also gave us snacks for the trip. Just be careful about the pickup destination that varies in the morning and in the afternoon!🥰",
      "reviewTime": 1770998747000,
      "reviewMedias": [],
      "translatedContent": null,
      "useTranslatedContent": false,
      "nonCustomerCountryCode": null,
      "sourceLanguage": "EN",
      "nonCustomerCountryName": null,
      "personaLabel": {
        "reviewPersonaLabel": "FAMILY",
        "localisedLabel": "Family"
      }
    },
    {
      "tourId": 11367,
      "bookingId": 29152202,
      "customerUserId": 0,
      "title": null,
      "source": "CUSTOMER",
      "id": 15096194,
      "nonCustomerName": "Juan Pedro Frere Affanni",
      "reviewerImgUrl": null,
      "rating": 5,
      "content": "Gorgeous trip, amazing views, great comments, advice and fun facts from our kind driver. ",
      "reviewTime": 1769932849000,
      "reviewMedias": [],
      "translatedContent": null,
      "useTranslatedContent": false,
      "nonCustomerCountryCode": null,
      "sourceLanguage": "EN",
      "nonCustomerCountryName": null,
      "personaLabel": {
        "reviewPersonaLabel": "SOLO",
        "localisedLabel": "Solo"
      }
    },
    {
      "tourId": 11367,
      "bookingId": 29183782,
      "customerUserId": 0,
      "title": null,
      "source": "CUSTOMER",
      "id": 15037254,
      "nonCustomerName": "Aravind Venkatesh",
      "reviewerImgUrl": null,
      "rating": 4,
      "content": "Kee, our driver cum guide shared interesting insights and stories to keep us engaged along the way. The coach was comfortable and the mini snack hamper provided was perfect for an early 8:30 am start. There was enough time to explore Stonehenge and the museum, so we didn't feel rushed. Once we reached, Kee gave clear instructions on things to do and departure time. I highly recommend this trip if you are looking for a half day trip from London to Stonehenge.",
      "reviewTime": 1767715763000,
      "reviewMedias": [
        {
          "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/29183782/3b06e25f84371cee2faf32f9a532e577-07466431ba2d",
          "fileType": "IMAGE",
          "fileSize": 4713499,
          "width": null,
          "height": null,
          "fileName": "IMG_2593.jpeg"
        }
      ],
      "translatedContent": null,
      "useTranslatedContent": false,
      "nonCustomerCountryCode": null,
      "sourceLanguage": "EN",
      "nonCustomerCountryName": null,
      "personaLabel": {
        "reviewPersonaLabel": "FAMILY",
        "localisedLabel": "Family"
      }
    },
    {
      "tourId": 11367,
      "bookingId": 29630581,
      "customerUserId": 0,
      "title": null,
      "source": "CUSTOMER",
      "id": 15067712,
      "nonCustomerName": "Maria Lujan del Rosario Bustos",
      "reviewerImgUrl": null,
      "rating": 5,
      "content": "Cómodo el bus, muy amable el chofer que explicaba todo el recorrido ,Armando. Te regalaban merienda. El lugar fué increíble ",
      "reviewTime": 1768811715000,
      "reviewMedias": [
        {
          "url": "https://cdn-imgix.headout.com/userCollectedReviewMediaFiles/29630581/e9390925f9a9beca4be1e6ab00ef6ba0-e10c822f51af",
          "fileType": "IMAGE",
          "fileSize": 1170974,
          "width": null,
          "height": null,
          "fileName": "1000505457.jpg"
        }
      ],
      "translatedContent": "The bus was comfortable, and the driver, Armando, was very friendly and explained the entire route. They gave us snacks. The place was incredible. ",
      "useTranslatedContent": true,
      "nonCustomerCountryCode": null,
      "sourceLanguage": "ES",
      "nonCustomerCountryName": null,
      "personaLabel": {
        "reviewPersonaLabel": "SOLO",
        "localisedLabel": "Solo"
      }
    },
    {
      "tourId": 11367,
      "bookingId": 29356372,
      "customerUserId": 0,
      "title": null,
      "source": "CUSTOMER",
      "id": 15037295,
      "nonCustomerName": "Giovanni Spagnuolo ",
      "reviewerImgUrl": null,
      "rating": 5,
      "content": "L'organizzazione è stata perfetta: il punto di incontro era facile da trovare. Il bus era moderno, molto pulito e dotato di ogni comfort, il che ha reso il viaggio estremamente piacevole e rilassante. \nUna volta arrivati a Stonehenge, tutto è stato gestito in modo fluido. Siamo scesi dal bus e in pochi minuti eravamo già pronti per la visita, evitando lunghe attese. Il sito è magico e l'organizzazione sul posto permette di godersi l'atmosfera senza fretta. Consiglio vivamente questo tour a chiunque voglia visitare Stonehenge in totale comodità!",
      "reviewTime": 1767715973000,
      "reviewMedias": [],
      "translatedContent": "The organization was perfect: the meeting point was easy to find. The bus was modern, very clean, and equipped with every comfort, which made the trip extremely pleasant and relaxing. \nOnce we arrived at Stonehenge, everything was handled smoothly. We got off the bus and within minutes we were ready for the tour, avoiding long waits. The site is magical and the organization on site allows you to enjoy the atmosphere without rushing. I highly recommend this tour to anyone who wants to visit Stonehenge in total comfort!",
      "useTranslatedContent": true,
      "nonCustomerCountryCode": null,
      "sourceLanguage": "IT",
      "nonCustomerCountryName": null,
      "personaLabel": {
        "reviewPersonaLabel": "FAMILY",
        "localisedLabel": "Family"
      }
    }
  ],
  "reviewsDetails": {
    "reviewsCount": 1320,
    "ratingsCount": 1320,
    "averageRating": 4.5,
    "ratingsSplit": {
      "1": 26,
      "2": 13,
      "3": 20,
      "4": 508,
      "5": 753
    },
    "showRatings": true,
    "displayConfig": {
      "exposeRatings": true,
      "exposeSorting": true,
      "exposeFiltering": true,
      "exposeLoadMore": true
    },
    "reviewCountries": {
      "countries": [
        {
          "code": "US",
          "displayName": "United States"
        },
        {
          "code": "IT",
          "displayName": "Italy"
        },
        {
          "code": "CL",
          "displayName": "Chile"
        },
        {
          "code": "ES",
          "displayName": "Spain"
        },
        {
          "code": "AR",
          "displayName": "Argentina"
        },
        {
          "code": "DE",
          "displayName": "Germany"
        },
        {
          "code": "FR",
          "displayName": "France"
        },
        {
          "code": "MX",
          "displayName": "Mexico"
        },
        {
          "code": "BR",
          "displayName": "Brazil"
        },
        {
          "code": "HR",
          "displayName": "Croatia"
        }
      ],
      "count": 36
    }
  },
  "listingPrice": {
    "currencyCode": "GBP",
    "originalPrice": 58.32,
    "finalPrice": 55.4,
    "minimumPayablePrice": 55.4,
    "type": "PER_PERSON",
    "otherPricesExist": true,
    "bestDiscount": 5,
    "cashbackValue": 0,
    "cashbackType": "PERCENTAGE",
    "groupSize": null,
    "extraCharges": 0,
    "isPricingInclusiveOfExtraCharges": false
  },
  "currency": {
    "code": "GBP",
    "currencyName": "British Pound",
    "symbol": "GBP",
    "localSymbol": "£",
    "precision": 2,
    "currency": "GBP"
  },
  "listingPricesInAllCurrencies": [],
  "callToAction": "",
  "canonicalUrl": null,
  "noIndex": false,
  "language": "EN",
  "supportedLanguages": [
    "EN",
    "ES",
    "FR",
    "IT",
    "DE",
    "PT",
    "NL",
    "PL",
    "DA",
    "NO",
    "RO",
    "RU",
    "SV",
    "TR"
  ],
  "contentMachineTranslated": false,
  "variants": [
    {
      "id": 11367,
      "name": "Stonehenge Half-day Tour",
      "productId": 6274,
      "ticketDeliveryInfo": null,
      "confirmedTicketInfo": null,
      "variantInfo": "- Half-day Tour of Stonehenge\n- Round-trip transfers from London\n- **Including entry tickets to Stonehenge**\n- Expert English-speaking guide\n- Multilingual audio guide available",
      "language": "EN",
      "listingPrice": {
        "currencyCode": "GBP",
        "originalPrice": 58.32,
        "finalPrice": 55.4,
        "minimumPayablePrice": 55.4,
        "type": "PER_PERSON",
        "otherPricesExist": true,
        "bestDiscount": 5,
        "cashbackValue": 0,
        "cashbackType": "PERCENTAGE",
        "groupSize": null,
        "extraCharges": 0,
        "isPricingInclusiveOfExtraCharges": false
      },
      "tours": [
        {
          "id": 11367,
          "name": "",
          "duration": 21600000,
          "inventoryType": "FIXED_START_FIXED_DURATION",
          "minPax": 1,
          "maxPax": 10,
          "cashbackValue": 0,
          "cashbackType": "PERCENTAGE",
          "userFields": [
            {
              "id": 36226,
              "tourId": 11367,
              "type": {
                "displayName": "Full Name",
                "dataType": "STRING",
                "regex": "\\s*[^\\s]+\\s+[^\\s]+.*",
                "minLength": 3,
                "maxLength": 80,
                "minValue": null,
                "maxValue": null,
                "errorMessage": "Please enter your full name",
                "name": "NAME"
              },
              "level": "PRIMARY_CUSTOMER",
              "required": true,
              "isDeleted": null,
              "lastModificationTimestamp": null,
              "tourUserCustomField": {
                "id": null,
                "tourUserFieldId": null,
                "name": null,
                "type": null,
                "creationTimeStamp": null,
                "lastModificationTimestamp": null,
                "tourUserCustomFieldEnumValues": null
              }
            },
            {
              "id": 36227,
              "tourId": 11367,
              "type": {
                "displayName": "Email",
                "dataType": "STRING",
                "regex": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                "minLength": 5,
                "maxLength": null,
                "minValue": null,
                "maxValue": null,
                "errorMessage": "Please enter a valid email",
                "name": "EMAIL"
              },
              "level": "PRIMARY_CUSTOMER",
              "required": true,
              "isDeleted": null,
              "lastModificationTimestamp": null,
              "tourUserCustomField": {
                "id": null,
                "tourUserFieldId": null,
                "name": null,
                "type": null,
                "creationTimeStamp": null,
                "lastModificationTimestamp": null,
                "tourUserCustomFieldEnumValues": null
              }
            },
            {
              "id": 36228,
              "tourId": 11367,
              "type": {
                "displayName": "Phone",
                "dataType": "STRING",
                "regex": null,
                "minLength": null,
                "maxLength": 40,
                "minValue": null,
                "maxValue": null,
                "errorMessage": null,
                "name": "PHONE"
              },
              "level": "PRIMARY_CUSTOMER",
              "required": true,
              "isDeleted": null,
              "lastModificationTimestamp": null,
              "tourUserCustomField": {
                "id": null,
                "tourUserFieldId": null,
                "name": null,
                "type": null,
                "creationTimeStamp": null,
                "lastModificationTimestamp": null,
                "tourUserCustomFieldEnumValues": null
              }
            }
          ],
          "variantId": 11367,
          "parentProductName": "From London: Stonehenge Half-Day Trip",
          "variantName": "Stonehenge Half-day Tour",
          "primaryVariantName": null,
          "productId": 6274,
          "ticketDeliveryInfo": null,
          "confirmedTicketInfo": null,
          "variantInfo": "- Half-day Tour of Stonehenge\n- Round-trip transfers from London\n- **Including entry tickets to Stonehenge**\n- Expert English-speaking guide\n- Multilingual audio guide available",
          "language": "EN",
          "boosterTags": [],
          "additionalProperties": [],
          "additionalPropertiesV2": [],
          "vendorsMeetingLocation": {
            "1218": {
              "latitude": 51.4925005,
              "longitude": -0.1481615
            },
            "1435": {
              "latitude": 51.4935471,
              "longitude": -0.1467568
            },
            "3050": {
              "latitude": 51.4932916,
              "longitude": -0.1457088
            },
            "4775": {
              "latitude": 51.4932916,
              "longitude": -0.1457088
            },
            "4780": {
              "latitude": 51.4925005,
              "longitude": -0.1481615
            },
            "5812": {
              "latitude": 51.4932916,
              "longitude": -0.1457088
            }
          }
        }
      ],
      "boosterTags": [],
      "openDated": false
    }
  ],
  "liveUserCount": 0,
  "cancellationPolicy": {

  },
  "cancellationPolicyV2": {
    "cancellable": true,
    "cancellableUpTo": 1440
  },
  "reschedulePolicy": {
    "reschedulable": false,
    "reschedulableUpTo": null
  },
  "ticketValidity": {
    "ticketValidityType": "NOT_EXTENDABLE",
    "ticketValidityUntilDate": null,
    "ticketValidityUntilDaysFromPurchase": null
  },
  "venueId": null,
  "urlSlugs": {
    "EN": "/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
    "ES": "/es/tour-a-stonehenge-desde-londres/desde-londres-tour-de-medio-dia-a-stonehenge-con-audioguia-e-6274/",
    "FR": "/fr/escapades-londres-stonehenge/stonehenge-excursion-dune-demi-journee-depuis-londres-avec-audioguide-e-6274/",
    "IT": "/it/tour-da-londra-a-stonehenge/gita-di-mezza-giornata-da-londra-a-stonehenge-con-audio-guida-e-6274/",
    "DE": "/de/london-nach-stonehenge-touren/halbtagestour-london-nach-stonehenge-mit-audioguide-e-6274/",
    "PT": "/pt/tours-londres-a-stonehenge/visita-de-meio-dia-a-stonehenge-de-londres-com-guia-de-audio-e-6274/",
    "NL": "/nl/stonehenge-tours-vanuit-londen/stonehenge-tickets-met-transfers-vanuit-londen-audiogids-e-6274/",
    "PL": "/pl/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
    "KO": "/ko/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
    "JA": "/ja/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
    "ZH_HANS": "/zh-hans/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
    "DA": "/da/ture-fra-london-til-stonehenge/fra-london-stonehenge-halvdagsudflugt-e-6274/",
    "NO": "/no/turer-fra-london-til-stonehenge/fra-london-stonehenge-halvdagstur-e-6274/",
    "RO": "/ro/tururi-de-la-londra-la-stonehenge/de-la-londra-excursie-de-o-zi-la-stonehenge-e-6274/",
    "RU": "/ru/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/",
    "SV": "/sv/turer-fran-london-till-stonehenge/fran-london-stonehenge-halvdagsutflykt-e-6274/",
    "TR": "/tr/london-to-stonehenge-tours/stonehenge-admission-ticket-transfers-from-london-e-6274/"
  },
  "listingAvailability": {
    "nextAvailableDate": {
      "date": "2026-02-19",
      "remaining": 36,
      "availability": "LIMITED"
    }
  },
  "selectPageInstructions": "",
  "hidden": false,
  "livePricingSupported": "NO",
  "listingDate": "2025-09-22",
  "linkedPOIIds": [1158],
  "operatingScheduleInfo": {
    "closestOpenDate": "2026-02-18",
    "openingTime": "09:30",
    "closingTime": "17:00",
    "status": "OPEN"
  },
  "liveInventoryCheck": false,
  "experienceItineraryIds": [93],
  "crossSellEnabled": false,
  "insuranceConfigs": [
    {
      "id": 6745,
      "vendorId": 1218,
      "tourId": 11367,
      "premiumPercentage": 12,
      "coveragePercentage": 100,
      "maxInsurableThresholdAmount": {
        "currency": "GBP",
        "value": 221.0166
      },
      "maxRefundAmount": null,
      "isActive": true,
      "cancellationDeadlineMinutes": 1440,
      "productType": "CANCELLATION_INSURANCE",
      "releasePeriod": 4320,
      "isSchedulable": true
    },
    {
      "id": 6860,
      "vendorId": 1435,
      "tourId": 11367,
      "premiumPercentage": 12,
      "coveragePercentage": 100,
      "maxInsurableThresholdAmount": {
        "currency": "GBP",
        "value": 221.0166
      },
      "maxRefundAmount": null,
      "isActive": true,
      "cancellationDeadlineMinutes": 1440,
      "productType": "CANCELLATION_INSURANCE",
      "releasePeriod": 4320,
      "isSchedulable": true
    },
    {
      "id": 7873,
      "vendorId": 3050,
      "tourId": 11367,
      "premiumPercentage": 12,
      "coveragePercentage": 100,
      "maxInsurableThresholdAmount": {
        "currency": "GBP",
        "value": 221.0166
      },
      "maxRefundAmount": null,
      "isActive": true,
      "cancellationDeadlineMinutes": 1440,
      "productType": "CANCELLATION_INSURANCE",
      "releasePeriod": 4320,
      "isSchedulable": true
    }
  ],
  "bnpl": {
    "eligible": true,
    "minLeadTimeHours": 96
  }
}



### Itinerary API
GET https://api.headout.com/api/v6/tour-groups/{experienceId}/experience-itineraries/?sections=true
Example: https://api.headout.com/api/v6/tour-groups/6274/experience-itineraries/?sections=true

Sample response:
{
  "itineraries": [
    {
      "id": 93,
      "name": "Stonehenge Entry Tickets with Transfers from London",
      "subCategoryId": 1143,
      "type": "GENERIC",
      "active": true,
      "map": {
        "active": true,
        "itineraryRoute": {
          "active": true,
          "polyline": "{~jyHh|WgBtSrM|f@^`DuJlJyAvAJrDpEvLpLvXtEjMnAxHbArZpArTvC|KhGlJnHbOlIjRlB`JdClc@fCvv@r@`{@fJn^`FlLtE`e@VdPw@nUGzNwAdM?fXf@v^TlJiAfc@F`XhC|SvRhp@lCdCm@`E}Bb]Edp@aCrh@iF|]cF`PyKn_@u@rLjC~L`D~QEl`@Ff`@fBnQzEzRjBpSa@lQyBnNu[tfA}ErY]vV~CpjAhCr[nQjs@zGv`@hD|h@pFjs@Jzb@oBxYoN|z@}F|e@i@`LaHbcCqIlqBy@r}@nExz@tAv}@j@xp@hBrLxBrGtKnN~JlFpMnJfQfQpOxKtP~FjQ`CzNbD~NrGjRrNnN|PrSvXxR|Mre@zOdJ|G|GdIpNdTrPfMbNxEhJbGbP~SvTtS|JtEbPlC|OYvb@_FjP^bZjEzMj@nKq@`TiGhHiDdDwEfD{KvCoC~ErAfBbJgA~Jc@lMnHhn@bHjVnOz^|Rhk@lSbx@|Lnp@dG`UzH|QnV|`@zKr[bY|mA`Ohx@nK`v@pGla@lHfUjGjO|U`w@|FrVbCbZoA~z@`Bf`@fD~Uxf@jcBnLdb@pIhP`MpPzRh[jKpUxj@jmAtv@n|AdXzq@hQnn@fLnf@vMtb@|_@feA~HdT~Kjd@fDn`@fDny@hOboDjLhkBfRz`Cv^jqE|Fdl@pHrZvb@|_A~K|]vLdj@lIlp@|Ir}@zM`y@xLrcArCrl@Xfx@R~x@pA|g@rH~kAbNboAzE~|@rAxi@pDpl@~DrYlKxd@hYpy@`w@ryBx_@nfAtu@nmB~Ylv@jNrj@zZzjBhNlj@lO`a@zVbf@lPxXzRlRfLlRtFlW|@xXQnKR`f@|NzgArUlsA`PtvA|Gdp@Hfe@}ApZXpW~DjYtHxSpG~InKbMxF|KjEjOxGvh@jKfuAxGvlBnGh}@fD`]jA`^aDh`@sChg@wCff@mF`d@uLngA}IlnAHvw@}ClUuKxZiU|{@oLr[aMnSsHbJmHjOcGz]mObxAeAzWTf_@`Gtl@fKjs@nNtdAFbWuD`ZeT`hAoHb_@uFrP_HvLcHbHoRzLsL`M_IlN_HlZgCh\\qCl`AD|o@dCz{@nEzw@|Dt_@lGx]jQfu@`Kpf@~XjtBbNfv@jHh|@jCpbA`Fvm@bI|q@bDhs@lKxpAze@dwCpP`|@~Dfc@|@p|AnIzkBjC~i@tAlp@iCra@Q|[~J~p@}Cxf@sAvY|Adi@nB~c@GbZkBhr@?tVvDfg@xBt`@aAYoCs@iBi@_KiIuCgCZmE??[lEtCfC`ElDfHdEnCr@`AXyBu`@kAcOe@iGeAyNQkH~@qa@r@}t@sEepAjBah@HqSaAmD^wE{BkWwBo[lBob@hAe]cBih@}HkcBqC_n@g@ak@s@kv@gCaZsLqp@iQeaAoMsw@sOslAoIy{AwL{hAwFgfAi@{[{Euq@eOa|@mPghAmFwb@}Jil@_Pwq@{L_p@qGwy@aCwe@gBkoAhAqu@vCsk@lBgQzDoPdOyW|TuPdMyJ|KaStIg]tF_Z`UomAn@_[gEoa@mU}}AcEo^iAcc@t@yZlEqd@dK}_ApCyPdHsQ~T_[jIcRtM{c@`Kka@lJmWbEaPtAoN@k~@nFor@bJgcAzMygAzDqw@hEed@C_ZoFih@{GcdAkGghB_JsmA{Ikq@aGgQwHqL}KkM{ImRaCsJ}BsQk@wU|@iRv@oj@mOezA_Jkw@eNot@_OwaAsIgv@yJ}}@iLmZyPq]mj@qiAsPgh@cGkXmR{jAgD}SeOcp@{N_a@wSyg@i{@{zBwq@knBwn@{gBaLub@_Jgp@}Fo`BuEoq@qLieAqGe`AmCcnAM_rAoAu_@_Cu]cOofAqMe}@gKweAwMqt@kMsc@gg@}iAcGiWcEs_@kHg}@mHs}@oe@qcGwT}sEaKsyB_Hs^_HqSmj@{{AoMod@gU{}@sKs[sWmn@{u@ozAmv@waB}_@kg@uIwQkKuc@mVw{@yM{e@oDqZo@an@`Aeb@wAsVkEmUmW_|@cJuTyJm_@wR}uAeTseAyWkfA}KwUeMeRoHsOgJg[oZgxAySep@uLkZ{Q}h@{Jif@iDyH}GeFuFDoIpB}X`EsTcA{ZcEeYd@g]pEoMe@gToGkOiLaTwXwLuJaIyC}OkIaW{\\wKuKqJuFkf@cPiKyH{IqKuQkWmNmNqKiH}JsEePaEwPsBaOwDuMuHwQaQqKgJsFsCgEuAkHRoHfA}FkCqJsLc@sGpDaLtCmN\\gYRoSsBkn@oDekAJq^vHqqBbGkpBnDcaAjOeaAfH{n@X{XcDyk@{IijAsUi`A{C{UuAqXgCgdAn@aV`C}OlZ{bA|EeSz@eLO{PsAwKcF{S_BuPE{r@K_RkFeUw@oHlAgMbSsp@jE}[pBcZJ}e@|@gd@j@sPo@_FeLo]qGyXgBqR`@ya@Pac@e@gh@JePzAiMt@qc@}AgYuA}KeBiPkG_NuF_Us@mLAsR?mYy@yTgCsx@iDcYoNi]_MoRiByCm@{FmBmWiAmOo@wJFcFbBOr@}Pr@a^CqHWoEmRan@qG}RoCuCJiCv@~@",
          "polylineColor": "#8800ff"
        }
      },
      "details": {
        "firstDepartureStop": "Stonehenge",
        "lastDepartureStop": "Stonehenge",
        "duration": {
          "minHours": 6,
          "minMinutes": 0,
          "maxHours": null,
          "maxMinutes": null,
          "hours": 6,
          "minutes": 0
        },
        "modeOfTravel": {
          "localisedLabel": "A/C Bus",
          "label": "BUS_COACH"
        }
      },
      "sections": [
        {
          "id": 1603,
          "type": "START_LOCATION",
          "location": {
            "latitude": 51.5072178,
            "longitude": -0.1275862,
            "placeId": "ChIJdd4hrwug2EcRmSrV3Vo6llI"
          },
          "details": {
            "name": "Central London",
            "description": "\u003Cp\u003EBoard your AC coach from the boarding point mentioned on your ticket voucher.\u003C/p\u003E",
            "passBy": false,
            "sameAsStartingPoint": false,
            "mediaUrls": [
              "https://cdn-imgix.headout.com/media/images/5732595247005eafd2d4ef86dd0136f5-afwec.jpg"
            ],
            "timeForNextSection": 120,
            "distanceForNextSection": 140.97,
            "linkedEntity": {
              "id": 28224,
              "type": "VENDOR_TOUR"
            }
          },
          "rank": 0,
          "attractionsCount": 0,
          "activitiesCount": 0,
          "childSections": []
        },
        {
          "id": 1604,
          "type": "STOP",
          "location": {
            "latitude": 51.178882,
            "longitude": -1.826215,
            "placeId": "ChIJEfYKhTvmc0gR3dLTvOJwkZc"
          },
          "details": {
            "name": "Stonehenge",
            "inclusion": {
              "localisedLabel": "Tickets included",
              "label": "ADMISSION_TICKET_INCLUDED"
            },
            "description": "\u003Cp\u003EVisit the world-famous prehistoric monument, marveling at the mysterious stone circle dating back over 4,000 years with a multilingual audio guide.\u003C/p\u003E",
            "passBy": false,
            "subType": {
              "localisedLabel": "POI (Present in POI table)",
              "label": "POI"
            },
            "sameAsStartingPoint": false,
            "mediaUrls": [
              "https://cdn-imgix.headout.com/media/images/c5bab564108c401d9633c03036a8303b-6269-salisbury-stonehenge-entry-tickets-02.jpg"
            ],
            "timeForNextSection": 120,
            "distanceForNextSection": 135.66,
            "linkedEntity": {
              "id": 1108,
              "type": "POI"
            }
          },
          "rank": 1,
          "attractionsCount": 0,
          "activitiesCount": 0,
          "childSections": []
        },
        {
          "id": 1622,
          "type": "END_LOCATION",
          "location": {
            "latitude": 51.5072178,
            "longitude": -0.1275862,
            "placeId": "ChIJdd4hrwug2EcRmSrV3Vo6llI"
          },
          "details": {
            "name": "Central London",
            "description": "\u003Cp\u003EBoard your AC coach from the boarding point mentioned on your ticket voucher.\u003C/p\u003E",
            "passBy": false,
            "sameAsStartingPoint": true,
            "mediaUrls": [
              "https://cdn-imgix.headout.com/media/images/5732595247005eafd2d4ef86dd0136f5-afwec.jpg"
            ]
          },
          "rank": 2147483647,
          "attractionsCount": 0,
          "activitiesCount": 0,
          "childSections": []
        }
      ]
    }
  ]
}


## Target output style
Experience - Take a Bath and Stonehenge Day Trip from London
What you’ll do

Ride the Train
Enjoy the scenery on a one-hour train ride to Bath.

Revisit 1700s Bath
Stroll along elegant 18th-century lanes to see iconic sites.

View Pulteney Bridge
Admire the Georgian bridge and views of the River Avon.

Travel to Stonehenge
Take a comfortable private ride to the prehistoric site.Marvel at Stonehenge
Discuss the mysteries and history of Stonehenge.


Experience - Rome to Amalfi: A Scenic Seaside Escape
What you’ll do


Rome toNaples on your own
Glide through the countryside on a high-speed train.(tickets not included, check Italo or trenitalia website)


Meet Your Guide
Link up with your host Naples Hotel terminus .


Visit Ravello
Roam garden paths and balconies above the sea.


Drive around amalfi
drive around amalfi


Amalfi
visit the town of amalfi and enjoy the local food


Enjoy Positano
Wander pastel alleys that cascade toward the water.


Drive to naples
drive to naples



Experience - The One-Day "See It All" Prague Tour
What you’ll do


Cross Charles Bridge
Learn about the iconic Gothic bridge from the 14the century.


Explore Old Town
See main sights and hidden passages with an expert guide.


Visit Jewish Quarter
Uncover the historic area’s rich cultural heritage.


Astronomical Clock
Learn about the unique clock's history and mechanics.


Cruise the canal
Unwind on a riverboat as you glide along the Čertovka Canal.


Take a rest
Enjoy a lunch break before heading back for the castle.


Conquer the castle
Survey Prague Castle exteriors and its 1,000-year history.



## Output JSON shape
{
  "experienceId": "6274",
  "title": "...",
  "itinerary": [
    { "time": "9:00 AM", "activity": "...", "description": "...", "tip": "..." }
  ],
  "highlights": [],
  "generatedAt": "2026-02-18T..."
}
```

**4. Create a `.env.example` file:**
```
OPENAI_API_KEY=your_key_here
```

**5. Open Claude Code in this folder and start with:**
```
claude