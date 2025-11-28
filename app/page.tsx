'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, AlertTriangle, FileText, Settings, LogOut, 
  Search, Bell, ChevronDown, Filter, ArrowLeft, Phone, Mail, 
  MessageSquare, BookOpen, CheckCircle, Clock, Save, AlertCircle, Send
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

// --- 1. DATOS SIMULADOS (Mismos datos originales) ---
const datosEstudiantes = [
  { 
    id: 1, nombre: "Fernanda Lagos", carrera: "Téc. en Enfermería", semestre: 2, asistencia: 62, notas: 3.8, riesgo: 95, estado: "Crítico", email: "f.lagos@crecermas.cl", telefono: "+569 1234 5678",
    historial: [{mes: 'Mar', riesgo: 40}, {mes: 'Abr', riesgo: 60}, {mes: 'May', riesgo: 85}, {mes: 'Jun', riesgo: 95}],
    comentarios: [
      { fecha: "02/11", mensaje: "No entiendo nada de Anatomía, voy a reprobar...", sentimiento: "Negativo" },
      { fecha: "28/10", mensaje: "¿Alguien tiene los apuntes? No pude ir a clase.", sentimiento: "Neutral" }
    ],
    intervenciones: [
      { id: 1, fecha: "01/11", tipo: "Llamada", nota: "No contestó. Se dejó mensaje de voz.", autor: "Tutor Coord." }
    ],
    recursos: [
      { titulo: "Refuerzo Anatomía I (Cápsula)", tipo: "Video", url: "#" },
      { titulo: "Guía de estudio: Signos Vitales", tipo: "Guía", url: "#" }
    ]
  },
  { 
    id: 2, nombre: "Jorge Muñoz", carrera: "Mecánica Automotriz", semestre: 1, asistencia: 75, notas: 4.2, riesgo: 88, estado: "Alto", email: "j.munoz@crecermas.cl", telefono: "+569 8765 4321",
    historial: [{mes: 'Mar', riesgo: 20}, {mes: 'Abr', riesgo: 30}, {mes: 'May', riesgo: 50}, {mes: 'Jun', riesgo: 88}],
    comentarios: [
      { fecha: "01/11", mensaje: "Profe, necesito más plazo para el taller.", sentimiento: "Neutral" }
    ],
    intervenciones: [],
    recursos: [
      { titulo: "Taller de Nivelación Matemática", tipo: "Taller", url: "#" }
    ]
  },
  { 
    id: 3, nombre: "Camila Rojas", carrera: "Analista Programador", semestre: 4, asistencia: 40, notas: 5.5, riesgo: 82, estado: "Alto", email: "c.rojas@crecermas.cl", telefono: "+569 1122 3344",
    historial: [{mes: 'Mar', riesgo: 60}, {mes: 'Abr', riesgo: 65}, {mes: 'May', riesgo: 70}, {mes: 'Jun', riesgo: 82}],
    comentarios: [],
    intervenciones: [
      { id: 2, fecha: "20/10", tipo: "Correo", nota: "Se envió correo por inasistencias reiteradas.", autor: "Sistema Automático" }
    ],
    recursos: []
  },
  { 
    id: 4, nombre: "Pedro Soto", carrera: "Contabilidad General", semestre: 2, asistencia: 85, notas: 4.5, riesgo: 65, estado: "Medio", email: "p.soto@crecermas.cl", telefono: "+569 3344 5566",
    historial: [{mes: 'Mar', riesgo: 50}, {mes: 'Abr', riesgo: 55}, {mes: 'May', riesgo: 60}, {mes: 'Jun', riesgo: 65}],
    comentarios: [{ fecha: "15/10", mensaje: "Gracias por la clase de hoy!", sentimiento: "Positivo" }],
    intervenciones: [],
    recursos: [{ titulo: "Ejercicios de Balance General", tipo: "Guía", url: "#" }]
  },
  { 
    id: 5, nombre: "Ana Silva", carrera: "Téc. en Enfermería", semestre: 3, asistencia: 92, notas: 6.1, riesgo: 20, estado: "Bajo", email: "a.silva@crecermas.cl", telefono: "+569 9988 7766",
    historial: [{mes: 'Mar', riesgo: 10}, {mes: 'Abr', riesgo: 15}, {mes: 'May', riesgo: 18}, {mes: 'Jun', riesgo: 20}],
    comentarios: [],
    intervenciones: [],
    recursos: []
  },
  { 
    id: 6, nombre: "Luis Bravo", carrera: "Mecánica Automotriz", semestre: 1, asistencia: 55, notas: 3.5, riesgo: 91, estado: "Crítico", email: "l.bravo@crecermas.cl", telefono: "+569 4455 6677",
    historial: [{mes: 'Mar', riesgo: 30}, {mes: 'Abr', riesgo: 50}, {mes: 'May', riesgo: 80}, {mes: 'Jun', riesgo: 91}],
    comentarios: [{ fecha: "03/11", mensaje: "Me cuesta mucho llegar a la sede a tiempo por el trabajo.", sentimiento: "Negativo" }],
    intervenciones: [],
    recursos: [{ titulo: "Programa de Apoyo Estudiante Trabajador", tipo: "Taller", url: "#" }]
  },
  { 
    id: 7, nombre: "Marta Diaz", carrera: "Analista Programador", semestre: 2, asistencia: 88, notas: 5.8, riesgo: 15, estado: "Bajo", email: "m.diaz@crecermas.cl", telefono: "+569 2233 4455",
    historial: [{mes: 'Mar', riesgo: 20}, {mes: 'Abr', riesgo: 18}, {mes: 'May', riesgo: 15}, {mes: 'Jun', riesgo: 15}],
    comentarios: [],
    intervenciones: [],
    recursos: []
  },
  { 
    id: 8, nombre: "Sofía Vargas", carrera: "Turismo", semestre: 4, asistencia: 72, notas: 4.8, riesgo: 78, estado: "Alto", email: "s.vargas@crecermas.cl", telefono: "+569 6677 8899",
    historial: [{mes: 'Mar', riesgo: 40}, {mes: 'Abr', riesgo: 50}, {mes: 'May', riesgo: 65}, {mes: 'Jun', riesgo: 78}],
    comentarios: [{ fecha: "01/11", mensaje: "Tengo dudas con la fecha del examen.", sentimiento: "Neutral" }],
    intervenciones: [],
    recursos: [{ titulo: "Calendario Académico Actualizado", tipo: "Guía", url: "#" }]
  },
  { 
    id: 9, nombre: "Diego Herrera", carrera: "Logística", semestre: 1, asistencia: 40, notas: 2.5, riesgo: 98, estado: "Crítico", email: "d.herrera@crecermas.cl", telefono: "+569 5544 3322",
    historial: [{mes: 'Mar', riesgo: 50}, {mes: 'Abr', riesgo: 70}, {mes: 'May', riesgo: 90}, {mes: 'Jun', riesgo: 98}],
    comentarios: [{ fecha: "20/10", mensaje: "Creo que me equivoqué de carrera.", sentimiento: "Negativo" }],
    intervenciones: [{ id: 3, fecha: "25/10", tipo: "Entrevista", nota: "Derivado a Orientación Vocacional.", autor: "Psicólogo" }],
    recursos: [{ titulo: "Charla: Vocación y Proyecto de Vida", tipo: "Video", url: "#" }]
  },
  { 
    id: 10, nombre: "Valentina Castro", carrera: "Diseño Gráfico", semestre: 3, asistencia: 95, notas: 6.5, riesgo: 5, estado: "Bajo", email: "v.castro@crecermas.cl", telefono: "+569 1111 2222",
    historial: [{mes: 'Mar', riesgo: 10}, {mes: 'Abr', riesgo: 8}, {mes: 'May', riesgo: 6}, {mes: 'Jun', riesgo: 5}],
    comentarios: [{ fecha: "04/11", mensaje: "¡Me encantó el último proyecto!", sentimiento: "Positivo" }],
    intervenciones: [],
    recursos: []
  }
];

