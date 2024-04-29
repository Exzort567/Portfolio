import React from "react";
import { Link } from "react-router-dom";

function Contact({ data }) {
  return (
    <div id="introduction">
      <div className="flex flex-row justify-center">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="transition-all duration-300 flex items-center justify-center bg-white rounded-full shadow-sm border-transparent w-10 h-10 mx-3 hover:text-slate-100 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 "
          >
            <Link href={item.url} target="_blank">
              <item.icon className="w-5 h-5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Contact;
