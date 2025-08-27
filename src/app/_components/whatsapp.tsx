import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function WhatsappIcon() {
  return (
    <div className="fixed z-50 right-7 bottom-7 cursor-pointer">
      <a
        href="https://api.whatsapp.com/send?phone=5519988888102&text=Ol%C3%A1,%20vim%20pelo%20site"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block"
      >
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow-md">
          1
        </span>
        <WhatsappLogoIcon className="w-20 h-20 text-green-500" />
      </a>
    </div>
  );
}
