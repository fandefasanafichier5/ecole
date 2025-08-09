import React from 'react';

const NoticeBoard = () => {
  const notices = [
    {
      id: 1,
      title: 'Grande réunion de l\'école annonce événement texte de l\'impression.',
      author: 'Publié par Super',
      time: '7 min ago',
      type: 'urgent',
      color: 'bg-orange-100 text-orange-800'
    },
    {
      id: 2,
      title: 'Grande réunion de l\'école annonce événement texte de l\'impression.',
      author: 'Publié par Super',
      time: '7 min ago',
      type: 'normal',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 3,
      title: 'Grande réunion de l\'école annonce événement texte de l\'impression.',
      author: 'Publié par Super',
      time: '7 min ago',
      type: 'urgent',
      color: 'bg-pink-100 text-pink-800'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Tableau d'Affichage</h3>
      
      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="border-l-4 border-blue-500 pl-4">
            <div className="flex items-start justify-between mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${notice.color}`}>
                {notice.type === 'urgent' ? 'Urgent' : 'Normal'}
              </span>
            </div>
            <p className="text-sm text-gray-800 mb-2 leading-relaxed">
              {notice.title}
            </p>
            <div className="text-xs text-gray-500">
              <span>{notice.author}</span>
              <span className="mx-2">•</span>
              <span>{notice.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;