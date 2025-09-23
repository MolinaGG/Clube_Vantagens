import React, { useState } from 'react';
import { User, Heart, Shield, Download, Edit3, Phone, Mail, MapPin, Calendar, AlertTriangle } from 'lucide-react';
import Layout from '../../components/Layout';
import { mockUser } from '../../data/mockData';

interface ProfilePageProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export default function ProfilePage({ currentTab, onTabChange }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState('personal');

  const handleExportData = () => {
    alert('Exportando todos os dados pessoais e histórico médico...');
  };

  const handleExportInvoices = () => {
    alert('Exportando todas as notas fiscais...');
  };

  const tabs = [
    { id: 'personal', name: 'Dados Pessoais', icon: User },
    { id: 'health', name: 'Dados de Saúde', icon: Heart },
    { id: 'privacy', name: 'Privacidade', icon: Shield }
  ];

  return (
    <Layout 
      title="Meu Perfil" 
      userType="user" 
      showTabs 
      currentTab={currentTab} 
      onTabChange={onTabChange}
    >
      <div className="space-y-8 pb-20">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{mockUser.name}</h2>
                <p className="text-red-100">{mockUser.email}</p>
                <p className="text-red-100 text-sm">Membro desde {new Date(mockUser.createdAt).toLocaleDateString('pt-BR')}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleExportData}
                className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
              >
                <Download className="w-5 h-5" />
                <span className="hidden md:inline">Exportar Dados</span>
              </button>
              <button
                onClick={handleExportInvoices}
                className="flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition-colors"
              >
                <Download className="w-5 h-5" />
                <span className="hidden md:inline">Exportar NFs</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200">
          <div className="flex border-b border-slate-200">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-red-600 border-b-2 border-red-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'personal' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">Informações Pessoais</h3>
                  <button className="flex items-center space-x-2 text-red-600 hover:text-red-700">
                    <Edit3 className="w-4 h-4" />
                    <span>Editar</span>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-500">Nome Completo</label>
                      <p className="text-lg text-slate-900">{mockUser.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-500">CPF</label>
                      <p className="text-lg text-slate-900">{mockUser.cpf}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-500">Data de Nascimento</label>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-slate-400" />
                        <p className="text-lg text-slate-900">
                          {new Date(mockUser.birthDate).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-500">E-mail</label>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-slate-400" />
                        <p className="text-lg text-slate-900">{mockUser.email}</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-500">Telefone</label>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-5 h-5 text-slate-400" />
                        <p className="text-lg text-slate-900">{mockUser.phone}</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-500">CEP</label>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-slate-400" />
                        <p className="text-lg text-slate-900">{mockUser.address.zipCode}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-500">Endereço Completo</label>
                  <p className="text-lg text-slate-900">
                    {mockUser.address.street}, {mockUser.address.number}
                    {mockUser.address.complement && `, ${mockUser.address.complement}`}
                    <br />
                    {mockUser.address.neighborhood} - {mockUser.address.city}/{mockUser.address.state}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'health' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">Dados de Saúde</h3>
                  <button className="flex items-center space-x-2 text-red-600 hover:text-red-700">
                    <Edit3 className="w-4 h-4" />
                    <span>Editar</span>
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-500">Tipo Sanguíneo</label>
                      <p className="text-lg text-slate-900">{mockUser.healthData.bloodType || 'Não informado'}</p>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-slate-500">Alergias</label>
                      {mockUser.healthData.allergies.length > 0 ? (
                        <div className="space-y-1">
                          {mockUser.healthData.allergies.map((allergy, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <AlertTriangle className="w-4 h-4 text-red-500" />
                              <span className="text-slate-900">{allergy}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-slate-500">Nenhuma alergia informada</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-500">Medicamentos em Uso</label>
                      {mockUser.healthData.medications.length > 0 ? (
                        <div className="space-y-1">
                          {mockUser.healthData.medications.map((medication, index) => (
                            <p key={index} className="text-slate-900">• {medication}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-slate-500">Nenhum medicamento informado</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-500">Condições Crônicas</label>
                      {mockUser.healthData.chronicConditions.length > 0 ? (
                        <div className="space-y-1">
                          {mockUser.healthData.chronicConditions.map((condition, index) => (
                            <p key={index} className="text-slate-900">• {condition}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-slate-500">Nenhuma condição crônica informada</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-500">Contato de Emergência</label>
                      <div className="bg-slate-50 p-4 rounded-lg">
                        <p className="font-medium text-slate-900">{mockUser.healthData.emergencyContact.name}</p>
                        <p className="text-slate-600">{mockUser.healthData.emergencyContact.relationship}</p>
                        <p className="text-slate-600">{mockUser.healthData.emergencyContact.phone}</p>
                      </div>
                    </div>

                    {mockUser.healthData.healthInsurance && (
                      <div>
                        <label className="text-sm font-medium text-slate-500">Plano de Saúde</label>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <p className="font-medium text-slate-900">{mockUser.healthData.healthInsurance.provider}</p>
                          <p className="text-slate-600">Cartão: {mockUser.healthData.healthInsurance.cardNumber}</p>
                          <p className="text-slate-600">Válido até: {new Date(mockUser.healthData.healthInsurance.validUntil).toLocaleDateString('pt-BR')}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900">Configurações de Privacidade</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-slate-900">Notificações</h4>
                      <p className="text-sm text-slate-600">Receber notificações sobre benefícios e promoções</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={mockUser.preferences.notifications}
                        className="sr-only peer"
                        readOnly
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-slate-900">Marketing</h4>
                      <p className="text-sm text-slate-600">Receber ofertas personalizadas e campanhas promocionais</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={mockUser.preferences.marketing}
                        className="sr-only peer"
                        readOnly
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-slate-900">Compartilhamento de Dados</h4>
                      <p className="text-sm text-slate-600">Permitir compartilhamento de dados com parceiros</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={mockUser.preferences.dataSharing}
                        className="sr-only peer"
                        readOnly
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-yellow-900">Seus Direitos LGPD</h4>
                      <p className="text-sm text-yellow-800 mt-1">
                        Você tem direito ao acesso, correção, exclusão e portabilidade dos seus dados. 
                        Entre em contato conosco para exercer seus direitos.
                      </p>
                      <div className="flex space-x-4 mt-3">
                        <button className="text-sm text-yellow-700 hover:text-yellow-800 font-medium">
                          Solicitar Dados
                        </button>
                        <button className="text-sm text-yellow-700 hover:text-yellow-800 font-medium">
                          Excluir Conta
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}