const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../utils/verifyToken");

const User = require("../model/User");

userRouter.post("/newuser", async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).send({ error: "Empty input!" });
  }

  if (id.length > 8) {
    return res.status(400).send({ error: "Too long id" });
  }

  const foundUser = await User.findOne({ id });

  if (foundUser) {
    return res.status(400).send({ error: "User already exists!" });
  }

  const user = new User({ id });

  await user.save();

  return res.status(200).send(user);
});

userRouter.post("/login", async (req, res) => {
  const { id } = req.body;

  const foundUser = await User.findOne({ id });

  if (!foundUser) {
    return res.status(400).send({ error: "User not found" });
  }

  const token = jwt.sign({ id }, process.env.JWT_TOKEN);

  res.send({ token });
});

userRouter.post("/user_data", auth, (req, res) => {
  res.send(req.user);
});

function createData(name, foto, sold, views, rotation) {
  return { name, foto, sold, views, rotation };
}

const offerts = [
  createData(
    "Mobile internet 2GB",
    "https://www.intel.pl/content/dam/www/central-libraries/us/en/images/language-icon-lvl-2-abstract-bg.png.rendition.intel.web.864.486.png",
    200,
    33,
    60
  ),
  createData(
    "Mobile internet 10GB",
    "https://wszystkoconajwazniejsze.pl/wp-content/uploads/2022/12/shutterstock_592000391-1000x519.jpg",
    321,
    56,
    43
  ),
  createData(
    "IPhone 14",
    "https://www.91-img.com/gallery_images_uploads/1/2/12577884f9b0c66287c790cb131070042ff39405.jpg?tr=h-550,w-0,c-at_max",
    435,
    234,
    43
  ),
  createData(
    "Samsung S15 Pro Max",
    "https://image.ceneostatic.pl/data/products/98143284/i-samsung-galaxy-s21-5g-sm-g991-8-128gb-szary.jpg",
    453,
    44,
    23
  ),
  createData(
    "IPad",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-ipad-pro-11-wifi-silver-2019_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1581985474458",
    123,
    434,
    432
  ),
  createData(
    "Laptop",
    "https://www.mediaexpert.pl/media/cache/resolve/filemanager_original_jpg/images/poradniki_-_zdjcia/rankingi/laptopy_do_pracy_/Laptop-LENOVO-IdeaPad-3-14IIL05-Przod-tyl.jpg",
    10,
    434,
    432
  ),
  createData(
    "Table",
    "https://img.muji.net/img/item/4547315892464_02_400.jpg",
    42,
    434,
    432
  ),
  createData(
    "Book",
    "https://d2j6dbq0eux0bg.cloudfront.net/images/24595415/1297476103.jpg",
    123,
    434,
    432
  ),
  createData(
    "Smartfon",
    "https://image.ceneostatic.pl/data/products/105809880/i-redmi-note-10-pro-6-128gb-szary.jpg",
    2000,
    434,
    432
  ),
];

