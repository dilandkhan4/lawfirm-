'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LawyerDashboard() {
  const [user, setUser] = useState(null)
  const [appointments, setAppointments] = useState([])
  const [cases, setCases] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('appointments')
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
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token')

      // Fetch appointments
      const appointmentsResponse = await fetch('/api/lawyer/appointments', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (appointmentsResponse.ok) {
        const appointmentsData = await appointmentsResponse.json()
        setAppointments(appointmentsData)
      }

      // Fetch cases
      const casesResponse = await fetch('/api/lawyer/cases', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (casesResponse.ok) {
        console.log(casesResponse)
        const casesData = await casesResponse.json()
        setCases(casesData)
      }else{
        console.log("Coudn't get cases: ", casesResponse)
      }

    } catch (error) {
      console.error('Error fetching data:', error)
      setError('Error fetching data')
    } finally {
      setLoading(false)
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
      case 'open': return 'bg-blue-100 text-blue-800'
      case 'in-progress': return 'bg-purple-100 text-purple-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
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
              <h1 className="ml-4 text-2xl font-bold text-gray-900">Lawyer Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user?.name}</span>
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📁</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Active Cases
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {cases.filter(c => c.status !== 'closed').length}
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
                  <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">📋</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Cases
                    </dt>
                    <dd className="text-lg font-medium text-gray-900">
                      {cases.length}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('appointments')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'appointments'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                My Appointments ({appointments.length})
              </button>
              <button
                onClick={() => setActiveTab('cases')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'cases'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                My Cases ({cases.length})
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="px-6 py-4">
            {activeTab === 'appointments' && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">My Appointments</h3>
                {appointments.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No appointments assigned to you yet.</p>
                ) : (
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-medium text-gray-900">
                                {appointment.client?.name}
                              </h4>
                              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(appointment.status)}`}>
                                {appointment.status}
                              </span>
                            </div>
                            <div className="mt-2 text-sm text-gray-600">
                              <p><strong>Email:</strong> {appointment.client?.email}</p>
                              {appointment.client?.phone && (
                                <p><strong>Phone:</strong> {appointment.client.phone}</p>
                              )}
                              <p><strong>Date:</strong> {new Date(appointment.date).toLocaleString()}</p>
                              {appointment.reason && (
                                <p><strong>Reason:</strong> {appointment.reason}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'cases' && (
              <div>
                <div className="flex gap-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">My Cases</h3>
                  {/* button to trigger case creation */}
                  <button className="bg-green-50 text-white w-auto px-3 rounded" onClick={()=>router.push("./lawyer/create-case")}>+ Add Case</button>
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
                              <button className="bg-green-50 text-white rounded p-2" onClick={()=>router.push(`./lawyer/${case_.id}`)}>View Details</button>
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
        </div>
      </main>
    </div>
  )
}