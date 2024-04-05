export function Footer() {
  return (
    <div className="bg-white flex flex-col items-center border-t border-slate-200 w-full py-3 mt-7">
      <div className="flex flex-col items-center space-y-4">
        <img
          src={"images/logo.svg"}
          alt="Logo"
          width={"180px"}
          height={"180px"}
        />
        <span className="text-base text-[#9A9A9A] text-left max-w-96">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          facilis officiis architecto tenetur dignissimos earum corrupti dicta
          voluptates cumque beatae illum culpa suscipit, fugit debitis?
          Consequatur ab quod asperiores quam!
        </span>
        <div className="flex space-x-4 items-center">
          <h3 className="font-bold text-base">Formas de pagamento</h3>
          <img
            src={"images/payment.png"}
            alt="Cartões de pagamento"
            width={"200px"}
            height={"200px"}
          />
        </div>
        <span className="text-center text-sm text-[#9A9A9A]">
          Copyright @2024 - Todos os direitos reservados.
        </span>
      </div>
    </div>
  );
}
