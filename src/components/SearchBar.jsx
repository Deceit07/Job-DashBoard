export default function SearchBar({ filters, setFilters }) {
  const update = (e) => setFilters({ ...filters, [e.target.name]: e.target.value })
  return (
    <div className="bg-white rounded-full shadow-md p-4 mb-4 flex flex-wrap items-center gap-4">
      <input name="title" placeholder="Skills / Title" onChange={update}
        className="flex-1 px-4 py-2 rounded-md border" />
      <select name="experience" onChange={update}
        className="px-4 py-2 rounded-md border">
        <option value="">Experience</option>
        <option value="fresher">Fresher</option>
        <option value="1-3">1-3</option>
        <option value="3-5">3-5</option>
      </select>
      <input name="location" placeholder="Location" onChange={update}
        className="px-4 py-2 rounded-md border" />
    </div>
  )
}
