import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import { RiVideoOnAiFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TbBulbFilled } from "react-icons/tb";
import video1 from '../../assets/veo3/video1.mp4';
import video2 from '../../assets/veo3/video2.mp4';

const titulo = 'Genera videos realistas con Veo 3';
// const contenido = 'Veo3 es una herramienta de IA para análisis de video y visión computacional. Permite detectar, analizar y extraer información relevante de videos de forma automática.';

const GuideVeo3: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#141414] to-[#050505] min-h-screen flex flex-col">
      <Navbar isScrolled={false} />
      <main className="flex-1 pt-24 pb-12">
        <div className="container-custom max-w-3xl mx-auto bg-[#EFF3F8] rounded-3xl shadow-lg p-8">
          <div className="flex items-center justify-center mb-2">
            <RiVideoOnAiFill size={56} className="text-primary-600 drop-shadow-lg" />
          </div>
          <h1 className="text-3xl text-center font-bold mb-4 text-primary-700">{titulo}</h1>
          <p className="text-gray-700 text-lg text-justify mb-6">
            Como te explicamos en el video... por cierto, ¿Ya lo viste? 👉🏽
            <a
                        href="https://www.instagram.com/reel/DKuw8e1Rni6/?utm_source=ig_web_copy_link&igsh=YjJkb3I3bGQzdGR4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block align-center btn-primary px-2 py-1 rounded-3xl font-semibold bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 animated-gradient shadow-md"
                aria-label="Ver video explicativo en Instagram"
            >
                <FaInstagram size={20} className="inline-block align-middle" />
            </a>
            <br />
            Para que puedas acceder a Google One para estudiantes y tener acceso a Veo 3 durante 15 meses totalmente gratis, necesitarás:</p>
          <ol className="space-y-8">
            <li className="border-l-4 border-primary-600 pl-6 relative">
                <span className="absolute -left-7 top-0 bg-primary-600 text-[#EFF3F8] rounded-full w-7 h-7 flex items-center justify-center font-bold">1</span>
                <h2 className="text-xl font-semibold mb-2">Descargar e instalar SetupVPN</h2>
                <p className="text-gray-600 mb-2">
                  Este servicio nos permitirá cambiar nuestra dirección IP y "trasladarnos" virtualmente a Estados Unidos, ya que Google One para
                  estudiantes solo está disponible en ese país. Puedes instalar la extensión en tu navegador favorito:{' '}
                  <a href="https://microsoftedge.microsoft.com/addons/detail/setupvpn-lifetime-free-/okhjkpgblgdjappgfgakbcecdblgffcl" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Microsoft Edge</a> o{' '}
                  <a href="https://chromewebstore.google.com/detail/setupvpn-lifetime-free-vp/oofgbpoabipfcfjapgnbbjjaenockbdp?utm_source=chrome-ntp-icon" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Chrome</a>
                </p>
            </li>
            <li className="border-l-4 border-primary-600 pl-6 relative">
                <span className="absolute -left-7 top-0 bg-primary-600 text-[#EFF3F8] rounded-full w-7 h-7 flex items-center justify-center font-bold">2</span>
                <h2 className="text-xl font-semibold mb-2">Generar correo electrónico temporal</h2>
                <p className="text-gray-600">Necesitarás este correo para que puedas verificar tu "estatus de estudiante" en Google One. Puedes usar{' '}
                <a href="https://tempumail.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">TempuMail</a></p>
            </li>
            <li className="border-l-4 border-primary-600 pl-6 relative">
                <span className="absolute -left-7 top-0 bg-primary-600 text-[#EFF3F8] rounded-full w-7 h-7 flex items-center justify-center font-bold">3</span>
                <h2 className="text-xl font-semibold mb-2">Crear cuenta de Google</h2>
                <p className="text-gray-600">Luego, debes crear una cuenta de Google (pueden ser datos falsos) para que sea tu correo electrónico principal en Google One. Acá puedes hacerlo:{' '}
                <a href="https://accounts.google.com/signup" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google</a></p>
            </li>
            <li className="border-l-4 border-primary-600 pl-6 relative">
                <span className="absolute -left-7 top-0 bg-primary-600 text-[#EFF3F8] rounded-full w-7 h-7 flex items-center justify-center font-bold">4</span>
                <h2 className="text-xl font-semibold mb-2">Solicitar acceso a Google One para estudiantes</h2>
                <p className="text-gray-600">Cuando hayas realizado los pasos anteriores, podrás solicitar el acceso desde el siguiente enlace:{' '}
                <a href="https://one.google.com/join/ai-student" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google One para estudiantes</a></p>
            </li>
            <li className="border-l-4 border-primary-600 pl-6 relative">
                <span className="absolute -left-7 top-0 bg-primary-600 text-[#EFF3F8] rounded-full w-7 h-7 flex items-center justify-center font-bold">5</span>
                <h2 className="text-xl font-semibold mb-2">Crear tarjeta de crédito temportal</h2>
                <p className="text-gray-600">Puedes obtenerla creando una cuenta en Nubank (no tiene costo), sigue estos pasos y obten la tuya: {" "}
                <a href="https://blog.nu.com.co/tarjeta-virtual-nu/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Nubank (ver sección "Una tarjeta virtual fantasma...")</a></p>
            </li>
            <li className="border-l-4 border-primary-600 pl-6 relative">
                <span className="absolute -left-7 top-0 bg-primary-600 text-[#EFF3F8] rounded-full w-7 h-7 flex items-center justify-center font-bold">6</span>
                <h2 className="text-xl font-semibold mb-2">Darle rienda suelta a tu creatividad</h2>
                <p className="text-gray-600">Ya puedes disfrutar de {' '}
                <a href="https://labs.google/fx/es/tools/flow" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Veo 3</a></p>
            </li>
          </ol>
          <div className="flex items-center justify-center mt-5">
            <TbBulbFilled size={60} className="text-yellow-400 text-center animate-pulse" />
          </div>
          <p className="text-gray-600 mt-2 mb-5 text-center">Recuerda que para obtener mejores resultados, debes usar prompts en inglés, claros y específicos. Aquí tienes algunos ejemplos:</p>
          <hr className="my-3" />
          <div className="text-justify my-4">
          <p><b>Prompt:</b> Wide-angle tracking shot of a medieval battlefield at dusk, filmed on a 35mm cinematic lens with a warm, desaturated color grade. A fearless warrior (wearing silver armor) charges forward,
          swinging a glowing sword in slow motion. The camera follows him in a dynamic dolly zoom, capturing sparks flying as blades clash.
          <br />
          <b>Lighting:</b> dramatic backlight with golden flares piercing through the dust. Smoke and fog swirl around the fighters.
          <br />
          <b>Movement:</b> Slow-motion for combat, fast-paced for cavalry in the background.
          <br />
          <b>Audio:</b> Thunderous war drums, clashing steel, and a haunting choir chanting in Latin.
          <br />
          <b>Dialogue (in Spanish):</b>
          <br />
          <li className="ml-6">Warrior (deep, commanding voice): "¡Nadie retrocede! ¡Defended vuestra tierra!"</li>
          <li className="ml-6">Enemy leader (raspy, menacing tone): "Tu valentía no salvará a tu pueblo."</li>
          <b>Additional notes:</b> No subtitles, realistic physics, blood splatter effects.</p>
          <div className="flex justify-center my-4">
            <video src={video2} controls width="420" height="236" className="rounded-lg shadow-md" preload="metadata">
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
          </div>

          <hr className="my-3" />

          <div className="text-justify my-4">
          <p><b>Prompt:</b> Neon-noir night scene in a futuristic city, shot with an anamorphic lens for cinematic flares. A rogue hacker (wearing a reflective jacket) sprints through crowded streets, dodging drones. Camera angles: Dutch tilt for tension, low-angle shots to emphasize towering skyscrapers.
          <br />
          <b>Lighting:</b> high-contrast neon blues and pinks, with flickering holographic ads casting dynamic shadows.
          <br />
          <b>Movement:</b> Fast-paced shaky cam during the chase, smooth glide shots when hiding.
          <br />
          <b>Audio:</b> Synthwave soundtrack with heavy bass, distant police sirens, and the hum of hovercars.
          <br />
          <b>Dialogue (in Spanish):</b>
          <br />
          <li className="ml-6">Hacker (breathless, urgent): "¡No puedo perderlos! ¡Apaga los drones!"</li>
          <li className="ml-6">AI Companion (calm, synthetic voice): "Sistema de seguridad activado. Riesgo: 87%."</li>
          <b>Additional notes:</b> Glitch effects during digital interference, no text on screen.</p>
          <div className="flex justify-center my-4">
            <video src={video1} controls width="420" height="236" className="rounded-lg shadow-md" preload="metadata">
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
          </div>
          <hr className="my-3" />
        </div>
      </main>
    </div>
  );
};

export default GuideVeo3;
