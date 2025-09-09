import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'
import contactsRouter from './routes/contacts.js'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

// inject client to routes
app.use((req,res,next)=>{ req.supabase = supabase; next() })
app.use('/api/contacts', contactsRouter)

app.get('/health', (req,res)=>res.json({ok:true}))

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>console.log(`Listening on ${PORT}`))