userRouter.post("/get_data", auth, (req, res) => {
  if (req.user.id === "marcin") {
    const data = {
      Allegro: {
        aspects: {
          Price: 3,
          Speed: 10,
          Kidness: 10,
          "Service Quality": 2,
          Communication: 2,
          Proffesional: 10,
        },
        advices: [
          "You are getting more and more negative opinions. Watch out!",
          "Product Table is getting more and more popular",
        ],
        offerts,
        reviews: [
          { score: 3, name: "Marcin Snow", comment: "Very slow" },
          { score: 5, name: "Maciej", comment: "Awensome" },
          { score: 2, name: "Marcin", comment: "Horrible" },
          { score: 4, name: "Harry Potter", comment: "Very slow" },
          {
            score: 5,
            name: "Piotr Nowak",
            comment:
              "Fast, professional and elegant. I am very happy and satisdied",
          },
          {
            score: 3,
            name: "Beric Dondarrion",
            comment: "Taling to fast and cant understand what he was sayin'",
          },
          {
            score: 1,
            name: "Logen Ninefingers",
            comment: "I am very disappointed.😣",
          },
          {
            score: 2,
            name: "Celebrimbor",
            comment: "Wort salesman ever. Very not recommended.",
          },
          { score: 2, name: "Tattersail", comment: "He sold me broken thing." },
          { score: 1, name: "Granny Weatherwax", comment: "Very slow" },
          { score: 2, name: "Szymon", comment: "Never Again" },
        ],
        orders: [
          {
            date: "2023-1-4 01:33",
            "Sold items": 10,
            Cycle: 10,
            status: "Not delivered",
          },
          {
            date: "2023-2-5 01:33",
            "Sold items": 20,
            Cycle: 12,
            status: "Not delivered",
          },
          {
            date: "2023-12-13 01:33",
            "Sold items": 20,
            Cycle: 12,
            status: "Not delivered",
          },
          {
            date: "2023-3-13 01:33",
            "Sold items": 40,
            Cycle: 13,
            status: "Not delivered",
          },
          {
            date: "2023-1-13 01:33",
            "Sold items": 80,
            Cycle: 12,
            status: "Not delivered",
          },
          {
            date: "2023-8-6 01:33",
            "Sold items": 100,
            Cycle: 11,
            status: "Not paid",
          },
          {
            date: "2023-10-4 01:33",
            "Sold items": 100,
            Cycle: 11,
            status: "Not paid",
          },
          {
            date: "2023-11-3 01:33",
            "Sold items": 100,
            Cycle: 11,
            status: "Not delivered",
          },
          {
            date: "2023-1-2 01:33",
            "Sold items": 100,
            Cycle: 11,
            status: "Not paid",
          },
          {
            date: "2023-5-13 01:33",
            "Sold items": 100,
            Cycle: 11,
            status: "Not paid",
          },
          {
            date: "2023-6-18 01:33",
            "Sold items": 42,
            Cycle: 11,
            status: "Not paid",
          },
          {
            date: "2023-1-5 01:33",
            "Sold items": 22,
            Cycle: 7,
            status: "Returned",
          },
          {
            date: "2023-1-3 01:33",
            "Sold items": 42,
            Cycle: 2,
            status: "Returned",
          },
          {
            date: "2023-1-8 01:33",
            "Sold items": 42,
            Cycle: 2,
            status: "Not delivered",
          },
          {
            date: "2023-1-2 01:33",
            "Sold items": 100,
            Cycle: 2,
            status: "Returned",
          },
          {
            date: "2023-1-2 01:33",
            "Sold items": 100,
            Cycle: 2,
            status: "Not delivered",
          },
          {
            date: "2023-1-6 02:33",
            "Sold items": 100,
            Cycle: 2,
            status: "Not delivered",
          },
          {
            date: "2023-1-6 03:33",
            "Sold items": 100,
            Cycle: 2,
            status: "Returned",
          },
          {
            date: "2023-1-6 04:33",
            "Sold items": 100,
            Cycle: 2,
            status: "Returned",
          },
          {
            date: "2023-1-6 21:33",
            "Sold items": 100,
            Cycle: 2,
            status: "Not delivered",
          },
        ],
      },
      Amazon: {
        aspects: {
          Price: 2,
          Speed: 2,
          Kidness: 3,
          "Service Quality": 4,
          Communication: 6,
          Proffesional: 1,
        },
        advices: [
          "You are getting more and more negative opinions. Watch out!",
          "Product Table is getting more and more popular",
        ],
        reviews: [
          { score: 3, name: "Marcin Snow", comment: "Very slow" },
          { score: 1, name: "Maciej", comment: "What a nightmare" },
          { score: 5, name: "Zuzanna", comment: "Love the service" },
          { score: 4, name: "Harry Potter", comment: "Very slow" },
          {
            score: 5,
            name: "Piotr Nowak",
            comment:
              "Fast, professional and elegant. I am very happy and satisdied",
          },
          { score: 3, name: "Marcin Snow", comment: "Very slow" },
          { score: 1, name: "Marcin Snow", comment: "Very slow" },
          { score: 2, name: "Marcin Snow", comment: "Very slow" },
          { score: 1, name: "Piotr Nowak", comment: "Never again" },
          { score: 1, name: "Franek", comment: "Very slow" },
          { score: 2, name: "Szymon", comment: "Never Again" },
        ],
        offerts,
        orders: [
          {
            date: "2023-1-4 01:33",
            "Sold items": 10,
            Cycle: 10,
            status: "Not delivered",
          },
          {
            date: "2023-2-5 01:33",
            "Sold items": 20,
            Cycle: 12,
            status: "Not delivered",
          },
          {
            date: "2023-12-13 01:33",
            "Sold items": 20,
            Cycle: 12,
            status: "Not delivered",
          },
          {
            date: "2023-3-13 01:33",
            "Sold items": 40,
            Cycle: 13,
            status: "Not delivered",
          },
          {
            date: "2023-1-13 01:33",
            "Sold items": 80,
            Cycle: 12,
            status: "Not delivered",
          },
          {
            date: "2023-8-6 01:33",
            "Sold items": 100,
            Cycle: 11,
            status: "Not delivered",
          },
          {
            date: "2023-10-4 01:33",
            "Sold items": 100,
            Cycle: 11,
            status: "Not delivered",
          },
          {
            date: "2023-11-3 01:33",
            "Sold items": 100,
            Cycle: 11,
            status: "Not delivered",
          },
          {
            date: "2023-1-2 01:33",
            "Sold items": 100,
            Cycle: 11,
            status: "Not delivered",
          },
          {
            date: "2023-5-13 01:33",
            "Sold items": 100,
            Cycle: 11,
            status: "Not delivered",
          },
          {
            date: "2023-6-18 01:33",
            "Sold items": 42,
            Cycle: 11,
            status: "Not delivered",
          },
          {
            date: "2023-1-5 01:33",
            "Sold items": 22,
            Cycle: 7,
            status: "Not delivered",
          },
          {
            date: "2023-1-3 01:33",
            "Sold items": 42,
            Cycle: 2,
            status: "Not delivered",
          },
          {
            date: "2023-1-8 01:33",
            "Sold items": 42,
            Cycle: 2,
            status: "Not delivered",
          },
          {
            date: "2023-1-2 01:33",
            "Sold items": 100,
            Cycle: 2,
            status: "Not delivered",
          },
          {
            date: "2023-1-2 01:33",
            "Sold items": 100,
            Cycle: 2,
            status: "Not delivered",
          },
          {
            date: "2023-1-6 02:33",
            "Sold items": 100,
            Cycle: 2,
            status: "Not delivered",
          },
          {
            date: "2023-1-6 03:33",
            "Sold items": 100,
            Cycle: 2,
            status: "Not delivered",
          },
          {
            date: "2023-1-6 04:33",
            "Sold items": 100,
            Cycle: 2,
            status: "Not delivered",
          },
          {
            date: "2023-1-6 21:33",
            "Sold items": 100,
            Cycle: 2,
            status: "Not delivered",
          },
        ],
      },
    };

    return res.send(data);
  }

  res.send(req.user);
});

module.exports = userRouter;
