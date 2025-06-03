export function Footer() {
  return (
    <div className="flex flex-col w-[100%] h-[4.5rem] justify-center">
      <h1>Copyright © Day Transportes.</h1>
      <h2 className="text-sm">
        Desenvolvido por{" "}
        <strong className="text-red-400">
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
