import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-6">
      <h1 className="text-2xl font-bold mb-8 text-teal-600">Jobify</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="font-bold text-gray-700 hover:text-blue-500">Dashboard</Link>
        <Link to="/add-job" className="font-bold text-gray-700 hover:text-blue-500">Add Job</Link>
        <Link to="/all-jobs" className="font-bold text-gray-700 hover:text-blue-500">All Jobs</Link>
      </nav>
    </div>
  )
}
