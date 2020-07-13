const say = require("say");

export async function playText(params): Promise<string> {
  // Use default system voice and speed.
  console.log(params)
  await say.speak(`${params.viwerName} diz: ${params.message}`, 0.8);

  return "Falando...";
}
