import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CreditCard } from 'lucide-react';
import Layout from '../../components/Layout';
import type { Service } from '../../types';

interface BookingPageProps {
  service: Service;
  onBack: () => void;
  onConfirmBooking: (bookingData: any) => void;
}

export default function BookingPage({ service, onBack, onConfirmBooking }: BookingPageProps) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('pix');

  const availableDates = [
    '2024-01-15',
    '2024-01-16',
    '2024-01-17',
    '2024-01-18',
    '2024-01-19',
    '2024-01-22',
    '2024-01-23'
  ];

  const availableTimes = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      onConfirmBooking({
        serviceId: service.id,
        date: selectedDate,
        time: selectedTime,
        paymentMethod,
        price: service.discountedPrice
      });
    }
  };

  return (
    <Layout title="Agendamento" showBack onBack={onBack} userType="user">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Service Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{service.name}</h2>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <div className="flex items-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{service.clinicName}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{service.duration}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500 line-through">R$ {service.originalPrice.toFixed(2)}</p>
              <p className="text-3xl font-bold text-blue-600">R$ {service.discountedPrice.toFixed(2)}</p>
              <div className="inline-flex items-center space-x-1 bg-green-50 text-green-700 px-2 py-1 rounded-full text-sm">
                <span>{service.discount}% OFF</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Date and Time Selection */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-blue-600" />
              <span>Selecione Data e Horário</span>
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">Data</label>
                <div className="grid grid-cols-2 gap-2">
                  {availableDates.map(date => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-lg border text-sm transition-colors ${
                        selectedDate === date
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {new Date(date + 'T00:00:00').toLocaleDateString('pt-BR', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short'
                      })}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">Horário</label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimes.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-lg border text-sm transition-colors ${
                          selectedTime === time
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center space-x-2">
              <CreditCard className="w-6 h-6 text-blue-600" />
              <span>Forma de Pagamento</span>
            </h3>

            <div className="space-y-3">
              <div
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  paymentMethod === 'pix'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => setPaymentMethod('pix')}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'pix'}
                    onChange={() => setPaymentMethod('pix')}
                    className="text-blue-600"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">PIX</div>
                    <div className="text-sm text-slate-600">Pagamento instantâneo</div>
                  </div>
                </div>
              </div>

              <div
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  paymentMethod === 'card'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="text-blue-600"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">Cartão de Crédito</div>
                    <div className="text-sm text-slate-600">Parcelamento disponível</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-slate-50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total a pagar:</span>
                <span className="text-2xl font-bold text-blue-600">
                  R$ {service.discountedPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <div className="flex justify-end">
          <button
            onClick={handleBooking}
            disabled={!selectedDate || !selectedTime}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-lg"
          >
            Confirmar Agendamento
          </button>
        </div>
      </div>
    </Layout>
  );
}