const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema({

  day: 
  {
    type: Date,
    default: () => new Date(),
  },

  exercises: [{


      type:  {
        type: String,
        enum: ["cardio","interval"],
        required: "Valid options are 'interval' or 'cardio'.",
      },

      name: 
      {
        type: String,
        trim: true,
        required: 'Enter the name of your Exercise!',
      },

      duration: 
      {
        type: Number,
        required: 'Exercise duration.',
      },

      weight: 
      {
        type: Number,
      },

      reps: 
      {
        type: Number,
      },

      sets: 
      {
        type: Number,
      },

      distance: 
      {
        type: Number,
      },

    },
  ],
});

function isRequired(field) {
  return function () {
      if (field == "distance") {
          return this.type === "cardio";
      } else {
          return this.type === "interval";
      }
  };
}

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;
