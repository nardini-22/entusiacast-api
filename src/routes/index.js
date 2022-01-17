const express = require("express");
const router = express.Router();

const Episodes = require("../models/episodes");

router.get("/episodios", (req, res, next) => {
  Episodes.find({})
    .then((episodes) => {
      res.send(episodes);
    })
    .catch(next);
});

router.post("/episodios", (req, res, next) => {
    Episodes.create(req.body)
      .then((episodes) => {
        res.send(episodes);
      })
      .catch(next);
  });
  
  router.put("/episodios/:id_ep", (req, res, next) => {
    Episodes.findOneAndUpdate({ id_ep: req.params.id_ep }, req.body).then(
      () => {
        Episodes.findOne({ id_ep: req.params.id_ep }).then((episodes) => {
          res.send(episodes);
        });
      }
    );
  });
  
  router.delete("/:id_ep" , (req, res, next) => {
    Episodes.findOneAndDelete({ id_ep: req.params.id_ep }).then((episodes) => {
      res.send(episodes);
    });
  });

module.exports = router;