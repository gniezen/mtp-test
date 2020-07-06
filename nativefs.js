document.addEventListener('DOMContentLoaded', event => {
  const butDir = document.getElementById('butDirectory');
  butDir.addEventListener('click', async (e) => {
    const opts = {type: 'open-directory'};
    const handle = await window.chooseFileSystemEntries(opts);
    const entries = await handle.getEntries();
    for await (const entry of entries) {
      const kind = entry.isFile ? 'File' : 'Directory';
      console.log(kind, entry.name);
    }
  });
});
