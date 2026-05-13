import { useState } from "react"
import { databases,account, DATABASE_ID, COLLECTION_ID} from "../config/Appwrite"
import { ID } from "appwrite"


function CreateCampaign() {
  const [title, setTitle] = useState("")
  const [budget, setBudget] = useState("")
  const [variant, setVariant] = useState("")

  async function handleSubmit(e) {  //event object
    e.preventDefault()   //prevent refresh after submission

    if (title === ""|| budget===""||variant === ""){
      alert("All fields are required")
      return
    }

    const newCampaign = {
      id: Date.now(),
      title,
      variant,
      budget,
      impressions: 0,
      clicks: 0
    }

    const user = await account.get()

    databases.createDocument(

      DATABASE_ID, 
      COLLECTION_ID, 
      ID.unique(),
      {
        title,
         budget: Number(budget),
         variant,
         impressions: 0,
         clicks: 0,
         userID: user.$id
      }
    )
    .then((response)=>{
      console.log("Campaign saved to Appwrite",response)
    })
    .catch((error)=>{
      console.log(error)
    })
    

    console.log("Campaign Created:", newCampaign)

    setTitle("")  //clears title input after create
    setBudget("") //clears budjet input
    setVariant("")  // clears variant input
  }

  return (
    <>
      <h1>Create Campaign</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Campaign Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}  
        />{/*captured typed text n updates state*/}

        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <input
          type="text"
          placeholder="variant name (A/B)"
          value={variant}
          onChange={(e)=>setVariant(e.target.value)}
        />  
        <button type="submit">Create</button>
      </form>
    </>
  )
}

export default CreateCampaign