import Reactotron from "reactotron-react-native";

if (__DEV__) {
  const tron = Reactotron.configure({ host: "10.114.64.69" })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
