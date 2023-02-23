import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import Tile from './components/tile';
import Markdown from 'react-native-markdown-display';

const MyApp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const ktext = `# JOB ANDROID

  - Circle CI integration 
  - Config.yml CircleCI 
  - FastLane integration 
  - FastLane config 
  - Fastlane app build generation 
  - Fastlane app build upload 
  - Firebase Distribution 

  #Final .yml File
  \`\`\` yaml
  version: 2.1
jobs:
  android:
    working_directory: ~/ci_cd_reactnative
    docker:
      - image: reactnativecommunity/react-native-android
    steps:
      - checkout
      - run: npx envinfo
      - run: yarn install
      # daemon mode has bug on circleCI
      # - run: cd android && chmod +x gradlew && ./gradlew --no-daemon bundleRelease assembleRelease

      # FASTLANE commands
      - run: gem install fastlane -NV
      - run: cd android && fastlane build_release_apk

      # Firebase commands
      - run:
          name: 'Install Firebase CLI'
          command: |
            curl -sL firebase.tools | bash
      # - run:
      #     command: fastlane add_plugin firebase_app_distribution
      # - run: 'rvm install 2.2.5 && rvm use 2.2.5'
      # - run:
      - run: cd android && fastlane add_plugin firebase_app_distribution
      - run:
          name: Deploy build to Firebase App Distribution
          command: cd android &&  fastlane deploy_firebase
          # command: cd androiod && build exec fastlane deploy_firebase env:development

      - run: cd android/app/build/outputs/apk/release && ls && pwd
      - store_artifacts:
          path: android/app/build/outputs/bundle/release
          destination: release-aab/
      - store_artifacts:
          path: android/app/build/outputs/apk/release
          destination: release-apk/

workflows:
  version: 2
  build_and_test:
    jobs:
      - android
  \`\`\`

   Contact \`Afroz Shaikh\` for more



 # JOB IOS

  `;

  return (
    <View style={styles.background}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>CI CD MOBILE</Text>
      </View>

      <View style={styles.items}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Tile text={'Circle CI integration'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Tile text={'Config.yml CircleCI'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Tile text={'FastLane integration'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Tile text={'FastLane config'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Tile text={'Fastlane app build generation'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Tile text={'Fastlane app build upload'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Tile text={'Firebase  Distribution'} />
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible} animationType={'slide'}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.modalTitle}>Modal Title</Text>
          </TouchableOpacity>

          <ScrollView style={styles.modalScrollView}>
            <Markdown style={styles.modalText}>{ktext}</Markdown>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  items: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 20,
    height: '100%',
    marginTop: 80,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  modalScrollView: {
    flex: 1,
    paddingHorizontal: 20,
    height: '100%',
  },
  modalBackground: {
    backgroundColor: 'white',
    position: 'absolute',

    left: 0,
    bottom: 0,
    right: 0,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    // fontSize: 16,
  },
});

export default MyApp;
