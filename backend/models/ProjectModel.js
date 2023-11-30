const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
       projectName : {type:String,required:true}
})

const ProjectModel = mongoose.model('project',projectSchema);

module.exports = {ProjectModel};