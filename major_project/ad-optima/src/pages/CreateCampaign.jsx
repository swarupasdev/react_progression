import { useState } from "react"
function CreateCampaign() {
  const [title, setTitle] = useState("")
  const [budget, setBudget] = useState("")
  const [variant, setVariant] = useState("")

  function handleSubmit(e) {  //event object
    e.preventDefault()   //prevent refresh after submission

    const newCampaign = {
      id: Date.now(),
      title,
      variant,
      budget,
      impressions: 0,
      clicks: 0
    }

    const existingCampaigns=
      JSON.parse(localStorage.getItem("campaigns"))||[]  //preventing null errors 
    const updatedCampaigns=[...existingCampaigns,newCampaign]   //spread operator
    localStorage.setItem(
      "campaigns",
      JSON.stringify(updatedCampaigns)
    ) 
    console.log("Campaign Created:", newCampaign)

    setTitle("")  //clears title input after create
    setBudget("") //clears budjet input
    setVariant("")
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