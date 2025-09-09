import React, { useEffect, useState } from 'react'

export default function App(){ 
  const [contacts, setContacts] = useState([])

  useEffect(()=>{
    fetch('/api/contacts')
      .then(res => res.json())
      .then(setContacts)
      .catch(console.error)
  },[])

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">PinzOS CRM — Contacts</h1>
      <ul>
        {contacts.map(c => (
          <li key={c.id} className="p-3 mb-2 bg-gray-800 rounded">{c.name} — {c.phone}</li>
        ))}
      </ul>
    </div>
  )
}
