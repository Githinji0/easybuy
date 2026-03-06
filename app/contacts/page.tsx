import React from 'react';

export default function ContactsPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto p-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">Get in Touch</h1>
                    <p className="text-lg text-gray-600">We&apos;d love to hear from you. Send us a message!</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg p-6 shadow-md text-center">
            
                        <h3 className="font-semibold mb-2">Address</h3>
                        <p className="text-gray-600">Nairobi, Kenya</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md text-center">
                       
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-gray-600">hello@easybuy.com</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md text-center">
                        
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-gray-600">+254 703333971</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
