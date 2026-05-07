import { useState } from "react"
function CreateCampaign() {
  const [title, setTitle] = useState("")
  const [budget, setBudget] = useState("")

  function handleSubmit(e) {  //event object
    e.preventDefault()   //prevent refresh after submission

    const newCampaign = {
      id: Date.now(),
      title,
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

        <button type="submit">Create</button>
      </form>
    </>
  )
}

export default CreateCampaign