import mongoose from "mongoose";

const CreatePollSchema = mongoose.Schema({
    question:{
        type:String,
        require:true
    },
   option1:{
    value:{
        type: String,
    },
    count:{
        type: Number,
        default:0
    }
   },
   option2:{
    value:{
        type: String,
    },
    count:{
        type: Number,
        default:0
    }
   },
   option3:{
    value:{
        type: String,
    },
    count:{
        type: Number,
        default:0
    }
   },
   option4:{
    value:{
        type: String,
    },
    count:{
        type: Number,
        default:0
    }
   },
   totalCount :{
    type: Number,
    default:0
   }
})

const Polling = mongoose.model('poll', CreatePollSchema);

export default Polling;