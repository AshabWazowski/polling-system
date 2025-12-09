import Polling from "../model/CreatePoll.js";

export const createPostEntry = async (req, res) =>{
        const {question, option} = req.body;        
   try {      
      const updatedPoll = await Polling.findOneAndUpdate(
         {},
         {
            question: question,
            "option1.value": option.option1,
            "option2.value": option.option2,
            "option3.value": option.option3,
            "option4.value": option.option4,
         },
         { new: true , upsert: true}
      );
      
      return res.status(200).json({ message: "Poll updated successfully", pollingEntry: updatedPoll });
   } catch(error) {
      return res.status(500).json({ error: error.message });
   }
        
}