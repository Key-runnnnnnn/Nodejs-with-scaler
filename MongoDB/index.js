const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/testDB').then(() => {
  console.log('Successfully connected to MongoDB');
}).catch((err) => {
  console.log('Error connecting to MongoDB', err);
});


// schema

// const courseSchema = new mongoose.Schema({
//   name: String,
//   creator: String,
//   publishedDate: { type: Date, default: Date.now }, // default value
//   isPublished: Boolean,
//   rating: Number
// });


// validation  -> required, minlength, maxlength, match, enum (enumeration)
const courseSchema = new mongoose.Schema({
  name: {type:String, required:true, minlength:5, maxlength:255},
  
  tags:{type:Array,validate:{
    validator: function(v){
      return v.length > 1;
    },
    message:'A course should have at least one tag'
  }},

  category:{
    type:String,
    required:true,
    enum:['web','mobile','network','iot','data science','machine learning']
  },

  creator: {type:String, required:true},
  publishedDate: { type: Date, default: Date.now }, // default value
  isPublished: {type:Boolean, required:true},
  rating: {type:Number, required:function(){return this.isPublished}}
})

// model
const Course = mongoose.model('Course', courseSchema);
// create document and save it to the database 
async function createCourse() {
  const course = new Course({
    name: 'Internet of Things',
    tags:['iot'],
    category:'iot',
    creator: 'Google',
    isPublished: true,
    rating: 4.5 
  })
 try {
  const result = await course.save();
  console.log(result);
  //                      or
  // await course.validate()
 }
  catch(err){
    for(field in err.errors){
      console.log(err.errors[field]);
    }
  }
}
createCourse();

// comparison query operators------------------>
// eq (equal)
// ne (not equal)
// gt (greater than)
// gte (greater than or equal to)
// lt (less than)
// lte (less than or equal to)
// in 
// nin (not in)

// logical query operators------------------>
// or
// and

// regular expression------------------>
// starts with
// ends with
// contains

// pagination------------------>
// page number
// page size


// async function getCourses() {
//   const courses = await Course.find({ creator: 'Facebook' }).select({name:1})
//   console.log(courses);
// }

// reding data from the database
async function getCourses() {
  // const courses = await Course.find({creator :{$in:['Google']}}).select({ name: 1,creator:1})

  // const courses = await Course.find({rating:4.5}).select({ name: 1,creator:1}).and([{creator:'Google'},{creator:'Facebook'}])
  // console.log(courses);

  const courses = await Course.find({ rating: 4.5 }).select({ name: 1, creator: 1 }).or([{ creator: 'Google' }, { creator: 'Facebook' }])
  console.log(courses);
}
// getCourses();

// update data in the database
async function updateCourse(id) {
  const course = await Course.findById(id);
  if (!course) return;
  course.isPublished = true;
  course.name = 'React Native'
  course.creator = 'Microsoft'
  course.rating = 9.8
  const result = await course.save();
  console.log(result);
}

// updateCourse('65dde27b11e0d985e72851f7')

// delete data from the database
async function removeCourse(id) {
  const result = await Course.findByIdAndDelete(id)
  console.log(result);
}
// removeCourse('65dde27b11e0d985e72851f7')