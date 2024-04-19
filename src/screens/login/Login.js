import React, {useState} from 'react';

// constants
import strings from '../../constants/lang';

// custom components
import Header from '../../components/Header';
import TextinputWithLable from '../../components/TextinputWithLable';
import WrapperContainer from '../../components/WrapperContainer';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';
import BtnComp from '../../components/BtnComp';
import {moderateScale} from '../../styles/responsiveSize';

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
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
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
          btnText={strings.LOGIN}
          btnStyle={styles.btnStyle}
          textStyle={styles.textStyle}
        />
      </View>
    </WrapperContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  forgotTextStyle: {
    ...commonStyles.fontSize12,
    color: colors.blue,
  },
  btnStyle: {
    borderRadius: moderateScale(54),
    height: moderateScale(48),
    backgroundColor: colors.blackOpacity20,
    marginHorizontal: moderateScale(34),
  },
  textStyle: {
    ...commonStyles.fontSize14,
    color: colors.white,
    textTransform: 'none',
  },
});
