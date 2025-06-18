import { useState } from 'react'
import jobsData from '../data/jobs.json'

export default function AddJob() {
  const [form, setForm] = useState({ title: '', company: '', location: '', experience: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    const newJob = { ...form, id: Date.now() }
    jobsData.push(newJob)
    alert("Job added! (mock update)")
    setForm({ title: '', company: '', location: '', experience: '' })
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Add New Job</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded space-y-4">
        {['title', 'company', 'location', 'experience'].map(key => (
          <input key={key} name={key} placeholder={key.charAt(0).toUpperCase()+key.slice(1)}
            className="w-full border px-4 py-2 rounded" onChange={handleChange} value={form[key]} />
        ))}
        <button className="bg-blue-600 text-white px-6 py-2 rounded" type="submit">Add Job</button>
      </form>
    </div>
  )
}
