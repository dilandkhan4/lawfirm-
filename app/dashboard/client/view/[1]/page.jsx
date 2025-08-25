'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


export default function CasePage() {
  const router = useRouter();
  const [id, setId] = useState(null);
  const [caseData, setCaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [todoActive, setTodoActive] = useState(false);

  useEffect(() => {

    // Check authentication
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (!token || !userData) {
      router.push('/login')
      return
    }

    const parsedUser = JSON.parse(userData)
    if (parsedUser.role !== 'client') {
      router.push('/login')
      return
    }


    const caseId = window.location.pathname.split('/').pop(); // Get the dynamic segment from URL

    setId(caseId)

    async function fetchCase() {
      try {
        const res = await fetch(`/api/lawyer/cases/${caseId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        
        setCaseData(data);
      } catch (err) {
        console.error('Failed to fetch case:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCase();
  }, []);

  // get user name base on user id.

  const getUserName = async (userId) => {
    let res = await fetch("api/cases/caseUpdate", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Lawyer-id': userId
    }})

    res = await res.json();
    if (res.error) {
      console.error("Failed to fetch user name: ", res.error);
      return 'Unknown User';
    }
  }

  if (loading) return <div className="p-6">Loading case...</div>;
  if (!caseData) return <div className="p-6">Case not found.</div>;

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="flex align-center gap-5 mb-3">
        <h1 className="text-2xl font-bold mb-4">📁 Case Progress Tracker</h1>
      </div>
      <section className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold">{caseData.title}</h2>
        <p className="text-gray-600">Description: {caseData.description}</p>
        <p className="text-sm text-gray-500">
          Status: <span className="font-semibold text-blue-600">{caseData.status}</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Client: {caseData.client.name} | Lawyer: {caseData.lawyer?.user?.name || 'Unassigned'}
        </p>
      </section>

      <section className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">📊 Progress Timeline</h3>
        <ol className="relative border-l border-gray-300">
          {caseData.updates.map((update, index) => (
            <li key={update.id} className="mb-5 ml-6">
              <span className={`absolute w-4 h-4 ${index === caseData.updates.length - 1 ? 'bg-blue-500 animate-pulse' : 'bg-green-500'} rounded-full -left-2 top-1`}></span>
              <h4 className="font-semibold text-gray-800"><b>{update.title}</b></h4>
              <time className="block mb-2 text-sm text-gray-500">{new Date(update.createdAt).toLocaleDateString()}</time>
              <p className="text-gray-600">{update.message}</p>
              <p className="text-sm text-gray-500">Due: {new Date(update.dueDate).toLocaleDateString()}</p>
              <p className="text-sm text-gray-500">Priority: <b>{update.priority}</b></p>
              <p className="text-sm text-gray-500">Assigned to: {update.assignedTo ? update.lawyerName : 'Unassigned'}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">⏰ Reminders</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-between p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <span>Prepare evidence documents</span>
            <span className="text-sm text-gray-500">Due: 2025-08-20</span>
          </li>
          <li className="flex items-center justify-between p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
            <span>Next hearing date</span>
            <span className="text-sm text-gray-500">2025-08-25</span>
          </li>
        </ul>
      </section>
    </main>
  );
}