const dataReporte = [
  { name: 'Marzo', Desercion: 2, Retencion: 98 },
  { name: 'Abril', Desercion: 5, Retencion: 95 },
  { name: 'Mayo', Desercion: 8, Retencion: 92 },
  { name: 'Junio', Desercion: 12, Retencion: 88 },
];

const templatesCorreo = [
  { id: 1, titulo: "Alerta de Asistencia", asunto: "Aviso Importante: Asistencia Baja", cuerpo: "Estimado/a {Nombre}, hemos notado que tu asistencia ha bajado del umbral recomendado. Te invitamos a acercarte a coordinación." },
  { id: 2, titulo: "Citación a Tutoría", asunto: "Invitación a Sesión de Apoyo", cuerpo: "Hola {Nombre}, queremos apoyarte en tu proceso académico. Te hemos agendado una sesión con tu tutor para el día..." },
  { id: 3, titulo: "Felicitaciones Académicas", asunto: "¡Excelente Rendimiento!", cuerpo: "Estimado/a {Nombre}, te felicitamos por tus excelentes notas este semestre. ¡Sigue así!" },
  { id: 4, titulo: "Recordatorio de Examen", asunto: "Próximas Evaluaciones", cuerpo: "Recuerda que las evaluaciones finales comienzan la próxima semana. Revisa tu calendario en el portal." }
];

