const Profile = () => {
  // Dummy Data
  const student = {
    name: "Rahul Sharma",
    class: "10th A",
    mobile: "+91 9876543210",
    address: "123 MG Road, Lucknow, Uttar Pradesh",
    image: "https://i.pravatar.cc/200?img=12",
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 h-40"></div>

        {/* Profile */}
        <div className="px-8 pb-10">
          {/* Image */}
          <div className="flex justify-center -mt-16">
            <img
              src={student.image}
              alt="Student"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
          </div>

          {/* Name */}
          <div className="text-center mt-4">
            <h1 className="text-3xl font-bold text-gray-800">{student.name}</h1>

            <p className="text-gray-500 mt-1">Student Profile</p>
          </div>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
              <h3 className="text-gray-500 text-sm">Class</h3>
              <p className="text-xl font-semibold text-gray-800">
                {student.class}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
              <h3 className="text-gray-500 text-sm">Mobile Number</h3>
              <p className="text-xl font-semibold text-gray-800">
                {student.mobile}
              </p>
            </div>

            <div className="md:col-span-2 bg-gray-50 rounded-xl p-5 shadow-sm">
              <h3 className="text-gray-500 text-sm">Address</h3>
              <p className="text-lg font-medium text-gray-800">
                {student.address}
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
