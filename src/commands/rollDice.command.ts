import ViwerModel from "../model/viwer.model";

export async function rollDice(params): Promise<string> {
  const sides = 20;
  const diceResult = Math.floor(Math.random() * sides) + 1;
  console.log(diceResult);
  await new ViwerModel().setViwerWallet(params.viwerName, diceResult);

  return "Você rolou um: " + diceResult.toString();
}
