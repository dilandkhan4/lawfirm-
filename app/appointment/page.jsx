import AppointmentForm from '@/components/AppointmentForm'

export const metadata = {
  title: 'Book Appointment - LawStick',
  description: 'Schedule your legal consultation with our expert lawyers',
}

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-[#F9F6EE]">
      <AppointmentForm />
    </div>
  )
}