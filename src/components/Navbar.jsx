import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-teal-700">Jobify</Link>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-5 py-2 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-5 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  )
}
