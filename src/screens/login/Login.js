import React, {useState} from 'react';

// constants
import strings from '../../constants/lang';

// custom components
import Header from '../../components/Header';
import TextinputWithLable from '../../components/TextinputWithLable';
import WrapperContainer from '../../components/WrapperContainer';

const Login = () => {
  // instead of declaring multiple states for mulitple things, i am declaring one state for all purposes
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true,
  });
  // destructuring above state
  // if we do not destructure then we have to access these like this state.email etc
  const {isLoading, email, password, isSecure} = state;
  const updateState = data => setState(state => ({...state, ...data}));

  return (
    <WrapperContainer isLoading={isLoading}>
      <Header />
      <TextinputWithLable
        label={strings.USERNAME_OR_EMAIL}
        placeholder={strings.PLEASE_ENTER_YOUR_EMAIL}
        value={email}
        onChangeText={email => updateState({email})}
      />
      <TextinputWithLable
        label={strings.PASSWORD}
        placeholder={strings.PLEASE_ENTER_YOUR_PASSWORD}
        value={password}
        onChangeText={password => updateState({password})}
        secureTextEntry={isSecure}
        isSecure={isSecure}
        onPressSecure={() => updateState({isSecure: !isSecure})}
      />
    </WrapperContainer>
  );
};

export default Login;
