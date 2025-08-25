"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function CreateCasePage() {
  const [formData, setFormData] = useState({
    // MVP fields
    caseTitle: "",
    caseType: "",
    clientName: "",
    clientEmail: "",
    assignedLawyer: "",
    caseStatus: "",

    // Extended fields
    court: "",
    jurisdiction: "",
    opposingParty: "",
    opposingCounsel: "",
    importantDates: "",
    billingType: "",
    retainerAmount: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()
  
  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (!token || !userData) {
      router.push('/login')
      return
    }

    const parsedUser = JSON.parse(userData)
    if (parsedUser.role !== 'lawyer') {
      router.push('/login')
      return
    }

    setUser(parsedUser)
  }, [])

  const validateForm = () => {
    let newErrors = {};

    // ✅ Required fields only
    if (!formData.caseTitle.trim()) newErrors.caseTitle = "Case title is required";
    if (!formData.caseType.trim()) newErrors.caseType = "Case type is required";
    if (!formData.clientName.trim()) newErrors.clientName = "Client name is required";
    if (!formData.clientEmail.trim()) newErrors.clientEmailError = "Client Email is required";
    if (!formData.assignedLawyer.trim()) newErrors.assignedLawyer = "Assigned lawyer is required";
    if (!formData.caseStatus.trim()) newErrors.caseStatus = "Case status is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // validate if client exists in the database
    try {
      const token = localStorage.getItem('token')

      // create cases
      const createResponse = await fetch('/api/lawyer/cases', {
        headers: {
          'Authorization': `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify(formData)
      })

      if (createResponse.ok) {
        alert("Case created successfully!");
      } else {
        if (createResponse.status != 201) {
          alert("Error creating case");
        }
      }

    } catch (error) {
      console.error('Error creating case:', error)
      setError('Error creating case. Try again later')
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-md">
        <div className="flex gap-10 items-center mb-2">
          <button className="bg-red-600 w-1/6 p-2 rounded text-white" onClick={()=>router.back()}>Back</button>
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Create New Case</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ========== CORE FIELDS (MVP) ========== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Case Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Case Title *</label>
              <input
                type="text"
                value={formData.caseTitle}
                onChange={(e) => setFormData({ ...formData, caseTitle: e.target.value })}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 ${errors.caseTitle ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="e.g. Smith vs Johnson"
              />
              {errors.caseTitle && (
                <p className="text-sm text-red-500 mt-1">{errors.caseTitle}</p>
              )}
            </div>

            {/* Case Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Case Type *</label>
              <input
                type="text"
                value={formData.caseType}
                onChange={(e) => setFormData({ ...formData, caseType: e.target.value })}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 ${errors.caseType ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Civil, Criminal, Corporate..."
              />
              {errors.caseType && (
                <p className="text-sm text-red-500 mt-1">{errors.caseType}</p>
              )}
            </div>

            {/* Client Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Client Name *</label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 ${errors.clientName ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Enter client's full name"
              />
              {errors.clientName && (
                <p className="text-sm text-red-500 mt-1">{errors.clientName}</p>
              )}
            </div>

            {/* Client Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Client Email *
              </label>
              <input
                type="email"
                value={formData.clientEmail}
                onChange={(e) =>
                  setFormData({ ...formData, clientEmail: e.target.value })
                }
                className={`mt-1 block w-full rounded-lg border px-3 py-2 ${errors.clientEmailError ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Client's Email"
              />
              {errors.clientEmailError && (
                <p className="text-sm text-red-500 mt-1">{errors.clientEmailError}</p>
              )}
            </div>

            {/* Assigned Lawyer */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Assigned Lawyer *
              </label>
              <input
                type="text"
                value={formData.assignedLawyer}
                onChange={(e) =>
                  setFormData({ ...formData, assignedLawyer: e.target.value })
                }
                className={`mt-1 block w-full rounded-lg border px-3 py-2 ${errors.assignedLawyer ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Lawyer's name"
              />
              {errors.assignedLawyer && (
                <p className="text-sm text-red-500 mt-1">{errors.assignedLawyer}</p>
              )}
            </div>

            {/* Case Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Case Status *</label>
              <select
                value={formData.caseStatus}
                onChange={(e) => setFormData({ ...formData, caseStatus: e.target.value })}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 ${errors.caseStatus ? "border-red-500" : "border-gray-300"
                  }`}
              >
                <option value="">Select status</option>
                <option value="Open">Open</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Closed">Closed</option>
                <option value="Pending">Pending</option>
              </select>
              {errors.caseStatus && (
                <p className="text-sm text-red-500 mt-1">{errors.caseStatus}</p>
              )}
            </div>
          </div>

          {/* ========== EXTENDED FIELDS ========== */}
          <h2 className="text-lg font-medium text-gray-800 mt-8 border-b pb-2">
            Additional Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Court */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Court</label>
              <input
                type="text"
                value={formData.court}
                onChange={(e) => setFormData({ ...formData, court: e.target.value })}
                className="mt-1 block w-full rounded-lg border px-3 py-2 border-gray-300"
                placeholder="Court name"
              />
            </div>

            {/* Jurisdiction */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Jurisdiction</label>
              <input
                type="text"
                value={formData.jurisdiction}
                onChange={(e) =>
                  setFormData({ ...formData, jurisdiction: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border px-3 py-2 border-gray-300"
                placeholder="Jurisdiction"
              />
            </div>

            {/* Opposing Party */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Opposing Party</label>
              <input
                type="text"
                value={formData.opposingParty}
                onChange={(e) =>
                  setFormData({ ...formData, opposingParty: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border px-3 py-2 border-gray-300"
                placeholder="Opposing party name"
              />
            </div>

            {/* Opposing Counsel */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Opposing Counsel</label>
              <input
                type="text"
                value={formData.opposingCounsel}
                onChange={(e) =>
                  setFormData({ ...formData, opposingCounsel: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border px-3 py-2 border-gray-300"
                placeholder="Opposing lawyer name"
              />
            </div>

            {/* Important Dates */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Important Dates</label>
              <input
                type="date"
                value={formData.importantDates}
                onChange={(e) =>
                  setFormData({ ...formData, importantDates: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border px-3 py-2 border-gray-300"
              />
            </div>

            {/* Billing Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Billing Type</label>
              <select
                value={formData.billingType}
                onChange={(e) =>
                  setFormData({ ...formData, billingType: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border px-3 py-2 border-gray-300"
              >
                <option value="">Select billing type</option>
                <option value="Hourly">Hourly</option>
                <option value="Flat Fee">Flat Fee</option>
                <option value="Contingency">Contingency</option>
                <option value="Retainer">Retainer</option>
              </select>
            </div>

            {/* Retainer Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Retainer Amount</label>
              <input
                type="number"
                value={formData.retainerAmount}
                onChange={(e) =>
                  setFormData({ ...formData, retainerAmount: e.target.value })
                }
                className="mt-1 block w-full rounded-lg border px-3 py-2 border-gray-300"
                placeholder="e.g. 1000"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Notes / Description</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="mt-1 block w-full rounded-lg border px-3 py-2 border-gray-300"
              rows={4}
              placeholder="Case notes, description, or internal comments..."
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end pt-4">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
            >
              Create Case
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
