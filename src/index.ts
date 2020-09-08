import * as tf from '@tensorflow/tfjs-core';
import * as draw from './draw';
import * as utils from './utils';
export { draw, utils, tf };

export * from './ageGenderNet/index';
export * from './classes/index';
export * from './dom/index'
export * from './env/index';
export * from './faceExpressionNet/index';
export * from './faceLandmarkNet/index';
export * from './faceRecognitionNet/index';
export * from './factories/index';
export * from './globalApi/index';
export * from './ops/index';
export * from './ssdMobilenetv1/index';
export * from './tinyFaceDetector/index';
export * from './tinyYolov2/index';
export * from './euclideanDistance';
export * from './NeuralNetwork';
export * from './resizeResults';

import * as pkg from '../package.json';
export const version = { faceapi: pkg.version, tfjs_core: tf.version_core, env: tf.ENV.getFlags() };
