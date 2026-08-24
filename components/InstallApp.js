"use client";

import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }
    
    setDeferredPrompt(null);
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white border border-white/20 backdrop-blur-md transition-all duration-300 shadow-lg cursor-pointer"
      >
        <Download className="w-5 h-5 text-[#ffff39]" />
        <span>Install App</span>
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl text-white">
            
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-black hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mt-2">
              <h3 className="text-xl font-bold mb-2">Do you want to install this app?</h3>
              <p className="text-gray-300 text-sm mb-6">
                Install Shabihaz on your device for a fast, native desktop app experience without browser tabs.
              </p>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-gray-800/80 hover:bg-gray-700 text-gray-300 border border-white/10 transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleInstallClick}
                  className="px-5 py-2.5 rounded-xl bg-[#ffff39] text-black font-semibold transition-all shadow-lg cursor-pointer"
                >
                  Install
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}