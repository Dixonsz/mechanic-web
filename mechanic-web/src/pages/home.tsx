import imagen from '../assets/img/taller4.png';
import { useState } from 'react';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-xl md:text-2xl font-bold text-yellow-500">
                Motors M&M
              </div>
            </div>

            {/* Navegación Desktop */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#inicio" className="text-white hover:text-yellow-500 transition text-sm lg:text-base">Inicio</a>
              <a href="#servicios" className="text-white hover:text-yellow-500 transition text-sm lg:text-base">Servicios</a>
              <a href="#nosotros" className="text-white hover:text-yellow-500 transition text-sm lg:text-base">Nosotros</a>
              <a href="#proceso" className="text-white hover:text-yellow-500 transition text-sm lg:text-base">Proceso</a>
              <a href="#ubicacion" className="text-white hover:text-yellow-500 transition text-sm lg:text-base">Ubicación</a>
              <a href="#contacto" className="text-white hover:text-yellow-500 transition text-sm lg:text-base">Contacto</a>
            </nav>

            {/* Botones de acción - Solo Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-white hover:text-yellow-500 transition">
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="text-white hover:text-yellow-500 transition">
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>

            {/* Botón Menú Móvil */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white hover:text-yellow-500 transition"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Menú Móvil Desplegable */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#inicio" 
                  className="text-white hover:text-yellow-500 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inicio
                </a>
                <a 
                  href="#servicios" 
                  className="text-white hover:text-yellow-500 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Servicios
                </a>
                <a 
                  href="#nosotros" 
                  className="text-white hover:text-yellow-500 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Nosotros
                </a>
                <a 
                  href="#proceso" 
                  className="text-white hover:text-yellow-500 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Proceso
                </a>
                <a 
                  href="#ubicacion" 
                  className="text-white hover:text-yellow-500 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ubicación
                </a>
                <a 
                  href="#contacto" 
                  className="text-white hover:text-yellow-500 transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contacto
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section con imagen de fondo */}
      <section id="inicio" className="relative h-[85vh] w-full overflow-hidden bg-gray-900 mt-16 md:mt-0">
        {/* Imagen de fondo */}
        <img 
          src={imagen} 
          alt="Taller mecánico"
          className="w-full h-auto opacity-80"
        />
        
        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Título de Servicios superpuesto */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-8 md:pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Nuestros <span className="text-yellow-500">Servicios</span>
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
                Ofrecemos servicios profesionales de mecánica automotriz con tecnología de punta
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section id="servicios" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Mantenimiento Preventivo
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Servicios regulares de mantenimiento para mantener tu vehículo en óptimas condiciones
                </p>
                <button className="text-yellow-500 font-semibold hover:text-yellow-400 transition">
                  Más información →
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Reparaciones Especializadas
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Diagnóstico y reparación de problemas mecánicos con garantía de calidad
                </p>
                <button className="text-yellow-500 font-semibold hover:text-yellow-400 transition">
                  Más información →
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Diagnóstico Computarizado
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Tecnología avanzada para identificar problemas con precisión y rapidez
                </p>
                <button className="text-yellow-500 font-semibold hover:text-yellow-400 transition">
                  Más información →
                </button>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Cambio de Aceite y Filtros
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Servicio rápido de cambio de aceite y filtros con productos de calidad premium
                </p>
                <button className="text-yellow-500 font-semibold hover:text-yellow-400 transition">
                  Más información →
                </button>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Sistema de Frenos
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Inspección, mantenimiento y reparación completa del sistema de frenos
                </p>
                <button className="text-yellow-500 font-semibold hover:text-yellow-400 transition">
                  Más información →
                </button>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent rounded-2xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500/30 transition-colors">
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  Sistema Eléctrico
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Diagnóstico y reparación de problemas eléctricos y electrónicos del vehículo
                </p>
                <button className="text-yellow-500 font-semibold hover:text-yellow-400 transition">
                  Más información →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Por Qué Elegirnos */}
      <section id="nosotros" className="py-12 md:py-20 px-4 bg-gray-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              ¿Por Qué <span className="text-yellow-500">Elegirnos?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Compromiso, experiencia y calidad en cada servicio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Ventaja 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">+15 Años de Experiencia</h3>
              <p className="text-gray-400">
                Más de una década brindando servicios de calidad
              </p>
            </div>

            {/* Ventaja 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Atención Rápida</h3>
              <p className="text-gray-400">
                Diagnóstico y reparación en el menor tiempo posible
              </p>
            </div>

            {/* Ventaja 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Garantía de Calidad</h3>
              <p className="text-gray-400">
                Todos nuestros trabajos cuentan con garantía
              </p>
            </div>

            {/* Ventaja 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Tecnología Avanzada</h3>
              <p className="text-gray-400">
                Equipos de diagnóstico de última generación
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Cómo Trabajamos */}
      <section id="proceso" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              ¿Cómo <span className="text-yellow-500">Trabajamos?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Proceso simple y transparente en 4 pasos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Paso 1 */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-xl md:text-2xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Agenda tu Cita</h3>
                <p className="text-gray-400">
                  Contacta con nosotros por cualquiera de nuestros medios disponibles
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-xl md:text-2xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Diagnóstico</h3>
                <p className="text-gray-400">
                  Realizamos una revisión completa y detallada de tu vehículo
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-xl md:text-2xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Reparación</h3>
                <p className="text-gray-400">
                  Ejecutamos el trabajo con repuestos de calidad y garantía
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 text-black font-bold text-xl md:text-2xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Entrega</h3>
                <p className="text-gray-400">
                  Recibes tu vehículo listo, con garantía y asesoría post-servicio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contacto" className="py-12 md:py-20 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-black/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Agenda tu cita hoy y mantén tu vehículo en perfectas condiciones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-900 transition">
              Agendar Cita
            </button>
            <a 
              href="https://wa.me/50688940261?text=Hola,%20me%20gustaría%20agendar%20una%20cita.%0A%0A*Datos%20del%20vehículo:*%0AMarca:%20%0AModelo:%20%0AAño:%20%0A%0A*Descripción%20del%20problema:*%0A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-gray-100 transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Sección Ubicación */}
      <section id="ubicacion" className="py-12 md:py-20 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Encuéntranos <span className="text-yellow-500">Aquí</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Visítanos en nuestra ubicación y obtén atención personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mapa */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 h-[400px] md:h-[500px] lg:h-[600px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.8020775197815!2d-83.74913282414293!3d10.196722469617109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0c967a474f981%3A0xbf041accf3e301fa!2sM%26M%20motors!5e0!3m2!1ses!2scr!4v1767517633174!5m2!1ses!2scr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Información de contacto */}
            <div className="space-y-6">
              {/* Dirección */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Dirección</h3>
                    <p className="text-gray-300">
                      M&M Motors<br />
                      Siquirres, Limón<br />
                      Costa Rica
                    </p>
                  </div>
                </div>
              </div>

              {/* Teléfono */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Teléfono</h3>
                    <p className="text-gray-300">+506 8765-4321</p>
                  </div>
                </div>
              </div>

              {/* Horarios */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Horarios de Atención</h3>
                    <div className="space-y-1 text-gray-300">
                      <p><span className="font-semibold text-white">Lunes - Viernes:</span> 7:00 AM - 5:00 PM</p>
                      <p><span className="font-semibold text-white">Sábados:</span> 7:00 AM - 12:00 PM</p>
                      <p><span className="font-semibold text-white">Domingos:</span> Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Correo</h3>
                    <p className="text-gray-300">info@motorsmym.com</p>
                    <p className="text-gray-300">servicios@motorsmym.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Columna 1 - Logo y descripción */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-500 mb-4">Motors M&M</h3>
              <p className="text-gray-400 mb-4">
                Un taller mecánico comprometido con la calidad y la satisfacción del cliente.
              </p>
            </div>

            {/* Columna 2 - Enlaces rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Inicio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Servicios</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Sobre Nosotros</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition">Contacto</a></li>
              </ul>
            </div>

            {/* Columna 3 - Contacto */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +506 8543 2380
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@motorsmym.com
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Guápiles, Costa Rica
                </li>
              </ul>
            </div>

            {/* Columna 4 - Horarios */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Horarios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Lunes - Viernes: 7:00 AM - 5:00 PM</li>
                <li>Sábados: 7:00 AM - 12:00 PM</li>
                <li>Domingos: Cerrado</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Motors M&M. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
     
    </div>
  );
};

export default Home;
