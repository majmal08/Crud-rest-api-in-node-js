const models = require("../database/models/index");
var image = models.Post;
var fs = require('fs');
const multer = require('multer');
// var path = require('path');

module.exports = {
  getData: async function (req, res) {
    models.Post.findAll()
      .then((data) => {
        res.status(200).json({
          status: true,
          data: data,
          message: "All Post Data",
        });
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  },

  insert: function (req, res) {
    
    res.status(400).send({
      user_data: req.fields,
      user_image:  req.files.imageUrl
    });

 
      // console.log("upload " + upload);
   
    const post = {
      title: req.fields.title,
      content: req.fields.content,
      imageUrl: req.files.imageUrl.name,
      userId: req.fields.userId,
    };

    res.status(400).send({
      data: post,
    });

    // models.Post.create(post)
    //   .then((data) => {
    //     res.status(200).json({
    //       status: true,
    //       data: data,
    //       message: "Data Created Successfully",
    //     });
    //   })
    //   .catch((err) => {
    //     res.status(500).send({
    //       message:
    //         err.message || "Some error occurred while creating the Tutorial.",
    //     });
    //   });
  },

  edit: function (req, res) {
    const id = req.params.id;
    models.Post.findByPk(id)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Post with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving Post with id=" + id,
        });
      });
  },

  update: function (req, res) {
    const id = req.params.id;

    models.Post.update(req.body, {
      where: { id: id },
    })
      .then((data) => {
        if (data == 1) {
          res.send({
            message: "Post is updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Post with id=${id}. Maybe Post was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Post with id=" + id,
        });
      });
  },

  delete: function (req, res) {
    const id = req.params.id;

    models.Post.destroy({
      where: { id: id },
    })
      .then((data) => {
        if (data == 1) {
          res.send({
            message: "Post is deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Post with id=${id}. Maybe Post was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not delete Post with id=" + id,
        });
      });
  },
};
