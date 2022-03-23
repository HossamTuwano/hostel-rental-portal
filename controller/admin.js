const Accommodation = require("../models/Accommodation");

exports.postAddAccommodation = (req, res, next) => {
  const name = req.body.name;
  const cname = req.body.cname;
  const phone = req.body.phone;
  const region = req.body.region;
  const city = req.body.city;
  const rtype = req.body.rtype;
  const boptions = req.body.boptions;
  const beds = req.body.beds;

  const accommodation = new Accommodation({
    accommodationName: name,
    contactName: cname,
    region: region,
    city: city,
    phone: phone,
    roomType: rtype,
    bedOptions: boptions,
    noOfBeds: beds,
  });

  accommodation
    .save()
    .then((result) => {
      res.status(200).json({ msg: "added" });
    })
    .catch((err) => {
      console.log(err);
    });
};
