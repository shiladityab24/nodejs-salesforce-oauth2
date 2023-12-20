require('dotenv').config()
module.exports={
    PORT:process.env.PORT || 3006,
    SF_LOGIN_URL:process.env.SF_LOGIN_URL || 'https://login.salesforce.com',
    SERVER_URL:process.env.SERVER_URL || 'http://localhost:3006',
    SF_USERNAME:process.env.SF_USERNAME ||'username',
    SF_PASSWORD:process.env.SF_PASSWORD || 'password',
    SF_CLIENT_ID: process.env.SF_CLIENT_ID || '',
    SF_CLIENT_SECRET: process.env.SF_CLIENT_SECRET || '',
    SF_CALLBACK_URL:process.env.SF_CALLBACK_URL || 'http://localhost:3006/oauth2/callback'
}
// HOST:process.env.HOST,
// SF_LOGIN_URL:process.env.SF_LOGIN_URL || 'https://login.salesforce.com',
// BACKEND_URL:process.env.BACKEND_URL || 'http://localhost:3006',
// SF_USERNAME:process.env.SF_USERNAME ||'username',
// SF_PASSWORD:process.env.SF_PASSWORD || 'password',
// SF_CLIENT_ID:process.env.SF_CLIENT_ID || '',
// SF_CLIENT_SECRET:process.env.SF_CLIENT_SECRET || '',
// SF_CALLBACK_URL:process.env.SF_CALLBACK_URL || 'http://localhost:3002/oauth2/callback',
// APP_URL:process.env.APP_URL || 'http://localhost:3000'

// .env
// SF_CLIENT_ID =3MVG9Xl3BC6VHB.aePPFXBLXeOBlpJIXQDROW1_wGpNQQ2_l0sz7MI9pBth_gdqFLDmVzzAE66aIDgxU.sIZE
// SF_CLIENT_SECRET =6195D232F4A882666D06A00586F6717583A8B053EA4DC9D976E37FF7A356DF8E
// PORT =3006
// SERVER_URL =http://localhost:3006
// SF_LOGIN_URL =https://login.salesforce.com
// SF_USERNAME =integrationuser@tvs.com
// SF_PASSWORD =Admin@12345TpRjJtHC0TloTPNO0FirtOnf
// SF_CALLBACK_URL=http://localhost:3006/oauth2/callback
// SF_CLIENT_ID=3MVG9Xl3BC6VHB.aePPFXBLXeOBlpJIXQDROW1_wGpNQQ2_l0sz7MI9pBth_gdqFLDmVzzAE66aIDgxU.sIZE
// SF_CLIENT_SECRET=6195D232F4A882666D06A00586F6717583A8B053EA4DC9D976E37FF7A356DF8E