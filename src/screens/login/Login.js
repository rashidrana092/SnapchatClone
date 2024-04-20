import React, {useState, useEffect} from 'react';

// constants
import strings from '../../constants/lang';

// custom components
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import BtnComp from '../../components/BtnComp';
import Header from '../../components/Header';
import TextinputWithLable from '../../components/TextinputWithLable';
import WrapperContainer from '../../components/WrapperContainer';
import styles from './styles';
import colors from '../../styles/colors';

const Login = () => {
  // instead of declaring multiple states for mulitple things, i am declaring one state for all purposes
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    isSecure: true,
    isEnable: false,
  });
  // destructuring above state
  // if we do not destructure then we have to access these like this state.email etc
  const {isLoading, email, password, isSecure, isEnable} = state;
  const updateState = data => setState(state => ({...state, ...data}));

  useEffect(() => {
    if (email !== '' && password !== '') {
      updateState({isEnable: true});
      return;
    }
    updateState({isEnable: false});
  }, [email, password]);

  const onLogin = () => {
    Alert.alert('login button clicked');
  };

  return (
    <WrapperContainer isLoading={isLoading}>
      <Header />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.headingText}>{strings.LOGIN}</Text>

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

          <TouchableOpacity style={{alignSelf: 'center'}}>
            <Text style={styles.forgotTextStyle}>
              {strings.FORGOT_YOUR_PASSWORD}
            </Text>
          </TouchableOpacity>
        </View>

        <BtnComp
          isDisable={!isEnable}
          btnText={strings.LOGIN}
          btnStyle={{
            ...styles.btnStyle,
            backgroundColor: isEnable ? colors.blue : colors.blackOpacity20,
          }}
          textStyle={styles.textStyle}
          onPress={onLogin}
        />
      </View>
    </WrapperContainer>
  );
};

export default Login;
