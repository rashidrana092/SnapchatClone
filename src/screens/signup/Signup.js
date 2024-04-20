// import libraries
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// constants
import strings from '../../constants/lang';
import styles from './styles';

// custom components
import BtnComp from '../../components/BtnComp';
import Header from '../../components/Header';
import TextinputWithLable from '../../components/TextinputWithLable';
import WrapperContainer from '../../components/WrapperContainer';

const Signup = () => {
  // instead of declaring multiple states for mulitple things, i am declaring one state for all purposes
  const [state, setState] = useState({
    isLoading: false,
    firstName,
    lastName,
    userName,
    email: '',
    password: '',
    isSecure: true,
  });
  // destructuring above state
  // if we do not destructure then we have to access these like this state.email etc
  const {isLoading, firstName, lastName, userName, email, password, isSecure} =
    state;
  const updateState = data => setState(state => ({...state, ...data}));
  const onSignup = () => {
    console.log('first');
  };

  return (
    <WrapperContainer isLoading={isLoading}>
      <Header />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.headingText}>{strings.CREATE_YOUR_ACCOUNT}</Text>

          <TextinputWithLable
            label={strings.FIRST_NAME}
            placeholder={strings.ENTER_YOUR_FIRST_NAME}
            value={firstName}
            onChangeText={firstName => updateState({firstName})}
          />

          <TextinputWithLable
            label={strings.LAST_NAME}
            placeholder={strings.ENTER_YOUR_FIRST_NAME}
            value={lastName}
            onChangeText={text => updateState({lastName: text})}
            // onChangeText text is parameter. if stat name and parameter name is different then we have to write like i write on above line. if parameter and state name is same then we will write like i like in other textinputs.
          />

          <TextinputWithLable
            label={strings.USER_NAME}
            placeholder={strings.ENTER_YOUR_USER_NAME}
            value={userName}
            onChangeText={userName => updateState({userName})}
          />

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
          btnText={strings.SIGNUP_AND_ACCEPT}
          btnStyle={styles.btnStyle}
          textStyle={styles.textStyle}
          onPress={onSignup}
        />
      </View>
    </WrapperContainer>
  );
};

export default Signup;
