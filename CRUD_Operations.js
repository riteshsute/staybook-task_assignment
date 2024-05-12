const hotelDetails= require('./src/database/firebase')

const createHotelDetails = async (req, res) => {
    try {

      const newHotelDetails = req.body;
      const existingHotel = await hotelDetails.findOne({ where: { hotelName: newHotelDetails.hotelName } });

      if (existingHotel) {
        return res.status(400).json({ error: 'hotel already exists',  message: 'Hotel already exists'});
      } 

      const hotel = await hotelDetails.create(newHotelDetails);
      res.status(201).json({ message: 'Hotel created successfully', hotel });

    } catch (error) {
      res.status(500).json({ success: false, message: error});
    }
  };


  
  const getHotelDetailsById = async (req, res) => {
    try {

      const hotelId = req.params.hotelId;
      const { imageLimit, amenityLimit, nearbyPlacesLimit } = req.query;

      const options = {
        where: { id: hotelId },
        include: [
          imageLimit = 10,
          amenityLimit = 5,
          nearbyPlacesLimit = 5
        ],
      };

      if (imageLimit) {
        options.include.push({ limit: parseInt(imageLimit) });
      }

      if (amenityLimit) {
        options.include.push({ limit: parseInt(amenityLimit) });
      }

      if (nearbyPlacesLimit) {
        options.include.push({ limit: parseInt(nearbyPlacesLimit) });
      }

      const hotel = await hotelDetails.findByPk(hotelId, options);

      if (!hotel) {
        return res.status(404).json({ success: false, message: 'Hotel not found'});
      }

      res.status(200).json({ success: true, message: 'Hotel founded', hotel});

    } catch (error) {
      res.status(500).json({ success: false, message: error});
    }
  };


  
  const updateHotelDetails = async (req, res) => {
    try {
        
      const hotelId = req.params.hotelId;
      const updatedHotelDetails = req.body;
      const hotel = await hotelDetails.findByPk(hotelId);

      if (!hotel) {
        return res.status(404).json({ success: false, message: 'Hotel not found'});
      }

      await hotel.update(updatedHotelDetails);
      
      res.status(200).json({ success: true, message: 'Hotel details updated successfully', hotel });

    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  };
  

  const deleteHotelDetails = async (req, res) => {
    try {
      const hotelId = req.params.hotelId;
      const hotel = await hotelDetails.findByPk(hotelId);

      if (!hotel) {
        return res.status(404).json({ success: false, message: 'Hotel not found'});
      }

      await hotel.destroy();

      res.status(200).json({ success: true, message: 'Hotel deleted successfully' });
      
    } catch (error) {
      res.status(500).json({ success: false, message: error });
    }
  };
  
  module.exports = {
    createHotelDetails,
    getHotelDetailsById,
    updateHotelDetails,
    deleteHotelDetails
  };
  