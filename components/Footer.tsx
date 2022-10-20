function Footer() {
  return (
    <div className="absolute w-full bottom-0 p-2 text-white bg-gray-600 rounded-b-md">
        <span>&copy; {new Date().getFullYear()} Ghis</span>
    </div>
  )
}

export default Footer