const Accommodation = require("../models/Accommodation");
const multer = require("multer");

exports.postAddAccommodation = (req, res, next) => {
  const accommodationName = req.body.accommodationName;
  const contactName = req.body.contactName;
  const phone = req.body.phone;
  const region = req.body.region;
  const city = req.body.city;
  const roomType = req.body.roomType;
  const bedOptions = req.body.bedOptions;
  const noOfBeds = req.body.noOfBeds;
  const image = req.body.image;

  console.log(image);

  const accommodation = new Accommodation({
    accommodationName: accommodationName,
    contactName: contactName,
    region: region,
    city: city,
    phone: phone,
    roomType: roomType,
    bedOptions: bedOptions,
    noOfBeds: noOfBeds,
    image: image,
  });

  accommodation
    .save()
    .then((result) => {
      res.status(200).json({ msg: "added", accommodation });
    })
    .catch((err) => {
      console.log(err);
    });
};

// get accommodations

exports.getAddAccommodation = (req, res, next) => {
  Accommodation.find().then((accommodation) => res.json(accommodation));
};
