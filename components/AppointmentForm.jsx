'use client'
import { useState } from 'react'
import Image from 'next/image'

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    date: '',
    reason: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('') // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('Appointment booked successfully! We will contact you soon.')
        setMessageType('success')
        setFormData({
          clientName: '',
          clientEmail: '',
          clientPhone: '',
          date: '',
          reason: ''
        })
      } else {
        setMessage(data.error || 'Failed to book appointment')
        setMessageType('error')
      }
    } catch (error) {
      setMessage('Network error. Please try again.')
      setMessageType('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0]

  return (
    <section className='max-w-[1320px] mx-auto my-20 px-4'>
      <h4 className='section-heading2 text-center'>online booking</h4>
      <h1 className='mt-6 section-title2 text-center'>Schedule Your Consultation Today</h1>
      <p className='mt-10 text-center section-description2 w-full lg:w-1/2 mx-auto'>
        Take the first step toward resolving your legal issue. Book a free consultation with
        our expert team today, and get the personalized advice and guidance you need
      </p>

      {/* Booking Steps */}
      <div className='flex flex-col md:flex-row mt-14 justify-between gap-4'>
        <div className='bg-[#EFF5F5] grid grid-cols-4 rounded hover:text-[#B68C5A] transition-colors duration-300'>
          <div className='py-14 pl-10'>
            <Image src='/personIcon.png' width={56} height={56} alt='Fill Form' />
          </div>
          <div className='w-[1.5px] h-[78px] mx-10 mt-12 bg-[#D9CDCD]'></div>
          <div className='col-span-2 py-14 pr-16'>
            <p className='lato text-[16px] font-normal'>Step 1</p>
            <h2 className='mt-4 text-[24px] font-bold lato'>Fill Form</h2>
          </div>
        </div>

        <div className='bg-[#EFF5F5] grid grid-cols-4 rounded hover:text-[#B68C5A] transition-colors duration-300'>
          <div className='py-14 pl-10'>
            <Image src='/pay.png' width={56} height={56} alt='Confirmation' />
          </div>
          <div className='w-[1.5px] h-[78px] mx-10 mt-12 bg-[#D9CDCD]'></div>
          <div className='col-span-2 py-14 pr-16'>
            <p className='lato text-[16px] font-normal'>Step 2</p>
            <h2 className='mt-4 text-[24px] font-bold lato'>Confirmation</h2>
          </div>
        </div>

        <div className='bg-[#EFF5F5] grid grid-cols-4 rounded hover:text-[#B68C5A] transition-colors duration-300'>
          <div className='py-14 pl-10'>
            <Image src='/hand.png' width={56} height={56} alt='Meet Lawyer' />
          </div>
          <div className='w-[1.5px] h-[78px] mx-10 mt-12 bg-[#D9CDCD]'></div>
          <div className='col-span-2 py-14 pr-16'>
            <p className='lato text-[16px] font-normal'>Step 3</p>
            <h2 className='mt-4 text-[24px] font-bold lato'>Meet Lawyer</h2>
          </div>
        </div>
      </div>

      {/* Appointment Form */}
      <div className='mt-16 bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto'>
        <h2 className='text-2xl font-bold text-center mb-8 text-[#B68C5A]'>Book Your Appointment</h2>
        
        {message && (
          <div className={`mb-6 p-4 rounded-lg text-center ${
            messageType === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-300' 
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-6'>
          <div>
            <label htmlFor='clientName' className='block text-sm font-medium text-gray-700 mb-2'>
              Full Name *
            </label>
            <input
              type='text'
              id='clientName'
              name='clientName'
              value={formData.clientName}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B68C5A] focus:border-transparent outline-none transition-all'
              placeholder='Enter your full name'
            />
          </div>

          <div>
            <label htmlFor='clientEmail' className='block text-sm font-medium text-gray-700 mb-2'>
              Email Address *
            </label>
            <input
              type='email'
              id='clientEmail'
              name='clientEmail'
              value={formData.clientEmail}
              onChange={handleChange}
              required
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B68C5A] focus:border-transparent outline-none transition-all'
              placeholder='Enter your email address'
            />
          </div>

          <div>
            <label htmlFor='clientPhone' className='block text-sm font-medium text-gray-700 mb-2'>
              Phone Number
            </label>
            <input
              type='tel'
              id='clientPhone'
              name='clientPhone'
              value={formData.clientPhone}
              onChange={handleChange}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B68C5A] focus:border-transparent outline-none transition-all'
              placeholder='Enter your phone number'
            />
          </div>

          <div>
            <label htmlFor='date' className='block text-sm font-medium text-gray-700 mb-2'>
              Preferred Date & Time *
            </label>
            <input
              type='datetime-local'
              id='date'
              name='date'
              value={formData.date}
              onChange={handleChange}
              min={today}
              required
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B68C5A] focus:border-transparent outline-none transition-all'
            />
          </div>

          <div>
            <label htmlFor='reason' className='block text-sm font-medium text-gray-700 mb-2'>
              Reason for Consultation
            </label>
            <textarea
              id='reason'
              name='reason'
              value={formData.reason}
              onChange={handleChange}
              rows={4}
              className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B68C5A] focus:border-transparent outline-none transition-all resize-vertical'
              placeholder='Briefly describe your legal matter...'
            />
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#B68C5A] hover:bg-[#A67B4A] hover:shadow-lg transform hover:-translate-y-1'
            }`}
          >
            {isSubmitting ? 'Booking Appointment...' : 'Book Appointment'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default AppointmentForm