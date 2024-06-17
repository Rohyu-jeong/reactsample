import SNSButton from "./SNSButton/SNSButton";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <SNSButton SNSIcon={{Icon: FaApple}}  SNSName={{name:"Apple"}} SNSBackgroundColor="Apple" SNSColor="white" />
      <SNSButton SNSIcon={{Icon: FaFacebook}}  SNSName={{name:"Facebook"}} SNSBackgroundColor="Facebook" SNSColor="white" />
      <SNSButton SNSIcon={{Icon: FaGoogle}}  SNSName={{name:"Google"}} SNSBackgroundColor="Google" SNSColor="Gray" />
    </div>
  );
}

export default App;
