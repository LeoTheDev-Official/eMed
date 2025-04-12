"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function AppointmentConfirmationPage() {
  const router = useRouter()
  const [isPrinting, setIsPrinting] = useState(false)

  // In a real app, this data would come from the previous form submission
  const appointmentData = {
    doctor: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    date: "April 15, 2025",
    time: "10:30 AM",
    location: "City Hospital, Main Building, Floor 3",
    patientName: "John Doe",
    patientId: "P12345678",
    appointmentId:
      "A" +
      Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0"),
    notes: "First-time visit for chest pain evaluation",
  }

  const handlePrint = () => {
    setIsPrinting(true)
    setTimeout(() => {
      window.print()
      setIsPrinting(false)
    }, 100)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Appointment Confirmed</h1>
          <p className="text-slate-600">Your appointment has been successfully scheduled</p>
        </div>

        <Card className="shadow-lg print:shadow-none" id="printable-content">
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Appointment Details</CardTitle>
                <CardDescription>Reference ID: {appointmentData.appointmentId}</CardDescription>
              </div>
              <div className="text-right print:hidden">
                <p className="text-sm text-slate-500">Confirmation Date</p>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="py-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-500 mb-1">Patient Information</h3>
                  <p className="font-medium">{appointmentData.patientName}</p>
                  <p className="text-slate-600">ID: {appointmentData.patientId}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-500 mb-1">Doctor</h3>
                  <p className="font-medium">{appointmentData.doctor}</p>
                  <p className="text-slate-600">{appointmentData.specialty}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-slate-500 mb-1">Date & Time</h3>
                  <p className="font-medium">{appointmentData.date}</p>
                  <p className="text-slate-600">{appointmentData.time}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-slate-500 mb-1">Location</h3>
                  <p className="font-medium">{appointmentData.location}</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-500 mb-1">Notes</h3>
                <p className="text-slate-600">{appointmentData.notes}</p>
              </div>

              <div className="border-t pt-4">
                <h3 className="text-sm font-medium text-slate-500 mb-2">Important Information</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                  <li>Please arrive 15 minutes before your appointment time</li>
                  <li>Bring your ID and insurance card</li>
                  <li>If you need to cancel or reschedule, please do so at least 24 hours in advance</li>
                  <li>For any questions, call (123) 456-7890</li>
                </ul>
              </div>
            </div>
          </CardContent>

          <CardFooter className="border-t flex justify-between print:hidden">
            <Button variant="outline" onClick={() => router.push("/dashboard")}>
              Return to Dashboard
            </Button>
            <div className="space-x-2">
              <Button variant="outline" onClick={handlePrint} disabled={isPrinting}>
                {isPrinting ? "Printing..." : "Print"}
              </Button>
              <Button onClick={() => router.push("/dashboard/appointments")}>View All Appointments</Button>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-6 text-center text-sm text-slate-500 print:hidden">
          <p>A confirmation email has been sent to your registered email address</p>
        </div>
      </div>
    </div>
  )
}
