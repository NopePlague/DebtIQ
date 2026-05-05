import React, { useState } from 'react'

function Calender() {
  const today = new Date()
  const [currentDate] = useState(today)
  const [selectedDate, setSelectedDate] = useState(today.getDate())
  const [modal, setModal] = useState(null)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const todayDate = today.getDate()

  const monthName = currentDate.toLocaleString("default", {
    month: "long"
  })

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDay = new Date(year, month, 1).getDay()

  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

  const dates = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
  ]

  const paidDays = [5, 9]
  const urgentDays = [12]

  return (
    <div className="bg-slate-200/50 flex-1 p-4 sm:p-8 overflow-y-auto relative h-screen">

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-3xl sm:text-4xl font-bold text-gray-800">
            {monthName} {year}
          </p>
          <p className="text-gray-500 mt-1">
            Stay on track with your financial commitments.
          </p>
        </div>

        <div className="flex gap-4 items-center">
          <button className="bg-white px-4 py-2 rounded-xl border text-sm">
            Today
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-xl text-sm">
            + Add
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">

        <div className="flex-1 flex flex-col gap-6">

          <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200">
            
            <div className="flex gap-6 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-600"></div>
                Paid
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                Upcoming
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                Urgent
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-400 mb-2">
              {days.map(d => <div key={d}>{d}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {dates.map((date, index) => {
                const isPaid = paidDays.includes(date)
                const isUrgent = urgentDays.includes(date)
                const isToday = date === todayDate

                return (
                  <div
                    key={index}
                    onClick={() => date && setSelectedDate(date)}
                    className={`relative h-12 flex items-center justify-center rounded-xl text-sm font-medium cursor-pointer
                      ${date === selectedDate
                        ? "bg-gray-600 text-white"
                        : isToday
                        ? "bg-green-950 text-white"
                        : "bg-slate-100 text-gray-600"
                      }`}
                  >
                    {date}

                    {date && (
                      <span
                        className={`absolute bottom-1 h-1.5 w-1.5 rounded-full
                          ${isPaid
                            ? "bg-green-600"
                            : isUrgent
                            ? "bg-red-500"
                            : "bg-gray-400"
                          }`}
                      ></span>
                    )}
                  </div>
                )
              })}
            </div>

          </div>

        </div>

        <div className="w-full lg:w-[350px] flex flex-col gap-6">

          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200">
            <p className="text-lg font-semibold text-gray-800">
              Monthly Summary
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Your total obligations for {monthName}.
            </p>

            <p className="text-4xl font-bold text-gray-800 mt-4">
              $1,240
            </p>
            <p className="text-gray-500 text-sm">Due</p>

            <div className="w-full h-2 bg-gray-200 rounded-full mt-4 relative">
              <div className="absolute left-0 top-0 h-2 bg-gray-800 rounded-full w-[45%]"></div>
            </div>

            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <p>Paid: $558</p>
              <p>Remaining: $682</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200 flex flex-col gap-4">
            
            <p className="text-lg font-semibold text-gray-800">
              Upcoming Payments
            </p>

            <div className="flex items-center justify-between bg-red-100 rounded-2xl p-4">
              <div className="flex flex-col">
                <p className="text-sm text-red-700 font-medium">
                  Auto Loan
                </p>
                <p className="text-red-700 font-bold">
                  $350 • Due Today
                </p>
              </div>

              <button 
                onClick={() => setModal("pay")}
                className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm"
              >
                Pay Now
              </button>
            </div>

            <div className="flex items-center justify-between bg-slate-100 rounded-2xl p-4">
              <div className="flex flex-col">
                <p className="text-gray-700 font-medium text-sm">
                  Mortgage
                </p>
                <p className="text-gray-500 text-sm">
                  $800 • Oct 15
                </p>
              </div>

              <button 
                onClick={() => setModal("review")}
                className="border border-gray-400 px-4 py-1.5 rounded-full text-sm text-gray-700"
              >
                Review
              </button>
            </div>

          </div>

        </div>

      </div>

      {modal && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm flex flex-col gap-4">
            <p className="text-xl font-bold text-gray-800">
              {modal === "pay" ? "Complete Payment" : "Review Details"}
            </p>

            <p className="text-gray-500 text-sm">
              {modal === "pay"
                ? "Proceed with your payment securely."
                : "View and manage your loan details."
              }
            </p>

            <button className="bg-gray-800 text-white py-2 rounded-xl">
              Confirm
            </button>

            <button 
              onClick={() => setModal(null)}
              className="text-gray-500 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Calender