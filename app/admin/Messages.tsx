"use client";
import { Message } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import "./page.scss";

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    axios.get("/api/messages").then((res) => setMessages(res.data));
  }, []);

  return (
    <div className="admin">
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
                <button className="btn-view">View</button>
              </td>
              <td>
                <button className="btn-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Messages;
