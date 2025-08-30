import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ImageSourcePropType, StyleSheet, View } from "react-native";

import Button from '@/components/Button';
import CircleButton from '@/components/CircleButton';
import EmojiList from '@/components/EmojiList';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiSticker from '@/components/EmojiSticker';
import IconButton from '@/components/IconButton';
import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const pickImageAsync = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled){
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  }

const onReset = () => {
  setShowAppOptions(false);
  setPickedEmoji(undefined);
  setSelectedImage(undefined);
};

const onAddSticker = () => {
  setIsModalVisible(true);
};

const onModalClose = () => {
  setIsModalVisible(false);
};

const onSaveImageAsync = async () => {};


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceholderImage} selectedImage={selectedImage}/>
        {showAppOptions && pickedEmoji && <EmojiSticker imageSize={30} stickerSource={pickedEmoji}/>}
      </View>
      {showAppOptions ? (
          <View style={styles.optionsRow}>
           <IconButton icon="refresh" label="Reset" onPress={onReset}/>
           <CircleButton onPress={onAddSticker}/>
           <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync}/>
          </View>
        ) : 
      ( <View style={styles.footerContainer}>
         <Button label='Choose a photo' theme='primary' onPress={pickImageAsync}/>
         <Button label='Use this photo' onPress={() => setShowAppOptions(true)}/>
      </View>)}
     <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
      <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose}/>
     </EmojiPicker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    flexDirection: "column",
  },
  imageContainer: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  optionsRow: {
    position: 'absolute',
    bottom: 8, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
  }
});
