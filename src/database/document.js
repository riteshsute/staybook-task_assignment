/*
  sample json data for the firebase document
  to be saved and updated via api requests
*/

class HotelDetails {
  hotelName = ""; // string
  hotelEmailId = ""; // string
  hotelContactNumber = 0; // number
  hotelLandmark = ""; // string
  hotelAddress = ""; // string
  hotelStarRating = 0; // number
  hotelImageUrl = ""; // string

  hotelCity = ""; // string
  hotelState = ""; // string
  hotelPincode = ""; // string

  // example
  // hotelName = "Jai Balaji";
  // cityName = "New Delhi";
  // stateName = "Delhi";
  // change the name into dashified lowercase version then use it in the slugs
  // you can use dashify (https://www.npmjs.com/package/dashify) npm package for this behaviour or create your own

  // hotelSlugsDetails.hotel = `staybook-hotel-${hotelName}-${cityName}`
  // hotelSlugsDetails.hotelCity = `hotels-in-${cityName}`
  // hotelSlugsDetails.hotelState = hotels-in-${stateName}

  hotelSlugsDetails = {
    hotel: "", // string
    hotelCity: "", // string
    hotelState: "", // string
  };

  hotelLongitude = 0; // number
  hotelLatitude = 0; // number
  hotelMapUrl = ""; //string

  hotelPaymentOption = {
    postpaid: false, // boolean
    prepaid: false, // boolean
    partial: false, // boolean
  };

  hotelImagesList = [
    {
      imageId: "", // string
      imageUrl: "", // string
      imageTitle: "", // string
    },
    {
      imageId: "", // string
      imageUrl: "", // string
      imageTitle: "", // string
    },
    {
      imageId: "", // string
      imageUrl: "", // string
      imageTitle: "", // string
    },
    {
      imageId: "", // string
      imageUrl: "", // string
      imageTitle: "", // string
    },
  ];
}
