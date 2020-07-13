import ViwerModel from "../model/viwer.model";
export async function timeInLive(params) {
  return `Você já assistiu um total de ${await new ViwerModel().getTimeInLive(params.viwerName)} minutos. Achavo que é bem pouco u.u !`;
}
