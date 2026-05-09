import {BarChart,Bar,XAxis,YAxis,Tooltip,CartesianGrid}from "recharts"

function CampaignChart({ campaigns }){

    return(
        <BarChart width={500} height={300} data={campaigns}>

            <CartesianGrid strokeDasharray="3 3"/>

            <XAxis dataKey="title"/>
            <YAxis/>

            <Tooltip/>

            <Bar dataKey="impressions"/>
            <Bar dataKey="clicks"/>

        </BarChart>
    )

}

export default CampaignChart