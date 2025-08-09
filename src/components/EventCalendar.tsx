import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventCalendar = () => {
  const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  const calendarDays = [
    [null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31]
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Calendrier des Événements</h3>
        <div className="flex items-center space-x-2">
          <ChevronLeft className="w-4 h-4 text-gray-400 cursor-pointer" />
          <span className="text-sm font-medium text-gray-600">Août 2023</span>
          <ChevronRight className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
      </div>

      {/* Calendar Header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="space-y-1">
        {calendarDays.map((week, weekIndex) => (
          <div key={weekIndex} className="grid grid-cols-7 gap-1">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`h-8 flex items-center justify-center text-sm cursor-pointer rounded ${
                  day === null
                    ? ''
                    : day === 15
                    ? 'bg-pink-500 text-white'
                    : day === 23
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;