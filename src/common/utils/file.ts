import * as FileSystem from 'expo-file-system';

async function saveImage(imageUrl: string, imageName: string) {
  try {
    // Define the path where the image will be saved
    const fileUri = `${FileSystem.documentDirectory}${imageName}.png`;

    // Download the image
    const downloadResumable = FileSystem.createDownloadResumable(
      imageUrl,
      fileUri,
    );

    const { uri } = await downloadResumable.downloadAsync();

    return uri; // Return the local URI for future use
  } catch (error) {
    return null;
  }
}

export { saveImage };
