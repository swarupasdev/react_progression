import { useEffect, useState } from "react"
import CampaignChart from "../components/CampaignChart"

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


    //object spread
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

  //best campaign logic
  let bestCampaign = null
  let highestCTR = 0

  campaigns.forEach((campaign)=>{
    let ctr = 0

    if (campaign.impressions>0){
      ctr =(campaign.clicks/campaign.impressions)*100
    }

    if(ctr > highestCTR){
      highestCTR = ctr
      bestCampaign = campaign
    }
  })

  //grouping logic
  let variantWinner = null
  let highestVariantCTR = 0

  const groupedCampaigns={}

  campaigns.forEach((campaign)=>{
    if (!groupedCampaigns[campaign.title]){
      groupedCampaigns[campaign.title]=[]
    }

    groupedCampaigns[campaign.title].push(campaign)

  })

  //find winning variant
  Object.values(groupedCampaigns).forEach((group)=>{
    if (group.length >= 2){
      group.forEach((campaign)=>{
        let ctr = 0
        if (campaign.impressions>0){
          ctr = (campaign.clicks/campaign.impressions)*100
        }

        if (ctr>highestVariantCTR){
          highestVariantCTR = ctr
          variantWinner = campaign
        }

      })
    }
  })


  //delete Campaign
  function deleteCampaign(id){
    const updatedCampaigns = campaigns.filter(   //except the selected campaign it keeps everything else 
      (campaign)=>campaign.id!==id
    )

    setCampaigns(updatedCampaigns)

    localStorage.setItem("campaigns",JSON.stringify(updatedCampaigns))
  }


  return (
    <>
      <h1>Dashboard</h1>

      {bestCampaign &&(
          <div>
            <h2>Best Performing Ad</h2>
            <p>{bestCampaign.title}</p>
            <p>CTR: {highestCTR.toFixed(2)}%</p>
          </div>
      )}
  
      {variantWinner && (
        <div>
          <h2>A/B Test winner</h2>
          <p>{variantWinner.title}</p>
          <p>Variant: {variantWinner.variant}</p>
          <p>CTR: {highestVariantCTR.toFixed(2)}%</p>
        </div>
      )}

  <CampaignChart campaigns={campaigns}/>

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

          let recommendation = ""

            if (ctr > 10) {
                recommendation = "Increase Budget"
            }
            else if (ctr < 3) {
                recommendation = "Pause Campaign"
            }
            else {
                recommendation = "Monitor Performance"
            }
      

            
          return(
            <div key={campaign.id}>
              <h3>{campaign.title}</h3>
              <p>Budget:${campaign.budget}</p>
              <p>Impressions: {campaign.impressions}</p>
              <p>Clicks: {campaign.clicks}</p>
              <p>CTR:{ctr}%</p>
              <p>Recommendation: {recommendation}</p>
              <button onClick={(e)=>deleteCampaign(campaign.id)}>Delete</button>
            </div>
          )
        })

      )}
    </>
  )
}

export default Dashboard