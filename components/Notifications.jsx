"use client";
import React, { useEffect, useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/notifications")
      .then((res) => res.json())
      .then((data) => {
        setNotifications(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 w-80 bg-white border border-[#B68C5A] rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-bold mb-2 text-[#B68C5A]">Notifications</h2>
      {loading ? (
        <div className="text-gray-500">Loading...</div>
      ) : notifications.length === 0 ? (
        <div className="text-gray-500">No notifications</div>
      ) : (
        <ul className="space-y-2">
          {notifications.map((n) => (
            <li key={n.id} className="text-sm border-b pb-1 last:border-b-0">
              {n.message}
              <span className="block text-xs text-gray-400 mt-1">{new Date(n.createdAt).toLocaleString()}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
