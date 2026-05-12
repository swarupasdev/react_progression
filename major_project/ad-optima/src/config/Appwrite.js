import { Client, Databases } from "appwrite"

const client = new Client()

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6a0208cf00119e89e4c0")

export const databases = new Databases(client)

export const DATABASE_ID = "6a0209ff00279700c4b5"
export const COLLECTION_ID = "campaigns"