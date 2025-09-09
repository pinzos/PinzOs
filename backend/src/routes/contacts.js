import express from 'express'
const router = express.Router()

router.get('/', async (req,res)=>{
  const supabase = req.supabase
  const { data, error } = await supabase.from('contacts').select('*').order('created_at', { ascending: false })
  if (error) return res.status(500).json({ error: error.message })
  res.json(data)
})

router.post('/', async (req,res)=>{
  const { name, phone, email, business_id } = req.body
  const { data, error } = await req.supabase.from('contacts').insert([{ name, phone, email, business_id }]).select().single()
  if (error) return res.status(500).json({ error: error.message })
  res.status(201).json(data)
})

export default router
