import React, { useState } from "react";

const GetApp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://us-central1-thaiseva-85cda.cloudfunctions.net/sendApkLink", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        console.log("Success:", data.message);
      } else {
        alert("Failed to send email: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong while sending the email.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-blue-800 via-purple-800 to-black">
      <h1 className="text-4xl font-extrabold mb-8 text-white">Get the App</h1>
      {submitted ? (
        <p className="text-green-300 text-lg">
          Thank you, <span className="font-semibold">{name}</span>! You will receive the APK link via email soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-purple-600"
        >
          <label className="block mb-5 text-white font-medium">
            Name:
            <input
              type="text"
              className="mt-2 w-full bg-gray-800 text-white border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="block mb-5 text-white font-medium">
            Email:
            <input
              type="email"
              className="mt-2 w-full bg-gray-800 text-white border border-gray-600 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors font-semibold"
          >
            Get App
          </button>
        </form>
      )}
    </div>
  );
};

export default GetApp;
