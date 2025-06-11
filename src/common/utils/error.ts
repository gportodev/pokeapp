import { Alert } from 'react-native';

function handleErrorFeedback(error: unknown, title: string, message: string) {
  console.log(error);

  return Alert.alert(title, message);
}

export { handleErrorFeedback };
