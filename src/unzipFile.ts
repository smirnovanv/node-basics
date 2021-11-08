import unzipper from 'unzipper';

export const unzipFile = (path: string, fileName: string, fsLike) => {
  try {
    fsLike.createReadStream(`${path}/${fileName}`).pipe(unzipper.Extract({ path: path }));
  } catch (error) {
    console.error(error);
  }
};
