import { useEffect, useState } from "react"
import CampaignChart from "../components/CampaignChart"
import { databases, account, DATABASE_ID, COLLECTION_ID } from "../config/Appwrite"
import {Query} from "appwrite"
function Dashboard() { // Dashboard component to display campaign performance
  const [campaigns, setCampaigns] = useState([])
  const [searchterm, setSearchterm] = useState('')

  //useEffect part usually runs after the component mounts
  useEffect(() => {
    async function fetchCampaigns(){
      try {
        
      const user = await account.get()
      const response = await databases.listDocuments(
          DATABASE_ID,
          COLLECTION_ID
          [
            Query.equal("userID",user.$id)
          ]
        )       
            const storedCampaigns = response.documents
    

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

          setCampaigns(updatedCampaigns)
    } catch (error) {
        console.log(error)
      }
  }  
   fetchCampaigns()
  },[])

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
    databases.deleteDocument(
      DATABASE_ID,
      COLLECTION_ID,
      id
    )
    .then(()=>{
    const updatedCampaigns = campaigns.filter(   //except the selected campaign it keeps everything else 
      (campaign)=>campaign.$id!==id
    )

    setCampaigns(updatedCampaigns)

  }).catch((error)=>{
    console.log(error)
  })
  }
  //filtering campaign logic
  const filteredCampaigns = campaigns.filter((campaign) =>
  campaign.title.toLowerCase().includes(searchterm.toLowerCase()))

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

      <input
      type="text"
      placeholder="Search campaigns"
      value={searchterm}
      onChange={(e) => setSearchterm(e.target.value)}
    />

      <CampaignChart campaigns={campaigns}/>

      {campaigns.length === 0 ? (
        <p>No campaigns created yet</p>
      ) : (

        filteredCampaigns.map((campaign)=>{
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
            <div key={campaign.$id}>
              <h3>{campaign.title}</h3>
              <p>Budget:${campaign.budget}</p>
              <p>Impressions: {campaign.impressions}</p>
              <p>Clicks: {campaign.clicks}</p>
              <p>CTR:{ctr}%</p>
              <p>Recommendation: {recommendation}</p>
              <button onClick={(e)=>deleteCampaign(campaign.$id)}>Delete</button>
            </div>
          )
        })

      )}
    </>
  )
}

export default Dashboard