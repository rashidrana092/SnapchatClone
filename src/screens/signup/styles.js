import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import fontFamily from '../../styles/fontFamily';

const styles = StyleSheet.create({
  forgotTextStyle: {
    ...commonStyles.fontSize12,
    color: colors.blue,
  },
  headingText: {
    ...commonStyles.fontSize14,
    fontFamily: fontFamily.medium,
    alignSelf: 'center',
    marginBottom: moderateScaleVertical(34),
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

export default styles;
