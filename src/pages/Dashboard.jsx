import { useState, useEffect } from 'react'
import jobsData from '../data/jobs.json'
import SearchBar from '../components/SearchBar'
import JobCard from '../components/JobCard'

export default function Dashboard() {
  const [filters, setFilters] = useState({ title: '', experience: '', location: '' })
  const [filtered, setFiltered] = useState(jobsData)

  useEffect(() => {
    setFiltered(
      jobsData.filter(job =>
        job.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        job.experience.toLowerCase().includes(filters.experience.toLowerCase()) &&
        job.location.toLowerCase().includes(filters.location.toLowerCase())
      )
    )
  }, [filters])

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-2 text-center">Find your dream job now</h1>
      <p className="text-center mb-6 text-gray-600">5 lakh+ jobs for you to explore</p>
      <SearchBar filters={filters} setFilters={setFilters} />
      <div>
        {filtered.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  )
}
