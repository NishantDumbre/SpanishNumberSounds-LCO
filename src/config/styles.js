import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'dodgerblue',
    width: wp(40),
    marginVertical: hp(1.5),
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(17),
    elevation: hp(1),
    borderRadius: hp(5),
    borderWidth: 1,
    borderColor: 'red',
  },

  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },

  logo: {
    alignSelf: 'center',
    marginTop: hp(2),
  },

  text: {
    fontSize: hp(4.4),
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffff',
    marginVertical: hp(1),
  },
});

export default styles;
