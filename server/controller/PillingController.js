import Polling from "../model/CreatePoll.js";

export const createPostEntry = async (req, res) =>{
        const {question, option} = req.body;
      //Reset the Database values
      await Polling.updateMany({}, {
          "option1.count": 0,
          "option2.count": 0,
          "option3.count": 0,
          "option4.count": 0,
          totalCount: 0
      });
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
      if(updatedPoll){
         return res.status(200).json({ message: "Poll updated successfully"});
      }
      return res.status(500).json({ error: error.message });
      
   } catch(error) {
      return res.status(500).json({ error: error.message });
   }
        
}

export const getRegisteredPoll = async(req, res)=>{

   try {
      const pollEntry = await Polling.find({});

      if(!pollEntry){
         return res.status(500).json({ error: error.message });
      }

      return res.status(200).json({pollEntry});
      
   } catch (error) {
      return res.status(500).json({ error: error.message });
      
   }

}

export const postRegisteredPoll = async(req, res) =>{
   const {pollValue} = req.body;
   try {
      const poll =  await Polling.find();

      if(!poll){
         return res.status(400).json({ message: "Poll not available" });
      }
      const dbItem = poll[0]

      var match = null;
      ["option1", "option2", "option3", "option4"].forEach(opt =>{
         if(dbItem[opt].value === pollValue){
            match = opt;
         }
      })

      if(!match){
         return res.status(400).json({ message: "Invalid option selected" });
      }
         dbItem[match].count += 1;
         dbItem.totalCount += 1;
          const updatedbItem = await dbItem.save();
          return res.status(200).json({message: "Your vote has been successfully updated", updatedPoll: updatedbItem})

   } catch (error) {
      return res.status(500).json({ message:"Catch in POST Register",error: error.message });
   }

}

export const viewResult = async (req, res) =>{
   try {
      const poll = await Polling.find();
      if(!poll){
         return res.status(400).json({message:"You need to add a polling before checking the result"})
      }
      const totalCount = poll[0].totalCount;
      const resultData = [
         {
            option:poll[0].option1.value,
            result: Math.round(poll[0].option1.count/totalCount * 100) || 0
         },
         {
            option:poll[0].option2.value,
            result: Math.round(poll[0].option2.count/totalCount * 100) || 0
         },
         {
            option:poll[0].option3.value,
            result: Math.round(poll[0].option3.count/totalCount * 100) || 0
         },
         {
            option:poll[0].option4.value,
            result: Math.round(poll[0].option4.count/totalCount * 100) || 0
         },
      ]      

      return res.status(200).json(resultData);
   } catch (error) {
      return res.status(500).json({ message:"Catch in POST Register",error: error.message });
   }
}