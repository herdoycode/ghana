"use client";
import { Subscriber } from "@prisma/client";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);

  useEffect(() => {
    axios.get("/api/subscribe").then((res) => setSubscribers(res.data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Subscribers</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {subscribers.map((subscriber) => (
          <tr key={subscriber.id}>
            <td> {subscriber.email} </td>

            <td>
              <button
                onClick={() =>
                  axios.delete(`/api/subscribe/${subscriber.id}`).then(() => {
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
  );
};

export default Subscribers;
