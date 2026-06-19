const { OfflineCompiler } = require('@zenith-xperience/mindar-offline-compiler');
const fs = require('fs');
const { loadImage } = require('canvas');

async function run() {
  try {
    const compiler = new OfflineCompiler();
    const image = await loadImage('atomic-habits-cover.png');
    await compiler.compileImageTargets([image], console.log);
    const buffer = compiler.exportData();
    fs.writeFileSync('atomic-habits-cover.mind', buffer);
    console.log('Compilation done');
  } catch (err) {
    console.error(err);
  }
}
run();
