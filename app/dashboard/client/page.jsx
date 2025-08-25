'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ClientDashboard() {
  const [user, setUser] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [lawyers, setLawyers] = useState([])
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    reason: '',
    lawyerId: ''
  })
  const [state, setState] = useState(true);
  const [cases, setCases] = useState([]);

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
    if (parsedUser.role !== 'client') {
      router.push('/login')
      return
    }

    setUser(parsedUser)
    fetchData()
    fetchCase()
  }, [])

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token')

      // Fetch client appointments
      const appointmentsResponse = await fetch('/api/client/appointments', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (appointmentsResponse.ok) {
        const appointmentsData = await appointmentsResponse.json()
        setAppointments(appointmentsData)
      }

      // Fetch available lawyers
      const lawyersResponse = await fetch('/api/lawyers', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (lawyersResponse.ok) {
        const lawyersData = await lawyersResponse.json()
        setLawyers(lawyersData)
      }

    } catch (error) {
      console.error('Error fetching data:', error)
      setError('Error fetching data')
    } finally {
      setLoading(false)
    }
  }

  const fetchCase = async () => {
    try {
      const token = localStorage.getItem('token')
      // Fetch clients cases
      const casesResponse = await fetch('/api/client/cases', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (casesResponse.ok) {
        const casesData = await casesResponse.json()
        setCases(casesData)
      }

    } catch (error) {
      console.error('Error fetching data:', error)
      setError('Error fetching data')
    } finally {
      setLoading(false)
    }
  }

  const handleBookingSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const token = localStorage.getItem('token')
      const dateTime = new Date(`${bookingData.date}T${bookingData.time}`)

      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          clientName: user.name,
          clientEmail: user.email,
          clientPhone: user.phone,
          date: dateTime.toISOString(),
          reason: bookingData.reason,
          lawyerId: parseInt(bookingData.lawyerId) || null
        })
      })

      if (response.ok) {
        setShowBookingForm(false)
        setBookingData({ date: '', time: '', reason: '', lawyerId: '' })
        fetchData() // Refresh appointments
      } else {
        const data = await response.json()
        setError(data.error || 'Failed to book appointment')
      }
    } catch (error) {
      console.error('Error booking appointment:', error)
      setError('Error booking appointment')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/login')
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'approved': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <img className="h-8 w-auto" src="/logo.png" alt="LawStick" />
              <h1 className="ml-4 text-2xl font-bold text-gray-900">Client Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.name}</span>
              <button
                onClick={() => setShowBookingForm(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Book Appointment
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md">
            {error}
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📅</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Appointments
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {appointments.length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">⏳</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Pending Appointments
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {appointments.filter(a => a.status === 'pending').length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Approved Appointments
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {appointments.filter(a => a.status === 'approved').length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="flex">
            <div className="px-4 py-5 sm:px-6 border-r-2 cursor-pointer" onClick={() => setState(true)}>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                My Appointments
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                View and track your appointment requests
              </p>
            </div>

            <div className="px-4 py-5 sm:px-6 cursor-pointer" onClick={() => setState(false)}>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                My Cases
              </h3>
            </div>
          </div>

          {
            state && (
              <ul className="divide-y divide-gray-200">
                {appointments.length === 0 ? (
                  <li className="px-6 py-4 text-center text-gray-500">
                    No appointments found. Book your first appointment!
                  </li>
                ) : (
                  appointments.map((appointment) => (
                    <li key={appointment.id} className="px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">
                              Appointment with {appointment.lawyer?.user?.name || 'Lawyer TBD'}
                            </p>
                            <div className="ml-2 flex-shrink-0 flex">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
                                {appointment.status}
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                <span className="mr-2">📅</span>
                                {new Date(appointment.date).toLocaleString()}
                              </p>
                              {appointment.lawyer?.specialty && (
                                <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                  <span className="mr-2">⚖️</span>
                                  {appointment.lawyer.specialty}
                                </p>
                              )}
                            </div>
                          </div>
                          {appointment.reason && (
                            <p className="mt-2 text-sm text-gray-600">
                              <strong>Reason:</strong> {appointment.reason}
                            </p>
                          )}
                          <div className="mt-2 text-xs text-gray-500">
                            {appointment.status === 'pending' && (
                              <span>⏳ Waiting for admin approval</span>
                            )}
                            {appointment.status === 'approved' && (
                              <span>✅ Approved - Please attend at the scheduled time</span>
                            )}
                            {appointment.status === 'cancelled' && (
                              <span>❌ This appointment has been cancelled</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            )
          }

          { !state && (
              <div>
                <div className="flex gap-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">My Cases</h3>
                </div>
                {cases.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No cases assigned to you yet.</p>
                ) : (
                  <div className="space-y-4">
                    {cases.map((case_) => (
                      <div key={case_.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-medium text-gray-900">
                                {case_.title}
                              </h4>
                              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(case_.status)}`}>
                                {case_.status}
                              </span>
                            </div>
                            <div className="mt-2 text-sm text-gray-600">
                              <p><strong>Client:</strong> {case_.client?.name}</p>
                              <p><strong>Description:</strong> {case_.description}</p>
                              <p><strong>Created:</strong> {new Date(case_.createdAt).toLocaleDateString()}</p>
                            </div>
                            <div className="flex justify-center">
                              <button className="bg-green-50 text-white rounded p-2" onClick={()=>router.push(`client/view/${case_.id}`)}>View Details</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
        </div>
      </main>

      {/* Booking Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Book New Appointment</h3>
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    required
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Time</label>
                  <input
                    type="time"
                    required
                    value={bookingData.time}
                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred Lawyer (Optional)</label>
                  <select
                    value={bookingData.lawyerId}
                    onChange={(e) => setBookingData({ ...bookingData, lawyerId: e.target.value })}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Any available lawyer</option>
                    {lawyers.map((lawyer) => (
                      <option key={lawyer.id} value={lawyer.id}>
                        {lawyer.user.name} {lawyer.specialty && `- ${lawyer.specialty}`}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Reason for Appointment</label>
                  <textarea
                    value={bookingData.reason}
                    onChange={(e) => setBookingData({ ...bookingData, reason: e.target.value })}
                    rows={3}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Brief description of your legal matter..."
                  />
                </div>

                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                  >
                    Book Appointment
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowBookingForm(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}