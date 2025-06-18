export default function JobCard({ job }) {
  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p>{job.company} - {job.location}</p>
      <p className="text-gray-500">Experience: {job.experience}</p>
    </div>
  )
}
