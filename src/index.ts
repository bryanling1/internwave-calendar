import { initExtensionAPI, storeData } from "@internwave/extensions-api"

initExtensionAPI(
    {
        JobTableAPI: {
            onRenderTableCells: async (jobsData) => {
                for(const jobData of jobsData){
                    try{
                        await storeData(
                            jobData.id, 
                            "notes", 
                            [
                                {text: "This is a note", date: new Date().toISOString()}
                            ]
                        )
                        console.log("Store data succeded")
                    }catch(e){
                        console.log("storeData Failed", e)
                    }
                    
                }
                return []
            }
        }
    }
)