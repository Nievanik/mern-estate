import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [landLord, setLandLord] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandLord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {landLord && (
        <div className="flex flex-col gap-4">
          <p>
            <span className="font-semibold">Contact {landLord.username}</span>{" "}
            for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            id="message"
            rows="2"
            value={message}
            onChange={changeMessage}
            placeholder="Enter your message"
            className="w-full border p-3 rounded-lg"
          ></textarea>

          <Link
            to={`mailto:${landLord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95"
          >
            Send message
          </Link>
        </div>
      )}
    </>
  );
}
