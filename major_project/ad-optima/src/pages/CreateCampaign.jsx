import { useState } from "react"


function CreateCampaign() {
  const [title, setTitle] = useState("")
  const [budget, setBudget] = useState("")
  const [variant, setVariant] = useState("")

  async function handleSubmit(e) {  //event object
    e.preventDefault()   //prevent refresh after submission

        if(!title || !budget || !variant){
          return alert("Fill all fields")
        }

    const user = JSON.parse(
      localStorage.getItem("user")
    )
    try{

      const response = await fetch(
        "http://localhost:5000/api/campaigns",
        {
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            title,
            budget,
            variant,
            user_id: user.id
          })
        }
      )

      const data = await response.json()
      
      console.log(data)
      if(response.ok){
        setTitle("")
        setBudget("")
        setVariant("")
      }
    }catch(error){
      console.log(error)
    }
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