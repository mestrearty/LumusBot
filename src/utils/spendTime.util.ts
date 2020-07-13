import ViwerModel from "../model/viwer.model";
export async function spendTime(
  params: { viwerName, message?, commandMessage? },
  commandObject: { currency; commandFunction }
) {
  const viwer = await (<any>new ViwerModel().getViwer(params.viwerName));
  let newBalance = viwer.wallet - commandObject.currency;

  if (newBalance >= 0) {
    const msg = await commandObject.commandFunction(params);
    newBalance = await new ViwerModel().setViwerWallet(
      params.viwerName,
      -commandObject.currency
    );
    return `${msg}! Saldo Atual: P$ ${newBalance}`;
  }
  return `Você não possui créditos suficiente! P$ ${viwer.wallet}`;
}
