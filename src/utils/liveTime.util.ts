import ViwerModel from "../model/viwer.model";

export async function creditCurrentViewers() {
  try {
    const viwer = new ViwerModel();
    const viwersList = await viwer.getCurrentViwersOnLive();

    await asyncForEach(viwersList, async (viwerTag) => {
      await viwer.setViwerWallet(viwerTag, 1);
      await viwer.setViwerTime(viwerTag, 1);
    });
  } catch (e) {
    console.log(e);
  }
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
