import jobsData from '../data/jobs.json'
import JobCard from '../components/JobCard'

export default function AllJobs() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">All Job Listings</h1>
      <div>
        {jobsData.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}
