'use client';
import { useState, useEffect, useRef } from 'react';

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [audioEnabled, setAudioEnabled] = useState(false);
  
  // Dashboard data states
  const [meetings, setMeetings] = useState<any[]>([]);
  const [sheetForms, setSheetForms] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  
  // Refs for tracking audio and new entries
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const prevCalCount = useRef(0);
  const prevSheetCount = useRef(0);
  const hasInitialized = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
  }, []);

  const playNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => console.log("Audio blocked:", err));
    }
  };

  // PWA App Badge update karne ka function (WhatsApp jaisa red number icon par)
  const updateAppBadge = (count: number) => {
    if ('setAppBadge' in navigator) {
      if (count > 0) {
        (navigator as any).setAppBadge(count).catch((err: any) => console.log("Badge error:", err));
      } else {
        (navigator as any).clearAppBadge().catch((err: any) => console.log("Clear badge error:", err));
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem('admin_logged_in') === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Real-time polling for both Calendly & Google Sheets
  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchData = async () => {
      try {
        // 1. Fetch Calendly/Cal Data
        const resCal = await fetch('/api/webhook/cal');
        const dataCal = await resCal.json();

        // 2. Fetch Google Sheet Form Data
        const resSheet = await fetch('/api/webhook/googlesheet');
        const dataSheet = await resSheet.json();

        if (dataCal.meetings && dataSheet.sheets) {
          const calLen = dataCal.meetings.length;
          const sheetLen = dataSheet.sheets.length;

          if (!hasInitialized.current) {
            prevCalCount.current = calLen;
            prevSheetCount.current = sheetLen;
            hasInitialized.current = true;
          } else {
            // Agar Calendly mein ya Google Sheet mein koi naya data aya hai -> SOUND & BADGE!
            if (calLen > prevCalCount.current || sheetLen > prevSheetCount.current) {
              playNotificationSound();
              
              const newItemsCount = (calLen - prevCalCount.current) + (sheetLen - prevSheetCount.current);
              setUnreadCount((prev) => {
                const totalUnread = prev + (newItemsCount > 0 ? newItemsCount : 1);
                updateAppBadge(totalUnread); // App icon par red badge update hoga
                return totalUnread;
              });
            }
            prevCalCount.current = calLen;
            prevSheetCount.current = sheetLen;
          }

          setMeetings(dataCal.meetings);
          setSheetForms(dataSheet.sheets);
        }
      } catch (e) {
        console.log('Error loading dashboard data');
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Har 5 seconds baad check karega

    return () => clearInterval(interval);
  }, [isLoggedIn]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const res = await fetch('/api/admin-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        setIsLoggedIn(true);
        localStorage.setItem('admin_logged_in', 'true');
      } else {
        setErrorMsg(data.message);
      }
    } catch (err) {
      setErrorMsg('Kuch ghalat ho gaya, dobara koshish karein.');
    }
  };

  // Badge clear karne ka handler jab admin notifications dekh le
  const handleClearNotifications = () => {
    setUnreadCount(0);
    updateAppBadge(0);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen mt-10 flex items-center justify-center bg-black text-white">
        <form onSubmit={handleLoginSubmit} className="bg-black p-8 rounded-2xl shadow-xl w-96 border border-[#ffff39]/20">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#ffff39]">Admin Portal</h2>
          
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500 text-red-400 text-sm rounded-lg text-center font-medium">
              {errorMsg}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm text-white mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 bg-gray-950 border border-[#ffff39]/20 rounded-lg text-white focus:outline-none focus:border-[#ffff39]"
              placeholder="admin@shabihaz.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm text-white mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 bg-gray-950 border border-[#ffff39]/20 rounded-lg text-white focus:outline-none focus:border-[#ffff39]"
              placeholder="••••••••"
            />
          </div>

          <button type="submit" className="w-full bg-[#ffff39] hover:bg-black text-black hover:text-white cursor-pointer border hover:border-[#ffff39]/20 p-3 rounded-lg font-semibold transition">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-30 bg-black text-gray-100 p-8">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center mb-8 border-b border-gray-800 pb-4 gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-[#ffff39]">Shabihaz Admin Dashboard</h1>
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs text-green-400 font-medium">Live Listening...</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Unread Notifications Red Badge Pill */}
          {unreadCount > 0 && (
            <button
              onClick={handleClearNotifications}
              className="bg-red-600 text-white text-xs px-3 py-1.5 rounded-full font-bold flex items-center gap-1.5 shadow-lg animate-pulse cursor-pointer"
              title="Click to clear notifications"
            >
              <span className="w-2 h-2 bg-white rounded-full"></span>
              {unreadCount} New Alerts (Clear)
            </button>
          )}

          {!audioEnabled ? (
            <button
              onClick={() => {
                setAudioEnabled(true);
                playNotificationSound();
              }}
              className="bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold animate-bounce cursor-pointer"
            >
              🔊 Enable Sound Alerts
            </button>
          ) : (
            <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-lg">
              Sound Active ✓
            </span>
          )}

          <button
            onClick={() => {
              localStorage.removeItem('admin_logged_in');
              setIsLoggedIn(false);
            }}
            className="bg-[#ffff39]/10 text-[#ffff39] px-4 py-2 rounded-lg hover:text-white transition text-sm cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Google Sheet Form Submissions Section */}
        <div className="bg-black border border-[#ffff39]/20 p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Google Sheet Form Submissions</h2>
            <span className="bg-[#ffff39]/10 text-[#ffff39] text-xs px-3 py-1 rounded-full font-bold">
              Total Forms: {sheetForms.length}
            </span>
          </div>

          {sheetForms.length === 0 ? (
            <p className="text-white text-sm">Form Submission Notifications.</p>
          ) : (
            <div className="space-y-3">
              {sheetForms.map((f: any, idx: number) => (
                <div key={idx} className="p-4 bg-black border border-[#ffff39]/20 rounded-lg flex justify-between items-center">
                  <div>
                    <span className="text-xs bg-[#ffff39]/10 text-[#ffff39] px-2 py-0.5 rounded font-mono mb-1 inline-block">
                      {f.status}
                    </span>
                    <h3 className="font-semibold text-white">{f.name} ({f.email})</h3>
                    <p className="text-xs text-white mt-1">{f.message}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white block">{new Date(f.date).toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Calendly / Cal.com Bookings Section */}
        <div className="bg-black border border-[#ffff39]/20 p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-white">Live Booking & Meeting Triggers</h2>
            <span className="bg-[#ffff39]/10 text-[#ffff39] text-xs px-3 py-1 rounded-full font-bold">
              Total Meetings: {meetings.length}
            </span>
          </div>

          {meetings.length === 0 ? (
            <p className="text-white text-sm">Meetings Are here..</p>
          ) : (
            <div className="space-y-3">
              {meetings.map((m: any, idx: number) => (
                <div key={idx} className="p-4 bg-black border border-[#ffff39]/20 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-[#ffff39]/10 text-[#ffff39] px-2 py-0.5 rounded font-mono">
                        {m.trigger}
                      </span>
                    </div>
                    <h3 className="font-semibold text-white">{m.name} ({m.email})</h3>
                    <p className="text-xs text-white mt-1">{m.meetingName}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-white block">{new Date(m.eventTime).toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}