// --- FUNCION HELPER PARA COLORES DINAMICOS ---
const getRiskColor = (riesgo, thresholds) => {
  if (riesgo >= thresholds.critico) return 'bg-red-600 text-white';
  if (riesgo >= thresholds.alto) return 'bg-orange-500 text-white';
  if (riesgo >= thresholds.medio) return 'bg-yellow-500 text-white';
  return 'bg-green-500 text-white';
};

const getRiskTextColor = (riesgo, thresholds) => {
  if (riesgo >= thresholds.critico) return 'text-red-600';
  if (riesgo >= thresholds.alto) return 'text-orange-500';
  if (riesgo >= thresholds.medio) return 'text-yellow-600';
  return 'text-green-600';
};

// --- 3. COMPONENTES DE VISTA ---

// NUEVO MODULO: Centro de Notificaciones y Campañas
const CampaignsView = ({ students, thresholds }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(templatesCorreo[0]);
  const [filterRisk, setFilterRisk] = useState("todos");
  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState("");

  // Filtrar estudiantes según el riesgo seleccionado
  const filteredStudents = students.filter(s => {
    if (filterRisk === "critico") return s.riesgo >= thresholds.critico;
    if (filterRisk === "alto") return s.riesgo >= thresholds.alto && s.riesgo < thresholds.critico;
    if (filterRisk === "medio") return s.riesgo >= thresholds.medio && s.riesgo < thresholds.alto;
    return true; // "todos"
  });

  const handleEnviarCampana = () => {
    if (filteredStudents.length === 0) return;
    setEnviando(true);
    // Simulación de envío
    setTimeout(() => {
      setEnviando(false);
      setMensajeExito(`✅ Se han enviado ${filteredStudents.length} correos exitosamente.`);
      setTimeout(() => setMensajeExito(""), 4000);
    }, 1500);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Mail className="text-brand-blue" /> Centro de Campañas y Comunicaciones
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Panel Izquierdo: Configuración de Campaña */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-700 mb-4 border-b pb-2">1. Seleccionar Plantilla</h3>
            <div className="space-y-3">
              {templatesCorreo.map((t) => (
                <div 
                  key={t.id} 
                  onClick={() => setSelectedTemplate(t)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all ${
                    selectedTemplate.id === t.id 
                      ? 'bg-blue-50 border-blue-500 ring-1 ring-blue-500' 
                      : 'hover:bg-gray-50 border-gray-200'
                  }`}
                >
                  <p className="font-bold text-sm text-gray-800">{t.titulo}</p>
                  <p className="text-xs text-gray-500 truncate">{t.asunto}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-700 mb-4 border-b pb-2">2. Segmentar Audiencia</h3>
            <label className="block text-sm font-medium text-gray-600 mb-2">Filtrar Destinatarios por Riesgo:</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
              value={filterRisk}
              onChange={(e) => setFilterRisk(e.target.value)}
            >
              <option value="todos">Todos los Estudiantes ({students.length})</option>
              <option value="critico">Solo Riesgo Crítico</option>
              <option value="alto">Solo Riesgo Alto</option>
              <option value="medio">Solo Riesgo Medio</option>
            </select>

            <div className="mt-6 p-4 bg-gray-100 rounded-lg text-center">
              <p className="text-sm text-gray-500">Destinatarios Seleccionados</p>
              <p className="text-3xl font-bold text-brand-blue">{filteredStudents.length}</p>
            </div>
          </div>

           <button 
              onClick={handleEnviarCampana}
              disabled={enviando || filteredStudents.length === 0}
              className={`w-full py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
                enviando || filteredStudents.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-blue hover:bg-blue-800 shadow-md'
              }`}
            >
              {enviando ? (
                <>Enviando...</> 
              ) : (
                <><Send size={18} /> Enviar Campaña Masiva</>
              )}
            </button>
            {mensajeExito && (
              <div className="p-3 bg-green-100 text-green-700 text-sm font-bold rounded-lg text-center animate-pulse">
                {mensajeExito}
              </div>
            )}
        </div>

        {/* Panel Derecho: Vista Previa */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 h-full flex flex-col">
            <h3 className="font-bold text-gray-700 mb-6 border-b pb-2">3. Vista Previa del Mensaje</h3>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex-1">
              <div className="border-b border-gray-200 pb-4 mb-4 space-y-2">
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-gray-500 w-16">De:</span> 
                  <span className="text-gray-800">coordinacion@crecermas.cl</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-gray-500 w-16">Para:</span> 
                  <span className="text-gray-800 italic text-xs bg-blue-100 px-2 py-0.5 rounded-full">
                    {filteredStudents.length > 5 
                      ? `${filteredStudents.slice(0, 5).map(s => s.nombre).join(", ")}... y ${filteredStudents.length - 5} más.` 
                      : filteredStudents.map(s => s.nombre).join(", ") || "(Seleccione un filtro)"}
                  </span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-gray-500 w-16">Asunto:</span> 
                  <span className="text-gray-900 font-semibold">{selectedTemplate.asunto}</span>
                </div>
              </div>

              <div className="prose text-gray-700 text-sm whitespace-pre-wrap">
                {selectedTemplate.cuerpo}
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-200 text-xs text-gray-400">
                <p>Este es un mensaje automático del Sistema de Alerta Temprana del IP Crecer Más.</p>
                <p>Por favor no responder a este correo.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// NUEVO MODULO: Configuración (Admin Panel) CON VALIDACIONES
const SettingsView = ({ thresholds, onSave }) => {
  const [localThresholds, setLocalThresholds] = useState(thresholds);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleChange = (level, value) => {
    // Permitimos escribir cualquier cosa, la validación se hace al guardar
    setLocalThresholds({ ...localThresholds, [level]: Number(value) });
  };

  const handleSaveClick = () => {
    // 1. Limpiar mensajes previos
    setMensaje("");
    setError("");

    // 2. VALIDACIONES REQUERIDAS
    // Crítico >= 85, Alto >= 65, Medio >= 40
    if (localThresholds.critico < 85) {
        setError("Error: El umbral de Riesgo Crítico no puede ser menor a 85%.");
        return;
    }
    if (localThresholds.alto < 65) {
        setError("Error: El umbral de Riesgo Alto no puede ser menor a 65%.");
        return;
    }
    if (localThresholds.medio < 40) {
        setError("Error: El umbral de Riesgo Medio no puede ser menor a 40%.");
        return;
    }

    // 3. Validación de consistencia lógica (Crítico > Alto > Medio)
    if (localThresholds.critico <= localThresholds.alto) {
        setError("Error Lógico: El riesgo Crítico debe ser mayor que el Alto.");
        return;
    }
    if (localThresholds.alto <= localThresholds.medio) {
        setError("Error Lógico: El riesgo Alto debe ser mayor que el Medio.");
        return;
    }

    // 4. Guardado Exitoso
    onSave(localThresholds);
    setMensaje("¡Configuración guardada exitosamente!");
    setTimeout(() => setMensaje(""), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Settings className="text-gray-600" /> Configuración de Parametros de IA
      </h2>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Umbrales de Riesgo (Risk Thresholds)</h3>
        <p className="text-sm text-gray-500 mb-6">
          Defina los porcentajes mínimos para categorizar el nivel de alerta. 
          <span className="block mt-1 text-gray-400 text-xs italic">Nota: Existen restricciones mínimas de seguridad (Crítico: 85, Alto: 65, Medio: 40).</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Nivel Crítico */}
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <label className="block text-sm font-bold text-red-800 mb-2">Nivel Crítico (Min 85%)</label>
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                value={localThresholds.critico} 
                onChange={(e) => handleChange('critico', e.target.value)}
                className="w-full border-gray-300 rounded p-2 border focus:ring-red-500"
              />
              <span className="font-bold text-gray-500">%</span>
            </div>
            <p className="text-xs text-red-600 mt-2">Activa protocolos de deserción inminente.</p>
          </div>

          {/* Nivel Alto */}
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <label className="block text-sm font-bold text-orange-800 mb-2">Nivel Alto (Min 65%)</label>
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                value={localThresholds.alto} 
                onChange={(e) => handleChange('alto', e.target.value)}
                className="w-full border-gray-300 rounded p-2 border focus:ring-orange-500"
              />
              <span className="font-bold text-gray-500">%</span>
            </div>
            <p className="text-xs text-orange-600 mt-2">Requiere intervención de tutor.</p>
          </div>

          {/* Nivel Medio */}
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <label className="block text-sm font-bold text-yellow-800 mb-2">Nivel Medio (Min 40%)</label>
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                value={localThresholds.medio} 
                onChange={(e) => handleChange('medio', e.target.value)}
                className="w-full border-gray-300 rounded p-2 border focus:ring-yellow-500"
              />
              <span className="font-bold text-gray-500">%</span>
            </div>
            <p className="text-xs text-yellow-600 mt-2">Seguimiento preventivo.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-end gap-3">
          {error && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-lg border border-red-200 animate-in slide-in-from-right-5">
                <AlertCircle size={18} />
                <span className="font-bold text-sm">{error}</span>
            </div>
          )}
          {mensaje && (
             <div className="flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-lg border border-green-200 animate-in slide-in-from-right-5">
                <CheckCircle size={18} />
                <span className="font-bold text-sm">{mensaje}</span>
             </div>
          )}
          <button 
            onClick={handleSaveClick}
            className="bg-brand-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-800 transition flex items-center gap-2"
          >
            <Save size={18} /> Guardar Configuración
          </button>
        </div>
      </div>
    </div>
  );
};

// VISTA: Detalle del Estudiante
const StudentDetail = ({ student, onBack, thresholds }) => {
  const [simAsistencia, setSimAsistencia] = useState(student.asistencia);
  const [simNotas, setSimNotas] = useState(student.notas);
  const [intervenciones, setIntervenciones] = useState(student.intervenciones);
  const [nuevaNota, setNuevaNota] = useState("");
  const [errorNota, setErrorNota] = useState("");

  const calcularRiesgoSimulado = () => {
    let nuevoRiesgo = student.riesgo;
    if (simAsistencia > student.asistencia) nuevoRiesgo -= (simAsistencia - student.asistencia) * 0.5; 
    if (simNotas > student.notas) nuevoRiesgo -= (simNotas - student.notas) * 10;
    return Math.max(0, Math.min(100, Math.round(nuevoRiesgo)));
  };
  const riesgoSimulado = calcularRiesgoSimulado();

  const handleAddIntervencion = () => {
    const textoLimpio = nuevaNota.trim();
    if (!textoLimpio) {
      setErrorNota("⚠️ El mensaje no puede estar vacío.");
      return;
    }
    if (textoLimpio.length < 10) {
      setErrorNota("⚠️ El mensaje es muy corto. (mínimo 10 caracteres).");
      return;
    }
    const nueva = {
      id: Date.now(),
      fecha: new Date().toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit' }),
      tipo: "Nota Tutor",
      nota: nuevaNota,
      autor: "Tutor Coord."
    };
    setIntervenciones([nueva, ...intervenciones]);
    setNuevaNota("");
    setErrorNota("");
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <button onClick={onBack} className="flex items-center text-gray-500 hover:text-brand-blue transition">
        <ArrowLeft size={20} className="mr-2" /> Volver al Dashboard
      </button>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <div className="flex justify-between items-start">
          <div className="flex gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500">
              {student.nombre.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{student.nombre}</h2>
              <p className="text-gray-500">{student.carrera} - Semestre {student.semestre}</p>
              <div className="flex gap-4 mt-2 text-sm text-gray-600">
                <span className="flex items-center gap-1"><Mail size={14}/> {student.email}</span>
                <span className="flex items-center gap-1"><Phone size={14}/> {student.telefono}</span>
              </div>
            </div>
          </div>
          <div className={`px-4 py-2 rounded-lg font-bold text-center ${getRiskColor(student.riesgo, thresholds)}`}>
            <p className="text-xs opacity-90">Riesgo Actual</p>
            <p className="text-xl">{student.riesgo}%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <MessageSquare className="text-purple-600" size={20}/> Análisis de Sentimiento
            </h3>
            <div className="space-y-3">
              {student.comentarios.length > 0 ? student.comentarios.map((com, idx) => (
                <div key={idx} className={`p-4 rounded-lg border-l-4 ${
                  com.sentimiento === 'Negativo' ? 'bg-red-50 border-red-500' : com.sentimiento === 'Positivo' ? 'bg-green-50 border-green-500' : 'bg-gray-50 border-gray-300'
                }`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-bold text-gray-500">{com.fecha}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      com.sentimiento === 'Negativo' ? 'bg-red-100 text-red-700' : com.sentimiento === 'Positivo' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-700'
                    }`}>
                      {com.sentimiento}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 italic">"{com.mensaje}"</p>
                </div>
              )) : <p className="text-gray-400 text-sm italic">No hay actividad reciente en foros.</p>}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle className="text-green-600" size={20}/> Bitácora de Gestión
            </h3>
            <div className="mb-6">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Registrar nueva acción..." 
                  className={`flex-1 border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 transition-all ${
                    errorNota ? 'border-red-500 focus:ring-red-200 bg-red-50' : 'border-gray-300 focus:ring-brand-blue'
                  }`}
                  value={nuevaNota} 
                  onChange={(e) => {
                    setNuevaNota(e.target.value);
                    if (errorNota) setErrorNota("");
                  }} 
                  onKeyPress={(e) => e.key === 'Enter' && handleAddIntervencion()} 
                />
                <button 
                  onClick={handleAddIntervencion} 
                  className="bg-brand-blue text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-800 transition"
                >
                  Registrar
                </button>
              </div>
              {errorNota && (
                <p className="text-red-500 text-xs mt-2 ml-1 font-semibold animate-in slide-in-from-top-1">
                  {errorNota}
                </p>
              )}
            </div>

            <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
              {intervenciones.length > 0 ? intervenciones.map((inter) => (
                <div key={inter.id} className="flex gap-3 items-start animate-in fade-in duration-300">
                  <div className="mt-1"><Clock size={16} className="text-gray-400"/></div>
                  <div className="bg-gray-50 p-3 rounded-lg flex-1 border border-gray-100">
                    <div className="flex justify-between text-xs text-gray-500 mb-1"><span className="font-bold text-brand-blue">{inter.autor}</span><span>{inter.fecha}</span></div>
                    <p className="text-sm text-gray-700">{inter.nota}</p>
                  </div>
                </div>
              )) : <p className="text-center text-gray-400 text-sm py-4">No hay intervenciones registradas aún.</p>}
            </div>
          </div>

          {/* GRAFICO RESTAURADO */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <h3 className="text-lg font-bold text-gray-800 mb-4">Proyección de Riesgo</h3>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                   <LineChart data={student.historial}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="mes" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="riesgo" stroke="#003366" strokeWidth={3} />
                   </LineChart>
                </ResponsiveContainer>
             </div>
          </div>

        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-brand-yellow">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2"><Settings className="text-brand-yellow" size={20}/> Simulador</h3>
            <div className="space-y-6">
              <div><div className="flex justify-between text-sm mb-2"><span className="font-semibold text-gray-700">Asistencia</span><span className="font-bold text-blue-600">{simAsistencia}%</span></div><input type="range" min="0" max="100" value={simAsistencia} onChange={(e) => setSimAsistencia(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue" /></div>
              <div><div className="flex justify-between text-sm mb-2"><span className="font-semibold text-gray-700">Notas</span><span className="font-bold text-blue-600">{simNotas.toFixed(1)}</span></div><input type="range" min="1" max="7" step="0.1" value={simNotas} onChange={(e) => setSimNotas(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-blue" /></div>
              <div className={`mt-8 p-4 rounded-lg text-center ${riesgoSimulado < student.riesgo ? 'bg-green-100' : 'bg-gray-50'}`}><p className="text-sm font-semibold text-gray-600">Riesgo Proyectado</p><p className="text-4xl font-bold text-gray-800">{riesgoSimulado}%</p></div>
              <button onClick={() => {setSimAsistencia(student.asistencia); setSimNotas(student.notas)}} className="w-full text-xs text-gray-500 underline mt-2">Restablecer</button>
            </div>
          </div>
          
          {/* RECURSOS SUGERIDOS RESTAURADO */}
          <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg">
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><BookOpen className="text-brand-yellow" size={20}/> Recursos Sugeridos</h3>
             <p className="text-xs text-blue-200 mb-4">Recomendaciones basadas en IA.</p>
             <div className="space-y-3">
                {student.recursos.length > 0 ? student.recursos.map((rec, idx) => (
                   <a key={idx} href={rec.url} className="block bg-white/10 hover:bg-white/20 p-3 rounded-lg transition flex items-center gap-3">
                      <div className="bg-brand-yellow text-blue-900 p-1.5 rounded"><FileText size={14} /></div>
                      <div><p className="text-sm font-bold text-white">{rec.titulo}</p><p className="text-xs text-blue-200">{rec.tipo}</p></div>
                   </a>
                )) : <p className="text-sm opacity-70">No hay recomendaciones activas.</p>}
             </div>
             <button className="w-full mt-4 bg-brand-yellow text-blue-900 font-bold py-2 rounded-lg text-sm hover:bg-yellow-400 transition">Enviar al Estudiante</button>
          </div>

        </div>
      </div>
    </div>
  );
};

// VISTA: Alertas
const AlertsView = ({ students, onViewDetail, thresholds }) => {
  // Ahora filtramos usando los umbrales dinámicos (Mayor o igual al umbral "Alto")
  const alertasActivas = students.filter(s => s.riesgo >= thresholds.alto).sort((a, b) => b.riesgo - a.riesgo);
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2"><AlertTriangle className="text-red-600" /> Gestión de Alertas Prioritarias</h2>
        <span className="bg-red-100 text-red-800 text-sm font-bold px-3 py-1 rounded-full">{alertasActivas.length} Casos Críticos/Altos</span>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {alertasActivas.map((student) => (
          <div key={student.id} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4 md:mb-0 w-full md:w-auto">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 font-bold text-lg">!</div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{student.nombre}</h3>
                <p className="text-sm text-gray-500">{student.carrera} • Semestre {student.semestre}</p>
                <div className="flex gap-4 mt-1 text-xs font-medium text-gray-600"><span className="flex items-center gap-1">📉 Asistencia: <span className="text-red-600">{student.asistencia}%</span></span><span className="flex items-center gap-1">📝 Notas: <span className={student.notas < 4 ? "text-red-600" : "text-gray-600"}>{student.notas}</span></span></div>
              </div>
            </div>
            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
              <div className="text-right"><p className="text-xs text-gray-400 uppercase font-bold">Probabilidad Deserción</p><p className={`text-2xl font-bold ${getRiskTextColor(student.riesgo, thresholds)}`}>{student.riesgo}%</p></div>
              <button onClick={() => onViewDetail(student)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center gap-2">Gestionar Caso <ArrowLeft className="rotate-180" size={16}/></button>
            </div>
          </div>
        ))}
        {alertasActivas.length === 0 && <div className="text-center p-10 bg-green-50 rounded-xl border border-green-200 text-green-800"><p className="font-bold text-lg">¡Excelente!</p><p>No hay alertas críticas pendientes bajo los parámetros actuales.</p></div>}
      </div>
    </div>
  );
};

// VISTA: Reportes
const ReportsView = () => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-2xl font-bold text-gray-800">Reportes Académicos y Retención</h2>
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Proyección de Retención vs Deserción (Semestral)</h3>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dataReporte}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Retencion" fill="#82ca9d" name="Retención %" />
            <Bar dataKey="Desercion" fill="#ff6666" name="Deserción %" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

// VISTA: Mis Estudiantes
const MyStudentsView = ({ students, onViewDetail }) => (
  <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <h2 className="text-2xl font-bold text-gray-800">Mis Estudiantes Asignados</h2>
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full text-left text-sm text-gray-600">
        <thead className="bg-gray-50 font-bold uppercase text-xs">
          <tr><th className="px-6 py-4">Nombre</th><th className="px-6 py-4">Carrera</th><th className="px-6 py-4 text-center">Contacto</th><th className="px-6 py-4 text-center">Acción</th></tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {students.map((est) => (
            <tr key={est.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{est.nombre}</td>
              <td className="px-6 py-4">{est.carrera}</td>
              <td className="px-6 py-4 text-center text-blue-600">{est.email}</td>
              <td className="px-6 py-4 text-center"><button onClick={() => onViewDetail(est)} className="text-brand-blue hover:underline font-medium">Ver Ficha</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- 4. APP PRINCIPAL ---
export default function Dashboard() {
  const [view, setView] = useState('dashboard');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  
  // ESTADO NUEVO: Configuración de umbrales
  const [umbrales, setUmbrales] = useState({ critico: 90, alto: 75, medio: 50 });

  const estudiantesFiltrados = datosEstudiantes.filter(est => 
    est.nombre.toLowerCase().includes(busqueda.toLowerCase()) || est.carrera.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleViewDetail = (student) => {
    setSelectedStudent(student);
    setView('detalle');
  };

  // Calcula contadores dinámicos basados en la configuración
  const countCritico = datosEstudiantes.filter(e => e.riesgo >= umbrales.critico).length;
  const countAlto = datosEstudiantes.filter(e => e.riesgo >= umbrales.alto && e.riesgo < umbrales.critico).length;

  return (
    <div className="flex h-screen bg-brand-light font-sans text-gray-800 overflow-hidden">
      <aside className="w-64 bg-brand-blue text-white flex flex-col shadow-2xl z-20">
        <div className="h-20 flex items-center px-6 border-b border-blue-800 bg-brand-blue">
          <div className="w-10 h-10 bg-brand-yellow rounded-full flex items-center justify-center text-brand-blue font-bold text-lg shadow-lg">C</div>
          <div className="ml-3"><h1 className="text-lg font-bold leading-tight">Crecer Más</h1><p className="text-xs text-blue-200 opacity-75">Instituto Profesional</p></div>
        </div>
        <nav className="flex-1 py-6 space-y-1">
          <div onClick={() => setView('dashboard')} className={`cursor-pointer flex items-center px-6 py-3 ${view === 'dashboard' ? 'bg-blue-900 border-l-4 border-brand-yellow' : 'hover:bg-blue-800 border-l-4 border-transparent'}`}><LayoutDashboard size={20} className="mr-3"/> <span className="font-medium">Dashboard</span></div>
          <div onClick={() => setView('alertas')} className={`cursor-pointer flex items-center px-6 py-3 ${view === 'alertas' ? 'bg-blue-900 border-l-4 border-brand-yellow' : 'hover:bg-blue-800 border-l-4 border-transparent'}`}><AlertTriangle size={20} className="mr-3"/> <span className="font-medium">Alertas</span></div>
          <div onClick={() => setView('estudiantes')} className={`cursor-pointer flex items-center px-6 py-3 ${view === 'estudiantes' ? 'bg-blue-900 border-l-4 border-brand-yellow' : 'hover:bg-blue-800 border-l-4 border-transparent'}`}><Users size={20} className="mr-3"/> <span className="font-medium">Estudiantes</span></div>
          <div onClick={() => setView('campanas')} className={`cursor-pointer flex items-center px-6 py-3 ${view === 'campanas' ? 'bg-blue-900 border-l-4 border-brand-yellow' : 'hover:bg-blue-800 border-l-4 border-transparent'}`}><Mail size={20} className="mr-3"/> <span className="font-medium">Comunicaciones</span></div>
          <div onClick={() => setView('reportes')} className={`cursor-pointer flex items-center px-6 py-3 ${view === 'reportes' ? 'bg-blue-900 border-l-4 border-brand-yellow' : 'hover:bg-blue-800 border-l-4 border-transparent'}`}><FileText size={20} className="mr-3"/> <span className="font-medium">Reportes</span></div>
          
          <div className="pt-4 mt-4 border-t border-blue-800">
            <div onClick={() => setView('configuracion')} className={`cursor-pointer flex items-center px-6 py-3 ${view === 'configuracion' ? 'bg-blue-900 border-l-4 border-brand-yellow' : 'hover:bg-blue-800 border-l-4 border-transparent'}`}><Settings size={20} className="mr-3"/> <span className="font-medium">Configuración</span></div>
          </div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-20 bg-white shadow-sm flex items-center justify-between px-8 z-10">
          <h2 className="text-2xl font-bold text-gray-800">
            {view === 'dashboard' && 'Sistema de Alerta Temprana'}
            {view === 'reportes' && 'Reportes de Gestión'}
            {view === 'detalle' && 'Ficha del Estudiante'}
            {view === 'estudiantes' && 'Directorio de Estudiantes'}
            {view === 'alertas' && 'Gestión de Alertas'}
            {view === 'campanas' && 'Campañas de Comunicación'}
            {view === 'configuracion' && 'Configuración de Sistema'}
          </h2>
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer"><Bell size={24} className="text-gray-500 hover:text-brand-blue transition-colors" /><span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span></div>
            <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
              <div className="hidden md:block text-right"><p className="text-sm font-bold text-gray-700">Tutor Coordinador</p><p className="text-xs text-gray-500">Sede Central</p></div>
              <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden border border-gray-200"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User Avatar" /></div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          {view === 'dashboard' && (
             <div className="space-y-8 animate-in fade-in duration-500">
                <div className="grid grid-cols-4 gap-6">
                   <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500"><span className="text-3xl font-bold">2,500</span><p className="text-xs text-gray-500">Total Alumnos</p></div>
                   
                   {/* SECCION CORREGIDA CON &gt; EN LUGAR DE > */}
                   <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500"><span className="text-3xl font-bold">{countCritico}</span><p className="text-xs text-gray-500">Riesgo Crítico (&gt; {umbrales.critico}%)</p></div>
                   <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500"><span className="text-3xl font-bold">{countAlto}</span><p className="text-xs text-gray-500">Riesgo Alto (&gt; {umbrales.alto}%)</p></div>
                   
                   <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500"><span className="text-3xl font-bold">88%</span><p className="text-xs text-gray-500">Retención</p></div>
                </div>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                   <div className="flex justify-between mb-4"><h3 className="font-bold text-lg">Estudiantes en Riesgo</h3><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} /><input type="text" placeholder="Buscar..." className="pl-10 pr-4 py-2 border rounded-lg text-sm w-64" value={busqueda} onChange={e => setBusqueda(e.target.value)} /></div></div>
                   <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 font-bold uppercase text-xs"><tr><th className="p-3">Nombre</th><th className="p-3">Carrera</th><th className="p-3">Asis.</th><th className="p-3">Nota</th><th className="p-3">Riesgo</th><th className="p-3 text-center">Acción</th></tr></thead>
                      <tbody>
                         {estudiantesFiltrados.map(est => (
                            <tr key={est.id} className="border-t hover:bg-gray-50">
                               <td className="p-3 font-medium">{est.nombre}</td>
                               <td className="p-3">{est.carrera}</td>
                               <td className={`p-3 font-bold ${est.asistencia < 60 ? 'text-red-600' : 'text-gray-600'}`}>{est.asistencia}%</td>
                               <td className="p-3">{est.notas}</td>
                               <td className="p-3"><span className={`font-bold ${getRiskTextColor(est.riesgo, umbrales)}`}>{est.riesgo}%</span></td>
                               <td className="p-3 text-center"><button onClick={() => handleViewDetail(est)} className="text-brand-blue underline font-medium">Ver Detalle</button></td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </div>
          )}
          {view === 'detalle' && selectedStudent && <StudentDetail student={selectedStudent} onBack={() => setView('dashboard')} thresholds={umbrales} />}
          {view === 'reportes' && <ReportsView />}
          {view === 'estudiantes' && <MyStudentsView students={datosEstudiantes} onViewDetail={handleViewDetail} />}
          {view === 'alertas' && <AlertsView students={datosEstudiantes} onViewDetail={handleViewDetail} thresholds={umbrales} />}
          {view === 'campanas' && <CampaignsView students={datosEstudiantes} thresholds={umbrales} />}
          {view === 'configuracion' && <SettingsView thresholds={umbrales} onSave={setUmbrales} />}
        </main>
      </div>
    </div>
  );
}