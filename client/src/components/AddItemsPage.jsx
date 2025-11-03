// App.jsx or parent component
import React, { useState } from 'react';
import OrderForm from '../ui/AddItems.jsx';

function AddItemsPage() {
  const [orders, setOrders] = useState([]);

  const handleOrderSubmit = (orderData) => {
    console.log('New order:', orderData);
    setOrders(prev => [...prev, { ...orderData, id: Date.now() }]);
    alert('Order added successfully!');
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07060a] to-[#0a0a0a] flex items-center justify-center py-12">
      <div className="w-full max-w-3xl mx-auto p-8 md:p-12 bg-[#0f0f12] border border-purple-700/20 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              Add New Item
            </h1>
            <p className="mt-1 text-sm text-purple-200/60 max-w-xl">
              Create menu items quickly. Use the form below to add new dishes — fields are validated and saved locally.
            </p>
          </div>
         
        </div>

        {/* Form */}
        <div className="mt-6">
          <div className="bg-[#0b0b0d] border border-purple-700/10 rounded-lg p-6">
            <OrderForm onSubmit={handleOrderSubmit} onCancel={handleCancel} />
          </div>
        </div>

        {/* Orders List */}
        {orders.length > 0 && (
          <div className="mt-8 space-y-4">
            <h3 className="text-lg font-semibold text-white">Orders List</h3>
            <div className="grid gap-4">
              {orders.map(order => (
                <div key={order.id} className="bg-gradient-to-r from-[#0b0b0d] to-[#111113] border border-purple-800/10 rounded-xl p-4 shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-white text-lg">{order.name}</h4>
                      {order.description && (
                        <p className="text-sm text-purple-200/70 mt-1">{order.description}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-purple-300">{order.category || '—'}</p>
                      <p className="text-xs text-gray-400 mt-1">ID: {order.id}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm text-gray-400">
                      Serving: {order.dateOfServing ? new Date(order.dateOfServing).toLocaleDateString() : 'N/A'}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigator.clipboard?.writeText(JSON.stringify(order))}
                        className="text-xs px-3 py-1 rounded-full bg-purple-700/60 hover:bg-purple-600 transition text-white"
                      >
                        Copy
                      </button>
                      <button
                        onClick={() => setOrders(prev => prev.filter(o => o.id !== order.id))}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 transition text-white"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddItemsPage;
