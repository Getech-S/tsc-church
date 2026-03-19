"use client";

import { X, MessageSquare, AlertCircle } from "lucide-react";
import Link from "next/link";

interface MaintenanceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MaintenanceModal({ isOpen, onClose }: MaintenanceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-gray-100">
        
        {/* Header/Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 text-center space-y-4">
          <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-2">
            <AlertCircle size={32} />
          </div>
          
          <h3 className="font-black text-2xl text-gray-900 tracking-tight">System Under Development</h3>
          
          <p className="text-sm text-gray-500 font-medium leading-relaxed">
            Our online payment system is currently being integrated to ensure your security. 
            In the meantime, if you would like to support the ministry, please reach out to us directly.
          </p>

          <div className="pt-4 space-y-3">
            <Link 
              href="/contact#contact-form" 
              className="w-full bg-[#d76b55] hover:bg-[#DD5F4C] text-white py-4 rounded-2xl font-black flex justify-center items-center gap-2 transition-all shadow-lg shadow-orange-100 active:scale-95"
            >
              <MessageSquare size={18} /> Contact Us for Inquiries
            </Link>
            
            <button 
              onClick={onClose}
              className="w-full text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-gray-600 transition-colors"
            >
              Close and Browse Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}