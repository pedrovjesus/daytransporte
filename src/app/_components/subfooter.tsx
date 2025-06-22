import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export function SubFooter() {
  const socials = [
    { id: 1, titulo: "Instagram", link: "#", icon: InstagramLogoIcon },
    { id: 2, titulo: "Facebook", link: "#", icon: FacebookLogoIcon },
    { id: 3, titulo: "Linkedin", link: "#", icon: LinkedinLogoIcon },
  ];
  return (
    <div className="flex text-center text-black bg-white flex-col w-[100%] h-auto sm:h-[4.5rem] justify-center">
      <h1>2025 Day Transportes &copy; Todos os direitos reservados. </h1>
      <ul className="flex justify-center gap-4 mt-2">
        {socials.map((item) => {
          const Icon = item.icon; // <- Pegamos o componente e colocamos em maiúscula
          return (
            <li key={item.id}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Icon className="w-5 h-5 text-black hover:text-yellow-300 transition-colors" />
              </a>
            </li>
          );
        })}
      </ul>
      <h2 className="text-sm mt-2">
        Desenvolvido por{" "}
        <strong className="text-yellow-300">
          <a
            href="https://github.com/pedrovjesus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedro Jesus
          </a>
        </strong>
      </h2>
    </div>
  );
}
