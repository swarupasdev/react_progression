import { useEffect, useState } from "react"

function Dashboard() {  // Dashboard component to display campaign performance
  const [campaigns, setCampaigns] = useState([])

  //useEffect part usually runs after the component mounts
  useEffect(() => {
    const storedCampaigns = JSON.parse(localStorage.getItem("campaigns")) || []

    //simulation engine 
    //autoimpression and auto clicks generating for campaigns
    const updatedCampaigns = storedCampaigns.map((campaign) => {

    //impression  
    const impressions = Math.floor(Math.random() * 1000) + 100  //to scale the random number into a large range and not to get 0 impression 

    
    //clicks
    const clicks = Math.floor(impressions * Math.random() * 0.2)

    return {
      ...campaign,
      impressions,
      clicks
    }
  })

  localStorage.setItem(
    "campaigns",
    JSON.stringify(updatedCampaigns)
  )


    setCampaigns(updatedCampaigns)
  }, [])

  return (
    <>
      <h1>Dashboard</h1>

      {campaigns.length === 0 ? (
        <p>No campaigns created yet</p>
      ) : (

        campaigns.map((campaign)=>{
          let ctr

          if (campaign.impressions>0){
            //click through rate
            ctr = ((campaign.clicks/campaign.impressions)*100).toFixed(2)
          }
          else{
            ctr=0
          }

          return(
            <div key={campaign.id}>
              <h3>{campaign.title}</h3>
              <p>Budget:${campaign.budget}</p>
              <p>Impressions: {campaign.impressions}</p>
              <p>Clicks: {campaign.clicks}</p>
              <p>CTR:{ctr}%</p>
            </div>
          )
        })

      )}
    </>
  )
}

export default Dashboard