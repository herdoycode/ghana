"use client";
import { Message } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import "./page.scss";

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<Message>();
  const [vM, setVM] = useState(false);
  const router = useRouter();

  useEffect(() => {
    axios.get("/api/messages").then((res) => setMessages(res.data));
  }, []);

  return (
    <div className="admin">
      {vM && (
        <div className="message-prev">
          <div className="mess">
            <h3>Name: {message?.name} </h3>
            <p>Email: {message?.email} </p>
            <p>Phone: {message?.phone} </p>
            <p>Subject: {message?.subject} </p>
            <p>Message: {message?.message} </p>
            <div onClick={() => setVM(false)} className="close">
              <IoCloseSharp />
            </div>
          </div>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td> {message.name} </td>
              <td> {message.email} </td>
              <td> {message.phone} </td>
              <td>
                <button
                  onClick={() => {
                    setVM(true);
                    setMessage(message);
                  }}
                  className="btn-view"
                >
                  View
                </button>
              </td>
              <td>
                <button
                  onClick={() =>
                    axios.delete(`/api/messages/${message.id}`).then(() => {
                      toast.warning("Message Deleted!");
                      setTimeout(() => window.location.reload(), 2000);
                    })
                  }
                  className="btn-delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
