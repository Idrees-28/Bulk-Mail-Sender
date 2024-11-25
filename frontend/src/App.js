import { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

function App() {
  const [msg, setmsg] = useState("");
  const [status, setstatus] = useState(false);
  const [emailList, setEmailList] = useState([]);

  // Handle message input
  function handlemsg(evt) {
    setmsg(evt.target.value);
  }

  // Handle sending emails
  function send() {
    if (!msg.trim() || emailList.length === 0) {
      alert("Please enter a message and upload a valid email list.");
      return;
    }
    setstatus(true);
    axios
      .post("http://localhost:5000/sendmail", { msg: msg, emailList: emailList })
      .then(function (data) {
        if (data.data === true) {
          alert("Emails sent successfully!");
          setstatus(false);
        } else {
          alert("Failed to send emails. Please try again.");
          setstatus(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while sending the emails.");
        setstatus(false);
      });
  }

  // Handle file upload
  function handlefile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const arrayBuffer = event.target.result;
      const workbook = XLSX.read(arrayBuffer, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const emailList = XLSX.utils
        .sheet_to_json(worksheet, { header: "A" })
        .map((item) => item.A) // Extract the email values
        .filter((email) => !!email); // Remove undefined or empty values

      setEmailList(emailList);
    };

    reader.readAsArrayBuffer(file);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-950 text-white text-center py-4">
        <h1 className="text-2xl md:text-4xl font-bold">BulkMail</h1>
      </div>

      {/* Introduction Section */}
      <div className="bg-blue-800 text-white text-center py-4">
        <h2 className="text-lg md:text-xl font-medium">
          We can help your business with sending multiple emails at once
        </h2>
      </div>

      {/* Email Input Section */}
      <div className="bg-blue-400 flex flex-col items-center text-black py-6">
        <textarea
          onChange={handlemsg}
          value={msg}
          className="w-[90%] md:w-[70%] h-32 p-4 border border-gray-400 rounded-md resize-none"
          placeholder="Enter the email text..."
        ></textarea>
        <div className="mt-4">
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handlefile}
            className="border-2 border-dashed w-[90%] md:w-[70%] p-3 text-center bg-gray-100 hover:bg-gray-200 cursor-pointer"
          />
        </div>
        <p className="text-center text-sm sm:text-base mt-2">
          Total Emails in the file: <strong>{emailList.length}</strong>
        </p>

        <button
          onClick={send}
          className="mt-4 bg-blue-950 text-white py-2 px-6 rounded-md font-medium hover:bg-blue-800"
        >
          {status ? "Sending..." : "Send"}
        </button>
      </div>

      {/* Footer */}
      <div className="bg-blue-300 text-white text-center py-8">
        <p>BulkMail App - Simplify your email campaigns</p>
      </div>
    </div>
  );
}

export default App;
