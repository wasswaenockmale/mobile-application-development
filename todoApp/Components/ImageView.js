import {Image, StyleSheet} from 'react-native';

const ImageView = (props) => {
    return(
        <Image source={props.imageURL} style={style.image}/>
    );
}

const style = StyleSheet.create({
    image:{
        height: 50,
        width: 50,
    }
});

export default ImageView;