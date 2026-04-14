import { Icon } from "@iconify/react";

export default function WhatsAppFloat() {
  return (
    <a href="https://wa.me/918888784444?text=Hi%20Eureka%20Doors%2C%20I%27m%20interested%20in%20bulk%20door%20orders." target="_blank" className="whatsapp-pulse fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300" title="Chat on WhatsApp">
      <Icon icon="mdi:whatsapp" className="text-white text-2xl" />
    </a>
  );
}
