// import * as FileSystem from 'expo-file-system/legacy';
import { Directory, File, Paths } from 'expo-file-system';

async function saveImage(imageUrl: string, imageName: string) {
  if (!imageUrl && !imageName) return;

  const destination = new Directory(Paths.document, imageName);

  // Define the path where the image will be saved
  // const fileUri = `${FileSystem.documentDirectory}${imageName}.png`;

  try {
    destination.create();

    const { uri } = await File.downloadFileAsync(imageUrl, destination);

    // Download the image
    // const downloadResumable = FileSystem.createDownloadResumable(
    //   imageUrl,
    //   fileUri,
    // );

    // const { uri } = await downloadResumable.downloadAsync();
    // console.log('Finished downloading to ', uri);
    // Return the local URI for future use

    return uri;
  } catch (error) {
    console.log('Pokemon: ' + imageName);
    console.log('Error: ' + JSON.stringify(error, undefined, 2));

    return null;
  }
}

export { saveImage };
