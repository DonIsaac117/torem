import React, { useState } from 'react';
import { ArrowLeftIcon, AlertTriangleIcon, HomeIcon, WrenchIcon, DropletIcon, ZapIcon, WifiIcon, BugIcon, PlusIcon } from 'lucide-react';

export function ReportePage() {
  const [formData, setFormData] = useState({
    type: '',
    area: '',
    priority: '',
    description: '',
    name: '',
    apartment: '',
    phone: '',
    email: ''
  });

  const reportTypes = [
    { id: 'damage', label: 'Daño estructural', icon: <HomeIcon className="w-5 h-5" /> },
    { id: 'maintenance', label: 'Mantenimiento', icon: <WrenchIcon className="w-5 h-5" /> },
    { id: 'plumbing', label: 'Plomería', icon: <DropletIcon className="w-5 h-5" /> },
    { id: 'electrical', label: 'Eléctrico', icon: <ZapIcon className="w-5 h-5" /> },
    { id: 'internet', label: 'Internet/Cable', icon: <WifiIcon className="w-5 h-5" /> },
    { id: 'pest', label: 'Control de plagas', icon: <BugIcon className="w-5 h-5" /> },
    { id: 'other', label: 'Otro', icon: <PlusIcon className="w-5 h-5" /> }
  ];

  const areas = [
    'Apartamento',
    'Ascensor',
    'Escaleras',
    'Parqueadero',
    'Zona social',
    'Piscina',
    'Gimnasio',
    'Jardines',
    'Portería',
    'Terraza',
    'Cuarto de basuras',
    'Otro'
  ];

  const priorities = [
    { id: 'low', label: 'Baja', color: 'bg-green-100 text-green-800' },
    { id: 'medium', label: 'Media', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'high', label: 'Alta', color: 'bg-red-100 text-red-800' },
    { id: 'urgent', label: 'Urgente', color: 'bg-red-200 text-red-900' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se enviaría el reporte
    alert('Reporte enviado exitosamente. Te contactaremos pronto.');
    // Resetear formulario
    setFormData({
      type: '',
      area: '',
      priority: '',
      description: '',
      name: '',
      apartment: '',
      phone: '',
      email: ''
    });
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={goBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Volver
            </button>
            <div className="flex items-center gap-3">
              <AlertTriangleIcon className="w-8 h-8 text-orange-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Reporte de Daños o Novedades</h1>
                <p className="text-gray-600">Informa cualquier problema o novedad en el conjunto</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Tipo de Reporte */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-4">
                Tipo de Reporte
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {reportTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, type: type.id }))}
                    className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                      formData.type === type.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    {type.icon}
                    <span className="text-sm font-medium">{type.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Área y Prioridad */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="area" className="block text-lg font-semibold text-gray-800 mb-3">
                  Área afectada
                </label>
                <select
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                >
                  <option value="">Selecciona un área</option>
                  {areas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Prioridad
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {priorities.map((priority) => (
                    <button
                      key={priority.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, priority: priority.id }))}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        formData.priority === priority.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      } ${priority.color}`}
                    >
                      {priority.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Descripción */}
            <div>
              <label htmlFor="description" className="block text-lg font-semibold text-gray-800 mb-3">
                Descripción detallada
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Describe el problema o novedad de manera detallada..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
              />
            </div>

            {/* Información de Contacto */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Información de Contacto</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-2">
                    Apartamento
                  </label>
                  <input
                    type="text"
                    id="apartment"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    required
                    placeholder="Ej: Torre A - Apto 304"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email (opcional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-lg"
              >
                Enviar Reporte
              </button>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">¿Qué pasa después?</h3>
          <ul className="text-blue-700 space-y-1">
            <li>• Recibirás un número de ticket para seguimiento</li>
            <li>• La administración revisará tu reporte en máximo 24 horas</li>
            <li>• Te contactaremos para coordinar la solución</li>
            <li>• Puedes consultar el estado de tu reporte en cualquier momento</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
