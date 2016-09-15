
var names = require('../model/names');
var locations = require('../model/locations');
var occupations = require('../model/occupations');
var hobbies = require('../model/hobbies');
var skillz = require('../model/skillz');
var secrets = require('../model/secrets');

module.exports = {

  getName: function(req, res, next) {
    res.status(200).json(names);

  },

  getLocation: function(req, res, next) {
    res.status(200).json(locations)
  },

  getOcccupations: function(req, res, next) {
      var type = req.params.type;

      if (type === 'desc') {
        res.status(200).json(occupations.sort())
      } else {
        res.status(200).json(occupations.reverse())
      }

  },

  getLatest: function(req, res, next) {
    res.status(200).json(occupations[occupations.length - 1])
  },

  getHobbies: function(req, res, next) {
    res.status(200).json(hobbies)
  },

  getHobbiesType: function(req, res, next) {
      var hobbiesarrs = [];
      var type = req.params.type;

      for (var i = 0; i < hobbies.length; i++) {
            if (hobbies[i].type === type) {
              hobbiesarrs.push(hobbies[i])
            }

          }

          res.status(200).json(hobbiesarrs);
    },

    putNames: function(req, res, next) {
      names = req.body;
      res.status(200).json(names)
    },

    putLocation: function(req, res, next) {
      locations = req.body;
      res.status(200).json(locations)
    },

    postHobbies: function(req, res, next) {
      hobbies.push(req.body);
      res.status(200).json(hobbies)
    },

    postOcc: function(req, res, next) {
      occupations.push(req.body);
      res.status(200).json(occupations)

    },

    getSkills: function(req, res, next) {

      var experarrs = [];
      if (req.query.experience) {

        for (var i = 0; i < skillz.length; i++) {
            if (skillz[i].experience === req.query.experience) {
                  experarrs.push(skillz[i]);
                }
              }

              res.status(200).json(experarrs);
      }

        res.status(200).json(skillz);
    },

    postSkillz: function(req, res, next) {
      skillz.push(req.body)
      res.status(200).json(skillz)

    },
    getSecrets: function(req, res, next) {
      res.json(secrets)
  },


}
